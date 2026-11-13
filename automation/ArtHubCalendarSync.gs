/**
 * ArtHub OS v0.1 — sync approved event bookings to existing Google Calendars.
 * BOUND TO: ArtHub OS — Threads | редакционный календарь
 * Does not publish social posts, modify website, invite guests, or send email.
 *
 * Install once in the bound Google Sheet: Extensions → Apps Script,
 * paste this file, run installArthubTriggers(), grant Google permissions.
 * Uses spreadsheet's Events ("События") sheet.
 */
const ARTHUB = Object.freeze({
  sheetName: "События",
  timezone: "Asia/Tbilisi",
  rooms: ["Мастерская", "Зал", "Театр", "Кухня", "Коворкинг", "Выставки | ArtHub"],
  columns: {
    id: 1, name: 2, date: 3, time: 4, description: 10,
    url: 11, lang: 17, approval: 18, room: 19,
    duration: 20, calendarId: 21, result: 22
  }
});

function installArthubTriggers() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss.getSheetByName(ARTHUB.sheetName)) {
    throw new Error("Не найдена вкладка «События».");
  }
  ScriptApp.getProjectTriggers().forEach(trigger => {
    if (["onArthubEdit", "syncApprovedArthubEvents"].includes(trigger.getHandlerFunction())) {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  ScriptApp.newTrigger("onArthubEdit").forSpreadsheet(ss).onEdit().create();
  ScriptApp.newTrigger("syncApprovedArthubEvents").timeBased().everyMinutes(15).create();
  ss.toast("ArtHub OS: проверка подтверждённых бронирований включена");
}

function onArthubEdit(e) {
  if (!e || !e.range || e.range.getSheet().getName() !== ARTHUB.sheetName) return;
  if (e.range.getRow() < 2) return;
  // Avoid touching unrelated edits, imported row changes or more than 20 rows in one call.
  if (e.range.getColumn() > ARTHUB.columns.result || e.range.getLastRow() - e.range.getRow() > 19) return;
  const lock = LockService.getDocumentLock();
  if (!lock.tryLock(10000)) return;
  try {
    for (let row = e.range.getRow(); row <= e.range.getLastRow(); row++) {
      syncArthubRow_(e.range.getSheet(), row);
    }
  } finally { lock.releaseLock(); }
}

function syncApprovedArthubEvents() {
  const lock = LockService.getDocumentLock();
  if (!lock.tryLock(10000)) return;
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ARTHUB.sheetName);
    if (!sheet) throw new Error("Нет вкладки «События»");
    for (let row = 2; row <= Math.min(sheet.getLastRow(), 250); row++) {
      const approval = String(sheet.getRange(row, ARTHUB.columns.approval).getDisplayValue()).trim();
      if (approval === "Подтверждено") syncArthubRow_(sheet, row);
    }
  } finally { lock.releaseLock(); }
}

function syncArthubRow_(sheet, row) {
  const values = sheet.getRange(row, 1, 1, ARTHUB.columns.result).getDisplayValues()[0];
  const v = n => String(values[n - 1] || "").trim();
  const approval = v(ARTHUB.columns.approval);
  if (approval !== "Подтверждено") return; // Drafts must never book rooms.
  const eventId = v(ARTHUB.columns.id);
  const name = v(ARTHUB.columns.name);
  const date = v(ARTHUB.columns.date);
  const time = v(ARTHUB.columns.time);
  const roomName = v(ARTHUB.columns.room);
  const durationText = v(ARTHUB.columns.duration);
  if (!eventId || !name || !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !/^\d{1,2}:\d{2}$/.test(time) ||
      !ARTHUB.rooms.includes(roomName) || !/^\d+$/.test(durationText)) {
    setStatus_(sheet, row, "Нужны ID, дата, время, помещение и длительность в минутах");
    return;
  }
  const duration = Number(durationText);
  if (duration < 15 || duration > 1440) {
    setStatus_(sheet, row, "Длительность должна быть от 15 до 1440 минут");
    return;
  }
  const calendars = CalendarApp.getAllCalendars().filter(c => c.getName() === roomName);
  if (calendars.length !== 1) {
    setStatus_(sheet, row, "Календарь помещения не найден однозначно: " + roomName);
    return;
  }
  const calendar = calendars[0];
  if (!calendar.isOwnedByMe()) {
    // More conservative than checking writable permissions; all current room calendars are owned.
    setStatus_(sheet, row, "Нет прав владельца на календарь: " + roomName);
    return;
  }
  // Georgia uses UTC+04:00 throughout the year.
  const start = new Date(date + "T" + time.padStart(5, "0") + ":00+04:00");
  const end = new Date(start.getTime() + duration * 60000);
  if (isNaN(start.getTime())) {
    setStatus_(sheet, row, "Неверная дата/время");
    return;
  }
  let entry = null;
  const existingId = v(ARTHUB.columns.calendarId);
  if (existingId) {
    entry = calendar.getEventById(existingId);
    if (!entry) {
      setStatus_(sheet, row, "Прежняя запись не найдена в выбранном календаре; проверьте перенос помещения");
      return;
    }
  }
  const conflicts = calendar.getEvents(start, end).filter(x => !entry || x.getId() !== entry.getId());
  if (conflicts.length) {
    setStatus_(sheet, row, "КОНФЛИКТ: помещение занято; бронирование не изменено");
    return;
  }
  const description = ["ArtHub OS ID: " + eventId,
    "Язык: " + v(ARTHUB.columns.lang),
    v(ARTHUB.columns.description),
    v(ARTHUB.columns.url)].filter(Boolean).join("\n\n");
  const title = name + " — ArtHub";
  if (entry) {
    entry.setTitle(title);
    entry.setTime(start, end);
    entry.setDescription(description);
    entry.setLocation("172 Davit Aghmashenebeli Ave, Tbilisi, Georgia");
  } else {
    entry = calendar.createEvent(title, start, end, {
      description: description,
      location: "172 Davit Aghmashenebeli Ave, Tbilisi, Georgia"
    });
    sheet.getRange(row, ARTHUB.columns.calendarId).setValue(entry.getId());
  }
  setStatus_(sheet, row, "Синхронизировано: " + Utilities.formatDate(new Date(), ARTHUB.timezone, "yyyy-MM-dd HH:mm"));
}

function setStatus_(sheet, row, status) {
  sheet.getRange(row, ARTHUB.columns.result).setValue(status);
}

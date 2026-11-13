/**
 * ArtHub OS · Public events feed v0.1.
 * ADD as a NEW file (PublicEventsFeed.gs) in existing bound Apps Script project.
 * Keep ArtHubCalendarSync.gs unchanged.
 *
 * PUBLIC ENDPOINT: execute as owner, Anyone.
 * Deliberately exposes ONLY explicitly approved public event fields.
 * Uses a fixed JSONP callback for the static Cloudflare website.
 * Never return private editor notes, contact details, customer data,
 * internal Tasks/Calendar IDs or draft event details.
 */
function doGet(e) {
  try {
    const events = getArthubPublicEvents_();
    const safe = JSON.stringify({version: 1, events: events, generatedAt: new Date().toISOString()})
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e")
      .replace(/&/g, "\\u0026")
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029");
    // Fixed, non-user-controlled callback: don't allow arbitrary JSONP calls.
    return ContentService.createTextOutput("window.arthubReceiveEvents(" + safe + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } catch (error) {
    // Do not reveal internal sheet values or stack traces to public visitors.
    return ContentService.createTextOutput("window.arthubReceiveEvents({version:1,events:[],error:true});")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}
function getArthubPublicEvents_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("События");
  if (!sheet) throw new Error("Missing Events sheet");
  const end = Math.min(sheet.getLastRow(), 301);
  if (end < 2) return [];
  const values = sheet.getRange(2, 1, end - 1, 25).getDisplayValues();
  const result = [];
  const ids = new Set();
  values.forEach(function(row) {
    const str = i => String(row[i] || "").trim();
    const id = str(0), titleRu = str(1), date = str(2), time = str(3);
    const descriptionRu = str(9), url = str(10), language = str(16);
    const publication = str(22), titleEn = str(23), descriptionEn = str(24);
    if (publication !== "Опубликовать") return;
    if (!/^E[0-9]{3,5}$/.test(id) || ids.has(id)) return;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) return;
    if (!titleRu || !titleEn || !descriptionRu || !descriptionEn) return;
    // Both languages are required. Booking approval and publishing approval are independent.
    const safeUrl = /^https:\/\//.test(url) ? url : "https://instagram.com/arthub.tbilisi";
    ids.add(id);
    result.push({
      id: id,
      title: {ru: titleRu.slice(0, 140), en: titleEn.slice(0, 140)},
      description: {ru: descriptionRu.slice(0, 1400), en: descriptionEn.slice(0, 1400)},
      date: date,
      time: time,
      language: language.slice(0, 100),
      price: str(7).slice(0, 80),
      format: str(6).slice(0, 100),
      url: safeUrl,
      venue: str(18).slice(0, 80)
    });
  });
  return result.slice(0, 100);
}
/** Manual no-public-write test in Apps Script execution log. */
function previewPublicEvents() {
  const list = getArthubPublicEvents_();
  console.log("Public events count: " + list.length);
  console.log("Approved public IDs: " + list.map(x=>x.id).join(", "));
}

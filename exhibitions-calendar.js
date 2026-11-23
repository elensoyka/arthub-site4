(() => {
  const weeks = document.getElementById('exhibitionWeeks');
  const scheduleStatus = document.getElementById('exhibitionSyncStatus');
  const current = document.getElementById('current-exhibition');
  const upcoming = document.getElementById('upcoming-exhibitions');
  const archive = document.getElementById('exhibition-archive-list');
  if (!weeks && !current) return;

  const lang = document.documentElement.lang;
  const translate = (ru, en, ka) => lang === 'en' ? en : lang === 'ka' ? ka : ru;
  const locale = translate('ru-RU', 'en-GB', 'ka-GE');
  const dates = new Intl.DateTimeFormat(locale, {day: 'numeric', month: 'short', timeZone: 'UTC'});
  const calendarApi = 'https://arthub-calendar-test.elensoyka.workers.dev/api/exhibitions';
  const localParts = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit',
    hourCycle: 'h23', timeZone: 'Asia/Tbilisi'
  }).formatToParts();
  const {year, month, day, hour} = Object.fromEntries(localParts.map(p => [p.type, p.value]));
  const today = `${year}-${month}-${day}`;
  const galleryDay = hour < '14' ? addDays(today, -1) : today;

  const approvedWeeks = new Map([
    ['2026-11-27', 'booked'], ['2026-12-04', 'available'], ['2026-12-11', 'booked'],
    ['2026-12-18', 'booked'], ['2026-12-25', 'unverified'], ['2027-01-01', 'unverified'],
    ['2027-01-08', 'available'], ['2027-01-15', 'available'], ['2027-01-22', 'available'],
    ['2027-01-29', 'available']
  ]);

  const known = [
    {
      start: '2026-10-17', end: '2026-10-24', until: '2026-10-23',
      title: 'Rebirth of the Soul', poster: '/rebirth-gallery-full.jpg',
      note: translate('Групповая выставка девяти авторов: живопись, фотография, видеоарт и пластика.', 'Group exhibition by nine artists working in painting, photography, video and sculpture.', 'ცხრა ხელოვანის ჯგუფური გამოფენა: ფერწერა, ფოტოგრაფია, ვიდეოარტი და ქანდაკება.')
    },
    {
      start: '2026-10-23', end: '2026-10-31', until: '2026-10-30',
      title: 'Light Inside', poster: '/light-inside-gallery-full.jpg',
      note: translate('Евгения Родина (goba) — живопись, керамика, папье-маше и инсталляции.', 'Evgenia Rodina (goba) — painting, ceramics, papier-mâché and installations.', 'ევგენია როდინა (goba) — ფერწერა, კერამიკა, პაპიე-მაშე და ინსტალაციები.')
    },
    {
      start: '2026-11-06', end: '2026-11-13', until: '2026-11-12',
      title: translate('Выставка живописи Фёдора Дыдыкина', 'Fedor Dydykin — Painting Exhibition', 'ფიოდორ დიდიკინის ფერწერის გამოფენა'),
      poster: '/fedor-dydykin-poster.jpg'
    },
    {
      start: '2026-11-13', end: '2026-11-20', until: '2026-11-19',
      title: 'ELSE — Lera & Lora', poster: '/exhibition-else-2026.png',
      note: translate('Фотовыставка Леры и Лоры — два взгляда на один город.', 'A photography exhibition by Lera and Lora — two perspectives on one city.', 'ლერასა და ლორას ფოტოგამოფენა — ორი ხედვა ერთ ქალაქზე.')
    },
    {
      start: '2026-11-20', end: '2026-11-27', until: '2026-11-26',
      title: 'Drawing in Circles', poster: '/exhibition-drawing-in-circles-2026.jpg',
      note: translate('Выставка набросков с натуры.', 'An exhibition of life sketches.', 'ნატურიდან შესრულებული ჩანახატების გამოფენა.')
    }
  ];

  function addDays(date, days) {
    const parsed = new Date(date + 'T12:00:00Z');
    parsed.setUTCDate(parsed.getUTCDate() + days);
    return parsed.toISOString().slice(0, 10);
  }

  function format(date) {
    return dates.format(new Date(date + 'T12:00:00Z'));
  }

  function element(tag, content, className) {
    const node = document.createElement(tag);
    if (content) node.textContent = content;
    if (className) node.className = className;
    return node;
  }

  function publicTitle(event) {
    const text = lang === 'en' ? event.title_en || event.title_ru : event.title_ru || event.title_en;
    return (text || '').split(/\n|<br\s*\/?>/i)[0].replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim();
  }

  function showCard(item) {
    const card = element('article', '', 'ah-show-card');
    if (item.poster) {
      const image = element('img', '', 'ah-show-poster');
      image.src = item.poster;
      image.alt = item.title;
      image.loading = 'lazy';
      card.append(image);
    }
    const copy = element('div');
    copy.append(element('p', format(item.start) + ' — ' + format(item.until), 'ah-show-date'));
    copy.append(element('h3', item.title));
    if (item.note) copy.append(element('p', item.note));
    card.append(copy);
    return card;
  }

  function render(events, connected) {
    const listings = new Map(known.map(item => [item.start, item]));
    for (const event of events) {
      if (event.type !== 'exhibition' || !event.start || !event.end) continue;
      const start = event.start.slice(0, 10);
      const end = event.end.slice(0, 10);
      const title = publicTitle(event);
      if (title && !listings.has(start)) listings.set(start, {start, end, until: addDays(end, -1), title});
    }

    if (current && upcoming && archive) {
      const all = [...listings.values()].sort((a, b) => a.start.localeCompare(b.start));
      const active = all.filter(item => item.start <= galleryDay && galleryDay < item.end);
      const next = all.filter(item => item.start > galleryDay);
      current.replaceChildren(...(active.length ? active.map(showCard)
        : [element('p', translate('Текущая выставка пока не объявлена.','No current exhibition has been announced.','მიმდინარე გამოფენა ჯერ არ გამოცხადებულა.'))]));
      upcoming.replaceChildren(...(next.length ? next.slice(0, 3).map(showCard)
        : [element('p', translate('Анонс следующей выставки готовится.','The next exhibition announcement is forthcoming.','შემდეგი გამოფენის ანონსი მზადდება.'))]));
      archive.replaceChildren(...all.filter(item => item.end <= galleryDay).reverse().map(showCard));
    }

    if (!weeks) return;
    const offset = (new Date(today + 'T12:00:00Z').getUTCDay() - 5 + 7) % 7;
    const first = addDays(today, -offset);
    const nodes = [];
    for (let index = 0; index < 12; index += 1) {
      const start = addDays(first, index * 7);
      const end = addDays(start, 7);
      const overlaps = events.some(e => e.type !== 'exhibition-opening' && e.start && e.end
        && e.start.slice(0, 10) < end && e.end.slice(0, 10) > start);
      const named = listings.get(start);
      const state = approvedWeeks.get(start) || (overlaps || named ? 'booked' : connected ? 'available' : 'unverified');
      const captions = {
        booked: translate('Занято', 'Booked', 'დაკავებულია'),
        available: translate('Свободно', 'Available', 'თავისუფალია'),
        unverified: translate('Уточняется', 'To be confirmed', 'ზუსტდება')
      };
      const slot = element('div', '', 'week-slot ' + state);
      slot.dataset.weekStart = start;
      slot.append(element('span', format(start) + ' — ' + format(end)));
      slot.append(element('strong', captions[state]));
      if (named && state === 'booked') slot.append(element('span', named.title));
      nodes.push(slot);
    }
    weeks.replaceChildren(...nodes);
    if (scheduleStatus) scheduleStatus.textContent = translate(
      'Перед бронированием подтвердите даты у ArtHub.',
      'Confirm dates with ArtHub before booking.',
      'დაჯავშნამდე თარიღები ArtHub-თან შეათანხმეთ.'
    );
  }

  render([], false);
  fetch(calendarApi, {cache: 'no-store'})
    .then(response => {
      if (!response.ok) throw Error('Calendar unavailable');
      return response.json();
    })
    .then(data => { if (Array.isArray(data.events)) render(data.events, true); })
    .catch(() => {});
})();

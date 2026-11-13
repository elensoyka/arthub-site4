/* ArtHub Alive · read-only public feed. No data from private sheets reaches visitors unless approved. */
(function () {
  'use strict';
  var feedUrl = window.ARTHUB_EVENTS_FEED_URL;
  if (!feedUrl || !/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(feedUrl)) return;
  var grid = document.querySelector('#events .cards');
  if (!grid) return;
  function element(tag, className, parent) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (parent) parent.appendChild(el);
    return el;
  }
  function localized(el, ru, en) {
    el.setAttribute('data-ru', ru);
    el.setAttribute('data-en', en);
    el.textContent = document.documentElement.lang === 'en' ? en : ru;
    return el;
  }
  function formatDate(date, time, locale) {
    var dt = new Date(date + 'T12:00:00Z');
    if (isNaN(dt.getTime())) return date + ' · ' + time;
    return new Intl.DateTimeFormat(locale, {weekday:'long', day:'numeric', month:'long', year:'numeric', timeZone:'UTC'}).format(dt) + ' · ' + time;
  }
  function languagePair(s) {
    var lower = String(s || '').toLowerCase();
    if (lower.indexOf('english') >= 0 && (lower.indexOf('рус') >= 0 || lower.indexOf('russian') >= 0))
      return ['Языки: русский и английский', 'Event languages: Russian & English'];
    if (lower.indexOf('english') >= 0 || lower.indexOf('англий') >= 0)
      return ['Язык: английский', 'Event language: English'];
    if (lower.indexOf('рус') >= 0 || lower.indexOf('russian') >= 0)
      return ['Язык: русский', 'Event language: Russian'];
    return ['Язык: ' + s, 'Event language: ' + s];
  }
  function render(ev) {
    if (!ev || !/^E\d{3,5}$/.test(String(ev.id)) || !ev.title || !ev.description) return;
    var existingIds = {E003:'puppet-history',E004:'puppet-making',E005:'pitch-night'};
    var nodeId = existingIds[ev.id] || 'event-' + ev.id.toLowerCase();
    var article = element('article','alive-card');
    article.id = nodeId;
    article.dataset.eventId = ev.id;
    var artwork = element('div','card-art',article);
    localized(element('span','',artwork),String(ev.title.ru||''),String(ev.title.en||''));
    var star = element('img','',artwork);
    star.src = '../arthub-star.svg';star.alt = '';
    var body = element('div','card-copy',article);
    localized(element('div','date',body),formatDate(ev.date,ev.time,'ru-RU'),formatDate(ev.date,ev.time,'en-GB'));
    var langs=languagePair(ev.language);
    localized(element('div','event-lang',body),langs[0],langs[1]);
    localized(element('h3','',body),String(ev.title.ru||''),String(ev.title.en||''));
    localized(element('p','',body),String(ev.description.ru||''),String(ev.description.en||''));
    var actions=element('div','actions',body);
    var link=localized(element('a','',actions),'Подробности / запись ↗','Details / booking ↗');
    link.href = /^https:\/\//.test(ev.url||'') ? ev.url : 'https://instagram.com/arthub.tbilisi';
    link.target='_blank';link.rel='noopener noreferrer';
    var price=element('span','price',actions);
    var p=String(ev.price||'').trim();
    var isDonation=/donation/i.test(p);
    localized(price,isDonation?'Вход — donation':p?p+' ₾':'По записи',isDonation?'Admission: donation':p?p+' GEL':'Booking required');
    var old=document.getElementById(nodeId);
    if (old) old.replaceWith(article); else grid.appendChild(article);
  }
  window.arthubReceiveEvents=function(payload) {
    if(!payload || payload.error || !Array.isArray(payload.events)) return;
    payload.events.forEach(render);
    if(typeof window.arthubApplyLang==='function') window.arthubApplyLang(document.documentElement.lang === 'en' ? 'en' : 'ru');
    grid.dataset.liveFeed='ok';
  };
  var script=document.createElement('script');
  script.src=feedUrl;
  script.async=true;
  script.referrerPolicy='no-referrer';
  document.head.appendChild(script);
})();

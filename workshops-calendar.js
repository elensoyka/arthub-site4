(()=>{
 const root=document.getElementById('workshopCalendarEvents'),status=document.getElementById('workshopCalendarStatus');if(!root||!status)return;
 const api='https://arthub-calendar-test.elensoyka.workers.dev/api/workshops';
 const lang=()=>document.documentElement.lang==='en'?'en':'ru';
 const create=(tag,c,t)=>{const e=document.createElement(tag);if(c)e.className=c;e.textContent=t;return e;};
 const draw=(events)=>{
  root.replaceChildren();
  const unique=new Set();const upcoming=events.filter(e=>e.start&&e.end&&new Date(e.end)>new Date()).filter(e=>{const key=e.start+'|'+e.end+'|'+e.title;if(unique.has(key))return false;unique.add(key);return true;}).slice(0,24);
  for(const e of upcoming){const card=create('article','workshop-calendar-item','');const dt=new Date(e.start);const date=new Intl.DateTimeFormat(lang()==='ru'?'ru-RU':'en-GB',{timeZone:'Asia/Tbilisi',weekday:'short',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'}).format(dt);card.append(create('time','',date),create('strong','',e.title));root.append(card);}
  status.textContent=upcoming.length?(lang()==='ru'?'Ближайшие занятия из календаря ArtHub. Запись — в Telegram.':'Upcoming classes from ArtHub Calendar. Book via Telegram.'):(lang()==='ru'?'Пока нет подтверждённых ближайших занятий. Уточните расписание в Telegram.':'No confirmed upcoming classes listed. Please ask on Telegram.');
 };
 fetch(api,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('calendar unavailable');return r.json()}).then(d=>{if(!Array.isArray(d.events))throw Error('invalid');draw(d.events)}).catch(()=>{status.textContent=lang()==='ru'?'Календарь временно недоступен. Уточните занятия в Telegram.':'Calendar temporarily unavailable. Please ask about classes on Telegram.';});
})();

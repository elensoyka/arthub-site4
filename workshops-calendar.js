(() => {
  const root=document.getElementById('workshopCalendarEvents');
  const status=document.getElementById('workshopCalendarStatus');
  if(!root||!status)return;
  const API='https://arthub-calendar-test.elensoyka.workers.dev/api/workshops';
  const zone='Asia/Tbilisi';
  let events=[],week=0,loaded=false;
  const en=()=>document.documentElement.lang==='en';
  const node=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e};
  const fmt=(d,opt)=>new Intl.DateTimeFormat(en()?'en-GB':'ru-RU',{timeZone:zone,...opt}).format(d);
  const dayKey=d=>new Intl.DateTimeFormat('en-CA',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d).filter(p=>p.type!=='literal').map(p=>p.value).join('-');
  const pkey=d=>{const a=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d).filter(p=>p.type!=='literal').map(p=>[p.type,p.value]));return a.year+'-'+a.month+'-'+a.day};
  function monday(i){const now=new Date(),base=new Date(pkey(now)+'T12:00:00Z');const day=base.getUTCDay();base.setUTCDate(base.getUTCDate()-((day+6)%7)+i*7);return base}
  const sameDay=(d,k)=>pkey(d)===k;
  function draw(){
    root.replaceChildren();
    if(!loaded)return;
    const start=monday(week),end=monday(week+1),weekEvents=events.filter(e=>new Date(e.start)>=new Date(start.toISOString().slice(0,10)+'T00:00:00+04:00')&&new Date(e.start)<new Date(end.toISOString().slice(0,10)+'T00:00:00+04:00'));
    const controls=node('div','workshop-week-controls');
    const prev=node('button','workshop-week-button','←');prev.type='button';prev.disabled=week===0;prev.setAttribute('aria-label',en()?'Previous week':'Предыдущая неделя');prev.onclick=()=>{week=Math.max(0,week-1);draw()};
    const label=node('strong','workshop-week-label',fmt(start,{day:'numeric',month:'short'})+' — '+fmt(new Date(end.getTime()-86400000),{day:'numeric',month:'short'}));
    const next=node('button','workshop-week-button','→');next.type='button';next.disabled=week>=5;next.setAttribute('aria-label',en()?'Next week':'Следующая неделя');next.onclick=()=>{week=Math.min(5,week+1);draw()};
    controls.append(prev,label,next);root.append(controls);
    const groups=node('div','workshop-day-groups');
    for(let n=0;n<7;n++){
      const d=new Date(start);d.setUTCDate(d.getUTCDate()+n);const key=d.toISOString().slice(0,10);
      const items=weekEvents.filter(e=>sameDay(new Date(e.start),key)).sort((a,b)=>a.start.localeCompare(b.start));
      if(!items.length)continue;
      const group=node('section','workshop-day-group');
      group.append(node('h4','workshop-day-heading',fmt(d,{weekday:'long',day:'numeric',month:'long'})));
      for(const e of items){
        const a=node('a','workshop-event-card');a.href='workshop.html?name='+encodeURIComponent(e.title);
        const tm=node('span','workshop-event-time',fmt(new Date(e.start),{hour:'2-digit',minute:'2-digit'})+'–'+fmt(new Date(e.end),{hour:'2-digit',minute:'2-digit'}));
        const name=node('strong','workshop-event-name',e.title);
        const arrow=node('span','workshop-event-arrow','↗');arrow.setAttribute('aria-hidden','true');
        a.append(tm,name,arrow);group.append(a);
      }groups.append(group);
    }
    if(!groups.childElementCount)groups.append(node('p','workshop-empty',en()?'No published classes this week. Ask us on Telegram.':'На эту неделю нет опубликованных занятий. Уточните в Telegram.'));
    root.append(groups);
    status.textContent=en()?'Select a week and tap a class to open its page.':'Выберите неделю и нажмите на занятие, чтобы открыть его страницу.';
  }
  fetch(API,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('offline');return r.json()}).then(d=>{
    if(!Array.isArray(d.events))throw Error('invalid');
    const seen=new Set();events=d.events.filter(e=>e.start&&e.end).filter(e=>{const key=e.start+'|'+e.end+'|'+e.title;if(seen.has(key))return false;seen.add(key);return true});
    loaded=true;draw();
  }).catch(()=>{status.textContent=en()?'Schedule is temporarily unavailable. Contact us on Telegram.':'Расписание временно недоступно. Напишите нам в Telegram.';});
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{if(loaded)draw()},0)));
})();
/* Live exhibition availability, reads sanitized data only; never assumes free when offline. */
(() => {
 const root=document.getElementById('exhibitionWeeks');
 const status=document.getElementById('exhibitionSyncStatus');
 if(!root || !status)return;
 const api='https://arthub-calendar-test.elensoyka.workers.dev/api/exhibitions';
 const format=(date)=>date.slice(8,10)+'.'+date.slice(5,7);
 const addDays=(date,n)=>{const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);};
 const locale=()=>document.documentElement.lang==='en'?'en':'ru';
 const el=(tag,cls,content)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(content!=null)x.textContent=content;return x;};
 const setStatus=(ru,en)=>{status.dataset.ru=ru;status.dataset.en=en;status.textContent=locale()==='en'?en:ru;};
 let cached=null;
 function render(){
   root.replaceChildren();
   // Verified booked weeks, kept visible even if the Calendar API is temporarily unavailable.
   // Unknown weeks are NEVER labelled available without live calendar confirmation.
   const knownBooked=[
     ['2026-11-06','2026-11-13','Фёдор Дыдыкин','Fedor Dydykin'],
     ['2026-11-13','2026-11-20','Лера и Лора — ELSE','Lera & Lora — ELSE'],
     ['2026-11-20','2026-11-27','Drawing in Circles','Drawing in Circles'],
     ['2026-11-27','2026-12-04','',''],
     ['2026-12-04','2026-12-11','',''],
     ['2026-12-11','2026-12-18','',''],
     ['2026-12-18','2026-12-25','',''],
     ['2026-12-25','2027-01-01','',''],
     ['2027-01-01','2027-01-08','','']
   ].map(([start,end,artist_ru,artist_en])=>({type:'exhibition-booking',start,end,artist_ru,artist_en}));
   const events=cached?cached.events:[];

   const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Tbilisi',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));
   const today=parts.year+'-'+parts.month+'-'+parts.day;
   // Friday week boundaries are the booking unit; first grid slot starts this Friday or next Friday.
   const base=new Date(today+'T12:00:00Z');const weekday=base.getUTCDay();
   const offset=(weekday-5+7)%7;base.setUTCDate(base.getUTCDate()-offset);
   const first=base.toISOString().slice(0,10);
   for(let i=0;i<12;i++){
      const start=addDays(first,i*7),end=addDays(start,7);
      const overlaps=events.filter(e=>e.type!=='exhibition-opening' && e.start && e.end && e.start.slice(0,10)<end && e.end.slice(0,10)>start);
      const known=knownBooked.find(e=>e.start===start && e.end===end);
      const booked=overlaps.length>0 || !!known;
      const verified=!!cached;
      const slot=el('div','week-slot '+(booked?'booked':verified?'available':'unverified'));
      slot.append(el('span','',format(start)+'–'+format(end)));
      const named=overlaps.find(e=>e.type==='exhibition'&&(e.artist_ru||e.artist_en))||known;
      slot.append(el('strong','',booked?(named?(locale()==='en'?(named.artist_en||named.artist_ru):(named.artist_ru||named.artist_en)):(locale()==='en'?'Booked':'Занято')):(verified?(locale()==='en'?'Available':'Свободно'):(locale()==='en'?'Check dates':'Уточняется'))));
      root.append(slot);
   }
   if(cached){
     setStatus('Занятость загружена из Google Calendar. Наличие свободных недель уточняйте перед бронированием.','Availability loaded from Google Calendar. Please confirm free weeks before booking.');
   }else{
     setStatus('Показаны подтверждённые занятые недели. Проверка свободных дат временно недоступна — уточните у ArtHub.','Known booked weeks shown. Live free-date verification is temporarily unavailable; please ask ArtHub.');
   }
 }
 async function load(){
  try{
   const response=await fetch(api,{mode:'cors',cache:'no-store'});
   if(!response.ok)throw Error('calendar unavailable');
   const data=await response.json();
   if(!Array.isArray(data.events))throw Error('invalid response');
   cached=data;render();
  }catch(e){cached=null;render();}
 }
 document.querySelectorAll('.language-switch [data-lang]').forEach(b=>b.addEventListener('click',()=>{if(cached)render();else render();}));
 load();
})();

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
   if(!cached){setStatus('Не удалось проверить бронирования. Уточните даты у ArtHub.','Availability cannot be verified. Please ask ArtHub about dates.');root.append(el('p','',locale()==='en'?'Availability requires confirmation.':'Доступность требует подтверждения.'));return;}
   const events=cached.events;
   const parts=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Tbilisi',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));\n   const today=parts.year+'-'+parts.month+'-'+parts.day;
   // Friday week boundaries are the booking unit; first grid slot starts this Friday or next Friday.
   const base=new Date(today+'T12:00:00Z');const weekday=base.getUTCDay();
   const offset=(weekday-5+7)%7;base.setUTCDate(base.getUTCDate()-offset);
   const first=base.toISOString().slice(0,10);
   for(let i=0;i<12;i++){
      const start=addDays(first,i*7),end=addDays(start,7);
      const overlaps=events.filter(e=>e.type!=='exhibition-opening' && e.start && e.end && e.start.slice(0,10)<end && e.end.slice(0,10)>start);
      const booked=overlaps.length>0;
      const slot=el('div','week-slot '+(booked?'booked':'available'));
      slot.append(el('span','',format(start)+'–'+format(end)));
      const named=overlaps.find(e=>e.type==='exhibition'&&(e.artist_ru||e.artist_en));
      slot.append(el('strong','',booked?(named?(locale()==='en'?(named.artist_en||named.artist_ru):(named.artist_ru||named.artist_en)):(locale()==='en'?'Booked':'Занято')):(locale()==='en'?'Available':'Свободно')));
      root.append(slot);
   }
   setStatus('Занятость обновляется из Google Calendar. Для бронирования свяжитесь с ArtHub.','Availability updates from Google Calendar. Contact ArtHub to confirm a booking.');
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

(()=>{
'use strict';
const data=window.ArtHubProgrammeData;
const params=new URLSearchParams(location.search);
const id=params.get('item')||'';
const item=[...(data?.groups||[]),...(data?.events||[])].find(x=>x.id===id);
const langValue=params.get('lang')==='en'?'en':'ru';
let language=langValue;
const $=id=>document.getElementById(id);
const L=(ru,en)=>language==='en'?en:ru;
const t=v=>v?.[language]||'';
const week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const weekdayNames={ru:['вс','пн','вт','ср','чт','пт','сб'],en:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']};
const shortDate=d=>new Intl.DateTimeFormat(language==='ru'?'ru-RU':'en-GB',{timeZone:'UTC',day:'numeric',month:'long',year:'numeric'}).format(new Date(d+'T12:00:00Z'));
function fact(label,value,html=false){
 const div=document.createElement('div');div.className='detail-fact';
 const caption=document.createElement('span');caption.className='detail-label';caption.textContent=label;
 const strong=document.createElement('strong');
 if(html)strong.innerHTML=value;else strong.textContent=value;
 div.append(caption,strong);return div;
}
function render(){
 document.documentElement.lang=language;
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===language)));
 document.querySelectorAll('[data-ru][data-en]').forEach(el=>{el.textContent=el.dataset[language]});
 $('back').href='index.html?lang='+language+'#'+(item?.type==='events'?'upcoming':'groups');
 if(!item){$('notFound').style.display='block';$('detailBody').hidden=true;return;}
 $('notFound').style.display='none';$('detailBody').hidden=false;
 const event=item.type==='events';
 document.title=t(item.title)+' — ArtHub Tbilisi';
 $('detailTitle').textContent=t(item.title);
 $('detailStatus').textContent=event?L('Событие','Event'):item.type==='courses'?L('Идёт набор','Enrolling'):L('Регулярные занятия','Weekly class');
 $('detailIntro').textContent=t(item.text);
 $('aboutHeading').textContent=L('О занятии','About this class');
 $('detailDescription').textContent=t(item.text);
 $('howHeading').textContent=L('Как всё устроено','How it works');
 $('detailHow').textContent=t(item.detail);
 $('detailExtra').textContent=L('Здесь появятся дополнительные подробности, программа по занятиям и фотографии после согласования с преподавателем.','A session-by-session outline and photographs will be added after approval by the teacher.');
 $('teacherHeading').textContent=L('Преподаватели','Teachers');
 const teachers=$('detailTeachers');teachers.replaceChildren();
 if(item.teachers?.length){
  item.teachers.forEach(id=>{
    const p=document.createElement('p'),a=document.createElement('a');a.href=data.teachers[id].url;a.textContent=t(data.teachers[id].name);
    a.style.cssText='color:#1742bd;font-weight:800;text-decoration:underline;text-underline-offset:4px';
    p.append(a);teachers.append(p);
  });
 }else{
  const p=document.createElement('p');p.textContent=L('Информация о ведущем уточняется.','The instructor will be announced.');teachers.append(p);
 }
 $('registrationHeading').textContent=L('Хочу участвовать','Join the class');
 $('registrationText').textContent=L('Напишите нам в Telegram, чтобы записаться, уточнить места и задать вопросы.','Message us on Telegram to register, check places or ask questions.');
 $('registrationLink').textContent=L('Записаться ↗','Register ↗');
 $('registrationNote').textContent=L('Запись откроется в Telegram ArtHub.','Opens the ArtHub Telegram channel.');
 const panel=$('detailFacts');panel.replaceChildren();
 if(event){
  panel.append(fact(L('Дата','Date'),shortDate(item.date)));
  panel.append(fact(L('Время','Time'),item.time));
 }else{
  const dn=weekdayNames[language];
  const schedule=item.dates?item.dates.map(d=>shortDate(d)+' · '+item.time).join(' / '):
    item.days.map(d=>dn[d]+' · '+(item.times?.[d]||item.time)).join(' / ');
  panel.append(fact(L('Расписание','Schedule'),schedule));
  if(item.start)panel.append(fact(L('Начало / в расписании с','Starts / listed from'),shortDate(item.start)));
  if(item.age)panel.append(fact(L('Возраст','Ages'),t(item.age)));
 }
 panel.append(fact(L('Язык преподавания','Teaching language'),t(data.teachingLanguage[item.language||'unknown'])));
 panel.append(fact(L('Стоимость и абонементы','Price and passes'),t(item.price)));
 if(item.status&&!event)panel.append(fact(L('Статус','Status'),t(item.status)));
 panel.append(fact(L('Место','Venue'),'172 Davit Aghmashenebeli Ave, Tbilisi'));
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{
 language=b.dataset.lang;
 const next=new URL(location.href);next.searchParams.set('lang',language);
 history.replaceState(null,'',next);
 render();
}));
render();
})();
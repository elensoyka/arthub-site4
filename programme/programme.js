/* ArtHub programme — staged editorial schedule. No unapproved feed or personal data. */
(()=>{
'use strict';
const telegram='https://t.me/arthub_tbilisi';
const L=(ru,en)=>({ru,en});
const teachers={
'elena':{name:L('Елена Рыбина','Elena Rybina'),url:'../teachers/elena-rybina.html'},
'ulyana':{name:L('Ульяна Лащенко','Ulyana Lashchenko'),url:'../teachers/ulyana-lashchenko.html'},
'maria':{name:L('Мария Кондратьева','Maria Kondratyeva'),url:'../teachers/maria-kondratyeva.html'},
'anna':{name:L('Анна Мчедлишвили','Anna Mchedlishvili'),url:'../teachers/anna-mchedlishvili.html'},
'ksenia':{name:L('Ксения Липская','Ksenia Lipskaya'),url:'../teachers/ksenia-lipskaya.html'}
};
const teachingLanguage={
confirmed:L('Русский','Russian'),
unknown:L('Уточняется','To be confirmed'),
both:L('RU · EN','RU · EN'),
englishSubs:L('EN · русские субтитры','EN · Russian subtitles')
};
const groups=[
{id:'wool-animation',teachers:[],language:'both',type:'courses',title:L('Шерстяная стоп-моушн анимация','Wool stop-motion animation'),age:L('12+ и взрослые','12+ and adults'),days:[],time:'',price:L('Стоимость по запросу','Price on request'),text:L('Будущий курс: валяем персонажей и декорации из шерсти, затем оживляем их в покадровой анимации.','Upcoming course: needle-felt characters and sets and bring them to life with stop-motion.'),detail:L('Расписание уточняется. Запуск после формирования группы.','Schedule to be confirmed; starts once a group forms.'),status:L('Идёт набор','Enrolment open')},
{id:'wool-coworking-sat',teachers:[],language:'both',type:'regular',title:L('Валятельный коворкинг · суббота','Needle-felting coworking · Saturday'),age:L('12+ и взрослые','12+ and adults'),days:[6],time:'19:30–22:00',price:L('6 ₾/час · материалы включены','6 GEL/hour · materials included'),text:L('Самостоятельное сухое валяние из шерсти в компании других творческих людей.','Open needle-felting studio with fellow makers.'),detail:L('Каждую субботу 19:30–22:00.','Saturdays 19:30–22:00.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-kids',teachers:["maria","elena"],language:'both',type:'regular',title:L('Вечерняя арт-продлёнка · первая смена','Afternoon programme · morning school shift'),age:L('Дети 5–12 лет','Children ages 5–12'),days:[1,3,5],time:'16:00–17:30',start:'2026-11-16',price:L('25 ₾ разово · 120 ₾ / 8 занятий','25 GEL drop-in · 120 GEL / 8 sessions'),text:L('Три направления: автоматоны (подвижные механические игрушки), сухое валяние из шерсти и крафт из картона, фетра и подручных материалов.','Three strands: moving automata, needle felting and cardboard/felt crafts.'),detail:L('Продолжительность — 1,5 часа. Понедельник, среда и пятница. Для тех, кто учится в первую смену.','90-minute sessions Monday, Wednesday and Friday. After-school sessions.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-teens',teachers:["maria","elena"],language:'both',type:'regular',title:L('Вечерняя арт-продлёнка · первая смена','Afternoon programme · morning school shift'),age:L('Дети 5–12 лет','Children ages 5–12'),days:[1,3,5],time:'17:30–19:00',start:'2026-11-16',price:L('25 ₾ разово · 120 ₾ / 8 занятий','25 GEL drop-in · 120 GEL / 8 sessions'),text:L('Автоматоны, валяние из шерсти, крафт-мастерская из картона, фетра и подручных материалов.','Automata, needle felting and crafts with cardboard, felt and found materials.'),detail:L('Понедельник, среда и пятница. Продолжительность — 1,5 часа.','Monday, Wednesday and Friday, 90 minutes.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-morning-early',teachers:["maria","elena"],language:'both',type:'regular',title:L('Утренняя арт-продлёнка · вторая смена','Morning creative studio · afternoon school shift'),age:L('Дети 5–12 лет · вторая смена','Children 5–12 · afternoon school shift'),days:[1,3,5],time:'10:00–11:30',start:'2026-11-16',price:L('25 ₾ разово · 120 ₾ / 8 занятий','25 GEL drop-in · 120 GEL / 8 sessions'),text:L('Перед школой делаем автоматоны, валяем игрушки из шерсти и мастерим из картона и фетра.','Before school: automata, wool felting and cardboard/felt crafts.'),detail:L('Понедельник, среда и пятница · 10:00–11:30. Для учащихся во вторую смену.','Monday, Wednesday and Friday · 10:00–11:30. For children attending afternoon school.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-morning-late',teachers:["maria","elena"],language:'both',type:'regular',title:L('Утренняя арт-продлёнка · вторая смена','Morning creative studio · afternoon school shift'),age:L('Дети 5–12 лет · вторая смена','Children 5–12 · afternoon school shift'),days:[1,3,5],time:'11:30–13:00',start:'2026-11-16',price:L('25 ₾ разово · 120 ₾ / 8 занятий','25 GEL drop-in · 120 GEL / 8 sessions'),text:L('Перед школой делаем автоматоны, валяем игрушки из шерсти и мастерим из картона и фетра.','Before school: automata, wool felting and cardboard/felt crafts.'),detail:L('Понедельник, среда и пятница · 11:30–13:00. Для учащихся во вторую смену.','Monday, Wednesday and Friday · 11:30–13:00. For children attending afternoon school.'),status:L('Можно присоединиться','Join anytime')},
{id:'embroidery',teachers:["anna"],language:'confirmed',type:'regular',title:L('Валятельный коворкинг · сухое валяние из шерсти','Needle-felting coworking'),age:L('Взрослые и подростки · уточнить','Adults and teens · confirm'),days:[1,3,5],time:'13:00–16:00',start:'2026-11-16',price:L('6 ₾/час · материалы включены','6 GEL/hour · materials included'),text:L('Самостоятельное сухое валяние из шерсти: игрушки, персонажи, украшения и скульптуры.','Open needle-felting coworking for toys, characters, jewellery and sculptures.'),detail:L('Понедельник, среда и пятница 13:00–16:00. 6 ₾/час · материалы включены.','Monday, Wednesday and Friday 13:00–16:00. 6 GEL/hour · materials included.'),status:L('Можно присоединиться','Open to join')},
{id:'papier-mache',teachers:["maria"],language:'both',type:'regular',title:L('Мастерская картона и папье-маше','Cardboard and papier-mâché'),age:L('12+ и взрослые','Ages 12+ and adults'),days:[2,4],time:'15:00–17:00',start:'2026-11-17',price:L('30 ₾ разово · 160 ₾ / 8 занятий','30 GEL drop-in · 160 GEL / 8 sessions'),text:L('Лепка, объёмные формы, фактуры и объекты из бумаги.','Paper sculpture, form, surface and handmade objects.'),detail:L('Вторник и четверг, 15:00–17:00. Восемь занятий по два часа.','Tuesday and Thursday, 15:00–17:00. Eight two-hour sessions.'),status:L('Можно присоединиться','Join anytime')},
{id:'theatre-am',teachers:['elena'],language:'both',type:'courses',title:L('Театральная кукла · утро','Theatre puppetry · morning'),age:L('12+ и взрослые','12+ and adults'),days:[2,4],time:'10:30–13:00',start:'2026-11-17',price:L('200 ₾ / 8 занятий · без разовых посещений','200 GEL / 8 sessions · no drop-ins'),text:L('От эскиза и пеноплекса до подвижной куклы, декорации и будущего спектакля.','From sketches and foam to a performing puppet, sets and a final production.'),detail:L('Вторник и четверг, 10:30–13:00. Постоянная группа, один блок — восемь занятий по 2,5 часа.','Tuesday and Thursday, 10:30–13:00. Continuing group, eight 2.5-hour sessions per block.'),status:L('Идёт набор','Enrolling')},
{id:'theatre-pm',teachers:["elena"],language:'both',type:'courses',title:L('Театральная кукла · вечер','Theatre puppetry · evening'),age:L('Взрослые','Adults'),days:[2,5],time:'20:00–22:00',times:{5:'19:00–22:00'},start:'2026-11-16',price:L('200 ₾ / 8 занятий','200 ₾ / 8 sessions'),text:L('Вечерняя лаборатория театральной куклы: персонажи, конструкции, характеры и спектакль.','Evening puppet theatre lab: characters, structures, movement and performance.'),detail:L('Вторник 20:00–22:00 и пятница 19:00–22:00. Одна постоянная группа; два свободных места.','Tuesday 20:00–22:00 and Friday 19:00–22:00. One continuing group; two places available.'),status:L('Есть свободные места','Places available')},
{id:'stop-motion',teachers:["ksenia"],language:'confirmed',type:'courses',title:L('Кукольная стоп-моушн анимация','Puppet stop-motion animation'),age:L('12+ и взрослые','12+ and adults'),days:[1,6],time:'19:00–22:00',times:{6:'14:00–17:00'},start:'2026-11-30',price:L('360 ₾ / 8 занятий · 720 ₾ / 16 занятий','360 ₾ / 8 sessions · 720 ₾ / 16 sessions'),text:L('С Ксенией Липской: кукла на каркасе, костюм, декорация и покадровая съёмка.','With Ksenia Lipskaya: armature, puppet, costume, set and stop-motion filming.'),detail:L('Идёт набор. Пн 19:00–22:00 и сб 14:00–17:00. 16 занятий за 8 недель. До пяти участников. Полная стоимость 720 ₾, можно оплатить двумя блоками по 360 ₾.','Enrolment open. Mon 19:00–22:00 and Sat 14:00–17:00. 16 sessions over 8 weeks, up to five participants. Total 720 ₾, payable in two 360 ₾ blocks.'),status:L('Идёт набор','Enrolling')},
{id:'model-making',teachers:["ulyana"],language:'both',type:'courses',title:L('Домик на дереве · макетирование','Treehouse · model making'),age:L('Взрослые и подростки','Adults and teens'),days:[4,6],time:'20:00–22:00',times:{6:'17:00–19:00'},start:'2026-12-03',price:L('200 ₾ / 8 занятий','200 ₾ / 8 sessions'),text:L('За четыре недели создадим собственный макет домика на дереве: от идеи и эскиза до объёмной конструкции.','Over four weeks, create a treehouse model, from an idea and sketch to a three-dimensional structure.'),detail:L('Идёт набор. Чт 20:00–22:00, сб 17:00–19:00. 8 занятий по 2 часа, до 6 человек.','Enrolment open. Thu 20:00–22:00, Sat 17:00–19:00. Eight two-hour sessions, max six participants.'),status:L('Идёт набор','Enrolling')},
{id:'clay-animation',teachers:["elena"],language:'both',type:'courses',title:L('Пластилиновая анимация','Clay animation'),age:L('12+ и взрослые','12+ and adults'),days:[2,4],time:'18:00–20:00',times:{4:'18:00–20:00'},start:'2026-12-01',price:L('160 ₾ / 8 занятий','160 ₾ / 8 sessions'),text:L('Персонажи из пластилина, маленькие декорации и первые анимационные сцены.','Clay characters, miniature sets and stop-motion experiments.'),detail:L('Набор на группу: вторник и четверг, 18:00–20:00. Восемь занятий по два часа. Дата начала уточняется.','Enrolment: Tuesday and Thursday, 18:00–20:00. Eight two-hour sessions. Start date to be confirmed.'),status:L('Идёт набор','Enrolling')},
{id:'calligraphy',teachers:["maria"],language:'both',type:'regular',title:L('Каллиграфия','Calligraphy'),age:L('12+ и взрослые','Ages 12+ and adults'),days:[2,4],time:'13:00–15:00',start:'2026-11-17',price:L('30 ₾ разово · 160 ₾ / 8 занятий','30 GEL drop-in · 160 GEL / 8 sessions'),text:L('Во вторник и четверг исследуем буквы, линии, композицию и новые графические инструменты.','Explore letters, lines, composition and drawing tools every Tuesday and Thursday.'),detail:L('Вторник и четверг, 13:00–15:00. 30 ₾ разово, 160 ₾ за 8 занятий.','Tuesday and Thursday, 13:00–15:00. 30 GEL drop-in or 160 GEL for 8 classes.'),status:L('Можно присоединиться','Join anytime')},
];
const events=[];
window.ArtHubProgrammeData={groups,events,teachers,teachingLanguage,telegram};
if(!document.getElementById('weekGrid'))return;
const $=id=>document.getElementById(id),lang=()=>document.documentElement.lang==='en'?'en':'ru',loc=(v)=>v?.[lang()]||'';
if(new URLSearchParams(location.search).get('lang')==='en') document.documentElement.lang='en';
const now=new Date();const localToday=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');let offset=0,filter='all';
const dateAdd=(s,n)=>{const d=new Date(s+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)};
const mondayOf=(s)=>{const d=new Date(s+'T12:00:00Z'),w=d.getUTCDay();return dateAdd(s,-((w+6)%7))};
const weekday=(s)=>new Date(s+'T12:00:00Z').getUTCDay();
const format=(s,options)=>new Intl.DateTimeFormat(lang()==='en'?'en-GB':'ru-RU',{timeZone:'UTC',...options}).format(new Date(s+'T12:00:00Z'));
function localizedStatic(){document.querySelectorAll('[data-ru][data-en]').forEach(el=>{el.textContent=el.dataset[lang()]});document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang())))}
function card(item){
 const event=item.type==='events',id=(event?'event-':'group-')+item.id;
 const dayNames=lang()==='ru'?['вс','пн','вт','ср','чт','пт','сб']:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
 const dates=event?[format(item.date,{weekday:'short',day:'numeric',month:'long'})]:
   item.dates?item.dates.map(d=>format(d,{day:'numeric',month:'short'})):
   [item.days.map(d=>dayNames[d]).join(' · ')];
 const timeText=event?item.time:item.days?.length?
   [...new Set(item.days.map(d=>item.times?.[d]||item.time))].join(' / '):item.time;
 const language=loc(teachingLanguage[item.language||'unknown']);
 const showPrice=loc(item.price);
 const kind=event?(lang()==='ru'?'Событие':'Event'):
   item.type==='courses'?(lang()==='ru'?'Идёт набор':'Enrolling'):
   (lang()==='ru'?'Регулярно':'Weekly');
 const href='detail.html?item='+encodeURIComponent(item.id)+'&lang='+lang();
 return '<article class="programme-card programme-card-compact '+(event?'highlight':'')+'" id="'+id+'">'+
  '<span class="programme-kicker">'+kind+'</span>'+
  '<h3>'+loc(item.title)+'</h3>'+
  '<div class="programme-preview-facts"><div class="preview-date">'+dates.join(' · ')+'</div>'+
  '<div class="preview-time">'+timeText+'</div>'+
  '<div class="preview-language">'+(lang()==='ru'?'Язык: ':'Language: ')+language+'</div></div>'+
  (showPrice?'<div class="preview-price">'+showPrice+'</div>':'')+
  '<a class="programme-more" href="'+href+'">'+(lang()==='ru'?'Подробнее':'Details')+' <span aria-hidden="true">↗</span></a>'+
  '</article>';
}
function entries(date){
const day=weekday(date),items=[];
groups.forEach(g=>{if(g.start&&date<g.start)return;if(g.dates?(g.dates.includes(date)):g.days?.includes(day)){items.push({item:g,time:(g.times?.[day]||g.time)})}});

return items.filter(x=>filter==='all'||x.item.type===filter).sort((a,b)=>a.time.localeCompare(b.time));
}
function render(){
localizedStatic();
const monday=dateAdd(mondayOf(localToday),offset*7),sunday=dateAdd(monday,6);
$('weekLabel').textContent=format(monday,{day:'numeric',month:'long'})+' – '+format(sunday,{day:'numeric',month:'long',year:'numeric'});
$('prevWeek').disabled=offset<=0;$('nextWeek').disabled=offset>=10;
$('weekGrid').replaceChildren();
for(let i=0;i<7;i++){const date=dateAdd(monday,i),day=document.createElement('div');day.className='week-day';
const h=document.createElement('header');h.textContent=format(date,{weekday:'short',day:'numeric',month:'short'});day.append(h);
const items=entries(date);if(!items.length){const p=document.createElement('p');p.className='programme-empty';p.textContent=lang()==='ru'?'Нет записей':'No sessions';day.append(p)}
items.forEach(({item,time})=>{const a=document.createElement('a');a.className='week-item '+item.type;a.href='detail.html?item='+encodeURIComponent(item.id)+'&lang='+lang();
const tt=document.createElement('strong');tt.textContent=time;a.append(tt,document.createTextNode(loc(item.title)));day.append(a)});$('weekGrid').append(day)}
if($('groupCards'))$('groupCards').innerHTML=groups.map(card).join('');
document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
$('prevWeek').addEventListener('click',()=>{offset=Math.max(0,offset-1);render()});
$('nextWeek').addEventListener('click',()=>{offset=Math.min(10,offset+1);render()});
$('thisWeek').addEventListener('click',()=>{offset=0;render()});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render()}));
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{document.documentElement.lang=b.dataset.lang;render()}));
render();
})();
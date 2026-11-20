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
{id:'after-school-kids',teachers:["maria","elena"],language:'both',type:'regular',title:L('Арт-продлёнка · дети','Creative after-school · children'),age:L('Дети','Children'),days:[1,3,5],time:'16:00–17:30',start:'2026-11-16',price:L('25 ₾ разово · 180 ₾ / 12 занятий','25 ₾ drop-in · 180 ₾ / 12 sessions'),text:L('Картон, рисунок, ткань, шерсть, папье-маше. Можно присоединиться к постоянной группе.','Drawing, cardboard, textile, felt and papier-mâché. Join the weekly group.'),detail:L('Продолжительность — 1,5 часа. Понедельник, среда и пятница. Для тех, кто учится в первую смену.','90-minute sessions Monday, Wednesday and Friday. After-school sessions.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-teens',teachers:["maria","elena"],language:'both',type:'regular',title:L('Арт-продлёнка · дети и подростки','Creative after-school · children and teens'),age:L('Дети и подростки','Children and teens'),days:[1,3,5],time:'17:30–19:00',start:'2026-11-16',price:L('25 ₾ разово · 180 ₾ / 12 занятий','25 ₾ drop-in · 180 ₾ / 12 sessions'),text:L('Вечерняя мастерская для собственных проектов и знакомства с материалами.','An evening studio for individual projects and experimenting with materials.'),detail:L('Понедельник, среда и пятница. Продолжительность — 1,5 часа.','Monday, Wednesday and Friday, 90 minutes.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-morning-early',teachers:["maria","elena"],language:'both',type:'regular',title:L('Арт-продлёнка · утренняя группа','Morning creative studio'),age:L('Дети и подростки · вторая смена','Children and teens · afternoon school shift'),days:[1,3,5],time:'10:00–11:30',start:'2026-11-16',price:L('25 ₾ разово · 180 ₾ / 12 занятий','25 ₾ drop-in · 180 ₾ / 12 sessions'),text:L('Творческие занятия перед школой: рисунок, картон, ткань, папье-маше и собственные проекты.','Creative classes before school: drawing, cardboard, textile, papier-mâché and personal projects.'),detail:L('Понедельник, среда и пятница · 10:00–11:30. Для учащихся во вторую смену.','Monday, Wednesday and Friday · 10:00–11:30. For children attending afternoon school.'),status:L('Можно присоединиться','Join anytime')},
{id:'after-school-morning-late',teachers:["maria","elena"],language:'both',type:'regular',title:L('Арт-продлёнка · утренняя группа','Morning creative studio'),age:L('Дети и подростки · вторая смена','Children and teens · afternoon school shift'),days:[1,3,5],time:'11:30–13:00',start:'2026-11-16',price:L('25 ₾ разово · 180 ₾ / 12 занятий','25 ₾ drop-in · 180 ₾ / 12 sessions'),text:L('Творческие занятия перед школой: рисунок, картон, ткань, папье-маше и собственные проекты.','Creative classes before school: drawing, cardboard, textile, papier-mâché and personal projects.'),detail:L('Понедельник, среда и пятница · 11:30–13:00. Для учащихся во вторую смену.','Monday, Wednesday and Friday · 11:30–13:00. For children attending afternoon school.'),status:L('Можно присоединиться','Join anytime')},
{id:'embroidery',teachers:["anna"],language:'confirmed',type:'regular',title:L('Текстильный коворкинг · вышивка и починка одежды','Textile coworking · embroidery & mending'),age:L('Взрослые и подростки · уточнить','Adults and teens · confirm'),days:[1,3,5],time:'13:00–16:00',start:'2026-11-16',price:L('4 ₾/час со своими материалами · 6 ₾/час с материалами ArtHub','4 ₾/hour with your own materials · 6 ₾/hour with ArtHub materials'),text:L('Вязание, вышивка, сухое валяние, шитьё и починка одежды. Можно прийти со своей работой.','Knitting, embroidery, needle felting, sewing and garment mending. Bring your own project.'),detail:L('Понедельник, среда и пятница, 13:00–16:00. Почасовая оплата: 4 ₾ со своими материалами, 6 ₾ с материалами ArtHub.','Monday, Wednesday and Friday, 13:00–16:00. Hourly rates: 4 ₾ with your own materials, 6 ₾ with ArtHub materials.'),status:L('Можно присоединиться','Open to join')},
{id:'papier-mache',teachers:["maria"],language:'both',type:'regular',title:L('Папье-маше','Papier-mâché studio'),age:L('Возраст уточняется','Age to confirm'),days:[2,4],time:'15:00–18:00',start:'2026-11-17',price:L('240 ₾ / 8 занятий','240 ₾ / 8 sessions'),text:L('Лепка, объёмные формы, фактуры и объекты из бумаги.','Paper sculpture, form, surface and handmade objects.'),detail:L('Вторник и четверг, 15:00–18:00. Восемь занятий по три часа.','Tuesday and Thursday, 15:00–18:00. Eight three-hour sessions.'),status:L('Можно присоединиться','Join anytime')},
{id:'theatre-am',teachers:['elena'],language:'both',type:'courses',title:L('Театральная кукла · утро','Theatre puppetry · morning'),age:L('14+ и взрослые','14+ and adults'),days:[2,4],time:'10:30–13:00',start:'2026-11-17',price:L('200 ₾ / 8 занятий','200 ₾ / 8 sessions'),text:L('От эскиза и пеноплекса до подвижной куклы, декорации и будущего спектакля.','From sketches and foam to a performing puppet, sets and a final production.'),detail:L('Вторник и четверг, 10:30–13:00. Постоянная группа, один блок — восемь занятий по 2,5 часа.','Tuesday and Thursday, 10:30–13:00. Continuing group, eight 2.5-hour sessions per block.'),status:L('Идёт набор','Enrolling')},
{id:'theatre-pm',teachers:["elena"],language:'both',type:'courses',title:L('Театральная кукла · вечер','Theatre puppetry · evening'),age:L('Взрослые','Adults'),days:[2,5],time:'20:00–22:00',times:{5:'19:00–22:00'},start:'2026-11-16',price:L('200 ₾ / 8 занятий','200 ₾ / 8 sessions'),text:L('Вечерняя лаборатория театральной куклы: персонажи, конструкции, характеры и спектакль.','Evening puppet theatre lab: characters, structures, movement and performance.'),detail:L('Вторник 20:00–22:00 и пятница 19:00–22:00. Одна постоянная группа; два свободных места.','Tuesday 20:00–22:00 and Friday 19:00–22:00. One continuing group; two places available.'),status:L('Есть свободные места','Places available')},
{id:'stop-motion',teachers:["ksenia"],language:'confirmed',type:'courses',title:L('Анимационная кукла и декорация','Animation puppet & set design'),age:L('14+ и взрослые','14+ and adults'),days:[1,6],time:'19:00–22:00',times:{6:'14:00–17:00'},start:'2026-11-30',price:L('360 ₾ / 8 занятий · 720 ₾ / 16 занятий','360 ₾ / 8 sessions · 720 ₾ / 16 sessions'),text:L('С Ксенией Липской: кукла на каркасе, костюм, декорация и покадровая съёмка.','With Ksenia Lipskaya: armature, puppet, costume, set and stop-motion filming.'),detail:L('Старт 30 ноября. Пн 19:00–22:00 и сб 14:00–17:00. 16 занятий за 8 недель. До пяти участников. Полная стоимость 720 ₾, можно оплатить двумя блоками по 360 ₾.','Starts 30 November. Mon 19:00–22:00 and Sat 14:00–17:00. 16 sessions over 8 weeks, up to five participants. Total 720 ₾, payable in two 360 ₾ blocks.'),status:L('Идёт набор · старт 30.11','Enrolling · starts Nov 30')},
{id:'model-making',teachers:["ulyana"],language:'both',type:'courses',title:L('Домик на дереве · макетирование','Treehouse · model making'),age:L('Взрослые и подростки','Adults and teens'),days:[4,6],time:'20:00–22:00',times:{6:'17:00–19:00'},start:'2026-12-03',price:L('200 ₾ / 8 занятий','200 ₾ / 8 sessions'),text:L('За четыре недели создадим собственный макет домика на дереве: от идеи и эскиза до объёмной конструкции.','Over four weeks, create a treehouse model, from an idea and sketch to a three-dimensional structure.'),detail:L('Старт 3 декабря. Чт 20:00–22:00, сб 17:00–19:00. 8 занятий по 2 часа, до 6 человек.','Starts December 3. Thu 20:00–22:00, Sat 17:00–19:00. Eight two-hour sessions, max six participants.'),status:L('Идёт набор · старт 03.12','Enrolling · starts Dec 3')},
{id:'clay-animation',teachers:["elena"],language:'both',type:'courses',title:L('Пластилиновая анимация','Clay animation'),age:L('14+ и взрослые','14+ and adults'),days:[2,4],time:'17:00–19:00',times:{4:'17:00–19:00'},start:'2026-12-01',price:L('160 ₾ / 8 занятий','160 ₾ / 8 sessions'),text:L('Персонажи из пластилина, маленькие декорации и первые анимационные сцены.','Clay characters, miniature sets and stop-motion experiments.'),detail:L('Набор на группу: вторник и четверг, 17:00–19:00. Восемь занятий по два часа. Планируемый старт 1 декабря.','Enrolment: Tuesday and Thursday, 17:00–19:00. Eight two-hour sessions. Planned start December 1.'),status:L('Идёт набор · старт 01.12','Enrolling · starts Dec 1')},
{id:'calligraphy-weekdays',teachers:["maria"],language:'both',type:'regular',title:L('Каллиграфия · регулярная мастерская','Calligraphy · weekly studio'),age:L('Возраст уточняется','Age to confirm'),days:[2,4],time:'13:00–15:00',start:'2026-11-17',price:L('160 ₾ / 8 занятий','160 ₾ / 8 sessions'),text:L('Во вторник и четверг исследуем буквы, линии, композицию и новые графические инструменты.','Explore letters, lines, composition and drawing tools every Tuesday and Thursday.'),detail:L('Вторник и четверг, 13:00–15:00. Стоимость серии субботних встреч указана в отдельной карточке.','Tuesday and Thursday, 13:00–15:00. Saturday mini-series has a separate price.'),status:L('Можно присоединиться','Join anytime')},
{id:'calligraphy',teachers:["maria"],language:'both',type:'regular',title:L('Каллиграфия · субботняя серия «Развидеть буквы»','Calligraphy · Saturday series Unsee the Letters'),age:L('Взрослые и подростки · уточнить','Adults and teens · confirm'),days:[],time:'11:00–14:00',start:'2026-11-14',price:L('50 ₾ встреча · 120 ₾ / 3','50 ₾ per workshop · 120 ₾ / 3'),text:L('Три самостоятельные субботние встречи: ритм, контраст и геометрия. Мария Кондратьева.','Three independent Saturday sessions: rhythm, contrast and geometry with Maria Kondratyeva.'),detail:L('14, 21, 28 ноября, 11:00–14:00. Материалы включены. Можно прийти отдельно.','November 14, 21 and 28, 11:00–14:00. Materials included. Single sessions welcome.'),status:L('Запись открыта','Booking open'),dates:['2026-11-14','2026-11-21','2026-11-28']}
];
const events=[
{id:'puppet-history',teachers:['ksenia'],language:'confirmed',type:'events',title:L('История кукольной анимации','History of puppet animation'),date:'2026-11-16',time:'20:00',price:L('15 ₾','15 ₾'),text:L('Лекция Ксении Липской — от первых кукольных фильмов до современности.','Ksenia Lipskaya on the history of puppet animation.'),detail:L('Русский язык.','In Russian.')},
{id:'sets-workshop',teachers:[],language:'confirmed',type:'events',title:L('Воркшоп по анимационным декорациям','Animation set-design workshop'),date:'2026-11-19',time:'20:00',price:L('40 ₾','40 ₾'),text:L('Создадим объёмную декорацию из бумаги и картона по режиссёрскому заданию и попробуем разместить в ней куклу.','Build a three-dimensional paper-and-cardboard set from a director’s brief and photograph a puppet in it.'),detail:L('Два часа, материалы предоставляются. Локации на выбор: комната, остановка или киоск. В Instagram указано 19:00, но время 20:00 утверждено владельцем для сайта.','Two hours, materials included. Choose a room, bus stop or kiosk. Instagram listed 19:00; the owner explicitly requested 20:00 for the website.'),link:'https://www.instagram.com/p/DfxOf3eCIjv/'},
{id:'big-fish',teachers:[],language:'englishSubs',type:'events',title:L('Кино: «Большая рыба»','Film night: Big Fish'),date:'2026-11-21',time:'20:30',price:L('Стоимость уточняется','Price to confirm'),text:L('Фильм на английском языке с русскими субтитрами. Субботний кинопоказ в ArtHub.','Film screening in English with Russian subtitles at ArtHub.'),detail:L('21 ноября, суббота, 20:30. Оригинальная английская дорожка и русские субтитры. Стоимость участия уточняется.','Saturday, November 21 at 20:30. Original English audio with Russian subtitles. Admission price to be confirmed.')},
{id:'pitch-night',teachers:[],language:'both',type:'events',title:L('Pitch Night · идеи ищут друг друга','Pitch Night · ideas meet people'),date:'2026-11-25',time:'19:00',price:L('Вход — donation','Admission: donation'),text:L('Пять минут на свою идею, общение, поиск единомышленников и будущих соавторов.','Five-minute creative pitches followed by new connections and collaborations.'),detail:L('Перенесено с 18 на 25 ноября (среда), время 19:00 сохранено по прежней афише. Ведущая — Дарья Гук.','Moved from Nov 18 to Wednesday Nov 25; previously listed start time 19:00 retained. Hosted by Daria Guk.')}
];
window.ArtHubProgrammeData={groups,events,teachers,teachingLanguage,telegram};
if(!document.getElementById('weekGrid'))return;
const $=id=>document.getElementById(id),lang=()=>document.documentElement.lang==='en'?'en':'ru',loc=(v)=>v?.[lang()]||'';
if(new URLSearchParams(location.search).get('lang')==='en') document.documentElement.lang='en';
const todayBase='2026-11-16';let offset=0,filter='all';
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
 const showPrice=event?'':item.id.startsWith('after-school')?'180 ₾ / 12':
   item.id==='embroidery'?'4–6 ₾/ч':
   item.id.startsWith('theatre-')?'200 ₾ / 8':
   item.id==='stop-motion'?'360 ₾ / 8':
   item.id==='model-making'?'200 ₾ / 8':
   item.id==='clay-animation'?'160 ₾ / 8':
   item.id==='papier-mache'?'240 ₾ / 8':
   item.id==='calligraphy-weekdays'?'160 ₾ / 8':
   item.id==='calligraphy'?'120 ₾ / 3':'';
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
groups.forEach(g=>{if(date<g.start)return;if(g.dates?(g.dates.includes(date)):g.days.includes(day)){items.push({item:g,time:(g.times?.[day]||g.time)})}});
events.forEach(e=>{if(e.date===date)items.push({item:e,time:e.time})});
return items.filter(x=>filter==='all'||x.item.type===filter).sort((a,b)=>a.time.localeCompare(b.time));
}
function render(){
localizedStatic();
const monday=dateAdd(todayBase,offset*7),sunday=dateAdd(monday,6);
$('weekLabel').textContent=format(monday,{day:'numeric',month:'long'})+' – '+format(sunday,{day:'numeric',month:'long',year:'numeric'});
$('prevWeek').disabled=offset<=0;$('nextWeek').disabled=offset>=10;
$('weekGrid').replaceChildren();
for(let i=0;i<7;i++){const date=dateAdd(monday,i),day=document.createElement('div');day.className='week-day';
const h=document.createElement('header');h.textContent=format(date,{weekday:'short',day:'numeric',month:'short'});day.append(h);
const items=entries(date);if(!items.length){const p=document.createElement('p');p.className='programme-empty';p.textContent=lang()==='ru'?'Нет записей':'No sessions';day.append(p)}
items.forEach(({item,time})=>{const a=document.createElement('a');a.className='week-item '+item.type;a.href='detail.html?item='+encodeURIComponent(item.id)+'&lang='+lang();
const tt=document.createElement('strong');tt.textContent=time;a.append(tt,document.createTextNode(loc(item.title)));day.append(a)});$('weekGrid').append(day)}
$('groupCards').innerHTML=groups.map(card).join('');$('eventCards').innerHTML=events.map(card).join('');
document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
$('prevWeek').addEventListener('click',()=>{offset=Math.max(0,offset-1);render()});
$('nextWeek').addEventListener('click',()=>{offset=Math.min(10,offset+1);render()});
$('thisWeek').addEventListener('click',()=>{offset=0;render()});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render()}));
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{document.documentElement.lang=b.dataset.lang;render()}));
render();
})();
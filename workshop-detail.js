(()=>{
const name=new URLSearchParams(location.search).get('name')||'Мастерская ArtHub';
const title=document.getElementById('detailTitle'),desc=document.getElementById('detailDescription'),prices=document.getElementById('detailPrices'),next=document.getElementById('detailNext');
title.textContent=name;document.title=name+' — ArtHub Tbilisi';
const n=name.toLowerCase();const puppet=/театральн.*кукл/.test(n),clay=/пластилинов/.test(n);
const templates={
 puppet:'Создаём театральных кукол: от эскиза и материалов до движения и общего показа.',
 clay:'Лепим персонажей и декорации, снимаем собственный покадровый мультфильм.',
 print:'Знакомимся с ручными техниками печати и создаём собственные работы.',
 embroidery:'Вышивка и художественная починка одежды: даём вещам новую жизнь.',
 automata:'Создаём деревянные механизмы и движущиеся объекты своими руками.',
 kids:'Творческие занятия для детей и подростков: разные материалы, техники и самостоятельные идеи.'
};
const category=puppet?'puppet':clay?'clay':/печат/.test(n)?'print':/вышив|починк/.test(n)?'embroidery':/автоматон/.test(n)?'automata':/продл|дети|рисован/.test(n)?'kids':'other';
desc.textContent=templates[category]||'Творческие занятия в ArtHub Tbilisi. Описание направления будет дополнено.';
const labels=puppet||clay?[['Абонемент на 8 занятий',puppet?'350 ₾':'240 ₾']]:[['Разовое занятие','Уточняется'],['Абонемент на 4 занятия','Уточняется'],['Абонемент на 8 занятий','Уточняется']];
function setPrices(rows){prices.replaceChildren();for(const [label,value] of rows){const card=document.createElement('div');card.className='workshop-price-card';const l=document.createElement('span');l.textContent=label;const v=document.createElement('strong');v.textContent=value;card.append(l,v);prices.append(card)}}
setPrices(labels);
const api='https://arthub-calendar-test.elensoyka.workers.dev/api/workshops';
fetch(api,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('offline');return r.json()}).then(data=>{
 const matching=(data.events||[]).filter(e=>e.title===name||e.title?.replace(/ — (понедельник|среда|суббота|утренняя группа|вечерняя группа)$/,'')===name);
 if(!matching.length)return;
 const latest=matching.find(e=>e.description_ru||e.description)||matching[0];
 if(latest.description_ru||latest.description)desc.textContent=latest.description_ru||latest.description;
 if(!puppet&&!clay && (latest.price_single||latest.price_4||latest.price_8))setPrices([['Разовое занятие',latest.price_single||'Уточняется'],['Абонемент на 4 занятия',latest.price_4||'Уточняется'],['Абонемент на 8 занятий',latest.price_8||'Уточняется']]);
 const future=matching.filter(e=>new Date(e.start)>new Date()).sort((a,b)=>a.start.localeCompare(b.start))[0];
 if(future)next.textContent='Ближайшее занятие: '+new Intl.DateTimeFormat('ru-RU',{timeZone:'Asia/Tbilisi',day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}).format(new Date(future.start));
}).catch(()=>{});
})();
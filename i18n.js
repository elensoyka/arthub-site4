/* ArtHub bilingual foundation: exact editorial copy translations. */
(() => {
  const translations = {
    "О нас":"About", "Пространство":"Space", "Возможности":"Explore", "Лоты":"Offers", "Основатели":"Founders", "Контакты":"Contact", "Поддержать":"Support",
    "Творческое пространство в Тбилиси":"Creative space in Tbilisi",
    "Место, где идеи":"A place where ideas", "становятся реальностью":"come to life",
    "ArtHub — мастерская, площадка для событий и пространство для долгих и масштабных творческих процессов. Здесь можно создавать, учиться, проводить, заказывать, рассказывать о себе и поддерживать.":"ArtHub is a creative workshop, an event venue and a home for ambitious, long-term projects. Create, learn, host, commission, share your work and support the space.",
    "Выбрать возможность":"Explore possibilities", "Посмотреть пространство →":"See the space →",
    "Зачем нужен ArtHub":"Why ArtHub", "Пространство для идей, которым нужно время и место":"A space for ideas that need time and room to grow",
    "Пространство ArtHub":"The ArtHub space", "Посмотрите, где всё будет происходить":"Take a look around",
    "Начните со своей задачи":"Start with your idea", "Что вы хотите делать?":"What would you like to do?",
    "Предпродажа и специальные условия":"Presale and special offers", "Лоты ArtHub":"ArtHub offers",
    "Сообщество":"Community", "Поддержать ArtHub":"Support ArtHub",
    "Чтобы помочь пространству или обсудить сотрудничество, напишите нам.":"Want to support the space or collaborate? Get in touch.",
    "Написать в Telegram":"Message on Telegram", "Перед переводом":"Before you book", "Как это работает":"How it works",
    "Люди ArtHub":"The people behind ArtHub", "Основатели и команда":"Founders and team",
    "Художница, педагог, автор идеи и основатель ArtHub.":"Artist, educator and founder of ArtHub.",
    "Актриса, педагог, создатель визуального театра Live Book. Куратор театрального направления ArtHub.":"Actor, educator and creator of Live Book visual theatre. Curator of ArtHub's theatre programme.",
    "Открыть точку в Google Maps":"Open in Google Maps",
    "Место, где у идей появляется время и место для того, чтобы выйти в масштаб.":"A place where ideas find the time and space to grow."
  };
  const sourceText = new WeakMap();
  const trim = s => s.replace(/\s+/g,' ').trim();
  const allTextNodes = root => { const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const items=[];while(walker.nextNode())items.push(walker.currentNode);return items; };
  let lang='ru';
  function render() {
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    for (const n of allTextNodes(document.body)) {
      if(!n.parentElement || ['SCRIPT','STYLE'].includes(n.parentElement.tagName)) continue;
      if(!sourceText.has(n)) sourceText.set(n,n.textContent);
      const source=sourceText.get(n), key=trim(source);
      if(lang==='ru') { if(n.textContent!==source)n.textContent=source;continue; }
      const english=translations[key];
      if(english && n.textContent!==english) n.textContent=english;
    }
    document.title=lang==='en'?'ArtHub Tbilisi — A space for ideas':'ArtHub Tbilisi — пространство для идей';
  }
  try { lang=localStorage.getItem('arthub-lang')==='en'?'en':'ru'; }catch(e){}
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;try{localStorage.setItem('arthub-lang',lang)}catch(e){}render();}));
  render();
  // Redraw translated labels when catalogue cards are rendered later.
  const host=document.getElementById('lotGrid');
  if(host) new MutationObserver(()=>{if(lang==='en')render()}).observe(host,{childList:true,subtree:false});
})();

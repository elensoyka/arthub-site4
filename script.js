const categories = [
  {
    "title": "Помогать",
    "text": "Помогать пространству развиваться и создавать новые возможности.",
    "items": [
      "Аренда помещения",
      "Мебель",
      "Системы хранения",
      "Оборудование",
      "События"
    ]
  },
  {
    "title": "Создавать",
    "text": "Работать в пространстве, хранить материалы и возвращаться к своим проектам.",
    "items": [
      "Рабочее место",
      "Почасовая аренда",
      "Хранение",
      "Длительная работа"
    ]
  },
  {
    "title": "Учиться",
    "text": "Посещать открытые мастерские и лаборатории ArtHub.",
    "items": [
      "1 месяц",
      "2 месяца",
      "3 месяца",
      "Свободный выбор направлений"
    ]
  },
  {
    "title": "Проводить",
    "text": "Организовать мастер-класс, праздник, лекцию, выставку или камерное событие.",
    "items": [
      "Мастер-классы",
      "Праздники",
      "Выставки",
      "Аренда пространства"
    ]
  },
  {
    "title": "Заказывать",
    "text": "Заказать художественные объекты, декорации, бутафорию или авторский постер.",
    "items": [
      "Бутафория",
      "Декорации",
      "Постеры",
      "Оформление"
    ]
  },
  {
    "title": "Рассказывать о себе",
    "text": "Представить свою практику, проект или идею через форматы ArtHub.",
    "items": [
      "Видеоподкаст",
      "Stories",
      "Открытая лекция",
      "Творческая группа"
    ]
  }
];

const lots = [
  {
    "category": "Создавать",
    "title": "Рабочее место",
    "text": "Рабочая зона для собственной художественной практики с возможностью почасовой или длительной аренды.",
    "meta": [
      "от 15 ₾ / час",
      "месяц — по запросу"
    ],
    "price": "от 15 ₾ / час",
    "action": "chat",
    "details_title": "Варианты и условия",
    "details": [
      "рабочее место;",
      "общая зона;",
      "балкон;",
      "возможность длительной аренды;",
      "условия месячной аренды согласовываются индивидуально."
    ]
  },
  {
    "category": "Создавать",
    "title": "Хранение",
    "text": "Хранение работ и материалов в ArtHub. Стоимость зависит от необходимого объёма.",
    "meta": [
      "50 ₾ / месяц",
      "по объёму"
    ],
    "price": "50 ₾ / месяц",
    "action": "chat",
    "details_title": "Что можно хранить",
    "details": [
      "холсты;",
      "папки;",
      "контейнеры;",
      "материалы;",
      "объём и место хранения согласовываются индивидуально."
    ]
  },
  {
    "category": "Учиться",
    "title": "Безлимитный абонемент · 1 месяц",
    "text": "Один месяц творческой практики с доступом к открытым мастерским и лабораториям ArtHub.",
    "meta": [
      "1 месяц",
      "безлимитный доступ"
    ],
    "price": "390 ₾",
    "action": "slot",
    "details_title": "Что входит",
    "details": [
      "посещение всех открытых мастерских;",
      "лаборатории по расписанию;",
      "свободный выбор направлений;",
      "абонемент действует с сентября;",
      "предварительная запись требуется только на события с ограниченным числом мест;",
      "условия передачи и заморозки абонемента согласовываются отдельно."
    ]
  },
  {
    "category": "Учиться",
    "title": "Безлимитный абонемент · 2 месяца",
    "text": "Два месяца творческой практики с доступом к открытым мастерским и лабораториям ArtHub.",
    "meta": [
      "2 месяца",
      "безлимитный доступ"
    ],
    "price": "720 ₾",
    "action": "slot",
    "details_title": "Что входит",
    "details": [
      "посещение всех открытых мастерских;",
      "лаборатории по расписанию;",
      "свободный выбор направлений;",
      "абонемент действует с сентября;",
      "предварительная запись требуется только на события с ограниченным числом мест;",
      "условия передачи и заморозки абонемента согласовываются отдельно."
    ]
  },
  {
    "category": "Учиться",
    "title": "Безлимитный абонемент · 3 месяца",
    "text": "Три месяца творческой практики с доступом к открытым мастерским и лабораториям ArtHub.",
    "meta": [
      "3 месяца",
      "безлимитный доступ"
    ],
    "price": "990 ₾",
    "action": "slot",
    "details_title": "Что входит",
    "details": [
      "посещение всех открытых мастерских;",
      "лаборатории по расписанию;",
      "свободный выбор направлений;",
      "абонемент действует с сентября;",
      "предварительная запись требуется только на события с ограниченным числом мест;",
      "условия передачи и заморозки абонемента согласовываются отдельно."
    ]
  },
  {
    "category": "Проводить",
    "title": "Мастер-класс в ArtHub",
    "text": "Пространство для проведения собственного мастер-класса продолжительностью до двух часов.",
    "meta": [
      "2 часа",
      "до 12 участников"
    ],
    "price": "120 ₾",
    "action": "chat",
    "details_title": "Что входит",
    "details": [
      "пространство;",
      "мебель;",
      "чай;",
      "кофе;",
      "проектор;",
      "помощь в базовой организации."
    ]
  },
  {
    "category": "Проводить",
    "title": "Детский праздник",
    "text": "Творческий праздник, который можно собрать вокруг мастер-класса, игры или придуманной специально для ребёнка истории.",
    "meta": [
      "от 2 часов",
      "индивидуальная программа"
    ],
    "price": "от 120 ₾ / час",
    "action": "chat",
    "details_title": "Возможные элементы",
    "details": [
      "мастер-класс;",
      "квест;",
      "аниматор;",
      "оформление;",
      "праздничный стол;",
      "индивидуальная программа."
    ]
  },
  {
    "category": "Проводить",
    "title": "Выставка / презентация",
    "text": "Пространство для показа работ, презентации проекта, встречи с гостями и камерного открытия.",
    "meta": [
      "индивидуальный формат",
      "по согласованию"
    ],
    "price": "по запросу",
    "action": "chat",
    "details_title": "Варианты сотрудничества",
    "details": [
      "презентация проекта;",
      "выставка;",
      "встреча с гостями;",
      "показ работ;",
      "открытие;",
      "монтаж, длительность и дополнительные услуги рассчитываются отдельно."
    ]
  },
  {
    "category": "Проводить",
    "title": "Аренда места на стене",
    "text": "Размещение ваших работ в пространстве ArtHub на один месяц.",
    "meta": [
      "1 месяц",
      "размещение работ"
    ],
    "price": "120 ₾ / месяц",
    "action": "chat",
    "details_title": "Что входит",
    "details": [
      "помощь с развеской;",
      "QR-код рядом с работой;",
      "размещение информации об авторе;",
      "количество и размеры работ согласовываются перед размещением."
    ]
  },
  {
    "category": "Проводить",
    "title": "Пространство вне расписания",
    "text": "Отдельное время в ArtHub для встреч и процессов, которым нужен нестандартный график.",
    "meta": [
      "нестандартное время",
      "индивидуально"
    ],
    "price": "по запросу",
    "action": "chat",
    "details_title": "Для каких форматов",
    "details": [
      "раннее утро;",
      "поздний вечер;",
      "ночные встречи;",
      "съёмки;",
      "репетиции;",
      "камерные события;",
      "стоимость зависит от продолжительности и формата."
    ]
  },
  {
    "category": "Заказывать",
    "title": "Театральная бутафория",
    "text": "Разработка и изготовление выразительных предметов и объектов для сцены, кадра и события.",
    "meta": [
      "индивидуальный заказ",
      "по смете"
    ],
    "price": "от 100 ₾",
    "action": "chat",
    "details_title": "Для каких проектов",
    "details": [
      "спектакли;",
      "фотосъёмки;",
      "видеосъёмки;",
      "выставки;",
      "фестивали;",
      "мероприятия;",
      "детские праздники;",
      "рекламные проекты;",
      "брендированные объекты."
    ]
  },
  {
    "category": "Заказывать",
    "title": "Декорации на заказ",
    "text": "Создание декораций и оформления — от первой идеи и эскизов до изготовления и монтажа.",
    "meta": [
      "от идеи до монтажа",
      "индивидуально"
    ],
    "price": "от 500 ₾",
    "action": "chat"
  },
  {
    "category": "Заказывать",
    "title": "Авторские постеры",
    "text": "Выберите работу из каталога, а затем подходящий формат печати.",
    "meta": [
      "каталог работ",
      "A3–A0"
    ],
    "price": "от 200 ₾",
    "action": "chat",
    "type": "poster",
    "details_title": "Форматы и цены",
    "details": [
      "A3 — 200 ₾;",
      "A2 — 360 ₾;",
      "A1 — 650 ₾;",
      "A0 — 1100 ₾;",
      "доставка производится только по Тбилиси."
    ]
  },
  {
    "category": "Рассказывать о себе",
    "title": "Онлайн-видеоподкаст + 10 Reels",
    "text": "Разговор о вашей практике, проекте или идее, из которого мы создаём видеоподкаст и десять коротких Reels.",
    "meta": [
      "видеоподкаст",
      "10 Reels"
    ],
    "price": "500 ₾",
    "action": "slot",
    "details_title": "Как проходит работа",
    "details": [
      "согласование темы и формата в переписке;",
      "одна предварительная онлайн-встреча;",
      "подготовка вопросов;",
      "запись онлайн-интервью;",
      "монтаж видеоподкаста;",
      "10 коротких вертикальных Reels;",
      "публикация в каналах ArtHub;",
      "передача готовых файлов;",
      "доступ в закрытую творческую группу ArtHub."
    ]
  },
  {
    "category": "Рассказывать о себе",
    "title": "Stories",
    "text": "Пять последовательных Stories о вас, вашей практике или проекте с сохранением в Highlights ArtHub.",
    "meta": [
      "5 Stories",
      "в Highlights"
    ],
    "price": "100 ₾",
    "action": "slot",
    "details_title": "Как проходит работа",
    "details": [
      "вы присылаете материалы и основные факты;",
      "создаётся серия из пяти последовательных Stories;",
      "готовая серия отправляется на согласование;",
      "Stories публикуются в аккаунте ArtHub;",
      "серия сохраняется в тематическом разделе Highlights;",
      "доступ в закрытую творческую группу ArtHub."
    ]
  },
  {
    "category": "Рассказывать о себе",
    "title": "Открытая лекция",
    "text": "Возможность провести лекцию, презентацию или разговор для собственной аудитории в пространстве ArtHub.",
    "meta": [
      "до 90 минут",
      "проектор"
    ],
    "price": "120 ₾",
    "action": "chat",
    "details_title": "Что входит",
    "details": [
      "помещение;",
      "проектор;",
      "базовая рассадка;",
      "чай и кофе;",
      "подготовка пространства;",
      "продолжительность до 90 минут;",
      "дополнительное оборудование оплачивается отдельно."
    ]
  },
  {
    "category": "Помогать",
    "title": "Поддержать ArtHub",
    "text": "Любая поддержка помогает пространству развиваться.",
    "meta": [
      "свободный вклад",
      "от 50 ₾"
    ],
    "price": "от 50 ₾",
    "action": "support",
    "details_title": "На что может пойти поддержка",
    "details": [
      "аренда помещения;",
      "мебель;",
      "столы;",
      "стулья;",
      "шкафы;",
      "стеллажи;",
      "системы хранения;",
      "инструменты;",
      "расходные материалы;",
      "реклама мероприятий;",
      "чай и кофе;",
      "небольшое оборудование."
    ]
  }
];

const categoryGrid = document.getElementById("categoryGrid");
categoryGrid.innerHTML = categories.map((c, i) => `
  <a class="category-card" href="#lots" data-filter-link="${c.title}">
    <span class="category-number">${String(i + 1).padStart(2, "0")}</span>
    <div>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      <ul>${c.items.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>
  </a>
`).join("");

const filters = [...categories.map(c => c.title), "Все"];
const filtersEl = document.getElementById("filters");
const lotGrid = document.getElementById("lotGrid");
let activeFilter = categories[0].title;

function actionLabel(action) {
  if (action === "slot") return "Выбрать слот";
  if (action === "support") return "Поддержать";
  return "Написать в чат";
}

function actionHref(action) {
  if (action === "chat") return "https://t.me/rybinaaaaa";
  return "#support";
}

function posterSelector() {
  const works = Array.from({length: 40}, (_, i) => `<option value="Работа ${String(i + 1).padStart(2, "0")}">Работа ${String(i + 1).padStart(2, "0")}</option>`).join("");
  return `
    <div class="poster-selector" aria-label="Выбор авторского постера">
      <label>Работа
        <select class="poster-work">${works}</select>
      </label>
      <label>Формат
        <select class="poster-format">
          <option value="200">A3 — 200 ₾</option>
          <option value="360">A2 — 360 ₾</option>
          <option value="650">A1 — 650 ₾</option>
          <option value="1100">A0 — 1100 ₾</option>
        </select>
      </label>
      <p class="poster-note">Изображения из каталога будут добавлены после подготовки работ.</p>
    </div>`;
}

function renderFilters() {
  filtersEl.innerHTML = filters.map(f => `
    <button class="filter ${f === activeFilter ? "active" : ""}" data-filter="${f}">${f}</button>
  `).join("");
}

function renderLots() {
  const visible = activeFilter === "Все" ? lots : lots.filter(l => l.category === activeFilter);
  lotGrid.innerHTML = visible.map(l => `
    <article class="lot-card">
      <span class="lot-tag">${l.category}</span>
      <h3>${l.title}</h3>
      <p>${l.text}</p>
      <div class="lot-meta">${l.meta.map(m => `<span>${m}</span>`).join("")}</div>
      ${l.type === "poster" ? posterSelector() : ""}
      ${l.details ? `<details class="lot-details"><summary>${l.details_title || "Подробнее"}</summary><ul>${l.details.map(item => `<li>${item}</li>`).join("")}</ul></details>` : ""}
      <div class="lot-bottom">
        <span class="price">${l.price}</span>
        <a class="details lot-action lot-action-${l.action || "lot"}" href="${actionHref(l.action)}" ${l.action === "chat" ? 'target="_blank" rel="noopener"' : ""}>${actionLabel(l.action)}</a>
      </div>
    </article>
  `).join("");
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderLots();
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-filter-link]");
  if (!link) return;
  activeFilter = link.dataset.filterLink;
  renderFilters();
  renderLots();
});

renderFilters();
renderLots();

document.querySelectorAll(".copy-button").forEach(button => {
  button.addEventListener("click", async () => {
    const text = document.getElementById(button.dataset.copy).textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
    }
    const toast = document.getElementById("toast");
    toast.textContent = "Реквизиты скопированы";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});

renderFilters();
renderLots();


(() => {
  const slides=[...document.querySelectorAll('.space-slide')];
  const dots=[...document.querySelectorAll('.space-dot')];
  const prev=document.querySelector('.space-arrow.prev');
  const next=document.querySelector('.space-arrow.next');
  const current=document.getElementById('spaceCurrent');
  if(!slides.length||!prev||!next||!current)return;
  let index=0;
  const show=(newIndex)=>{ index=(newIndex+slides.length)%slides.length; slides.forEach((s,i)=>s.classList.toggle('active',i===index)); dots.forEach((d,i)=>d.classList.toggle('active',i===index)); current.textContent=String(index+1); };
  prev.addEventListener('click',()=>show(index-1));
  next.addEventListener('click',()=>show(index+1));
  dots.forEach((d,i)=>d.addEventListener('click',()=>show(i)));
  const frame=document.querySelector('.space-carousel-frame');
  let touchStartX=0;
  frame?.addEventListener('touchstart',(e)=>{touchStartX=e.changedTouches[0].clientX;},{passive:true});
  frame?.addEventListener('touchend',(e)=>{const delta=e.changedTouches[0].clientX-touchStartX;if(Math.abs(delta)>45)show(index+(delta<0?1:-1));},{passive:true});
  show(0);
})();


// Refined room gallery: shows 3, 2, or 1 portrait photos and moves one at a time.
(() => {
  const track = document.getElementById("spaceGalleryTrack");
  const prev = document.getElementById("spaceGalleryPrev");
  const next = document.getElementById("spaceGalleryNext");
  const current = document.getElementById("spaceGalleryCurrent");
  if (!track || !prev || !next || !current) return;

  const cards = [...track.querySelectorAll(".space-card")];
  let index = 0;

  const visibleCount = () => {
    const width = window.innerWidth;
    if (width <= 520) return 1;
    if (width <= 1050) return 2;
    return 3;
  };

  const gap = () => {
    const styles = getComputedStyle(track);
    return parseFloat(styles.gap || "0");
  };

  const maxIndex = () => Math.max(0, cards.length - visibleCount());

  const render = () => {
    index = Math.min(Math.max(index, 0), maxIndex());
    const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
    const offset = index * (cardWidth + gap());
    track.style.transform = `translateX(-${offset}px)`;
    current.textContent = String(index + 1);
    prev.disabled = index === 0;
    next.disabled = index === maxIndex();
  };

  prev.addEventListener("click", () => {
    index -= 1;
    render();
  });
  next.addEventListener("click", () => {
    index += 1;
    render();
  });

  let touchStartX = 0;
  track.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 45) {
      index += delta < 0 ? 1 : -1;
      render();
    }
  }, { passive: true });

  window.addEventListener("resize", render);
  render();
})();

document.querySelectorAll("video").forEach((video) => {
  video.controls = true;
  video.playsInline = true;
  video.removeAttribute("poster");
});

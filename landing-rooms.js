(() => {
  const menuButton = document.querySelector('.ah-menu-toggle');
  const navigation = document.getElementById('site-navigation');

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });

  document.querySelectorAll('.ah-photo-set').forEach(set => {
    const track = set.querySelector('.ah-photo-track');
    const slides = Array.from(track.children);
    const previous = set.querySelector('.ah-photo-prev');
    const next = set.querySelector('.ah-photo-next');
    const count = set.querySelector('.ah-photo-count');
    let current = 0;

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, position) => { slide.hidden = position !== current; });
      count.textContent = `${current + 1} / ${slides.length}`;
    }

    previous.disabled = false;
    previous.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
    set.querySelector('.ah-photo-controls').hidden = false;
    let touchStart;
    track.addEventListener('touchstart', event => { touchStart = event.changedTouches[0]; }, {passive: true});
    track.addEventListener('touchend', event => {
      if (!touchStart) return;
      const end = event.changedTouches[0];
      const distance = end.clientX - touchStart.clientX;
      if (Math.abs(distance) > 45 && Math.abs(distance) > Math.abs(end.clientY - touchStart.clientY)) {
        if (event.cancelable) event.preventDefault();
        show(current + (distance < 0 ? 1 : -1));
      }
      touchStart = undefined;
    });
    show(0);
  });

  const photoDialog = document.getElementById('photo-dialog');
  const fullImage = photoDialog.querySelector('img');
  document.addEventListener('click', event => {
    const link = event.target.closest('.ah-photo-open');
    if (!link || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    if (typeof photoDialog.showModal !== 'function') return;
    event.preventDefault();
    fullImage.src = link.href;
    fullImage.alt = link.querySelector('img').alt;
    photoDialog.showModal();
  });
  photoDialog.addEventListener('click', event => {
    if (event.target === photoDialog) photoDialog.close();
  });
  photoDialog.addEventListener('close', () => { fullImage.removeAttribute('src'); });

  const programme = document.getElementById('arthubProgrammeEmbed');
  const classDialog = document.getElementById('class-dialog');
  const detailFrame = classDialog.querySelector('iframe');

  function syncLanguage() {
    programme.contentWindow?.postMessage({type: 'arthub:lang', lang: document.documentElement.lang}, location.origin);
    document.querySelectorAll('iframe[data-label-ru][data-label-en]').forEach(frame => {
      frame.title = document.documentElement.lang === 'en' ? frame.dataset.labelEn : frame.dataset.labelRu;
    });
  }

  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== programme.contentWindow || !event.data) return;
    if (event.data.type === 'arthub:height' && Number.isFinite(event.data.height)) {
      programme.style.height = `${Math.min(5000, Math.max(540, event.data.height + 24))}px`;
    }
    if (event.data.type === 'arthub:detail' && typeof event.data.item === 'string' && event.data.item) {
      const url = new URL('programme/detail.html', location.href);
      url.searchParams.set('item', event.data.item);
      url.searchParams.set('lang', document.documentElement.lang);
      detailFrame.src = url.href;
      if (!classDialog.open) classDialog.showModal();
    }
  });

  classDialog.addEventListener('close', () => { detailFrame.removeAttribute('src'); });
  programme.addEventListener('load', syncLanguage);
  document.querySelectorAll('button[data-lang]').forEach(button => button.addEventListener('click', syncLanguage));
  syncLanguage();
})();

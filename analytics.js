(() => {
  if (!['arthubtbilisi.com', 'www.arthubtbilisi.com'].includes(window.location.hostname)) return;

  const measurementId = 'G-WZ7G4RP9DE';
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.append(tag);

  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link) return;

    if (link.protocol === 'tel:') {
      gtag('event', 'phone_click');
    } else if (link.protocol === 'https:' && link.hostname === 't.me') {
      gtag('event', 'telegram_click');
    }
  });
})();

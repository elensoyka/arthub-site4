const enquiryForm = document.querySelector('.ah-sms-form');

enquiryForm.hidden = false;
enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(enquiryForm);
  const text = [document.querySelector('h1').textContent, fields.get('name'), fields.get('details')].join('\n\n');
  const appleMobile = /iP(?:hone|ad|od)/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const delimiter = appleMobile ? '&' : '?';
  window.location.href = `${enquiryForm.getAttribute('action')}${delimiter}body=${encodeURIComponent(text)}`;
});

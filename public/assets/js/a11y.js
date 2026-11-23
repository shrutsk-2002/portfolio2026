/* Accessible names for images and videos that the page templates render without them.
   Decorative icons are hidden from screen readers; content images get a description. */
(function () {
  var DECORATIVE = /(^icon-arrow-outward|^claude-ai-icon)/;
  var ALT = {
    'hero-photo': 'Portrait of Shruti Kalamdani',
    'logo-upstox': 'Upstox logo',
    'logo-prime-video': 'Prime Video logo',
    'logo-amazon': 'Amazon logo',
    'logo-globant': 'Globant logo',
    'logo-dig': 'Dig Design Studio logo',
    'logo-iitb': 'IIT Bombay logo',
    'logo-mvp': 'NDMVPS Center for Design logo',
    'pan-card': 'Upstox account opening screen for entering PAN card details',
    'stepper-screen': 'Upstox account opening screen showing the steps left to finish',
    'upi-payments': 'Upstox account opening screen for UPI payment',
    'l1-page': 'Upstox Invest Mode home screen with stocks, funds and other investments',
    'ipo-details-page-scroll-none': 'Upstox IPO details screen',
    'mutual-funds-fund-details-master': 'Upstox mutual fund details screen with returns and risk',
    'helth': 'Upstox health insurance plan screen',
    'life-insurance': 'Upstox life insurance plan screen',
    'life-2': 'Upstox life insurance plan comparison screen',
    'screenshot-2026-10-20-at-11.48.38-pm': 'Pixel template editor for Prime Video marketing artwork',
    'screenshot-2026-10-20-at-11.49.46-pm': 'Localization Central project tracker for Prime Video',
    'invest-stocks-flows-20s': 'Screen recording of buying stocks in Upstox Invest Mode',
    'pixel-hero-reel': 'Screen recording of the Pixel template editor',
    'pixel-ia': 'Animation showing how a Prime Video marketing asset breaks down into parts',
    'pixel-structure': 'Diagram of the marketing rules applied at every level of an asset',
    'pixel-hierarchy': 'Screen recording of Pixel forms for metadata and the asset hierarchy tree',
    'pixel-template-editor': 'Screen recording of Pixel flagging errors in a template before it ships',
    'pixel-photoshop': 'Screen recording of moving artwork from Pixel to Photoshop and back',
    'lc-screens-components': 'Screen recording of Localization Central screens',
    'lc-two-modes': 'Localization Central in Amazon mode and vendor mode, sharing one tracker',
    'lc-screens': 'Screen recording of Localization Central site structure, user roles and views',
    'laptop-frame': '',
    'lc-design-system': 'Screen recording of the Localization Central design system components',
    'lc-usability-analysis': 'Usability test results rating each task step by step',
    'insurance-hero': 'Screen recording of buying motor insurance in the Upstox app',
    'audit-funnel-wide': 'Funnel showing where people dropped off in the old insurance flow',
    'motor-confirm-flow-screen-instant': 'Screen recording of the faster motor insurance confirmation step',
    'motor-fetch-flow-screen-instant': 'Screen recording of vehicle details being fetched instantly',
    'motor-plan-choice-before': 'Screen recording of the old motor insurance plan choice screen',
    'motor-plan-recommended-after': 'Screen recording of the new screen leading with a recommended plan',
    'motor-confirm-flow-screen': 'Screen recording of confirming vehicle details found automatically',
    'motor-fetch-flow-screen': 'Screen recording of fetching vehicle details from the registration number',
    'health-steps-before-after': 'Health insurance purchase steps before and after the redesign',
    'life-steps-before-after': 'Life insurance purchase steps before and after the redesign'
  };
  function name(el) {
    var s = el.getAttribute('src') || el.getAttribute('poster') || '';
    if (!s && el.tagName === 'VIDEO') { var so = el.querySelector('source'); s = so ? so.getAttribute('src') || '' : ''; }
    return decodeURIComponent(s.split('?')[0].split('/').pop() || '').replace(/\.[a-z0-9]+$/i, '');
  }
  function fix(el) {
    var n = name(el); if (!n) return;
    var tag = el.tagName;
    if (DECORATIVE.test(n)) { if (tag === 'IMG') el.setAttribute('alt', ''); el.setAttribute('aria-hidden', 'true'); return; }
    var a = ALT[n];
    if (a === undefined) return;
    if (tag === 'IMG') { if (!el.getAttribute('alt')) el.setAttribute('alt', a); if (!a) el.setAttribute('aria-hidden', 'true'); }
    else if (tag === 'VIDEO') { if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', a); }
    else if (tag === 'IMAGE-SLOT') {
      if (!el.getAttribute('aria-label')) { el.setAttribute('role', 'img'); el.setAttribute('aria-label', a); el.setAttribute('alt', a); }
      var sh = el.shadowRoot && el.shadowRoot.querySelector('img[part="image"]'); if (sh) sh.setAttribute('alt', a);
    }
  }

  /* Touch screens: give standalone arrow links (e.g. "The full story →") a 44px-tall tap area without moving the layout */
  function padLinks() {
    if (!window.matchMedia || !window.matchMedia('(pointer: coarse)').matches) return;
    document.querySelectorAll('#dc-root a').forEach(function (a) {
      if (a.dataset.tapPad) return;
      var txt = (a.textContent || '').trim();
      if (!/[\u2192\u2190\u2193]/.test(txt) && !a.classList.contains('about-link')) return;
      var h = a.getBoundingClientRect().height; if (!h || h >= 44) return;
      var pad = Math.ceil((44 - h) / 2);
      var cs = getComputedStyle(a);
      if (cs.display === 'inline') a.style.display = 'inline-block';
      a.style.paddingTop = (parseFloat(cs.paddingTop) + pad) + 'px';
      a.style.paddingBottom = (parseFloat(cs.paddingBottom) + pad) + 'px';
      a.style.marginTop = (parseFloat(cs.marginTop) - pad) + 'px';
      a.style.marginBottom = (parseFloat(cs.marginBottom) - pad) + 'px';
      a.dataset.tapPad = '1';
    });
  }
  var padT = null;
  function schedulePad() { clearTimeout(padT); padT = setTimeout(padLinks, 300); }
  function scan(root) { (root.querySelectorAll ? root : document).querySelectorAll('img, video, image-slot').forEach(fix); }
  function start() {
    scan(document);
    schedulePad(); window.addEventListener('resize', schedulePad);
    new MutationObserver(function (ms) {
      ms.forEach(function (m) {
        if (m.type === 'attributes') { if (/^(IMG|VIDEO|IMAGE-SLOT)$/.test(m.target.tagName)) fix(m.target); return; }
        schedulePad();
        m.addedNodes.forEach(function (n) { if (n.nodeType !== 1) return; if (/^(IMG|VIDEO|IMAGE-SLOT)$/.test(n.tagName)) fix(n); scan(n); });
      });
    }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'poster'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

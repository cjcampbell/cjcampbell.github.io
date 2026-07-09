// Sticky nav shadow on scroll
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Smooth scroll for in-page anchor links; close mobile menu after click.
// Uses window.scrollTo so we can subtract the fixed nav height manually —
// scrollIntoView does not respect scroll-margin-top reliably across browsers.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const navHeight = nav ? nav.offsetHeight : 64;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    const toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  });
});

// News card renderer — reads the NEWS array from news.js
// Respects optional data-limit attribute on the grid element.
function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  if (typeof NEWS === 'undefined' || !NEWS.length) {
    grid.innerHTML = '<p class="news-empty">No news items yet.</p>';
    return;
  }
  const limit = grid.dataset.limit ? parseInt(grid.dataset.limit, 10) : Infinity;
  const items = NEWS.slice(0, limit);
  grid.innerHTML = items.map(item => {
    const creditHtml = item.credit
      ? `<span class="news-card-credit">${item.creditLink
          ? `<a href="${item.creditLink}" target="_blank" rel="noopener noreferrer">${item.credit}</a>`
          : item.credit}</span>`
      : '';
    const imageHtml = item.image
      ? `<div class="news-card-image"><img src="${item.image}" alt="" loading="lazy">${creditHtml}</div>`
      : `<div class="news-card-placeholder"><i class="fas fa-leaf"></i></div>`;
    const linkHtml = item.link
      ? `<a href="${item.link}" class="news-card-link" target="_blank" rel="noopener noreferrer">${item.linkText || 'Learn more →'}</a>`
      : '';
    return `<article class="news-card">
        ${imageHtml}
        <div class="news-card-body">
          <div class="news-card-date">${item.date}</div>
          <h3 class="news-card-headline">${item.headline}</h3>
          <p class="news-card-blurb">${item.blurb}</p>
          ${linkHtml}
        </div>
      </article>`;
  }).join('');
}

// Render immediately (this script is at the end of <body>, so the DOM above
// exists). The news grid is injected at runtime, which changes page height.
// If we arrived via a hash link (e.g. index.html#about), the browser may have
// already scrolled using the pre-render layout and landed too high — above the
// now-taller news section. Re-apply the scroll once the grid occupies its real
// space so the target lands correctly on first click.
renderNews();

if (location.hash && location.hash !== '#') {
  const hashTarget = document.querySelector(location.hash);
  if (hashTarget) {
    const navHeight = nav ? nav.offsetHeight : 64;
    window.scrollTo({ top: hashTarget.getBoundingClientRect().top + window.scrollY - navHeight });
  }
}

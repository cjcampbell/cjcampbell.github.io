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
    const imageHtml = item.image
      ? `<div class="news-card-image"><img src="${item.image}" alt="" loading="lazy"></div>`
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

document.addEventListener('DOMContentLoaded', renderNews);

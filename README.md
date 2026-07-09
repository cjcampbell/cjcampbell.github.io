# cjcampbell.github.io

Personal academic website for **CJ Campbell** — quantitative ecologist, Research Scientist at the University of Wisconsin–Madison (Dept. of Forest & Wildlife Ecology) and Quantitative Ecologist at Bat Conservation International.

Static site served via **GitHub Pages** (no build system). Push to `main` and it deploys; `.nojekyll` disables Jekyll so files are served as-is.

## Pages

- `index.html` — landing page (hero video, research pillars, news, about, contact)
- `methods.html` — research areas and methodological approaches
- `pubs.html` — publications and CV
- `news.html` — full news archive

## Editing news

News items live in `assets/js/news.js` (`NEWS` array, newest first). `assets/js/main.js` renders them into any `#news-grid`; a `data-limit` attribute caps how many show.

## Local preview

```bash
python3 -m http.server 8000
```

## Credits

Originally adapted from the [Hyperspace template by HTML5 UP](https://html5up.net) (CCA 3.0); since substantially redesigned. Icons from [Font Awesome](https://fontawesome.com) and [Academicons](https://jpswalsh.github.io/academicons/). See `LICENSE.txt`.

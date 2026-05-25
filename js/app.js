(function () {
  const D = window.WikiData;
  const main = document.getElementById('main');
  const leftNav = document.getElementById('leftNav');
  const rightNav = document.getElementById('rightNav');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const menuToggle = document.getElementById('menuToggle');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const category = (id) => D.categories.find((c) => c.id === id);
  const pagesIn = (id) => D.pages.filter((p) => p.category === id);
  const page = (cat, id) => D.pages.find((p) => p.category === cat && p.id === id);
  const route = () => (location.pathname.replace(/\/$/, '') || '/').replace('/index.html', '/');
  const icons = {
    beacon: 'M50 14v18M50 68v18M18 50h18M64 50h18M50 34a16 16 0 100 32 16 16 0 000-32z',
    ship: 'M50 12l28 68-28-14-28 14zM50 12v54',
    turret: 'M18 68h64M34 68V48h32v20M42 48l24-24 12 12-24 24',
    wing: 'M14 62l36-34 36 34-36-8z',
    module: 'M24 24h52v52H24zM38 38h24v24H38zM14 38h10M14 62h10M76 38h10M76 62h10',
    officer: 'M50 18a15 15 0 110 30 15 15 0 010-30zM24 84c7-22 45-22 52 0',
    faction: 'M22 82V18h52l-10 20 10 20H22',
    colony: 'M18 74V40l32-22 32 22v34zM34 74V52h32v22',
    scan: 'M50 16a34 34 0 100 68 34 34 0 000-68zM50 50l28-18M50 50h22',
    fleet: 'M18 64l20-42 20 42-20-10zM66 72l14-30 14 30-14-8zM50 82l14-30 14 30-14-8z',
    target: 'M50 14v18M50 68v18M14 50h18M68 50h18M50 30a20 20 0 100 40 20 20 0 000-40z',
    credits: 'M50 18c22 0 36 9 36 20S72 58 50 58 14 49 14 38s14-20 36-20zM14 38v24c0 11 14 20 36 20s36-9 36-20V38',
    mod: 'M50 20l8 9 12-2 4 12-9 8 3 13-11 7-8-9-10 9-11-7 3-13-9-8 4-12 12 2z',
    manual: 'M22 18h42c8 0 14 6 14 14v50H34c-7 0-12-5-12-12zM34 18v64',
    map: 'M18 24l20-8 24 8 20-8v60l-20 8-24-8-20 8zM38 16v60M62 24v60',
    signal: 'M20 70a42 42 0 0160 0M32 58a25 25 0 0136 0M46 72h8'
  };
  const icon = (name) => `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${icons[name] || icons.ship}" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function adSlot(kind) {
    const banner = kind === 'banner';
    return `<div class="ad-slot ad-${esc(kind)}" role="complementary" aria-label="Advertisement"><span class="ad-label">SPONSORED RELAY</span><ins class="adsbygoogle" style="display:block;${banner ? 'width:100%;height:90px;' : ''}" data-ad-client="ca-pub-1319817671788428" data-ad-slot="6141169453" ${banner ? '' : 'data-ad-format="auto"'} data-full-width-responsive="true"></ins></div>`;
  }
  function loadAds() {
    if (!window.adsbygoogle) return;
    document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }
  function sourceNotes(entity) {
    const list = (entity && entity.sources || ['wikiGG', 'officialSite']).map((k) => D.sourceRegistry[k]).filter(Boolean);
    return `<aside class="source-notes"><div class="panel-label">SOURCE PACKET</div><div class="src-meta"><span>UPDATED ${esc(D.site.lastUpdated)}</span><span>${esc(D.site.buildStatus)}</span></div><ul>${list.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a> - ${esc(s.note)}</li>`).join('')}</ul></aside>`;
  }
  function sectionsHTML(sections) {
    return sections.map((s, i) => `<section class="intel-section" id="sec-${i}"><h3><span>0${i + 1}</span>${esc(s.h)}</h3>${s.body || ''}${s.list ? `<div class="readout-list">${s.list.map((x) => `<div>${esc(x)}</div>`).join('')}</div>` : ''}</section>`).join('');
  }
  function relatedBlock(p) {
    return `<div class="related-strip">${(p.related || []).map((r) => `<a href="${esc(r.href)}">${esc(r.label)}</a>`).join('')}</div>`;
  }
  function setMeta(attr, key, value) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = value || '';
  }
  function applySeo(r) {
    if (!window.WikiMeta || !document.head) return;
    const seo = window.WikiMeta.seoFor(r);
    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords.join(', '));
    setMeta('property', 'og:title', seo.ogTitle);
    setMeta('property', 'og:description', seo.ogDescription);
    setMeta('property', 'og:type', seo.ogType);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:image', seo.ogImage);
    setMeta('name', 'twitter:title', seo.ogTitle);
    setMeta('name', 'twitter:description', seo.ogDescription);
    setMeta('name', 'twitter:image', seo.ogImage);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = seo.canonical;
    let ld = document.getElementById('ssw-jsonld');
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'ssw-jsonld';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(window.WikiMeta.jsonLdFor(r));
  }
  function renderLeftNav(active) {
    leftNav.innerHTML = `<div class="rail-title">SECTOR INDEX</div>${D.categories.map((c) => `<a class="index-row ${esc(c.accent)}" href="/${esc(c.id)}" data-r="/${esc(c.id)}"><span>${icon(c.icon)}</span><b>${esc(c.title)}</b></a>`).join('')}<div class="rail-title small">SITE FILES</div><a class="index-row" href="/about" data-r="/about"><b>About</b></a><a class="index-row" href="/privacy-policy" data-r="/privacy-policy"><b>Privacy</b></a><a class="index-row" href="/contact" data-r="/contact"><b>Contact</b></a>${adSlot('half-page')}`;
    leftNav.querySelectorAll('a').forEach((a) => {
      const r = a.getAttribute('data-r');
      if (r && (active === r || active.startsWith(r + '/'))) a.classList.add('active');
    });
  }
  function renderRightNav() {
    const tx = D.transmissions[Math.floor(Math.random() * D.transmissions.length)];
    rightNav.innerHTML = `<div class="rail-title">INTEL FEED</div><a href="/ships/best-ships">Best Ships</a><a href="/colonies/colony-setup-guide">Colony Guide</a><a href="/mods/best-mods">Best Mods</a><a href="/combat/flux-management">Flux Warfare</a><a href="/factions/hegemony">Hegemony</a><a href="/fleet-building/endgame-fleets">Endgame Fleets</a><div class="transmission-card"><span>OPEN CHANNEL</span><p>${esc(tx)}</p></div>${adSlot('rectangle')}`;
  }
  function renderHome() {
    const popular = ['best-ships', 'colony-setup-guide', 'best-mods', 'make-credits-fast', 'flux-management', 'beginner-survival-guide'].map((id) => D.pages.find((p) => p.id === id)).filter(Boolean);
    const factions = ['hegemony', 'tri-tachyon', 'persean-league', 'sindrian-diktat', 'luddic-church', 'luddic-path', 'pirates', 'remnants'].map((id) => D.pages.find((p) => p.id === id)).filter(Boolean);
    main.innerHTML = `<section class="sector-hero"><img src="/assets/images/hero/sector-command.svg" alt="Persean Sector tactical command display" /><div class="radar"></div><div class="hero-copy"><span class="kicker">Recovered Persean Sector database</span><h1>STARSECTOR WIKI</h1><p>Ships, factions, colonies, combat systems, fleet doctrine, exploration, mods and survival across the Persean Sector.</p><div class="hero-actions"><a href="/ships">Explore Ships</a><a href="/beginner-guides/beginner-survival-guide">Beginner Guide</a><a href="/factions">Factions</a><a href="/colonies/colony-setup-guide">Colony Guide</a><a href="/mods/best-mods">Mods</a></div></div></section>${adSlot('banner')}<section class="dashboard-band"><div><span class="panel-label">POPULAR CATEGORIES</span><div class="category-matrix">${D.categories.slice(0, 14).map((c) => `<a class="matrix-card ${esc(c.accent)}" href="/${esc(c.id)}"><span class="matrix-icon">${icon(c.icon)}</span><b>${esc(c.title)}</b><small>${esc(c.summary)}</small></a>`).join('')}</div></div></section><section class="split-panels"><div class="data-panel"><span class="panel-label">BEGINNER COMMAND CENTER</span>${popular.map((p) => `<a class="signal-link" href="/${esc(p.category)}/${esc(p.id)}"><b>${esc(p.title)}</b><span>${esc(p.summary)}</span></a>`).join('')}</div><div class="data-panel faction-panel"><span class="panel-label">FACTION SHOWCASE</span>${factions.map((f) => `<a class="faction-row" href="/${esc(f.category)}/${esc(f.id)}"><b>${esc(f.title)}</b><span>${esc(f.stats.slice(0, 3).join(' / '))}</span></a>`).join('')}</div></section>${adSlot('in-article')}`;
  }
  function renderCategory(id) {
    const c = category(id);
    if (!c) return render404(id);
    const pages = pagesIn(id);
    main.innerHTML = `${adSlot('banner')}<section class="archive-head ${esc(c.accent)}"><div><span class="panel-label">ARCHIVE NODE</span><h1>${esc(c.title)}</h1><p>${esc(c.summary)}</p></div><div class="node-icon">${icon(c.icon)}</div></section><section class="category-matrix wide">${pages.map((p) => `<a class="matrix-card ${esc(c.accent)}" href="/${esc(p.category)}/${esc(p.id)}"><b>${esc(p.title)}</b><small>${esc(p.summary)}</small><span class="tagline">${esc(p.stats.slice(0, 2).join(' // '))}</span></a>`).join('')}</section>${adSlot('in-article')}`;
  }
  function renderDetail(cat, id) {
    const c = category(cat);
    const p = page(cat, id);
    if (!c || !p) return render404(cat + '/' + id);
    main.innerHTML = `${adSlot('banner')}<article class="intel-page ${esc(c.accent)}"><header class="intel-header"><div><div class="breadcrumb"><a href="/${esc(c.id)}">${esc(c.title)}</a> / ${esc(p.title)}</div><h1>${esc(p.title)}</h1><p>${esc(p.summary)}</p></div><aside class="quick-readout"><span>QUICK READOUT</span>${p.stats.map((x) => `<b>${esc(x)}</b>`).join('')}</aside></header><div class="article-grid"><div>${sectionsHTML(p.sections)}${relatedBlock(p)}${sourceNotes(p)}</div><aside class="toc-panel"><span class="panel-label">TACTICAL TAGS</span>${p.tags.slice(0, 8).map((t) => `<a href="/${esc(c.id)}">${esc(t)}</a>`).join('')}</aside></div></article>${adSlot('in-article')}`;
  }
  function renderInfo(slug) {
    const p = D.infoPages[slug];
    if (!p) return render404(slug);
    main.innerHTML = `${adSlot('banner')}<section class="intel-page"><header class="intel-header"><div><div class="breadcrumb">Home / ${esc(p.title)}</div><h1>${esc(p.title)}</h1></div></header><div class="article-grid"><div class="intel-section">${p.body}</div><aside class="toc-panel"><span class="panel-label">SITE FILE</span><a href="/about">About</a><a href="/privacy-policy">Privacy Policy</a><a href="/contact">Contact</a></aside></div>${sourceNotes(null)}</section>`;
  }
  function render404(slug) {
    main.innerHTML = `<section class="intel-page"><header class="intel-header"><div><h1>Signal Lost</h1><p>No database record found for <code>${esc(slug)}</code>.</p><p><a href="/">Return to sector command</a></p></div></header></section>`;
  }
  function navigate() {
    const r = route();
    renderLeftNav(r);
    renderRightNav();
    const seg = r.split('/').filter(Boolean);
    if (r === '/') renderHome();
    else if (seg.length === 1 && category(seg[0])) renderCategory(seg[0]);
    else if (seg.length === 1 && D.infoPages[seg[0]]) renderInfo(seg[0]);
    else if (seg.length === 2) renderDetail(seg[0], seg[1]);
    else render404(r);
    applySeo(r);
    setTimeout(loadAds, 100);
  }
  function go(path) {
    const clean = path.replace(/\/$/, '') || '/';
    if (clean === route()) return;
    history.pushState({}, '', clean);
    leftNav.classList.remove('open');
    navigate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const searchIndex = Array.isArray(D.searchIndex) ? D.searchIndex : [
    ...D.categories.map((c) => ({ title: c.title, sub: 'Archive Node', href: '/' + c.id, tags: c.summary })),
    ...D.pages.map((p) => ({ title: p.title, sub: category(p.category).title, href: '/' + p.category + '/' + p.id, tags: p.tags.join(' ') })),
    ...Object.entries(D.infoPages).map(([k, p]) => ({ title: p.title, sub: 'Site File', href: '/' + k, tags: p.body }))
  ];
  function runSearch(q) {
    if (!q) {
      searchResults.classList.remove('open');
      return;
    }
    const low = q.toLowerCase();
    const matches = searchIndex.filter((x) => (x.title + ' ' + x.sub + ' ' + x.tags).toLowerCase().includes(low)).slice(0, 14);
    searchResults.innerHTML = matches.length ? matches.map((m) => `<a href="${esc(m.href)}"><b>${esc(m.title)}</b><span>${esc(m.sub)}</span></a>`).join('') : '<div class="empty">No sector records match.</div>';
    searchResults.classList.add('open');
  }
  searchInput.addEventListener('input', () => runSearch(searchInput.value.trim()));
  searchInput.addEventListener('focus', () => runSearch(searchInput.value.trim()));
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) {
      if (!e.target.closest('.sector-search')) searchResults.classList.remove('open');
      return;
    }
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return;
    const url = new URL(href, location.origin);
    if (url.origin !== location.origin) return;
    if (!window.__GW_PRERENDER__) {
      searchInput.value = '';
      searchResults.classList.remove('open');
      return;
    }
    e.preventDefault();
    searchInput.value = '';
    searchResults.classList.remove('open');
    go(url.pathname);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') searchResults.classList.remove('open');
  });
  window.addEventListener('popstate', () => { if (window.__GW_PRERENDER__) navigate(); });
  if (menuToggle) menuToggle.onclick = () => leftNav.classList.toggle('open');
  if (window.__GW_PRERENDER__) {
    navigate();
  } else {
    renderLeftNav(route());
    renderRightNav();
    setTimeout(loadAds, 100);
  }
})();

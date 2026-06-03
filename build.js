'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

function mkEl() {
  return {
    _html: '',
    _text: '',
    attributes: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    set innerHTML(v) { this._html = String(v); },
    get innerHTML() { return this._html; },
    set textContent(v) { this._text = String(v); },
    get textContent() { return this._text; },
    setAttribute(k, v) { this.attributes[k] = v; },
    getAttribute(k) { return this.attributes[k] || null; },
    addEventListener() {},
    querySelector() { return mkEl(); },
    querySelectorAll() { return []; },
    appendChild() {},
    remove() {},
    closest() { return null; },
    focus() {},
    blur() {}
  };
}
const els = {};
['main', 'leftNav', 'rightNav', 'searchInput', 'searchResults', 'menuToggle'].forEach((id) => { els[id] = mkEl(); });
const headEl = mkEl();
global.document = {
  getElementById: (id) => els[id] || null,
  querySelector: () => mkEl(),
  querySelectorAll: () => [],
  createElement: () => mkEl(),
  addEventListener() {},
  get activeElement() { return mkEl(); },
  head: headEl
};
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.history = { pushState() {} };
let CURRENT = '/';
global.location = { get pathname() { return CURRENT; }, origin: 'https://starsector.gamewikihub.com' };
global.window = { addEventListener() {}, scrollTo() {}, adsbygoogle: [], __GW_PRERENDER__: true };
global.URL = URL;
global.setTimeout = () => {};

require('./js/data.js');
global.window.WikiData = window.WikiData;
require('./js/meta.js');
global.window.WikiMeta = window.WikiMeta;
const D = window.WikiData;
const M = window.WikiMeta;
const APP = require.resolve('./js/app.js');
const PARTIALS = path.join(ROOT, 'partials');

function escAttr(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escText(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function readPartial(name) {
  return fs.readFileSync(path.join(PARTIALS, name), 'utf8').trim();
}
function pageTemplate() {
  let template = readPartial('layout.html');
  template = template.replace(/<!-- ssw:header -->[\s\S]*?<!-- \/ssw:header -->/, '<!-- ssw:header -->\n' + readPartial('header.html') + '\n    <!-- /ssw:header -->');
  template = template.replace(/<!-- ssw:sidebar -->[\s\S]*?<!-- \/ssw:sidebar -->/, '<!-- ssw:sidebar -->\n' + readPartial('sidebar.html') + '\n    <!-- /ssw:sidebar -->');
  template = template.replace(/<!-- ssw:footer -->[\s\S]*?<!-- \/ssw:footer -->/, '<!-- ssw:footer -->\n' + readPartial('footer.html') + '\n    <!-- /ssw:footer -->');
  return template;
}
function renderRoute(route) {
  CURRENT = route;
  delete require.cache[APP];
  els.main._html = '';
  els.leftNav._html = '';
  els.rightNav._html = '';
  require('./js/app.js');
  return {
    main: els.main._html,
    leftNav: els.leftNav._html,
    rightNav: els.rightNav._html
  };
}
function headBlock(route) {
  const seo = M.seoFor(route);
  return '    ' + [
    `<title>${escText(seo.title)}</title>`,
    `<meta name="description" content="${escAttr(seo.description)}" />`,
    `<meta name="keywords" content="${escAttr((seo.keywords || []).join(', '))}" />`,
    `<link rel="canonical" href="${escAttr(seo.canonical)}" />`,
    `<meta property="og:site_name" content="Starsector Wiki" />`,
    `<meta property="og:title" content="${escAttr(seo.ogTitle)}" />`,
    `<meta property="og:description" content="${escAttr(seo.ogDescription)}" />`,
    `<meta property="og:type" content="${escAttr(seo.ogType)}" />`,
    `<meta property="og:url" content="${escAttr(seo.canonical)}" />`,
    `<meta property="og:image" content="${escAttr(seo.ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escAttr(seo.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escAttr(seo.ogDescription)}" />`,
    `<meta name="twitter:image" content="${escAttr(seo.ogImage)}" />`
  ].join('\n    ');
}
function buildPage(template, route) {
  let html = template;
  const rendered = renderRoute(route);
  if (!rendered.main.trim()) {
    throw new Error(`Prerender produced empty main content for ${route}`);
  }
  html = html.replace(/<!-- ssw:head -->[\s\S]*?<!-- \/ssw:head -->/, '<!-- ssw:head -->\n' + headBlock(route) + '\n    <!-- /ssw:head -->');
  html = html.replace(/<script type="application\/ld\+json" id="ssw-jsonld">[\s\S]*?<\/script>/, '<script type="application/ld+json" id="ssw-jsonld">' + JSON.stringify(M.jsonLdFor(route)) + '</script>');
  html = html.replace(/<aside class="sector-index" id="leftNav">[\s\S]*?<main id="main">/,
    '<aside class="sector-index" id="leftNav">' + rendered.leftNav + '</aside>\n      <main id="main">');
  html = html.replace(/<main id="main">[\s\S]*?<\/main>/, '<main id="main">' + rendered.main + '</main>');
  html = html.replace(/<aside class="intel-rail" id="rightNav">[\s\S]*?<\/aside>\s*(?:<\/aside>\s*)*<\/div>\s*<footer/,
    '<aside class="intel-rail" id="rightNav">' + rendered.rightNav + '</aside>\n    </div>\n    <footer');
  return html;
}
function routes() {
  return ['/', '/about', '/privacy-policy', '/contact'].concat(D.categories.map((c) => '/' + c.id)).concat(D.pages.map((p) => '/' + p.category + '/' + p.id));
}
function outPath(route) {
  return route === '/' ? path.join(ROOT, 'index.html') : path.join(ROOT, route.replace(/^\//, ''), 'index.html');
}
function writeSitemap(allRoutes) {
  const urls = allRoutes.map((r) => {
    const loc = D.site.baseUrl + (r === '/' ? '/' : r);
    const depth = r.split('/').filter(Boolean).length;
    return `  <url><loc>${loc}</loc><lastmod>${D.site.lastUpdated}</lastmod><changefreq>${r === '/' ? 'daily' : 'weekly'}</changefreq><priority>${r === '/' ? '1.0' : (depth === 1 ? '0.8' : '0.7')}</priority></url>`;
  }).join('\n');
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');
}
function run() {
  const template = pageTemplate();
  const allRoutes = routes();
  allRoutes.forEach((route) => {
    const file = outPath(route);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, buildPage(template, route), 'utf8');
  });
  writeSitemap(allRoutes);
  console.log('Static prerender complete: ' + allRoutes.length + ' HTML files generated.');
}
run();

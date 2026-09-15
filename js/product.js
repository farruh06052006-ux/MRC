/* ============================================================
   MRC — страница товара. Товар берётся по ?id= из data.js
   На отдельных языковых карточках (/ru/..., /uz/...) параметра нет:
   там товар задан через MRC_PRODUCT_ID, а пути — через MRC_*_PATH.
   ============================================================ */

(function () {
  var root = document.getElementById('product');
  if (!root) return;

  var siteRoot = window.MRC_SITE_ROOT || '';
  var homePath = window.MRC_HOME_PATH || (siteRoot + 'index.html');
  var catalogPath = window.MRC_CATALOG_PATH || (siteRoot + 'catalog.html');
  /* У товаров с отдельной языковой карточкой адрес берётся из MRC_PRODUCT_URLS */
  var urls = window.MRC_PRODUCT_URLS || {};
  var catUrls = window.MRC_CATEGORY_URLS || {};

  /* Товар, закреплённый за страницей, важнее ?id= — чужой id не подменяет карточку */
  var id = window.MRC_PRODUCT_ID || new URLSearchParams(location.search).get('id');
  var p = PRODUCTS.find(function (x) { return x.id === id; });
  var relBox = document.getElementById('related');

  /* ---------- Товар не найден ---------- */
  if (!p) {
    if (relBox) relBox.style.display = 'none';
    var renderMissing = function () {
      root.innerHTML =
        '<div class="wrap sec">' +
          '<h1>' + esc(t('product.notFound')) + '</h1>' +
          '<p class="lead" style="margin:16px 0 28px">' + esc(t('product.notFoundP')) + '</p>' +
          '<a class="btn btn--solid" href="' + catalogPath + '">' + esc(t('btn.catalog')) + '</a>' +
        '</div>';
    };
    renderMissing();
    document.addEventListener('mrc:lang', renderMissing);
    return;
  }

  var cat = CATEGORIES.find(function (c) { return c.id === p.cat; }) || { name: { ru: '' }, id: '' };

  function render() {
    var name = esc(T(p.name));
    var short = T(p.short);

    document.title = T(p.name) + ' — MRC';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', short);

    var stockRow = p.stock === 'in'
      ? '<span class="tag tag--in">' + esc(t('tag.inLong')) + '</span>'
      : '<span class="tag">' + esc(t('tag.orderLong')) + '</span>';

    var specs = (p.specs || []).map(function (s) {
      return '<tr><th>' + esc(T(s.k)) + '</th><td>' + esc(T(s.v)) + '</td></tr>';
    }).join('');

    var thumbs = p.images.length > 1
      ? '<div class="pd__thumbs">' + p.images.map(function (src, i) {
          return '<div class="frame' + (i === 0 ? ' is-sel' : '') + '" data-i="' + i + '" data-ph="' + (i + 1) + '">' +
                 '<img src="' + esc(siteRoot + src) + '" alt="" onerror="imgFallback(this)"></div>';
        }).join('') + '</div>'
      : '';

    root.innerHTML =
      '<div class="wrap">' +
        '<nav class="crumbs">' +
          '<a href="' + homePath + '">' + esc(t('crumbs.home')) + '</a> / ' +
          '<a href="' + catalogPath + '">' + esc(t('crumbs.catalog')) + '</a> / ' +
          '<a href="' + (catUrls[cat.id] || (catalogPath + '?cat=' + esc(cat.id))) + '">' + esc(T(cat.name)) + '</a> / ' +
          '<span>' + name + '</span>' +
        '</nav>' +

        '<div class="pd">' +
          '<div>' +
            '<div class="frame pd__main" id="pdMain" data-ph="' + name + '">' +
              '<img src="' + esc(siteRoot + (p.images[0] || '')) + '" alt="' + name + '" onerror="imgFallback(this)">' +
            '</div>' + thumbs +
          '</div>' +

          '<div>' + stockRow +
            '<h1>' + name + '</h1>' +
            '<p class="pd__desc">' + esc(T(p.desc)) + '</p>' +

            '<h2 class="h-tech">' + esc(t('product.specs')) + '</h2>' +
            '<table class="specs">' + specs + '</table>' +

            '<div class="btns">' +
              '<a class="btn btn--solid" href="tel:' + esc(SITE.phone1) + '">' +
                '<svg><use href="#i-tel"></use></svg>' + esc(t('btn.call')) + '</a>' +
              '<a class="btn" target="_blank" rel="noopener" href="' +
                esc(waLink(t('msg.hello') + ' ' + T(p.name))) + '">' +
                '<svg><use href="#i-wa"></use></svg>WhatsApp</a>' +
              '<a class="btn" target="_blank" rel="noopener" href="' + esc(tgLink(SITE.telegram1)) + '">' +
                '<svg><use href="#i-tg"></use></svg>Telegram</a>' +
            '</div>' +

            '<h2 class="h-tech" style="margin-top:44px">' + esc(t('form.reqTitle')) + '</h2>' +
            '<form class="form">' +
              '<input type="hidden" name="item" value="' + name + '">' +
              '<div class="form__row">' +
                '<div><label for="f-name">' + esc(t('form.name')) + '</label>' +
                  '<input id="f-name" name="name" required></div>' +
                '<div><label for="f-phone">' + esc(t('form.phone')) + '</label>' +
                  '<input id="f-phone" name="phone" type="tel" required></div>' +
              '</div>' +
              '<div><label for="f-msg">' + esc(t('form.qty')) + '</label>' +
                '<textarea id="f-msg" name="message"></textarea></div>' +
              '<div><button class="btn btn--solid" type="submit">' + esc(t('btn.request')) + '</button></div>' +
            '</form>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* Переключение фото */
    var main = document.getElementById('pdMain');
    root.querySelectorAll('.pd__thumbs .frame').forEach(function (th) {
      th.addEventListener('click', function () {
        root.querySelectorAll('.pd__thumbs .frame').forEach(function (x) { x.classList.remove('is-sel'); });
        th.classList.add('is-sel');
        main.classList.remove('is-ph');
        main.innerHTML = '<img src="' + esc(siteRoot + p.images[th.dataset.i]) + '" alt="' + name +
                         '" onerror="imgFallback(this)">';
      });
    });

    renderRelated();
  }

  /* ---------- Похожие товары ---------- */
  function renderRelated() {
    if (!relBox) return;
    var rel = PRODUCTS.filter(function (x) {
      return x.cat === p.cat && x.id !== p.id;
    }).slice(0, 3);

    if (!rel.length) { relBox.style.display = 'none'; return; }
    relBox.style.display = '';

    relBox.innerHTML =
      '<div class="wrap">' +
        '<div class="sec-head">' +
          '<div><h2>' + esc(t('product.related')) + '</h2></div>' +
          '<a class="link" href="' + (catUrls[cat.id] || (catalogPath + '?cat=' + esc(cat.id))) + '">' +
            esc(t('product.relatedLink')) + '</a>' +
        '</div>' +
        '<div class="cards">' + rel.map(function (r) {
          var rn = esc(T(r.name));
          var href = urls[r.id] || (siteRoot + 'product.html?id=' + encodeURIComponent(r.id));
          return '<article class="card">' +
            '<a class="frame" data-ph="' + rn + '" href="' + href + '">' +
              '<img src="' + esc(siteRoot + (r.images[0] || '')) + '" alt="' + rn + '" loading="lazy" onerror="imgFallback(this)"></a>' +
            '<div class="card__body"><h3>' + rn + '</h3><p>' + esc(T(r.short)) + '</p>' +
              '<div class="card__foot">' +
                (r.stock === 'in'
                  ? '<span class="tag tag--in">' + esc(t('tag.in')) + '</span>'
                  : '<span class="tag">' + esc(t('tag.order')) + '</span>') +
                '<a class="card__link" href="' + href + '">' + esc(t('btn.more')) + '</a>' +
              '</div>' +
            '</div></article>';
        }).join('') + '</div>' +
      '</div>';
  }

  /* ---------- Разметка для поисковиков ----------
     На отдельных языковых карточках Product-разметка уже лежит
     в самом HTML — второй копии быть не должно.
  ------------------------------------------------------------ */
  function hasProductSchema() {
    var nodes = document.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].textContent.indexOf('"Product"') !== -1) return true;
    }
    return false;
  }

  function injectSchema() {
    var node = document.createElement('script');
    node.type = 'application/ld+json';
    node.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: T(p.name),
      description: T(p.desc),
      category: T(cat.name),
      brand: { '@type': 'Brand', name: 'MRC — My Road Construction' },
      offers: {
        '@type': 'Offer',
        availability: p.stock === 'in'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
        priceCurrency: 'UZS'
      }
    });
    document.head.appendChild(node);
  }

  render();
  if (!hasProductSchema()) injectSchema();
  document.addEventListener('mrc:lang', render);
})();

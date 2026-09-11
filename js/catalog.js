/* ============================================================
   MRC — каталог: фильтр по категориям и сетка товаров
   ============================================================ */

(function () {
  var filtersBox = document.getElementById('filters');
  var cardsBox = document.getElementById('cards');
  if (!filtersBox || !cardsBox) return;

  var params = new URLSearchParams(location.search);
  var active = params.get('cat') || 'all';
  if (active !== 'all' && !CATEGORIES.some(function (c) { return c.id === active; })) {
    active = 'all';
  }

  function renderFilters() {
    var html = '<button data-cat="all">' + esc(t('catalog.all')) + '</button>';
    CATEGORIES.forEach(function (c) {
      html += '<button data-cat="' + esc(c.id) + '">' + esc(T(c.name)) + '</button>';
    });
    filtersBox.innerHTML = html;

    filtersBox.querySelectorAll('button').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.cat === active);
      b.addEventListener('click', function () {
        active = b.dataset.cat;
        history.replaceState(null, '',
          active === 'all' ? 'catalog.html' : 'catalog.html?cat=' + active);
        renderFilters();
        renderCards();
      });
    });
  }

  function renderCards() {
    var list = active === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(function (p) { return p.cat === active; });

    if (!list.length) {
      cardsBox.innerHTML = '<p class="empty">' + esc(t('catalog.empty')) + '</p>';
      return;
    }

    cardsBox.innerHTML = list.map(function (p) {
      var name = esc(T(p.name));
      var href = 'product.html?id=' + encodeURIComponent(p.id);
      var tag = p.stock === 'in'
        ? '<span class="tag tag--in">' + esc(t('tag.in')) + '</span>'
        : '<span class="tag">' + esc(t('tag.order')) + '</span>';

      return '<article class="card">' +
          '<a class="frame" data-ph="' + name + '" href="' + href + '">' +
            '<img src="' + esc(p.images[0] || '') + '" alt="' + name + '" loading="lazy" onerror="imgFallback(this)">' +
          '</a>' +
          '<div class="card__body">' +
            '<h3>' + name + '</h3>' +
            '<p>' + esc(T(p.short)) + '</p>' +
            '<div class="card__foot">' + tag +
              '<a class="card__link" href="' + href + '">' + esc(t('btn.more')) + '</a>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join('');
  }

  function render() { renderFilters(); renderCards(); }

  render();
  document.addEventListener('mrc:lang', render);
})();

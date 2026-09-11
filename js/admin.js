/* ============================================================
   MRC — админ-панель
   Правки хранятся в памяти браузера (localStorage).
   Публикация — скачать data.js и заменить файл в папке js/.
   ============================================================ */

(function () {
'use strict';

var STORE = 'mrc_data';
var PREVIEW = 'mrc_preview';

var db = null;
var dirty = false;
var editingCat = null;
var editingProd = null;
var prodFilter = 'all';

/* ---------- Мелкие помощники ---------- */
function esc(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function ru(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field.ru || field.uz || '';
}
function clone(x) { return JSON.parse(JSON.stringify(x)); }
function $(id) { return document.getElementById(id); }

function slug(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ---------- Загрузка данных ---------- */
function load() {
  var draft = null;
  try {
    var raw = localStorage.getItem(STORE);
    if (raw) draft = JSON.parse(raw);
  } catch (e) {
    console.warn('Черновик повреждён, беру данные из файла', e);
  }

  if (draft && draft.SITE && draft.CATEGORIES && draft.PRODUCTS) {
    db = draft;
    setStatus('Открыт черновик из памяти браузера');
  } else {
    db = { SITE: clone(SITE), CATEGORIES: clone(CATEGORIES), PRODUCTS: clone(PRODUCTS) };
    setStatus('Данные загружены из js/data.js');
  }
}

function setStatus(text, isDirty) {
  var el = $('status');
  el.textContent = text;
  el.classList.toggle('is-dirty', !!isDirty);
}

function markDirty() {
  dirty = true;
  setStatus('Есть несохранённые правки', true);
}

function saveDraft(quiet) {
  try {
    localStorage.setItem(STORE, JSON.stringify(db));
    dirty = false;
    if (!quiet) setStatus('Сохранено в памяти браузера · ' + new Date().toLocaleTimeString());
    return true;
  } catch (e) {
    alert('Не удалось сохранить: ' + e.message +
          '\n\nВероятно, не хватает места в браузере. Скачайте data.js.');
    return false;
  }
}

/* ---------- Вкладки ---------- */
$('tabs').addEventListener('click', function (e) {
  var b = e.target.closest('button[data-tab]');
  if (!b) return;
  document.querySelectorAll('.adm-tabs button').forEach(function (x) {
    x.classList.toggle('is-active', x === b);
  });
  document.querySelectorAll('.adm-panel').forEach(function (p) {
    p.classList.toggle('is-active', p.id === 'tab-' + b.dataset.tab);
  });
});

/* ================= КОНТАКТЫ ================= */
function fillContacts() {
  document.querySelectorAll('[data-site]').forEach(function (el) {
    var path = el.getAttribute('data-site').split('.');
    var val = db.SITE;
    for (var i = 0; i < path.length && val != null; i++) val = val[path[i]];
    el.value = val || '';

    el.oninput = function () {
      var obj = db.SITE;
      for (var j = 0; j < path.length - 1; j++) {
        if (!obj[path[j]]) obj[path[j]] = {};
        obj = obj[path[j]];
      }
      obj[path[path.length - 1]] = el.value;
      markDirty();
    };
  });
}

/* ================= КАТЕГОРИИ ================= */
function renderCats() {
  var box = $('catsList');
  if (!db.CATEGORIES.length) {
    box.innerHTML = '<div class="adm-empty">Категорий пока нет</div>';
    return;
  }
  box.innerHTML = db.CATEGORIES.map(function (c, i) {
    var count = db.PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
    return '<div class="adm-item">' +
      '<img class="adm-item__thumb" src="' + esc(c.image) + '" alt="" onerror="this.style.visibility=\'hidden\'">' +
      '<div class="adm-item__main"><b>' + esc(ru(c.name)) + '</b>' +
        '<span>' + esc(c.id) + ' · товаров: ' + count + '</span></div>' +
      '<div class="adm-item__acts">' +
        '<button type="button" class="mini" data-up="' + i + '"' + (i === 0 ? ' disabled' : '') + '>↑</button>' +
        '<button type="button" class="mini" data-down="' + i + '"' + (i === db.CATEGORIES.length - 1 ? ' disabled' : '') + '>↓</button>' +
        '<button type="button" class="mini" data-edit="' + i + '">Изменить</button>' +
        '<button type="button" class="mini mini--danger" data-del="' + i + '">Удалить</button>' +
      '</div></div>';
  }).join('');
}

$('catsList').addEventListener('click', function (e) {
  var b = e.target.closest('button');
  if (!b) return;

  if (b.dataset.edit !== undefined) { openCat(+b.dataset.edit); return; }

  if (b.dataset.del !== undefined) {
    var i = +b.dataset.del;
    var c = db.CATEGORIES[i];
    var used = db.PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
    var msg = 'Удалить категорию «' + ru(c.name) + '»?';
    if (used) msg += '\n\nВ ней ' + used + ' товар(ов). Они останутся, но пропадут из каталога, ' +
                     'пока вы не назначите им другую категорию.';
    if (!confirm(msg)) return;
    db.CATEGORIES.splice(i, 1);
    markDirty(); renderCats(); renderProdFilter();
    return;
  }

  var from = b.dataset.up !== undefined ? +b.dataset.up : (b.dataset.down !== undefined ? +b.dataset.down : -1);
  if (from < 0) return;
  var to = b.dataset.up !== undefined ? from - 1 : from + 1;
  var moved = db.CATEGORIES.splice(from, 1)[0];
  db.CATEGORIES.splice(to, 0, moved);
  markDirty(); renderCats();
});

$('catAdd').addEventListener('click', function () {
  db.CATEGORIES.push({
    id: '', name: { ru: '', uz: '' }, desc: { ru: '', uz: '' },
    image: 'assets/img/products/'
  });
  markDirty();
  openCat(db.CATEGORIES.length - 1);
});

function openCat(i) {
  editingCat = i;
  var c = db.CATEGORIES[i];
  $('catEditTitle').textContent = ru(c.name) || 'Новая категория';

  /* Код категории: переименование тянет за собой товары этой категории */
  var idEl = $('c-id');
  idEl.value = c.id || '';
  idEl.oninput = function () {
    var was = c.id;
    var now = slug(idEl.value);
    if (idEl.value !== now) idEl.value = now;
    c.id = now;
    if (was) {
      db.PRODUCTS.forEach(function (p) { if (p.cat === was) p.cat = now; });
    }
    markDirty();
  };

  bindLang('c-name-ru', 'c-name-uz', c, 'name');
  bindLang('c-desc-ru', 'c-desc-uz', c, 'desc');
  bind('c-image', c, 'image');

  $('cats-list-view').hidden = true;
  $('cats-edit-view').hidden = false;
  window.scrollTo(0, 0);
}

$('catBack').addEventListener('click', function () {
  var c = db.CATEGORIES[editingCat];
  if (!validateId(c, db.CATEGORIES, editingCat, 'категории')) return;
  $('cats-edit-view').hidden = true;
  $('cats-list-view').hidden = false;
  renderCats(); renderProdFilter();
});

/* ================= ТОВАРЫ ================= */
function renderProdFilter() {
  var box = $('prodFilter');
  var on = 'border-color:var(--ink);color:var(--ink)';
  var html = '<button type="button" class="mini" data-f="all" style="' +
             (prodFilter === 'all' ? on : '') + '">Все (' + db.PRODUCTS.length + ')</button>';
  db.CATEGORIES.forEach(function (c) {
    var n = db.PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
    html += '<button type="button" class="mini" data-f="' + esc(c.id) + '" style="' +
            (prodFilter === c.id ? on : '') + '">' + esc(ru(c.name)) + ' (' + n + ')</button>';
  });
  box.innerHTML = html;
}

$('prodFilter').addEventListener('click', function (e) {
  var b = e.target.closest('button[data-f]');
  if (!b) return;
  prodFilter = b.dataset.f;
  renderProdFilter(); renderProds();
});

function renderProds() {
  var box = $('prodsList');
  var list = db.PRODUCTS
    .map(function (p, i) { return { p: p, i: i }; })
    .filter(function (x) { return prodFilter === 'all' || x.p.cat === prodFilter; });

  if (!list.length) {
    box.innerHTML = '<div class="adm-empty">Товаров нет</div>';
    return;
  }

  box.innerHTML = list.map(function (x) {
    var p = x.p;
    var cat = db.CATEGORIES.find(function (c) { return c.id === p.cat; });
    var catName = cat ? ru(cat.name) : '⚠ категория «' + p.cat + '» не найдена';
    var stock = p.stock === 'in' ? 'в наличии' : 'под заказ';
    return '<div class="adm-item">' +
      '<img class="adm-item__thumb" src="' + esc((p.images && p.images[0]) || '') + '" alt="" onerror="this.style.visibility=\'hidden\'">' +
      '<div class="adm-item__main"><b>' + esc(ru(p.name)) + '</b>' +
        '<span>' + esc(p.id) + ' · ' + esc(catName) + ' · ' + stock + '</span></div>' +
      '<div class="adm-item__acts">' +
        '<button type="button" class="mini" data-edit="' + x.i + '">Изменить</button>' +
        '<button type="button" class="mini" data-copy="' + x.i + '">Копия</button>' +
        '<button type="button" class="mini mini--danger" data-del="' + x.i + '">Удалить</button>' +
      '</div></div>';
  }).join('');
}

$('prodsList').addEventListener('click', function (e) {
  var b = e.target.closest('button');
  if (!b) return;

  if (b.dataset.edit !== undefined) { openProd(+b.dataset.edit); return; }

  if (b.dataset.copy !== undefined) {
    var src = clone(db.PRODUCTS[+b.dataset.copy]);
    src.id = uniqueId(src.id + '-kopiya', db.PRODUCTS);
    src.name.ru = src.name.ru + ' (копия)';
    db.PRODUCTS.splice(+b.dataset.copy + 1, 0, src);
    markDirty(); renderProds(); renderProdFilter();
    return;
  }

  if (b.dataset.del !== undefined) {
    var i = +b.dataset.del;
    if (!confirm('Удалить товар «' + ru(db.PRODUCTS[i].name) + '»?')) return;
    db.PRODUCTS.splice(i, 1);
    markDirty(); renderProds(); renderProdFilter();
  }
});

$('prodAdd').addEventListener('click', function () {
  db.PRODUCTS.push({
    id: '',
    cat: prodFilter !== 'all' ? prodFilter : (db.CATEGORIES[0] ? db.CATEGORIES[0].id : ''),
    stock: 'in',
    name: { ru: '', uz: '' },
    short: { ru: '', uz: '' },
    desc: { ru: '', uz: '' },
    images: ['assets/img/products/'],
    specs: [{ k: { ru: '', uz: '' }, v: { ru: '', uz: '' } }]
  });
  markDirty();
  openProd(db.PRODUCTS.length - 1);
});

function openProd(i) {
  editingProd = i;
  var p = db.PRODUCTS[i];
  $('prodEditTitle').textContent = ru(p.name) || 'Новый товар';

  var sel = $('p-cat');
  sel.innerHTML = db.CATEGORIES.map(function (c) {
    return '<option value="' + esc(c.id) + '">' + esc(ru(c.name)) + '</option>';
  }).join('');
  sel.value = p.cat;

  bind('p-id', p, 'id', true);
  bind('p-cat', p, 'cat');
  bind('p-stock', p, 'stock');
  bindLang('p-name-ru', 'p-name-uz', p, 'name');
  bindLang('p-short-ru', 'p-short-uz', p, 'short');
  bindLang('p-desc-ru', 'p-desc-uz', p, 'desc');

  renderImages(p);
  renderSpecs(p);

  $('prods-list-view').hidden = true;
  $('prods-edit-view').hidden = false;
  window.scrollTo(0, 0);
}

$('prodBack').addEventListener('click', function () {
  var p = db.PRODUCTS[editingProd];
  if (!validateId(p, db.PRODUCTS, editingProd, 'товара')) return;
  p.images = p.images.filter(function (s) { return s && s.trim() && !/\/$/.test(s.trim()); });
  if (!p.images.length) p.images = ['assets/img/products/'];
  $('prods-edit-view').hidden = true;
  $('prods-list-view').hidden = false;
  renderProds(); renderProdFilter();
});

/* ---------- Фотографии товара ---------- */
function renderImages(p) {
  var box = $('p-images');
  box.innerHTML = p.images.map(function (src, i) {
    return '<div class="img-row">' +
      '<input value="' + esc(src) + '" data-img="' + i + '" placeholder="assets/img/products/foto.jpg">' +
      '<button type="button" class="mini" data-pickimg="' + i + '">Выбрать файл</button>' +
      '<button type="button" class="mini mini--danger" data-delimg="' + i + '">✕</button>' +
      '</div>';
  }).join('');
}

$('p-images').addEventListener('input', function (e) {
  if (e.target.dataset.img === undefined) return;
  db.PRODUCTS[editingProd].images[+e.target.dataset.img] = e.target.value;
  markDirty();
});

$('p-images').addEventListener('click', function (e) {
  var b = e.target.closest('button');
  if (!b) return;
  var p = db.PRODUCTS[editingProd];

  if (b.dataset.delimg !== undefined) {
    p.images.splice(+b.dataset.delimg, 1);
    if (!p.images.length) p.images.push('assets/img/products/');
    markDirty(); renderImages(p);
    return;
  }
  if (b.dataset.pickimg !== undefined) {
    pickFile('assets/img/products/', function (path) {
      p.images[+b.dataset.pickimg] = path;
      markDirty(); renderImages(p);
    });
  }
});

$('imgAdd').addEventListener('click', function () {
  db.PRODUCTS[editingProd].images.push('assets/img/products/');
  markDirty(); renderImages(db.PRODUCTS[editingProd]);
});

/* ---------- Характеристики ---------- */
function renderSpecs(p) {
  var box = $('p-specs');
  box.innerHTML = p.specs.map(function (s, i) {
    return '<div class="spec-row">' +
      '<input value="' + esc(ru(s.k)) + '" data-s="' + i + '" data-part="k.ru" placeholder="Высота">' +
      '<input value="' + esc(s.k && s.k.uz || '') + '" data-s="' + i + '" data-part="k.uz" placeholder="Balandligi">' +
      '<input value="' + esc(ru(s.v)) + '" data-s="' + i + '" data-part="v.ru" placeholder="9 000 мм">' +
      '<input value="' + esc(s.v && s.v.uz || '') + '" data-s="' + i + '" data-part="v.uz" placeholder="9 000 mm">' +
      '<button type="button" class="mini mini--danger" data-delspec="' + i + '">✕</button>' +
      '</div>';
  }).join('');
}

$('p-specs').addEventListener('input', function (e) {
  var idx = e.target.dataset.s;
  if (idx === undefined) return;
  var part = e.target.dataset.part.split('.');
  var spec = db.PRODUCTS[editingProd].specs[+idx];
  if (!spec[part[0]] || typeof spec[part[0]] === 'string') spec[part[0]] = { ru: '', uz: '' };
  spec[part[0]][part[1]] = e.target.value;
  markDirty();
});

$('p-specs').addEventListener('click', function (e) {
  var b = e.target.closest('button[data-delspec]');
  if (!b) return;
  db.PRODUCTS[editingProd].specs.splice(+b.dataset.delspec, 1);
  markDirty(); renderSpecs(db.PRODUCTS[editingProd]);
});

$('specAdd').addEventListener('click', function () {
  db.PRODUCTS[editingProd].specs.push({ k: { ru: '', uz: '' }, v: { ru: '', uz: '' } });
  markDirty(); renderSpecs(db.PRODUCTS[editingProd]);
});

/* ---------- Привязка полей ---------- */
function bind(id, obj, key, isId) {
  var el = $(id);
  el.value = obj[key] || '';
  el.oninput = function () {
    obj[key] = isId ? slug(el.value) : el.value;
    if (isId && el.value !== obj[key]) el.value = obj[key];
    markDirty();
  };
}

function bindLang(idRu, idUz, obj, key) {
  if (!obj[key] || typeof obj[key] === 'string') {
    obj[key] = { ru: obj[key] || '', uz: '' };
  }
  var a = $(idRu), b = $(idUz);
  a.value = obj[key].ru || '';
  b.value = obj[key].uz || '';
  a.oninput = function () { obj[key].ru = a.value; markDirty(); };
  b.oninput = function () { obj[key].uz = b.value; markDirty(); };
}

/* ---------- Проверка кода ---------- */
function validateId(item, list, index, what) {
  if (!item.id) {
    alert('Заполните код ' + what + ' — латиницей, без пробелов.');
    return false;
  }
  var clash = list.some(function (x, i) { return i !== index && x.id === item.id; });
  if (clash) {
    alert('Код «' + item.id + '» уже занят. У каждой позиции должен быть свой код.');
    return false;
  }
  return true;
}

function uniqueId(base, list) {
  var id = slug(base) || 'tovar';
  var n = 2;
  while (list.some(function (x) { return x.id === id; })) { id = slug(base) + '-' + n; n++; }
  return id;
}

/* ---------- Выбор файла (подставляет путь) ---------- */
function pickFile(dir, cb) {
  var inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = 'image/*';
  inp.onchange = function () {
    if (!inp.files || !inp.files[0]) return;
    var fname = inp.files[0].name;
    cb(dir + fname);
    alert('Путь подставлен.\n\nТеперь скопируйте сам файл «' + fname +
          '» в папку ' + dir + ' на сервере — иначе фото не покажется.');
  };
  inp.click();
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('button[data-pick]');
  if (!b) return;
  pickFile(b.dataset.dir, function (path) {
    var el = $(b.dataset.pick);
    el.value = path;
    el.dispatchEvent(new Event('input'));
  });
});

/* ---------- Сборка файла data.js ---------- */
function buildDataJs() {
  var head =
    '/* ============================================================\n' +
    '   MRC — ДАННЫЕ САЙТА\n' +
    '   Файл создан админ-панелью ' + new Date().toLocaleString('ru-RU') + '\n' +
    '   Положите его в папку js/ вместо старого data.js\n' +
    '\n' +
    '   stock:  \'in\'    — есть на складе\n' +
    '           \'order\' — производство под заказ\n' +
    '   ============================================================ */\n\n';

  return head +
    'var SITE = ' + JSON.stringify(db.SITE, null, 2) + ';\n\n' +
    'var CATEGORIES = ' + JSON.stringify(db.CATEGORIES, null, 2) + ';\n\n' +
    'var PRODUCTS = ' + JSON.stringify(db.PRODUCTS, null, 2) + ';\n';
}

function download() {
  var problems = [];
  db.CATEGORIES.forEach(function (c) { if (!c.id) problems.push('категория без кода'); });
  db.PRODUCTS.forEach(function (p) {
    if (!p.id) problems.push('товар без кода');
    if (!db.CATEGORIES.some(function (c) { return c.id === p.cat; })) {
      problems.push('товар «' + (ru(p.name) || p.id) + '» ссылается на несуществующую категорию');
    }
  });
  if (problems.length && !confirm('Найдены проблемы:\n\n· ' + problems.join('\n· ') +
      '\n\nВсё равно скачать файл?')) return;

  saveDraft(true);

  var blob = new Blob([buildDataJs()], { type: 'text/javascript;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  setStatus('Файл data.js скачан — замените им js/data.js на сервере');
}

$('download').addEventListener('click', download);
$('downloadBar').addEventListener('click', download);
$('saveDraft').addEventListener('click', function () { saveDraft(); });

/* ---------- Предпросмотр ---------- */
function previewOn() {
  try { return localStorage.getItem(PREVIEW) === '1'; } catch (e) { return false; }
}
function renderPreviewBtn() {
  $('previewToggle').textContent = previewOn() ? 'Выключить предпросмотр' : 'Включить предпросмотр';
}
$('previewToggle').addEventListener('click', function () {
  var on = !previewOn();
  if (on) saveDraft(true);
  try { localStorage.setItem(PREVIEW, on ? '1' : '0'); } catch (e) {}
  renderPreviewBtn();
  setStatus(on ? 'Предпросмотр включён — откройте сайт в соседней вкладке'
               : 'Предпросмотр выключен');
});

/* ---------- Загрузка резервной копии ---------- */
$('importFile').addEventListener('change', function (e) {
  var file = e.target.files && e.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function () {
    var text = String(reader.result);
    var parsed = null;
    try {
      parsed = JSON.parse(text);
    } catch (err) {
      try {
        parsed = new Function(text +
          ';return {SITE:SITE,CATEGORIES:CATEGORIES,PRODUCTS:PRODUCTS};')();
      } catch (err2) {
        alert('Не удалось прочитать файл. Нужен data.js, скачанный этой же панелью.');
        return;
      }
    }
    if (!parsed || !parsed.SITE || !parsed.CATEGORIES || !parsed.PRODUCTS) {
      alert('В файле нет нужных данных (SITE, CATEGORIES, PRODUCTS).');
      return;
    }
    if (!confirm('Заменить текущие данные содержимым файла? Несохранённые правки пропадут.')) return;

    db = { SITE: parsed.SITE, CATEGORIES: parsed.CATEGORIES, PRODUCTS: parsed.PRODUCTS };
    saveDraft(true);
    renderAll();
    setStatus('Данные загружены из файла');
  };
  reader.readAsText(file, 'utf-8');
  e.target.value = '';
});

$('resetDraft').addEventListener('click', function () {
  if (!confirm('Удалить черновик и вернуть данные из файла js/data.js?')) return;
  try { localStorage.removeItem(STORE); localStorage.setItem(PREVIEW, '0'); } catch (e) {}
  location.reload();
});

/* ---------- Предупреждение о несохранённом ---------- */
window.addEventListener('beforeunload', function (e) {
  if (!dirty) return;
  e.preventDefault();
  e.returnValue = '';
});

/* ---------- Старт ---------- */
function renderAll() {
  fillContacts();
  renderCats();
  renderProdFilter();
  renderProds();
  renderPreviewBtn();
}

load();
renderAll();

})();

/* ============================================================
   MRC — общие скрипты
   Подключается на всех страницах после data.js и i18n.js
   ============================================================ */

/* ------------------------------------------------------------
   Черновик из админ-панели.
   Админ-панель сохраняет данные в память браузера. Пока включён
   режим предпросмотра, сайт в ЭТОМ браузере показывает черновик.
   Посетители видят обычный data.js, пока файл не заменён.
------------------------------------------------------------ */
(function () {
  try {
    if (localStorage.getItem('mrc_preview') !== '1') return;
    var raw = localStorage.getItem('mrc_data');
    if (!raw) return;
    var draft = JSON.parse(raw);
    if (draft.SITE) SITE = draft.SITE;
    if (draft.CATEGORIES) CATEGORIES = draft.CATEGORIES;
    if (draft.PRODUCTS) PRODUCTS = draft.PRODUCTS;
    window.MRC_PREVIEW = true;
  } catch (e) {
    console.warn('MRC: черновик не прочитан', e);
  }
})();

/* ---------- Экранирование текста из админ-панели ----------
   Названия и описания вводят сотрудники. Кавычки и угловые
   скобки в них не должны ломать вёрстку.
------------------------------------------------------------ */
function esc(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* imgFallback объявлена в js/boot.js — он грузится в <head> */

/* ---------- Ссылки на мессенджеры ---------- */
function waLink(text) {
  var base = 'https://wa.me/' + String(SITE.whatsapp).replace(/\D/g, '');
  return text ? base + '?text=' + encodeURIComponent(text) : base;
}

function tgLink(handle) {
  var h = String(handle || '').trim();
  if (!h) return '#';
  if (h.charAt(0) === '@') return 'https://t.me/' + h.slice(1);
  if (/^\+?\d+$/.test(h)) return 'https://t.me/+' + h.replace(/\D/g, '');
  return h;
}

/* ---------- Подстановка контактов ----------
   Телефоны и ссылки живут только в data.js. В HTML стоят
   пометки data-mrc="..." — сюда подставляются актуальные значения.
------------------------------------------------------------ */
function bindContacts() {
  var tel1 = 'tel:' + SITE.phone1;
  var tel2 = 'tel:' + SITE.phone2;

  document.querySelectorAll('[data-mrc]').forEach(function (el) {
    switch (el.getAttribute('data-mrc')) {
      /* Ссылка целиком состоит из номера */
      case 'phone1':
        el.href = tel1;
        el.textContent = SITE.phone1Label;
        break;
      case 'phone2':
        el.href = tel2;
        el.textContent = SITE.phone2Label;
        break;
      /* Внутри ссылки есть иконка — трогаем только адрес */
      case 'phone1-href':
        el.href = tel1;
        break;
      /* Отдельная подпись рядом с иконкой */
      case 'phone1-label':
        el.textContent = SITE.phone1Label;
        break;
      case 'phone2-label':
        el.textContent = SITE.phone2Label;
        break;
      case 'wa':
        el.href = waLink();
        break;
      case 'tg1':
        el.href = tgLink(SITE.telegram1);
        break;
      case 'tg2':
        el.href = tgLink(SITE.telegram2);
        break;
      case 'ig':
        el.href = SITE.instagram;
        break;
      case 'address':
        el.textContent = T(SITE.address);
        break;
    }
  });
}

/* ---------- Мобильное меню ---------- */
(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ---------- Линия шапки при прокрутке ---------- */
(function () {
  var hdr = document.querySelector('.hdr');
  if (!hdr) return;
  var onScroll = function () { hdr.classList.toggle('is-stuck', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Активный пункт меню ---------- */
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('is-active');
  });
})();

/* ---------- Год в подвале ---------- */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ---------- Переключатель языка ---------- */
(function () {
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
})();

/* ---------- Отправка заявки ----------
   Форма собирает текст и открывает WhatsApp готовым сообщением.
   Это работает без сервера. Как подключить Telegram-бота или
   почту — см. README.md, раздел «Формы заявок».
------------------------------------------------------------ */
document.addEventListener('submit', function (e) {
  var form = e.target;
  if (!form.classList || !form.classList.contains('form')) return;
  e.preventDefault();

  var get = function (n) {
    var el = form.querySelector('[name="' + n + '"]');
    return el ? el.value.trim() : '';
  };

  var name = get('name');
  var phone = get('phone');

  if (!name || !phone) {
    alert(t('form.alert'));
    return;
  }

  var text = t('msg.title') + '\n' +
             t('msg.name') + ': ' + name + '\n' +
             t('msg.phone') + ': ' + phone;

  var item = get('item');
  var message = get('message');
  if (item) text += '\n' + t('msg.item') + ': ' + item;
  if (message) text += '\n' + t('msg.text') + ': ' + message;

  window.open(waLink(text), '_blank', 'noopener');
  form.reset();
});

/* ---------- Список категорий в подвале ----------
   Берётся из data.js: добавили категорию в админ-панели —
   она появилась в подвале на всех страницах.
------------------------------------------------------------ */
function renderFooterCats() {
  var box = document.getElementById('footCats');
  if (!box) return;
  box.innerHTML = CATEGORIES.slice(0, 4).map(function (c) {
    return '<li><a href="catalog.html?cat=' + esc(c.id) + '">' + esc(T(c.name)) + '</a></li>';
  }).join('');
}

/* ---------- Полоса режима предпросмотра ---------- */
function renderPreviewBar() {
  var bar = document.getElementById('previewBar');
  if (!window.MRC_PREVIEW) { if (bar) bar.remove(); return; }

  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'previewBar';
    bar.className = 'preview-bar';
    bar.innerHTML = '<span></span><button type="button"></button>';
    document.body.appendChild(bar);
    bar.querySelector('button').addEventListener('click', function () {
      try { localStorage.setItem('mrc_preview', '0'); } catch (e) {}
      location.reload();
    });
  }
  bar.querySelector('span').textContent = t('preview.on');
  bar.querySelector('button').textContent = t('preview.off');
}

/* ---------- Запуск ---------- */
applyI18n();
bindContacts();
renderFooterCats();
renderPreviewBar();

/* Перерисовать то, что зависит от языка */
document.addEventListener('mrc:lang', function () {
  bindContacts();
  renderFooterCats();
  renderPreviewBar();
});

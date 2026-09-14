/* ============================================================
   MRC — русский / узбекский
   Тексты интерфейса. Названия и описания товаров лежат
   в data.js — там у каждого поля есть { ru, uz }.

   Как добавить третий язык: скопируйте блок uz, поменяйте
   код языка и переводы, затем добавьте кнопку в шапку.
   ============================================================ */

var I18N = {

  ru: {
    'nav.home': 'Главная',
    'nav.catalog': 'Каталог',
    'nav.production': 'Производство',
    'nav.about': 'О компании',
    'nav.contacts': 'Контакты',
    'nav.menu': 'Открыть меню',

    'title.index': 'MRC — металлические конструкции для дорог и инфраструктуры',
    'title.catalog': 'Каталог продукции — MRC',
    'title.production': 'Производство по чертежам и техническому заданию — MRC',
    'title.about': 'О компании — MRC (My Road Construction)',
    'title.contacts': 'Контакты — MRC',

    'btn.contact': 'Связаться с нами',
    'btn.catalog': 'Смотреть каталог',
    'btn.openCatalog': 'Открыть каталог',
    'btn.drawing': 'Отправить чертёж',
    'btn.drawingTz': 'Отправить чертёж или ТЗ',
    'btn.request': 'Отправить запрос',
    'btn.send': 'Отправить заявку',
    'btn.call': 'Позвонить',
    'btn.checkStock': 'Уточнить наличие',
    'btn.more': 'Подробнее',
    'btn.wa': 'Написать в WhatsApp',

    'tag.in': 'В наличии',
    'tag.order': 'Под заказ',
    'tag.inLong': 'В наличии на складе',
    'tag.orderLong': 'Производство под заказ',

    'form.name': 'Ваше имя',
    'form.phone': 'Телефон',
    'form.msg': 'Что нужно',
    'form.msgPh': 'Например: опоры 9 м, 40 шт., до конца месяца',
    'form.taskPh': 'Что нужно изготовить, размеры, количество, срок',
    'form.qty': 'Количество, сроки, требования',
    'form.task': 'Описание задачи',
    'form.note': 'Заявка откроется в WhatsApp готовым сообщением — останется нажать «Отправить».',
    'form.noteFile': 'Заявка откроется в WhatsApp готовым сообщением — там же можно приложить чертёж.',
    'form.alert': 'Укажите имя и номер телефона — мы перезвоним.',
    'form.reqTitle': 'Запросить цену и наличие',
    'form.leave': 'Оставить заявку',
    'msg.title': 'Заявка с сайта MRC',
    'msg.name': 'Имя',
    'msg.phone': 'Телефон',
    'msg.item': 'Товар',
    'msg.text': 'Сообщение',
    'msg.hello': 'Здравствуйте! Интересует:',

    'crumbs.home': 'Главная',
    'crumbs.catalog': 'Каталог',

    'index.eyebrow': 'Металлоконструкции · Ташкент',
    'index.h1': 'Металлические конструкции для дорог и инфраструктурных проектов',
    'index.lead': 'Опоры освещения, дорожные ограждения, флагштоки и мачты. Основные позиции держим на складе, нестандартные изделия производим по вашим чертежам.',
    'index.spec1': 'Сталь Ст3',
    'index.spec2': 'Горячее цинкование',
    'index.spec3': 'Отгрузка партиями',
    'index.photoTag': 'Склад · Ташкент',

    'index.fact1t': 'Склад в Ташкенте',
    'index.fact1d': 'Ходовые позиции всегда в наличии',
    'index.fact2t': 'Производство под заказ',
    'index.fact2d': 'По чертежам и техническому заданию',
    'index.fact3t': 'Проектные объёмы',
    'index.fact3d': 'Поставка партиями на объекты',
    'index.fact4t': 'Работа с B2B',
    'index.fact4d': 'Подрядчики, застройщики, госзаказ',

    'index.whoEyebrow': 'О компании',
    'index.whoH2': 'Кто мы',
    'index.whoP': 'MRC поставляет и производит металлоконструкции для дорожного строительства и городской инфраструктуры в Узбекистане.',
    'index.whoLink': 'Подробнее о компании',
    'index.who1': 'Собственный склад — не ждёте, пока изделие изготовят с нуля',
    'index.who2': 'Производство нестандартных изделий по чертежам заказчика',
    'index.who3': 'Горячее цинкование и порошковая окраска',
    'index.who4': 'Отгрузка партиями на строительные объекты',

    'index.catEyebrow': 'Каталог',
    'index.catH2': 'Продукция',
    'index.catP': 'Шесть направлений. Каждая позиция доступна к отгрузке со склада или к изготовлению под проект.',
    'index.catLink': 'Весь каталог',

    'index.stockH2': 'Товар на складе, а не в каталоге',
    'index.stockP': 'Опоры освещения, барьерные ограждения, стойки и кронштейны хранятся в постоянном объёме. Уточните позицию по телефону — скажем остаток и сроки отгрузки в тот же день.',

    'index.prodEyebrow': 'Производство',
    'index.prodH2': 'Производство по чертежам',
    'index.prodP': 'Если готового решения нет — изготовим под задачу: другой размер, другая форма, другая нагрузка.',
    'index.step1t': 'Присылаете задание',
    'index.step1d': 'Чертёж, эскиз или описание задачи в свободной форме.',
    'index.step2t': 'Считаем',
    'index.step2d': 'Проверяем технологичность, даём цену и срок изготовления.',
    'index.step3t': 'Производим',
    'index.step3d': 'Резка, сварка, цинкование или окраска по вашим требованиям.',
    'index.step4t': 'Отгружаем',
    'index.step4d': 'Готовые изделия с документами — на склад или сразу на объект.',

    'index.workEyebrow': 'Объекты',
    'index.workH2': 'Наши работы',
    'index.workP': 'Дороги, развязки, промышленные территории и общественные пространства.',

    'index.ctEyebrow': 'Контакты',
    'index.ctH2': 'Связаться с нами',
    'index.ctP': 'Работаем круглосуточно, без выходных. Позвоните или напишите в мессенджер.',
    'index.ctPhones': 'Телефоны',
    'index.ctMess': 'Мессенджеры и соцсети',

    'catalog.eyebrow': 'Продукция',
    'catalog.h2': 'Каталог продукции',
    'catalog.p': 'Позиции со склада и изделия под заказ. Нужного размера нет в списке — изготовим по вашим размерам.',
    'catalog.link': 'Производство под заказ',
    'catalog.all': 'Все товары',
    'catalog.empty': 'В этой категории пока нет товаров. Напишите нам — подберём под задачу.',
    'catalog.ctaH3': 'Не нашли нужную позицию?',
    'catalog.ctaP': 'Пришлите чертёж или опишите задачу — подберём аналог из наличия или изготовим под ваши размеры.',

    'product.specs': 'Технические характеристики',
    'product.related': 'Похожие товары',
    'product.relatedLink': 'Вся категория',
    'product.notFound': 'Товар не найден',
    'product.notFoundP': 'Возможно, ссылка устарела. Откройте каталог — там весь ассортимент.',

    'production.eyebrow': 'Под заказ',
    'production.h1': 'Производство по чертежам и техническому заданию',
    'production.lead': 'Пришлите нам чертёж или техническое задание — предложим решение, цену и срок. Работаем с нестандартными размерами, формами и нагрузками.',
    'production.photoTag': 'Цех · Резка и сварка',
    'production.canEyebrow': 'Возможности',
    'production.canH2': 'Что можем изготовить',
    'production.canP': 'Изделия из листа, трубы и профиля — от одной штуки до партии на объект.',
    'production.c1t': 'Нестандартные размеры',
    'production.c1d': 'Высота, диаметр, толщина стенки и вылет — под ваш проект, а не под каталог.',
    'production.c2t': 'Другие формы',
    'production.c2d': 'Гранёные, конические, прямые стволы, фигурные кронштейны и рамы.',
    'production.c3t': 'Под конкретную задачу',
    'production.c3d': 'Расчёт под ветровую нагрузку, вес оборудования и условия монтажа.',
    'production.c4t': 'По чертежам заказчика',
    'production.c4d': 'Работаем с DWG, PDF и бумажными эскизами. Уточним спорные узлы до запуска.',
    'production.c5t': 'По техническому заданию',
    'production.c5d': 'Нет чертежа — опишите задачу словами, конструктив предложим сами.',
    'production.c6t': 'Обработка и покрытие',
    'production.c6d': 'Горячее цинкование, порошковая окраска, грунтовка под цвет проекта.',
    'production.howEyebrow': 'Процесс',
    'production.howH2': 'Как проходит работа',
    'production.s1t': 'Заявка',
    'production.s1d': 'Присылаете чертёж, эскиз или описание задачи.',
    'production.s2t': 'Расчёт',
    'production.s2d': 'Проверяем технологичность, согласуем материал и покрытие, даём цену.',
    'production.s3t': 'Изготовление',
    'production.s3d': 'Резка, гибка, сварка, цинкование или окраска.',
    'production.s4t': 'Отгрузка',
    'production.s4d': 'Готовые изделия с документами — на объект или самовывозом.',
    'production.reqH2': 'Отправьте нам чертёж или ТЗ — предложим решение',
    'production.reqP': 'Опишите задачу в форме, а файл чертежа отправьте в WhatsApp или Telegram — так быстрее.',
    'production.item': 'Производство под заказ',

    'about.eyebrow': 'О компании',
    'about.h1': 'О компании MRC',
    'about.lead': 'My Road Construction поставляет и производит металлические конструкции для дорожного строительства, благоустройства и промышленных объектов. Работаем с подрядчиками, застройщиками и государственными заказчиками.',
    'about.photoTag': 'Производство MRC',
    'about.howEyebrow': 'Принципы',
    'about.howH2': 'Как мы работаем',
    'about.a1t': 'Наличие на складе',
    'about.a1d': 'Ходовые позиции хранятся постоянно — отгрузка без ожидания производства.',
    'about.a2t': 'Собственный склад',
    'about.a2d': 'Площадка позволяет держать длинномерные изделия и крупные партии.',
    'about.a3t': 'Большие объёмы',
    'about.a3d': 'Закрываем потребность объекта целиком, а не по несколько штук.',
    'about.a4t': 'Производство',
    'about.a4d': 'Изготовление нестандартных изделий по чертежам и техническому заданию.',
    'about.a5t': 'Работа с проектами',
    'about.a5d': 'Подбираем позиции по спецификации проекта и согласуем замены.',
    'about.a6t': 'B2B-клиенты',
    'about.a6d': 'Договор, счёт, отгрузочные документы, поставка партиями по графику.',
    'about.objH2': 'Для каких объектов',
    'about.o1': 'Автомобильные дороги и транспортные развязки',
    'about.o2': 'Городские улицы, тротуары и пешеходные зоны',
    'about.o3': 'Промышленные и складские территории',
    'about.o4': 'Жилые комплексы и благоустройство дворов',
    'about.o5': 'Административные здания и общественные пространства',

    'contacts.eyebrow': 'Связь',
    'contacts.h2': 'Контакты',
    'contacts.p': 'Работаем круглосуточно, без выходных. Позвоните или напишите в мессенджер.',
    'contacts.phones': 'Телефоны',
    'contacts.tg': 'Telegram',
    'contacts.waIg': 'WhatsApp и Instagram',
    'contacts.place': 'Склад и офис',
    'contacts.mapPh': 'КАРТА\nдобавьте ссылку в поле mapEmbed\nв файле js/data.js',

    'foot.about': 'Металлоконструкции для дорожного строительства и городской инфраструктуры.',
    'foot.sections': 'Разделы',
    'foot.products': 'Продукция',
    'foot.contacts': 'Контакты',

    'preview.on': 'РЕЖИМ ПРЕДПРОСМОТРА — видите черновик из админ-панели. Посетители сайта его не видят.',
    'preview.off': 'Выключить'
  },

  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.catalog': 'Katalog',
    'nav.production': 'Ishlab chiqarish',
    'nav.about': 'Kompaniya haqida',
    'nav.contacts': 'Aloqa',
    'nav.menu': 'Menyuni ochish',

    'title.index': 'MRC — yoʻl va infratuzilma uchun metall konstruksiyalar',
    'title.catalog': 'Mahsulotlar katalogi — MRC',
    'title.production': 'Chizma va texnik topshiriq boʻyicha ishlab chiqarish — MRC',
    'title.about': 'Kompaniya haqida — MRC (My Road Construction)',
    'title.contacts': 'Kontaktlar — MRC',

    'btn.contact': 'Biz bilan bogʻlanish',
    'btn.catalog': 'Katalogni koʻrish',
    'btn.openCatalog': 'Katalogni ochish',
    'btn.drawing': 'Chizmani yuborish',
    'btn.drawingTz': 'Chizma yoki TT yuborish',
    'btn.request': 'Soʻrov yuborish',
    'btn.send': 'Ariza yuborish',
    'btn.call': 'Qoʻngʻiroq qilish',
    'btn.checkStock': 'Mavjudligini aniqlash',
    'btn.more': 'Batafsil',
    'btn.wa': 'WhatsApp orqali yozish',

    'tag.in': 'Mavjud',
    'tag.order': 'Buyurtma boʻyicha',
    'tag.inLong': 'Omborda mavjud',
    'tag.orderLong': 'Buyurtma boʻyicha ishlab chiqarish',

    'form.name': 'Ismingiz',
    'form.phone': 'Telefon',
    'form.msg': 'Nima kerak',
    'form.msgPh': 'Masalan: 9 m ustunlar, 40 dona, oy oxirigacha',
    'form.taskPh': 'Nima tayyorlash kerak, oʻlchamlar, miqdor, muddat',
    'form.qty': 'Miqdor, muddat, talablar',
    'form.task': 'Vazifa tavsifi',
    'form.note': 'Ariza WhatsAppda tayyor xabar sifatida ochiladi — «Yuborish» tugmasini bosish qoladi.',
    'form.noteFile': 'Ariza WhatsAppda tayyor xabar sifatida ochiladi — u yerda chizmani ham biriktirish mumkin.',
    'form.alert': 'Ism va telefon raqamingizni koʻrsating — biz qayta qoʻngʻiroq qilamiz.',
    'form.reqTitle': 'Narx va mavjudligini soʻrash',
    'form.leave': 'Ariza qoldirish',
    'msg.title': 'MRC saytidan ariza',
    'msg.name': 'Ism',
    'msg.phone': 'Telefon',
    'msg.item': 'Mahsulot',
    'msg.text': 'Xabar',
    'msg.hello': 'Assalomu alaykum! Qiziqtirmoqda:',

    'crumbs.home': 'Bosh sahifa',
    'crumbs.catalog': 'Katalog',

    'index.eyebrow': 'Metall konstruksiyalar · Toshkent',
    'index.h1': 'Yoʻl va infratuzilma loyihalari uchun metall konstruksiyalar',
    'index.lead': 'Yoritish ustunlari, yoʻl toʻsiqlari, bayroq ustunlari va machtalar. Asosiy pozitsiyalarni omborda saqlaymiz, nostandart buyumlarni chizmalaringiz boʻyicha ishlab chiqaramiz.',
    'index.spec1': 'Poʻlat St3',
    'index.spec2': 'Issiq rux qoplama',
    'index.spec3': 'Partiyalarda joʻnatish',
    'index.photoTag': 'Ombor · Toshkent',

    'index.fact1t': 'Toshkentdagi ombor',
    'index.fact1d': 'Ommabop pozitsiyalar doimo mavjud',
    'index.fact2t': 'Buyurtma boʻyicha ishlab chiqarish',
    'index.fact2d': 'Chizma va texnik topshiriq boʻyicha',
    'index.fact3t': 'Loyihaviy hajmlar',
    'index.fact3d': 'Obʼyektlarga partiyalar bilan yetkazish',
    'index.fact4t': 'B2B bilan ishlash',
    'index.fact4d': 'Pudratchilar, quruvchilar, davlat buyurtmasi',

    'index.whoEyebrow': 'Kompaniya haqida',
    'index.whoH2': 'Biz kimmiz',
    'index.whoP': 'MRC Oʻzbekistonda yoʻl qurilishi va shahar infratuzilmasi uchun metall konstruksiyalarni yetkazib beradi va ishlab chiqaradi.',
    'index.whoLink': 'Kompaniya haqida batafsil',
    'index.who1': 'Oʻz ombori — buyum noldan tayyorlanishini kutmaysiz',
    'index.who2': 'Buyurtmachi chizmalari boʻyicha nostandart buyumlar ishlab chiqarish',
    'index.who3': 'Issiq rux qoplama va kukunli boʻyash',
    'index.who4': 'Qurilish obʼyektlariga partiyalar bilan joʻnatish',

    'index.catEyebrow': 'Katalog',
    'index.catH2': 'Mahsulotlar',
    'index.catP': 'Oltita yoʻnalish. Har bir pozitsiya ombordan joʻnatish yoki loyiha boʻyicha tayyorlash uchun mavjud.',
    'index.catLink': 'Butun katalog',

    'index.stockH2': 'Mahsulot omborda, katalogda emas',
    'index.stockP': 'Yoritish ustunlari, barʼer toʻsiqlari, ustunlar va kronshteynlar doimiy hajmda saqlanadi. Pozitsiyani telefon orqali aniqlang — qoldiq va joʻnatish muddatini oʻsha kuni aytamiz.',

    'index.prodEyebrow': 'Ishlab chiqarish',
    'index.prodH2': 'Chizmalar boʻyicha ishlab chiqarish',
    'index.prodP': 'Tayyor yechim boʻlmasa — vazifaga moslab tayyorlaymiz: boshqa oʻlcham, boshqa shakl, boshqa yuklama.',
    'index.step1t': 'Topshiriq yuborasiz',
    'index.step1d': 'Chizma, eskiz yoki vazifa tavsifi erkin shaklda.',
    'index.step2t': 'Hisoblaymiz',
    'index.step2d': 'Texnologikligini tekshiramiz, narx va tayyorlash muddatini beramiz.',
    'index.step3t': 'Ishlab chiqaramiz',
    'index.step3d': 'Kesish, payvandlash, rux qoplash yoki talabingiz boʻyicha boʻyash.',
    'index.step4t': 'Joʻnatamiz',
    'index.step4d': 'Hujjatlari bilan tayyor buyumlar — omborga yoki toʻgʻridan-toʻgʻri obʼyektga.',

    'index.workEyebrow': 'Obʼyektlar',
    'index.workH2': 'Bizning ishlarimiz',
    'index.workP': 'Yoʻllar, yoʻl tugunlari, sanoat hududlari va jamoat maydonlari.',

    'index.ctEyebrow': 'Aloqa',
    'index.ctH2': 'Biz bilan bogʻlaning',
    'index.ctP': 'Har kuni, tun-u kun ishlaymiz. Qoʻngʻiroq qiling yoki messenjer orqali yozing.',
    'index.ctPhones': 'Telefonlar',
    'index.ctMess': 'Messenjerlar va ijtimoiy tarmoqlar',

    'catalog.eyebrow': 'Mahsulotlar',
    'catalog.h2': 'Mahsulotlar katalogi',
    'catalog.p': 'Ombordagi pozitsiyalar va buyurtma boʻyicha buyumlar. Kerakli oʻlcham roʻyxatda yoʻqmi — oʻlchamingiz boʻyicha tayyorlaymiz.',
    'catalog.link': 'Buyurtma boʻyicha ishlab chiqarish',
    'catalog.all': 'Barcha mahsulotlar',
    'catalog.empty': 'Bu turkumda hozircha mahsulot yoʻq. Bizga yozing — vazifangizga moslab tanlaymiz.',
    'catalog.ctaH3': 'Kerakli pozitsiyani topmadingizmi?',
    'catalog.ctaP': 'Chizma yuboring yoki vazifani tavsiflang — mavjudlardan oʻxshashini tanlaymiz yoki oʻlchamingiz boʻyicha tayyorlaymiz.',

    'product.specs': 'Texnik xususiyatlar',
    'product.related': 'Oʻxshash mahsulotlar',
    'product.relatedLink': 'Butun turkum',
    'product.notFound': 'Mahsulot topilmadi',
    'product.notFoundP': 'Havola eskirgan boʻlishi mumkin. Katalogni oching — barcha assortiment shu yerda.',

    'production.eyebrow': 'Buyurtma boʻyicha',
    'production.h1': 'Chizma va texnik topshiriq boʻyicha ishlab chiqarish',
    'production.lead': 'Bizga chizma yoki texnik topshiriq yuboring — yechim, narx va muddatni taklif qilamiz. Nostandart oʻlcham, shakl va yuklamalar bilan ishlaymiz.',
    'production.photoTag': 'Sex · Kesish va payvandlash',
    'production.canEyebrow': 'Imkoniyatlar',
    'production.canH2': 'Nima tayyorlay olamiz',
    'production.canP': 'List, quvur va profildan buyumlar — bir donadan obʼyekt uchun partiyagacha.',
    'production.c1t': 'Nostandart oʻlchamlar',
    'production.c1d': 'Balandlik, diametr, devor qalinligi va chiqish — katalogga emas, loyihangizga moslab.',
    'production.c2t': 'Boshqa shakllar',
    'production.c2d': 'Qirrali, konussimon, toʻgʻri tanalar, figurali kronshteyn va ramalar.',
    'production.c3t': 'Aniq vazifa uchun',
    'production.c3d': 'Shamol yuklamasi, uskuna ogʻirligi va montaj sharoitlari boʻyicha hisob.',
    'production.c4t': 'Buyurtmachi chizmalari boʻyicha',
    'production.c4d': 'DWG, PDF va qogʻozdagi eskizlar bilan ishlaymiz. Bahsli tugunlarni ishga tushirishdan oldin aniqlaymiz.',
    'production.c5t': 'Texnik topshiriq boʻyicha',
    'production.c5d': 'Chizma yoʻqmi — vazifani soʻz bilan tavsiflang, konstruksiyani oʻzimiz taklif qilamiz.',
    'production.c6t': 'Ishlov va qoplama',
    'production.c6d': 'Issiq rux qoplama, kukunli boʻyash, loyiha rangi ostiga grunt.',
    'production.howEyebrow': 'Jarayon',
    'production.howH2': 'Ish qanday kechadi',
    'production.s1t': 'Ariza',
    'production.s1d': 'Chizma, eskiz yoki vazifa tavsifini yuborasiz.',
    'production.s2t': 'Hisob',
    'production.s2d': 'Texnologiklikni tekshiramiz, material va qoplamani kelishamiz, narx beramiz.',
    'production.s3t': 'Tayyorlash',
    'production.s3d': 'Kesish, bukish, payvandlash, rux qoplash yoki boʻyash.',
    'production.s4t': 'Joʻnatish',
    'production.s4d': 'Hujjatlari bilan tayyor buyumlar — obʼyektga yoki oʻzingiz olib ketasiz.',
    'production.reqH2': 'Bizga chizma yoki TT yuboring — yechim taklif qilamiz',
    'production.reqP': 'Vazifani shaklda tavsiflang, chizma faylini esa WhatsApp yoki Telegramga yuboring — bu tezroq.',
    'production.item': 'Buyurtma boʻyicha ishlab chiqarish',

    'about.eyebrow': 'Kompaniya haqida',
    'about.h1': 'MRC kompaniyasi haqida',
    'about.lead': 'My Road Construction yoʻl qurilishi, obodonlashtirish va sanoat obʼyektlari uchun metall konstruksiyalarni yetkazib beradi va ishlab chiqaradi. Pudratchilar, quruvchilar va davlat buyurtmachilari bilan ishlaymiz.',
    'about.photoTag': 'MRC ishlab chiqarishi',
    'about.howEyebrow': 'Tamoyillar',
    'about.howH2': 'Qanday ishlaymiz',
    'about.a1t': 'Omborda mavjudlik',
    'about.a1d': 'Ommabop pozitsiyalar doimiy saqlanadi — ishlab chiqarishni kutmasdan joʻnatish.',
    'about.a2t': 'Oʻz ombori',
    'about.a2d': 'Maydon uzun oʻlchamli buyumlar va yirik partiyalarni saqlashga imkon beradi.',
    'about.a3t': 'Katta hajmlar',
    'about.a3d': 'Obʼyekt ehtiyojini bir necha dona emas, butunlay qoplaymiz.',
    'about.a4t': 'Ishlab chiqarish',
    'about.a4d': 'Chizma va texnik topshiriq boʻyicha nostandart buyumlar tayyorlash.',
    'about.a5t': 'Loyihalar bilan ishlash',
    'about.a5d': 'Loyiha spetsifikatsiyasi boʻyicha pozitsiyalarni tanlaymiz va almashtirishlarni kelishamiz.',
    'about.a6t': 'B2B mijozlar',
    'about.a6d': 'Shartnoma, hisob-faktura, joʻnatish hujjatlari, jadval boʻyicha partiyalarda yetkazib berish.',
    'about.objH2': 'Qaysi obʼyektlar uchun',
    'about.o1': 'Avtomobil yoʻllari va transport tugunlari',
    'about.o2': 'Shahar koʻchalari, piyodayoʻllar va piyoda zonalari',
    'about.o3': 'Sanoat va ombor hududlari',
    'about.o4': 'Turar-joy majmualari va hovlilarni obodonlashtirish',
    'about.o5': 'Maʼmuriy binolar va jamoat maydonlari',

    'contacts.eyebrow': 'Aloqa',
    'contacts.h2': 'Kontaktlar',
    'contacts.p': 'Har kuni, tun-u kun ishlaymiz. Qoʻngʻiroq qiling yoki messenjer orqali yozing.',
    'contacts.phones': 'Telefonlar',
    'contacts.tg': 'Telegram',
    'contacts.waIg': 'WhatsApp va Instagram',
    'contacts.place': 'Ombor va ofis',
    'contacts.mapPh': 'XARITA\njs/data.js faylidagi mapEmbed\nmaydoniga havola qoʻshing',

    'foot.about': 'Yoʻl qurilishi va shahar infratuzilmasi uchun metall konstruksiyalar.',
    'foot.sections': 'Boʻlimlar',
    'foot.products': 'Mahsulotlar',
    'foot.contacts': 'Kontaktlar',

    'preview.on': 'KOʻRIB CHIQISH REJIMI — admin paneldagi qoralamani koʻryapsiz. Sayt tashrifchilari buni koʻrmaydi.',
    'preview.off': 'Oʻchirish'
  }
};

/* ---------- Текущий язык ---------- */
var LANG = (function () {
  try {
    var saved = localStorage.getItem('mrc_lang');
    if (saved && I18N[saved]) return saved;
  } catch (e) {}
  return 'ru';
})();

/* Перевод строки интерфейса */
function t(key) {
  var dict = I18N[LANG] || I18N.ru;
  return dict[key] !== undefined ? dict[key] : (I18N.ru[key] !== undefined ? I18N.ru[key] : key);
}

/* Перевод поля данных вида { ru, uz } — с откатом на русский */
function T(field) {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  var val = field[LANG];
  if (val === undefined || val === null || val === '') val = field.ru;
  return val || '';
}

/* Применить перевод ко всей странице */
function applyI18n() {
  document.documentElement.lang = LANG;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
  });
  document.querySelectorAll('[data-i18n-val]').forEach(function (el) {
    el.value = t(el.getAttribute('data-i18n-val'));
  });

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.classList.toggle('is-active', b.dataset.lang === LANG);
  });

  document.dispatchEvent(new CustomEvent('mrc:lang', { detail: { lang: LANG } }));
}

/* Переключение языка */
function setLang(code) {
  if (!I18N[code] || code === LANG) return;
  LANG = code;
  try { localStorage.setItem('mrc_lang', code); } catch (e) {}
  applyI18n();
}

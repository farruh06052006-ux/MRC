/* ============================================================
   MRC — ДАННЫЕ САЙТА
   Файл создан админ-панелью 10.09.2026, 21:43:30
   Положите его в папку js/ вместо старого data.js

   stock:  'in'    — есть на складе
           'order' — производство под заказ
   ============================================================ */

var SITE = {
  "phone1": "+998887800715",
  "phone1Label": "+998 88 780 07 15",
  "phone2": "+998931844800",
  "phone2Label": "+998 93 184 48 00",
  "whatsapp": "998887800715",
  "telegram1": "+998887800715",
  "telegram2": "+998931844800",
  "instagram": "https://www.instagram.com/myroad_construction/",
  "address": {
    "ru": "Husayn Bayqaro ko'chasi 13, 100182, Тоshkent, Toshkent Viloyati, Узбекистан",
    "uz": "Husayn Bayqaro ko'chasi 13, 100182, Тоshkent, Toshkent Viloyati, Oʻzbekiston"
  },
  "mapEmbed": "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6000.429211362828!2d69.34645!3d41.238883!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzIwLjAiTiA2OcKwMjAnNDcuMiJF!5e0!3m2!1sru!2s!4v1789156781135!5m2!1sru!2s"
};

var CATEGORIES = [
  {
    "id": "lighting",
    "name": {
      "ru": "Опоры освещения",
      "uz": "Yoritish ustunlari"
    },
    "desc": {
      "ru": "Стальные опоры высотой от 7 до 12 метров: конические, гранёные, прямые. Стандартные модели и изготовление под проект.",
      "uz": "Balandligi 7 dan 12 metrgacha boʻlgan poʻlat ustunlar: konussimon, qirrali, toʻgʻri. Standart modellar va loyiha boʻyicha tayyorlash."
    },
    "image": "assets/img/products/dorojnaya_opora_kategoriya.png"
  },
  {
    "id": "barrier",
    "name": {
      "ru": "Дорожные ограждения",
      "uz": "Yoʻl toʻsiqlari"
    },
    "desc": {
      "ru": "Барьерные и пешеходные ограждения для автомобильных дорог, мостов и разделительных полос.",
      "uz": "Avtomobil yoʻllari, koʻpriklar va ajratuvchi yoʻlaklar uchun barʼer va piyoda toʻsiqlari."
    },
    "image": "assets/img/products/dorojnoe_ograjdenie_kategoriya.png"
  },
  {
    "id": "flag",
    "name": {
      "ru": "Флагштоки",
      "uz": "Bayroq ustunlari"
    },
    "desc": {
      "ru": "Флагштоки высотой от 6 до 12 метров с внутренним и внешним подъёмом флага.",
      "uz": "Balandligi 6 dan 12 metrgacha, bayroqni ichki va tashqi koʻtarish tizimli bayroq ustunlari."
    },
    "image": "assets/img/products/flagshtoki_kategoriya.png"
  },
  {
    "id": "mast",
    "name": {
      "ru": "Мачты и специальные опоры",
      "uz": "Machtalar va maxsus ustunlar"
    },
    "desc": {
      "ru": "Высокомачтовые осветительные установки и опоры для автомагистралей и инфраструктурных объектов.",
      "uz": "Avtomagistrallar va infratuzilma obʼyektlari uchun baland machtali yoritish qurilmalari va ustunlar."
    },
    "image": "assets/img/products/machti_kategoriya.png"
  },
  {
    "id": "fence",
    "name": {
      "ru": "Наружные металлические ограждения",
      "uz": "Tashqi metall panjaralar"
    },
    "desc": {
      "ru": "Секционные и сварные ограждения территорий, ворота, калитки, защитные конструкции.",
      "uz": "Hududlar uchun seksiyali va payvandlangan panjaralar, darvozalar, eshikchalar, himoya konstruksiyalari."
    },
    "image": "assets/img/products/peshihod_ograjdenie_kategoriya.png"
  },
  {
    "id": "other",
    "name": {
      "ru": "Другие металлические изделия",
      "uz": "Boshqa metall buyumlar"
    },
    "desc": {
      "ru": "Закладные детали, кронштейны, стойки дорожных знаков и нестандартные металлоконструкции.",
      "uz": "Oʻrnatma detallar, kronshteynlar, yoʻl belgisi ustunlari va nostandart metall konstruksiyalar."
    },
    "image": "assets/img/products/drugoe_kategoriya.png"
  }
];

var PRODUCTS = [
  {
    "id": "opora-6m",
    "cat": "lighting",
    "stock": "in",
    "name": {
      "ru": "Опора освещения 7 м",
      "uz": "Yoritish ustuni 7 m"
    },
    "short": {
      "ru": "Гранёная опора для внутриквартальных проездов, парковок и пешеходных зон.",
      "uz": "Kvartal ichidagi yoʻllar, avtoturargohlar va piyoda zonalari uchun qirrali ustun."
    },
    "desc": {
      "ru": "Опора несилового типа для установки светильников на высоте 7 метров. Применяется на дворовых территориях, парковках, в парках и на пешеходных участках. Комплектуется закладной деталью и кронштейном по запросу.",
      "uz": "Chiroqlarni 7 metr balandlikda oʻrnatish uchun kuchsiz turdagi ustun. Hovli hududlari, avtoturargohlar, bogʻlar va piyoda uchastkalarida qoʻllaniladi. Soʻrov boʻyicha oʻrnatma detal va kronshteyn bilan toʻldiriladi."
    },
    "images": [
      "assets/img/products/ChatGPT Image 8 сент. 2026 г., 20_05_59.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "7 000 мм",
          "uz": "7 000 mm"
        }
      },
      {
        "k": {
          "ru": "Тип",
          "uz": "Turi"
        },
        "v": {
          "ru": "Гранёная",
          "uz": "Qirrali"
        }
      },
      {
        "k": {
          "ru": "Толщина стенки",
          "uz": "Devor qalinligi"
        },
        "v": {
          "ru": "2 мм",
          "uz": "2 mm"
        }
      },
      {
        "k": {
          "ru": "Диаметр основания",
          "uz": "Asos diametri"
        },
        "v": {
          "ru": "150 мм",
          "uz": "150 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "opora-8m",
    "cat": "lighting",
    "stock": "in",
    "name": {
      "ru": "Опора освещения 8 м",
      "uz": "Yoritish ustuni 8 m"
    },
    "short": {
      "ru": "Основная модель для городских улиц и внутренних дорог предприятий.",
      "uz": "Shahar koʻchalari va korxonalarning ichki yoʻllari uchun asosiy model."
    },
    "desc": {
      "ru": "Опора высотой 8 метров для освещения городских улиц, промышленных территорий и подъездных дорог. Держится на складе в постоянном объёме, отгрузка возможна в день обращения.",
      "uz": "Shahar koʻchalari, sanoat hududlari va kirish yoʻllarini yoritish uchun 8 metrli ustun. Omborda doimiy hajmda saqlanadi, murojaat kuni joʻnatish mumkin."
    },
    "images": [
      "assets/img/products/ChatGPT Image 8 сент. 2026 г., 20_05_59.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "8 000 мм",
          "uz": "8 000 mm"
        }
      },
      {
        "k": {
          "ru": "Тип",
          "uz": "Turi"
        },
        "v": {
          "ru": "Гранёная",
          "uz": "Qirrali"
        }
      },
      {
        "k": {
          "ru": "Толщина стенки",
          "uz": "Devor qalinligi"
        },
        "v": {
          "ru": "4 мм",
          "uz": "4 mm"
        }
      },
      {
        "k": {
          "ru": "Диаметр основания",
          "uz": "Asos diametri"
        },
        "v": {
          "ru": "180 мм",
          "uz": "180 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "opora-9m",
    "cat": "lighting",
    "stock": "in",
    "name": {
      "ru": "Опора освещения 9 м",
      "uz": "Yoritish ustuni 9 m"
    },
    "short": {
      "ru": "Опора для магистральных улиц и транспортных развязок.",
      "uz": "Magistral koʻchalar va transport ayirboshlash tugunlari uchun ustun."
    },
    "desc": {
      "ru": "Опора высотой 9 метров применяется на магистральных улицах, транспортных развязках и въездных группах. Совместима с одно- и двухрожковыми кронштейнами.",
      "uz": "9 metrli ustun magistral koʻchalar, transport tugunlari va kirish guruhlarida qoʻllaniladi. Bir va ikki shoxli kronshteynlar bilan mos keladi."
    },
    "images": [
      "assets/img/products/ChatGPT Image 8 сент. 2026 г., 20_05_59.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "9 000 мм",
          "uz": "9 000 mm"
        }
      },
      {
        "k": {
          "ru": "Тип",
          "uz": "Turi"
        },
        "v": {
          "ru": "Коническая",
          "uz": "Konussimon"
        }
      },
      {
        "k": {
          "ru": "Толщина стенки",
          "uz": "Devor qalinligi"
        },
        "v": {
          "ru": "4 мм",
          "uz": "4 mm"
        }
      },
      {
        "k": {
          "ru": "Диаметр основания",
          "uz": "Asos diametri"
        },
        "v": {
          "ru": "200 мм",
          "uz": "200 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "opora-10m",
    "cat": "lighting",
    "stock": "order",
    "name": {
      "ru": "Опора освещения 10 м",
      "uz": "Yoritish ustuni 10 m"
    },
    "short": {
      "ru": "Для автомобильных дорог, промышленных площадок и логистических центров.",
      "uz": "Avtomobil yoʻllari, sanoat maydonchalari va logistika markazlari uchun."
    },
    "desc": {
      "ru": "Опора высотой 10 метров для освещения автомобильных дорог и открытых производственных площадок. Изготавливается под проект с учётом ветровой нагрузки региона.",
      "uz": "Avtomobil yoʻllari va ochiq ishlab chiqarish maydonchalarini yoritish uchun 10 metrli ustun. Mintaqaning shamol yuklamasi hisobga olingan holda loyiha boʻyicha tayyorlanadi."
    },
    "images": [
      "assets/img/products/ChatGPT Image 8 сент. 2026 г., 20_05_59.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "10 000 мм",
          "uz": "10 000 mm"
        }
      },
      {
        "k": {
          "ru": "Тип",
          "uz": "Turi"
        },
        "v": {
          "ru": "Коническая",
          "uz": "Konussimon"
        }
      },
      {
        "k": {
          "ru": "Толщина стенки",
          "uz": "Devor qalinligi"
        },
        "v": {
          "ru": "4–5 мм",
          "uz": "4–5 mm"
        }
      },
      {
        "k": {
          "ru": "Диаметр основания",
          "uz": "Asos diametri"
        },
        "v": {
          "ru": "225 мм",
          "uz": "225 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "barrier-11do",
    "cat": "barrier",
    "stock": "in",
    "name": {
      "ru": "Барьерное ограждение 11ДО",
      "uz": "11DO barʼer toʻsigʻi"
    },
    "short": {
      "ru": "Одностороннее металлическое ограждение для обочин автомобильных дорог.",
      "uz": "Avtomobil yoʻllari yon tomonlari uchun bir tomonlama metall toʻsiq."
    },
    "desc": {
      "ru": "Однорядное барьерное ограждение с балкой W-образного профиля. Устанавливается на обочинах дорог I–IV категории. Поставляется комплектом: балка, стойка, консоль, светоотражатели, крепёж.",
      "uz": "W shaklidagi profilli balkaga ega bir qatorli barʼer toʻsigʻi. I–IV toifadagi yoʻllar yon tomonlariga oʻrnatiladi. Toʻplam bilan yetkaziladi: balka, ustun, konsol, yorugʻlik qaytargichlar, mahkamlagichlar."
    },
    "images": [
      "assets/img/products/ChatGPT Image 8 сент. 2026 г., 20_06_38.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Тип",
          "uz": "Turi"
        },
        "v": {
          "ru": "Одностороннее, 11ДО",
          "uz": "Bir tomonlama, 11DO"
        }
      },
      {
        "k": {
          "ru": "Длина балки",
          "uz": "Balka uzunligi"
        },
        "v": {
          "ru": "4 320 мм",
          "uz": "4 320 mm"
        }
      },
      {
        "k": {
          "ru": "Толщина балки",
          "uz": "Balka qalinligi"
        },
        "v": {
          "ru": "3 мм",
          "uz": "3 mm"
        }
      },
      {
        "k": {
          "ru": "Шаг стоек",
          "uz": "Ustunlar qadami"
        },
        "v": {
          "ru": "2 000 / 4 000 мм",
          "uz": "2 000 / 4 000 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "barrier-11dd",
    "cat": "barrier",
    "stock": "order",
    "name": {
      "ru": "Ограждение двустороннее 11ДД",
      "uz": "Ikki tomonlama toʻsiq 11DD"
    },
    "short": {
      "ru": "Ограждение для разделительной полосы автомагистралей.",
      "uz": "Avtomagistrallarning ajratuvchi yoʻlagi uchun toʻsiq."
    },
    "desc": {
      "ru": "Двустороннее барьерное ограждение для установки на разделительной полосе. Балки крепятся с обеих сторон стойки, что обеспечивает защиту встречных потоков.",
      "uz": "Ajratuvchi yoʻlakka oʻrnatish uchun ikki tomonlama barʼer toʻsigʻi. Balkalar ustunning har ikki tomoniga mahkamlanadi va qarama-qarshi oqimlarni himoya qiladi."
    },
    "images": [
      "assets/img/products/Изображение Codex 8 сент. 2026 г., 21_54_05.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Тип",
          "uz": "Turi"
        },
        "v": {
          "ru": "Двустороннее, 11ДД",
          "uz": "Ikki tomonlama, 11DD"
        }
      },
      {
        "k": {
          "ru": "Длина балки",
          "uz": "Balka uzunligi"
        },
        "v": {
          "ru": "4 320 мм",
          "uz": "4 320 mm"
        }
      },
      {
        "k": {
          "ru": "Толщина балки",
          "uz": "Balka qalinligi"
        },
        "v": {
          "ru": "3–4 мм",
          "uz": "3–4 mm"
        }
      },
      {
        "k": {
          "ru": "Высота стойки",
          "uz": "Ustun balandligi"
        },
        "v": {
          "ru": "1 750 мм",
          "uz": "1 750 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "peshehodnoe",
    "cat": "fence",
    "stock": "in",
    "name": {
      "ru": "Пешеходное ограждение",
      "uz": "Piyodalar uchun panjara"
    },
    "short": {
      "ru": "Перильное ограждение для тротуаров, остановок и пешеходных переходов.",
      "uz": "Piyodayoʻllar, bekatlar va piyoda oʻtish joylari uchun panjara."
    },
    "desc": {
      "ru": "Секционное перильное ограждение, разделяющее проезжую часть и тротуар. Секции стыкуются между собой, монтаж возможен на бетонное основание или в грунт.",
      "uz": "Yoʻl qismi va piyodayoʻlni ajratuvchi seksiyali panjara. Seksiyalar oʻzaro ulanadi, montaj beton asosga yoki tuproqqa mumkin."
    },
    "images": [
      "assets/img/products/Peshekhodnoye_ograzhdeniye.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота секции",
          "uz": "Seksiya balandligi"
        },
        "v": {
          "ru": "1 100 мм",
          "uz": "1 100 mm"
        }
      },
      {
        "k": {
          "ru": "Длина секции",
          "uz": "Seksiya uzunligi"
        },
        "v": {
          "ru": "2 000 мм",
          "uz": "2 000 mm"
        }
      },
      {
        "k": {
          "ru": "Труба",
          "uz": "Quvur"
        },
        "v": {
          "ru": "32 × 2 мм",
          "uz": "32 × 2 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Порошковая окраска / цинк",
          "uz": "Kukunli boʻyoq / rux"
        }
      }
    ]
  },
  {
    "id": "flag-8m",
    "cat": "flag",
    "stock": "in",
    "name": {
      "ru": "Флагшток 8 м",
      "uz": "Bayroq ustuni 8 m"
    },
    "short": {
      "ru": "Конический флагшток с внутренним тросовым подъёмом.",
      "uz": "Ichki arqonli koʻtarish tizimiga ega konussimon bayroq ustuni."
    },
    "desc": {
      "ru": "Флагшток высотой 8 метров для административных зданий, площадей и въездных групп. Внутренний механизм подъёма защищён от вандализма и погодных воздействий.",
      "uz": "Maʼmuriy binolar, maydonlar va kirish guruhlari uchun 8 metrli bayroq ustuni. Ichki koʻtarish mexanizmi vandalizm va ob-havo taʼsiridan himoyalangan."
    },
    "images": [
      "assets/img/products/logo.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "8 000 мм",
          "uz": "8 000 mm"
        }
      },
      {
        "k": {
          "ru": "Тип подъёма",
          "uz": "Koʻtarish turi"
        },
        "v": {
          "ru": "Внутренний тросовый",
          "uz": "Ichki arqonli"
        }
      },
      {
        "k": {
          "ru": "Диаметр основания",
          "uz": "Asos diametri"
        },
        "v": {
          "ru": "150 мм",
          "uz": "150 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь / алюминий",
          "uz": "Poʻlat / alyuminiy"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Полимерная окраска",
          "uz": "Polimer boʻyoq"
        }
      }
    ]
  },
  {
    "id": "flag-10m",
    "cat": "flag",
    "stock": "order",
    "name": {
      "ru": "Флагшток 10 м",
      "uz": "Bayroq ustuni 10 m"
    },
    "short": {
      "ru": "Флагшток для площадей, стадионов и крупных объектов.",
      "uz": "Maydonlar, stadionlar va yirik obʼyektlar uchun bayroq ustuni."
    },
    "desc": {
      "ru": "Флагшток высотой 10 метров. Изготавливается под размер флага заказчика, комплектуется анкерной корзиной и декоративным фланцем.",
      "uz": "10 metrli bayroq ustuni. Buyurtmachi bayrogʻining oʻlchamiga moslab tayyorlanadi, anker savati va dekorativ flanets bilan toʻldiriladi."
    },
    "images": [
      "assets/img/products/logo.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "10 000 мм",
          "uz": "10 000 mm"
        }
      },
      {
        "k": {
          "ru": "Тип подъёма",
          "uz": "Koʻtarish turi"
        },
        "v": {
          "ru": "Внутренний тросовый",
          "uz": "Ichki arqonli"
        }
      },
      {
        "k": {
          "ru": "Диаметр основания",
          "uz": "Asos diametri"
        },
        "v": {
          "ru": "180 мм",
          "uz": "180 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь / алюминий",
          "uz": "Poʻlat / alyuminiy"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Полимерная окраска",
          "uz": "Polimer boʻyoq"
        }
      }
    ]
  },
  {
    "id": "mast-16m",
    "cat": "mast",
    "stock": "order",
    "name": {
      "ru": "Высокомачтовая опора 16 м",
      "uz": "Baland machtali ustun 16 m"
    },
    "short": {
      "ru": "Мачта освещения для развязок, площадей и открытых территорий.",
      "uz": "Yoʻl tugunlari, maydonlar va ochiq hududlar uchun yoritish machtasi."
    },
    "desc": {
      "ru": "Высокомачтовая осветительная установка высотой 16 метров с короной на 4–8 светильников. Возможна комплектация мобильной короной с механизмом опускания для обслуживания.",
      "uz": "4–8 ta chiroq uchun tojga ega 16 metrli baland machtali yoritish qurilmasi. Xizmat koʻrsatish uchun tushirish mexanizmli harakatlanuvchi toj bilan toʻldirish mumkin."
    },
    "images": [
      "assets/img/products/Vysokomachtovaya_opora.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "16 000 мм",
          "uz": "16 000 mm"
        }
      },
      {
        "k": {
          "ru": "Ствол",
          "uz": "Tanasi"
        },
        "v": {
          "ru": "Многогранный, секционный",
          "uz": "Koʻp qirrali, seksiyali"
        }
      },
      {
        "k": {
          "ru": "Корона",
          "uz": "Toji"
        },
        "v": {
          "ru": "4–8 светильников",
          "uz": "4–8 ta chiroq"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  },
  {
    "id": "stoyka-znaka",
    "cat": "other",
    "stock": "in",
    "name": {
      "ru": "Стойка дорожного знака",
      "uz": "Yoʻl belgisi ustuni"
    },
    "short": {
      "ru": "Оцинкованные стойки для установки дорожных знаков.",
      "uz": "Yoʻl belgilarini oʻrnatish uchun ruxlangan ustunlar."
    },
    "desc": {
      "ru": "Стойки для монтажа дорожных знаков на обочинах и тротуарах. Комплектуются хомутами и крепежом.",
      "uz": "Yoʻl belgilarini yoʻl chetlari va piyodayoʻllarga montaj qilish uchun ustunlar. Xomutlar va mahkamlagichlar bilan toʻldiriladi."
    },
    "images": [
      "assets/img/products/Изображение Codex 8 сент. 2026 г., 21_50_39.png"
    ],
    "specs": [
      {
        "k": {
          "ru": "Высота",
          "uz": "Balandligi"
        },
        "v": {
          "ru": "3 000 / 3 500 мм",
          "uz": "3 000 / 3 500 mm"
        }
      },
      {
        "k": {
          "ru": "Диаметр трубы",
          "uz": "Quvur diametri"
        },
        "v": {
          "ru": "60 мм",
          "uz": "60 mm"
        }
      },
      {
        "k": {
          "ru": "Толщина стенки",
          "uz": "Devor qalinligi"
        },
        "v": {
          "ru": "3 мм",
          "uz": "3 mm"
        }
      },
      {
        "k": {
          "ru": "Материал",
          "uz": "Material"
        },
        "v": {
          "ru": "Сталь Ст3",
          "uz": "Poʻlat St3"
        }
      },
      {
        "k": {
          "ru": "Покрытие",
          "uz": "Qoplama"
        },
        "v": {
          "ru": "Горячее цинкование",
          "uz": "Issiq rux qoplama"
        }
      }
    ]
  }
];

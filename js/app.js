let t = $("#back-top");
$(window).on("scroll", function () {
  ($scrollTop = $(window).scrollTop()),
    (t = $("#back-top")),
    $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");

  $scrollTop > 0
    ? $(".es-navbar").addClass("es-navbar-fixed")
    : $(".es-navbar").removeClass("es-navbar-fixed");
});
($htmlBody = $("html, body")),
  t.length &&
    t.on("click", function (t) {
      $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
    });

// languages
var arrLang = {
  "en": {
    "Home": "Home",
    "About": "About",
    "Contact": "Contact",
    "Language-drp": "English",
    "Russian": "Russian",
    "Uzbek": "Uzbek",
    "English": "English",
    "About_bal": "ABOUT BAL®",
    "About_info": "BAL is an industry leader in medical diagnostic imaging solutions focused on digital radiography, ultrasound, precision medicine and healthcare information technology. The solutions cover the whole range of services from prevention to diagnosis and treatment.",
    "Say_about_bal": "SAY ABOUT BAL®",
    "Say_about_bal_info": "Share the amazing things customers are saying about your business. Double click, or click Edit Text to make it yours.",
    "Say_about_bal_dr": "Otabek Vakhobovich Ablyazov",
    "Say_about_bal_dr_position": "Chief Radiologist of Uzbekistan",
    "Our_clients": "Our Clients",
    "Services": "Services",
    "Menu": "MENU",
    "Hours_of_operation": "HOURS OF OPERATION",
    "Mon_thu": "Mon-Thu: 9AM to 8PM",
    "Friday": "Friday: 9AM to 3PM",
    "Sat_sun": "Sat-Sun: Closed",
    "Contact_us": "CONTACT US",
    "Office": "Sales Office (Tashkent)",
    "Manufacturing": "Manufacturing",
    "Website_developed_by": "Website developed by",
    "Developer": "Exord Soft",
    "Street": "Parkent Riyoziy 1A",
    "City": "Yashnabad, Tashkent",
    "Country": "Uzbekistan",
    "Street_m": "Chorchinor 88G",
    "City_m": "Kokand City, Fergana",
  },
  "ru": {
    "Home": "Главная",
    "About": "О нас",
    "Contact": "Контакт",
    "Language-drp": "Русский",
    "Russian": "Русский",
    "Uzbek": "Узбекский",
    "English": "Английский",
    "About_bal": "О BAL®",
    "About_info": "BAL — лидер отрасли в области решений для медицинской диагностической визуализации, ориентированных на цифровую рентгенографию, ультразвук, прецизионную медицину и информационные технологии здравоохранения. Решения охватывают весь спектр услуг: от профилактики до диагностики и лечения.",
    "Say_about_bal": "СКАЖИТЕ О БАЛ®",
    "Say_about_bal_info": "Поделитесь удивительными словами клиентов о вашем бизнесе. Дважды щелкните или нажмите Редактировать текст, чтобы сделать его своим.",
    "Say_about_bal_dr": "Аблязов Отабек Вахобович",
    "Say_about_bal_dr_position": "Главный радиолог Узбекистана",
    "Our_clients": "Наши клиенты",
    "Services": "Услуги",
    "Menu": "МЕНЮ",
    "Hours_of_operation": "ЧАСЫ РАБОТЫ",
    "Mon_thu": "Пн-Чт: с 9:00 до 20:00",
    "Friday": "Пятница: с 9:00 до 15:00.",
    "Sat_sun": "Сб-Вс: Закрыто",
    "Contact_us": "СВЯЗАТЬСЯ С НАМИ",
    "Office": "Офис продаж (Ташкент)",
    "Manufacturing": "Производство",
    "Website_developed_by": "Сайт разработан в",
    "Developer": "Exord Soft",
    "Street": "Паркент Рийозий 1А",
    "City": "Яшнабад, Ташкент",
    "Country": "Узбекистан",
    "Street_m": "Чорчинор 88Г",
    "City_m": "Коканд, Фергана",
  },
  "uz": {
    "Home": "Asosiy",
    "About": "Haqida",
    "Contact": "Kontakt",
    "Language-drp": "O'zbekcha",
    "Russian": "Ruscha",
    "Uzbek": "O'zbekcha",
    "English": "Inglizcha",
    "About_bal": "BAL® HAQIDA",
    "About_info": "BAL raqamli rentgenografiya, ultratovush, aniq tibbiyot va sog'liqni saqlash axborot texnologiyalariga yo'naltirilgan tibbiy diagnostika tasvirlash yechimlari sohasida yetakchi hisoblanadi. Yechimlar profilaktikadan diagnostika va davolashgacha bo'lgan barcha xizmatlarni qamrab oladi.",
    "Say_about_bal": "BAL® HAQIDA AYTING",
    "Say_about_bal_info": "Mijozlarning biznesingiz haqida aytgan ajoyib gaplarini baham ko'ring. Ikki marta bosing yoki matnni sizniki qilish uchun Matnni tahrirlash tugmasini bosing.",
    "Say_about_bal_dr": "Otabek Vahobovich Ablyazov",
    "Say_about_bal_dr_position": "O‘zbekiston bosh rentgenologi",
    "Our_clients": "Bizning mijozlarimiz",
    "Services": "Xizmatlar",
    "Menu": "MENYU",
    "Hours_of_operation": "ISH SOATLARI",
    "Mon_thu": "Dushanbadan, Payshanbagacha: 9:00 dan 20:00 gacha",
    "Friday": "Juma: 9:00 dan 15:00 gacha",
    "Sat_sun": "Shanba, Yakshanba: Yopiq",
    "Contact_us": "BIZ BILAN BOG'LANISH",
    "Office": "Sotuv ofisi (Toshkent)",
    "Manufacturing": "Ishlab chiqarish",
    "Website_developed_by": "Veb-sayt ishlab chiqaruvchi",
    "Developer": "Exord Soft",
    "Street": "Parkent Riyoziy 1A",
    "City": "Yashnabod, Tashkent",
    "Country": "O'zbekiston",
    "Street_m": "Chorchinor 88G",
    "City_m": "Qo'qon shahri, Farg'ona",
  },
};

$(document).ready(function () {
  // The default language is English
  var lang = "en";
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function () {
  var lang = $(this).attr("id");

  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

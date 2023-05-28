const heroesData = [{ //массив с данными о супергерое
  "name": "Бетмен",
  "universe": "DC Comics",
  "alterego": "Брюс Уэйн",
  "occupation": "борец с преступностью, филантроп, миллиардер",
  "friends": "Робин, Бэтгерл",
  "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
  "url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
  "info": "По популярности человек-летучая мышь может сравниться только с Суперменом. "
  },{
  "name": "Супермен",
  "universe": "DC Comics",
  "alterego": "Кларк Кент",
  "occupation": "борец за справедливость",
  "friends": "собака Крипто",
  "superpowers": "непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм",
  "url" : "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
  "info": "Полная противоположность своему противнику Бэтмену. "
},{
  "name": "Железный человек",
  "universe": "Marvel Comics",
  "alterego": "Тони Старк",
  "occupation": "гений, миллиардер, плейбой, филантроп",
  "friends": "Мстители",
  "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
  "url" : "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
  "info": "Пожалуй, самый популярный современный супергерой. "
},{
  "name": "Спайдер-мен/Человек-паук",
  "universe": "Marvel Comics",
  "alterego": "Питер Паркер",
  "occupation": "борец за справедливость, студент, фотограф",
  "friends": "Мстители, Фантастическая четверка, Люди Икс",
  "superpowers": "сверхчеловеческие рефлексы, «паучье чутьё», способность прилепляться к твердым поверхностям, производство паутины",
  "url" : "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
  "info": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. "
},{
  "name": "Капитан Америка",
  "universe": "Marvel Comics",
  "alterego": "Стивен Роджерс",
  "occupation": "супер-солдат",
  "friends": "Мстители",
  "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
  "url" : "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg",
  "info": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма."
},{
  "name": "Тор",
  "universe": "Marvel Comics",
  "alterego": "нет; полное имя — Тор Одинсон",
  "occupation": "борец за справедливость, скандинавский бог",
  "friends": "Мстители",
  "superpowers": "всё, что может бог, плюс молот Мьелнир",
  "url" : "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg",
  "info": "Персонаж Тора основан на образе одноименного скандинавского бога. "
},{
  "name": "Халк",
  "universe": "Marvel Comics",
  "alterego": "Брюс Беннер",
  "occupation": "супергерой, борец за справедливость, ученый-биохимик",
  "friends": "Мстители",
  "superpowers": "сверхчеловеческая сила и скорость, выносливость, полёт",
  "url" : "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg",
  "info": "Идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда»"
},{
  "name": "Чудо-женщина",
  "universe": "DC Comics",
  "alterego": "Диана Принс",
  "occupation": "супергероиня, секретарь-референт",
  "friends": "Лига Справедливости, Бэтмен, Супермен",
  "superpowers": "сверхчеловеческая сила искорость, выносливость, полёт",
  "url" : "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
  "info": "Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :)"
},{
  "name": "Черная вдова",
  "universe": "Marvel Comics",
  "alterego": "Наташа Романофф",
  "occupation": "супергероиня, шпионка",
  "friends": "Мстители",
  "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
  "url" : "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg",
  "info": "Супергероиня российского происхождения, родилась предположительно в 1928 году в Сталинграде. "
},{
  "name": 'Дэдпул',
  "universe": 'Marvel Comics',
  "alterego": 'Уэйд Уинстон Уилсон',
  "occupation": 'антигерой, наёмник',
  "friends": 'частично Мстители, Человек-паук, Росомаха',
  "superpowers":
    'высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система',
  "url": 'https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg',
  "info": 'Как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам «Болтливым наёмником»',
},
];

function fillHeroData(heroIndex, heroData) { //заполняю данные о супергерое. heroIndex - индекс супергероя, heroData - объект с информацией о герое
  const heroNameElement = document.getElementById(`hero-name-${heroIndex}`); //ищу данные в html коде
  const heroInfoElement = document.getElementById(`hero-info-${heroIndex}`);
  const heroUniverseElement = document.getElementById(`hero-universe-${heroIndex}`);
  const heroAlteregoElement = document.getElementById(`hero-alterego-${heroIndex}`);
  const heroOccupationElement = document.getElementById(`hero-occupation-${heroIndex}`);
  const heroFriendsElement = document.getElementById(`hero-friends-${heroIndex}`);
  const heroSuperpowersElement = document.getElementById(`hero-superpowers-${heroIndex}`);

  heroNameElement.textContent = heroData.name; //с помощью textContent присваиваю содерджимое
  heroInfoElement.textContent = heroData.info;
  heroUniverseElement.textContent = `Вселенная: ${heroData.universe}`;
  heroAlteregoElement.textContent = `Альтер-эго: ${heroData.alterego}`;
  heroOccupationElement.textContent = `Род деятельности: ${heroData.occupation}`;
  heroFriendsElement.textContent = `Друзья: ${heroData.friends}`;
  heroSuperpowersElement.textContent = `Суперспособности: ${heroData.superpowers}`;
}
for (let i = 0; i < heroesData.length; i++) { //увеличиваю индекс в id элементах с каждой итерацией цикла for
  fillHeroData(i + 1, heroesData[i]);
}

// Функция для установки рейтинга
function setRating(heroId, rating) { //сохраняю рейтинг героя в localStorage
  localStorage.setItem(`rating_${heroId}`, rating);
}


function handleRatingSubmit(event) { //обрабатываю и сохраняю рейтинг
  const button = event.target;
  const heroId = button.parentNode.getAttribute('data-hero-id');
  const ratingInput = document.getElementById(`rating-input-${heroId}`);
  const rating = parseInt(ratingInput.value);
  setRating(heroId, rating);
}

const submitButtons = document.querySelectorAll('[id^="submit-rating-"]'); //выбираю все элементы, которые начинаются с "submit-rating-"
submitButtons.forEach((button) => { //добавляю обработчик события клика
  button.addEventListener('click', handleRatingSubmit);
});

for (let i = 1; i <= heroesData.length; i++) {
  loadRating(i);
}
const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// FLE_RU
/**
*
* *** ALL NAVIGATION FOV ***
* */

/**
*
* Languages Selection Menu
* 
*/
/* In function, FovMainNavLinksLanguagesSelectionClick, define the parameters
* counter_start :: generally 1
* counter_end :: end of the loop goes to 4, 5, 6... etc according ot the main nav
* description ::  Description of the test
* 
*/
LanguagesCounterStart:1, 
LanguagesCounterEnd:7, 
LanguagesDescription:'Main Navigation :: Testing Languages Selection ::  hreflang value & href link', 

/**
*
* Settings Selection Menu
* 
*/

/* In function, FovMainNavLinksBurgerMenu, define the parameters
* counter_start :: generally 1
* counter_end :: end of the loop goes to 4, 5, 6... etc according ot the main nav
* description ::  Description of the test
* 
*/
SettingsCounterStart:1, 
SettingsCounterEnd:2, 
SettingsDescription:'Main Navigation :: Testing the Settings Selection', 

/**
*
* Burger Selection Menu
* 
*/


/* In function, FovMainNavLinksBurgerMenu, define the parameters
* counter_start :: generally 1
* counter_end :: end of the loop goes to 4, 5, 6... etc according ot the main nav
* type :: hot-tag, listen, thematic-1, thematic-2, default is social
* status :: the menu exists or not, true or false
* div_nb_position :: if the menu exists, it must have a css_selector
* description ::  Descripition of the test
* 
*/
/* 
* hot-tag
*/
HotTagsCounterStart:1, 
HotTagsCounterEnd:1, 
HotTagsType:'hot-tag',
HotTagsStatus:true,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:2, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:4, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',
// #site-nav-menu > div:nth-child(4) > div > div > ul > li:nth-child(1)
/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:4,
thematicTwoType:'thematic-2',
thematicTwoStatus:true,
thematicTwoDivNbPosition:'div:nth-child(4)',
thematicTwoDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* thematic-3
*/
thematicThreeCounterStart:1,
thematicThreeCounterEnd:4,
thematicThreeType:'thematic-3',
thematicThreeStatus:false,
thematicThreeDivNbPosition:'div:nth-child(5)',
thematicThreeDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* social
*/
socialCounterStart:1,
socialCounterEnd:4,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
      ['homepage', '', 3, 7],
      ['page_podcasts_journal_français_facile','podcasts/journal-en-fran%C3%A7ais-facile/', 1, 1],
      ['page_podcasts_selection','podcasts/s%C3%A9lection/', 3, 5],
      ['page_exercices','exercices/', 2, 4],
      ['page_diplomes_tests','dipl%C3%B4mes-tests/', 2, 4],
      ['page_tester_son_niveau','tester-son-niveau/', 1, 1],
      ['page_comprendre_actualite_français','comprendre-actualit%C3%A9-fran%C3%A7ais/', 2, 4],
      ['page_communiquer_quotidien','communiquer-quotidien/', 2, 4],
      ['page_reviser','r%C3%A9viser/', 2, 4],
      ['page_enseigner','enseigner/', 3, 5],
      ['page_exercices_a1','exercices/a1/', 2, 4],
      ['page_exercices_a2','exercices/a2/', 2, 4],
      ['page_exercices_b1','exercices/b1/', 2, 4],
      ['page_exercices_b2','exercices/b2/', 2, 4],
      ['page_exercices_c1c2','exercices/c1c2/', 2, 4],
      ['page_podcasts_mots_actualite','podcasts/les-mots-de-l-actualit%C3%A9/', 1, 1]
  ],


/**
*
* * SEO
* */ 

// FLE_RU
NavActualitesSlugNewsByRegion: [
        ['page_podcasts_journal_français_facile','podcasts/journal-en-fran%C3%A7ais-facile/'],
        ['page_podcasts_selection','podcasts/s%C3%A9lection/'],
        ['page_exercices','exercices/'],
        ['page_diplomes_tests','dipl%C3%B4mes-tests/'],
        ['page_tester_son_niveau','tester-son-niveau/'],
        ['page_comprendre_actualite_français','comprendre-actualit%C3%A9-fran%C3%A7ais/'],
        ['page_communiquer_quotidien','communiquer-quotidien/'],
        ['page_reviser','r%C3%A9viser/'],
        ['page_enseigner','enseigner/'],
        ['page_exercices_a1','exercices/a1/'],
        ['page_exercices_a2','exercices/a2/'],
        ['page_exercices_b1','exercices/b1/'],
        ['page_exercices_b2','exercices/b2/'],
        ['page_exercices_c1c2','exercices/c1c2/'],
        ['page_podcasts_mots_actualite','podcasts/les-mots-de-l-actualit%C3%A9/']
],

NavActualitesSlugNewsByRegionVersus: [
  ['page_podcasts_journal_français_facile', 'podcasts/journal-en-français-facile/'],
  ['page_podcasts_selection', 'podcasts/sélection/'],
  ['page_exercices', 'exercices/'],
  ['page_diplomes_tests', 'diplômes-tests/'],
  ['page_tester_son_niveau', 'tester-son-niveau/'],
  ['page_comprendre_actualite_français', 'comprendre-actualité-français/'],
  ['page_communiquer_quotidien', 'communiquer-quotidien/'],
  ['page_reviser', 'réviser/'],
  ['page_enseigner', 'enseigner/'],
  ['page_exercices_a1', 'exercices/a1/'],
  ['page_exercices_a2', 'exercices/a2/'],
  ['page_exercices_b1', 'exercices/b1/'],
  ['page_exercices_b2', 'exercices/b2/'],
  ['page_exercices_c1c2', 'exercices/c1c2/'],
  ['page_podcasts_mots_actualite', 'podcasts/les-mots-de-l-actualité/'],
  ['page_podcasts_mots_actualite', 'podcasts/les-mots-de-l-actualité/']
],
/**
 *
 * * META
 * */

MetaDataStuff: {
  homepage: [
    //--- https://francaisfacile.rfi.fr/ru/
    ['url', 'slug', ''], // leave it empty
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Учить французский по международным новостям - Le français facile avec RFI'],
    ['property_tag', 'og:description', 'Подкасты для изучения французского и ознакомления с международными новостями. Практикуйте французский благодаря упражнениям для всех уровней.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Подкасты для изучения французского и ознакомления с международными новостями. Практикуйте французский благодаря упражнениям для всех уровней.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'простой французский, учить французский, rfi savoirs, упражнения по французскому, практиковать французский, транскрипция на французском, подкаст учить французский, fle, учить французский он-лайн, учить французский бесплатно, учить простой французский, учить аудирование французский'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Учить французский по международным новостям - Le français facile avec RFI']

  ],
  page_podcasts_journal_français_facile: [
    //--- https://francaisfacile.rfi.fr/ru/podcasts/journal-en-fran%C3%A7ais-facile/
    ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Journal en français facile'],
    ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['property_tag', 'article:published_time', '2022-07-06T09:03:47+00:00'],
    // ['property_tag', 'article:modified_time', '2023-03-17T08:31:05+00:00'],
    ['property_tag', 'article:tag', 'Journal'],
    // ['property_tag', 'article:tag', 'Journal En Français Facile'],
    ['name_tag', 'description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
    ['name_tag', 'twitter:card', 'summary_large_image'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'Journal en français facile,Journal,Journal En Français Facile'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Journal en français facile']

  ],
  page_podcasts_selection: [
    //--- https://francaisfacile.rfi.fr/ru/podcasts/s%C3%A9lection/
    ['url', 'slug', 'podcasts/s%C3%A9lection/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Подкасты для прослушивания, понимания и изучения французского - Français Facile - RFI'],
    ['property_tag', 'og:description', "Подборка подкастов RFI на аутентичном французском с транскрипцией. Слушайте le Journal en français facile, les Mots de l'actualité, les Voisins du 12 bis..."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/podcasts/s%C3%A9lection/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', "Подборка подкастов RFI на аутентичном французском с транскрипцией. Слушайте le Journal en français facile, les Mots de l'actualité, les Voisins du 12 bis..."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'простой французский, учить французский, rfi savoirs, подкаст транскрипция на французском, подкаст учить французский, учить простой французский, учить понимание на французском, учить устный французский, произношение на французском,подкаст учить французский для взрослых'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Подкасты для прослушивания, понимания и изучения французского - Français Facile - RFI']


  ],
  page_exercices: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/
    ['url', 'slug', 'exercices/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Упражения по французскому для всех уровней - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения от начального до продвинутого уровня. Понимать и учить разговорный французский по радиовыпускам международных новостей.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения от начального до продвинутого уровня. Понимать и учить разговорный французский по радиовыпускам международных новостей.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, подготовка к delf, подготовка к tcf, подготовка к dfp, оценить свой уровень французского, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый, упражнение французский с исправлением'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Упражения по французскому для всех уровней - Français Facile - RFI']

  ],

  page_diplomes_tests: [
    //--- https://francaisfacile.rfi.fr/ru/dipl%C3%B4mes-tests/
    ['url', 'slug', 'dipl%C3%B4mes-tests/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Подготовка к экзаменам DELF, TCF и DFP с RFI - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Готовьтесь бесплатно к устным экзаменам DELF B2, TCF и Diplôme de français professionnel (DFP) в условиях экзамена.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/dipl%C3%B4mes-tests/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Готовьтесь бесплатно к устным экзаменам DELF B2, TCF и Diplôme de français professionnel (DFP) в условиях экзамена.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'delf, tcf, dfp, упражнение delf, упражнение tcf, упражнение, готовить экзамен по французскому, оценить уровень французского'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Подготовка к экзаменам DELF, TCF и DFP с RFI - Français Facile - RFI']


  ],
  page_tester_son_niveau: [
    //--- https://francaisfacile.rfi.fr/ru/tester-son-niveau/
    ['url', 'slug', 'tester-son-niveau/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Проверить свой уровень французского - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/tester-son-niveau/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'оценить уровень французского, тест по французскому, какой уровень французского, тренировка по французскому, упражнение по французскому, тест rfi savoirs, упражнение fle, вступительный тест по французскому'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Проверить свой уровень французского - Français Facile - RFI']


  ],
  page_comprendre_actualite_français: [
    //--- https://francaisfacile.rfi.fr/ru/comprendre-actualit%C3%A9-fran%C3%A7ais/
    ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Учить французский по новостям - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Аудиоупражнения для всех уровней на основе международных новостей: общество, экономика, культура, геополитика, окружающая среда, наука и здоровье.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Аудиоупражнения для всех уровней на основе международных новостей: общество, экономика, культура, геополитика, окружающая среда, наука и здоровье.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый, учить французский новости, упражнения по французскому новости'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Учить французский по новостям - Français Facile - RFI']

  ],
  page_communiquer_quotidien: [

    //--- https://francaisfacile.rfi.fr/ru/communiquer-quotidien/
    ['url', 'slug', 'communiquer-quotidien/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Учить французский для повседневной жизни - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/communiquer-quotidien/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый, учить французский повседневный, упражнения по французскому повседневный,французское выражение,работать на французском,учить французский жить'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Учить французский для повседневной жизни - Français Facile - RFI']

  ],
  page_reviser: [
    //--- https://francaisfacile.rfi.fr/ru/r%C3%A9viser/
    ['url', 'slug', 'r%C3%A9viser/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Повторять основные темы французского языка - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения для всех уровней на повторение основных языковых моментов: грамматика, лексика, фонетика, орфография, выражения, неологизмы.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/r%C3%A9viser/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения для всех уровней на повторение основных языковых моментов: грамматика, лексика, фонетика, орфография, выражения, неологизмы.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый,повторять французский,лексика французского,грамматика французского,учить лексику французского,французское произношение'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Повторять основные темы французского языка - Français Facile - RFI']


  ],
  page_enseigner: [
    //--- https://francaisfacile.rfi.fr/ru/enseigner/
    ['url', 'slug', 'enseigner/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Enseigner le français à partir de sons authentiques d'acualité - Français Facile - RFI"],
    ['property_tag', 'og:description', "Retrouvez les fiches pédagogiques gratuites et prêtes à l'emploi sur des sujets motivants pour enseigner le français à partir d'extraits d'émissions de RFI."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/enseigner/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Retrouvez les fiches pédagogiques gratuites et prêtes à l'emploi sur des sujets motivants pour enseigner le français à partir d'extraits d'émissions de RFI."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, fle, enseigner francais, enseigner fle, enseigner francais radio, francais transcription, se former enseignement fle, exercice francais gratuit, exercice francais avec correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Enseigner le français à partir de sons authentiques d'acualité - Français Facile - RFI"]


  ],
  page_exercices_a1: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/a1/
    ['url', 'slug', 'exercices/a1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Начальный уровень (А1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Начальный уровень (А1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/a1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Начальный уровень (А1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Начальный уровень (А1),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Начальный уровень (А1), упражнение по французскому Начальный уровень (А1) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Начальный уровень (А1) - Français Facile - RFI']


  ],
  page_exercices_a2: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/a2/
    ['url', 'slug', 'exercices/a2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Базовый уровень (А2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Базовый уровень (А2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/a2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Базовый уровень (А2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Базовый уровень (А2),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Базовый уровень (А2), упражнение по французскому Базовый уровень (А2) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Базовый уровень (А2) - Français Facile - RFI']

  ],
  page_exercices_b1: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/b1/
    ['url', 'slug', 'exercices/b1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Средний уровень (Б1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Средний уровень (Б1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/b1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Средний уровень (Б1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Средний уровень (Б1),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Средний уровень (Б1), упражнение по французскому Средний уровень (Б1) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Средний уровень (Б1) - Français Facile - RFI']


  ],
  page_exercices_b2: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/b2/
    ['url', 'slug', 'exercices/b2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Продвинутый уровень (Б2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Продвинутый уровень (Б2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/b2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Продвинутый уровень (Б2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Продвинутый уровень (Б2),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Продвинутый уровень (Б2), упражнение по французскому Продвинутый уровень (Б2) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Продвинутый уровень (Б2) - Français Facile - RFI']


  ],
  page_exercices_c1c2: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/c1c2/
    ['url', 'slug', 'exercices/c1c2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Уровень свободного владения (C1/C2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Уровень свободного владения (C1/C2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/c1c2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Уровень свободного владения (C1/C2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Уровень свободного владения (C1/C2),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Уровень свободного владения (C1/C2), упражнение по французскому Уровень свободного владения (C1/C2) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Уровень свободного владения (C1/C2) - Français Facile - RFI']


  ],
  page_podcasts_mots_actualite: [
    //--- https://francaisfacile.rfi.fr/ru/podcasts/les-mots-de-l-actualit%C3%A9/
    ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Les mots de l'actualité"],
    ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['property_tag', 'article:published_time', '2022-07-06T08:57:57+00:00'],
    // ['property_tag', 'article:modified_time', '2023-03-29T07:47:31+00:00'],
    ['property_tag', 'article:tag', 'Yvan Amar'],
    // ['property_tag', 'article:tag', "Les mots de l'actualité"],
    // ['property_tag', 'article:tag', 'Magazine'],
    ['name_tag', 'description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
    ['name_tag', 'twitter:card', 'summary_large_image'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'keywords', "Les mots de l'actualité,Yvan Amar,Les mots de l'actualité,Magazine"],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Les mots de l'actualité"]

  ]


},


/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "es", "pt-BR", "ru", "zh-Hans", "ar"], 

HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/es/", "/br/", "/ru/", "/cn/", "/ar/"],


    
/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
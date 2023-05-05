const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


  
// RFI_RU
 
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
LanguagesCounterEnd:17, 
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
HotTagsCounterEnd:4, 
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
listenStatus:false,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:15, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',


/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:7,
thematicTwoType:'thematic-2',
thematicTwoStatus:false,
thematicTwoDivNbPosition:'div:nth-child(4)',
thematicTwoDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* thematic-3
*/
thematicThreeCounterStart:1,
thematicThreeCounterEnd:6,
thematicThreeType:'thematic-3',
thematicThreeStatus:false,
thematicThreeDivNbPosition:'div:nth-child(5)',
thematicThreeDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* social
*/
socialCounterStart:1,
socialCounterEnd:7,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
            ['homepage', '', 2, 5],
            ['page_russie', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/', 4, 9],
            ['page_france', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/', 4, 9],
            ['page_europe', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/', 4, 9],
            ['page_culture', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/', 4, 9],
            ['page_ukraine', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/', 4, 9],
            ['page_sport', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/', 4, 9]
    ],




/**
*
* * SEO
* */  
NavActualitesSlugNewsByRegion: [
            ['page_russie', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'], 
            ['page_france', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'], 
            ['page_europe', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'], 
            ['page_culture', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'], 
            ['page_ukraine', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'], 
            ['page_sport', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/']
    
    ], 


    // RFI_RU
NavActualitesSlugNewsByRegionVersus: [
    ['page_russie', 'россия/'],
    ['page_france', 'франция/'],
    ['page_europe', 'европа/'],
    ['page_culture', 'культурa-стиль-жизни/'],
    ['page_ukraine', 'украина/'],
    ['page_sport', 'спорт/'],
    ['page_sport', 'спорт/']
],

 
/**
*
* * META
* */

 MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/ru/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Новости в прямом эфире - международное французское радио'],
        ['property_tag', 'og:description', 'Следите за новостями политики, культуры и спорта круглосуточно в прямом эфире RFI. Последние новости Франции и мира.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Следите за новостями политики, культуры и спорта круглосуточно в прямом эфире RFI. Последние новости Франции и мира.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'международный,новости,подкасты,досье,хроники,передачи,репортажи,интервью,радио,прямой эфир'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Новости в прямом эфире - международное французское радио']

    ],
    page_russie: [

        //--- https://www.rfi.fr/ru/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/
        ['url', 'slug', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Ежедневные новости и комментарии актуальных событий в России - RFI'],
        ['property_tag', 'og:description', 'Новости России: события и комментарии, репортажи и интервью на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Новости России: события и комментарии, репортажи и интервью на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Россия,политикa,культурa,спорт,международный,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Ежедневные новости и комментарии актуальных событий в России - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/ru/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/
        ['url', 'slug', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Новости экономики и политики из Франции - RFI'],
        ['property_tag', 'og:description', 'Последние новости Франции: политика, экономика, ежедневные обзоры прессы на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Последние новости Франции: политика, экономика, ежедневные обзоры прессы на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Франция,политикa,культурa,спорт,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Новости экономики и политики из Франции - RFI']

    ],
    page_europe: [

        //--- https://www.rfi.fr/ru/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/
        ['url', 'slug', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Новости экономики и политики из Европы - RFI'],
        ['property_tag', 'og:description', 'Евросоюз и Восточное партнерство: новости, полемика и диалог - на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Евросоюз и Восточное партнерство: новости, полемика и диалог - на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Европа,Евросоюз,Европарламент,Брекзит,политикa,культурa,спорт,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Новости экономики и политики из Европы - RFI']

    ],
    page_culture: [

        //--- https://www.rfi.fr/ru/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/
        ['url', 'slug', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Культура и стиль жизни: Франция, Европа и мир - RFI'],
        ['property_tag', 'og:description', 'Новости культуры во Франции, Европе, России и мире. Искусство жить по-французски. Кино, театр, литература, музыка, мода, стиль, фестивали. Репортажи и комментарии. Фото и видео'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Новости культуры во Франции, Европе, России и мире. Искусство жить по-французски. Кино, театр, литература, музыка, мода, стиль, фестивали. Репортажи и комментарии. Фото и видео'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'культурa,стиль жизни,Музыка,Выставки,Кино,Литература,Театр,мода,французская кухня,рецепты'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Культура и стиль жизни: Франция, Европа и мир - RFI']

    ],
    page_ukraine: [

        //--- https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/
        ['url', 'slug', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Украина: последние новости и репортажи из Киева, Донецка, Крыма на сайте - RFI'],
        ['property_tag', 'og:description', 'Украина: последние новости, дебаты и комментарии на сайте - RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Украина: последние новости, дебаты и комментарии на сайте - RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Украина,Крым,политикa,культурa,спорт,международный,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Украина: последние новости и репортажи из Киева, Донецка, Крыма на сайте - RFI']

    ],
    page_sport: [

        //--- https://www.rfi.fr/ru/%D1%81%D0%BF%D0%BE%D1%80%D1%82/
        ['url', 'slug', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Последние новости спорта и результаты соревнований в прямом эфире - RFI'],
        ['property_tag', 'og:description', 'Новости спорта: результаты матчей, чемпионаты и первенства Франции и мира на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%81%D0%BF%D0%BE%D1%80%D1%82/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Новости спорта: результаты матчей, чемпионаты и первенства Франции и мира на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'спорт,Футбол,Теннис,Тур де Франс,Ролан Гаррос,Допинг'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Последние новости спорта и результаты соревнований в прямом эфире - RFI']

    ]
 },

 /**
*
* * PLAYER
* */ 

 /* No player, so No NavPlayerLinks, PlayerItemsActionButtons */


/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "es", "pt", "pt-BR", "ha", "sw", "bm", "ff", "ro", "ru", "uk", "vi", "zh-Hans", "zh-Hant", "km", "fa"], // globalValues.FOV_HEADER_MAIN_NAV_BURGER_SELECTION

HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/es/", "/pt/", "/br/", "/ha/", "/sw/", "/ma/", "/ff/", "https://www.rfi.ro/", "/ru/", "/uk/", "/vi/", "/cn/", "/tw/", "/km/", "/fa/"], // globalValues.FOV_HEADER_MAIN_NAV_BURGER_SELECTION


/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
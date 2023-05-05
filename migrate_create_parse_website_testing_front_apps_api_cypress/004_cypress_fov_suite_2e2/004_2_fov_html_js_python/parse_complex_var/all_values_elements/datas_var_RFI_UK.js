const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS



// RFI_UK



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
HotTagsCounterEnd:3, 
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
thematicOneCounterEnd:5, 
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
socialCounterEnd:3,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 9],
        ['page_ukraine', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/', 4, 9], 
        ['page_europe', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/', 4, 9],
        ['page_actualites_internationales', '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/', 4, 9],
        ['page_ukrainiens_cordon', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/', 4, 9]
    ],


/**
*
* * SEO
* */  

NavActualitesSlugNewsByRegion: [
        ['page_ukraine', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'], 
        ['page_europe', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'], 
        ['page_actualites_internationales', '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'], 
        ['page_ukrainiens_cordon', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/']
    ],


// RFI_UK
NavActualitesSlugNewsByRegionVersus: [
    ['page_ukraine', 'yкраїна/'],
    ['page_europe', 'європа/'],
    ['page_actualites_internationales', 'міжнародні-новини/'],
    ['page_ukrainiens_cordon', 'українці-за-кордоном/'],
    ['page_ukrainiens_cordon', 'українці-за-кордоном/']
],

/**
*
* * META
* */

 MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/uk/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Економічні та політичні новини України, Європи та світу в прямому ефірі'],
        ['property_tag', 'og:description', 'Слідкуйте за останніми подіями в Україні. Актуальна інформація, новини, репортажі з Європи та світу.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'Слідкуйте за останніми подіями в Україні. Актуальна інформація, новини, репортажі з Європи та світу.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', 'новини,рфі,події,останні події,міжнародні новини,що трапилось,французькі ЗМІ,іноземні ЗМІ,Україна,Росія,ЄС,Європа,світ,РФ'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Економічні та політичні новини України, Європи та світу в прямому ефірі']
    ],
    page_ukraine: [

        //--- https://www.rfi.fr/uk/y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/
        ['url', 'slug', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Останні новини України - RFI'],
        ['property_tag', 'og:description', 'ізнайтесь більше про головні події в Україні та регіоні. Війна, політика, міжнародні відносини, економіка та культура'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'ізнайтесь більше про головні події в Україні та регіоні. Війна, політика, міжнародні відносини, економіка та культура'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', "новини України,в Україні,українські новини,події в Україні,Україна,новини,події,що трапилось,актуальне,репортаж,інтерв'ю,відео,свідчення,новина,подія,наживо,прямий ефір"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Останні новини України - RFI']

    ],
    page_europe: [

        //--- https://www.rfi.fr/uk/%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/
        ['url', 'slug', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Події та новини Європи. Євроінтеграція та реформи - RFI'],
        ['property_tag', 'og:description', 'Найважливіше з останніх подій в ЄС. Питання євроінтеграції та співпраці між Україною та країнами ЄС'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'Найважливіше з останніх подій в ЄС. Питання євроінтеграції та співпраці між Україною та країнами ЄС'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', "ЄС,європа,Європейський союз,євроінтеграція,європейський вибір,Євро,європейський суд,європейська комісія,європейський парламент,новини Європи,події в Європі,репортаж,інтерв'ю,відео,свідчення,новина,подія,наживо,прямий ефір"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Події та новини Європи. Євроінтеграція та реформи - RFI']

    ],
    page_actualites_internationales: [

        //--- https://www.rfi.fr/uk/%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/
        ['url', 'slug', '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Останні події в світі від мережі міжнародних кореспондентів та спостерігачів - RFI'],
        ['property_tag', 'og:description', 'Слідкуйте за міжнародними новинами. Найважливіші події світу в наших репортажах та статтях'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'Слідкуйте за міжнародними новинами. Найважливіші події світу в наших репортажах та статтях'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', "міжнародні новини,міжнародні події,актуальне в світі,гаряча новина,інші країни,наживо,репортаж,інтерв'ю,відео,свідчення,новина,подія,наживо,прямий ефір"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Останні події в світі від мережі міжнародних кореспондентів та спостерігачів - RFI']

    ],
    page_ukrainiens_cordon: [

        //--- https://www.rfi.fr/uk/%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/
        ['url', 'slug', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Все про життя українців за кордоном - RFI'],
        ['property_tag', 'og:description', "Дізнайтеся більше про життя українців за кордоном. Інтеграція, права та обов'язки громадян, успішні історії"],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', "Дізнайтеся більше про життя українців за кордоном. Інтеграція, права та обов'язки громадян, успішні історії"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', 'українці у світі,діаспора,українські біженці,українці в Європі,українці за кордоном,за кордон,робота для українців,інформація для українців,мігранти,міграція,емігранти,українське за кордоном'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Все про життя українців за кордоном - RFI']

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
const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


  
// RFI_FF

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
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:9, 
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
            ['homepage', '', 2, 6],
            ['page_afrique', 'afrik/', 4, 9], 
            ['page_winndere', 'winndere/', 4, 9], 
            ['page_economie_faggudu', 'faggudu/', 4, 9], 
            ['page_sante_cellal', 'cellal/', 4, 9], 
            ['page_histoire_taariindi', 'taariindi/', 4, 9], 
            ['page_necessaire_needi', 'needi/', 4, 9], 
            ['page_femmes', 'rew%C9%93e/', 4, 9], 
            ['page_communaute_renndo', 'renndo/', 4, 9]
    ],


/**
*
* * SEO
* */ 

NavActualitesSlugNewsByRegion: [
            ['page_afrique', 'afrik/'], 
            ['page_winndere', 'winndere/'], 
            ['page_economie_faggudu', 'faggudu/'], 
            ['page_sante_cellal', 'cellal/'], 
            ['page_histoire_taariindi', 'taariindi/'], 
            ['page_necessaire_needi', 'needi/'], 
            ['page_femmes', 'rew%C9%93e/'], 
            ['page_communaute_renndo', 'renndo/']
    ],

// RFI_FF
NavActualitesSlugNewsByRegionVersus: [
    ['page_afrique', 'afrik/'],
    ['page_winndere', 'winndere/'],
    ['page_economie_faggudu', 'faggudu/'],
    ['page_sante_cellal', 'cellal/'],
    ['page_histoire_taariindi', 'taariindi/'],
    ['page_necessaire_needi', 'needi/'],
    ['page_femmes', 'rewɓe/'],
    ['page_communaute_renndo', 'renndo/'],
    ['page_communaute_renndo', 'renndo/']
],


/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/ff/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Kabaruuji - Yeewtere waɗanaande sukaaɓe nanooɓe fulfulde - RFI Fulfulde'],
        ['property_tag', 'og:description', 'Heɗagol e yeeɓugol adunaaru ndun - RFI Fulfulde'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Heɗagol e yeeɓugol adunaaru ndun - RFI Fulfulde'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Taskaramji,Jeewte,Kabaruuji,Heɗagol,e guurol'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Kabaruuji - Yeewtere waɗanaande sukaaɓe nanooɓe fulfulde - RFI Fulfulde']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/ff/afrik/
        ['url', 'slug', 'afrik/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Afrik - RFI'],
        ['property_tag', 'og:description', 'Afrik'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/afrik/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Afrik'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Afrik'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Afrik - RFI']

    ],
    page_winndere: [


        //--- https://www.rfi.fr/ff/winndere/
        ['url', 'slug', 'winndere/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Winndere - RFI'],
        ['property_tag', 'og:description', 'Winndere'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/winndere/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Winndere'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Winndere'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Winndere - RFI']

    ],
    page_economie_faggudu: [


        //--- https://www.rfi.fr/ff/faggudu/
        ['url', 'slug', 'faggudu/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Faggudu - RFI'],
        ['property_tag', 'og:description', 'Faggudu'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/faggudu/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Faggudu'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Faggudu'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Faggudu - RFI']

    ],
    page_sante_cellal: [


        //--- https://www.rfi.fr/ff/cellal/
        ['url', 'slug', 'cellal/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Cellal - RFI'],
        ['property_tag', 'og:description', 'Cellal'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/cellal/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Cellal'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Cellal'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Cellal - RFI']

    ],
    page_histoire_taariindi: [


        //--- https://www.rfi.fr/ff/taariindi/
        ['url', 'slug', 'taariindi/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Taariindi - RFI'],
        ['property_tag', 'og:description', 'Taariindi'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/taariindi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Taariindi'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Taariindi'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Taariindi - RFI']

    ],
    page_necessaire_needi: [


        //--- https://www.rfi.fr/ff/needi/
        ['url', 'slug', 'needi/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Needi - RFI'],
        ['property_tag', 'og:description', 'Needi'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/needi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Needi'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Needi'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Needi - RFI']

    ],
    page_femmes: [


        //--- https://www.rfi.fr/ff/rew%C9%93e/
        ['url', 'slug', 'rew%C9%93e/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'rewɓe - RFI'],
        ['property_tag', 'og:description', 'rewɓe'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/rew%C9%93e/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'rewɓe'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'rewɓe'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'rewɓe - RFI']

    ],
    page_communaute_renndo: [


        //--- https://www.rfi.fr/ff/renndo/
        ['url', 'slug', 'renndo/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Renndo - RFI'],
        ['property_tag', 'og:description', 'Renndo'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/renndo/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Renndo'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Renndo'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Renndo - RFI']

    ]
},

/**
*
* * PLAYER
* */ 

NavPlayerLinks: [
            ['en_direct', 'e-guurol']
         ], 

PlayerItemsActionButtons: [
    // Click on play in header
    ['btn_play_in_header',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Play Pause Inside the player 
    ['player_listen_live',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Discover Podcasts
    ['player_discover_podcast', '#main-content > section:nth-child(3) > div > div.o-live__cta > a']
    ],   

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
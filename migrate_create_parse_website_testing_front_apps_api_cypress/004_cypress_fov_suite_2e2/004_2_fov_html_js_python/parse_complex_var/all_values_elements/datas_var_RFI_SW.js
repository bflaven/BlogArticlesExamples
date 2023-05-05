const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


 
// RFI_SW

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
HotTagsCounterEnd:2, 
HotTagsType:'hot-tag',
HotTagsStatus:true,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:4, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:11, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:11,
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
socialCounterEnd:4,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(4)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
            ['homepage', '', 2, 7],
            ['page_afrique', 'afrika/', 4, 10], 
            ['page_communaute_afrique_est', 'eac/', 4, 9], 
            ['page_politique_economie', 'siasa-uchumi/', 4, 9], 
            // ['page_article', 'makala/', 4, 9],
            ['page_sports', 'michezo/', 4, 9]
    ],

/**
*
* * SEO
* */  
NavActualitesSlugNewsByRegion: [
            ['page_afrique', 'afrika/'], 
            ['page_communaute_afrique_est', 'eac/'],
            ['page_politique_economie', 'siasa-uchumi/'], 
            ['page_article', 'makala/'], 
            ['page_sports', 'michezo/']
    ],

// RFI_SW
NavActualitesSlugNewsByRegionVersus: [
    ['page_afrique', 'afrika/'],
    ['page_communaute_afrique_est', 'eac/'],
    ['page_politique_economie', 'siasa-uchumi/'],
    ['page_article', 'makala/'],
    ['page_sports', 'michezo/'],
    ['page_sports', 'michezo/']
],

/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/sw/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Masuala ya hivi sasa, habari moja kwa moja - Radio France Internationale - RFI'],
        ['property_tag', 'og:description', 'Pata taarifa zote za kisiasa, kiutamaduni, habari za michezo, moja kwa moja na bila ya kuingiliwa kwenye RFI. Habari za hivi karibuni nchini Ufaransa, Ulaya na popote duniani'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata taarifa zote za kisiasa, kiutamaduni, habari za michezo, moja kwa moja na bila ya kuingiliwa kwenye RFI. Habari za hivi karibuni nchini Ufaransa, Ulaya na popote duniani'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'keywords', 'karibu,habari,Ufaransa,Ulaya,Dunia,Afrika,siasa,uchumi,michezo,malaka,mubashara'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Masuala ya hivi sasa, habari moja kwa moja - Radio France Internationale - RFI']

    ],
    page_afrique: [

        //--- https://www.rfi.fr/sw/afrika/
        ['url', 'slug', 'afrika/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Habari barani Afrika - RFI'],
        ['property_tag', 'og:description', 'Pata moja kwa moja masuala ya hivi sasa kuhusu Afrika – ripotiza hivi karibuni, habari, taarifa, podcast kutoka ukanda wa Maghreb, Sahel, Afrika ya kati na magharibi kwenye RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/afrika/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata moja kwa moja masuala ya hivi sasa kuhusu Afrika – ripotiza hivi karibuni, habari, taarifa, podcast kutoka ukanda wa Maghreb, Sahel, Afrika ya kati na magharibi kwenye RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Habari barani Afrika - RFI']

    ],
    page_communaute_afrique_est: [

        //--- https://www.rfi.fr/sw/eac/
        ['url', 'slug', 'eac/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Habari kutoka Jumuiya ya Afrika Mashariki - RFI'],
        ['property_tag', 'og:description', 'Pata matukio moja kwa moja ya Jumuiya ya Afrika Mashariki – ripotiza karibuni,mwendelezo wa habari na taarifa katika ukanda wa Afrika, vipindi vilivyorekodiwa na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/eac/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata matukio moja kwa moja ya Jumuiya ya Afrika Mashariki – ripotiza karibuni,mwendelezo wa habari na taarifa katika ukanda wa Afrika, vipindi vilivyorekodiwa na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Habari kutoka Jumuiya ya Afrika Mashariki - RFI']

    ],
    page_politique_economie: [

        //--- https://www.rfi.fr/sw/siasa-uchumi/
        ['url', 'slug', 'siasa-uchumi/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'habari yoyote ya kiuchumi - RFI'],
        ['property_tag', 'og:description', 'Pata habari zote moja kwa moja kuhusu Uchumi duniani – Makala za hivi karibuni, ripoti kuhusu uchumi wa dunia kwenye RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/siasa-uchumi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata habari zote moja kwa moja kuhusu Uchumi duniani – Makala za hivi karibuni, ripoti kuhusu uchumi wa dunia kwenye RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'habari yoyote ya kiuchumi - RFI']

    ],
    page_article: [

        //--- https://www.rfi.fr/sw/makala/
        ['url', 'slug', 'makala/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Makala Radio France Internationale - RFI'],
        ['property_tag', 'og:description', 'Pata ratiba ya Radio France Internationale (RFI): podcasts, mahojiano, ripoti, wageni'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/makala/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata ratiba ya Radio France Internationale (RFI): podcasts, mahojiano, ripoti, wageni'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Makala Radio France Internationale - RFI']

    ],
    page_sports: [


        //--- https://www.rfi.fr/sw/michezo/
        ['url', 'slug', 'michezo/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Habari za michezo - RFI'],
        ['property_tag', 'og:description', 'Pata habari zote za hivi karibuni na habari za michezo kutoka bara la Afrika na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/michezo/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata habari zote za hivi karibuni na habari za michezo kutoka bara la Afrika na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Habari za michezo - RFI']

    ]
},

/**
*
* * PLAYER
* */ 

        NavPlayerLinks: [
            ['en_direct', 'mubashara']
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
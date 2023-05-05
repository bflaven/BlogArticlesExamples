const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


 
// RFI_HA
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
thematicOneCounterEnd:13, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:13,
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
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 6],
        ['page_monde', 'duniya/', 4, 9], 
        ['page_afrique', 'afrika/', 4, 9], 
        ['page_nigeria', 'najeriya/', 4, 9], 
        ['page_niger', 'nijar/', 4, 9], 
        ['page_jeux', 'wasanni/',4, 9]
    ],

/**
*
* * SEO
* */  
NavActualitesSlugNewsByRegion: [
        ['page_monde', 'duniya/'], 
        ['page_afrique', 'afrika/'],
        ['page_nigeria', 'najeriya/'],
        ['page_niger', 'nijar/'],
        ['page_jeux', 'wasanni/']
    ],

// RFI_HA
NavActualitesSlugNewsByRegionVersus: [
    ['page_monde', 'duniya/'],
    ['page_afrique', 'afrika/'],
    ['page_nigeria', 'najeriya/'],
    ['page_niger', 'nijar/'],
    ['page_jeux', 'wasanni/'],
    ['page_jeux', 'wasanni/']
],

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/ha/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ha_NG'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Labarai, kai tsaye- Radio France Internationale - RFI'],
        ['property_tag', 'og:description', "Samu dukkanin shirye-shiryen RFI Siyasa da Al'adu da Wasanni da Labarai da dumi-duminsu na Afrika da Faransa da duniya."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ha/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '107037085989237'],
        ['name_tag', 'description', "Samu dukkanin shirye-shiryen RFI Siyasa da Al'adu da Wasanni da Labarai da dumi-duminsu na Afrika da Faransa da duniya."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ha'],
        ['name_tag', 'twitter:creator', '@RFI_Ha'],
        ['name_tag', 'keywords', "labarai,dunya,siyasa,al'adu,wasanni,afrika,nijar,najeriya,shirye-shirye,kai-tsaye"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Labarai, kai tsaye- Radio France Internationale - RFI']

    ],
    page_monde: [


        //--- https://www.rfi.fr/ha/duniya/
        ['url', 'slug', 'duniya/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ha_NG'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Labaran duniya da dumu-duminsu - RFI'],
        ['property_tag', 'og:description', 'Samu Labaran Duniya a Rediyon RFI da podcasts da tattaunawa'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ha/duniya/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '107037085989237'],
        ['name_tag', 'description', 'Samu Labaran Duniya a Rediyon RFI da podcasts da tattaunawa'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ha'],
        ['name_tag', 'twitter:creator', '@RFI_Ha'],
        ['name_tag', 'keywords', 'duniya,diflomasiya,siyasa,coronavirus,labarai,amurka,turai,asiya,afrika'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Labaran duniya da dumu-duminsu - RFI']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/ha/afrika/
        ['url', 'slug', 'afrika/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ha_NG'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Labaran Afrika: Labarai da dumi-duminsu na Afrika - RFI'],
        ['property_tag', 'og:description', "Samu Labaran Afrika:  Na Siyasa da Diflomasiya da Al'adu da Wasanni a RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ha/afrika/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '107037085989237'],
        ['name_tag', 'description', "Samu Labaran Afrika:  Na Siyasa da Diflomasiya da Al'adu da Wasanni a RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ha'],
        ['name_tag', 'twitter:creator', '@RFI_Ha'],
        ['name_tag', 'keywords', "Afrika,labarai,diflomasiya,siyasa,wasanni,al'adu,Guinea Conakry,Najeriya,Nijar,Sahel,Sudan,Boko Haram,Algeria,Togo"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Labaran Afrika: Labarai da dumi-duminsu na Afrika - RFI']

    ],
    page_nigeria: [


        //--- https://www.rfi.fr/ha/najeriya/
        ['url', 'slug', 'najeriya/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ha_NG'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Labaran Najeriya: Labarai game da Siyasa da Tattalin arzikin Najeriya - RFI'],
        ['property_tag', 'og:description', "Samu Labaran Najeriya:  Na Siyasa da Diflomasiya da Al'adu da Wasanni a RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ha/najeriya/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '107037085989237'],
        ['name_tag', 'description', "Samu Labaran Najeriya:  Na Siyasa da Diflomasiya da Al'adu da Wasanni a RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ha'],
        ['name_tag', 'twitter:creator', '@RFI_Ha'],
        ['name_tag', 'keywords', "Najeriya,Afrika,labarai,siyasa,diflomasiya,al'adu,ilimi,ta'addanci,rahotanni"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Labaran Najeriya: Labarai game da Siyasa da Tattalin arzikin Najeriya - RFI']

    ],
    page_niger: [


        //--- https://www.rfi.fr/ha/nijar/
        ['url', 'slug', 'nijar/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ha_NG'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Labaran Nijar: Labarai game da Siyasa da Tattalin arzikin Nijar - RFI'],
        ['property_tag', 'og:description', "Samu Labaran Nijar:  Na Siyasa da Diflomasiya da Al'adu da Wasanni a RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ha/nijar/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '107037085989237'],
        ['name_tag', 'description', "Samu Labaran Nijar:  Na Siyasa da Diflomasiya da Al'adu da Wasanni a RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ha'],
        ['name_tag', 'twitter:creator', '@RFI_Ha'],
        ['name_tag', 'keywords', "Nijar,labarai,Afrika,siyasa,diflomasiya,al'adu,boko haram,ilimi,ta'addanci,rahotanni"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Labaran Nijar: Labarai game da Siyasa da Tattalin arzikin Nijar - RFI']

    ],
    page_jeux: [


        //--- https://www.rfi.fr/ha/wasanni/
        ['url', 'slug', 'wasanni/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ha_NG'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Labaran Wasanni: Labarai da dumi-duminsu wasanni - RFI'],
        ['property_tag', 'og:description', 'Samu Labaran Wasanni'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ha/wasanni/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '107037085989237'],
        ['name_tag', 'description', 'Samu Labaran Wasanni'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ha'],
        ['name_tag', 'twitter:creator', '@RFI_Ha'],
        ['name_tag', 'keywords', 'wasanni,labarai,gasar zakarun Turai,kwallon kafa,boxing'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Labaran Wasanni: Labarai da dumi-duminsu wasanni - RFI']

    ]
},
/**
*
* * PLAYER
* */ 

        NavPlayerLinks: [
            ['en_direct', 'kai-tsaye']
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
const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// RFI_MA

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
socialDivNbPosition:'div:nth-child(4)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',


/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
            ['homepage', '', 2, 8],
            ['page_afrique', 'farafinna/', 4, 9],
            ['page_monde', 'duni%C9%B2a/', 4, 9], 
            ['page_trouver.', 's%C9%94r%C9%94/', 4, 9],
            ['page_sante', 'k%C9%9Bn%C9%9Bya/', 4, 9],
            ['page_lamini', 'lamini/', 4, 9],
            ['page_lire', 'kalan/', 4, 9],
            ['page_femmes', 'musow/', 4, 9],
            ['page_environnement', 'sigida/', 4, 9]
    ],



/**
*
* * SEO
* */  
  

NavActualitesSlugNewsByRegion: [
            ['page_afrique', 'farafinna/'], 
            ['page_monde', 'duni%C9%B2a/'], 
            ['page_trouver.', 's%C9%94r%C9%94/'], 
            ['page_sante', 'k%C9%9Bn%C9%9Bya/'], 
            ['page_lamini', 'lamini/'], 
            ['page_lire', 'kalan/'], 
            ['page_femmes', 'musow/'], 
            ['page_environnement', 'sigida/']
    ],  

// RFI_MA
NavActualitesSlugNewsByRegionVersus: [
    ['page_afrique', 'farafinna/'],
    ['page_monde', 'duniɲa/'],
    ['page_trouver.', 'sɔrɔ/'],
    ['page_sante', 'kɛnɛya/'],
    ['page_lamini', 'lamini/'],
    ['page_lire', 'kalan/'],
    ['page_femmes', 'musow/'],
    ['page_environnement', 'sigida/'],
    ['page_environnement', 'sigida/']
],
/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/ma/
        ['url', 'slug', ''], //  keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan'],
        ['property_tag', 'og:description', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', "Kunnafoni,K'a lamɛn,Jɛmukanw,Kumakanw,Nɔgɔni"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/ma/farafinna/
        ['url', 'slug', 'farafinna/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Farafinna - RFI'],
        ['property_tag', 'og:description', 'Farafinna'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/farafinna/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Farafinna'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Farafinna'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Farafinna - RFI']

    ],
    page_monde: [



        //--- https://www.rfi.fr/ma/duni%C9%B2a/
        ['url', 'slug', 'duni%C9%B2a/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Duniɲa - RFI'],
        ['property_tag', 'og:description', 'Duniɲa'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/duni%C9%B2a/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Duniɲa'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Duniɲa'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Duniɲa - RFI']

    ],
    page_trouver: [


        //--- https://www.rfi.fr/ma/s%C9%94r%C9%94/
        ['url', 'slug', 's%C9%94r%C9%94/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Sɔrɔ - RFI'],
        ['property_tag', 'og:description', 'Sɔrɔ'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/s%C9%94r%C9%94/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Sɔrɔ'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Sɔrɔ'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Sɔrɔ - RFI']

    ],
    page_sante: [


        //--- https://www.rfi.fr/ma/k%C9%9Bn%C9%9Bya/
        ['url', 'slug', 'k%C9%9Bn%C9%9Bya/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Kɛnɛya - RFI'],
        ['property_tag', 'og:description', 'Kɛnɛya'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/k%C9%9Bn%C9%9Bya/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Kɛnɛya'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Kɛnɛya'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Kɛnɛya - RFI']

    ],
    page_lamini: [


        //--- https://www.rfi.fr/ma/lamini/
        ['url', 'slug', 'lamini/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Lamini - RFI'],
        ['property_tag', 'og:description', 'Lamini'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/lamini/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Lamini'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Lamini'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Lamini - RFI']

    ],
    page_lire: [


        //--- https://www.rfi.fr/ma/kalan/
        ['url', 'slug', 'kalan/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Kalan - RFI'],
        ['property_tag', 'og:description', 'Kalan'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/kalan/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Kalan'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Kalan'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Kalan - RFI']

    ],
    page_femmes: [


        //--- https://www.rfi.fr/ma/musow/
        ['url', 'slug', 'musow/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Musow - RFI'],
        ['property_tag', 'og:description', 'Musow'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/musow/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Musow'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Musow'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Musow - RFI']

    ],
    page_environnement: [


        //--- https://www.rfi.fr/ma/sigida/
        ['url', 'slug', 'sigida/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Sigida - RFI'],
        ['property_tag', 'og:description', 'Sigida'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/sigida/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Sigida'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Sigida'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Sigida - RFI']
    ]
},                
          
            
/**
*
* * PLAYER
* */ 

        NavPlayerLinks: [
            ['en_direct', 'j%C9%9Bmukanw']
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
const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


// RFI_PT

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
thematicOneCounterEnd:5, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:5,
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
socialCounterEnd:5,
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
        ['page_africa_lusofona', '%C3%A1frica-lus%C3%B3fona/', 4, 9],
        ['page_franca', 'fran%C3%A7a/', 4, 9],
        ['page_africa', '%C3%A1frica/', 4, 9],
        ['page_internacional', 'internacional/', 4, 8]
    ],

// RFI_PT
NavActualitesSlugNewsByRegionVersus: [
    ['page_africa_lusofona', 'áfrica-lusófona/'],
    ['page_franca', 'frança/'],
    ['page_africa', 'áfrica/'],
    ['page_internacional', 'internacional/'],
    ['page_internacional', 'internacional/']
],
        
/**
*
* * SEO
* */  
 

NavActualitesSlugNewsByRegion: [
        ['page_africa_lusofona', '%C3%A1frica-lus%C3%B3fona/'],
        ['page_franca', 'fran%C3%A7a/'],
        ['page_africa', '%C3%A1frica/'],
        ['page_internacional', 'internacional/']
    ],
/**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        
        //--- https://www.rfi.fr/pt/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Actualidade, informação, notícias em directo - Radio France Internationale'],
        ['property_tag', 'og:description', 'Acompanhe toda a informação política, cultural, desportiva em directo e de forma contínua na RFI. As últimas informações, notícias e actualidades em França, nos países lusófonos e em todo o mundo.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Acompanhe toda a informação política, cultural, desportiva em directo e de forma contínua na RFI. As últimas informações, notícias e actualidades em França, nos países lusófonos e em todo o mundo.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'actualidade,informação,notícias,directo,programas,vídeos,desporto,economias,política,relatórios'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Actualidade, informação, notícias em directo - Radio France Internationale']


    ],
    page_africa_lusofona: [

        //--- https://www.rfi.fr/pt/%C3%A1frica-lus%C3%B3fona/
        ['url', 'slug', '%C3%A1frica-lus%C3%B3fona/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau - RFI'],
        ['property_tag', 'og:description', 'Aceda às últimas informações políticas e à actualidade económica em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau na RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/%C3%A1frica-lus%C3%B3fona/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Aceda às últimas informações políticas e à actualidade económica em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau na RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'África lusófona,actualidade,informação,notícias,desporto,economias,política,Angola,Moçambique,Cabo Verde,Guiné-Bissau,São Tomé e Príncipe'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau - RFI']
    ],
    page_franca: [

        //--- https://www.rfi.fr/pt/fran%C3%A7a/
        ['url', 'slug', 'fran%C3%A7a/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade em França - RFI'],
        ['property_tag', 'og:description', 'Aceda às últimas informações políticas e à actualidade económica em França na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/fran%C3%A7a/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Aceda às últimas informações políticas e à actualidade económica em França na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'frança,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade em França - RFI']

    ],
    page_africa: [

        //--- https://www.rfi.fr/pt/%C3%A1frica/
        ['url', 'slug', '%C3%A1frica/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade em África - RFI'],
        ['property_tag', 'og:description', 'Aceda a todas as informações e às últimas notícias provenientes do continente africano com a RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/%C3%A1frica/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Aceda a todas as informações e às últimas notícias provenientes do continente africano com a RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'africa,actualidade,informação,notícias,desporto,economias,política,Maghreb,Mali,DR Congo,Egypt,Zimbabwe,Nigeria'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade em África - RFI']
    ],
    page_internacional: [

        //--- https://www.rfi.fr/pt/internacional/
        ['url', 'slug', 'internacional/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade mundial e internacional - RFI'],
        ['property_tag', 'og:description', 'Parta à descoberta da actualidade mundial e internacional com a RFI: emissões de rádio, podcast, entrevistas…'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/internacional/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Parta à descoberta da actualidade mundial e internacional com a RFI: emissões de rádio, podcast, entrevistas…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'internacional,mundo,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade mundial e internacional - RFI']

    ]
},

/**
*
* * PLAYER
* */ 

NavPlayerLinks: [
            ['en_direct', 'directo']
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
const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// RFI_BR


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
HotTagsStatus:false,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:3, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(1)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:5, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(2)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:6,
thematicTwoType:'thematic-2',
thematicTwoStatus:true,
thematicTwoDivNbPosition:'div:nth-child(3)',
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
socialCounterEnd:6,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(4)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',


/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 1, 5],
        ['page_france', 'fran%C3%A7a/', 3, 8],
        ['page_bresil', 'brasil/', 3, 8],
        ['page_amerique', 'am%C3%A9ricas/', 3, 8],
        ['page_monde', 'mundo/', 3, 8],
        ['page_culture', 'cultura/', 3, 8],
        ['page_sciences', 'ci%C3%AAncias/', 3, 8]
    ],
/**
*
* * SEO
* */  
 

NavActualitesSlugNewsByRegion: [
        ['page_france', 'fran%C3%A7a/'],
        ['page_bresil', 'brasil/'],
        ['page_amerique', 'am%C3%A9ricas/'],
        ['page_monde', 'mundo/'],
        ['page_culture', 'cultura/'],
        ['page_sciences', 'ci%C3%AAncias/']
    ],

// RFI_BR
NavActualitesSlugNewsByRegionVersus: [
    ['page_france', 'frança/'],
    ['page_bresil', 'brasil/'],
    ['page_amerique', 'américas/'],
    ['page_monde', 'mundo/'],
    ['page_culture', 'cultura/'],
    ['page_sciences', 'ciências/'],
    ['page_sciences', 'ciências/']
],


/**
*
* * META
* */

 MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/br/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Atualidades, notícias ao vivo - Rádio França Internacional - RFI'],
        ['property_tag', 'og:description', 'Acompanhe na RFI todas as notícias de política, cultura e esporte, ao vivo e 24 horas. As últimas notícias e destaques da atualidade da França, Brasil e de diversas partes do mundo.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Acompanhe na RFI todas as notícias de política, cultura e esporte, ao vivo e 24 horas. As últimas notícias e destaques da atualidade da França, Brasil e de diversas partes do mundo.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'actualidade,informação,notícias,direto,programas,vídeos,esportes,economia,política,reportagens'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Atualidades, notícias ao vivo - Rádio França Internacional - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/br/fran%C3%A7a/
        ['url', 'slug', 'fran%C3%A7a/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias da França: últimas informações - RFI'],
        ['property_tag', 'og:description', 'Confira na RFI as últimas notícias da política francesa e economia da França na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/fran%C3%A7a/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI as últimas notícias da política francesa e economia da França na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'frança,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias da França: últimas informações - RFI']

    ],
    page_bresil: [


        //--- https://www.rfi.fr/br/brasil/
        ['url', 'slug', 'brasil/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias do Brasil: últimas informações - RFI'],
        ['property_tag', 'og:description', 'Confira na RFI toda a atualidade do Brasil: política, relações diplomáticas, cultura e esporte.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/brasil/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI toda a atualidade do Brasil: política, relações diplomáticas, cultura e esporte.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'brasil,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias do Brasil: últimas informações - RFI']

    ],
    page_amerique: [


        //--- https://www.rfi.fr/br/am%C3%A9ricas/
        ['url', 'slug', 'am%C3%A9ricas/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias das Américas - RFI'],
        ['property_tag', 'og:description', 'Confira na RFI as últimas notícias dos Estados Unidos e de todas as Américas.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/am%C3%A9ricas/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI as últimas notícias dos Estados Unidos e de todas as Américas.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'Américas,estados unidos,Canadá,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias das Américas - RFI']

    ],
    page_monde: [


        //--- https://www.rfi.fr/br/mundo/
        ['url', 'slug', 'mundo/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias do mundo e atualidade internacional - RFI'],
        ['property_tag', 'og:description', 'Acompanhe as notícias do mundo e o noticiário internacional com a RFI: programas de rádio, podcasts, entrevistas...'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/mundo/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Acompanhe as notícias do mundo e o noticiário internacional com a RFI: programas de rádio, podcasts, entrevistas...'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'brasil,mundo,internacional,actualidade,informação,notícias,esportes,economia,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias do mundo e atualidade internacional - RFI']

    ],
    page_culture: [
        
        //--- https://www.rfi.fr/br/cultura/
        ['url', 'slug', 'cultura/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Acompanhe com os programas da RFI a atualidade política, cultural e esportiva, ao vivo e 24 horas. Notícias da França e do mundo.'],
        ['property_tag', 'og:description', 'Confira na RFI as últimas notícias ligadas à atualidade cultural e artística: lançamentos, cinema, música...'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/cultura/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI as últimas notícias ligadas à atualidade cultural e artística: lançamentos, cinema, música...'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'cultura,actualidade,informação,notícias,artes,cinema,literatura,pintura,exposição'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Acompanhe com os programas da RFI a atualidade política, cultural e esportiva, ao vivo e 24 horas. Notícias da França e do mundo.']

    ],
    page_sciences: [


        //--- https://www.rfi.fr/br/ci%C3%AAncias/
        ['url', 'slug', 'ci%C3%AAncias/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Acompanhe os últimos avanços científicos e ambientais - RFI'],
        ['property_tag', 'og:description', 'Confira as notícias de ciência e meio ambiente na RFI: evoluções, tecnologias, ecologia...'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/ci%C3%AAncias/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira as notícias de ciência e meio ambiente na RFI: evoluções, tecnologias, ecologia...'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'ciências,actualidade,informação,notícias,astronomia,biologia,ambiente,indústria,medicina'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Acompanhe os últimos avanços científicos e ambientais - RFI']

    ]
 },

/**
*
* * PLAYER
* */ 
 
     NavPlayerLinks: [
            ['en_direct', 'ao-vivo']
         ], 

                   
            PlayerItemsActionButtons: [
    // Click on play in header
    ['btn_play_in_header',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Play Pause Inside the player 
    ['player_listen_live',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Discover Podcasts
    ['player_discover_podcast', '#main-content > section:nth-child(2) > div > div.o-live__cta > a']
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
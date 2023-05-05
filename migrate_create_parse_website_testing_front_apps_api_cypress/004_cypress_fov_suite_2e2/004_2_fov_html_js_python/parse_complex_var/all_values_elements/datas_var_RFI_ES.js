const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


  
// RFI_ES

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
HotTagsCounterEnd:1, 
HotTagsType:'hot-tag',
HotTagsStatus:true,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:3, 
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
thematicTwoCounterEnd:6,
thematicTwoType:'thematic-2',
thematicTwoStatus:true,
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
socialCounterEnd:6,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 8],
        ['page_americas', 'am%C3%A9ricas/', 4, 9],
        ['page_francia', 'francia/', 4, 9],
        ['page_europa', 'europa/', 4, 9],
        ['page_medioambiente', 'medioambiente/', 4, 9],
        ['page_salud', 'salud/', 4, 9],
        ['page_cultura', 'cultura/', 4, 9],
        ['page_economia', 'econom%C3%ADa/', 4, 9],
        ['page_deportes', 'deportes/', 4, 9]
    ],



/**
*
* * SEO
* */ 

NavActualitesSlugNewsByRegion: [
    ['page_americas', 'am%C3%A9ricas/'],
    ['page_francia', 'francia/'],
    ['page_europa', 'europa/'],
    ['page_medioambiente', 'medioambiente/'],
    ['page_salud', 'salud/'],
    ['page_cultura', 'cultura/'],
    ['page_economia', 'econom%C3%ADa/'],
    ['page_deportes', 'deportes/']
 ],

// RFI_ES
NavActualitesSlugNewsByRegionVersus: [
    ['page_americas', 'américas/'],
    ['page_francia', 'francia/'],
    ['page_europa', 'europa/'],
    ['page_medioambiente', 'medioambiente/'],
    ['page_salud', 'salud/'],
    ['page_cultura', 'cultura/'],
    ['page_economia', 'economía/'],
    ['page_deportes', 'deportes/'],
    ['page_deportes', 'deportes/']
],


/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/es/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Noticias del mundo en directo - Radio Francia Internacional'],
        ['property_tag', 'og:description', 'Siga toda la información política, cultural, deportiva y científica en directo en RFI. Las últimas noticias en Francia, en América Latina y en el mundo entero.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga toda la información política, cultural, deportiva y científica en directo en RFI. Las últimas noticias en Francia, en América Latina y en el mundo entero.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'información,internacional,actualidad,noticias,directo,reportajes,programas,videos,politica,economía,sociedad,en vivo'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Noticias del mundo en directo - Radio Francia Internacional']

    ],
    page_americas: [

        //--- https://www.rfi.fr/es/am%C3%A9ricas/
        ['url', 'slug', 'am%C3%A9ricas/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica y política en América en directo - RFI'],
        ['property_tag', 'og:description', 'Siga en directo la actualidad del continente americano - Los últimos reportajes y noticias de América Latina y del Norte. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/am%C3%A9ricas/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga en directo la actualidad del continente americano - Los últimos reportajes y noticias de América Latina y del Norte. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'américas,estados-unidos,canada,politica,internacional,noticias,informacion,economía,videos,reportajes,america,latina,colombia,mexico,brasil,argentina,venezuela,noticias,reportajes,economía,sociedad,politica'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica y política en América en directo - RFI']

    ],
    page_francia: [

        //--- https://www.rfi.fr/es/francia/
        ['url', 'slug', 'francia/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica y política en Francia en directo - RFI'],
        ['property_tag', 'og:description', 'Siga en directo la actualidad de Francia - Los últimos reportajes y noticias de Francia. Programas, Podcasts, Dossiers en RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/francia/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga en directo la actualidad de Francia - Los últimos reportajes y noticias de Francia. Programas, Podcasts, Dossiers en RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'francia,europa,paris,informacion,actualidad,noticias,internacional,politica,economía,cultura,tecnologia,deportes,video'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica y política en Francia en directo - RFI']

    ],
    page_europa: [

        //--- https://www.rfi.fr/es/europa/
        ['url', 'slug', 'europa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica y política en Europa en directo - RFI'],
        ['property_tag', 'og:description', 'Siga en directo la actualidad del continente europeo - Los últimos reportajes y noticias de Europa. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/europa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga en directo la actualidad del continente europeo - Los últimos reportajes y noticias de Europa. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'francia,italia,alemania,españa,reino unido,europa,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,portugal,grecia,austria,dinamarca,polonia,noruega,suecia,irlanda,finlandia'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica y política en Europa en directo - RFI']

    ],
    page_medioambiente: [

        //--- https://www.rfi.fr/es/medioambiente/
        ['url', 'slug', 'medioambiente/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad del medio ambiante en Francia y en el mundo en directo – RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad de la sección Medio ambiante en RFI - Los últimos artículos y reportajes Medio ambiante en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/medioambiente/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad de la sección Medio ambiante en RFI - Los últimos artículos y reportajes Medio ambiante en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'vida,salud,ciencia,tecnologia,high-tech,medio ambiente,astronomia,fisica,biologia,aeronautica,ecologia,inovacion,informacion,actualidad,noticias'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad del medio ambiante en Francia y en el mundo en directo – RFI']
    ],
    page_salud: [

        //--- https://www.rfi.fr/es/salud/
        ['url', 'slug', 'salud/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad de la Salud en Francia y en el mundo en directo – RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad de la sección Salud en RFI - Los últimos artículos y reportajes Salud en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/salud/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad de la sección Salud en RFI - Los últimos artículos y reportajes Salud en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'salud,medicina,enfermedades,sanidad,medico,bienestar,actualidad,noticias'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad de la Salud en Francia y en el mundo en directo – RFI']

    ],
    page_cultura: [

        //--- https://www.rfi.fr/es/cultura/
        ['url', 'slug', 'cultura/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad cultural y artística en directo - RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad cultural y artística en Francia y en América Latina - Los últimos reportajes y noticias. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/cultura/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad cultural y artística en Francia y en América Latina - Los últimos reportajes y noticias. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'cultura,informacion,actualidad,noticias,cine,literatura,musica,cronicas,culturales,entretenimiento,espectáculo,teatro,danza'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad cultural y artística en directo - RFI']

    ],
    page_economia: [

        //--- https://www.rfi.fr/es/econom%C3%ADa/
        ['url', 'slug', 'econom%C3%ADa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica mundial en directo - RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad económica en el mundo - Los últimos artículos y reportajes sobre la actividad económica mundial en RFI. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/econom%C3%ADa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad económica en el mundo - Los últimos artículos y reportajes sobre la actividad económica mundial en RFI. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'economía,tecnologia,inovación,informacion,actualidad,noticias,negocios,finanzas,industria,bancos,web,internet,twitter,facebook,android,iphone'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica mundial en directo - RFI']

    ],
    page_deportes: [

        //--- https://www.rfi.fr/es/deportes/
        ['url', 'slug', 'deportes/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Las últimas noticias y los resultados deportivos en directo - RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad deportiva - Todos los resultados y las noticias deportivas en Francia y en el mundo sobre fútbol, rugby, ciclismo, tenis y básquetbol en RFI. Programas, Podcasts, Dossiers en RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/deportes/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad deportiva - Todos los resultados y las noticias deportivas en Francia y en el mundo sobre fútbol, rugby, ciclismo, tenis y básquetbol en RFI. Programas, Podcasts, Dossiers en RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'deportes,noticias,informacion,actualidad,football,rugby,tennis,ciclismo,f1'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Las últimas noticias y los resultados deportivos en directo - RFI']

    ]
},
        
/**
*
* * PLAYER
* */            

    NavPlayerLinks: [
    ['en_direct', 'en-vivo']
    ],

    PlayerItemsActionButtons: [
    // Click on play in header
    ['btn_play_in_header',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Play Pause Inside the player 
    ['player_listen_live',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Discover Podcasts
    ['player_discover_podcast', '#main-content > section:nth-child(3) > div > div.o-live__cta > a ']
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
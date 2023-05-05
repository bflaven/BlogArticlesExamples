const globalDataTest = {

TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// F24_ES
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
LanguagesCounterEnd:4, 
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
listenCounterEnd:6, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:6, 
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
                ['homepage', '', 2, 12],
                ['page_america_latina', 'am%C3%A9rica-latina/', 4, 9],
                ['page_eeuu_canada', 'eeuu-canad%C3%A1/', 4, 9],
                ['page_europa', 'europa/', 4, 9],
                ['page_francia', 'francia/', 4, 9],
                ['page_asia_pacifico', 'asia-pac%C3%ADfico/', 4, 9],
                ['page_medio_oriente', 'medio-oriente/', 4, 9],
                ['page_africa', '%C3%A1frica/', 4, 9]

    ],



/**
*
* * SEO
* */                      
    
// F24_ES
NavActualitesSlugNewsByRegion: [
        ['page_america_latina', 'am%C3%A9rica-latina/'],
        ['page_eeuu_canada', 'eeuu-canad%C3%A1/'], 
        ['page_europa', 'europa/'],
        ['page_francia', 'francia/'],
        ['page_asia_pacifico', 'asia-pac%C3%ADfico/'],
        ['page_medio_oriente', 'medio-oriente/'],
        ['page_africa', '%C3%A1frica/']
    ],

// F24_ES
NavActualitesSlugNewsByRegionVersus: [
    ['page_america_latina', 'américa-latina/'],
    ['page_eeuu_canada', 'eeuu-canadá/'],
    ['page_europa', 'europa/'],
    ['page_francia', 'francia/'],
    ['page_asia_pacifico', 'asia-pacífico/'],
    ['page_medio_oriente', 'medio-oriente/'],
    ['page_africa', 'áfrica/'],
    ['page_africa', 'áfrica/']
],

/**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        //--- https://www.france24.com/es/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'France 24 - Noticias y actualidad internacional en vivo'],
        ['property_tag', 'og:description', 'Información y Noticias - Información internacional en vivo de France 24 : deportes, cultura, economía y tecnología. Noticias de los Estados Unidos, Europa, Asia y el Pacífico, África, Oriente Medio,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Información y Noticias - Información internacional en vivo de France 24 : deportes, cultura, economía y tecnología. Noticias de los Estados Unidos, Europa, Asia y el Pacífico, África, Oriente Medio,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'France 24 - Noticias y actualidad internacional en vivo']

    ],
    page_america_latina: [
        //--- https://www.france24.com/es/am%C3%A9rica-latina/
        ['url', 'slug', 'am%C3%A9rica-latina/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'América Latina : información en vivo - France 24'],
        ['property_tag', 'og:description', 'Todas las noticias de América Latina, información y eventos en vivo'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/am%C3%A9rica-latina/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Todas las noticias de América Latina, información y eventos en vivo'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'chile,bolivia,peru,ecuador,uruguay,paraguay america,latina,colombia,mexico,brasil,argentina,venezuela,noticias,reportajes,economía,sociedad,politica'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'América Latina : información en vivo - France 24']

    ],
    page_eeuu_canada: [
        //--- https://www.france24.com/es/eeuu-canad%C3%A1/
        ['url', 'slug', 'eeuu-canad%C3%A1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Todas las noticias de EE.UU. y Canadá - France 24'],
        ['property_tag', 'og:description', 'Todas las noticias, política y economía en  Estados Unidos'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/eeuu-canad%C3%A1/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Todas las noticias, política y economía en  Estados Unidos'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'estados-unidos,canada,politica,internacional,noticias,informacion,economía,videos,reportajes'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Todas las noticias de EE.UU. y Canadá - France 24']

    ],
    page_europa: [
        //--- https://www.france24.com/es/europa/
        ['url', 'slug', 'europa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Europa : noticias económicas y políticas en vivo - France 24'],
        ['property_tag', 'og:description', 'Noticias y actualidad política y económica en Europa'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/europa/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Noticias y actualidad política y económica en Europa'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'francia,italia,alemania,españa,reino unido,europa,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,portugal,grecia,austria,dinamarca,polonia,noruega,suecia,irlanda,finlandia'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Europa : noticias económicas y políticas en vivo - France 24']

    ],
    page_francia: [
        //--- https://www.france24.com/es/francia/
        ['url', 'slug', 'francia/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Francia : información en vivo - France 24'],
        ['property_tag', 'og:description', 'Francia : Noticias yactualidad minuto a minuto'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/francia/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Francia : Noticias yactualidad minuto a minuto'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'francia,europa,paris,informacion,actualidad,noticias,internacional,politica,economía,cultura,tecnologia,deportes,video'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Francia : información en vivo - France 24']

    ],
    page_asia_pacifico: [

        //--- https://www.france24.com/es/asia-pac%C3%ADfico/
        ['url', 'slug', 'asia-pac%C3%ADfico/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Noticias y reportajes en Asia y en el Pacífico - France 24 - France 24'],
        ['property_tag', 'og:description', 'Actualidad en vivo en Asia Pacífico'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/asia-pac%C3%ADfico/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Actualidad en vivo en Asia Pacífico'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'asia,china,japon,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,corea del norte,corea del sur,filipina,tíbet,laos,camboya,vietnam'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Noticias y reportajes en Asia y en el Pacífico - France 24 - France 24']

    ],
    page_medio_oriente: [
        //--- https://www.france24.com/es/medio-oriente/
        ['url', 'slug', 'medio-oriente/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Noticias y reportajes en el Oriente Medio - France 24'],
        ['property_tag', 'og:description', 'Todas las noticias y eventos en vivo en Medio Oriente'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/medio-oriente/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Todas las noticias y eventos en vivo en Medio Oriente'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'medio,oriente,siria,libano,israel,palestina,egipto,irán,arabia saudita,omán,yemén,turquía,informacion,actualidad,noticias,politica,economía,cultura,deportes'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Noticias y reportajes en el Oriente Medio - France 24']

    ],
    page_africa: [

        //--- https://www.france24.com/es/%C3%A1frica/
        ['url', 'slug', '%C3%A1frica/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Noticias en África y Magreb, actualidad económica y política - France 24 - France 24'],
        ['property_tag', 'og:description', 'Últimas noticias políticas y económicas en África - Noticias y eventos en Túnez, Argelia y Marruecos'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/%C3%A1frica/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Últimas noticias políticas y económicas en África - Noticias y eventos en Túnez, Argelia y Marruecos'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'africa,informacion,actualidad,noticias,reportajes,politica,economía,magreb,mali,rdc,gambia,nigeria,áfrica,túnez,argelia,marruecos'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Noticias en África y Magreb, actualidad económica y política - France 24 - France 24']

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
        'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div > a'],
        // Play Pause Inside the player 
        ['player_listen_live',
        '#main-content > article > div.t-content__main-media > figure > div > button > span > svg > path:nth-child(2)'],
                
    ],
                        
/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "es", "ar"],
HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/es/", "/ar/"], 

                   
/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
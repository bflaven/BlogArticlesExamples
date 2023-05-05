const globalDataTest = {

TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// F24_FR
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
SettingsCounterEnd:3, 
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
thematicOneCounterEnd:4, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:8,
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
thematicThreeStatus:true,
thematicThreeDivNbPosition:'div:nth-child(5)',
thematicThreeDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* social
*/
socialCounterStart:1,
socialCounterEnd:6,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(6)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 17],
        ['page_france', 'france/', 4, 10],
        ['page_afrique', 'afrique/', 4, 11],
        ['page_moyen_orient', 'moyen-orient/', 4, 10], 
        ['page_europe', 'europe/', 4, 10],
        ['page_ameriques', 'am%C3%A9riques/', 4, 10],
        ['page_asie_pacifique', 'asie-pacifique/', 4, 10]
    ],

/**
*
* * SEO
* */                      
                        
            // F24_FR
            NavActualitesSlugNewsByRegion: [
                ['page_france', 'france/'], 
                ['page_afrique', 'afrique/'], 
                ['page_moyen_orient', 'moyen-orient/'], 
                ['page_europe', 'europe/'], 
                ['page_ameriques', 'am%C3%A9riques/'], 
                ['page_asie_pacifique', 'asie-pacifique/']
            ],


// F24_FR
NavActualitesSlugNewsByRegionVersus: [
    ['page_france', 'france/'],
    ['page_afrique', 'afrique/'],
    ['page_moyen_orient', 'moyen-orient/'],
    ['page_europe', 'europe/'],
    ['page_ameriques', 'amériques/'],
    ['page_asie_pacifique', 'asie-pacifique/'],
    ['page_asie_pacifique', 'asie-pacifique/']
],


/**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"],
        ['property_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"]
    ],
    page_france: [
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'France : News et actualité en continu - France 24'],
        ['property_tag', 'og:description', 'France 24  couvre les évènements en France et en Outre-mer : politique, culture, faits de société, énergie, crise sociale, sport, santé, avec ses reportages, enquêtes, débats et analyses.'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/france/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24  couvre les évènements en France et en Outre-mer : politique, culture, faits de société, énergie, crise sociale, sport, santé, avec ses reportages, enquêtes, débats et analyses.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'france,infos,actualites,news,information,international,reportages,politique,societe,culture'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'France : News et actualité en continu - France 24']
    ],
    page_afrique: [
        ['url', 'slug', 'afrique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Politique & économie en Afrique, infos & news au Maghreb - France 24'],
        ['property_tag', 'og:description', 'France 24  décrypte toutes les actualités africaines, au Maghreb, au Sahel, en Afrique de l’Ouest, Afrique centrale, orientale, et australe, avec son réseau de correspondants, des experts, dans ses journaux,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/afrique/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24  décrypte toutes les actualités africaines, au Maghreb, au Sahel, en Afrique de l’Ouest, Afrique centrale, orientale, et australe, avec son réseau de correspondants, des experts, dans ses journaux,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', "afrique,infos,actualites,news,reportages,politique,economie,tunisie,maroc,cote d'ivoire,mali,maghreb"],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Politique & économie en Afrique, infos & news au Maghreb - France 24']
    ],
    page_moyen_orient: [
        ['url', 'slug', 'moyen-orient/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Informations et news au Moyen-Orient - Toute l'actualité sur France 24"],
        ['property_tag', 'og:description', 'France 24 couvre et analyse toute l’actualité politique et sociétale au Moyen Orient, de l’Arabie Saoudite, en passant par l’Irak, l’Iran, le Liban, l’Égypte, Israël, la Syrie, la Jordanie et les pays…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/moyen-orient/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 couvre et analyse toute l’actualité politique et sociétale au Moyen Orient, de l’Arabie Saoudite, en passant par l’Irak, l’Iran, le Liban, l’Égypte, Israël, la Syrie, la Jordanie et les pays…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'moyen,orient,syrie,liban,egypte,israel,palestine,infos,actualites,politique'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "Informations et news au Moyen-Orient - Toute l'actualité sur France 24"]
    ],
    page_europe: [
        ['url', 'slug', 'europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'News, actualité politique & économique en Europe - France 24'],
        ['property_tag', 'og:description', 'France 24 décrypte les évènements et l’actualité sur le continent européen et de l’Union européenne et ses 27 États membres. Retrouvez rencontres, débats, reportages, analyses sur tout ce qui concerne…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/europe/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 décrypte les évènements et l’actualité sur le continent européen et de l’Union européenne et ses 27 États membres. Retrouvez rencontres, débats, reportages, analyses sur tout ce qui concerne…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'europe,infos,actualites,news,reportages,politique,economie,societe,france,allemagne'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'News, actualité politique & économique en Europe - France 24']
    ],
    page_ameriques: [
        ['url', 'slug', 'am%C3%A9riques/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Amériques : information en direct, news et actu en continu - France 24'],
        ['property_tag', 'og:description', 'France 24 couvre l’actualité américaine, politique, géostratégique, économique du continent, des États-Unis au Chili, en passant par le Canada, le Mexique, le Brésil, l’Argentine, à travers ses émissions,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/am%C3%A9riques/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 couvre l’actualité américaine, politique, géostratégique, économique du continent, des États-Unis au Chili, en passant par le Canada, le Mexique, le Brésil, l’Argentine, à travers ses émissions,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'ameriques,usa,etats-unis,canada,mexique,bresil,infos,actualites,news,politique,economie'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Amériques : information en direct, news et actu en continu - France 24']
    ],
    page_asie_pacifique: [
        ['url', 'slug', 'asie-pacifique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Asie-Pacifique : Actualité internationale en continu - France 24'],
        ['property_tag', 'og:description', 'France 24 décrypte les évènements socio-économiques et politiques de la région Asie-Pacifique : Océanie, Asie du Sud, Asie de l’Est, Asie du Sud-Est, notamment les pays comme la Chine, le Japon, l’Australie,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/asie-pacifique/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 décrypte les évènements socio-économiques et politiques de la région Asie-Pacifique : Océanie, Asie du Sud, Asie de l’Est, Asie du Sud-Est, notamment les pays comme la Chine, le Japon, l’Australie,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'asie,chine,japon,inde,coree,infos,actualites,news,politique,economie,societe'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Asie-Pacifique : Actualité internationale en continu - France 24']
    ]
},

/**
*
* * PLAYER
* */            
            NavPlayerLinks: [
                              'direct'
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

const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


 

// RFI_FR

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
SettingsCounterEnd:4, 
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
HotTagsStatus:true,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:8, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:12, 
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
    ['homepage', '', 2, 19],
    ['page_afrique', 'afrique/', 4, 14],
    ['page_ameriques', 'am%C3%A9riques/', 4, 10],
    ['page_asie_pacifique', 'asie-pacifique/', 4, 10],
    ['page_europe', 'europe/', 4, 9],
    ['page_moyen_orient', 'moyen-orient/', 4, 9],
    ['page_france', 'france/', 4, 9],
    ['page_monde', 'monde/', 4, 9]
],

/**
*
* * SEO
* */ 
NavActualitesSlugNewsByRegion: [
    ['page_afrique', 'afrique/'],
    ['page_ameriques', 'am%C3%A9riques/'],
    ['page_asie_pacifique', 'asie-pacifique/'],
    ['page_europe', 'europe/'],
    ['page_moyen_orient', 'moyen-orient/'],
    ['page_france', 'france/'],
    ['page_monde', 'monde/']
],

// RFI_FR
NavActualitesSlugNewsByRegionVersus: [
    ['page_afrique', 'afrique/'],
    ['page_ameriques', 'amériques/'],
    ['page_asie_pacifique', 'asie-pacifique/'],
    ['page_europe', 'europe/'],
    ['page_moyen_orient', 'moyen-orient/'],
    ['page_france', 'france/'],
    ['page_monde', 'monde/'],
    ['page_monde', 'monde/']
],
/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/fr/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'],
        ['property_tag', 'og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Actualités, info, news en direct - Radio France Internationale']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/fr/afrique/
        ['url', 'slug', 'afrique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en Afrique et au Maghreb en direct - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au continent africain - Les derniers reportages, news et informations au Maghreb, Sahel, Afrique centrale et de l'Ouest"],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/afrique/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au continent africain - Les derniers reportages, news et informations au Maghreb, Sahel, Afrique centrale et de l'Ouest"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Afrique,information,actualités,news,Maghreb,Sahel,Congo,Algérie,Maroc,Soudan,Lybie,Egypte,Nigeria,Mauritanie'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en Afrique et au Maghreb en direct - RFI"]


    ],
    page_ameriques: [


        //--- https://www.rfi.fr/fr/am%C3%A9riques/
        ['url', 'slug', 'am%C3%A9riques/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique aux Amériques en direct - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au continent Américain - Les derniers reportages, news et informations aux Amériques. Emissions, Podcast, dossiers - RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/am%C3%A9riques/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au continent Américain - Les derniers reportages, news et informations aux Amériques. Emissions, Podcast, dossiers - RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Amériques,information,actualités,news,Etats Unis,Canada,Brésil,Mexique,Argentine,Colombie'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique aux Amériques en direct - RFI"]

    ],
    page_asie_pacifique: [


        //--- https://www.rfi.fr/fr/asie-pacifique/
        ['url', 'slug', 'asie-pacifique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en Asie et dans le Pacifique - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée aux continents Asiatique et Océanique - Les derniers reportages, news et informations en continu. Emissions, Podcast, dossiers - RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/asie-pacifique/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée aux continents Asiatique et Océanique - Les derniers reportages, news et informations en continu. Emissions, Podcast, dossiers - RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Asie,information,actualités,news,Chine,Hong Kong,Japon,Indonésie,Australie,Corée'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en Asie et dans le Pacifique - RFI"]

    ],
    page_europe: [


        //--- https://www.rfi.fr/fr/europe/
        ['url', 'slug', 'europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en Europe - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au continent Européen - Les derniers reportages, news et informations en continu en Europe, Emissions, Podcast, dossiers sur RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/europe/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au continent Européen - Les derniers reportages, news et informations en continu en Europe, Emissions, Podcast, dossiers sur RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', "europe,actualité,news,information,france,allemagne,espagne,angleterre,UK,finlande,europe de l'est"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en Europe - RFI"]

    ],
    page_moyen_orient: [


        //--- https://www.rfi.fr/fr/moyen-orient/
        ['url', 'slug', 'moyen-orient/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique au Moyen Orient - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au Moyen Orient - Les derniers reportages, news et informations en continu au Moyen Orient, Emissions, Podcast, dossiers sur RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/moyen-orient/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au Moyen Orient - Les derniers reportages, news et informations en continu au Moyen Orient, Emissions, Podcast, dossiers sur RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'moyen orient,actualité,news,info,syrie,liban,économie,politique,iran,israël,palestine,qatar,émirats arabes unis,arabie saoudite'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique au Moyen Orient - RFI"]

    ],
    page_france: [


        //--- https://www.rfi.fr/fr/france/
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en France - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée à la France - Les derniers reportages, news et informations en continu en France, Emissions, Podcast, dossiers sur RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/france/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée à la France - Les derniers reportages, news et informations en continu en France, Emissions, Podcast, dossiers sur RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'france,actualité,news,info,agriculture,environnement,économie,politique,gilets jaunes,réformes,retraites,grève'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en France - RFI"]

    ],
    page_monde: [


        //--- https://www.rfi.fr/fr/monde/
        ['url', 'slug', 'monde/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique dans le monde en direct - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité mondiale en direct - Les derniers reportages, news et informations. Émissions, Podcast, dossiers - RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/monde/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité mondiale en direct - Les derniers reportages, news et informations. Émissions, Podcast, dossiers - RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Amériques,information,actualités,news,Etats Unis,Canada,Brésil,Mexique,Argentine,Colombie,Monde'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique dans le monde en direct - RFI"]
    ]
},
        




 
/**
*
* * PLAYER
* */            
                NavPlayerLinks: [
                              ['direct_monde', 'direct-monde'],
                              ['direct_afrique', 'direct-afrique']
                        ],

// For RFI_FR only
// direct  monde
FOV_HEADER_MAIN_NAV_PLAYER_DIRECT_MONDE: 'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div:nth-child(1) > div > div > button > span > div', // '+globalValues.FOV_HEADER_MAIN_NAV_PLAYER_DIRECT_MONDE+'

// direct  afrique
FOV_HEADER_MAIN_NAV_PLAYER_DIRECT_AFRIQUE: 'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div:nth-child(2) > div > div > button > span > span > svg > path:nth-child(3)', // '+globalValues.FOV_HEADER_MAIN_NAV_PLAYER_DIRECT_AFRIQUE+'

// For RFI_FR only
// Player inside 
// Écouter le direct
PLAYER_LIVE_LISTEN_LIVE_ITEM: '#main-content > section:nth-child(3) > div > div.o-live__cta > div > button > p', // globalValues.PLAYER_LIVE_LISTEN_LIVE_ITEM
// Découvrez nos podcasts
PLAYER_LIVE_DISCOVER_PODCASTS_ITEM: '#main-content > section:nth-child(3) > div > div.o-live__cta > a', // globalValues.PLAYER_LIVE_DISCOVER_PODCASTS_ITEM

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
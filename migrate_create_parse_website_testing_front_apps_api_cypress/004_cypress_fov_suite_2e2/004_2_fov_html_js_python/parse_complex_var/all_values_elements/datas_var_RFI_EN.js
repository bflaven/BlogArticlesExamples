const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


  

// RFI_EN
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
listenCounterEnd:3, 
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
thematicTwoCounterEnd:4,
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
            ['page_france', 'france/', 4, 9],
            ['page_africa', 'africa/', 4, 10],
            ['page_international', 'international/', 4, 9],
            ['page_science_technology', 'science-technology/', 4, 9],
            ['page_culture', 'culture/', 4, 9],
            ['page_sport', 'sport/', 4, 9]
    ],




/**
*
* * SEO
* */ 

NavActualitesSlugNewsByRegion: [
    ['page_france', 'france/'],
    ['page_africa', 'africa/'],
    ['page_international', 'international/'],
    ['page_science_technology', 'science-technology/'],
    ['page_culture', 'culture/'],
    ['page_sport', 'sport/']
    ],

// RFI_EN
NavActualitesSlugNewsByRegionVersus: [
    ['page_france', 'france/'],
    ['page_africa', 'africa/'],
    ['page_international', 'international/'],
    ['page_science_technology', 'science-technology/'],
    ['page_culture', 'culture/'],
    ['page_sport', 'sport/'],
    ['page_sport', 'sport/']
],



/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/en/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - All the news from France, Europe, Africa and the rest of the world.'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'news,live news,breaking news,sports,culture,france,europe,america,radio,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - All the news from France, Europe, Africa and the rest of the world.']
    ],
    page_france: [

        //--- https://www.rfi.fr/en/france/
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'The economic issues and policy in France - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/france/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'France,news,politics,society,reports,headlines,culture,radio'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'The economic issues and policy in France - RFI']

    ],
    page_africa: [


        //--- https://www.rfi.fr/en/africa/
        ['url', 'slug', 'africa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'All the news about Africa - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/africa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'Africa,news,politics,society,reports,headlines,culture,radio,coronavirus,Senegal,Rwanda,Sierra Leone,Liberia'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'All the news about Africa - RFI']
    ],
    page_international: [


        //--- https://www.rfi.fr/en/international/
        ['url', 'slug', 'international/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'World news and headlines - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/international/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'international,news,radio,politics,society,sports,reports,business'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'World news and headlines - RFI']

    ],
    page_science_technology: [


        //--- https://www.rfi.fr/en/science-technology/
        ['url', 'slug', 'science-technology/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Science and technology news and headlines - RFI'],
        ['property_tag', 'og:description', 'Follow all scientifical and technological news on RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/science-technology/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow all scientifical and technological news on RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'sciences,technology,news,astronomy,medicine,aeronautics,physics,internet,industry,biology,engineering,agriculture,biotechnology'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Science and technology news and headlines - RFI']

    ],
    page_culture: [


        //--- https://www.rfi.fr/en/culture/
        ['url', 'slug', 'culture/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Culture and the arts in france and all around the world - RFI'],
        ['property_tag', 'og:description', 'All the cultural news on RFI. The latest information, news and artistic events all around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/culture/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'All the cultural news on RFI. The latest information, news and artistic events all around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'culture,news,literature,music,cinema,theater,radio,headlines'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Culture and the arts in france and all around the world - RFI']

    ],
    page_sport: [


        //--- https://www.rfi.fr/en/sport/
        ['url', 'slug', 'sport/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'The economic issues and policy in France - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/sport/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'sport,news,radio,football,rugby,tennis,F1,basketball'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'The economic issues and policy in France - RFI']

    ]
},

/**
*
* * PLAYER
* */ 

 /* No player, so No NavPlayerLinks, PlayerItemsActionButtons */

NavPlayerLinks: [],
/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "es", "pt", "pt-BR", "ha", "sw", "bm", "ff", "ro", "ru", "uk", "vi", "zh-Hans", "zh-Hant", "km", "fa"], 

HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/es/", "/pt/", "/br/", "/ha/", "/sw/", "/ma/", "/ff/", "https://www.rfi.ro/", "/ru/", "/uk/", "/vi/", "/cn/", "/tw/", "/km/", "/fa/"], 



/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
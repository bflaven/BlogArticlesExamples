const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


 
// RFI_TW


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
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:17, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',


/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:3,
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
    ['homepage', '', 1, 5],
    ['page_chine', '%E4%B8%AD%E5%9C%8B/', 3, 8],  
    ['page_france', '%E6%B3%95%E5%9C%8B/', 3, 8],  
    ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/', 3, 8],  
    ['page_asie', '%E4%BA%9E%E6%B4%B2/', 3, 8],  
    ['page_amerique', '%E7%BE%8E%E6%B4%B2/', 3, 8]
],


/**
*
* * SEO
* */  
NavActualitesSlugNewsByRegion: [
    ['page_chine', '%E4%B8%AD%E5%9C%8B/'], 
    ['page_france', '%E6%B3%95%E5%9C%8B/'], 
    ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'], 
    ['page_asie', '%E4%BA%9E%E6%B4%B2/'], 
    ['page_amerique', '%E7%BE%8E%E6%B4%B2/']
],

// RFI_TW
NavActualitesSlugNewsByRegionVersus: [
    ['page_chine', '中國/'],
    ['page_france', '法國/'],
    ['page_hong_kong_macao_taiwan', '港澳台/'],
    ['page_asie', '亞洲/'],
    ['page_amerique', '美洲/'],
    ['page_amerique', '美洲/']
],


/**
*
* * META
* */

MetaDataStuff: {
        homepage: [

            //--- https://www.rfi.fr/tw/
            ['url', 'slug', ''], // keep it empty
            ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
            ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
            ['property_tag', 'og:locale', 'zh_TW'],
            ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
            ['property_tag', 'og:type', 'website'],
            ['property_tag', 'og:title', '法廣 - 時事與新聞直播 - RFI - 法國國際廣播電台'],
            ['property_tag', 'og:description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
            ['property_tag', 'og:url', 'https://www.rfi.fr/tw/'],
            ['property_tag', 'fb:app_id', '113191652055439'],
            ['property_tag', 'fb:pages', '394354904092401'],
            ['name_tag', 'description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
            ['name_tag', 'twitter:card', 'summary'],
            ['name_tag', 'twitter:site', '@RFI_TradCn'],
            ['name_tag', 'twitter:creator', '@RFI_TradCn'],
            ['name_tag', 'keywords', '新聞,最近24小時,新聞時事,采訪報道,電台t,網上,法國,人權,政治,經貿'],
            ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
            ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
            ['name_tag', 'msapplication-TileColor', '#e2001a'],
            ['name_tag', 'theme-color', '#ffffff'],
            ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
            ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
            ['title_tag', 'title', '法廣 - 時事與新聞直播 - RFI - 法國國際廣播電台']
        

    ],
    page_chine: [

        //--- https://www.rfi.fr/tw/%E4%B8%AD%E5%9C%8B/
        ['url', 'slug', '%E4%B8%AD%E5%9C%8B/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '中國時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E4%B8%AD%E5%9C%8B/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '中國,新聞,國際,生態,新聞時事,采訪報道,經貿,政治,社會'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '中國時事 - 法廣 - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/tw/%E6%B3%95%E5%9C%8B/
        ['url', 'slug', '%E6%B3%95%E5%9C%8B/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '法國時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '最新法國政經新聞時事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E6%B3%95%E5%9C%8B/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '最新法國政經新聞時事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '法國,新聞,經貿,政治'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '法國時事 - 法廣 - RFI']

    ],
    page_hong_kong_macao_taiwan: [

        //--- https://www.rfi.fr/tw/%E6%B8%AF%E6%BE%B3%E5%8F%B0/
        ['url', 'slug', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '港澳台時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '搜索法廣播客、訪談、特別專題與嘉賓節目'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '搜索法廣播客、訪談、特別專題與嘉賓節目'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '港澳台,新聞,經貿,政治,社會,新聞時事'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '港澳台時事 - 法廣 - RFI']

    ],
    page_asie: [

        //--- https://www.rfi.fr/tw/%E4%BA%9E%E6%B4%B2/
        ['url', 'slug', '%E4%BA%9E%E6%B4%B2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '亞洲時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E4%BA%9E%E6%B4%B2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '亞洲,新聞,國際,新聞時事'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '亞洲時事 - 法廣 - RFI']

    ],
    page_amerique: [

        //--- https://www.rfi.fr/tw/%E7%BE%8E%E6%B4%B2/
        ['url', 'slug', '%E7%BE%8E%E6%B4%B2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '美洲時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '最新中東與阿拉伯世界新聞'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E7%BE%8E%E6%B4%B2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '最新中東與阿拉伯世界新聞'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '美洲,新聞,國際,生態,采訪報道,新聞時事,經貿,政治,社會'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '美洲時事 - 法廣 - RFI']

    ]
},

/**
*
* * PLAYER
* */ 

    NavPlayerLinks: [
            ['en_direct', '%E7%9B%B4%E6%92%AD']
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
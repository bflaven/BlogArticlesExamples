const globalDataTest = {

TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// F24_EN
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
listenCounterEnd:5, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:7, 
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
socialCounterEnd:7,
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
    

// F24_EN
NavActualitesSlugNewsByRegion: [
        ['page_france', 'france/'],
        ['page_africa', 'africa/'],
        ['page_middle_east', 'middle-east/'],
        ['page_americas', 'americas/'],
        ['page_europe', 'europe/'],
        ['page_asia_pacific', 'asia-pacific/']
    ],

// F24_EN
NavActualitesSlugNewsByRegionVersus: [
    ['page_france', 'france/'],
    ['page_africa', 'africa/'],
    ['page_middle_east', 'middle-east/'],
    ['page_americas', 'americas/'],
    ['page_europe', 'europe/'],
    ['page_asia_pacific', 'asia-pacific/'],
    ['page_asia_pacific', 'asia-pacific/']
],



/**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        // https://www.france24.com/en/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'France 24 - International breaking news, top stories and headlines'],
        ['property_tag', 'og:description', 'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'breaking,news,international,headlines,stories,reports,live,tv,videos'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'France 24 - International breaking news, top stories and headlines']
    ],
    page_france: [
        // https://www.france24.com/en/france/
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Latest news reports on FRANCE, French politics and culture - France 24'],
        ['property_tag', 'og:description', 'Get all the latest breaking news and reports on FRANCE here. French headlines, politics and culture on news channel France 24'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/france/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Get all the latest breaking news and reports on FRANCE here. French headlines, politics and culture on news channel France 24'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'france,politics,culture,society,international,breaking news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Latest news reports on FRANCE, French politics and culture - France 24']

    ],
    page_africa: [
        // https://www.france24.com/en/africa/
        ['url', 'slug', 'africa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Breaking news from AFRICA, Maghreb and Sub-Saharan Africa - France 24'],
        ['property_tag', 'og:description', 'Get breaking news, the latest international news & multimedia reports on Africa here. South Africa, Egypt, Ghana, Libya,  Kenya, Morocco, Tunisia, Algeria.'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/africa/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Get breaking news, the latest international news & multimedia reports on Africa here. South Africa, Egypt, Ghana, Libya,  Kenya, Morocco, Tunisia, Algeria.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'africa,politics,society,international,breaking,news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Breaking news from AFRICA, Maghreb and Sub-Saharan Africa - France 24']

    ],
    page_middle_east: [
        // https://www.france24.com/en/middle-east/
        ['url', 'slug', 'middle-east/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Latest news from the Middle East, daily international news reports - France 24'],
        ['property_tag', 'og:description', 'All the latest news from the Middle East, find all the news reports on Saudi Arabia, Israel, Gaza, Lebanon, West Bank, Iran, Iraq on France 24'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/middle-east/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'All the latest news from the Middle East, find all the news reports on Saudi Arabia, Israel, Gaza, Lebanon, West Bank, Iran, Iraq on France 24'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'middle,east,syria,egypt,israel,politics,society,news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Latest news from the Middle East, daily international news reports - France 24']

    ],
    page_americas: [
        // https://www.france24.com/en/americas/
        ['url', 'slug', 'americas/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'International news from the Americas - France 24'],
        ['property_tag', 'og:description', 'Latest news from North Central and South America on France 24, special reports and video news. Canada, USA, Mexico, Chile, Venezuela, Brazil, Argentina, Cuba'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/americas/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Latest news from North Central and South America on France 24, special reports and video news. Canada, USA, Mexico, Chile, Venezuela, Brazil, Argentina, Cuba'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'americas,usa,canada,brazil,mexico,trump,politics,society,international,breaking,news'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'International news from the Americas - France 24']


    ],
    page_europe: [
        // https://www.france24.com/en/europe/
        ['url', 'slug', 'europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'News from Europe - Latest world headlines and daily news - France 24'],
        ['property_tag', 'og:description', 'All the latest European top stories and headlines about EU, UK, Brexit from France 24'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/europe/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'All the latest European top stories and headlines about EU, UK, Brexit from France 24'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'europa,eu,france,germany,uk,brexit,spain,switzerland,politics,international,breaking news,headlines,parliament'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'News from Europe - Latest world headlines and daily news - France 24']

    ],
    page_asia_pacific: [
        // https://www.france24.com/en/asia-pacific/
        ['url', 'slug', 'asia-pacific/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'News from Asia-Pacific - Latest headlines and news reports - France 24'],
        ['property_tag', 'og:description', 'Get breaking news and news headlines from Asia and the Pacific on France 24, special reports on China, Korea, India, Japan, Australia'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/asia-pacific/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Get breaking news and news headlines from Asia and the Pacific on France 24, special reports on China, Korea, India, Japan, Australia'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'asia,china,japan,india,politics,society,international,breaking news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'News from Asia-Pacific - Latest headlines and news reports - France 24']

    ]
},


/**
*
* * PLAYER
* */                    NavPlayerLinks: [
                        ['en_direct', 'live']
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
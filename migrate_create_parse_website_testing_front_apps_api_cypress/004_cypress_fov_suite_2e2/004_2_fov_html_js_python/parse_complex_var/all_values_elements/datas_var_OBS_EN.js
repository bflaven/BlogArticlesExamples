const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// OBS_EN
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
SettingsCounterEnd:1, 
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
listenStatus:false,
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
thematicTwoCounterEnd:6,
thematicTwoType:'thematic-2',
thematicTwoStatus:false,
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
socialCounterEnd:4,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(4)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 9],
        ['page_all_articles', 'all-articles/', 1, 1], 
        ['page_tag_africa', 'tag/africa/', 1, 1], 
        ['page_tag_environment', 'tag/environment/', 1, 1], 
        ['page_tag_human_rights', 'tag/human-rights/', 1, 1]
    ],



/**
*
* * SEO
* */
// OBS_EN
NavActualitesSlugNewsByRegion: [
        ['page_all_articles', 'all-articles/'],
        ['page_tag_africa', 'tag/africa/'],
        ['page_tag_environment', 'tag/environment/'],
        ['page_tag_human_rights', 'tag/human-rights/']
    ],

// OBS_EN
NavActualitesSlugNewsByRegionVersus: [
    ['page_all_articles', 'all-articles/'],
    ['page_tag_africa', 'tag/africa/'],
    ['page_tag_environment', 'tag/environment/'],
    ['page_tag_human_rights', 'tag/human-rights/'],
    ['page_tag_human_rights', 'tag/human-rights/']
],

 /**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        //--- https://observers.france24.com/en/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'The France 24 Observers - Breaking the news thanks to amateur images - Film, verify, share.'],
        ['property_tag', 'og:description', 'The France 24 Observers is both a website and a TV show focusing on international news through the lens of amateur images. Our journalists analyze and verify all contents, spot and expose fake news from…'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'The France 24 Observers is both a website and a TV show focusing on international news through the lens of amateur images. Our journalists analyze and verify all contents, spot and expose fake news from…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'keywords', 'news,international,amateur,testimonies,eyewitness,images,photos,videos,debunked,fake news,programs'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'The France 24 Observers - Breaking the news thanks to amateur images - Film, verify, share.']
    ],
    page_all_articles: [
        //--- https://observers.france24.com/en/all-articles/
        ['url', 'slug', 'all-articles/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Follow international news through our Observers' amateur images and eyewitness testimony. All the content is verified and explained by our journalists."],
        ['property_tag', 'og:description', 'All the articles from the France 24 Observers.'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/all-articles/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'All the articles from the France 24 Observers.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'keywords', 'news,articles,observers,eyewitness,testimony,amateur,images,videos'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "Follow international news through our Observers' amateur images and eyewitness testimony. All the content is verified and explained by our journalists."]

    ],
    page_tag_africa: [
        //--- https://observers.france24.com/en/tag/africa/
        ['url', 'slug', 'tag/africa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Africa: news, videos, reports and analysis - The Observers - France 24'],
        ['property_tag', 'og:description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to Africa on The Observers'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/tag/africa/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to Africa on The Observers'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Africa: news, videos, reports and analysis - The Observers - France 24']

    ],
    page_tag_environment: [
        //--- https://observers.france24.com/en/tag/environment/
        ['url', 'slug', 'tag/environment/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'environment: news, videos, reports and analysis - The Observers - France 24'],
        ['property_tag', 'og:description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to environment on The Observers'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/tag/environment/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to environment on The Observers'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'environment: news, videos, reports and analysis - The Observers - France 24']

    ],
    page_tag_human_rights: [
        //--- https://observers.france24.com/en/tag/human-rights/
        ['url', 'slug', 'tag/human-rights/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'human rights: news, videos, reports and analysis - The Observers - France 24'],
        ['property_tag', 'og:description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to human rights on The Observers'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/tag/human-rights/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to human rights on The Observers'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'human rights: news, videos, reports and analysis - The Observers - France 24']

    ]
},

/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "ar", "fa"],
HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/ar/", "https://observers.rfi.fr/fa/"],



/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
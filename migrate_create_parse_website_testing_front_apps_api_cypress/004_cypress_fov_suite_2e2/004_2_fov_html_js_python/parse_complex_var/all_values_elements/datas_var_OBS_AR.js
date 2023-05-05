const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// OBS_AR
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
HotTagsCounterEnd:1, 
HotTagsType:'hot-tag',
HotTagsStatus:false,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:5, 
listenType:'listen',
listenStatus:false,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:2, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(1)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/

thematicTwoCounterStart:1,
thematicTwoCounterEnd:5,
thematicTwoType:'thematic-2',
thematicTwoStatus:true,
thematicTwoDivNbPosition:'div:nth-child(2)',
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
socialDivNbPosition:'div:nth-child(3)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',


/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 1, 5],
        ['page_tag_environnement', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/', 1, 1]
    ],


/**
*
* * SEO
* */ 
// OBS_AR
NavActualitesSlugNewsByRegion: [
        ['page_tag_environnement', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'], 
        ['page_want_to_contribute', '%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9']
    ],

// OBS_AR
NavActualitesSlugNewsByRegionVersus: [
    ['page_tag_environnement', 'تاغ/بيئة/'],
    ['page_want_to_contribute', 'هل-تود-المساهمة'],
    ['page_want_to_contribute', 'هل-تود-المساهمة']
],



/**
 *
 * * META
 * */

MetaDataStuff: {
    homepage: [
        //--- https://observers.france24.com/ar/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/infographies/meta_og_twcards/F24_obs_ar.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 – مراقبون'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'دققوا، راقبوا، صوروا - فرانس 24 – مراقبون'],
        ['property_tag', 'og:description', 'فرانس 24 – مراقبون : موقع إخباري وبرنامج أسبوعي يتناول آخر المستجدات الدولية من خلال صور وفيديوهات أرسلها مراقبون هواة وتم التأكد من صحتها من قبل صحافيي'],
        ['property_tag', 'og:url', 'https://observers.france24.com/ar/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'فرانس 24 – مراقبون : موقع إخباري وبرنامج أسبوعي يتناول آخر المستجدات الدولية من خلال صور وفيديوهات أرسلها مراقبون هواة وتم التأكد من صحتها من قبل صحافيي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversArabic'],
        ['name_tag', 'twitter:creator', '@ObserversArabic'],
        ['name_tag', 'keywords', 'الأخبار,فيديو,فيديو تحت الطلب,مقالات,دولية,أخبار مزيفة,صور,مراقبون هواة'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 – مراقبون'],
        ['name_tag', 'application-name', 'فرانس 24 – مراقبون'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'دققوا، راقبوا، صوروا - فرانس 24 – مراقبون']


    ],
    page_tag_environnement: [
        //--- https://observers.france24.com/ar/%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/
        ['url', 'slug', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/infographies/meta_og_twcards/F24_obs_ar.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 – مراقبون'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'بيئة: أخبار، فيديوهات، تقارير وتحليلات - مراقبون - فرانس 24'],
        ['property_tag', 'og:description', 'اطلعوا على كل الأخبار الدولية عن بيئة، للقراءة وإعادة المشاهدة على مراقبون'],
        ['property_tag', 'og:url', 'https://observers.france24.com/ar/%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'اطلعوا على كل الأخبار الدولية عن بيئة، للقراءة وإعادة المشاهدة على مراقبون'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversArabic'],
        ['name_tag', 'twitter:creator', '@ObserversArabic'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 – مراقبون'],
        ['name_tag', 'application-name', 'فرانس 24 – مراقبون'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'بيئة: أخبار، فيديوهات، تقارير وتحليلات - مراقبون - فرانس 24']


    ],

    page_want_to_contribute: [
        //--- https://observers.france24.com/ar/%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9
        ['url', 'slug', '%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/infographies/meta_og_twcards/F24_obs_ar.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 – مراقبون'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أصبح مراقبا - مراقبون - فرانس 24'],
        ['property_tag', 'og:description', 'أصبح مراقبا'],
        ['property_tag', 'og:url', 'https://observers.france24.com/ar/%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['property_tag', 'article:published_time', '2020-09-09T09:24:55+00:00'],
        ['property_tag', 'article:modified_time', '2022-08-22T09:02:53+00:00'],
        ['name_tag', 'description', 'أصبح مراقبا'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversArabic'],
        ['name_tag', 'twitter:creator', '@ObserversArabic'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 – مراقبون'],
        ['name_tag', 'application-name', 'فرانس 24 – مراقبون'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أصبح مراقبا - مراقبون - فرانس 24']

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
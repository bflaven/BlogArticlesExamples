const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// OBS_FA
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
thematicOneCounterEnd:5, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(1)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/

thematicTwoCounterStart:1,
thematicTwoCounterEnd:2,
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
        ['homepage', '', 1, 4],
        ['page_tag_rumeur', '%DA%AF%D8%B1%D9%88%D9%87-%D9%88%D8%A7%DA%98%D9%87/%D8%B4%D8%A7%DB%8C%D8%B9%D9%87/', 1, 1] 
    ],


/**
*
* * SEO
* */ 
// OBS_FA
NavActualitesSlugNewsByRegion: [
        ['page_tag_rumeur', '%DA%AF%D8%B1%D9%88%D9%87-%D9%88%D8%A7%DA%98%D9%87/%D8%B4%D8%A7%DB%8C%D8%B9%D9%87/'],
        ['page_devenir_un_observateur', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF/']
    ],

// OBS_FA
NavActualitesSlugNewsByRegionVersus: [
    ['page_tag_rumeur', 'گروه-واژه/شایعه/'],
    ['page_devenir_un_observateur', 'عضو-ناظران-شوید/'],
    ['page_devenir_un_observateur', 'عضو-ناظران-شوید/']
],

/**
 *
 * * META
 * */

MetaDataStuff: {
    homepage: [
        //--- https://observers.rfi.fr/fa/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_obs_fa.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ناظران  - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ثبت تصویر، جستجوی واقعیت، گواهی دادن - ناظران فرانس۲۴ و ار.اف.ای'],
        ['property_tag', 'og:description', 'ناظران طرح مشترک تلویزیون فرانس۲۴ و ار.اف.ای، شامل یک وبسایت و برنامه تلویزیونی و رادیویی است. ناظران بر اخبار و اتفاقات بین\u200cالمللی تمرکز دارد'],
        ['property_tag', 'og:url', 'https://observers.france24.com/fa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['name_tag', 'description', 'ناظران طرح مشترک تلویزیون فرانس۲۴ و ار.اف.ای، شامل یک وبسایت و برنامه تلویزیونی و رادیویی است. ناظران بر اخبار و اتفاقات بین\u200cالمللی تمرکز دارد'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversIran'],
        ['name_tag', 'twitter:creator', '@ObserversIran'],
        ['name_tag', 'keywords', 'اخبار,آماتور,debunked,اخبار جعلی,عکس,فیلم های,تصاویر,بین المللی'],
        ['name_tag', 'apple-mobile-web-app-title', 'ناظران  - RFI'],
        ['name_tag', 'application-name', 'ناظران  - RFI'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ثبت تصویر، جستجوی واقعیت، گواهی دادن - ناظران فرانس۲۴ و ار.اف.ای']


    ],
    page_tag_rumeur: [
        //--- https://observers.rfi.fr/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF
        ['url', 'slug', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_obs_fa.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ناظران  - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ارتباط با ما - ناظران - ار.اف.ای'],
        ['property_tag', 'og:description', 'ارتباط با ما'],
        ['property_tag', 'og:url', 'https://observers.france24.com/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['name_tag', 'description', 'اخبار و شرح و تحلیل\u200cها را شایعه در ناظران ار.اف.ای بخوانید و بشنوید'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversIran'],
        ['name_tag', 'twitter:creator', '@ObserversIran'],
        ['name_tag', 'apple-mobile-web-app-title', 'ناظران  - RFI'],
        ['name_tag', 'application-name', 'ناظران  - RFI'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ارتباط با ما - ناظران - ار.اف.ای']


    ],

    page_devenir_un_observateur: [
        //--- https://observers.rfi.fr/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF
        ['url', 'slug', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_obs_fa.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ناظران  - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ارتباط با ما - ناظران - ار.اف.ای'],
        ['property_tag', 'og:description', 'ارتباط با ما'],
        ['property_tag', 'og:url', 'https://observers.france24.com/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'article:published_time', '2020-09-09T09:26:37+00:00'],
        ['property_tag', 'article:modified_time', '2022-08-22T09:02:21+00:00'],
        ['name_tag', 'description', 'ارتباط با ما'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversIran'],
        ['name_tag', 'twitter:creator', '@ObserversIran'],
        ['name_tag', 'apple-mobile-web-app-title', 'ناظران  - RFI'],
        ['name_tag', 'application-name', 'ناظران  - RFI'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ارتباط با ما - ناظران - ار.اف.ای']

    ]


},

/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "ar", "fa"],
HREF_LANG_VALUES_SLUG: ["https://observers.france24.com/fr/", "https://observers.france24.com/en/", "https://observers.france24.com/ar/", "/fa/"],

                     

                    

/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
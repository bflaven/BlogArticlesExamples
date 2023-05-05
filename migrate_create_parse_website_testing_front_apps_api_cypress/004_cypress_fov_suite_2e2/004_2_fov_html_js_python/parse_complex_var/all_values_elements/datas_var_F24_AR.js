const globalDataTest = {

TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// F24_AR
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
            ['homepage', '', 2, 14],
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/', 4, 9],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/', 4, 9],
            ['page_moyen_orient', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/', 4, 9],
            ['page_afrique', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/', 4, 9],
            ['page_europe', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/', 4, 9],
            ['page_usa', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/', 4, 9],
            ['page_asie', '%D8%A2%D8%B3%D9%8A%D8%A7/', 4, 9]
    ],

        

/**
*
* * SEO
* */                      
    
// F24_AR
NavActualitesSlugNewsByRegion: [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
            ['page_moyen_orient', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
            ['page_afrique', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
            ['page_europe', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
            ['page_usa', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
            ['page_asie', '%D8%A2%D8%B3%D9%8A%D8%A7/']
        ],

// F24_AR
NavActualitesSlugNewsByRegionVersus: [
        ['page_france', 'فرنسا/'],
        ['page_maghreb', 'المغاربية/'],
        ['page_moyen_orient', 'الشرق-الأوسط/'],
        ['page_afrique', 'أفريقيا/'],
        ['page_europe', 'أوروبا/'],
        ['page_usa', 'أمريكا/'],
        ['page_asie', 'آسيا/'],
        ['page_asie', 'آسيا/']
    ],

/**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        //--- https://www.france24.com/ar/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'فرانس 24 - الأخبار الدولية على مدار الساعة على قناة فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد والثقافة عبر برامج ونشرات إخبارية على مدار الساعة'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد والثقافة عبر برامج ونشرات إخبارية على مدار الساعة'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'الأخبار,مباشر,فيديو,فيديو تحت الطلب,تلفزيون,ريبورتاج,مقالات,خبر عاجل,دولية'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'فرانس 24 - الأخبار الدولية على مدار الساعة على قناة فرانس 24']

    ],
    page_france: [
        //--- https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/
        ['url', 'slug', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'فرنسا على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,فرنسا,اقتصاد,الثقافة'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'فرنسا على موقع فرانس 24 - فرانس 24']

    ],
    page_maghreb: [
        //--- https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/
        ['url', 'slug', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الأخبار المغاربية على موقع France 24 - France 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب,الجزائر,تونس,ليبيا,موريتانيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الأخبار المغاربية على موقع France 24 - France 24']

    ],
    page_moyen_orient: [
        //--- https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/
        ['url', 'slug', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الشرق الأوسط ودول الخليج على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد الشرق أوسطية والخليجية - برامج و نقاش عن العالم العربي'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد الشرق أوسطية والخليجية - برامج و نقاش عن العالم العربي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,سوريا,لبنان,مصر,إسرائيل,فلسطين'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الشرق الأوسط ودول الخليج على موقع فرانس 24 - فرانس 24']

    ],
    page_afrique: [
        //--- https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/
        ['url', 'slug', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أفريقيا ودول المغرب العربي على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أفريقيا ودول المغرب العربي'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أفريقيا ودول المغرب العربي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أفريقيا ودول المغرب العربي على موقع فرانس 24 - فرانس 24']

    ],
    page_europe: [

        //--- https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/
        ['url', 'slug', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أوروبا على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أوروبا ودول منطقة اليورو - برامج و نقاش'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أوروبا ودول منطقة اليورو - برامج و نقاش'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أوروبا,فرنسا,ألمانيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أوروبا على موقع فرانس 24 - فرانس 24']

    ],
    page_usa: [
        //--- https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/
        ['url', 'slug', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الأمريكتان على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أمريكا الشمالية والجنوبية - برامج ونقاش'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أمريكا الشمالية والجنوبية - برامج ونقاش'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,الولايات المتحدة,أمريكا'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الأمريكتان على موقع فرانس 24 - فرانس 24']

    ],
    page_asie: [
        //--- https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/
        ['url', 'slug', '%D8%A2%D8%B3%D9%8A%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'آسيا على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في قارة آسيا - الصين الهند اليابان - برامج '],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في قارة آسيا - الصين الهند اليابان - برامج '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,آسيا,الصين,اليابان'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'آسيا على موقع فرانس 24 - فرانس 24']

    ]
},

/**
*
* * PLAYER
* */            
             
NavPlayerLinks: [
        ['en_direct', '%D8%A7%D9%84%D8%A8%D8%AB-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1']
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
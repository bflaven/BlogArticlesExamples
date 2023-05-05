const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// MCD_AR

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
listenCounterEnd:8, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:2, 
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
thematicThreeCounterEnd:7,
thematicThreeType:'thematic-3',
thematicThreeStatus:true,
thematicThreeDivNbPosition:'div:nth-child(5)',
thematicThreeDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* social
*/
socialCounterStart:1,
socialCounterEnd:7,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(6)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

 
/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 12],
        ['page_moyen_orient', '/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/', 4, 9],
        ['page_grand_maghreb', '/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/', 4, 9],
        ['page_france', '/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/', 4, 9],
        ['page_afrique', '/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/', 4, 9],
        ['page_europe', '/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/', 4, 9],
        ['page_amerique', '/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/', 4, 9],
        ['page_asie_pacifique', '/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/', 4, 9]
    ],

     

/**
*
* SEO
* */

NavActualitesSlugNewsByRegion: [

            ['page_moyen_orient', '/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
            ['page_grand_maghreb', '/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/'],
            ['page_france', '/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_afrique', '/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
            ['page_europe', '/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
            ['page_amerique', '/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
            ['page_asie_pacifique', '/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/']     
],

NavActualitesSlugNewsByRegionVersus: [
    ['page_moyen_orient', '/الشرق-الأوسط/'],
    ['page_grand_maghreb', '/المغرب-العربي/'],
    ['page_france', '/فرنسا/'],
    ['page_afrique', '/أفريقيا/'],
    ['page_europe', '/أوروبا/'],
    ['page_amerique', '/أمريكا/'],
    ['page_asie_pacifique', '/آسيا-الهادئ/'],
    ['page_asie_pacifique', '/آسيا-الهادئ/']
],

/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.mc-doualiya.com/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'مونت كارلو الدولية MCD - أخبار عربية, أبراج, برامج متنوعة'],
        ['property_tag', 'og:description', 'الموقع الإلكتروني لإذاعة مونت كارلو الدولية -أخبار عربية و عالمية وبرامج متنوعة - بث الإذاعة المباشر - Monte Carlo Doualiya'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'الموقع الإلكتروني لإذاعة مونت كارلو الدولية -أخبار عربية و عالمية وبرامج متنوعة - بث الإذاعة المباشر - Monte Carlo Doualiya'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'مونت كارلو الدولية MCD - أخبار عربية, أبراج, برامج متنوعة']

    ],
    page_moyen_orient: [

        //--- https://www.mc-doualiya.com//%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/
        ['url', 'slug', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الشرق الأوسط ودول الخليج على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الشرق الأوسط و الخليج - برامج و نقاش عن العالم العربي'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الشرق الأوسط و الخليج - برامج و نقاش عن العالم العربي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,سوريا,لبنان,مصر,إسرائيل,فلسطين'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الشرق الأوسط ودول الخليج على موقع مونت كارلو الدولية - مونت كارلو الدولية']

    ],
    page_grand_maghreb: [

        //--- https://www.mc-doualiya.com//%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/
        ['url', 'slug', '%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'المغرب العربي على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'أخبار المغرب العربي على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد المغرب العربي - برامج و نقاش عن المغرب العربي'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'أخبار المغرب العربي على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد المغرب العربي - برامج و نقاش عن المغرب العربي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب,الجزائر,تونس,ليبيا,موريتانيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'المغرب العربي على موقع مونت كارلو الدولية - مونت كارلو الدولية']

    ],
    page_france: [

        //--- https://www.mc-doualiya.com//%D9%81%D8%B1%D9%86%D8%B3%D8%A7/
        ['url', 'slug', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'فرنسا على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'أخبار فرنسا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الفرنسي - برامج و نقاش عن فرنسا'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'أخبار فرنسا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الفرنسي - برامج و نقاش عن فرنسا'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,فرنسا,باريس,مرسيليا,ماكرون'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'فرنسا على موقع مونت كارلو الدولية - مونت كارلو الدولية']

    ],
    page_afrique: [

        //--- https://www.mc-doualiya.com//%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/
        ['url', 'slug', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أفريقيا على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'أخبار أفريقيا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الأفريقي - برامج و نقاش عن أفريقيا'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'أخبار أفريقيا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الأفريقي - برامج و نقاش عن أفريقيا'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,السنغال,الكاميرون,أثيوبيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أفريقيا على موقع مونت كارلو الدولية - مونت كارلو الدولية']

    ],
    page_europe: [

        //--- https://www.mc-doualiya.com//%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/
        ['url', 'slug', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أوروبا على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'أخبار أوروبا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الأوروبي - برامج و نقاش عن أوروبا'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'أخبار أوروبا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الأوروبي - برامج و نقاش عن أوروبا'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أوروبا,الاتحاد الأوروبي,ألمانيا,إسبانيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أوروبا على موقع مونت كارلو الدولية - مونت كارلو الدولية']

    ],
    page_amerique: [

        //--- https://www.mc-doualiya.com//%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/
        ['url', 'slug', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أمريكا على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'أخبار أمريكا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الأمريكي - برامج و نقاش عن أمريكا'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'أخبار أمريكا على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة والاقتصاد الأمريكي - برامج و نقاش عن أمريكا'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أمريكا,أمريكا الشمالية,أمريكا اللاتينية,كندا'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أمريكا على موقع مونت كارلو الدولية - مونت كارلو الدولية']

    ],
    page_asie_pacifique: [

        //--- https://www.mc-doualiya.com//%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/
        ['url', 'slug', '%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.mc-doualiya.com/meta_og_twcards/MCD_FB.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'مونت كارلو الدولية / MCD'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'آسيا و المحيط الهادئ على موقع مونت كارلو الدولية - مونت كارلو الدولية'],
        ['property_tag', 'og:description', 'أخبار آسيا و المحيط الهادئ على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة واقتصاد آسيا و المحيط الهادئ - برامج و نقاش عن آسيا و المحيط الهادئ'],
        ['property_tag', 'og:url', 'https://www.mc-doualiya.com/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/'],
        ['property_tag', 'fb:app_id', '391420110887706'],
        ['property_tag', 'fb:pages', '464041416970667'],
        ['name_tag', 'description', 'أخبار آسيا و المحيط الهادئ على مدار الساعة على إذاعة مونت كارلو الدولية. تابعوا كل أخبار السياسة واقتصاد آسيا و المحيط الهادئ - برامج و نقاش عن آسيا و المحيط الهادئ'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@MC_Doualiya'],
        ['name_tag', 'twitter:creator', '@MC_Doualiya'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,آسيا,المحيط الهادئ,أستراليا'],
        ['name_tag', 'apple-mobile-web-app-title', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'application-name', 'مونت كارلو الدولية / MCD'],
        ['name_tag', 'msapplication-TileColor', '#e20000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'آسيا و المحيط الهادئ على موقع مونت كارلو الدولية - مونت كارلو الدولية']

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
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Play Pause Inside the player 
    ['player_listen_live',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Discover Podcasts
    ['player_discover_podcast', '#main-content > section:nth-child(3) > div > div.o-live__cta > a ']
    ],      
               

HREF_LANG_VALUES: [], 

HREF_LANG_VALUES_SLUG: [], 

/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
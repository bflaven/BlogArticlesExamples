const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


  
// RFI_FA
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
HotTagsStatus:true,
HotTagsDivNbPosition:'div:nth-child(1)',
HotTagsDescription:'Main Navigation :: Testing the Burger Menu :: hot-tag', 

/* 
* listen
*/
listenCounterStart:1, 
listenCounterEnd:4, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:11, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:11,
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
        ['homepage', '', 2, 7],
        ['page_culture', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/', 4, 10], 
        ['page_iran', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/', 4, 9],
        ['page_afghanistan', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/', 4, 9],
        ['page_monde', '%D8%AC%D9%87%D8%A7%D9%86/', 4, 9]
    ],
    


/**
*
* * SEO
* */ 

NavActualitesSlugNewsByRegion: [
    ['page_societe_environnement', '%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'], 
    ['page_culture', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'], 
    ['page_iran', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'], 
    ['page_afghanistan', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'], 
    ['page_monde', '%D8%AC%D9%87%D8%A7%D9%86/']
],

// RFI_FA
NavActualitesSlugNewsByRegionVersus: [
    ['page_societe_environnement', 'جامعه-و-محیط-زیست/'],
    ['page_culture', 'فرهنگ-و-زندگی/'],
    ['page_iran', 'ایران/'],
    ['page_afghanistan', 'افغانستان/'],
    ['page_monde', 'جهان/'],
    ['page_monde', 'جهان/']
],


/**
*
* * META
* */

 MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/fa/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ار.اف.ای - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'اخبار و تازه های جهان بصورت زنده : رادیو بین المللی فرانسه - ار.اف.ای'],
        ['property_tag', 'og:description', 'اخبار سیاسی، اقتصادی، فرهنگی و ورزشی را بصورت زنده و شبانه روزی از ار.اف.ای بشنوید. آخرین خبرها و تازه های ایران، افغانستان، فرانسه و جهان را از این رادیو دریافت دارید'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '103932459643311'],
        ['name_tag', 'description', 'اخبار سیاسی، اقتصادی، فرهنگی و ورزشی را بصورت زنده و شبانه روزی از ار.اف.ای بشنوید. آخرین خبرها و تازه های ایران، افغانستان، فرانسه و جهان را از این رادیو دریافت دارید'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Fa'],
        ['name_tag', 'twitter:creator', '@RFI_Fa'],
        ['name_tag', 'keywords', 'صفحۀ نخست,ورزش,فرهنگ,اقتصاد,سیاست,فرانسه,آمریکا'],
        ['name_tag', 'apple-mobile-web-app-title', 'ار.اف.ای - RFI'],
        ['name_tag', 'application-name', 'ار.اف.ای - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'اخبار و تازه های جهان بصورت زنده : رادیو بین المللی فرانسه - ار.اف.ای']

    ],
    page_societe_environnement: [



        //--- https://www.rfi.fr/fa/%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/
        ['url', 'slug', '%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ار.اف.ای - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'جامعه و محیط زیست'],
        ['property_tag', 'og:description', 'پدیده\u200cهای اجتماعی، طبیعی و زیست\u200cمحیطی در جهان امروز زنجیره\u200c\u200cای به\u200cهم پیوسته را تشکیل می\u200cدهند. بخش جامعه و محیط زیست به انعکاس همه خبرها و مباحثی اختصاص دارد که وجوه گوناگون زندگی اجتماعی، چالش\u200cهای زیست\u200cمحیطی…'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fa/%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '103932459643311'],
        ['name_tag', 'description', 'پدیده\u200cهای اجتماعی، طبیعی و زیست\u200cمحیطی در جهان امروز زنجیره\u200c\u200cای به\u200cهم پیوسته را تشکیل می\u200cدهند. بخش جامعه و محیط زیست به انعکاس همه خبرها و مباحثی اختصاص دارد که وجوه گوناگون زندگی اجتماعی، چالش\u200cهای زیست\u200cمحیطی…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Fa'],
        ['name_tag', 'twitter:creator', '@RFI_Fa'],
        ['name_tag', 'keywords', 'کرۀ زمین,محیط زیست,جامعه,آب,آب و هوا,بوم\u200cشناسی'],
        ['name_tag', 'apple-mobile-web-app-title', 'ار.اف.ای - RFI'],
        ['name_tag', 'application-name', 'ار.اف.ای - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'جامعه و محیط زیست']

    ],
    page_culture: [


        //--- https://www.rfi.fr/fa/%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/
        ['url', 'slug', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ار.اف.ای - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'فرهنگ و زندگی'],
        ['property_tag', 'og:description', 'بخش فرهنگ و زندگی برای فاصله گرفتن از رویدادهای ناگزیر زمانه و پرداختن به جنبه\u200cهای دلپذیرتر زندگی طراحی شده است: همه جزییاتی که در عین حال در زندگی روزمره نقش اساسی دارند؛ غذا و آشپزی، پوشاک و مد، هنرهای…'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fa/%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '103932459643311'],
        ['name_tag', 'description', 'بخش فرهنگ و زندگی برای فاصله گرفتن از رویدادهای ناگزیر زمانه و پرداختن به جنبه\u200cهای دلپذیرتر زندگی طراحی شده است: همه جزییاتی که در عین حال در زندگی روزمره نقش اساسی دارند؛ غذا و آشپزی، پوشاک و مد، هنرهای…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Fa'],
        ['name_tag', 'twitter:creator', '@RFI_Fa'],
        ['name_tag', 'keywords', 'مُد,آشپزی,تفریح,سفر'],
        ['name_tag', 'apple-mobile-web-app-title', 'ار.اف.ای - RFI'],
        ['name_tag', 'application-name', 'ار.اف.ای - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'فرهنگ و زندگی']

    ],
    page_iran: [


        //--- https://www.rfi.fr/fa/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/
        ['url', 'slug', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ار.اف.ای - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'اخبار ایران : تازه های سیاسی و اقتصادی - ار.اف.ای'],
        ['property_tag', 'og:description', 'تازه ترین خبرهای سیاسی، بین المللی، فرهنگی، اجتماعی و ورزشی ایران را از ار.اف.ای دریافت دارید'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fa/%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '103932459643311'],
        ['name_tag', 'description', 'تازه ترین خبرهای سیاسی، بین المللی، فرهنگی، اجتماعی و ورزشی ایران را از ار.اف.ای دریافت دارید'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Fa'],
        ['name_tag', 'twitter:creator', '@RFI_Fa'],
        ['name_tag', 'keywords', 'ایران,اقتصاد,جامعه,سیاست,گفتار,گزارش,خبر'],
        ['name_tag', 'apple-mobile-web-app-title', 'ار.اف.ای - RFI'],
        ['name_tag', 'application-name', 'ار.اف.ای - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'اخبار ایران : تازه های سیاسی و اقتصادی - ار.اف.ای']

    ],
    page_afghanistan: [


        //--- https://www.rfi.fr/fa/%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/
        ['url', 'slug', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ار.اف.ای - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تازه های افغانستان : آخرین خبرها - ار.اف.ای'],
        ['property_tag', 'og:description', 'تازه ترین خبرهای سیاسی، بین المللی، فرهنگی، اجتماعی و ورزشی افغانستان را از ار.اف.ای دریافت دارید'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fa/%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '103932459643311'],
        ['name_tag', 'description', 'تازه ترین خبرهای سیاسی، بین المللی، فرهنگی، اجتماعی و ورزشی افغانستان را از ار.اف.ای دریافت دارید'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Fa'],
        ['name_tag', 'twitter:creator', '@RFI_Fa'],
        ['name_tag', 'keywords', 'افغانستان,اقتصاد,جامعه,سیاست,گزارش,خبر'],
        ['name_tag', 'apple-mobile-web-app-title', 'ار.اف.ای - RFI'],
        ['name_tag', 'application-name', 'ار.اف.ای - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تازه های افغانستان : آخرین خبرها - ار.اف.ای']

    ],
    page_monde: [


        //--- https://www.rfi.fr/fa/%D8%AC%D9%87%D8%A7%D9%86/
        ['url', 'slug', '%D8%AC%D9%87%D8%A7%D9%86/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ار.اف.ای - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'اخبار جهان - ار.اف.ای'],
        ['property_tag', 'og:description', 'اخبار بین المللی را از ار.اف.ای دریافت دارید : برنامه های رادیوئی، پادکست ها، گفتگوها '],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fa/%D8%AC%D9%87%D8%A7%D9%86/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '103932459643311'],
        ['name_tag', 'description', 'اخبار بین المللی را از ار.اف.ای دریافت دارید : برنامه های رادیوئی، پادکست ها، گفتگوها '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Fa'],
        ['name_tag', 'twitter:creator', '@RFI_Fa'],
        ['name_tag', 'keywords', 'جهان,خاورمیانه,آسیا و اقیانوسیه,آفریقا,آمریکا,اروپا, برنامه های رادیوئی,پادکست ها,گفتگوها'],
        ['name_tag', 'apple-mobile-web-app-title', 'ار.اف.ای - RFI'],
        ['name_tag', 'application-name', 'ار.اف.ای - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'اخبار جهان - ار.اف.ای']

    ]
 },
 
/**
*
* * PLAYER
* */ 

 /* No player, so No NavPlayerLinks, PlayerItemsActionButtons */

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
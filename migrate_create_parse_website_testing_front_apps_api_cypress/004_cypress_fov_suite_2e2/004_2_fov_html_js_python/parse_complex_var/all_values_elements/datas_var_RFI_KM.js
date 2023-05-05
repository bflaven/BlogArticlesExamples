const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


// RFI_KM


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
HotTagsCounterEnd:1, 
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
thematicOneCounterEnd:13, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:1,
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
            ['homepage', '', 2, 5],
            ['page_cambodge', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/', 4, 10],
            ['page_asie', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/', 4, 10],
            ['page_europe', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/', 4, 10],
            ['page_amerique', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/', 4, 10],
            ['page_afrique', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/', 4, 10],
            ['page_moyen_orient', '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/', 4, 10]
    ],



/**
*
* * SEO
* */  
NavActualitesSlugNewsByRegion: [
        ['page_cambodge', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'], 
        ['page_asie', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'], 
        ['page_europe', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'], 
        ['page_amerique', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'], 
        ['page_afrique', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'], 
        ['page_moyen_orient', '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/']
        ],

// RFI_KM
NavActualitesSlugNewsByRegionVersus: [
    ['page_cambodge', 'កម្ពុជា/'],
    ['page_asie', 'អាស៊ី/'],
    ['page_europe', 'អឺរ៉ុប/'],
    ['page_amerique', 'អាមេរិក/'],
    ['page_afrique', 'អាហ្វ្រិក/'],
    ['page_moyen_orient', 'ដើមបូព៌ា/'],
    ['page_moyen_orient', 'ដើមបូព៌ា/']
],


/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/km/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានថ្មីៗពីប្រទេសកម្ពុជា និងជុំវិញពិភពលោក ជាមួយវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា លោកអ្នកអាចទទួលបាននូវព័ត៌មានថ្មីៗចុងក្រោយ ពីប្រទេសកម្ពុជា ពីប្រទេសបារាំង និងពីតំបន់ផ្សេងៗទៀតនៅទូទាំងពិភពលោក។ '],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា លោកអ្នកអាចទទួលបាននូវព័ត៌មានថ្មីៗចុងក្រោយ ពីប្រទេសកម្ពុជា ពីប្រទេសបារាំង និងពីតំបន់ផ្សេងៗទៀតនៅទូទាំងពិភពលោក។ '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'អន្ដរជាតិ,កម្ពុជា,ដំណឹង,ផ្សាយផ្ទាល់,អាស៊ី,អឺរ៉ុប,សេដ្ឋកិច្,នយោបាយ,ច្បាប់ - តុលាការ,បទវិភាគ'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានថ្មីៗពីប្រទេសកម្ពុជា និងជុំវិញពិភពលោក ជាមួយវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ],
    page_cambodge: [

        //--- https://www.rfi.fr/km/%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/
        ['url', 'slug', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានពីប្រទេសកម្ពុជា-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'ព័ត៌មានថ្មីៗពីប្រទេសកម្ពុជា ផ្សាយបន្តផ្ទាល់ តាមវិទ្យុបារាំងអន្តរជាតិ RFI ខេរមភាសា៖ បទយកការណ៍, បទវិភាគ, បទសម្ភាសន៍ ។ល។'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'ព័ត៌មានថ្មីៗពីប្រទេសកម្ពុជា ផ្សាយបន្តផ្ទាល់ តាមវិទ្យុបារាំងអន្តរជាតិ RFI ខេរមភាសា៖ បទយកការណ៍, បទវិភាគ, បទសម្ភាសន៍ ។ល។'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'កម្ពុជា,ផ្សាយផ្ទាល់,សេដ្ឋកិច្,នយោបាយ,វិភាគ,សង្គម-វប្បធម៌,ព័ត៌មានថ្មីៗពីប្រទេសកម្ពុជា'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានពីប្រទេសកម្ពុជា-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ],
    page_asie: [

        //--- https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/
        ['url', 'slug', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានពីអាស៊ី-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់អាស៊ី តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់អាស៊ី តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'អាស៊ី,ផ្សាយផ្ទាល់,សេដ្ឋកិច្,គោលនយោបាយ,សង្គម-វប្បធម៌,ហុងកុង,ជប៉ុន,តៃវ៉ាន់,ចិន,កូរ៉េខាងត្បូង'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានពីអាស៊ី-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ],
    page_europe: [

        //--- https://www.rfi.fr/km/%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/
        ['url', 'slug', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានពីអឺរ៉ុប-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់អឺរ៉ុប និងសហភាពអឺរ៉ុប តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់អឺរ៉ុប និងសហភាពអឺរ៉ុប តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'អឺរ៉ុប,brexit,អង់គ្លេស,បុរីវ៉ាទីកង់,អ៊ីតាលី,បារាំង,រុស្ស៊ី,តួកគី,សហភាពអឺរ៉ុប'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានពីអឺរ៉ុប-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ],
    page_amerique: [

        //--- https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/
        ['url', 'slug', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានពីទ្វីបអាមេរិក-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ នៅសហរដ្ឋអាមេរិក និងប្រទេសផ្សេងទៀត ក្នុងទ្វីបអាមេរិក តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ នៅសហរដ្ឋអាមេរិក និងប្រទេសផ្សេងទៀត ក្នុងទ្វីបអាមេរិក តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'អាមេរិក,សហរដ្ឋអាមេរិក,អន្ដរជាតិ,ដំណឹង,ផ្សាយផ្ទាល់,សេដ្ឋកិច្,នយោបាយ,ច្បាប់ - តុលាការ,បទវិភាគ,កាណាដា'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានពីទ្វីបអាមេរិក-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ],
    page_afrique: [

        //--- https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/
        ['url', 'slug', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានពីមជ្ឈិមបូព៌ា-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់មជ្ឈិមបូព៌ា តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់មជ្ឈិមបូព៌ា តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'អាហ្វ្រិក,អន្ដរជាតិ,ដំណឹង,ផ្សាយផ្ទាល់,សេដ្ឋកិច្,នយោបាយ,ច្បាប់ - តុលាការ,បទវិភាគ,ស៊ូដង់,ម៉ាលី,ទុយនីស៊ី,អេហ្ស៊ីប,អេត្យូពី,អ៊ីស្រាអែល'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានពីមជ្ឈិមបូព៌ា-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ],
    page_moyen_orient: [

        //--- https://www.rfi.fr/km/%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/
        ['url', 'slug', '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'km_KH'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ព័ត៌មានពីមជ្ឈិមបូព៌ា-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់មជ្ឈិមបូព៌ា តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/km/%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '201592649916262'],
        ['name_tag', 'description', 'ព័ត៌មានថ្មី ស្តីពីនយោបាយ សេដ្ឋកិច្ច និងសន្តិសុខ ក្នុងតំបន់មជ្ឈិមបូព៌ា តាមរយៈវិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Km'],
        ['name_tag', 'twitter:creator', '@RFI_Km'],
        ['name_tag', 'keywords', 'ដើមបូព៌ា,អ៊ីរ៉ាក់,អ៊ីរ៉ង់,អ៊ីស្រាអែល,ប៉ាឡេស្ទីន,តួកគី,សេដ្ឋកិច្,នយោបាយ,សង្គម-វប្បធម៌,ជីហាត,លីបង់,ស៊ីរី'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ព័ត៌មានពីមជ្ឈិមបូព៌ា-វិទ្យុបារាំងអន្តរជាតិ RFI ខេមរភាសា']

    ]
},

/**
*
* * PLAYER
* */ 

        NavPlayerLinks: [
            ['en_direct', '%E1%9E%95%E1%9F%92%E1%9E%9F%E1%9E%B6%E1%9E%99%E1%9E%95%E1%9F%92%E1%9E%91%E1%9E%B6%E1%9E%9B%E1%9F%8B']
         ], 

PlayerItemsActionButtons: [
    // Click on play in header
    ['btn_play_in_header',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Play Pause Inside the player 
    ['player_listen_live',
    'body > div.o-bottom-bar > div.o-bottom-bar__item.o-bottom-bar__item--live > div.o-bottom-bar__item__link.o-bottom-bar__item__link--desktop-only > div > div > button'],
    // Discover Podcasts
    ['player_discover_podcast', '#main-content > section:nth-child(3) > div > div.o-live__cta > a']
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
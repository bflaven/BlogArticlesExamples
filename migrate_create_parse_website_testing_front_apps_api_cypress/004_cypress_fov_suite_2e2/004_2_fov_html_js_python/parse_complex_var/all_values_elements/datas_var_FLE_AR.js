const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// FLE_AR

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
LanguagesCounterEnd:7, 
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
listenCounterEnd:2, 
listenType:'listen',
listenStatus:true,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:4, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(3)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',
// #site-nav-menu > div:nth-child(4) > div > div > ul > li:nth-child(1)
/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:4,
thematicTwoType:'thematic-2',
thematicTwoStatus:true,
thematicTwoDivNbPosition:'div:nth-child(4)',
thematicTwoDescription:'Main Navigation :: Testing the Burger Menu :: thematic-2 :: sections',

/* 
* thematic-3
*/
thematicThreeCounterStart:1,
thematicThreeCounterEnd:4,
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
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
      ['homepage', '', 3, 7],
      ['page_podcasts_journal_français_facile','podcasts/journal-en-fran%C3%A7ais-facile/', 1, 1],
      ['page_podcasts_selection','podcasts/s%C3%A9lection/', 3, 5],
      ['page_exercices','exercices/', 2, 4],
      ['page_diplomes_tests','dipl%C3%B4mes-tests/', 2, 4],
      ['page_tester_son_niveau','tester-son-niveau/', 1, 1],
      ['page_comprendre_actualite_français','comprendre-actualit%C3%A9-fran%C3%A7ais/', 2, 4],
      ['page_communiquer_quotidien','communiquer-quotidien/', 2, 4],
      ['page_reviser','r%C3%A9viser/', 2, 4],
      ['page_enseigner','enseigner/', 3, 5],
      ['page_exercices_a1','exercices/a1/', 2, 4],
      ['page_exercices_a2','exercices/a2/', 2, 4],
      ['page_exercices_b1','exercices/b1/', 2, 4],
      ['page_exercices_b2','exercices/b2/', 2, 4],
      ['page_exercices_c1c2','exercices/c1c2/', 2, 4],
      ['page_podcasts_mots_actualite','podcasts/les-mots-de-l-actualit%C3%A9/', 1, 1]
  ],

NavActualitesSlugNewsByRegionVersus: [
    ['page_podcasts_journal_français_facile', 'podcasts/journal-en-français-facile/'],
    ['page_podcasts_selection', 'podcasts/sélection/'],
    ['page_exercices', 'exercices/'],
    ['page_diplomes_tests', 'diplômes-tests/'],
    ['page_tester_son_niveau', 'tester-son-niveau/'],
    ['page_comprendre_actualite_français', 'comprendre-actualité-français/'],
    ['page_communiquer_quotidien', 'communiquer-quotidien/'],
    ['page_reviser', 'réviser/'],
    ['page_enseigner', 'enseigner/'],
    ['page_exercices_a1', 'exercices/a1/'],
    ['page_exercices_a2', 'exercices/a2/'],
    ['page_exercices_b1', 'exercices/b1/'],
    ['page_exercices_b2', 'exercices/b2/'],
    ['page_exercices_c1c2', 'exercices/c1c2/'],
    ['page_podcasts_mots_actualite', 'podcasts/les-mots-de-l-actualité/'],
    ['page_podcasts_mots_actualite', 'podcasts/les-mots-de-l-actualité/']
],

/**
*
* * SEO
* */ 

// FLE_AR
NavActualitesSlugNewsByRegion: [
        ['page_podcasts_journal_français_facile','podcasts/journal-en-fran%C3%A7ais-facile/'],
        ['page_podcasts_selection','podcasts/s%C3%A9lection/'],
        ['page_exercices','exercices/'],
        ['page_diplomes_tests','dipl%C3%B4mes-tests/'],
        ['page_tester_son_niveau','tester-son-niveau/'],
        ['page_comprendre_actualite_français','comprendre-actualit%C3%A9-fran%C3%A7ais/'],
        ['page_communiquer_quotidien','communiquer-quotidien/'],
        ['page_reviser','r%C3%A9viser/'],
        ['page_enseigner','enseigner/'],
        ['page_exercices_a1','exercices/a1/'],
        ['page_exercices_a2','exercices/a2/'],
        ['page_exercices_b1','exercices/b1/'],
        ['page_exercices_b2','exercices/b2/'],
        ['page_exercices_c1c2','exercices/c1c2/'],
        ['page_podcasts_mots_actualite','podcasts/les-mots-de-l-actualit%C3%A9/']
],

/**
 *
 * * META
 * */

MetaDataStuff: {
    homepage: [


        //--- https://francaisfacile.rfi.fr/ar/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تعلم الفرنسية مع الأخبار الدولية - Le français facile avec RFI'],
        ['property_tag', 'og:description', 'بودكاست لتعلم الفرنسية مع متابعة الأخبار الدولية. مارس الفرنسية من خلال تمارين تناسب جميع المستويات'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'بودكاست لتعلم الفرنسية مع متابعة الأخبار الدولية. مارس الفرنسية من خلال تمارين تناسب جميع المستويات'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'فرنسية سهلة,تعلم الفرنسية,تمارين فرنسية, نصوص بالفرنسية,بودكاست تعلم الفرنسية,الفرنسية للأجانب,تعلم الفرنسية عبر الانترنت,تعلم الفرنسية مجاناً,تعلم الفرنسية السهلة,تعلم فهم الفرنسية'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تعلم الفرنسية مع الأخبار الدولية - Le français facile avec RFI']

    ],
    page_podcasts_journal_français_facile: [


        //--- https://francaisfacile.rfi.fr/ar/podcasts/journal-en-fran%C3%A7ais-facile/
        ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Journal en français facile'],
        ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/podcasts/journal-en-fran%C3%A7ais-facile/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['property_tag', 'article:published_time', '2022-07-06T09:03:47+00:00'],
        // ['property_tag', 'article:modified_time', '2023-03-17T08:31:05+00:00'],
        ['property_tag', 'article:tag', 'Journal'],
        // ['property_tag', 'article:tag', 'Journal En Français Facile'],
        ['name_tag', 'description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
        ['name_tag', 'twitter:card', 'summary_large_image'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'Journal en français facile,Journal,Journal En Français Facile'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Journal en français facile']

    ],
    page_podcasts_selection: [


        //--- https://francaisfacile.rfi.fr/ar/podcasts/s%C3%A9lection/
        ['url', 'slug', 'podcasts/s%C3%A9lection/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تسجيلات البودكاست للاستماع والفهم وتعلم اللغة الفرنسية - Français Facile - RFI'],
        ['property_tag', 'og:description', ' مجموعة من بودكاستات إذاعة فرنسا الدولية بالفرنسية الأصلية مرفقة مع نصها مكتوباً. تجدون هنا النشرة الإخبارية بالفرنسية السهلة. كلمات الأخبار. '],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/podcasts/s%C3%A9lection/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', ' مجموعة من بودكاستات إذاعة فرنسا الدولية بالفرنسية الأصلية مرفقة مع نصها مكتوباً. تجدون هنا النشرة الإخبارية بالفرنسية السهلة. كلمات الأخبار. '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'فرنسية سهلة,تعلم فرنسية,إذاعة فرنسا الدولية,بودكاست نص النشرة بالفرنسية,بودكاست تعلم الفرنسية,تعلم الفرنسية السهلة,تعلم فهم الفرنسية,تعلم فرنسية محكية,لفظ الفرنسية,بودكاست تعلم الفرنسية للكبار'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تسجيلات البودكاست للاستماع والفهم وتعلم اللغة الفرنسية - Français Facile - RFI']

    ],
    page_exercices: [


        //--- https://francaisfacile.rfi.fr/ar/exercices/
        ['url', 'slug', 'exercices/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تمارين لكافة المستويات لممارسة اللغة الفرنسية - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين من المستوى المبتدئ إلى المستوى المتقدم. فهم اللغة الفرنسية المحكية والتعلم انطلاقاً من برامج الراديو حول أخبار العالم'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/exercices/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين من المستوى المبتدئ إلى المستوى المتقدم. فهم اللغة الفرنسية المحكية والتعلم انطلاقاً من برامج الراديو حول أخبار العالم'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'إذاعة فرنسا الدولية,تمارين فرنسية,تدريب امتحان ديلف DELF,تدريب امتحان TCF,تدريب امتحان DFP,اختبار تحديد مستوى,تمارين فرنسية مستوى متوسط,تمارين فرنسية مستوى متقدم,تمارين فرنسية مع تصحيح'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تمارين لكافة المستويات لممارسة اللغة الفرنسية - Français Facile - RFI']

    ],

    page_diplomes_tests: [


        //--- https://francaisfacile.rfi.fr/ar/dipl%C3%B4mes-tests/
        ['url', 'slug', 'dipl%C3%B4mes-tests/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'التدرب مع إذاعة فرنسا الدولية على امتحانات DELF, TCF, DFP - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تدرب مجاناً على الامتحانات الشفهية لفحوصات DELF B2, TCF, DFP وذلك في ظروف مماثلة للامتحان الحقيقي '],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/dipl%C3%B4mes-tests/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تدرب مجاناً على الامتحانات الشفهية لفحوصات DELF B2, TCF, DFP وذلك في ظروف مماثلة للامتحان الحقيقي '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'delf,tcf,dfp,تمارين tcf,تمارين dfp,تحضير فحص الفرنسية,اختبار تحديد مستوى'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'التدرب مع إذاعة فرنسا الدولية على امتحانات DELF, TCF, DFP - Français Facile - RFI']

    ],
    page_tester_son_niveau: [


        //--- https://francaisfacile.rfi.fr/ar/tester-son-niveau/
        ['url', 'slug', 'tester-son-niveau/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'اختبار تحديد المستوى - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين استماع لجميع المستويات للتواصل بشكل أفضل بالفرنسية في الحياة اليومية ومجال العمل وفي الجامعة '],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/tester-son-niveau/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين استماع لجميع المستويات للتواصل بشكل أفضل بالفرنسية في الحياة اليومية ومجال العمل وفي الجامعة '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'اختبار لتحديد المستوى,اختبار الفرنسية, مستوى لغة فرنسية,تدريب لغة فرنسية,تمارين لغة فرنسية,اختبار إذاعة فرنسا الدولية rfi, تمارين فرنسية للأجانب fle, اختبار مستوى'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'اختبار تحديد المستوى - Français Facile - RFI']

    ],
    page_comprendre_actualite_français: [


        //--- https://francaisfacile.rfi.fr/ar/comprendre-actualit%C3%A9-fran%C3%A7ais/
        ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تعلم الفرنسية مع الأخبار - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين استماع لجميع المستويات من خلال أخبار العالم: مجتمع، اقتصاد، ثقافة سياسة، بيئة، صحة. '],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين استماع لجميع المستويات من خلال أخبار العالم: مجتمع، اقتصاد، ثقافة سياسة، بيئة، صحة. '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'إذاعة فرنسا الدولية rfi,تمارين فرنسية,تمارين فرنسية مبتدئ,تمارين فرنسية متوسط,تمارين فرنسية متقدم, تعلم فرنسية, أخبار,تمارين فرنسية, أخبار'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تعلم الفرنسية مع الأخبار - Français Facile - RFI']

    ],
    page_communiquer_quotidien: [


        //--- https://francaisfacile.rfi.fr/ar/communiquer-quotidien/
        ['url', 'slug', 'communiquer-quotidien/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تعلم لغة الحياة اليومية الفرنسية - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لجميع المستويات للتواصل بشكل أفضل بالفرنسية في الحياة اليومية ومجال العمل وفي الجامعة '],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/communiquer-quotidien/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لجميع المستويات للتواصل بشكل أفضل بالفرنسية في الحياة اليومية ومجال العمل وفي الجامعة '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'إذاعة فرنسا الدولية rfi,تمارين فرنسية,تمارين فرنسية مبتدئ,تمارين فرنسية متوسط,تمارين فرنسية متقدم,تعلم الفرنسية اليومية,تمارين الفرنسية اليومية, تعابير فرنسية,عمل بالفرنسية,تعلم فرنسية حياة'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تعلم لغة الحياة اليومية الفرنسية - Français Facile - RFI']

    ],
    page_reviser: [


        //--- https://francaisfacile.rfi.fr/ar/r%C3%A9viser/
        ['url', 'slug', 'r%C3%A9viser/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'التذكير بالمعلومات الأساسية للغة الفرنسية - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لجميع المستويات للتذكير بالنقاط اللغوية الأساسية كالقواعد والمفردات واللفظ والكتابة والتعبير والمصطلحات الجديدة '],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/r%C3%A9viser/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لجميع المستويات للتذكير بالنقاط اللغوية الأساسية كالقواعد والمفردات واللفظ والكتابة والتعبير والمصطلحات الجديدة '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'إذاعة فرنسا الدولية rfi,تمارين فرنسية,تمارين فرنسية مبتدئ,تمارين فرنسية متوسط,تمارين فرنسية متقدم,مذاكرة الفرنسية,مفردات فرنسية,قواعد فرنسية, تعلم مفردات فرنسية,لفظ فرنسي'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'التذكير بالمعلومات الأساسية للغة الفرنسية - Français Facile - RFI']

    ],
    page_enseigner: [


        //--- https://francaisfacile.rfi.fr/ar/enseigner/
        ['url', 'slug', 'enseigner/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Enseigner le français à partir de sons authentiques d'acualité - Français Facile - RFI"],
        ['property_tag', 'og:description', "Retrouvez les fiches pédagogiques gratuites et prêtes à l'emploi sur des sujets motivants pour enseigner le français à partir d'extraits d'émissions de RFI."],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/enseigner/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['name_tag', 'description', "Retrouvez les fiches pédagogiques gratuites et prêtes à l'emploi sur des sujets motivants pour enseigner le français à partir d'extraits d'émissions de RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'rfi savoirs, fle, enseigner francais, enseigner fle, enseigner francais radio, francais transcription, se former enseignement fle, exercice francais gratuit, exercice francais avec correction'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "Enseigner le français à partir de sons authentiques d'acualité - Français Facile - RFI"]

    ],
    page_exercices_a1: [


        //--- https://francaisfacile.rfi.fr/ar/exercices/a1/
        ['url', 'slug', 'exercices/a1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تمارين استماع بالفرنسية لمستوى مبتدئ (A1) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لغة فرنسية لمستوى مبتدئ (A1) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/exercices/a1/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لغة فرنسية لمستوى مبتدئ (A1) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'تمارين إذاعة فرنسا الدولية, تمارين فرنسية مستوى مبتدئ (A1),تدرب على delf,تدرب على tcf,تدرب على dfp,اختبار مستوى لغة فرنسية مبتدئ (A1),تمارين فرنسية مبتدئ (A1) مصححة'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تمارين استماع بالفرنسية لمستوى مبتدئ (A1) - Français Facile - RFI']

    ],
    page_exercices_a2: [


        //--- https://francaisfacile.rfi.fr/ar/exercices/a2/
        ['url', 'slug', 'exercices/a2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تمارين استماع بالفرنسية لمستوى أساسي (A2) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لغة فرنسية لمستوى أساسي (A2) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/exercices/a2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لغة فرنسية لمستوى أساسي (A2) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'تمارين إذاعة فرنسا الدولية, تمارين فرنسية مستوى أساسي (A2),تدرب على delf,تدرب على tcf,تدرب على dfp,اختبار مستوى لغة فرنسية أساسي (A2),تمارين فرنسية أساسي (A2) مصححة'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تمارين استماع بالفرنسية لمستوى أساسي (A2) - Français Facile - RFI']

    ],
    page_exercices_b1: [


        //--- https://francaisfacile.rfi.fr/ar/exercices/b1/
        ['url', 'slug', 'exercices/b1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تمارين استماع بالفرنسية لمستوى متوسط (B1) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لغة فرنسية لمستوى متوسط (B1)  للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/exercices/b1/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لغة فرنسية لمستوى متوسط (B1)  للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'تمارين إذاعة فرنسا الدولية, تمارين فرنسية مستوى متوسط (B1) ,تدرب على delf,تدرب على tcf,تدرب على dfp,اختبار مستوى لغة فرنسية متوسط (B1) ,تمارين فرنسية متوسط (B1)  مصححة'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تمارين استماع بالفرنسية لمستوى متوسط (B1) - Français Facile - RFI']

    ],
    page_exercices_b2: [


        //--- https://francaisfacile.rfi.fr/ar/exercices/b2/
        ['url', 'slug', 'exercices/b2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تمارين استماع بالفرنسية لمستوى متقدم (B2) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لغة فرنسية لمستوى متقدم (B2) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/exercices/b2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لغة فرنسية لمستوى متقدم (B2) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'تمارين إذاعة فرنسا الدولية, تمارين فرنسية مستوى متقدم (B2),تدرب على delf,تدرب على tcf,تدرب على dfp,اختبار مستوى لغة فرنسية متقدم (B2),تمارين فرنسية متقدم (B2) مصححة'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تمارين استماع بالفرنسية لمستوى متقدم (B2) - Français Facile - RFI']

    ],
    page_exercices_c1c2: [


        //--- https://francaisfacile.rfi.fr/ar/exercices/c1c2/
        ['url', 'slug', 'exercices/c1c2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'تمارين استماع بالفرنسية لمستوى مستقل (C1/C2) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'تمارين لغة فرنسية لمستوى مستقل (C1/C2) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/exercices/c1c2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'تمارين لغة فرنسية لمستوى مستقل (C1/C2) للمذاكرة من خلال الأخبار الدولية والثقافة والتعابير اليومية'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'تمارين إذاعة فرنسا الدولية, تمارين فرنسية مستوى مستقل (C1/C2),تدرب على delf,تدرب على tcf,تدرب على dfp,اختبار مستوى لغة فرنسية مستقل (C1/C2),تمارين فرنسية مستقل (C1/C2) مصححة'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'تمارين استماع بالفرنسية لمستوى مستقل (C1/C2) - Français Facile - RFI']

    ],
    
    page_podcasts_mots_actualite: [
        //--- https://francaisfacile.rfi.fr/ar/podcasts/les-mots-de-l-actualit%C3%A9/
        ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Les mots de l'actualité"],
        ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ar/podcasts/les-mots-de-l-actualit%C3%A9/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['property_tag', 'article:published_time', '2022-07-06T08:57:57+00:00'],
        // ['property_tag', 'article:modified_time', '2023-03-29T07:47:31+00:00'],
        ['property_tag', 'article:tag', 'Yvan Amar'],
        // ['property_tag', 'article:tag', "Les mots de l'actualité"],
        // ['property_tag', 'article:tag', 'Magazine'],
        ['name_tag', 'description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
        ['name_tag', 'twitter:card', 'summary_large_image'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'keywords', "Les mots de l'actualité,Yvan Amar,Les mots de l'actualité,Magazine"],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "Les mots de l'actualité"]
    ]
    


},

/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "es", "pt-BR", "ru", "zh-Hans", "ar"], 

HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/es/", "/br/", "/ru/", "/cn/", "/ar/"],


    

/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
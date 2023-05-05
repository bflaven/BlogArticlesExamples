const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// FLE_CN
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

// FLE_CN
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

    //--- https://francaisfacile.rfi.fr/cn/
    ['url', 'slug', 'cn'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '通过国际新闻学习法语 - Le français facile avec RFI'],
    ['property_tag', 'og:description', '在关注国际新闻的同时学习法语的播客。通过适用于所有级别的练习来精进您的法语。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '在关注国际新闻的同时学习法语的播客。通过适用于所有级别的练习来精进您的法语。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', '轻松法语,学习法语,rfi savoirs,法语练习,练习法语,法语文字记录,学习法语的播客,对外法语,在线学习法语,免费学习法语,轻松学习法语,学习法语的理解力'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '通过国际新闻学习法语 - Le français facile avec RFI']


  ],
  page_podcasts_journal_français_facile: [
    //--- https://francaisfacile.rfi.fr/cn/podcasts/journal-en-fran%C3%A7ais-facile/
    ['url', 'slug', 'journal-en-fran%C3%A7ais-facile'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Journal en français facile'],
    ['property_tag', 'og:description', 'Un vrai journal d’information pour suivre l’actualité internationale……'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['property_tag', 'article:published_time', '2022-07-06T09:03:47+00:00'],
    ['property_tag', 'article:modified_time', '2023-03-17T08:31:05+00:00'],
    ['property_tag', 'article:tag', 'Journal'],
    ['property_tag', 'article:tag', 'Journal En Français Facile'],
    ['name_tag', 'description', 'Un vrai journal d’information pour suivre l’actualité internationale……'],
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
    //--- https://francaisfacile.rfi.fr/cn/podcasts/s%C3%A9lection/
    ['url', 'slug', 's%C3%A9lection'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '用于练习听力、理解和学习法语的播客 - Français Facile - RFI'],
    ['property_tag', 'og:description', '一系列精选的采用地道法语的RFI播客，并附有文字记录。访问《轻松法语新闻》、《新闻用语》、法语教学节目Les Voisins du 12……'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/podcasts/s%C3%A9lection/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '一系列精选的采用地道法语的RFI播客，并附有文字记录。访问《轻松法语新闻》、《新闻用语》、法语教学节目Les Voisins du 12……'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', '轻松法语,学习法语,rfi savoirs,播客法语文字记录,学习法语的播客,轻松学习法语,学习法语理解能力,学习法语口语,法语发音,成人学习法语的播客'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '用于练习听力、理解和学习法语的播客 - Français Facile - RFI']


  ],
  page_exercices: [
    //--- https://francaisfacile.rfi.fr/cn/exercices/
    ['url', 'slug', 'exercices'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '适用于所有等级的法语练习 - Français Facile - RFI'],
    ['property_tag', 'og:description', '从初级到高级的练习。听懂法语口语，从国际新闻广播的声音中学习。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/exercices/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '从初级到高级的练习。听懂法语口语，从国际新闻广播的声音中学习。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,法语练习,DELF练习,TCF练习,DFP练习,法语等级测试,初级法语练习,中级法语练习,高级法语练习,附有正确答案的法语练习'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '适用于所有等级的法语练习 - Français Facile - RFI']

  ],

  page_diplomes_tests: [
    //--- https://francaisfacile.rfi.fr/cn/dipl%C3%B4mes-tests/
    ['url', 'slug', 'dipl%C3%B4mes-tests'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '通过RFI准备法语DELF、TCF和DFP考试 - Français Facile - RFI'],
    ['property_tag', 'og:description', '在考试条件下，免费为DELF B2、TCF和职业法语证书（DFP）口试进行培训。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/dipl%C3%B4mes-tests/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '在考试条件下，免费为DELF B2、TCF和职业法语证书（DFP）口试进行培训。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'DELF,TCF,DFP,DELF练习,TCF练习,DFP练习,准备法语考试,法语等级测试'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '通过RFI准备法语DELF、TCF和DFP考试 - Français Facile - RFI']


  ],
  page_tester_son_niveau: [
    //--- https://francaisfacile.rfi.fr/cn/tester-son-niveau/
    ['url', 'slug', 'tester-son-niveau'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '测试您的法语等级 - Français Facile - RFI'],
    ['property_tag', 'og:description', '适合所有级别的听力练习，以便在日常生活、工作和大学中更好地用法语交流。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/tester-son-niveau/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '适合所有级别的听力练习，以便在日常生活、工作和大学中更好地用法语交流。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', '法语等级测试,法语测试,什么法语级别,法语训练,法语练习,rfi savoirs测试,对外法语（FLE）练习,法语分级考试'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '测试您的法语等级 - Français Facile - RFI']


  ],
  page_comprendre_actualite_français: [
    //--- https://francaisfacile.rfi.fr/cn/comprendre-actualit%C3%A9-fran%C3%A7ais/
    ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '通过新闻学习法语 - Français Facile - RFI'],
    ['property_tag', 'og:description', '基于国际新闻的各级听力练习：社会、经济、文化、地缘政治、环境、科学和健康领域。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '基于国际新闻的各级听力练习：社会、经济、文化、地缘政治、环境、科学和健康领域。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,法语练习,初级法语练习,中级法语练习,高级法语练习,学习新闻法语,新闻法语练习'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '通过新闻学习法语 - Français Facile - RFI']


  ],
  page_communiquer_quotidien: [
    //--- https://francaisfacile.rfi.fr/cn/communiquer-quotidien/
    ['url', 'slug', 'communiquer-quotidien'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '学习日常生活中的法语 - Français Facile - RFI'],
    ['property_tag', 'og:description', '适用于所有级别的练习，以改善在日常生活、工作和大学中的法语交流。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/communiquer-quotidien/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '适用于所有级别的练习，以改善在日常生活、工作和大学中的法语交流。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,法语练习,初级法语练习,中级法语练习,高级法语练习,学习日常法语,日常法语练习,法语表达,通过法语工作,学习法语以用于生活'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '学习日常生活中的法语 - Français Facile - RFI']

  ],
  page_reviser: [
    //--- https://francaisfacile.rfi.fr/cn/r%C3%A9viser/
    ['url', 'slug', 'r%C3%A9viser'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '复习法语的基本知识点 - Français Facile - RFI'],
    ['property_tag', 'og:description', '所有级别的练习都是为了复习关键的语言知识点：语法、词汇、语音、拼写、表达和新词。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/r%C3%A9viser/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '所有级别的练习都是为了复习关键的语言知识点：语法、词汇、语音、拼写、表达和新词。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,法语练习,初级法语练习,中级法语练习,高级法语练习,复习法语,法语词汇,法语语法,学习法语词汇,法语发音'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '复习法语的基本知识点 - Français Facile - RFI']


  ],
  page_enseigner: [
    //--- https://francaisfacile.rfi.fr/cn/enseigner/
    ['url', 'slug', 'enseigner'],
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

    //--- https://francaisfacile.rfi.fr/cn/exercices/a1/
    ['url', 'slug', 'a1'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '法语听力练习级别 入门级（A1） - Français Facile - RFI'],
    ['property_tag', 'og:description', '基于国际新闻、文化和日常表达的入门级（A1）级别的法语练习，以进行复习。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/exercices/a1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '基于国际新闻、文化和日常表达的入门级（A1）级别的法语练习，以进行复习。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs练习,入门级（A1）法语练习,DELF练习,TCF练习,DFP练习,入门级（A1）法语等级测试,入门级（A1）法语练习校正'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '法语听力练习级别 入门级（A1） - Français Facile - RFI']


  ],
  page_exercices_a2: [
    //--- https://francaisfacile.rfi.fr/cn/exercices/a2/
    ['url', 'slug', 'a2'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '法语听力练习级别 初级（A2） - Français Facile - RFI'],
    ['property_tag', 'og:description', '基于国际新闻、文化和日常表达的初级（A2）级别的法语练习，以进行复习。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/exercices/a2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '基于国际新闻、文化和日常表达的初级（A2）级别的法语练习，以进行复习。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs练习,初级（A2）法语练习,DELF练习,TCF练习,DFP练习,初级（A2）法语等级测试,初级（A2）法语练习校正'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '法语听力练习级别 初级（A2） - Français Facile - RFI']


  ],
  page_exercices_b1: [
    //--- https://francaisfacile.rfi.fr/cn/exercices/b1/
    ['url', 'slug', 'b1'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '法语听力练习级别 中级（B1） - Français Facile - RFI'],
    ['property_tag', 'og:description', '基于国际新闻、文化和日常表达的中级（B1）级别的法语练习，以进行复习。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/exercices/b1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '基于国际新闻、文化和日常表达的中级（B1）级别的法语练习，以进行复习。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs练习,中级（B1）法语练习,DELF练习,TCF练习,DFP练习,中级（B1）法语等级测试,中级（B1）法语练习校正'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '法语听力练习级别 中级（B1） - Français Facile - RFI']


  ],
  page_exercices_b2: [
    //--- https://francaisfacile.rfi.fr/cn/exercices/b2/
    ['url', 'slug', 'b2'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '法语听力练习级别 中高级（B2) - Français Facile - RFI'],
    ['property_tag', 'og:description', '基于国际新闻、文化和日常表达的中高级（B2)级别的法语练习，以进行复习。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/exercices/b2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '基于国际新闻、文化和日常表达的中高级（B2)级别的法语练习，以进行复习。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs练习,中高级（B2)法语练习,DELF练习,TCF练习,DFP练习,中高级（B2)法语等级测试,中高级（B2)法语练习校正'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '法语听力练习级别 中高级（B2) - Français Facile - RFI']


  ],
  page_exercices_c1c2: [
    //--- https://francaisfacile.rfi.fr/cn/exercices/c1c2/
    ['url', 'slug', 'c1c2'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', '法语听力练习级别 高级/精通级 (C1/C2) - Français Facile - RFI'],
    ['property_tag', 'og:description', '基于国际新闻、文化和日常表达的高级/精通级 (C1/C2)级别的法语练习，以进行复习。'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/exercices/c1c2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', '基于国际新闻、文化和日常表达的高级/精通级 (C1/C2)级别的法语练习，以进行复习。'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs练习,高级/精通级 (C1/C2)法语练习,DELF练习,TCF练习,DFP练习,高级/精通级 (C1/C2)法语等级测试,高级/精通级 (C1/C2)法语练习校正'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', '法语听力练习级别 高级/精通级 (C1/C2) - Français Facile - RFI']


  ],
  page_podcasts_mots_actualite: [
    //--- https://francaisfacile.rfi.fr/cn/podcasts/les-mots-de-l-actualit%C3%A9/
    ['url', 'slug', 'les-mots-de-l-actualit%C3%A9'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
    ['property_tag', 'og:locale', 'zh_CN'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Les mots de l'actualité"],
    ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur……'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/cn/podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['property_tag', 'article:published_time', '2022-07-06T08:57:57+00:00'],
    ['property_tag', 'article:modified_time', '2023-03-31T08:49:40+00:00'],
    ['property_tag', 'article:tag', 'Yvan Amar'],
    ['property_tag', 'article:tag', "Les mots de l'actualité"],
    ['property_tag', 'article:tag', 'Magazine'],
    ['name_tag', 'description', 'Une chronique pétillante de trois minutes qui explique les mots, leur……'],
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
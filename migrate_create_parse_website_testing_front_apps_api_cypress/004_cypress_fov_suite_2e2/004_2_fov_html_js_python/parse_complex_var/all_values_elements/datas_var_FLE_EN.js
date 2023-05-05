const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// FLE_EN
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

// FLE_EN
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
    //--- https://francaisfacile.rfi.fr/en/
    ['url', 'slug', ''], // leave it empty
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Learn French with the international news - Le français facile avec RFI'],
    ['property_tag', 'og:description', 'Podcasts to learn French while following the international news. Work on your French with exercises for all levels.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Podcasts to learn French while following the international news. Work on your French with exercises for all levels.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'easy french,learn french,rfi savoirs,french exercise,practise french,french transcription,learn french podcast,fle,learn french online,learn french for free,learn easy french,learn french comprehension'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Learn French with the international news - Le français facile avec RFI']

  ],
  page_podcasts_journal_français_facile: [
    //--- https://francaisfacile.rfi.fr/en/podcasts/journal-en-fran%C3%A7ais-facile/
    ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Journal en français facile'],
    ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['property_tag', 'article:published_time', '2022-07-06T09:03:47+00:00'],
    // ['property_tag', 'article:modified_time', '2023-03-17T08:31:05+00:00'],
    // ['property_tag', 'article:tag', 'Journal'],
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

    //--- https://francaisfacile.rfi.fr/en/podcasts/s%C3%A9lection/
    ['url', 'slug', 'podcasts/s%C3%A9lection/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Podcasts to listen to, understand, and learn French - Français Facile - RFI'],
    ['property_tag', 'og:description', "A selection of RFI podcasts in authentic French with the transcription. Find Le Journal en français facile, Les Mots de l'actualité, Les Voisins du 12 bis, etc."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/podcasts/s%C3%A9lection/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', "A selection of RFI podcasts in authentic French with the transcription. Find Le Journal en français facile, Les Mots de l'actualité, Les Voisins du 12 bis, etc."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'easy french,learn french,rfi savoirs,french transcription podcast,learn french podcast,learn easy french,learn french comprehension,learn oral french,french pronunciation,learn french for adults podcast'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Podcasts to listen to, understand, and learn French - Français Facile - RFI']

  ],
  page_exercices: [

    //--- https://francaisfacile.rfi.fr/en/exercices/
    ['url', 'slug', 'exercices/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Exercises at all levels to improve your French - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Exercises from beginner to advanced levels. Understand spoken French and learn from the sounds of international news on the radio.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/exercices/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Exercises from beginner to advanced levels. Understand spoken French and learn from the sounds of international news on the radio.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,french exercise,delf practice,tcf practice,dfp practice,french level test,beginner french exercise,intermediate french exercise,advanced french exercise,french exercise with correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Exercises at all levels to improve your French - Français Facile - RFI']


  ],

  page_diplomes_tests: [
    //--- https://francaisfacile.rfi.fr/en/dipl%C3%B4mes-tests/
    ['url', 'slug', 'dipl%C3%B4mes-tests/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Prepare for DELF, DCF and DFP tests with RFI - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Prepare for the oral tests DELF B2, TCF and the Diplôme de français professionnel (DFP) in exam conditions for free.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/dipl%C3%B4mes-tests/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Prepare for the oral tests DELF B2, TCF and the Diplôme de français professionnel (DFP) in exam conditions for free.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'delf,tcf,dfp,delf exercise,tcf exercise,dfp exercise,prepare french exam,test french level'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Prepare for DELF, DCF and DFP tests with RFI - Français Facile - RFI']


  ],
  page_tester_son_niveau: [

    //--- https://francaisfacile.rfi.fr/en/tester-son-niveau/
    ['url', 'slug', 'tester-son-niveau/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Test your French level - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Listening exercises for all levels, to communicate better in French in everyday situations, at work and university.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/tester-son-niveau/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Listening exercises for all levels, to communicate better in French in everyday situations, at work and university.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'test french level,french test,what french level,french practice,french exercise,rfi savoirs test,fle exercise,france placement test'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Test your French level - Français Facile - RFI']


  ],
  page_comprendre_actualite_français: [
    //--- https://francaisfacile.rfi.fr/en/comprendre-actualit%C3%A9-fran%C3%A7ais/
    ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Learn French with the news - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Listening exercises for all levels based on international news: society, economics, culture, geopolitics, the environment, science and health.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Listening exercises for all levels based on international news: society, economics, culture, geopolitics, the environment, science and health.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,french exercise,beginner french exercise,intermediate french exercise,advanced french exercise,learn french news,french news exercise'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Learn French with the news - Français Facile - RFI']


  ],
  page_communiquer_quotidien: [
    //--- https://francaisfacile.rfi.fr/en/communiquer-quotidien/
    ['url', 'slug', 'communiquer-quotidien/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Learn everyday French - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Exercises at all levels to communicate better in French in everyday situations, at work and university.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/communiquer-quotidien/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Exercises at all levels to communicate better in French in everyday situations, at work and university.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,french exercise,beginner french exercise,intermediate french exercise,advanced french exercise,learn everyday french,everyday french exercise,french expression,work in french,learn living french'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Learn everyday French - Français Facile - RFI']

  ],
  page_reviser: [
    //--- https://francaisfacile.rfi.fr/en/r%C3%A9viser/
    ['url', 'slug', 'r%C3%A9viser/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Revise the fundamentals of French - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Exercises at all levels to revise key language points: grammar, vocabulary, phonetics, spelling, expressions and neologisms.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/r%C3%A9viser/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Exercises at all levels to revise key language points: grammar, vocabulary, phonetics, spelling, expressions and neologisms.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,french exercise,beginner french exercise,intermediate french exercise,advanced french exercise,revise french,french vocabulary,french grammar,learn french vocabulary,french pronunciation'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Revise the fundamentals of French - Français Facile - RFI']


  ],
  page_enseigner: [
    //--- https://francaisfacile.rfi.fr/en/enseigner/
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
    //--- https://francaisfacile.rfi.fr/en/exercices/a1/
    ['url', 'slug', 'exercices/a1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Listening exercises in French at level Beginner (A1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'French exercises at Beginner (A1) level to revise based on international news, culture, and everyday expressions.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/exercices/a1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'French exercises at Beginner (A1) level to revise based on international news, culture, and everyday expressions.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs exercise,french exercise Beginner (A1),delf practice,tcf practice,dfp practice,test french level Beginner (A1),french level Beginner (A1),french exercise Beginner (A1) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Listening exercises in French at level Beginner (A1) - Français Facile - RFI']

  ],
  page_exercices_a2: [
    //--- https://francaisfacile.rfi.fr/en/exercices/a2/
    ['url', 'slug', 'exercices/a2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Listening exercises in French at level Elementary (A2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'French exercises at Elementary (A2) level to revise based on international news, culture, and everyday expressions.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/exercices/a2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'French exercises at Elementary (A2) level to revise based on international news, culture, and everyday expressions.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs exercise,french exercise Elementary (A2),delf practice,tcf practice,dfp practice,test french level Elementary (A2),french level Elementary (A2),french exercise Elementary (A2) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Listening exercises in French at level Elementary (A2) - Français Facile - RFI']


  ],
  page_exercices_b1: [
    //--- https://francaisfacile.rfi.fr/en/exercices/b1/
    ['url', 'slug', 'exercices/b1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Listening exercises in French at level Intermediate (B1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'French exercises at Intermediate (B1) level to revise based on international news, culture, and everyday expressions.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/exercices/b1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'French exercises at Intermediate (B1) level to revise based on international news, culture, and everyday expressions.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs exercise,french exercise Intermediate (B1),delf practice,tcf practice,dfp practice,test french level Intermediate (B1),french level Intermediate (B1),french exercise Intermediate (B1) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Listening exercises in French at level Intermediate (B1) - Français Facile - RFI']


  ],
  page_exercices_b2: [
    //--- https://francaisfacile.rfi.fr/en/exercices/b2/
    ['url', 'slug', 'exercices/b2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Listening exercises in French at level Advanced (B2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'French exercises at Advanced (B2) level to revise based on international news, culture, and everyday expressions.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/exercices/b2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'French exercises at Advanced (B2) level to revise based on international news, culture, and everyday expressions.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs exercise,french exercise Advanced (B2),delf practice,tcf practice,dfp practice,test french level Advanced (B2),french level Advanced (B2),french exercise Advanced (B2) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Listening exercises in French at level Advanced (B2) - Français Facile - RFI']

  ],
  page_exercices_c1c2: [
    //--- https://francaisfacile.rfi.fr/en/exercices/c1c2/
    ['url', 'slug', 'exercices/c1c2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Listening exercises in French at level Autonomous (C1/C2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'French exercises at Autonomous (C1/C2) level to revise based on international news, culture, and everyday expressions.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/exercices/c1c2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'French exercises at Autonomous (C1/C2) level to revise based on international news, culture, and everyday expressions.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs exercise,french exercise Autonomous (C1/C2),delf practice,tcf practice,dfp practice,test french level Autonomous (C1/C2),french level Autonomous (C1/C2),french exercise Autonomous (C1/C2) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Listening exercises in French at level Autonomous (C1/C2) - Français Facile - RFI']


  ],
  page_podcasts_mots_actualite: [
    //--- https://francaisfacile.rfi.fr/en/podcasts/les-mots-de-l-actualit%C3%A9/
    ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
    ['property_tag', 'og:locale', 'en_US'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Les mots de l'actualité"],
    ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/en/podcasts/les-mots-de-l-actualit%C3%A9/'],
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
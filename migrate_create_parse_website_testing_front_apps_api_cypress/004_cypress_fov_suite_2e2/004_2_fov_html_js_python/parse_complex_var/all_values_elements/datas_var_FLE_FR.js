const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// FLE_FR
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
      ['homepage', '', 3, 8],
      ['page_podcasts_journal_français_facile','podcasts/journal-en-fran%C3%A7ais-facile/', 1, 1],
      ['page_podcasts_selection','podcasts/s%C3%A9lection/', 3, 6],
      ['page_exercices','exercices/', 3, 5],
      ['page_diplomes_tests','dipl%C3%B4mes-tests/', 3, 5],
      ['page_tester_son_niveau','tester-son-niveau/', 1, 1],
      ['page_comprendre_actualite_français','comprendre-actualit%C3%A9-fran%C3%A7ais/', 3, 5],
      ['page_communiquer_quotidien','communiquer-quotidien/', 3, 5],
      ['page_reviser','r%C3%A9viser/', 3, 5],
      ['page_enseigner','enseigner/', 3, 5],
      ['page_exercices_a1','exercices/a1/', 3, 5],
      ['page_exercices_a2','exercices/a2/', 3, 5],
      ['page_exercices_b1','exercices/b1/', 3, 5],
      ['page_exercices_b2','exercices/b2/', 3, 5],
      ['page_exercices_c1c2','exercices/c1c2/', 3, 5],
      ['page_podcasts_mots_actualite','podcasts/les-mots-de-l-actualit%C3%A9/', 1, 1]
  ],


/**
*
* * SEO
* */ 

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
 * * META
 * */

MetaDataStuff: {
  homepage: [
    //--- https://francaisfacile.rfi.fr/fr/
    ['url', 'slug', ''], // leave it empty
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Le français facile avec RFI : Apprendre le français avec l'actualité internationale"],
    ['property_tag', 'og:description', "Des podcasts pour apprendre le français tout en suivant l'actualité internationale. Pratiquez le français grâce aux exercices pour tous les niveaux."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des podcasts pour apprendre le français tout en suivant l'actualité internationale. Pratiquez le français grâce aux exercices pour tous les niveaux."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'français facile, apprendre francais, rfi savoirs, exercice francais, pratiquer français, transcription français, podcast apprendre français, fle, apprendre francais en ligne, apprendre francais gratuitement, apprendre francais facile, apprendre comprehension francais'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Le français facile avec RFI : Apprendre le français avec l'actualité internationale"]

  ],
  page_podcasts_journal_français_facile: [
    //--- https://francaisfacile.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/
    ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Journal en français facile'],
    ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
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
    //--- https://francaisfacile.rfi.fr/fr/podcasts/s%C3%A9lection/
    ['url', 'slug', 'podcasts/s%C3%A9lection/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Les podcasts pour écouter, comprendre et apprendre le français - Français Facile - RFI'],
    ['property_tag', 'og:description', "Une sélection de podcasts RFI en français authentique accompagnés de leur transcription. Retrouvez le Journal en français facile, les Mots de l'actualité, les Voisins du 12 bis..."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/podcasts/s%C3%A9lection/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Une sélection de podcasts RFI en français authentique accompagnés de leur transcription. Retrouvez le Journal en français facile, les Mots de l'actualité, les Voisins du 12 bis..."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'français facile, apprendre francais, rfi savoirs, podcast transcription français, podcast apprendre français, apprendre francais facile, apprendre comprehension francais, apprendre francais oral, prononciation francais, podcast apprendre francais adulte'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Les podcasts pour écouter, comprendre et apprendre le français - Français Facile - RFI']


  ],
  page_exercices: [
    //--- https://francaisfacile.rfi.fr/fr/exercices/
    ['url', 'slug', 'exercices/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Exercices de tous niveaux pour pratiquer le français - Français Facile - RFI'],
    ['property_tag', 'og:description', "Des exercices de niveau débutant à avancé. Comprendre le français parlé et apprendre à partir de sons de la radio d'actualité internationale."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/exercices/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de niveau débutant à avancé. Comprendre le français parlé et apprendre à partir de sons de la radio d'actualité internationale."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, exercice francais, entrainement delf, entrainement tcf, entrainement dfp, tester niveau francais, exercice francais debutant, exercice francais intermediaire, exercice francais avance, exercice francais avec correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Exercices de tous niveaux pour pratiquer le français - Français Facile - RFI']

  ],

  page_diplomes_tests: [
    //--- https://francaisfacile.rfi.fr/fr/dipl%C3%B4mes-tests/
    ['url', 'slug', 'dipl%C3%B4mes-tests/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "S'entrainer au DELF, TCF et DFP avec RFI - Français Facile - RFI"],
    ['property_tag', 'og:description', 'Entraînez-vous gratuitement aux épreuves orales du DELF B2, du TCF et du Diplôme de français professionnel (DFP) dans les conditions d’examen.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/dipl%C3%B4mes-tests/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', 'Entraînez-vous gratuitement aux épreuves orales du DELF B2, du TCF et du Diplôme de français professionnel (DFP) dans les conditions d’examen.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'delf, tcf, dfp, exercice delf, exercice tcf, exercice fdp, preparer examen francais, tester niveau francais'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "S'entrainer au DELF, TCF et DFP avec RFI - Français Facile - RFI"]


  ],
  page_tester_son_niveau: [
    //--- https://francaisfacile.rfi.fr/fr/tester-son-niveau/
    ['url', 'slug', 'tester-son-niveau/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Tester son niveau de français - Français Facile - RFI'],
    ['property_tag', 'og:description', "Des exercices d'écoute pour tous les niveaux, pour mieux communiquer en français dans la vie quotidienne, au travail et à l'université."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/tester-son-niveau/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices d'écoute pour tous les niveaux, pour mieux communiquer en français dans la vie quotidienne, au travail et à l'université."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'tester niveau francais, test francais, quel niveau francais, entrainement francais, exercice francais, test rfi savoirs, exercice fle, test placement francais'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Tester son niveau de français - Français Facile - RFI']


  ],
  page_comprendre_actualite_français: [
    //--- https://francaisfacile.rfi.fr/fr/comprendre-actualit%C3%A9-fran%C3%A7ais/
    ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Apprendre le français avec l'actualité - Français Facile - RFI"],
    ['property_tag', 'og:description', "Des exercices d'écoute pour tous niveaux à partir de l'actualité internationale : société, économie, culture, géopolitique, environnement, science et santé."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices d'écoute pour tous niveaux à partir de l'actualité internationale : société, économie, culture, géopolitique, environnement, science et santé."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, exercice francais, exercice francais debutant, exercice francais intermediaire, exercice francais avance, apprendre francais actualite, exercice francais actualite'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Apprendre le français avec l'actualité - Français Facile - RFI"]

  ],
  page_communiquer_quotidien: [

    //--- https://francaisfacile.rfi.fr/fr/communiquer-quotidien/
    ['url', 'slug', 'communiquer-quotidien/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Apprendre le français de la vie quotidienne - Français Facile - RFI'],
    ['property_tag', 'og:description', "Des exercices de tous niveaux pour mieux communiquer en français dans la vie quotidienne, au travail et à l'université."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/communiquer-quotidien/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de tous niveaux pour mieux communiquer en français dans la vie quotidienne, au travail et à l'université."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, exercice francais, exercice francais debutant, exercice francais intermediaire, exercice francais avance, apprendre francais quotidien, exercice francais quotidien, expression francaise, travailler en francais, apprendre francais vivre'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Apprendre le français de la vie quotidienne - Français Facile - RFI']

  ],
  page_reviser: [
    //--- https://francaisfacile.rfi.fr/fr/r%C3%A9viser/
    ['url', 'slug', 'r%C3%A9viser/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Réviser les points de langue essentiels du français - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Des exercices de tous niveaux pour réviser les points de langue essentiels : grammaire, vocabulaire, phonétique, orthographe, expressions, néologismes.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/r%C3%A9viser/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', 'Des exercices de tous niveaux pour réviser les points de langue essentiels : grammaire, vocabulaire, phonétique, orthographe, expressions, néologismes.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, exercice francais, exercice francais debutant, exercice francais intermediaire, exercice francais avance, reviser francais, vocabulaire francais, grammaire francaise, apprendre vocabulaire francais, prononciation francais'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Réviser les points de langue essentiels du français - Français Facile - RFI']


  ],
  page_enseigner: [
    //--- https://francaisfacile.rfi.fr/fr/enseigner/
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
    //--- https://francaisfacile.rfi.fr/fr/exercices/a1/
    ['url', 'slug', 'exercices/a1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Exercices d'écoute en français de niveau débutant (A1) - Français Facile - RFI"],
    ['property_tag', 'og:description', "Des exercices de français de niveau débutant (A1) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/exercices/a1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de français de niveau débutant (A1) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'exercice rfi savoirs, exercice francais débutant (A1), entrainement delf, entrainement tcf, entrainement dfp, tester niveau francais débutant (A1), exercice francais débutant (A1) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Exercices d'écoute en français de niveau débutant (A1) - Français Facile - RFI"]

  ],
  page_exercices_a2: [
    //--- https://francaisfacile.rfi.fr/fr/exercices/a2/
    ['url', 'slug', 'exercices/a2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Exercices d'écoute en français de niveau Élémentaire (A2) - Français Facile - RFI"],
    ['property_tag', 'og:description', "Des exercices de français de niveau Élémentaire (A2) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/exercices/a2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de français de niveau Élémentaire (A2) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'exercice rfi savoirs, exercice francais Élémentaire (A2), entrainement delf, entrainement tcf, entrainement dfp, tester niveau francais Élémentaire (A2), exercice francais Élémentaire (A2) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Exercices d'écoute en français de niveau Élémentaire (A2) - Français Facile - RFI"]


  ],
  page_exercices_b1: [
    //--- https://francaisfacile.rfi.fr/fr/exercices/b1/
    ['url', 'slug', 'exercices/b1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Exercices d'écoute en français de niveau Intermédiaire (B1) - Français Facile - RFI"],
    ['property_tag', 'og:description', "Des exercices de français de niveau Intermédiaire (B1) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/exercices/b1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de français de niveau Intermédiaire (B1) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'exercice rfi savoirs, exercice francais Intermédiaire (B1), entrainement delf, entrainement tcf, entrainement dfp, tester niveau francais Intermédiaire (B1), exercice francais Intermédiaire (B1) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Exercices d'écoute en français de niveau Intermédiaire (B1) - Français Facile - RFI"]


  ],
  page_exercices_b2: [
    //--- https://francaisfacile.rfi.fr/fr/exercices/b2/
    ['url', 'slug', 'exercices/b2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Exercices d'écoute en français de niveau Avancé (B2) - Français Facile - RFI"],
    ['property_tag', 'og:description', "Des exercices de français de niveau Avancé (B2) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/exercices/b2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de français de niveau Avancé (B2) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'exercice rfi savoirs, exercice francais Avancé (B2), entrainement delf, entrainement tcf, entrainement dfp, tester niveau francais Avancé (B2), exercice francais Avancé (B2) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Exercices d'écoute en français de niveau Avancé (B2) - Français Facile - RFI"]


  ],
  page_exercices_c1c2: [
    //--- https://francaisfacile.rfi.fr/fr/exercices/c1c2/
    ['url', 'slug', 'exercices/c1c2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Exercices d'écoute en français de niveau Autonome (C1/C2) - Français Facile - RFI"],
    ['property_tag', 'og:description', "Des exercices de français de niveau Autonome (C1/C2) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/exercices/c1c2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['name_tag', 'description', "Des exercices de français de niveau Autonome (C1/C2) pour réviser autour de l'actualité internationale, de la culture et des expressions de la vie quotidienne."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'exercice rfi savoirs, exercice francais Autonome (C1/C2), entrainement delf, entrainement tcf, entrainement dfp, tester niveau francais Autonome (C1/C2), exercice francais Autonome (C1/C2) correction'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', "Exercices d'écoute en français de niveau Autonome (C1/C2) - Français Facile - RFI"]


  ],
  page_podcasts_mots_actualite: [
    //--- https://francaisfacile.rfi.fr/fr/podcasts/les-mots-de-l-actualit%C3%A9/
    ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
    ['property_tag', 'og:locale', 'fr_FR'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Les mots de l'actualité"],
    ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/fr/podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
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
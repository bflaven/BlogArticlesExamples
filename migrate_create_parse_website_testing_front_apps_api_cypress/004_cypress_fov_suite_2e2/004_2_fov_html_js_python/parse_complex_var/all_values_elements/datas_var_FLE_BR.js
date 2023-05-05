const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS


// FLE_BR
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
      ['page_podcasts_selection','podcasts/s%C3%A9lection/',3, 5],
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

// FLE_BR
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

        //--- https://francaisfacile.rfi.fr/br/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Aprenda francês com as atualidades internacionais - Le français facile avec RFI'],
        ['property_tag', 'og:description', 'Podcasts para aprender francês acompanhando as atualidades internacionais. Pratique francês com exercícios para todos os níveis.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Podcasts para aprender francês acompanhando as atualidades internacionais. Pratique francês com exercícios para todos os níveis.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'francês fácil,aprender francês, rfi savoirs,exercício francês,praticar francês,transcrição francês,podcast aprender francês,fle,aprender francês online,aprender francês gratuitamente,aprender francês fácil,aprender compreensão francês'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Aprenda francês com as atualidades internacionais - Le français facile avec RFI']

    ],
    page_podcasts_journal_français_facile: [

        //--- https://francaisfacile.rfi.fr/br/podcasts/journal-en-fran%C3%A7ais-facile/
        ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Journal en français facile'],
        ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/podcasts/journal-en-fran%C3%A7ais-facile/'],
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

        //--- https://francaisfacile.rfi.fr/br/podcasts/s%C3%A9lection/
        ['url', 'slug', 'podcasts/s%C3%A9lection/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Podcasts para ouvir, entender e aprender francês - Français Facile - RFI'],
        ['property_tag', 'og:description', "Uma seleção de podcasts RFI em francês autêntico acompanhados de suas transcrições. Encontre Le Journal en français facile, Les Mots de l'actualité, Les Voisins du 12 bis..."],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/podcasts/s%C3%A9lection/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', "Uma seleção de podcasts RFI em francês autêntico acompanhados de suas transcrições. Encontre Le Journal en français facile, Les Mots de l'actualité, Les Voisins du 12 bis..."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'francês fácil,aprender francês,rfi savoirs,podcast transcrição francês,podcast aprender francês,aprender francês fácil,aprender compreensão francês,aprender francês oral,pronúncia francês,podcast aprender francês adulto'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Podcasts para ouvir, entender e aprender francês - Français Facile - RFI']


    ],
    page_exercices: [

        //--- https://francaisfacile.rfi.fr/br/exercices/
        ['url', 'slug', 'exercices/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Exercícios de todos os níveis para praticar francês - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios do nível iniciante ao avançado. Entenda o francês falado e aprenda a partir de áudios de programas de atualidades internacionais.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/exercices/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios do nível iniciante ao avançado. Entenda o francês falado e aprenda a partir de áudios de programas de atualidades internacionais.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'rfi savoirs,exercício francês,preparação delf,preparação tcf,preparação dfp,testar nível francês,exercício francês iniciante,exercício francês intermediário,exercício francês avançado,exercício francês com correção'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Exercícios de todos os níveis para praticar francês - Français Facile - RFI']


    ],

    page_diplomes_tests: [
        //--- https://francaisfacile.rfi.fr/br/dipl%C3%B4mes-tests/
        ['url', 'slug', 'dipl%C3%B4mes-tests/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Prepare-se para o DELF, TCF e DFP com a RFI - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Prepare-se gratuitamente para as provas orais do DELF B2, do TCF e do Diplôme de français professionnel (DFP) nas mesmas condições do exame.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/dipl%C3%B4mes-tests/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Prepare-se gratuitamente para as provas orais do DELF B2, do TCF e do Diplôme de français professionnel (DFP) nas mesmas condições do exame.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'delf,tcf,dfp,exercício delf,exercício tcf,exercício dfp,preparar exame francês,testar nível francês'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Prepare-se para o DELF, TCF e DFP com a RFI - Français Facile - RFI']



    ],
    page_tester_son_niveau: [
        //--- https://francaisfacile.rfi.fr/br/tester-son-niveau/
        ['url', 'slug', 'tester-son-niveau/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Teste seu nível de francês - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios de compreensão oral para todos os níveis, para se comunicar melhor em francês no dia a dia, no trabalho e na universidade.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/tester-son-niveau/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios de compreensão oral para todos os níveis, para se comunicar melhor em francês no dia a dia, no trabalho e na universidade.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'testar nível francês,teste francês,qual nível francês,treino francês,exercício francês,teste rfi savoirs,exercício fle,teste nivelamento francês'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Teste seu nível de francês - Français Facile - RFI']


    ],
    page_comprendre_actualite_français: [
        //--- https://francaisfacile.rfi.fr/br/comprendre-actualit%C3%A9-fran%C3%A7ais/
        ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Aprenda francês com as atualidades - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios de compreensão oral para todos os níveis a partir das atualidades internacionais: sociedade, economia, cultura, geopolítica, meio ambiente, ciência e saúde.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios de compreensão oral para todos os níveis a partir das atualidades internacionais: sociedade, economia, cultura, geopolítica, meio ambiente, ciência e saúde.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'rfi savoirs,exercício francês,exercício francês iniciante,exercício francês intermediário,exercício francês avançado,aprender francês atualidade,exercício francês atualidade'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Aprenda francês com as atualidades - Français Facile - RFI']

    ],
    page_communiquer_quotidien: [
        //--- https://francaisfacile.rfi.fr/br/communiquer-quotidien/
        ['url', 'slug', 'communiquer-quotidien/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Aprenda o francês do dia a dia - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios de todos os níveis para se comunicar melhor em francês no dia a dia, no trabalho e na universidade.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/communiquer-quotidien/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios de todos os níveis para se comunicar melhor em francês no dia a dia, no trabalho e na universidade.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'rfi savoirs,exercício francês,exercício francês iniciante,exercício francês intermediário,exercício francês avançado,aprender francês cotidiano,exercício francês cotidiano,expressão francesa,trabalhar em francês,aprender francês viver'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Aprenda o francês do dia a dia - Français Facile - RFI']


    ],
    page_reviser: [

        //--- https://francaisfacile.rfi.fr/br/r%C3%A9viser/
        ['url', 'slug', 'r%C3%A9viser/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Estude as questões mais importantes do francês - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios de todos os níveis para estudar as questões mais importantes do francês: gramática, vocabulário, fonética, ortografia, expressões, neologismos.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/r%C3%A9viser/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios de todos os níveis para estudar as questões mais importantes do francês: gramática, vocabulário, fonética, ortografia, expressões, neologismos.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'rfi savoirs,exercício francês,exercício francês iniciante,exercício francês intermediário,exercício francês avançado,estudar francês,vocabulário francês,gramática francesa,aprender vocabulário francês,pronúncia francês'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Estude as questões mais importantes do francês - Français Facile - RFI']

    ],
    page_enseigner: [
        //--- https://francaisfacile.rfi.fr/br/enseigner/
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

        //--- https://francaisfacile.rfi.fr/br/exercices/a1/
        ['url', 'slug', 'exercices/a1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Exercícios orais em francês de nível Iniciante (A1) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios em francês de nível Iniciante (A1) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/exercices/a1/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios em francês de nível Iniciante (A1) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'exercício rfi savoirs,exercício francês Iniciante (A1),preparação delf,preparação tcf,preparação dfp,testar nível francês Iniciante (A1),exercício francês Iniciante (A1) correção'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Exercícios orais em francês de nível Iniciante (A1) - Français Facile - RFI']

    ],
    page_exercices_a2: [

        //--- https://francaisfacile.rfi.fr/br/exercices/a2/
        ['url', 'slug', 'exercices/a2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Exercícios orais em francês de nível Básico (A2) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios em francês de nível Básico (A2) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/exercices/a2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios em francês de nível Básico (A2) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'exercício rfi savoirs,exercício francês Básico (A2),preparação delf,preparação tcf,preparação dfp,testar nível francês Básico (A2),exercício francês Básico (A2) correção'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Exercícios orais em francês de nível Básico (A2) - Français Facile - RFI']

    ],
    page_exercices_b1: [

        //--- https://francaisfacile.rfi.fr/br/exercices/b1/
        ['url', 'slug', 'exercices/b1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Exercícios orais em francês de nível Intermediário (B1) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios em francês de nível Intermediário (B1) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/exercices/b1/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios em francês de nível Intermediário (B1) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'exercício rfi savoirs,exercício francês Intermediário (B1),preparação delf,preparação tcf,preparação dfp,testar nível francês Intermediário (B1),exercício francês Intermediário (B1) correção'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Exercícios orais em francês de nível Intermediário (B1) - Français Facile - RFI']

    ],
    page_exercices_b2: [

        //--- https://francaisfacile.rfi.fr/br/exercices/b2/
        ['url', 'slug', 'exercices/b2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Exercícios orais em francês de nível Avançado (B2) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios em francês de nível Avançado (B2) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/exercices/b2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios em francês de nível Avançado (B2) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'exercício rfi savoirs,exercício francês Avançado (B2),preparação delf,preparação tcf,preparação dfp,testar nível francês Avançado (B2),exercício francês Avançado (B2) correção'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Exercícios orais em francês de nível Avançado (B2) - Français Facile - RFI']

    ],
    page_exercices_c1c2: [
        //--- https://francaisfacile.rfi.fr/br/exercices/c1c2/
        ['url', 'slug', 'exercices/c1c2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Exercícios orais em francês de nível Autônomo (C1/C2) - Français Facile - RFI'],
        ['property_tag', 'og:description', 'Exercícios em francês de nível Autônomo (C1/C2) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/exercices/c1c2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['name_tag', 'description', 'Exercícios em francês de nível Autônomo (C1/C2) para estudar com as atualidades internacionais, de cultura e expressões da vida cotidiana.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_FrFacile'],
        ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
        ['name_tag', 'keywords', 'exercício rfi savoirs,exercício francês Autônomo (C1/C2),preparação delf,preparação tcf,preparação dfp,testar nível francês Autônomo (C1/C2),exercício francês Autônomo (C1/C2) correção'],
        ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
        ['name_tag', 'application-name', 'Français Facile - RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Exercícios orais em francês de nível Autônomo (C1/C2) - Français Facile - RFI']

    ],
    page_podcasts_mots_actualite: [

        //--- https://francaisfacile.rfi.fr/br/podcasts/les-mots-de-l-actualit%C3%A9/
        ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'Français Facile - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Les mots de l'actualité"],
        ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
        ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/br/podcasts/les-mots-de-l-actualit%C3%A9/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '104243832961620'],
        ['property_tag', 'article:published_time', '2022-07-06T08:57:57+00:00'],
        // ['property_tag', 'article:modified_time', '2023-03-30T04:26:46+00:00'],
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

HREF_LANG_VALUES: ["fr", "en", "es", "br", "ru", "zh-Hans", "ar"], 

HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/es/", "/br/", "/ru/", "/cn/", "/ar/"],


    

/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
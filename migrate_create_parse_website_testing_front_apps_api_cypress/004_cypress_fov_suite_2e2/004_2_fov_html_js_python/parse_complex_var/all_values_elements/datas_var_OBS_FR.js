const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS

// OBS_FR
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
HotTagsCounterEnd:2, 
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
listenStatus:false,
listenDivNbPosition:'div:nth-child(2)',
listenDescription:'Main Navigation :: Testing the Burger Menu :: listen', 


/* 
* thematic-1
*/
thematicOneCounterStart:1, 
thematicOneCounterEnd:4, 
thematicOneType:'thematic-1',
thematicOneStatus:true,
thematicOneDivNbPosition:'div:nth-child(2)',
thematicOneDescription:'Main Navigation :: Testing the Burger Menu :: thematic-1 :: thematic tag',

/* 
* thematic-2
*/
thematicTwoCounterStart:1,
thematicTwoCounterEnd:6,
thematicTwoType:'thematic-2',
thematicTwoStatus:true,
thematicTwoDivNbPosition:'div:nth-child(3)',
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
socialDivNbPosition:'div:nth-child(4)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 9],
        ['page_tous_les_articles', 'tous-les-articles/', 1, 1], 
        ['page_tag_europe', 'tag/europe/', 1, 1], 
        ['page_tag_environnement', 'tag/environnement/', 1, 1], 
        ['page_tag_droits_homme', 'tag/droits-de-l-homme/', 1, 1]
    ],




/**
*
* * SEO
* */
// OBS_FR
NavActualitesSlugNewsByRegion: [
        ['page_tous_les_articles', 'tous-les-articles/'], 
        ['page_tag_europe', 'tag/europe/'], 
        ['page_tag_environnement', 'tag/environnement/'],
        ['page_tag_droits_homme', 'tag/droits-de-l-homme/']
    ],

// OBS_FR
NavActualitesSlugNewsByRegionVersus: [
    ['page_tous_les_articles', 'tous-les-articles/'],
    ['page_tag_europe', 'tag/europe/'],
    ['page_tag_environnement', 'tag/environnement/'],
    ['page_tag_droits_homme', 'tag/droits-de-l-homme/'],
    ['page_tag_droits_homme', 'tag/droits-de-l-homme/']
],


/**
*
* * META
* */

MetaDataStuff: {
    homepage: [
        //--- https://observers.france24.com/fr/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_fr.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'Les Observateurs - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Les Observateurs de France 24. Filmer, vérifier, témoigner.'],
        ['property_tag', 'og:description', "Un site et des émissions d'actualité internationale réalisés à partir d'images envoyées par des observateurs amateurs et vérifiées par des journalistes. Analyse, décryptage, vérification, info ou intox…"],
        ['property_tag', 'og:url', 'https://observers.france24.com/fr/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', "Un site et des émissions d'actualité internationale réalisés à partir d'images envoyées par des observateurs amateurs et vérifiées par des journalistes. Analyse, décryptage, vérification, info ou intox…"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observateurs'],
        ['name_tag', 'twitter:creator', '@Observateurs'],
        ['name_tag', 'keywords', 'infos,actualites,news,information,international,observateurs,vidéos,photos,amateurs,témoignages,intox'],
        ['name_tag', 'apple-mobile-web-app-title', 'Les Observateurs - France 24'],
        ['name_tag', 'application-name', 'Les Observateurs - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Les Observateurs de France 24. Filmer, vérifier, témoigner.']


    ],
    page_tous_les_articles: [
        //--- https://observers.france24.com/fr/tous-les-articles/
        ['url', 'slug', 'tous-les-articles/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_fr.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'Les Observateurs - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Tous les articles des Observateurs de France 24.'],
        ['property_tag', 'og:description', "Suivez l'actualité internationale avec les meilleures images amateurs et témoignages de nos Observateurs. Tous les contenus sont vérifiés et expliqués pas nos journalistes."],
        ['property_tag', 'og:url', 'https://observers.france24.com/fr/tous-les-articles/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', "Suivez l'actualité internationale avec les meilleures images amateurs et témoignages de nos Observateurs. Tous les contenus sont vérifiés et expliqués pas nos journalistes."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observateurs'],
        ['name_tag', 'twitter:creator', '@Observateurs'],
        ['name_tag', 'keywords', 'infos,actualites,news,articles,international,observateurs,amateurs,témoignages,photos,vidéos'],
        ['name_tag', 'apple-mobile-web-app-title', 'Les Observateurs - France 24'],
        ['name_tag', 'application-name', 'Les Observateurs - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Tous les articles des Observateurs de France 24.']


    ],
    page_tag_europe: [
        //--- https://observers.france24.com/fr/tag/europe/
        ['url', 'slug', 'tag/europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_fr.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'Les Observateurs - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Europe : info, vidéos, reportages et analyses - Les Observateurs - France 24'],
        ['property_tag', 'og:description', "Retrouvez toute l'actualité internationale et les décryptages Europe à lire et à revoir en replay sur Les Observateurs de France 24"],
        ['property_tag', 'og:url', 'https://observers.france24.com/fr/tag/europe/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', "Retrouvez toute l'actualité internationale et les décryptages Europe à lire et à revoir en replay sur Les Observateurs de France 24"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observateurs'],
        ['name_tag', 'twitter:creator', '@Observateurs'],
        ['name_tag', 'apple-mobile-web-app-title', 'Les Observateurs - France 24'],
        ['name_tag', 'application-name', 'Les Observateurs - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Europe : info, vidéos, reportages et analyses - Les Observateurs - France 24']

    ],
    page_tag_environnement: [
        //--- https://observers.france24.com/fr/tag/environnement/
        ['url', 'slug', 'tag/environnement/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_fr.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'Les Observateurs - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'environnement : info, vidéos, reportages et analyses - Les Observateurs - France 24'],
        ['property_tag', 'og:description', "Retrouvez toute l'actualité internationale et les décryptages environnement à lire et à revoir en replay sur Les Observateurs de France 24"],
        ['property_tag', 'og:url', 'https://observers.france24.com/fr/tag/environnement/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', "Retrouvez toute l'actualité internationale et les décryptages environnement à lire et à revoir en replay sur Les Observateurs de France 24"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observateurs'],
        ['name_tag', 'twitter:creator', '@Observateurs'],
        ['name_tag', 'apple-mobile-web-app-title', 'Les Observateurs - France 24'],
        ['name_tag', 'application-name', 'Les Observateurs - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'environnement : info, vidéos, reportages et analyses - Les Observateurs - France 24']


    ],
    page_tag_droits_homme: [
        //--- https://observers.france24.com/fr/tag/droits-de-l-homme/
        ['url', 'slug', 'tag/droits-de-l-homme/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_fr.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'Les Observateurs - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "droits de l'Homme : info, vidéos, reportages et analyses - Les Observateurs - France 24"],
        ['property_tag', 'og:description', "Retrouvez toute l'actualité internationale et les décryptages droits de l'Homme à lire et à revoir en replay sur Les Observateurs de France 24"],
        ['property_tag', 'og:url', 'https://observers.france24.com/fr/tag/droits-de-l-homme/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', "Retrouvez toute l'actualité internationale et les décryptages droits de l'Homme à lire et à revoir en replay sur Les Observateurs de France 24"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observateurs'],
        ['name_tag', 'twitter:creator', '@Observateurs'],
        ['name_tag', 'apple-mobile-web-app-title', 'Les Observateurs - France 24'],
        ['name_tag', 'application-name', 'Les Observateurs - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "droits de l'Homme : info, vidéos, reportages et analyses - Les Observateurs - France 24"]

    ]
},

/**
*
* * LANGUAGES
* */ 

HREF_LANG_VALUES: ["fr", "en", "ar", "fa"],
HREF_LANG_VALUES_SLUG: ["/fr/", "/en/", "/ar/", "https://observers.rfi.fr/fa/"],

        
/*--- END ---*/

};


// do export theme
module.exports = {
  globalDataTest
}
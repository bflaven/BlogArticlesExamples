const globalDataTest = {


TOTEM_SHRUG_MAN_CYPRESS:'***  ¯\_(ツ)_/¯*** ', // globalDataTest.TOTEM_SHRUG_MAN_CYPRESS



// RFI_VI


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
listenCounterEnd:4, 
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
thematicTwoCounterEnd:7,
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
socialCounterEnd:7,
socialType:'social',
socialStatus:true,
socialDivNbPosition:'div:nth-child(5)',
socialDescription:'Main Navigation :: Testing the Burger Menu :: social',

/**
*
* *** HTML OPTIMIZATION ***
* */

NavActualitesSlugNewsByRegionTestingZoning: [
        ['homepage', '', 2, 6],
        ['page_vietnam', 'vi%E1%BB%87t-nam/', 4, 9],
        ['page_asie', 'ch%C3%A2u-%C3%A1/', 4, 9],
        ['page_france', 'ph%C3%A1p/', 4, 9],
        ['page_international', 'qu%E1%BB%91c-t%E1%BA%BF/', 4, 9], 
        ['page_analyser', 'ph%C3%A2n-t%C3%ADch/', 4, 9],
        ['page_point_actualite', '%C4%91i%E1%BB%83m-b%C3%A1o/', 4, 8]
    ],


/**
*
* * SEO
* */  

NavActualitesSlugNewsByRegion: [
        ['page_vietnam', 'vi%E1%BB%87t-nam/'], 
        ['page_asie', 'ch%C3%A2u-%C3%A1/'], 
        ['page_france', 'ph%C3%A1p/'], 
        ['page_international', 'qu%E1%BB%91c-t%E1%BA%BF/'], 
        ['page_analyser', 'ph%C3%A2n-t%C3%ADch/'], 
        ['page_point_actualite', '%C4%91i%E1%BB%83m-b%C3%A1o/']
],

// RFI_VI
NavActualitesSlugNewsByRegionVersus: [
    ['page_vietnam', 'việt-nam/'],
    ['page_asie', 'châu-á/'],
    ['page_france', 'pháp/'],
    ['page_international', 'quốc-tế/'],
    ['page_analyser', 'phân-tích/'],
    ['page_point_actualite', 'điểm-báo/'],
    ['page_point_actualite', 'điểm-báo/']
],


/**
*
* * META
* */

MetaDataStuff: {
    homepage: [

        //--- https://www.rfi.fr/vi/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Thời sự, thông tin trực tiếp - Đài phát thanh quốc tế Pháp - RFI'],
        ['property_tag', 'og:description', 'Thời sự bằng tiếng Việt trên RFI: các thông tin chính trị, kinh tế, văn hóa và thể thao được phát trực tiếp, nghe đài, xem video và nhiều mục khác trên rfi.fr  '],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Thời sự bằng tiếng Việt trên RFI: các thông tin chính trị, kinh tế, văn hóa và thể thao được phát trực tiếp, nghe đài, xem video và nhiều mục khác trên rfi.fr  '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'Thời sự,thông tin,trực tiếp,kinh tế,văn hóa,thể thao,phát thanh,chương trình,pháp,việt nam,phân tích,quốc tế'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Thời sự, thông tin trực tiếp - Đài phát thanh quốc tế Pháp - RFI']

    ],
    page_vietnam: [

        //--- https://www.rfi.fr/vi/vi%E1%BB%87t-nam/
        ['url', 'slug', 'vi%E1%BB%87t-nam/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Thời sự Việt Nam : Tin kinh tế và chính trị - RFI'],
        ['property_tag', 'og:description', 'Thời sự Việt Nam qua RFI : Chính trị, kinh tế, văn hóa, thể thao'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/vi%E1%BB%87t-nam/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Thời sự Việt Nam qua RFI : Chính trị, kinh tế, văn hóa, thể thao'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'việt nam,Tin tức,Chính trị,kinh tế,văn hóa,thể thao'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Thời sự Việt Nam : Tin kinh tế và chính trị - RFI']

    ],
    page_asie: [

        //--- https://www.rfi.fr/vi/ch%C3%A2u-%C3%A1/
        ['url', 'slug', 'ch%C3%A2u-%C3%A1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Thời sự Châu Á : Thông tin kinh tế và chính trị - RFI'],
        ['property_tag', 'og:description', 'Thời sự kinh tế, chính trị Châu Á qua RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/ch%C3%A2u-%C3%A1/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Thời sự kinh tế, chính trị Châu Á qua RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'châu á,kinh tế,thông tin,chính trị,văn hóa,thẽ thao,HỒNG KÔNG,TRUNG QUỐC,ÚC,ĐÀI LOAN,VIỆT NAM,NHẬT BẢN,HÀN QUỐC'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Thời sự Châu Á : Thông tin kinh tế và chính trị - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/vi/ph%C3%A1p/
        ['url', 'slug', 'ph%C3%A1p/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Thời sự kinh tế và chính trị Pháp - RFI'],
        ['property_tag', 'og:description', 'Tin tức chính trị và thời sự kinh tế Pháp mới nhất trên RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/ph%C3%A1p/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Tin tức chính trị và thời sự kinh tế Pháp mới nhất trên RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'Pháp,kinh tế,chính trị,Tin tức,VĂN HÓA'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Thời sự kinh tế và chính trị Pháp - RFI']

    ],
    page_international: [

        //--- https://www.rfi.fr/vi/qu%E1%BB%91c-t%E1%BA%BF/
        ['url', 'slug', 'qu%E1%BB%91c-t%E1%BA%BF/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Thời sự quốc tế và thế giới - RFI'],
        ['property_tag', 'og:description', 'Theo dõi thời sự quốc tế và thế giới qua RFI : Các chương trình phát thanh, podcast, phỏng vấn…'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/qu%E1%BB%91c-t%E1%BA%BF/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Theo dõi thời sự quốc tế và thế giới qua RFI : Các chương trình phát thanh, podcast, phỏng vấn…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'quốc tế,thế giới,thời sự'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Thời sự quốc tế và thế giới - RFI']

    ],
    page_analyser: [

        //--- https://www.rfi.fr/vi/ph%C3%A2n-t%C3%ADch/
        ['url', 'slug', 'ph%C3%A2n-t%C3%ADch/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Phân tích và tranh luận thời sự - RFI'],
        ['property_tag', 'og:description', 'Các phân tích mới nhất về thời sự quốc tế trên RFI : Tranh luận, chương trình phát thanh, podcast…'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/ph%C3%A2n-t%C3%ADch/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Các phân tích mới nhất về thời sự quốc tế trên RFI : Tranh luận, chương trình phát thanh, podcast…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'phân tích,quốc tế,tranh luận,chương trình phát thanh,podcast'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Phân tích và tranh luận thời sự - RFI']

    ],
    page_point_actualite: [

        //--- https://www.rfi.fr/vi/%C4%91i%E1%BB%83m-b%C3%A1o/
        ['url', 'slug', '%C4%91i%E1%BB%83m-b%C3%A1o/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'vi_VN'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Điểm Báo Việt Nam của RFI Tiếng Việt'],
        ['property_tag', 'og:description', 'Điểm Báo Việt Nam của RFI Tiếng Việt'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/vi/%C4%91i%E1%BB%83m-b%C3%A1o/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155460521146066'],
        ['name_tag', 'description', 'Điểm Báo Việt Nam của RFI Tiếng Việt'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Vi'],
        ['name_tag', 'twitter:creator', '@RFI_Vi'],
        ['name_tag', 'keywords', 'Điểm Báo,Việt Nam'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Điểm Báo Việt Nam của RFI Tiếng Việt']


    ]
},

/**
*
* * PLAYER
* */            

NavPlayerLinks: [['en_direct', 'ph%C3%A1t-tr%E1%BB%B1c-ti%E1%BA%BFp']],

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
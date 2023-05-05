/*! E2E-FOV-CYPRESS 
*  ***********************************************
*  Filename ::: utilityGetStuffForFov.js
* Method 3: Run Your Cypress Tests in Multiple Environments With Cypress Environment Variable and Custom Utility Class
* Source: https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
*  ***********************************************
* 
*/
/*

### HOW-TO-USE
- 2. parameter --env ex: --env ENV=staging
! --env BRAND_LANG=RFI_ES 
! --env BRAND_LANG=RFI_FR 
! --env BRAND_LANG=RFI_RU 
! --env BRAND_LANG=F24_EN 
! --env BRAND_LANG=OBS_EN 
! --env BRAND_LANG=MCD_AR 
--- to be continued

//Get the value of environment variable e.g --env BRAND_LANG=F24_EN 
let brandLang = Cypress.env('BRAND_LANG'); 


*/

import {globalValues} from '../fixtures/allValues';

let brandLang = globalValues.BRAND_LANG;
let deviceType = globalValues.DEVICE_TYPE;

export class UtilityFov {

    // private class features
  #brandLang;
  #deviceType;

    constructor(brandLang, deviceType) {
        
      this.#brandLang = brandLang;
      this.#deviceType = deviceType;

    }//EOC

    getSelectionVerifier(brandLang) {
        // let brandLang = Cypress.env('BRAND_LANG');

        switch (brandLang) {

            // F24
            case 'F24_EN':
                return 'F24_EN';
            break;
            case 'F24_ES':
                return 'F24_ES';
            break;
            case 'F24_FR':
                return 'F24_FR';
            break;
            case 'F24_AR':
                return 'F24_AR';
            break;

            // RFI
            case 'RFI_EN':
                return 'RFI_EN';
            break;
            case 'RFI_CN':
                return 'RFI_CN';
            break;
            case 'RFI_ES':
                return 'RFI_ES';
            break;
            case 'RFI_FA':
                return 'RFI_FA';
            break;
            case 'RFI_HA':
                return 'RFI_HA';
            break;
            case 'RFI_KM':
                return 'RFI_KM';
            break;
            case 'RFI_SW':
                return 'RFI_SW';
            break;
            case 'RFI_MA':
                return 'RFI_MA';
            break;
            case 'RFI_FF':
                return 'RFI_FF';
            break;
            case 'RFI_PT':
                return 'RFI_PT';
            break;
            case 'RFI_BR':
                return 'RFI_BR';
            break;
            case 'RFI_RO':
                return 'RFI_RO';
            break;
            case 'RFI_RU':
                return 'RFI_RU';
            break;
            case 'RFI_UK':
                return 'RFI_UK';
            break;
            case 'RFI_VI':
                return 'RFI_VI';
            break;

            // MCD
            case 'MCD_AR':
                return 'MCD_AR';
            break;

            // FLE
            case 'FLE_FR':
                return 'FLE_FR';
            break;

            case 'FLE_ES':
                return 'FLE_ES';
            break;

            case 'FLE_RU':
                return 'FLE_RU';
            break;

            case 'FLE_AR':
                return 'FLE_AR';
            break;

            case 'FLE_EN':
                return 'FLE_EN';
            break;

            case 'FLE_BR':
                return 'FLE_BR';
            break;

            // OBS
            case 'OBS_FR':
                return 'OBS_FR';
            break;
            case 'OBS_EN':
                return 'OBS_EN';
            break;
            case 'OBS_AR':
                return 'OBS_AR';
            break;
            case 'OBS_FA':
                return 'OBS_FA';
            break;
            // Default
            default:
                // RFI_FR
                return 'RFI_FR';
            break;

        }// EOS


    }// EOF


/*
isMobile: device === 'mobile',
isTablet: device === 'tablet',
isDesktop: device === 'desktop',

https://docs.cypress.io/api/commands/viewport
 */
    getDeviceType(deviceType) {

        switch (deviceType) {

            case 'mobile':
                
                
                var userAgent = 'iphone-6';
                var userAgentOrientation = 'portrait'; // portrait or landscape
                var viewportWidth = 375;
                var viewportHeight = 667;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
            break;
            case 'tablet':
                
                var userAgent = 'ipad-2';
                var userAgentOrientation = 'landscape'; // portrait or landscape
                var viewportWidth = 768;
                var viewportHeight = 1024;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
                
            break;
            // Default is desktop
            default:
                // desktop
                var userAgent = 'macbook-13';
                var userAgentOrientation = 'portrait'; // useless
                var viewportWidth = 1280;
                var viewportHeight = 800;

                

                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
                
            break;

            }// EOS



        }// EOF

        getSetInitPerBrandLang(brandLang) {
        // let brandLang = Cypress.env('BRAND_LANG');

            switch (brandLang) {

                    // F24
                    case 'F24_EN':
/**
*
* * SEO
* */                      
    

// F24_EN
var NavActualitesSlugNewsByRegion = [
        ['page_france', 'france/'],
        ['page_africa', 'africa/'],
        ['page_middle_east', 'middle-east/'],
        ['page_americas', 'americas/'],
        ['page_europe', 'europe/'],
        ['page_asia_pacific', 'asia-pacific/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [
        // https://www.france24.com/en/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'France 24 - International breaking news, top stories and headlines'],
        ['property_tag', 'og:description', 'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'breaking,news,international,headlines,stories,reports,live,tv,videos'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'France 24 - International breaking news, top stories and headlines']
    ],
    page_france: [
        // https://www.france24.com/en/france/
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Latest news reports on FRANCE, French politics and culture - France 24'],
        ['property_tag', 'og:description', 'Get all the latest breaking news and reports on FRANCE here. French headlines, politics and culture on news channel France 24'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/france/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Get all the latest breaking news and reports on FRANCE here. French headlines, politics and culture on news channel France 24'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'france,politics,culture,society,international,breaking news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Latest news reports on FRANCE, French politics and culture - France 24']

    ],
    page_africa: [
        // https://www.france24.com/en/africa/
        ['url', 'slug', 'africa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Breaking news from AFRICA, Maghreb and Sub-Saharan Africa - France 24'],
        ['property_tag', 'og:description', 'Get breaking news, the latest international news & multimedia reports on Africa here. South Africa, Egypt, Ghana, Libya,  Kenya, Morocco, Tunisia, Algeria.'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/africa/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Get breaking news, the latest international news & multimedia reports on Africa here. South Africa, Egypt, Ghana, Libya,  Kenya, Morocco, Tunisia, Algeria.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'africa,politics,society,international,breaking,news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Breaking news from AFRICA, Maghreb and Sub-Saharan Africa - France 24']

    ],
    page_middle_east: [
        // https://www.france24.com/en/middle-east/
        ['url', 'slug', 'middle-east/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Latest news from the Middle East, daily international news reports - France 24'],
        ['property_tag', 'og:description', 'All the latest news from the Middle East, find all the news reports on Saudi Arabia, Israel, Gaza, Lebanon, West Bank, Iran, Iraq on France 24'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/middle-east/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'All the latest news from the Middle East, find all the news reports on Saudi Arabia, Israel, Gaza, Lebanon, West Bank, Iran, Iraq on France 24'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'middle,east,syria,egypt,israel,politics,society,news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Latest news from the Middle East, daily international news reports - France 24']

    ],
    page_americas: [
        // https://www.france24.com/en/americas/
        ['url', 'slug', 'americas/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'International news from the Americas - France 24'],
        ['property_tag', 'og:description', 'Latest news from North Central and South America on France 24, special reports and video news. Canada, USA, Mexico, Chile, Venezuela, Brazil, Argentina, Cuba'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/americas/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Latest news from North Central and South America on France 24, special reports and video news. Canada, USA, Mexico, Chile, Venezuela, Brazil, Argentina, Cuba'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'americas,usa,canada,brazil,mexico,trump,politics,society,international,breaking,news'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'International news from the Americas - France 24']


    ],
    page_europe: [
        // https://www.france24.com/en/europe/
        ['url', 'slug', 'europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'News from Europe - Latest world headlines and daily news - France 24'],
        ['property_tag', 'og:description', 'All the latest European top stories and headlines about EU, UK, Brexit from France 24'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/europe/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'All the latest European top stories and headlines about EU, UK, Brexit from France 24'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'europa,eu,france,germany,uk,brexit,spain,switzerland,politics,international,breaking news,headlines,parliament'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'News from Europe - Latest world headlines and daily news - France 24']

    ],
    page_asia_pacific: [
        // https://www.france24.com/en/asia-pacific/
        ['url', 'slug', 'asia-pacific/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'News from Asia-Pacific - Latest headlines and news reports - France 24'],
        ['property_tag', 'og:description', 'Get breaking news and news headlines from Asia and the Pacific on France 24, special reports on China, Korea, India, Japan, Australia'],
        ['property_tag', 'og:url', 'https://www.france24.com/en/asia-pacific/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '176585044433'],
        ['name_tag', 'description', 'Get breaking news and news headlines from Asia and the Pacific on France 24, special reports on China, Korea, India, Japan, Australia'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'asia,china,japan,india,politics,society,international,breaking news,headlines,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'News from Asia-Pacific - Latest headlines and news reports - France 24']

    ]
};


/**
*
* * PLAYER
* */                    var NavPlayerLinks = [
                        ['en_direct', 'live']
                        ];
                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };                   
                    break;
                    case 'F24_ES':
/**
*
* * SEO
* */                      
    
// F24_ES
var NavActualitesSlugNewsByRegion = [
        ['page_america_latina', 'am%C3%A9rica-latina/'],
        ['page_eeuu_canada', 'eeuu-canad%C3%A1/'], 
        ['page_europa', 'europa/'],
        ['page_francia', 'francia/'],
        ['page_asia_pacifico', 'asia-pac%C3%ADfico/'],
        ['page_medio_oriente', 'medio-oriente/'],
        ['page_africa', '%C3%A1frica/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [
        //--- https://www.france24.com/es/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'France 24 - Noticias y actualidad internacional en vivo'],
        ['property_tag', 'og:description', 'Información y Noticias - Información internacional en vivo de France 24 : deportes, cultura, economía y tecnología. Noticias de los Estados Unidos, Europa, Asia y el Pacífico, África, Oriente Medio,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Información y Noticias - Información internacional en vivo de France 24 : deportes, cultura, economía y tecnología. Noticias de los Estados Unidos, Europa, Asia y el Pacífico, África, Oriente Medio,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'France 24 - Noticias y actualidad internacional en vivo']

    ],
    page_america_latina: [
        //--- https://www.france24.com/es/am%C3%A9rica-latina/
        ['url', 'slug', 'am%C3%A9rica-latina/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'América Latina : información en vivo - France 24'],
        ['property_tag', 'og:description', 'Todas las noticias de América Latina, información y eventos en vivo'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/am%C3%A9rica-latina/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Todas las noticias de América Latina, información y eventos en vivo'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'chile,bolivia,peru,ecuador,uruguay,paraguay america,latina,colombia,mexico,brasil,argentina,venezuela,noticias,reportajes,economía,sociedad,politica'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'América Latina : información en vivo - France 24']

    ],
    page_eeuu_canada: [
        //--- https://www.france24.com/es/eeuu-canad%C3%A1/
        ['url', 'slug', 'eeuu-canad%C3%A1/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Todas las noticias de EE.UU. y Canadá - France 24'],
        ['property_tag', 'og:description', 'Todas las noticias, política y economía en  Estados Unidos'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/eeuu-canad%C3%A1/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Todas las noticias, política y economía en  Estados Unidos'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'estados-unidos,canada,politica,internacional,noticias,informacion,economía,videos,reportajes'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Todas las noticias de EE.UU. y Canadá - France 24']

    ],
    page_europa: [
        //--- https://www.france24.com/es/europa/
        ['url', 'slug', 'europa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Europa : noticias económicas y políticas en vivo - France 24'],
        ['property_tag', 'og:description', 'Noticias y actualidad política y económica en Europa'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/europa/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Noticias y actualidad política y económica en Europa'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'francia,italia,alemania,españa,reino unido,europa,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,portugal,grecia,austria,dinamarca,polonia,noruega,suecia,irlanda,finlandia'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Europa : noticias económicas y políticas en vivo - France 24']

    ],
    page_francia: [
        //--- https://www.france24.com/es/francia/
        ['url', 'slug', 'francia/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Francia : información en vivo - France 24'],
        ['property_tag', 'og:description', 'Francia : Noticias yactualidad minuto a minuto'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/francia/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Francia : Noticias yactualidad minuto a minuto'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'francia,europa,paris,informacion,actualidad,noticias,internacional,politica,economía,cultura,tecnologia,deportes,video'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Francia : información en vivo - France 24']

    ],
    page_asia_pacifico: [

        //--- https://www.france24.com/es/asia-pac%C3%ADfico/
        ['url', 'slug', 'asia-pac%C3%ADfico/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Noticias y reportajes en Asia y en el Pacífico - France 24 - France 24'],
        ['property_tag', 'og:description', 'Actualidad en vivo en Asia Pacífico'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/asia-pac%C3%ADfico/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Actualidad en vivo en Asia Pacífico'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'asia,china,japon,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,corea del norte,corea del sur,filipina,tíbet,laos,camboya,vietnam'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Noticias y reportajes en Asia y en el Pacífico - France 24 - France 24']

    ],
    page_medio_oriente: [
        //--- https://www.france24.com/es/medio-oriente/
        ['url', 'slug', 'medio-oriente/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Noticias y reportajes en el Oriente Medio - France 24'],
        ['property_tag', 'og:description', 'Todas las noticias y eventos en vivo en Medio Oriente'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/medio-oriente/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Todas las noticias y eventos en vivo en Medio Oriente'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'medio,oriente,siria,libano,israel,palestina,egipto,irán,arabia saudita,omán,yemén,turquía,informacion,actualidad,noticias,politica,economía,cultura,deportes'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Noticias y reportajes en el Oriente Medio - France 24']

    ],
    page_africa: [

        //--- https://www.france24.com/es/%C3%A1frica/
        ['url', 'slug', '%C3%A1frica/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Noticias en África y Magreb, actualidad económica y política - France 24 - France 24'],
        ['property_tag', 'og:description', 'Últimas noticias políticas y económicas en África - Noticias y eventos en Túnez, Argelia y Marruecos'],
        ['property_tag', 'og:url', 'https://www.france24.com/es/%C3%A1frica/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '1727280190891954'],
        ['name_tag', 'description', 'Últimas noticias políticas y económicas en África - Noticias y eventos en Túnez, Argelia y Marruecos'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_es'],
        ['name_tag', 'twitter:creator', '@France24_es'],
        ['name_tag', 'keywords', 'africa,informacion,actualidad,noticias,reportajes,politica,economía,magreb,mali,rdc,gambia,nigeria,áfrica,túnez,argelia,marruecos'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Noticias en África y Magreb, actualidad económica y política - France 24 - France 24']

    ]
};


/**
*
* * PLAYER
* */            
                        

                        var NavPlayerLinks = [
                        ['en_direct', 'en-vivo']
                        ];

                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };
                       
                    break;
                    case 'F24_FR':
/**
*
* * SEO
* */                      
                        
            // F24_FR
            var NavActualitesSlugNewsByRegion = [
                ['page_france', 'france/'], 
                ['page_afrique', 'afrique/'], 
                ['page_moyen_orient', 'moyen-orient/'], 
                ['page_europe', 'europe/'], 
                ['page_ameriques', 'am%C3%A9riques/'], 
                ['page_asie_pacifique', 'asie-pacifique/']
            ];


/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"],
        ['property_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"]
    ],
    page_france: [
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'France : News et actualité en continu - France 24'],
        ['property_tag', 'og:description', 'France 24  couvre les évènements en France et en Outre-mer : politique, culture, faits de société, énergie, crise sociale, sport, santé, avec ses reportages, enquêtes, débats et analyses.'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/france/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24  couvre les évènements en France et en Outre-mer : politique, culture, faits de société, énergie, crise sociale, sport, santé, avec ses reportages, enquêtes, débats et analyses.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'france,infos,actualites,news,information,international,reportages,politique,societe,culture'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'France : News et actualité en continu - France 24']
    ],
    page_afrique: [
        ['url', 'slug', 'afrique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Politique & économie en Afrique, infos & news au Maghreb - France 24'],
        ['property_tag', 'og:description', 'France 24  décrypte toutes les actualités africaines, au Maghreb, au Sahel, en Afrique de l’Ouest, Afrique centrale, orientale, et australe, avec son réseau de correspondants, des experts, dans ses journaux,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/afrique/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24  décrypte toutes les actualités africaines, au Maghreb, au Sahel, en Afrique de l’Ouest, Afrique centrale, orientale, et australe, avec son réseau de correspondants, des experts, dans ses journaux,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', "afrique,infos,actualites,news,reportages,politique,economie,tunisie,maroc,cote d'ivoire,mali,maghreb"],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Politique & économie en Afrique, infos & news au Maghreb - France 24']
    ],
    page_moyen_orient: [
        ['url', 'slug', 'moyen-orient/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Informations et news au Moyen-Orient - Toute l'actualité sur France 24"],
        ['property_tag', 'og:description', 'France 24 couvre et analyse toute l’actualité politique et sociétale au Moyen Orient, de l’Arabie Saoudite, en passant par l’Irak, l’Iran, le Liban, l’Égypte, Israël, la Syrie, la Jordanie et les pays…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/moyen-orient/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 couvre et analyse toute l’actualité politique et sociétale au Moyen Orient, de l’Arabie Saoudite, en passant par l’Irak, l’Iran, le Liban, l’Égypte, Israël, la Syrie, la Jordanie et les pays…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'moyen,orient,syrie,liban,egypte,israel,palestine,infos,actualites,politique'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "Informations et news au Moyen-Orient - Toute l'actualité sur France 24"]
    ],
    page_europe: [
        ['url', 'slug', 'europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'News, actualité politique & économique en Europe - France 24'],
        ['property_tag', 'og:description', 'France 24 décrypte les évènements et l’actualité sur le continent européen et de l’Union européenne et ses 27 États membres. Retrouvez rencontres, débats, reportages, analyses sur tout ce qui concerne…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/europe/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 décrypte les évènements et l’actualité sur le continent européen et de l’Union européenne et ses 27 États membres. Retrouvez rencontres, débats, reportages, analyses sur tout ce qui concerne…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'europe,infos,actualites,news,reportages,politique,economie,societe,france,allemagne'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'News, actualité politique & économique en Europe - France 24']
    ],
    page_ameriques: [
        ['url', 'slug', 'am%C3%A9riques/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Amériques : information en direct, news et actu en continu - France 24'],
        ['property_tag', 'og:description', 'France 24 couvre l’actualité américaine, politique, géostratégique, économique du continent, des États-Unis au Chili, en passant par le Canada, le Mexique, le Brésil, l’Argentine, à travers ses émissions,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/am%C3%A9riques/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 couvre l’actualité américaine, politique, géostratégique, économique du continent, des États-Unis au Chili, en passant par le Canada, le Mexique, le Brésil, l’Argentine, à travers ses émissions,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'ameriques,usa,etats-unis,canada,mexique,bresil,infos,actualites,news,politique,economie'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Amériques : information en direct, news et actu en continu - France 24']
    ],
    page_asie_pacifique: [
        ['url', 'slug', 'asie-pacifique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Asie-Pacifique : Actualité internationale en continu - France 24'],
        ['property_tag', 'og:description', 'France 24 décrypte les évènements socio-économiques et politiques de la région Asie-Pacifique : Océanie, Asie du Sud, Asie de l’Est, Asie du Sud-Est, notamment les pays comme la Chine, le Japon, l’Australie,…'],
        ['property_tag', 'og:url', 'https://www.france24.com/fr/asie-pacifique/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '153632746935'],
        ['name_tag', 'description', 'France 24 décrypte les évènements socio-économiques et politiques de la région Asie-Pacifique : Océanie, Asie du Sud, Asie de l’Est, Asie du Sud-Est, notamment les pays comme la Chine, le Japon, l’Australie,…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@FRANCE24'],
        ['name_tag', 'twitter:creator', '@FRANCE24'],
        ['name_tag', 'keywords', 'asie,chine,japon,inde,coree,infos,actualites,news,politique,economie,societe'],
        ['name_tag', 'apple-mobile-web-app-title', 'France 24'],
        ['name_tag', 'application-name', 'France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Asie-Pacifique : Actualité internationale en continu - France 24']
    ]
};

/**
*
* * PLAYER
* */            
                        var NavPlayerLinks = [
                              'direct'
                        ];




                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };


                    break;
                    case 'F24_AR':
/**
*
* * SEO
* */                      
    
// F24_AR
var NavActualitesSlugNewsByRegion = [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
            ['page_moyen_orient', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
            ['page_afrique', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
            ['page_europe', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
            ['page_usa', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
            ['page_asie', '%D8%A2%D8%B3%D9%8A%D8%A7/']
        ];

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [
        //--- https://www.france24.com/ar/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'فرانس 24 - الأخبار الدولية على مدار الساعة على قناة فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد والثقافة عبر برامج ونشرات إخبارية على مدار الساعة'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد والثقافة عبر برامج ونشرات إخبارية على مدار الساعة'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'الأخبار,مباشر,فيديو,فيديو تحت الطلب,تلفزيون,ريبورتاج,مقالات,خبر عاجل,دولية'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'فرانس 24 - الأخبار الدولية على مدار الساعة على قناة فرانس 24']

    ],
    page_france: [
        //--- https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/
        ['url', 'slug', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'فرنسا على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,فرنسا,اقتصاد,الثقافة'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'فرنسا على موقع فرانس 24 - فرانس 24']

    ],
    page_maghreb: [
        //--- https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/
        ['url', 'slug', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الأخبار المغاربية على موقع France 24 - France 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب,الجزائر,تونس,ليبيا,موريتانيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الأخبار المغاربية على موقع France 24 - France 24']

    ],
    page_moyen_orient: [
        //--- https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/
        ['url', 'slug', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الشرق الأوسط ودول الخليج على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد الشرق أوسطية والخليجية - برامج و نقاش عن العالم العربي'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد الشرق أوسطية والخليجية - برامج و نقاش عن العالم العربي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,سوريا,لبنان,مصر,إسرائيل,فلسطين'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الشرق الأوسط ودول الخليج على موقع فرانس 24 - فرانس 24']

    ],
    page_afrique: [
        //--- https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/
        ['url', 'slug', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أفريقيا ودول المغرب العربي على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أفريقيا ودول المغرب العربي'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أفريقيا ودول المغرب العربي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أفريقيا ودول المغرب العربي على موقع فرانس 24 - فرانس 24']

    ],
    page_europe: [

        //--- https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/
        ['url', 'slug', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أوروبا على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أوروبا ودول منطقة اليورو - برامج و نقاش'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أوروبا ودول منطقة اليورو - برامج و نقاش'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أوروبا,فرنسا,ألمانيا'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أوروبا على موقع فرانس 24 - فرانس 24']

    ],
    page_usa: [
        //--- https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/
        ['url', 'slug', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'الأمريكتان على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أمريكا الشمالية والجنوبية - برامج ونقاش'],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أمريكا الشمالية والجنوبية - برامج ونقاش'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,الولايات المتحدة,أمريكا'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'الأمريكتان على موقع فرانس 24 - فرانس 24']

    ],
    page_asie: [
        //--- https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/
        ['url', 'slug', '%D8%A2%D8%B3%D9%8A%D8%A7/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 / France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'آسيا على موقع فرانس 24 - فرانس 24'],
        ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في قارة آسيا - الصين الهند اليابان - برامج '],
        ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '298861020736'],
        ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في قارة آسيا - الصين الهند اليابان - برامج '],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@France24_ar'],
        ['name_tag', 'twitter:creator', '@France24_ar'],
        ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,آسيا,الصين,اليابان'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'],
        ['name_tag', 'application-name', 'فرانس 24 / France 24'],
        ['name_tag', 'msapplication-TileColor', '#00a7e3'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'آسيا على موقع فرانس 24 - فرانس 24']

    ]
};

/**
*
* * PLAYER
* */            
                        
                        var NavPlayerLinks = [
                        ['en_direct', '%D8%A7%D9%84%D8%A8%D8%AB-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1']
                        ];


                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };              
                    
                    break;
                    case 'RFI_EN':


/**
*
* * SEO
* */  

// RFI_EN
var NavActualitesSlugNewsByRegion = [
    ['page_france', 'france/'],
    ['page_africa', 'africa/'],
    ['page_international', 'international/'],
    ['page_science_technology', 'science-technology/'],
    ['page_culture', 'culture/'],
    ['page_sport', 'sport/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/en/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - All the news from France, Europe, Africa and the rest of the world.'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'news,live news,breaking news,sports,culture,france,europe,america,radio,reports'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - All the news from France, Europe, Africa and the rest of the world.']
    ],
    page_france: [

        //--- https://www.rfi.fr/en/france/
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'The economic issues and policy in France - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/france/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'France,news,politics,society,reports,headlines,culture,radio'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'The economic issues and policy in France - RFI']

    ],
    page_africa: [


        //--- https://www.rfi.fr/en/africa/
        ['url', 'slug', 'africa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'All the news about Africa - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/africa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'Africa,news,politics,society,reports,headlines,culture,radio,coronavirus,Senegal,Rwanda,Sierra Leone,Liberia'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'All the news about Africa - RFI']
    ],
    page_international: [


        //--- https://www.rfi.fr/en/international/
        ['url', 'slug', 'international/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'World news and headlines - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/international/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'international,news,radio,politics,society,sports,reports,business'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'World news and headlines - RFI']

    ],
    page_science_technology: [


        //--- https://www.rfi.fr/en/science-technology/
        ['url', 'slug', 'science-technology/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Science and technology news and headlines - RFI'],
        ['property_tag', 'og:description', 'Follow all scientifical and technological news on RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/science-technology/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow all scientifical and technological news on RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'sciences,technology,news,astronomy,medicine,aeronautics,physics,internet,industry,biology,engineering,agriculture,biotechnology'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Science and technology news and headlines - RFI']

    ],
    page_culture: [


        //--- https://www.rfi.fr/en/culture/
        ['url', 'slug', 'culture/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Culture and the arts in france and all around the world - RFI'],
        ['property_tag', 'og:description', 'All the cultural news on RFI. The latest information, news and artistic events all around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/culture/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'All the cultural news on RFI. The latest information, news and artistic events all around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'culture,news,literature,music,cinema,theater,radio,headlines'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Culture and the arts in france and all around the world - RFI']

    ],
    page_sport: [


        //--- https://www.rfi.fr/en/sport/
        ['url', 'slug', 'sport/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'The economic issues and policy in France - RFI'],
        ['property_tag', 'og:description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/en/sport/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '28764872018'],
        ['name_tag', 'description', 'Follow any political information, cultural, sporting and live streaming on RFI. The latest information, news and events in France, Europe and around the world.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_En'],
        ['name_tag', 'twitter:creator', '@RFI_En'],
        ['name_tag', 'keywords', 'sport,news,radio,football,rugby,tennis,F1,basketball'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'The economic issues and policy in France - RFI']

    ]
};                                 
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };


                    break;
                    case 'RFI_TW':
/**
*
* * SEO
* */  
// RFI_TW
var NavActualitesSlugNewsByRegion = [
    ['page_chine', '%E4%B8%AD%E5%9C%8B/'], 
    ['page_france', '%E6%B3%95%E5%9C%8B/'], 
    ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'], 
    ['page_asie', '%E4%BA%9E%E6%B4%B2/'], 
    ['page_amerique', '%E7%BE%8E%E6%B4%B2/']
];

/**
*
* * META
* */

var MetaDataStuff = {
        homepage: [

            //--- https://www.rfi.fr/tw/
            ['url', 'slug', ''], // keep it empty
            ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
            ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
            ['property_tag', 'og:locale', 'zh_TW'],
            ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
            ['property_tag', 'og:type', 'website'],
            ['property_tag', 'og:title', '法廣 - 時事與新聞直播 - RFI - 法國國際廣播電台'],
            ['property_tag', 'og:description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
            ['property_tag', 'og:url', 'https://www.rfi.fr/tw/'],
            ['property_tag', 'fb:app_id', '113191652055439'],
            ['property_tag', 'fb:pages', '394354904092401'],
            ['name_tag', 'description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
            ['name_tag', 'twitter:card', 'summary'],
            ['name_tag', 'twitter:site', '@RFI_TradCn'],
            ['name_tag', 'twitter:creator', '@RFI_TradCn'],
            ['name_tag', 'keywords', '新聞,最近24小時,新聞時事,采訪報道,電台t,網上,法國,人權,政治,經貿'],
            ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
            ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
            ['name_tag', 'msapplication-TileColor', '#e2001a'],
            ['name_tag', 'theme-color', '#ffffff'],
            ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
            ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
            ['title_tag', 'title', '法廣 - 時事與新聞直播 - RFI - 法國國際廣播電台']
        

    ],
    page_chine: [

        //--- https://www.rfi.fr/tw/%E4%B8%AD%E5%9C%8B/
        ['url', 'slug', '%E4%B8%AD%E5%9C%8B/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '中國時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E4%B8%AD%E5%9C%8B/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '中國,新聞,國際,生態,新聞時事,采訪報道,經貿,政治,社會'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '中國時事 - 法廣 - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/tw/%E6%B3%95%E5%9C%8B/
        ['url', 'slug', '%E6%B3%95%E5%9C%8B/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '法國時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '最新法國政經新聞時事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E6%B3%95%E5%9C%8B/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '最新法國政經新聞時事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '法國,新聞,經貿,政治'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '法國時事 - 法廣 - RFI']

    ],
    page_hong_kong_macao_taiwan: [

        //--- https://www.rfi.fr/tw/%E6%B8%AF%E6%BE%B3%E5%8F%B0/
        ['url', 'slug', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '港澳台時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '搜索法廣播客、訪談、特別專題與嘉賓節目'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '搜索法廣播客、訪談、特別專題與嘉賓節目'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '港澳台,新聞,經貿,政治,社會,新聞時事'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '港澳台時事 - 法廣 - RFI']

    ],
    page_asie: [

        //--- https://www.rfi.fr/tw/%E4%BA%9E%E6%B4%B2/
        ['url', 'slug', '%E4%BA%9E%E6%B4%B2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '亞洲時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E4%BA%9E%E6%B4%B2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '同步、隨時跟蹤法廣政治、文化、體育新聞，了解法國、中國與世界各地大事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '亞洲,新聞,國際,新聞時事'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '亞洲時事 - 法廣 - RFI']

    ],
    page_amerique: [

        //--- https://www.rfi.fr/tw/%E7%BE%8E%E6%B4%B2/
        ['url', 'slug', '%E7%BE%8E%E6%B4%B2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_TW'],
        ['property_tag', 'og:site_name', 'RFI - 法國國際廣播電台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '美洲時事 - 法廣 - RFI'],
        ['property_tag', 'og:description', '最新中東與阿拉伯世界新聞'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/tw/%E7%BE%8E%E6%B4%B2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '394354904092401'],
        ['name_tag', 'description', '最新中東與阿拉伯世界新聞'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_TradCn'],
        ['name_tag', 'twitter:creator', '@RFI_TradCn'],
        ['name_tag', 'keywords', '美洲,新聞,國際,生態,采訪報道,新聞時事,經貿,政治,社會'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'application-name', 'RFI - 法國國際廣播電台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '美洲時事 - 法廣 - RFI']

    ]
};

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };



                    break;
                    case 'RFI_CN':

/**
*
* * SEO
* */  
// RFI_CN
var NavActualitesSlugNewsByRegion = [
        ['page_chine', '%E4%B8%AD%E5%9B%BD/'], 
        ['page_france', '%E6%B3%95%E5%9B%BD/'], 
        ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'], 
        ['page_asie', '%E4%BA%9A%E6%B4%B2'], 
        ['page_amerique', '%E7%BE%8E%E6%B4%B2']
];
/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/cn/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_CN'],
        ['property_tag', 'og:site_name', 'RFI - 法国国际广播电台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '法广 - 时事与新闻直播 - RFI - 法国国际广播电台'],
        ['property_tag', 'og:description', '同步、随时跟踪法广政治、文化、体育新闻，了解法国、中国与世界各地大事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/cn/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155677885272'],
        ['name_tag', 'description', '同步、随时跟踪法广政治、文化、体育新闻，了解法国、中国与世界各地大事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Cn'],
        ['name_tag', 'twitter:creator', '@RFI_Cn'],
        ['name_tag', 'keywords', '国际,世界时事,网上电台,新闻时事,采访报道,专栏检索,视频,政治,经贸,社会,网上'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法国国际广播电台'],
        ['name_tag', 'application-name', 'RFI - 法国国际广播电台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '法广 - 时事与新闻直播 - RFI - 法国国际广播电台']

    ],
    page_chine: [


        //--- https://www.rfi.fr/cn/%E4%B8%AD%E5%9B%BD/
        ['url', 'slug', '%E4%B8%AD%E5%9B%BD/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_CN'],
        ['property_tag', 'og:site_name', 'RFI - 法国国际广播电台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '中国时事 - 法广 - RFI'],
        ['property_tag', 'og:description', '同步、随时跟踪中国时事：采访、报道、特别专题'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/cn/%E4%B8%AD%E5%9B%BD/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155677885272'],
        ['name_tag', 'description', '同步、随时跟踪中国时事：采访、报道、特别专题'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Cn'],
        ['name_tag', 'twitter:creator', '@RFI_Cn'],
        ['name_tag', 'keywords', '中国,新闻时事,网上电台,采访报道,专栏检索,视频,政治,经贸,社会,网上'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法国国际广播电台'],
        ['name_tag', 'application-name', 'RFI - 法国国际广播电台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '中国时事 - 法广 - RFI']

    ],
    page_france: [


        //--- https://www.rfi.fr/cn/%E6%B3%95%E5%9B%BD/
        ['url', 'slug', '%E6%B3%95%E5%9B%BD/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_CN'],
        ['property_tag', 'og:site_name', 'RFI - 法国国际广播电台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '法国时事 - 法广 - RFI'],
        ['property_tag', 'og:description', '最新法国政经新闻时事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/cn/%E6%B3%95%E5%9B%BD/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155677885272'],
        ['name_tag', 'description', '最新法国政经新闻时事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Cn'],
        ['name_tag', 'twitter:creator', '@RFI_Cn'],
        ['name_tag', 'keywords', '法国,新闻时事,采访报道,网上电台,专栏检索,视频,政治,经贸,社会,网上'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法国国际广播电台'],
        ['name_tag', 'application-name', 'RFI - 法国国际广播电台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '法国时事 - 法广 - RFI']

    ],
    page_hong_kong_macao_taiwan: [


        //--- https://www.rfi.fr/cn/%E6%B8%AF%E6%BE%B3%E5%8F%B0/
        ['url', 'slug', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_CN'],
        ['property_tag', 'og:site_name', 'RFI - 法国国际广播电台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '港澳台时事 - 法广 - RFI'],
        ['property_tag', 'og:description', '同步、随时跟踪港澳台新闻：采访、报道、特别专题'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/cn/%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155677885272'],
        ['name_tag', 'description', '同步、随时跟踪港澳台新闻：采访、报道、特别专题'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Cn'],
        ['name_tag', 'twitter:creator', '@RFI_Cn'],
        ['name_tag', 'keywords', '港澳台,新闻时事,采访报道,网上电台,专栏检索,视频,政治,经贸,社会,网上'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法国国际广播电台'],
        ['name_tag', 'application-name', 'RFI - 法国国际广播电台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '港澳台时事 - 法广 - RFI']

    ],

    page_asie: [

        //--- https://www.rfi.fr/cn/%E4%BA%9A%E6%B4%B2
        ['url', 'slug', '%E4%BA%9A%E6%B4%B2/'], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_CN'],
        ['property_tag', 'og:site_name', 'RFI - 法国国际广播电台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '亚洲时事 - 法广 - RFI'],
        ['property_tag', 'og:description', '同步、随时跟踪法广政治、文化、体育新闻，了解法国、中国与世界各地大事'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/cn/%E4%BA%9A%E6%B4%B2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155677885272'],
        ['name_tag', 'description', '同步、随时跟踪法广政治、文化、体育新闻，了解法国、中国与世界各地大事'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Cn'],
        ['name_tag', 'twitter:creator', '@RFI_Cn'],
        ['name_tag', 'keywords', '亚洲,法新社,国际,新闻,热点新闻'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法国国际广播电台'],
        ['name_tag', 'application-name', 'RFI - 法国国际广播电台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '亚洲时事 - 法广 - RFI']

    ],
    page_amerique: [


        //--- https://www.rfi.fr/cn/%E7%BE%8E%E6%B4%B2
        ['url', 'slug', '%E7%BE%8E%E6%B4%B2/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'zh_CN'],
        ['property_tag', 'og:site_name', 'RFI - 法国国际广播电台'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', '美洲时事 - 法广 - RFI'],
        ['property_tag', 'og:description', '最新美国与美洲新闻'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/cn/%E7%BE%8E%E6%B4%B2/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '155677885272'],
        ['name_tag', 'description', '最新美国与美洲新闻'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Cn'],
        ['name_tag', 'twitter:creator', '@RFI_Cn'],
        ['name_tag', 'keywords', '美洲,美国,加拿大,新闻时事,采访报道,政治,经贸,社会,网上'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI - 法国国际广播电台'],
        ['name_tag', 'application-name', 'RFI - 法国国际广播电台'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', '美洲时事 - 法广 - RFI']

    ]
};

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

  
                    break;
                    case 'RFI_ES':

/**
*
* * SEO
* */  
// RFI_ES
var NavActualitesSlugNewsByRegion = [
    ['page_americas', 'am%C3%A9ricas/'],
    ['page_francia', 'francia/'],
    ['page_europa', 'europa/'],
    ['page_medioambiente', 'medioambiente/'],
    ['page_salud', 'salud/'],
    ['page_cultura', 'cultura/'],
    ['page_economia', 'econom%C3%ADa/'],
    ['page_deportes', 'deportes/']
 ];
/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/es/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Noticias del mundo en directo - Radio Francia Internacional'],
        ['property_tag', 'og:description', 'Siga toda la información política, cultural, deportiva y científica en directo en RFI. Las últimas noticias en Francia, en América Latina y en el mundo entero.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga toda la información política, cultural, deportiva y científica en directo en RFI. Las últimas noticias en Francia, en América Latina y en el mundo entero.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'información,internacional,actualidad,noticias,directo,reportajes,programas,videos,politica,economía,sociedad,en vivo'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Noticias del mundo en directo - Radio Francia Internacional']

    ],
    page_americas: [

        //--- https://www.rfi.fr/es/am%C3%A9ricas/
        ['url', 'slug', 'am%C3%A9ricas/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica y política en América en directo - RFI'],
        ['property_tag', 'og:description', 'Siga en directo la actualidad del continente americano - Los últimos reportajes y noticias de América Latina y del Norte. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/am%C3%A9ricas/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga en directo la actualidad del continente americano - Los últimos reportajes y noticias de América Latina y del Norte. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'américas,estados-unidos,canada,politica,internacional,noticias,informacion,economía,videos,reportajes,america,latina,colombia,mexico,brasil,argentina,venezuela,noticias,reportajes,economía,sociedad,politica'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica y política en América en directo - RFI']

    ],
    page_francia: [

        //--- https://www.rfi.fr/es/francia/
        ['url', 'slug', 'francia/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica y política en Francia en directo - RFI'],
        ['property_tag', 'og:description', 'Siga en directo la actualidad de Francia - Los últimos reportajes y noticias de Francia. Programas, Podcasts, Dossiers en RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/francia/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga en directo la actualidad de Francia - Los últimos reportajes y noticias de Francia. Programas, Podcasts, Dossiers en RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'francia,europa,paris,informacion,actualidad,noticias,internacional,politica,economía,cultura,tecnologia,deportes,video'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica y política en Francia en directo - RFI']

    ],
    page_europa: [

        //--- https://www.rfi.fr/es/europa/
        ['url', 'slug', 'europa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica y política en Europa en directo - RFI'],
        ['property_tag', 'og:description', 'Siga en directo la actualidad del continente europeo - Los últimos reportajes y noticias de Europa. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/europa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga en directo la actualidad del continente europeo - Los últimos reportajes y noticias de Europa. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'francia,italia,alemania,españa,reino unido,europa,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,portugal,grecia,austria,dinamarca,polonia,noruega,suecia,irlanda,finlandia'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica y política en Europa en directo - RFI']

    ],
    page_medioambiente: [

        //--- https://www.rfi.fr/es/medioambiente/
        ['url', 'slug', 'medioambiente/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad del medio ambiante en Francia y en el mundo en directo – RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad de la sección Medio ambiante en RFI - Los últimos artículos y reportajes Medio ambiante en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/medioambiente/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad de la sección Medio ambiante en RFI - Los últimos artículos y reportajes Medio ambiante en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'vida,salud,ciencia,tecnologia,high-tech,medio ambiente,astronomia,fisica,biologia,aeronautica,ecologia,inovacion,informacion,actualidad,noticias'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad del medio ambiante en Francia y en el mundo en directo – RFI']
    ],
    page_salud: [

        //--- https://www.rfi.fr/es/salud/
        ['url', 'slug', 'salud/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad de la Salud en Francia y en el mundo en directo – RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad de la sección Salud en RFI - Los últimos artículos y reportajes Salud en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/salud/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad de la sección Salud en RFI - Los últimos artículos y reportajes Salud en Francia y en el mundo. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'salud,medicina,enfermedades,sanidad,medico,bienestar,actualidad,noticias'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad de la Salud en Francia y en el mundo en directo – RFI']

    ],
    page_cultura: [

        //--- https://www.rfi.fr/es/cultura/
        ['url', 'slug', 'cultura/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad cultural y artística en directo - RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad cultural y artística en Francia y en América Latina - Los últimos reportajes y noticias. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/cultura/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad cultural y artística en Francia y en América Latina - Los últimos reportajes y noticias. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'cultura,informacion,actualidad,noticias,cine,literatura,musica,cronicas,culturales,entretenimiento,espectáculo,teatro,danza'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad cultural y artística en directo - RFI']

    ],
    page_economia: [

        //--- https://www.rfi.fr/es/econom%C3%ADa/
        ['url', 'slug', 'econom%C3%ADa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'La actualidad económica mundial en directo - RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad económica en el mundo - Los últimos artículos y reportajes sobre la actividad económica mundial en RFI. Programas, Podcasts, Dossiers en RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/econom%C3%ADa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad económica en el mundo - Los últimos artículos y reportajes sobre la actividad económica mundial en RFI. Programas, Podcasts, Dossiers en RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'economía,tecnologia,inovación,informacion,actualidad,noticias,negocios,finanzas,industria,bancos,web,internet,twitter,facebook,android,iphone'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'La actualidad económica mundial en directo - RFI']

    ],
    page_deportes: [

        //--- https://www.rfi.fr/es/deportes/
        ['url', 'slug', 'deportes/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'es_LA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Las últimas noticias y los resultados deportivos en directo - RFI'],
        ['property_tag', 'og:description', 'Siga la actualidad deportiva - Todos los resultados y las noticias deportivas en Francia y en el mundo sobre fútbol, rugby, ciclismo, tenis y básquetbol en RFI. Programas, Podcasts, Dossiers en RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/es/deportes/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '491045330065'],
        ['name_tag', 'description', 'Siga la actualidad deportiva - Todos los resultados y las noticias deportivas en Francia y en el mundo sobre fútbol, rugby, ciclismo, tenis y básquetbol en RFI. Programas, Podcasts, Dossiers en RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Es'],
        ['name_tag', 'twitter:creator', '@RFI_Es'],
        ['name_tag', 'keywords', 'deportes,noticias,informacion,actualidad,football,rugby,tennis,ciclismo,f1'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Las últimas noticias y los resultados deportivos en directo - RFI']

    ]
};
        
/**
*
* * PLAYER
* */            

                        var NavPlayerLinks = [
                        ['en_direct', 'en-vivo']
                        ];

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };
                    


                    
                    break;
                    case 'RFI_FA':

/**
*
* * SEO
* */  
// RFI_FA
var NavActualitesSlugNewsByRegion = [
    ['page_societe_environnement', '%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'], 
    ['page_culture', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'], 
    ['page_iran', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'], 
    ['page_afghanistan', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'], 
    ['page_monde', '%D8%AC%D9%87%D8%A7%D9%86/']
];
/**
*
* * META
* */

 var MetaDataStuff = {
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
 };
                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                    
                    break;
                    case 'RFI_HA':

/**
*
* * SEO
* */  
// RFI_HA
var NavActualitesSlugNewsByRegion =[
        ['page_monde', 'duniya/'], 
        ['page_afrique', 'afrika/'],
        ['page_nigeria', 'najeriya/'],
        ['page_niger', 'nijar/'],
        ['page_jeux', 'wasanni/']
    ];
/**
*
* * META
* */

var MetaDataStuff = {
          homepage: [
                
                ],
          page_monde: [
          
            ],
          page_afrique: [
          
            ],
          page_nigeria: [
          
            ],
          page_niger: [
          
            ],
         page_jeux: [
          
            ]
    };

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                       
                    
                    break;
                    case 'RFI_KM':
/**
*
* * SEO
* */  
// RFI_KM
var NavActualitesSlugNewsByRegion = [
        ['page_cambodge', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'], 
        ['page_asie', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'], 
        ['page_europe', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'], 
        ['page_amerique', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'], 
        ['page_afrique', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'], 
        ['page_moyen_orient', '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/']
        ];
/**
*
* * META
* */

var MetaDataStuff = {
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
};

                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                    
                    break;
                    case 'RFI_SW':

/**
*
* * SEO
* */  
// RFI_SW
var NavActualitesSlugNewsByRegion = [
            ['page_afrique', 'afrika/'], 
            ['page_communaute_afrique_est', 'eac/'],
            ['page_politique_economie', 'siasa-uchumi/'], 
            ['page_article', 'makala/'], 
            ['page_sports', 'michezo/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/sw/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Masuala ya hivi sasa, habari moja kwa moja - Radio France Internationale - RFI'],
        ['property_tag', 'og:description', 'Pata taarifa zote za kisiasa, kiutamaduni, habari za michezo, moja kwa moja na bila ya kuingiliwa kwenye RFI. Habari za hivi karibuni nchini Ufaransa, Ulaya na popote duniani'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata taarifa zote za kisiasa, kiutamaduni, habari za michezo, moja kwa moja na bila ya kuingiliwa kwenye RFI. Habari za hivi karibuni nchini Ufaransa, Ulaya na popote duniani'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'keywords', 'karibu,habari,Ufaransa,Ulaya,Dunia,Afrika,siasa,uchumi,michezo,malaka,mubashara'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Masuala ya hivi sasa, habari moja kwa moja - Radio France Internationale - RFI']

    ],
    page_afrique: [

        //--- https://www.rfi.fr/sw/afrika/
        ['url', 'slug', 'afrika/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Habari barani Afrika - RFI'],
        ['property_tag', 'og:description', 'Pata moja kwa moja masuala ya hivi sasa kuhusu Afrika – ripotiza hivi karibuni, habari, taarifa, podcast kutoka ukanda wa Maghreb, Sahel, Afrika ya kati na magharibi kwenye RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/afrika/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata moja kwa moja masuala ya hivi sasa kuhusu Afrika – ripotiza hivi karibuni, habari, taarifa, podcast kutoka ukanda wa Maghreb, Sahel, Afrika ya kati na magharibi kwenye RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Habari barani Afrika - RFI']

    ],
    page_communaute_afrique_est: [

        //--- https://www.rfi.fr/sw/eac/
        ['url', 'slug', 'eac/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Habari kutoka Jumuiya ya Afrika Mashariki - RFI'],
        ['property_tag', 'og:description', 'Pata matukio moja kwa moja ya Jumuiya ya Afrika Mashariki – ripotiza karibuni,mwendelezo wa habari na taarifa katika ukanda wa Afrika, vipindi vilivyorekodiwa na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/eac/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata matukio moja kwa moja ya Jumuiya ya Afrika Mashariki – ripotiza karibuni,mwendelezo wa habari na taarifa katika ukanda wa Afrika, vipindi vilivyorekodiwa na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Habari kutoka Jumuiya ya Afrika Mashariki - RFI']

    ],
    page_politique_economie: [

        //--- https://www.rfi.fr/sw/siasa-uchumi/
        ['url', 'slug', 'siasa-uchumi/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'habari yoyote ya kiuchumi - RFI'],
        ['property_tag', 'og:description', 'Pata habari zote moja kwa moja kuhusu Uchumi duniani – Makala za hivi karibuni, ripoti kuhusu uchumi wa dunia kwenye RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/siasa-uchumi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata habari zote moja kwa moja kuhusu Uchumi duniani – Makala za hivi karibuni, ripoti kuhusu uchumi wa dunia kwenye RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'habari yoyote ya kiuchumi - RFI']

    ],
    page_article: [

        //--- https://www.rfi.fr/sw/makala/
        ['url', 'slug', 'makala/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Makala Radio France Internationale - RFI'],
        ['property_tag', 'og:description', 'Pata ratiba ya Radio France Internationale (RFI): podcasts, mahojiano, ripoti, wageni'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/makala/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata ratiba ya Radio France Internationale (RFI): podcasts, mahojiano, ripoti, wageni'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Makala Radio France Internationale - RFI']

    ],
    page_sports: [


        //--- https://www.rfi.fr/sw/michezo/
        ['url', 'slug', 'michezo/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'sw_KE'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Habari za michezo - RFI'],
        ['property_tag', 'og:description', 'Pata habari zote za hivi karibuni na habari za michezo kutoka bara la Afrika na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/sw/michezo/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '202170866486424'],
        ['name_tag', 'description', 'Pata habari zote za hivi karibuni na habari za michezo kutoka bara la Afrika na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Sw'],
        ['name_tag', 'twitter:creator', '@RFI_Sw'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Habari za michezo - RFI']

    ]
};

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                       //  NavPlayerLinks,
                        MetaDataStuff
                    };

                        
                    
                    break;
                    case 'RFI_MA':
/**
*
* * SEO
* */  
// RFI_MA
var NavActualitesSlugNewsByRegion = [
            ['page_afrique', 'farafinna/'], 
            ['page_monde', 'duni%C9%B2a/'], 
            ['page_trouver.', 's%C9%94r%C9%94/'], 
            ['page_sante', 'k%C9%9Bn%C9%9Bya/'], 
            ['page_lamini', 'lamini/'], 
            ['page_lire', 'kalan/'], 
            ['page_femmes', 'musow/'], 
            ['page_environnement', 'sigida/']
    ];  

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/ma/
        ['url', 'slug', ''], //  keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan'],
        ['property_tag', 'og:description', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', "Kunnafoni,K'a lamɛn,Jɛmukanw,Kumakanw,Nɔgɔni"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A ye RFI Mandenkan lamɛn ka ta ntɛnɛn fo juma nɛgɛkannyɛ 8 a nin a kanyɛ 12 Mandendugu waati la - RFI Mandenkan']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/ma/farafinna/
        ['url', 'slug', 'farafinna/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Farafinna - RFI'],
        ['property_tag', 'og:description', 'Farafinna'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/farafinna/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Farafinna'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Farafinna'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Farafinna - RFI']

    ],
    page_monde: [



        //--- https://www.rfi.fr/ma/duni%C9%B2a/
        ['url', 'slug', 'duni%C9%B2a/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Duniɲa - RFI'],
        ['property_tag', 'og:description', 'Duniɲa'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/duni%C9%B2a/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Duniɲa'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Duniɲa'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Duniɲa - RFI']

    ],
    page_trouver: [


        //--- https://www.rfi.fr/ma/s%C9%94r%C9%94/
        ['url', 'slug', 's%C9%94r%C9%94/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Sɔrɔ - RFI'],
        ['property_tag', 'og:description', 'Sɔrɔ'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/s%C9%94r%C9%94/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Sɔrɔ'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Sɔrɔ'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Sɔrɔ - RFI']

    ],
    page_sante: [


        //--- https://www.rfi.fr/ma/k%C9%9Bn%C9%9Bya/
        ['url', 'slug', 'k%C9%9Bn%C9%9Bya/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Kɛnɛya - RFI'],
        ['property_tag', 'og:description', 'Kɛnɛya'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/k%C9%9Bn%C9%9Bya/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Kɛnɛya'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Kɛnɛya'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Kɛnɛya - RFI']

    ],
    page_lamini: [


        //--- https://www.rfi.fr/ma/lamini/
        ['url', 'slug', 'lamini/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Lamini - RFI'],
        ['property_tag', 'og:description', 'Lamini'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/lamini/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Lamini'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Lamini'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Lamini - RFI']

    ],
    page_lire: [


        //--- https://www.rfi.fr/ma/kalan/
        ['url', 'slug', 'kalan/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Kalan - RFI'],
        ['property_tag', 'og:description', 'Kalan'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/kalan/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Kalan'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Kalan'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Kalan - RFI']

    ],
    page_femmes: [


        //--- https://www.rfi.fr/ma/musow/
        ['url', 'slug', 'musow/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Musow - RFI'],
        ['property_tag', 'og:description', 'Musow'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/musow/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Musow'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Musow'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Musow - RFI']

    ],
    page_environnement: [


        //--- https://www.rfi.fr/ma/sigida/
        ['url', 'slug', 'sigida/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Sigida - RFI'],
        ['property_tag', 'og:description', 'Sigida'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ma/sigida/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '1057106817686105'],
        ['name_tag', 'description', 'Sigida'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ma'],
        ['name_tag', 'twitter:creator', '@RFI_Ma'],
        ['name_tag', 'keywords', 'Sigida'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Sigida - RFI']
    ]
};                
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                    
                    break;
                    case 'RFI_FF':

/**
*
* * SEO
* */  
// RFI_FF
var NavActualitesSlugNewsByRegion = [
            ['page_afrique', 'afrik/'], 
            ['page_winndere', 'winndere/'], 
            ['page_economie_faggudu', 'faggudu/'], 
            ['page_sante_cellal', 'cellal/'], 
            ['page_histoire_taariindi', 'taariindi/'], 
            ['page_necessaire_needi', 'needi/'], 
            ['page_femmes', 'rew%C9%93e/'], 
            ['page_communaute_renndo', 'renndo/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/ff/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Kabaruuji - Yeewtere waɗanaande sukaaɓe nanooɓe fulfulde - RFI Fulfulde'],
        ['property_tag', 'og:description', 'Heɗagol e yeeɓugol adunaaru ndun - RFI Fulfulde'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Heɗagol e yeeɓugol adunaaru ndun - RFI Fulfulde'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Taskaramji,Jeewte,Kabaruuji,Heɗagol,e guurol'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Kabaruuji - Yeewtere waɗanaande sukaaɓe nanooɓe fulfulde - RFI Fulfulde']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/ff/afrik/
        ['url', 'slug', 'afrik/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Afrik - RFI'],
        ['property_tag', 'og:description', 'Afrik'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/afrik/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Afrik'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Afrik'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Afrik - RFI']

    ],
    page_winndere: [


        //--- https://www.rfi.fr/ff/winndere/
        ['url', 'slug', 'winndere/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Winndere - RFI'],
        ['property_tag', 'og:description', 'Winndere'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/winndere/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Winndere'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Winndere'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Winndere - RFI']

    ],
    page_economie_faggudu: [


        //--- https://www.rfi.fr/ff/faggudu/
        ['url', 'slug', 'faggudu/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Faggudu - RFI'],
        ['property_tag', 'og:description', 'Faggudu'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/faggudu/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Faggudu'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Faggudu'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Faggudu - RFI']

    ],
    page_sante_cellal: [


        //--- https://www.rfi.fr/ff/cellal/
        ['url', 'slug', 'cellal/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Cellal - RFI'],
        ['property_tag', 'og:description', 'Cellal'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/cellal/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Cellal'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Cellal'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Cellal - RFI']

    ],
    page_histoire_taariindi: [


        //--- https://www.rfi.fr/ff/taariindi/
        ['url', 'slug', 'taariindi/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Taariindi - RFI'],
        ['property_tag', 'og:description', 'Taariindi'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/taariindi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Taariindi'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Taariindi'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Taariindi - RFI']

    ],
    page_necessaire_needi: [


        //--- https://www.rfi.fr/ff/needi/
        ['url', 'slug', 'needi/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Needi - RFI'],
        ['property_tag', 'og:description', 'Needi'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/needi/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Needi'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Needi'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Needi - RFI']

    ],
    page_femmes: [


        //--- https://www.rfi.fr/ff/rew%C9%93e/
        ['url', 'slug', 'rew%C9%93e/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'rewɓe - RFI'],
        ['property_tag', 'og:description', 'rewɓe'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/rew%C9%93e/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'rewɓe'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'rewɓe'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'rewɓe - RFI']

    ],
    page_communaute_renndo: [


        //--- https://www.rfi.fr/ff/renndo/
        ['url', 'slug', 'renndo/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ff_FF'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Renndo - RFI'],
        ['property_tag', 'og:description', 'Renndo'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ff/renndo/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '310748626276060'],
        ['name_tag', 'description', 'Renndo'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ff'],
        ['name_tag', 'twitter:creator', '@RFI_Ff'],
        ['name_tag', 'keywords', 'Renndo'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Renndo - RFI']

    ]
};


                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                        
                    
                    break;
                    case 'RFI_PT':
                        
/**
*
* * SEO
* */  
// RFI_PT
var NavActualitesSlugNewsByRegion = [
        ['page_africa_lusofona', '%C3%A1frica-lus%C3%B3fona/'],
        ['page_franca', 'fran%C3%A7a/'],
        ['page_africa', '%C3%A1frica/'],
        ['page_internacional', 'internacional/']
    ];
/**
*
* * META
* */

var MetaDataStuff = {
    homepage: [
        
        //--- https://www.rfi.fr/pt/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Actualidade, informação, notícias em directo - Radio France Internationale'],
        ['property_tag', 'og:description', 'Acompanhe toda a informação política, cultural, desportiva em directo e de forma contínua na RFI. As últimas informações, notícias e actualidades em França, nos países lusófonos e em todo o mundo.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Acompanhe toda a informação política, cultural, desportiva em directo e de forma contínua na RFI. As últimas informações, notícias e actualidades em França, nos países lusófonos e em todo o mundo.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'actualidade,informação,notícias,directo,programas,vídeos,desporto,economias,política,relatórios'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Actualidade, informação, notícias em directo - Radio France Internationale']


    ],
    page_africa_lusofona: [

        //--- https://www.rfi.fr/pt/%C3%A1frica-lus%C3%B3fona/
        ['url', 'slug', '%C3%A1frica-lus%C3%B3fona/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau - RFI'],
        ['property_tag', 'og:description', 'Aceda às últimas informações políticas e à actualidade económica em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau na RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/%C3%A1frica-lus%C3%B3fona/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Aceda às últimas informações políticas e à actualidade económica em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau na RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'África lusófona,actualidade,informação,notícias,desporto,economias,política,Angola,Moçambique,Cabo Verde,Guiné-Bissau,São Tomé e Príncipe'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade em África lusófona: Angola, Cabo Verde, Moçambique, São Tomé e Príncipe e na Guiné-Bissau - RFI']
    ],
    page_franca: [

        //--- https://www.rfi.fr/pt/fran%C3%A7a/
        ['url', 'slug', 'fran%C3%A7a/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade em França - RFI'],
        ['property_tag', 'og:description', 'Aceda às últimas informações políticas e à actualidade económica em França na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/fran%C3%A7a/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Aceda às últimas informações políticas e à actualidade económica em França na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'frança,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade em França - RFI']

    ],
    page_africa: [

        //--- https://www.rfi.fr/pt/%C3%A1frica/
        ['url', 'slug', '%C3%A1frica/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade em África - RFI'],
        ['property_tag', 'og:description', 'Aceda a todas as informações e às últimas notícias provenientes do continente africano com a RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/%C3%A1frica/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Aceda a todas as informações e às últimas notícias provenientes do continente africano com a RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'africa,actualidade,informação,notícias,desporto,economias,política,Maghreb,Mali,DR Congo,Egypt,Zimbabwe,Nigeria'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade em África - RFI']
    ],
    page_internacional: [

        //--- https://www.rfi.fr/pt/internacional/
        ['url', 'slug', 'internacional/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_PT'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'A actualidade mundial e internacional - RFI'],
        ['property_tag', 'og:description', 'Parta à descoberta da actualidade mundial e internacional com a RFI: emissões de rádio, podcast, entrevistas…'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/pt/internacional/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '434438863316803'],
        ['name_tag', 'description', 'Parta à descoberta da actualidade mundial e internacional com a RFI: emissões de rádio, podcast, entrevistas…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Pt'],
        ['name_tag', 'twitter:creator', '@RFI_Pt'],
        ['name_tag', 'keywords', 'internacional,mundo,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'A actualidade mundial e internacional - RFI']

    ]
};

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                    
                    break;
                    case 'RFI_BR':
/**
*
* * SEO
* */  
// RFI_BR
var NavActualitesSlugNewsByRegion = [
        ['page_france', 'fran%C3%A7a/'],
        ['page_bresil', 'brasil/'],
        ['page_amerique', 'am%C3%A9ricas/'],
        ['page_monde', 'mundo/'],
        ['page_culture', 'cultura/'],
        ['page_sciences', 'ci%C3%AAncias/']
    ];

/**
*
* * META
* */

 var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/br/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Atualidades, notícias ao vivo - Rádio França Internacional - RFI'],
        ['property_tag', 'og:description', 'Acompanhe na RFI todas as notícias de política, cultura e esporte, ao vivo e 24 horas. As últimas notícias e destaques da atualidade da França, Brasil e de diversas partes do mundo.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Acompanhe na RFI todas as notícias de política, cultura e esporte, ao vivo e 24 horas. As últimas notícias e destaques da atualidade da França, Brasil e de diversas partes do mundo.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'actualidade,informação,notícias,direto,programas,vídeos,esportes,economia,política,reportagens'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Atualidades, notícias ao vivo - Rádio França Internacional - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/br/fran%C3%A7a/
        ['url', 'slug', 'fran%C3%A7a/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias da França: últimas informações - RFI'],
        ['property_tag', 'og:description', 'Confira na RFI as últimas notícias da política francesa e economia da França na RFI.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/fran%C3%A7a/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI as últimas notícias da política francesa e economia da França na RFI.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'frança,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias da França: últimas informações - RFI']

    ],
    page_bresil: [


        //--- https://www.rfi.fr/br/brasil/
        ['url', 'slug', 'brasil/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias do Brasil: últimas informações - RFI'],
        ['property_tag', 'og:description', 'Confira na RFI toda a atualidade do Brasil: política, relações diplomáticas, cultura e esporte.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/brasil/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI toda a atualidade do Brasil: política, relações diplomáticas, cultura e esporte.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'brasil,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias do Brasil: últimas informações - RFI']

    ],
    page_amerique: [


        //--- https://www.rfi.fr/br/am%C3%A9ricas/
        ['url', 'slug', 'am%C3%A9ricas/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias das Américas - RFI'],
        ['property_tag', 'og:description', 'Confira na RFI as últimas notícias dos Estados Unidos e de todas as Américas.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/am%C3%A9ricas/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI as últimas notícias dos Estados Unidos e de todas as Américas.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'Américas,estados unidos,Canadá,actualidade,informação,notícias,desporto,economias,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias das Américas - RFI']

    ],
    page_monde: [


        //--- https://www.rfi.fr/br/mundo/
        ['url', 'slug', 'mundo/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Notícias do mundo e atualidade internacional - RFI'],
        ['property_tag', 'og:description', 'Acompanhe as notícias do mundo e o noticiário internacional com a RFI: programas de rádio, podcasts, entrevistas...'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/mundo/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Acompanhe as notícias do mundo e o noticiário internacional com a RFI: programas de rádio, podcasts, entrevistas...'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'brasil,mundo,internacional,actualidade,informação,notícias,esportes,economia,política'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Notícias do mundo e atualidade internacional - RFI']

    ],
    page_culture: [
        
        //--- https://www.rfi.fr/br/cultura/
        ['url', 'slug', 'cultura/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Acompanhe com os programas da RFI a atualidade política, cultural e esportiva, ao vivo e 24 horas. Notícias da França e do mundo.'],
        ['property_tag', 'og:description', 'Confira na RFI as últimas notícias ligadas à atualidade cultural e artística: lançamentos, cinema, música...'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/cultura/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira na RFI as últimas notícias ligadas à atualidade cultural e artística: lançamentos, cinema, música...'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'cultura,actualidade,informação,notícias,artes,cinema,literatura,pintura,exposição'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Acompanhe com os programas da RFI a atualidade política, cultural e esportiva, ao vivo e 24 horas. Notícias da França e do mundo.']

    ],
    page_sciences: [


        //--- https://www.rfi.fr/br/ci%C3%AAncias/
        ['url', 'slug', 'ci%C3%AAncias/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'pt_BR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Acompanhe os últimos avanços científicos e ambientais - RFI'],
        ['property_tag', 'og:description', 'Confira as notícias de ciência e meio ambiente na RFI: evoluções, tecnologias, ecologia...'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/br/ci%C3%AAncias/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '54333572509'],
        ['name_tag', 'description', 'Confira as notícias de ciência e meio ambiente na RFI: evoluções, tecnologias, ecologia...'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Br'],
        ['name_tag', 'twitter:creator', '@RFI_Br'],
        ['name_tag', 'keywords', 'ciências,actualidade,informação,notícias,astronomia,biologia,ambiente,indústria,medicina'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Acompanhe os últimos avanços científicos e ambientais - RFI']

    ]
 };
                   
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };
                    
                    break;
                    case 'RFI_RO':
                        
                    /* export values */
                    return {
                        // NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };
                    
                    break;
                    case 'RFI_RU':
/**
*
* * SEO
* */  
// RFI_RU
var NavActualitesSlugNewsByRegion = [
            ['page_russie', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'], 
            ['page_france', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'], 
            ['page_europe', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'], 
            ['page_culture', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'], 
            ['page_ukraine', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'], 
            ['page_sport', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/']
    
    ];  
/**
*
* * META
* */

 var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/ru/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Новости в прямом эфире - международное французское радио'],
        ['property_tag', 'og:description', 'Следите за новостями политики, культуры и спорта круглосуточно в прямом эфире RFI. Последние новости Франции и мира.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Следите за новостями политики, культуры и спорта круглосуточно в прямом эфире RFI. Последние новости Франции и мира.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'международный,новости,подкасты,досье,хроники,передачи,репортажи,интервью,радио,прямой эфир'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Новости в прямом эфире - международное французское радио']

    ],
    page_russie: [

        //--- https://www.rfi.fr/ru/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/
        ['url', 'slug', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Ежедневные новости и комментарии актуальных событий в России - RFI'],
        ['property_tag', 'og:description', 'Новости России: события и комментарии, репортажи и интервью на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Новости России: события и комментарии, репортажи и интервью на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Россия,политикa,культурa,спорт,международный,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Ежедневные новости и комментарии актуальных событий в России - RFI']

    ],
    page_france: [

        //--- https://www.rfi.fr/ru/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/
        ['url', 'slug', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Новости экономики и политики из Франции - RFI'],
        ['property_tag', 'og:description', 'Последние новости Франции: политика, экономика, ежедневные обзоры прессы на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Последние новости Франции: политика, экономика, ежедневные обзоры прессы на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Франция,политикa,культурa,спорт,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Новости экономики и политики из Франции - RFI']

    ],
    page_europe: [

        //--- https://www.rfi.fr/ru/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/
        ['url', 'slug', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Новости экономики и политики из Европы - RFI'],
        ['property_tag', 'og:description', 'Евросоюз и Восточное партнерство: новости, полемика и диалог - на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Евросоюз и Восточное партнерство: новости, полемика и диалог - на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Европа,Евросоюз,Европарламент,Брекзит,политикa,культурa,спорт,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Новости экономики и политики из Европы - RFI']

    ],
    page_culture: [

        //--- https://www.rfi.fr/ru/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/
        ['url', 'slug', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Культура и стиль жизни: Франция, Европа и мир - RFI'],
        ['property_tag', 'og:description', 'Новости культуры во Франции, Европе, России и мире. Искусство жить по-французски. Кино, театр, литература, музыка, мода, стиль, фестивали. Репортажи и комментарии. Фото и видео'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Новости культуры во Франции, Европе, России и мире. Искусство жить по-французски. Кино, театр, литература, музыка, мода, стиль, фестивали. Репортажи и комментарии. Фото и видео'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'культурa,стиль жизни,Музыка,Выставки,Кино,Литература,Театр,мода,французская кухня,рецепты'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Культура и стиль жизни: Франция, Европа и мир - RFI']

    ],
    page_ukraine: [

        //--- https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/
        ['url', 'slug', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Украина: последние новости и репортажи из Киева, Донецка, Крыма на сайте - RFI'],
        ['property_tag', 'og:description', 'Украина: последние новости, дебаты и комментарии на сайте - RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Украина: последние новости, дебаты и комментарии на сайте - RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'Украина,Крым,политикa,культурa,спорт,международный,новости,репортажи'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Украина: последние новости и репортажи из Киева, Донецка, Крыма на сайте - RFI']

    ],
    page_sport: [

        //--- https://www.rfi.fr/ru/%D1%81%D0%BF%D0%BE%D1%80%D1%82/
        ['url', 'slug', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'ru_RU'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Последние новости спорта и результаты соревнований в прямом эфире - RFI'],
        ['property_tag', 'og:description', 'Новости спорта: результаты матчей, чемпионаты и первенства Франции и мира на сайте RFI'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/ru/%D1%81%D0%BF%D0%BE%D1%80%D1%82/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '131089760247886'],
        ['name_tag', 'description', 'Новости спорта: результаты матчей, чемпионаты и первенства Франции и мира на сайте RFI'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Ru'],
        ['name_tag', 'twitter:creator', '@RFI_Ru'],
        ['name_tag', 'keywords', 'спорт,Футбол,Теннис,Тур де Франс,Ролан Гаррос,Допинг'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Последние новости спорта и результаты соревнований в прямом эфире - RFI']

    ]
 };                  
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };
                    
                    break;
                    case 'RFI_UK':
/**
*
* * SEO
* */  
// RFI_UK
var NavActualitesSlugNewsByRegion = [
        ['page_ukraine', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'], 
        ['page_europe', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'], 
        ['page_actualites_internationales', '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'], 
        ['page_ukrainiens_cordon', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/']
    ];
/**
*
* * META
* */

 var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/uk/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Економічні та політичні новини України, Європи та світу в прямому ефірі'],
        ['property_tag', 'og:description', 'Слідкуйте за останніми подіями в Україні. Актуальна інформація, новини, репортажі з Європи та світу.'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'Слідкуйте за останніми подіями в Україні. Актуальна інформація, новини, репортажі з Європи та світу.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', 'новини,рфі,події,останні події,міжнародні новини,що трапилось,французькі ЗМІ,іноземні ЗМІ,Україна,Росія,ЄС,Європа,світ,РФ'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Економічні та політичні новини України, Європи та світу в прямому ефірі']
    ],
    page_ukraine: [

        //--- https://www.rfi.fr/uk/y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/
        ['url', 'slug', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Останні новини України - RFI'],
        ['property_tag', 'og:description', 'ізнайтесь більше про головні події в Україні та регіоні. Війна, політика, міжнародні відносини, економіка та культура'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'ізнайтесь більше про головні події в Україні та регіоні. Війна, політика, міжнародні відносини, економіка та культура'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', "новини України,в Україні,українські новини,події в Україні,Україна,новини,події,що трапилось,актуальне,репортаж,інтерв'ю,відео,свідчення,новина,подія,наживо,прямий ефір"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Останні новини України - RFI']

    ],
    page_europe: [

        //--- https://www.rfi.fr/uk/%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/
        ['url', 'slug', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Події та новини Європи. Євроінтеграція та реформи - RFI'],
        ['property_tag', 'og:description', 'Найважливіше з останніх подій в ЄС. Питання євроінтеграції та співпраці між Україною та країнами ЄС'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'Найважливіше з останніх подій в ЄС. Питання євроінтеграції та співпраці між Україною та країнами ЄС'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', "ЄС,європа,Європейський союз,євроінтеграція,європейський вибір,Євро,європейський суд,європейська комісія,європейський парламент,новини Європи,події в Європі,репортаж,інтерв'ю,відео,свідчення,новина,подія,наживо,прямий ефір"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Події та новини Європи. Євроінтеграція та реформи - RFI']

    ],
    page_actualites_internationales: [

        //--- https://www.rfi.fr/uk/%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/
        ['url', 'slug', '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Останні події в світі від мережі міжнародних кореспондентів та спостерігачів - RFI'],
        ['property_tag', 'og:description', 'Слідкуйте за міжнародними новинами. Найважливіші події світу в наших репортажах та статтях'],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', 'Слідкуйте за міжнародними новинами. Найважливіші події світу в наших репортажах та статтях'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', "міжнародні новини,міжнародні події,актуальне в світі,гаряча новина,інші країни,наживо,репортаж,інтерв'ю,відео,свідчення,новина,подія,наживо,прямий ефір"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Останні події в світі від мережі міжнародних кореспондентів та спостерігачів - RFI']

    ],
    page_ukrainiens_cordon: [

        //--- https://www.rfi.fr/uk/%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/
        ['url', 'slug', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_FB.png'],
        ['property_tag', 'og:locale', 'uk_UA'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Все про життя українців за кордоном - RFI'],
        ['property_tag', 'og:description', "Дізнайтеся більше про життя українців за кордоном. Інтеграція, права та обов'язки громадян, успішні історії"],
        ['property_tag', 'og:url', 'https://www.rfi.fr/uk/%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '109725215092123'],
        ['name_tag', 'description', "Дізнайтеся більше про життя українців за кордоном. Інтеграція, права та обов'язки громадян, успішні історії"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI_Uk'],
        ['name_tag', 'twitter:creator', '@RFI_Uk'],
        ['name_tag', 'keywords', 'українці у світі,діаспора,українські біженці,українці в Європі,українці за кордоном,за кордон,робота для українців,інформація для українців,мігранти,міграція,емігранти,українське за кордоном'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Все про життя українців за кордоном - RFI']

    ]
 };
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };
                        
                    
                    break;
                    case 'RFI_VI':
/**
*
* * SEO
* */  
// RFI_VI
var NavActualitesSlugNewsByRegion = [
        ['page_vietnam', 'vi%E1%BB%87t-nam/'], 
        ['page_asie', 'ch%C3%A2u-%C3%A1/'], 
        ['page_france', 'ph%C3%A1p/'], 
        ['page_international', 'qu%E1%BB%91c-t%E1%BA%BF/'], 
        ['page_analyser', 'ph%C3%A2n-t%C3%ADch/'], 
        ['page_point_actualite', '%C4%91i%E1%BB%83m-b%C3%A1o/']
];
/**
*
* * META
* */

var MetaDataStuff = {
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
};

/**
*
* * PLAYER
* */            

                        var NavPlayerLinks = [
                        ['en_direct', 'ph%C3%A1t-tr%E1%BB%B1c-ti%E1%BA%BFp']
                        ];


                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };


                    break;
                    // MCD
                    case 'MCD_AR':
/**
*
* * SEO
* */   
// MCD_AR
var NavActualitesSlugNewsByRegion = [

            ['page_moyen_orient', '/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
            ['page_grand_maghreb', '/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/'],
            ['page_france', '/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_afrique', '/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
            ['page_europe', '/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
            ['page_amerique', '/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
            ['page_asie_pacifique', '/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/']     
];

/**
*
* * META
* */

var MetaDataStuff = {
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
};

/**
*
* * PLAYER
* */ 

       
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

                        
                        

                    break;
                    // FLE
                    case 'FLE_FR':
                        
/**
*
* * SEO
* */ 

// FLE_FR
var NavActualitesSlugNewsByRegion = [
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
];



                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

                    break;
                    case 'FLE_ES':
/**
*
* * SEO
* */ 

// FLE_ES
var NavActualitesSlugNewsByRegion = [
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
];



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };

                        

                    break;
                    case 'FLE_RU':
 /**
*
* * SEO
* */ 

// FLE_RU
var NavActualitesSlugNewsByRegion = [
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
];



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };

                    break;
                    case 'FLE_AR':
/**
*
* * SEO
* */ 

// FLE_AR
var NavActualitesSlugNewsByRegion = [
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
];



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };
                        

                    break;
                    case 'FLE_EN':
/**
*
* * SEO
* */ 

// FLE_EN
var NavActualitesSlugNewsByRegion = [
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
];
                        

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };

                    break;
                    case 'FLE_BR':
/**
*
* * SEO
* */ 

// FLE_BR
var NavActualitesSlugNewsByRegion = [
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
];
                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };

                    break;
                    // OBS
                    case 'OBS_FR':

/**
*
* * SEO
* */
// OBS_FR
var NavActualitesSlugNewsByRegion = [
        ['page_tous_les_articles', 'tous-les-articles/'], 
        ['page_tag_europe', 'europe/'], 
        ['page_tag_environnement', '/environnement/'],
        ['page_tag_droits_homme', 'droits-de-l-homme/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
          homepage: [
                
                ],
          page_tous_les_articles: [
          
            ],
          page_tag_europe: [
          
            ],
          page_tag_environnement: [
          
            ],
          page_tag_droits_homme: [
          
            ]
    };
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };
                        
                    break;
                    case 'OBS_EN':

/**
*
* * SEO
* */
// OBS_EN
var NavActualitesSlugNewsByRegion = [
        ['page_all_articles', 'all-articles/'],
        ['page_tag_africa', 'africa/'],
        ['page_tag_environment', 'environment/'],
        ['page_tag_human_rights', 'human-rights/']
    ];

 /**
*
* * META
* */

var MetaDataStuff = {
          homepage: [
                
                ],
          page_all_articles: [
          
            ],
          page_tag_africa: [
          
            ],
          page_tag_environment: [
          
            ],
          page_tag_human_rights: [
          
            ]
    };              //* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };
                        
                    break;
                    case 'OBS_AR':
/**
*
* * SEO
* */ 
// OBS_AR
var NavActualitesSlugNewsByRegion = [];



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        // MetaDataStuff
                    };
                        
                    break;
                   case 'OBS_FA':

/**
*
* * SEO
* */ 
// OBS_FA
var NavActualitesSlugNewsByRegion = [];
                     

                    /* export values */
                    return {
                        // NavActualitesSlugNewsByRegion, 
                        //cNavPlayerLinks,
                        // MetaDataStuff
                    };
                    break;
                    // Default RFI_FR
                    default:
                        
   
/**
*
* * SEO
* */  

// RFI_FR
var NavActualitesSlugNewsByRegion = [
    ['page_afrique', 'afrique/'],
    ['page_ameriques', 'am%C3%A9riques/'],
    ['page_asie_pacifique', 'asie-pacifique/'],
    ['page_europe', 'europe/'],
    ['page_moyen_orient', 'moyen-orient/'],
    ['page_france', 'france/'],
    ['page_monde', 'monde/']
];


/**
*
* * META
* */

                    /**
*
* * META
* */

var MetaDataStuff = {
    homepage: [

        //--- https://www.rfi.fr/fr/
        ['url', 'slug', ''], // keep it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'],
        ['property_tag', 'og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'RFI - Actualités, info, news en direct - Radio France Internationale']

    ],
    page_afrique: [


        //--- https://www.rfi.fr/fr/afrique/
        ['url', 'slug', 'afrique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en Afrique et au Maghreb en direct - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au continent africain - Les derniers reportages, news et informations au Maghreb, Sahel, Afrique centrale et de l'Ouest"],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/afrique/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au continent africain - Les derniers reportages, news et informations au Maghreb, Sahel, Afrique centrale et de l'Ouest"],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Afrique,information,actualités,news,Maghreb,Sahel,Congo,Algérie,Maroc,Soudan,Lybie,Egypte,Nigeria,Mauritanie'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en Afrique et au Maghreb en direct - RFI"]


    ],
    page_ameriques: [


        //--- https://www.rfi.fr/fr/am%C3%A9riques/
        ['url', 'slug', 'am%C3%A9riques/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique aux Amériques en direct - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au continent Américain - Les derniers reportages, news et informations aux Amériques. Emissions, Podcast, dossiers - RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/am%C3%A9riques/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au continent Américain - Les derniers reportages, news et informations aux Amériques. Emissions, Podcast, dossiers - RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Amériques,information,actualités,news,Etats Unis,Canada,Brésil,Mexique,Argentine,Colombie'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique aux Amériques en direct - RFI"]

    ],
    page_asie_pacifique: [


        //--- https://www.rfi.fr/fr/asie-pacifique/
        ['url', 'slug', 'asie-pacifique/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en Asie et dans le Pacifique - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée aux continents Asiatique et Océanique - Les derniers reportages, news et informations en continu. Emissions, Podcast, dossiers - RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/asie-pacifique/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée aux continents Asiatique et Océanique - Les derniers reportages, news et informations en continu. Emissions, Podcast, dossiers - RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Asie,information,actualités,news,Chine,Hong Kong,Japon,Indonésie,Australie,Corée'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en Asie et dans le Pacifique - RFI"]

    ],
    page_europe: [


        //--- https://www.rfi.fr/fr/europe/
        ['url', 'slug', 'europe/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en Europe - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au continent Européen - Les derniers reportages, news et informations en continu en Europe, Emissions, Podcast, dossiers sur RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/europe/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au continent Européen - Les derniers reportages, news et informations en continu en Europe, Emissions, Podcast, dossiers sur RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', "europe,actualité,news,information,france,allemagne,espagne,angleterre,UK,finlande,europe de l'est"],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en Europe - RFI"]

    ],
    page_moyen_orient: [


        //--- https://www.rfi.fr/fr/moyen-orient/
        ['url', 'slug', 'moyen-orient/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique au Moyen Orient - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée au Moyen Orient - Les derniers reportages, news et informations en continu au Moyen Orient, Emissions, Podcast, dossiers sur RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/moyen-orient/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée au Moyen Orient - Les derniers reportages, news et informations en continu au Moyen Orient, Emissions, Podcast, dossiers sur RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'moyen orient,actualité,news,info,syrie,liban,économie,politique,iran,israël,palestine,qatar,émirats arabes unis,arabie saoudite'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique au Moyen Orient - RFI"]

    ],
    page_france: [


        //--- https://www.rfi.fr/fr/france/
        ['url', 'slug', 'france/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique en France - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité en direct dédiée à la France - Les derniers reportages, news et informations en continu en France, Emissions, Podcast, dossiers sur RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/france/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité en direct dédiée à la France - Les derniers reportages, news et informations en continu en France, Emissions, Podcast, dossiers sur RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'france,actualité,news,info,agriculture,environnement,économie,politique,gilets jaunes,réformes,retraites,grève'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique en France - RFI"]

    ],
    page_monde: [


        //--- https://www.rfi.fr/fr/monde/
        ['url', 'slug', 'monde/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'],
        ['property_tag', 'og:locale', 'fr_FR'],
        ['property_tag', 'og:site_name', 'RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "L'actualité économique et politique dans le monde en direct - RFI"],
        ['property_tag', 'og:description', "Suivez l'actualité mondiale en direct - Les derniers reportages, news et informations. Émissions, Podcast, dossiers - RFI."],
        ['property_tag', 'og:url', 'https://www.rfi.fr/fr/monde/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'fb:pages', '67334499441'],
        ['name_tag', 'description', "Suivez l'actualité mondiale en direct - Les derniers reportages, news et informations. Émissions, Podcast, dossiers - RFI."],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@RFI'],
        ['name_tag', 'twitter:creator', '@RFI'],
        ['name_tag', 'keywords', 'Amériques,information,actualités,news,Etats Unis,Canada,Brésil,Mexique,Argentine,Colombie,Monde'],
        ['name_tag', 'apple-mobile-web-app-title', 'RFI'],
        ['name_tag', 'application-name', 'RFI'],
        ['name_tag', 'msapplication-TileColor', '#e2001a'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "L'actualité économique et politique dans le monde en direct - RFI"]
    ]
};
        




 
/**
*
* * PLAYER
* */            
                        var NavPlayerLinks = [
                              ['direct_monde', 'direct-monde'],
                              ['direct_afrique', 'direct-afrique']
                        ];

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        NavPlayerLinks,
                        MetaDataStuff
                    };
                    break;




            }// EOS


        }// EOF

}// EOC

        
        


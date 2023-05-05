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

/**
 *
 * * META
 * */

var MetaDataStuff = {
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


};



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };

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

/**
 *
 * * META
 * */

var MetaDataStuff = {
  homepage: [

    //--- https://francaisfacile.rfi.fr/es/
    ['url', 'slug', ''], // leave it empty
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Aprender francés con la actualidad internacional - Le français facile avec RFI'],
    ['property_tag', 'og:description', 'Pódcasts para aprender francés siguiendo la actualidad internacional. Practique francés con ejercicios para todos los niveles.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Pódcasts para aprender francés siguiendo la actualidad internacional. Practique francés con ejercicios para todos los niveles.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'francés facil,aprender francés,rfi savoirs,ejercicio francés,practicar francés,transcripción francés,pódcast aprender francés,fle,aprender francés en línea,aprender francés gratuitamente,aprender francés fácil,aprender comprensión francés'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Aprender francés con la actualidad internacional - Le français facile avec RFI']


  ],
  page_podcasts_journal_français_facile: [
    //--- https://francaisfacile.rfi.fr/es/podcasts/journal-en-fran%C3%A7ais-facile/
    ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Journal en français facile'],
    ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/podcasts/journal-en-fran%C3%A7ais-facile/'],
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
    //--- https://francaisfacile.rfi.fr/es/podcasts/s%C3%A9lection/
    ['url', 'slug', 'podcasts/s%C3%A9lection/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Pódcasts para escuchar, comprender y aprender francés - Français Facile - RFI'],
    ['property_tag', 'og:description', "Una selección de pódcasts de RFI en francés auténtico, acompañados de su transcripción. Escuche Le Journal en français facile, Les Mots de l'actualité, Les Voisins du 12 bis..."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/podcasts/s%C3%A9lection/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', "Una selección de pódcasts de RFI en francés auténtico, acompañados de su transcripción. Escuche Le Journal en français facile, Les Mots de l'actualité, Les Voisins du 12 bis..."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'francés fácil,aprender francés,rfi savoirs,pódcast transcripción francés,pódcast aprender francés,aprender francés fácil,aprender comprensión francés,aprender francés oral,pronunciación francés,pódcast aprender francés adultos'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Pódcasts para escuchar, comprender y aprender francés - Français Facile - RFI']

  ],
  page_exercices: [

    //--- https://francaisfacile.rfi.fr/es/exercices/
    ['url', 'slug', 'exercices/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Ejercicios para practicar francés en todos los niveles - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios desde el nivel principiante al avanzado. Comprender el francés hablado y aprender a partir de los sonidos de la radio y la actualidad internacional.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/exercices/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios desde el nivel principiante al avanzado. Comprender el francés hablado y aprender a partir de los sonidos de la radio y la actualidad internacional.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,ejercicio francés,práctica delf,práctica tcf,práctica dfp,evaluar nivel francés,ejercicio francés principiante,ejercicio francés intermedio,ejercicio francés avanzado,ejercicio francés con correcciones'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Ejercicios para practicar francés en todos los niveles - Français Facile - RFI']


  ],

  page_diplomes_tests: [
    //--- https://francaisfacile.rfi.fr/es/dipl%C3%B4mes-tests/
    ['url', 'slug', 'dipl%C3%B4mes-tests/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Practicar para el DELF, el TCF y el DFP con RFI - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Practique gratuitamente para las pruebas orales del DELF B2, el TCF y el Diploma de Francés Profesional (DFP) en las mismas condiciones que en el examen.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/dipl%C3%B4mes-tests/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Practique gratuitamente para las pruebas orales del DELF B2, el TCF y el Diploma de Francés Profesional (DFP) en las mismas condiciones que en el examen.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'delf,tcf,dfp,ejercicio delf,ejercicio tcf,ejercicio dfp,preparar examen francés,evaluar nivel francés'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Practicar para el DELF, el TCF y el DFP con RFI - Français Facile - RFI']


  ],
  page_tester_son_niveau: [
    //--- https://francaisfacile.rfi.fr/es/tester-son-niveau/
    ['url', 'slug', 'tester-son-niveau/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Evalúe su nivel de francés - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de comprensión oral para todos los niveles para mejorar la comunicación en francés en situaciones de la vida cotidiana, el trabajo y la universidad.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/tester-son-niveau/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de comprensión oral para todos los niveles para mejorar la comunicación en francés en situaciones de la vida cotidiana, el trabajo y la universidad.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'evaluar nivel francés,prueba francés,qué nivel francés,práctica francés,ejercicio francés,prueba rfi savoirs,ejercicio fle,prueba de nivel francés'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Evalúe su nivel de francés - Français Facile - RFI']


  ],
  page_comprendre_actualite_français: [
    //--- https://francaisfacile.rfi.fr/es/comprendre-actualit%C3%A9-fran%C3%A7ais/
    ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Aprender francés siguiendo la actualidad - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de comprensión oral para todos los niveles a partir de la actualidad internacional: sociedad, economía, cultura, geopolítica, medio ambiente, ciencias y salud.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de comprensión oral para todos los niveles a partir de la actualidad internacional: sociedad, economía, cultura, geopolítica, medio ambiente, ciencias y salud.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,ejercicio francés,ejercicio francés principiante,ejercicio francés intermedio,ejercicio francés avanzado,aprender francés actualidad,ejercicio francés actualidad'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Aprender francés siguiendo la actualidad - Français Facile - RFI']

  ],
  page_communiquer_quotidien: [

    //--- https://francaisfacile.rfi.fr/es/communiquer-quotidien/
    ['url', 'slug', 'communiquer-quotidien/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Aprender el francés de la vida diaria - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios para todos los niveles destinados a mejorar la comunicación en francés en situaciones de la vida cotidiana, el trabajo y la universidad.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/communiquer-quotidien/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios para todos los niveles destinados a mejorar la comunicación en francés en situaciones de la vida cotidiana, el trabajo y la universidad.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,ejercicio francés,ejercicio francés principiante,ejercicio francés intermedio,ejercicio francés avanzado,aprender francés para el día a día,ejercicio francés del día a día,expresión francesa,trabajar en francés,aprender francés vivir'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Aprender el francés de la vida diaria - Français Facile - RFI']



  ],
  page_reviser: [
    //--- https://francaisfacile.rfi.fr/es/r%C3%A9viser/
    ['url', 'slug', 'r%C3%A9viser/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Repasar los aspectos lingüísticos básicos en francés - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios para todos los niveles diseñados para repasar los aspectos lingüísticos básicos: gramática, vocabulario, fonética, ortografía, expresiones, neologismos, etc.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/r%C3%A9viser/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios para todos los niveles diseñados para repasar los aspectos lingüísticos básicos: gramática, vocabulario, fonética, ortografía, expresiones, neologismos, etc.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs,ejercicio francés,ejercicio francés principiante,ejercicio francés intermedio,ejercicio francés avanzado,repasar francés,vocabulario francés,gramática francesa,aprender vocabulario francés,pronunciación francés'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Repasar los aspectos lingüísticos básicos en francés - Français Facile - RFI']


  ],
  page_enseigner: [
    //--- https://francaisfacile.rfi.fr/es/enseigner/
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
    //--- https://francaisfacile.rfi.fr/es/exercices/a1/
    ['url', 'slug', 'exercices/a1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Ejercicios de comprensión de francés, nivel Principiante (A1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de francés de nivel Principiante (A1) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/exercices/a1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de francés de nivel Principiante (A1) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'ejercicio rfi savoirs,ejercicio francés Principiante (A1),práctica delf,práctica tcf,práctica dfp,evaluar nivel francés Principiante (A1),ejercicio francés Principiante (A1) correcciones'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Ejercicios de comprensión de francés, nivel Principiante (A1) - Français Facile - RFI']

  ],
  page_exercices_a2: [
    //--- https://francaisfacile.rfi.fr/es/exercices/a2/
    ['url', 'slug', 'exercices/a2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Ejercicios de comprensión de francés, nivel Inicial (A2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de francés de nivel Inicial (A2) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/exercices/a2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de francés de nivel Inicial (A2) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'ejercicio rfi savoirs,ejercicio francés Inicial (A2),práctica delf,práctica tcf,práctica dfp,evaluar nivel francés Inicial (A2),ejercicio francés Inicial (A2) correcciones'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Ejercicios de comprensión de francés, nivel Inicial (A2) - Français Facile - RFI']


  ],
  page_exercices_b1: [
    //--- https://francaisfacile.rfi.fr/es/exercices/b1/
    ['url', 'slug', 'exercices/b1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Ejercicios de comprensión de francés, nivel Intermedio (B1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de francés de nivel Intermedio (B1) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/exercices/b1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de francés de nivel Intermedio (B1) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'ejercicio rfi savoirs,ejercicio francés Intermedio (B1),práctica delf,práctica tcf,práctica dfp,evaluar nivel francés Intermedio (B1),ejercicio francés Intermedio (B1) correcciones'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Ejercicios de comprensión de francés, nivel Intermedio (B1) - Français Facile - RFI']


  ],
  page_exercices_b2: [
    //--- https://francaisfacile.rfi.fr/es/exercices/b2/
    ['url', 'slug', 'exercices/b2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Ejercicios de comprensión de francés, nivel Avanzado (B2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de francés de nivel Avanzado (B2) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/exercices/b2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de francés de nivel Avanzado (B2) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'ejercicio rfi savoirs,ejercicio francés Avanzado (B2),práctica delf,práctica tcf,práctica dfp,evaluar nivel francés Avanzado (B2),ejercicio francés Avanzado (B2) correcciones'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Ejercicios de comprensión de francés, nivel Avanzado (B2) - Français Facile - RFI']


  ],
  page_exercices_c1c2: [
    //--- https://francaisfacile.rfi.fr/es/exercices/c1c2/
    ['url', 'slug', 'exercices/c1c2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Ejercicios de comprensión de francés, nivel Autónomo (C1/C2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Ejercicios de francés de nivel Autónomo (C1/C2) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/exercices/c1c2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Ejercicios de francés de nivel Autónomo (C1/C2) para practicar con la actualidad internacional, la cultura y expresiones de la vida cotidiana.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'ejercicio rfi savoirs,ejercicio francés Autónomo (C1/C2),práctica delf,práctica tcf,práctica dfp,evaluar nivel francés Autónomo (C1/C2),ejercicio francés Autónomo (C1/C2) correcciones'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Ejercicios de comprensión de francés, nivel Autónomo (C1/C2) - Français Facile - RFI']


  ],
  page_podcasts_mots_actualite: [
    //--- https://francaisfacile.rfi.fr/es/podcasts/les-mots-de-l-actualit%C3%A9/
    ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
    ['property_tag', 'og:locale', 'es_LA'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Les mots de l'actualité"],
    ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/es/podcasts/les-mots-de-l-actualit%C3%A9/'],
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


};



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
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

/**
 *
 * * META
 * */

var MetaDataStuff = {
  homepage: [
    //--- https://francaisfacile.rfi.fr/ru/
    ['url', 'slug', ''], // leave it empty
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Учить французский по международным новостям - Le français facile avec RFI'],
    ['property_tag', 'og:description', 'Подкасты для изучения французского и ознакомления с международными новостями. Практикуйте французский благодаря упражнениям для всех уровней.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Подкасты для изучения французского и ознакомления с международными новостями. Практикуйте французский благодаря упражнениям для всех уровней.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'простой французский, учить французский, rfi savoirs, упражнения по французскому, практиковать французский, транскрипция на французском, подкаст учить французский, fle, учить французский он-лайн, учить французский бесплатно, учить простой французский, учить аудирование французский'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Учить французский по международным новостям - Le français facile avec RFI']

  ],
  page_podcasts_journal_français_facile: [
    //--- https://francaisfacile.rfi.fr/ru/podcasts/journal-en-fran%C3%A7ais-facile/
    ['url', 'slug', 'podcasts/journal-en-fran%C3%A7ais-facile/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f649e25a-61b9-11ed-839b-005056bf30b7/w:1280/p:16x9/carre-3000-journal-en-fran%C3%A7ais-facile_16_9.jpg'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Journal en français facile'],
    ['property_tag', 'og:description', "Un vrai journal d’information pour suivre l’actualité internationale en français. Du lundi au vendredi sur l'antenne de RFI à 17 h (heure de Paris) puis sur le site Le français facile avec RFI\xa0avec sa…"],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/podcasts/journal-en-fran%C3%A7ais-facile/'],
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
    //--- https://francaisfacile.rfi.fr/ru/podcasts/s%C3%A9lection/
    ['url', 'slug', 'podcasts/s%C3%A9lection/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Подкасты для прослушивания, понимания и изучения французского - Français Facile - RFI'],
    ['property_tag', 'og:description', "Подборка подкастов RFI на аутентичном французском с транскрипцией. Слушайте le Journal en français facile, les Mots de l'actualité, les Voisins du 12 bis..."],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/podcasts/s%C3%A9lection/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', "Подборка подкастов RFI на аутентичном французском с транскрипцией. Слушайте le Journal en français facile, les Mots de l'actualité, les Voisins du 12 bis..."],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'простой французский, учить французский, rfi savoirs, подкаст транскрипция на французском, подкаст учить французский, учить простой французский, учить понимание на французском, учить устный французский, произношение на французском,подкаст учить французский для взрослых'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Подкасты для прослушивания, понимания и изучения французского - Français Facile - RFI']


  ],
  page_exercices: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/
    ['url', 'slug', 'exercices/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Упражения по французскому для всех уровней - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения от начального до продвинутого уровня. Понимать и учить разговорный французский по радиовыпускам международных новостей.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения от начального до продвинутого уровня. Понимать и учить разговорный французский по радиовыпускам международных новостей.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, подготовка к delf, подготовка к tcf, подготовка к dfp, оценить свой уровень французского, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый, упражнение французский с исправлением'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Упражения по французскому для всех уровней - Français Facile - RFI']

  ],

  page_diplomes_tests: [
    //--- https://francaisfacile.rfi.fr/ru/dipl%C3%B4mes-tests/
    ['url', 'slug', 'dipl%C3%B4mes-tests/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Подготовка к экзаменам DELF, TCF и DFP с RFI - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Готовьтесь бесплатно к устным экзаменам DELF B2, TCF и Diplôme de français professionnel (DFP) в условиях экзамена.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/dipl%C3%B4mes-tests/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Готовьтесь бесплатно к устным экзаменам DELF B2, TCF и Diplôme de français professionnel (DFP) в условиях экзамена.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'delf, tcf, dfp, упражнение delf, упражнение tcf, упражнение, готовить экзамен по французскому, оценить уровень французского'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Подготовка к экзаменам DELF, TCF и DFP с RFI - Français Facile - RFI']


  ],
  page_tester_son_niveau: [
    //--- https://francaisfacile.rfi.fr/ru/tester-son-niveau/
    ['url', 'slug', 'tester-son-niveau/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Проверить свой уровень французского - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/tester-son-niveau/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'оценить уровень французского, тест по французскому, какой уровень французского, тренировка по французскому, упражнение по французскому, тест rfi savoirs, упражнение fle, вступительный тест по французскому'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Проверить свой уровень французского - Français Facile - RFI']


  ],
  page_comprendre_actualite_français: [
    //--- https://francaisfacile.rfi.fr/ru/comprendre-actualit%C3%A9-fran%C3%A7ais/
    ['url', 'slug', 'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Учить французский по новостям - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Аудиоупражнения для всех уровней на основе международных новостей: общество, экономика, культура, геополитика, окружающая среда, наука и здоровье.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/comprendre-actualit%C3%A9-fran%C3%A7ais/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Аудиоупражнения для всех уровней на основе международных новостей: общество, экономика, культура, геополитика, окружающая среда, наука и здоровье.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый, учить французский новости, упражнения по французскому новости'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Учить французский по новостям - Français Facile - RFI']

  ],
  page_communiquer_quotidien: [

    //--- https://francaisfacile.rfi.fr/ru/communiquer-quotidien/
    ['url', 'slug', 'communiquer-quotidien/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Учить французский для повседневной жизни - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/communiquer-quotidien/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Аудиоупражнения для всех уровней для улучшения владения французским в повседневной жизни, на работе и в университете.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый, учить французский повседневный, упражнения по французскому повседневный,французское выражение,работать на французском,учить французский жить'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Учить французский для повседневной жизни - Français Facile - RFI']

  ],
  page_reviser: [
    //--- https://francaisfacile.rfi.fr/ru/r%C3%A9viser/
    ['url', 'slug', 'r%C3%A9viser/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Повторять основные темы французского языка - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения для всех уровней на повторение основных языковых моментов: грамматика, лексика, фонетика, орфография, выражения, неологизмы.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/r%C3%A9viser/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения для всех уровней на повторение основных языковых моментов: грамматика, лексика, фонетика, орфография, выражения, неологизмы.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'rfi savoirs, упражнения по французскому, упражнение французский начальный, упражнение французский средний, упражнение французский продвинутый,повторять французский,лексика французского,грамматика французского,учить лексику французского,французское произношение'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Повторять основные темы французского языка - Français Facile - RFI']


  ],
  page_enseigner: [
    //--- https://francaisfacile.rfi.fr/ru/enseigner/
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
    //--- https://francaisfacile.rfi.fr/ru/exercices/a1/
    ['url', 'slug', 'exercices/a1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Начальный уровень (А1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Начальный уровень (А1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/a1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Начальный уровень (А1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Начальный уровень (А1),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Начальный уровень (А1), упражнение по французскому Начальный уровень (А1) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Начальный уровень (А1) - Français Facile - RFI']


  ],
  page_exercices_a2: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/a2/
    ['url', 'slug', 'exercices/a2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Базовый уровень (А2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Базовый уровень (А2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/a2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Базовый уровень (А2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Базовый уровень (А2),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Базовый уровень (А2), упражнение по французскому Базовый уровень (А2) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Базовый уровень (А2) - Français Facile - RFI']

  ],
  page_exercices_b1: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/b1/
    ['url', 'slug', 'exercices/b1/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Средний уровень (Б1) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Средний уровень (Б1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/b1/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Средний уровень (Б1) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Средний уровень (Б1),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Средний уровень (Б1), упражнение по французскому Средний уровень (Б1) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Средний уровень (Б1) - Français Facile - RFI']


  ],
  page_exercices_b2: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/b2/
    ['url', 'slug', 'exercices/b2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Продвинутый уровень (Б2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Продвинутый уровень (Б2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/b2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Продвинутый уровень (Б2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Продвинутый уровень (Б2),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Продвинутый уровень (Б2), упражнение по французскому Продвинутый уровень (Б2) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Продвинутый уровень (Б2) - Français Facile - RFI']


  ],
  page_exercices_c1c2: [
    //--- https://francaisfacile.rfi.fr/ru/exercices/c1c2/
    ['url', 'slug', 'exercices/c1c2/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/fle/default_169.png'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', 'Аудиоупражения на французском для уровня Уровень свободного владения (C1/C2) - Français Facile - RFI'],
    ['property_tag', 'og:description', 'Упражнения по французскому уровня Уровень свободного владения (C1/C2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/exercices/c1c2/'],
    ['property_tag', 'fb:app_id', '113191652055439'],
    ['property_tag', 'fb:pages', '104243832961620'],
    ['name_tag', 'description', 'Упражнения по французскому уровня Уровень свободного владения (C1/C2) для проработки тем из международных новостей, культуры и выражений из повседневной жизни.'],
    ['name_tag', 'twitter:card', 'summary'],
    ['name_tag', 'twitter:site', '@RFI_FrFacile'],
    ['name_tag', 'twitter:creator', '@RFI_FrFacile'],
    ['name_tag', 'keywords', 'упражнение rfi savoirs, упражнение по французскому Уровень свободного владения (C1/C2),тренировка delf,тренировка tcf,тренировка dfp, оценить уровень французского Уровень свободного владения (C1/C2), упражнение по французскому Уровень свободного владения (C1/C2) проверка'],
    ['name_tag', 'apple-mobile-web-app-title', 'Français Facile - RFI'],
    ['name_tag', 'application-name', 'Français Facile - RFI'],
    ['name_tag', 'msapplication-TileColor', '#e2001a'],
    ['name_tag', 'theme-color', '#ffffff'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
    ['title_tag', 'title', 'Аудиоупражения на французском для уровня Уровень свободного владения (C1/C2) - Français Facile - RFI']


  ],
  page_podcasts_mots_actualite: [
    //--- https://francaisfacile.rfi.fr/ru/podcasts/les-mots-de-l-actualit%C3%A9/
    ['url', 'slug', 'podcasts/les-mots-de-l-actualit%C3%A9/'],
    ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
    ['property_tag', 'og:image', 'https://s.francaisfacile.rfi.fr/media/display/f1ec5784-fd09-11ec-b26c-005056bfb2b6/w:1280/p:16x9/rfi-savoir-les-mots-de-lactualite-v2.jpg'],
    ['property_tag', 'og:locale', 'ru_RU'],
    ['property_tag', 'og:site_name', 'Français Facile - RFI'],
    ['property_tag', 'og:type', 'website'],
    ['property_tag', 'og:title', "Les mots de l'actualité"],
    ['property_tag', 'og:description', 'Une chronique pétillante de trois minutes qui explique les mots, leur origine et leur contexte.\xa0'],
    ['property_tag', 'og:url', 'https://francaisfacile.rfi.fr/ru/podcasts/les-mots-de-l-actualit%C3%A9/'],
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


};

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
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

/**
 *
 * * META
 * */

var MetaDataStuff = {
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
    


};



                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
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

/**
 *
 * * META
 * */

var MetaDataStuff = {
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


};
                        

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
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

/**
 *
 * * META
 * */

var MetaDataStuff = {
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


};
                        
                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
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
        ['page_tag_europe', 'tag/europe/'], 
        ['page_tag_environnement', 'tag/environnement/'],
        ['page_tag_droits_homme', 'tag/droits-de-l-homme/']
    ];

/**
*
* * META
* */

var MetaDataStuff = {
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
        ['page_tag_africa', 'tag/africa/'],
        ['page_tag_environment', 'tag/environment/'],
        ['page_tag_human_rights', 'tag/human-rights/']
    ];

 /**
*
* * META
* */

var MetaDataStuff = {
    homepage: [
        //--- https://observers.france24.com/en/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'The France 24 Observers - Breaking the news thanks to amateur images - Film, verify, share.'],
        ['property_tag', 'og:description', 'The France 24 Observers is both a website and a TV show focusing on international news through the lens of amateur images. Our journalists analyze and verify all contents, spot and expose fake news from…'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'The France 24 Observers is both a website and a TV show focusing on international news through the lens of amateur images. Our journalists analyze and verify all contents, spot and expose fake news from…'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'keywords', 'news,international,amateur,testimonies,eyewitness,images,photos,videos,debunked,fake news,programs'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'The France 24 Observers - Breaking the news thanks to amateur images - Film, verify, share.']
    ],
    page_all_articles: [
        //--- https://observers.france24.com/en/all-articles/
        ['url', 'slug', 'all-articles/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', "Follow international news through our Observers' amateur images and eyewitness testimony. All the content is verified and explained by our journalists."],
        ['property_tag', 'og:description', 'All the articles from the France 24 Observers.'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/all-articles/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'All the articles from the France 24 Observers.'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'keywords', 'news,articles,observers,eyewitness,testimony,amateur,images,videos'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', "Follow international news through our Observers' amateur images and eyewitness testimony. All the content is verified and explained by our journalists."]

    ],
    page_tag_africa: [
        //--- https://observers.france24.com/en/tag/africa/
        ['url', 'slug', 'tag/africa/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'Africa: news, videos, reports and analysis - The Observers - France 24'],
        ['property_tag', 'og:description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to Africa on The Observers'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/tag/africa/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to Africa on The Observers'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'Africa: news, videos, reports and analysis - The Observers - France 24']

    ],
    page_tag_environment: [
        //--- https://observers.france24.com/en/tag/environment/
        ['url', 'slug', 'tag/environment/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'environment: news, videos, reports and analysis - The Observers - France 24'],
        ['property_tag', 'og:description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to environment on The Observers'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/tag/environment/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to environment on The Observers'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'environment: news, videos, reports and analysis - The Observers - France 24']

    ],
    page_tag_human_rights: [
        //--- https://observers.france24.com/en/tag/human-rights/
        ['url', 'slug', 'tag/human-rights/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_obs_en.png'],
        ['property_tag', 'og:locale', 'en_US'],
        ['property_tag', 'og:site_name', 'The Observers - France 24'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'human rights: news, videos, reports and analysis - The Observers - France 24'],
        ['property_tag', 'og:description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to human rights on The Observers'],
        ['property_tag', 'og:url', 'https://observers.france24.com/en/tag/human-rights/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'Find all the latest articles and watch TV shows, reports and fact-checking verifications related to human rights on The Observers'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@Observers'],
        ['name_tag', 'twitter:creator', '@Observers'],
        ['name_tag', 'apple-mobile-web-app-title', 'The Observers - France 24'],
        ['name_tag', 'application-name', 'The Observers - France 24'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'human rights: news, videos, reports and analysis - The Observers - France 24']

    ]
};



                     //* export values */
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
var NavActualitesSlugNewsByRegion = [
        ['page_tag_environnement', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
        ['page_want_to_contribute', '%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9']
    ];

/**
 *
 * * META
 * */

var MetaDataStuff = {
    homepage: [
        //--- https://observers.france24.com/ar/
        ['url', 'slug', ''],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/infographies/meta_og_twcards/F24_obs_ar.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 – مراقبون'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'دققوا، راقبوا، صوروا - فرانس 24 – مراقبون'],
        ['property_tag', 'og:description', 'فرانس 24 – مراقبون : موقع إخباري وبرنامج أسبوعي يتناول آخر المستجدات الدولية من خلال صور وفيديوهات أرسلها مراقبون هواة وتم التأكد من صحتها من قبل صحافيي'],
        ['property_tag', 'og:url', 'https://observers.france24.com/ar/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'فرانس 24 – مراقبون : موقع إخباري وبرنامج أسبوعي يتناول آخر المستجدات الدولية من خلال صور وفيديوهات أرسلها مراقبون هواة وتم التأكد من صحتها من قبل صحافيي'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversArabic'],
        ['name_tag', 'twitter:creator', '@ObserversArabic'],
        ['name_tag', 'keywords', 'الأخبار,فيديو,فيديو تحت الطلب,مقالات,دولية,أخبار مزيفة,صور,مراقبون هواة'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 – مراقبون'],
        ['name_tag', 'application-name', 'فرانس 24 – مراقبون'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'دققوا، راقبوا، صوروا - فرانس 24 – مراقبون']


    ],
    page_tag_environnement: [
        //--- https://observers.france24.com/ar/%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/
        ['url', 'slug', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/infographies/meta_og_twcards/F24_obs_ar.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 – مراقبون'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'بيئة: أخبار، فيديوهات، تقارير وتحليلات - مراقبون - فرانس 24'],
        ['property_tag', 'og:description', 'اطلعوا على كل الأخبار الدولية عن بيئة، للقراءة وإعادة المشاهدة على مراقبون'],
        ['property_tag', 'og:url', 'https://observers.france24.com/ar/%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['name_tag', 'description', 'اطلعوا على كل الأخبار الدولية عن بيئة، للقراءة وإعادة المشاهدة على مراقبون'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversArabic'],
        ['name_tag', 'twitter:creator', '@ObserversArabic'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 – مراقبون'],
        ['name_tag', 'application-name', 'فرانس 24 – مراقبون'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'بيئة: أخبار، فيديوهات، تقارير وتحليلات - مراقبون - فرانس 24']


    ],

    page_want_to_contribute: [
        //--- https://observers.france24.com/ar/%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9
        ['url', 'slug', '%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.france24.com/infographies/meta_og_twcards/F24_obs_ar.png'],
        ['property_tag', 'og:locale', 'ar_AR'],
        ['property_tag', 'og:site_name', 'فرانس 24 – مراقبون'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'أصبح مراقبا - مراقبون - فرانس 24'],
        ['property_tag', 'og:description', 'أصبح مراقبا'],
        ['property_tag', 'og:url', 'https://observers.france24.com/ar/%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9'],
        ['property_tag', 'fb:app_id', '121241974571942'],
        ['property_tag', 'fb:pages', '110853765621097'],
        ['property_tag', 'article:published_time', '2020-09-09T09:24:55+00:00'],
        ['property_tag', 'article:modified_time', '2022-08-22T09:02:53+00:00'],
        ['name_tag', 'description', 'أصبح مراقبا'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversArabic'],
        ['name_tag', 'twitter:creator', '@ObserversArabic'],
        ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 – مراقبون'],
        ['name_tag', 'application-name', 'فرانس 24 – مراقبون'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'أصبح مراقبا - مراقبون - فرانس 24']

    ]


};


                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        // NavPlayerLinks,
                        MetaDataStuff
                    };
                        
                    break;
                   case 'OBS_FA':

/**
*
* * SEO
* */ 
// OBS_FA
var NavActualitesSlugNewsByRegion = [
        ['page_tag_rumeur', '%DA%AF%D8%B1%D9%88%D9%87-%D9%88%D8%A7%DA%98%D9%87/%D8%B4%D8%A7%DB%8C%D8%B9%D9%87/'],
        ['page_devenir_un_observateur', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF/']
    ];

/**
 *
 * * META
 * */

var MetaDataStuff = {
    homepage: [
        //--- https://observers.rfi.fr/fa/
        ['url', 'slug', ''], // leave it empty
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_obs_fa.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ناظران  - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ثبت تصویر، جستجوی واقعیت، گواهی دادن - ناظران فرانس۲۴ و ار.اف.ای'],
        ['property_tag', 'og:description', 'ناظران طرح مشترک تلویزیون فرانس۲۴ و ار.اف.ای، شامل یک وبسایت و برنامه تلویزیونی و رادیویی است. ناظران بر اخبار و اتفاقات بین\u200cالمللی تمرکز دارد'],
        ['property_tag', 'og:url', 'https://observers.france24.com/fa/'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['name_tag', 'description', 'ناظران طرح مشترک تلویزیون فرانس۲۴ و ار.اف.ای، شامل یک وبسایت و برنامه تلویزیونی و رادیویی است. ناظران بر اخبار و اتفاقات بین\u200cالمللی تمرکز دارد'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversIran'],
        ['name_tag', 'twitter:creator', '@ObserversIran'],
        ['name_tag', 'keywords', 'اخبار,آماتور,debunked,اخبار جعلی,عکس,فیلم های,تصاویر,بین المللی'],
        ['name_tag', 'apple-mobile-web-app-title', 'ناظران  - RFI'],
        ['name_tag', 'application-name', 'ناظران  - RFI'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ثبت تصویر، جستجوی واقعیت، گواهی دادن - ناظران فرانس۲۴ و ار.اف.ای']


    ],
    page_tag_rumeur: [
        //--- https://observers.rfi.fr/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF
        ['url', 'slug', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_obs_fa.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ناظران  - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ارتباط با ما - ناظران - ار.اف.ای'],
        ['property_tag', 'og:description', 'ارتباط با ما'],
        ['property_tag', 'og:url', 'https://observers.france24.com/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['name_tag', 'description', 'اخبار و شرح و تحلیل\u200cها را شایعه در ناظران ار.اف.ای بخوانید و بشنوید'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversIran'],
        ['name_tag', 'twitter:creator', '@ObserversIran'],
        ['name_tag', 'apple-mobile-web-app-title', 'ناظران  - RFI'],
        ['name_tag', 'application-name', 'ناظران  - RFI'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ارتباط با ما - ناظران - ار.اف.ای']


    ],

    page_devenir_un_observateur: [
        //--- https://observers.rfi.fr/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF
        ['url', 'slug', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'],
        ['property_tag', 'og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_obs_fa.png'],
        ['property_tag', 'og:locale', 'fa_IR'],
        ['property_tag', 'og:site_name', 'ناظران  - RFI'],
        ['property_tag', 'og:type', 'website'],
        ['property_tag', 'og:title', 'ارتباط با ما - ناظران - ار.اف.ای'],
        ['property_tag', 'og:description', 'ارتباط با ما'],
        ['property_tag', 'og:url', 'https://observers.france24.com/fa/%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF'],
        ['property_tag', 'fb:app_id', '113191652055439'],
        ['property_tag', 'article:published_time', '2020-09-09T09:26:37+00:00'],
        ['property_tag', 'article:modified_time', '2022-08-22T09:02:21+00:00'],
        ['name_tag', 'description', 'ارتباط با ما'],
        ['name_tag', 'twitter:card', 'summary'],
        ['name_tag', 'twitter:site', '@ObserversIran'],
        ['name_tag', 'twitter:creator', '@ObserversIran'],
        ['name_tag', 'apple-mobile-web-app-title', 'ناظران  - RFI'],
        ['name_tag', 'application-name', 'ناظران  - RFI'],
        ['name_tag', 'msapplication-TileColor', '#000000'],
        ['name_tag', 'theme-color', '#ffffff'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['name_tag', 'apple-mobile-web-app-capable', 'yes'],
        ['title_tag', 'title', 'ارتباط با ما - ناظران - ار.اف.ای']

    ]


};
                     

                    /* export values */
                    return {
                        NavActualitesSlugNewsByRegion, 
                        //NavPlayerLinks,
                        MetaDataStuff
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

        
        


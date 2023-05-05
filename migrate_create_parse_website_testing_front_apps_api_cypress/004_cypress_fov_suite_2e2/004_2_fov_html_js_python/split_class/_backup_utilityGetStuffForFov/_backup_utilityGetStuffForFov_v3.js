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
            ['url','slug', ''], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'France 24 - International breaking news, top stories and headlines'], ['property_tag', 'og:description', 'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America'], ['property_tag', 'og:url', 'https://www.france24.com/en/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'Breaking news and world news from France 24 on Business, Sports, Culture. Video news. News from the US, Europe, Asia Pacific, Africa, Middle East, America'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'breaking,news,international,headlines,stories,reports,live,tv,videos'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'France 24 - International breaking news, top stories and headlines']
                ],
          page_france: [
            // https://www.france24.com/en/france/
            ['url', 'slug', 'france/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Latest news reports on FRANCE, French politics and culture - France 24'], ['property_tag', 'og:description', 'Get all the latest breaking news and reports on FRANCE here. French headlines, politics and culture on news channel France 24'], ['property_tag', 'og:url', 'https://www.france24.com/en/france/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'Get all the latest breaking news and reports on FRANCE here. French headlines, politics and culture on news channel France 24'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'france,politics,culture,society,international,breaking news,headlines,reports'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Latest news reports on FRANCE, French politics and culture - France 24']
          
            ],
          page_africa: [
            // https://www.france24.com/en/africa/
['url', 'slug', 'africa/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Breaking news from AFRICA, Maghreb and Sub-Saharan Africa - France 24'], ['property_tag', 'og:description', 'Get breaking news, the latest international news & multimedia reports on Africa here. South Africa, Egypt, Ghana, Libya,  Kenya, Morocco, Tunisia, Algeria.'], ['property_tag', 'og:url', 'https://www.france24.com/en/africa/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'Get breaking news, the latest international news & multimedia reports on Africa here. South Africa, Egypt, Ghana, Libya,  Kenya, Morocco, Tunisia, Algeria.'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'africa,politics,society,international,breaking,news,headlines,reports'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Breaking news from AFRICA, Maghreb and Sub-Saharan Africa - France 24']
          
            ],
          page_middle_east: [
            // https://www.france24.com/en/middle-east/
['url', 'slug', 'middle-east/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Latest news from the Middle East, daily international news reports - France 24'], ['property_tag', 'og:description', 'All the latest news from the Middle East, find all the news reports on Saudi Arabia, Israel, Gaza, Lebanon, West Bank, Iran, Iraq on France 24'], ['property_tag', 'og:url', 'https://www.france24.com/en/middle-east/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'All the latest news from the Middle East, find all the news reports on Saudi Arabia, Israel, Gaza, Lebanon, West Bank, Iran, Iraq on France 24'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'middle,east,syria,egypt,israel,politics,society,news,headlines,reports'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Latest news from the Middle East, daily international news reports - France 24']
            
            ],
          page_americas: [
            // https://www.france24.com/en/americas/
['url', 'slug', 'americas/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'International news from the Americas - France 24'], ['property_tag', 'og:description', 'Latest news from North Central and South America on France 24, special reports and video news. Canada, USA, Mexico, Chile, Venezuela, Brazil, Argentina, Cuba'], ['property_tag', 'og:url', 'https://www.france24.com/en/americas/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'Latest news from North Central and South America on France 24, special reports and video news. Canada, USA, Mexico, Chile, Venezuela, Brazil, Argentina, Cuba'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'americas,usa,canada,brazil,mexico,trump,politics,society,international,breaking,news'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'International news from the Americas - France 24']

          
            ],
          page_europe: [
            // https://www.france24.com/en/europe/
['url', 'slug', 'europe/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'News from Europe - Latest world headlines and daily news - France 24'], ['property_tag', 'og:description', 'All the latest European top stories and headlines about EU, UK, Brexit from France 24'], ['property_tag', 'og:url', 'https://www.france24.com/en/europe/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'All the latest European top stories and headlines about EU, UK, Brexit from France 24'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'europa,eu,france,germany,uk,brexit,spain,switzerland,politics,international,breaking news,headlines,parliament'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'News from Europe - Latest world headlines and daily news - France 24']
            
            ],
          page_asia_pacific: [
            // https://www.france24.com/en/asia-pacific/
['url', 'slug', 'asia-pacific/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'en_US'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'News from Asia-Pacific - Latest headlines and news reports - France 24'], ['property_tag', 'og:description', 'Get breaking news and news headlines from Asia and the Pacific on France 24, special reports on China, Korea, India, Japan, Australia'], ['property_tag', 'og:url', 'https://www.france24.com/en/asia-pacific/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '176585044433'], ['name_tag', 'description', 'Get breaking news and news headlines from Asia and the Pacific on France 24, special reports on China, Korea, India, Japan, Australia'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'asia,china,japan,india,politics,society,international,breaking news,headlines,reports'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'News from Asia-Pacific - Latest headlines and news reports - France 24']

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
['url','slug', ''], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'France 24 - Noticias y actualidad internacional en vivo'], ['property_tag', 'og:description', 'Información y Noticias - Información internacional en vivo de France 24 : deportes, cultura, economía y tecnología. Noticias de los Estados Unidos, Europa, Asia y el Pacífico, África, Oriente Medio,…'], ['property_tag', 'og:url', 'https://www.france24.com/es/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Información y Noticias - Información internacional en vivo de France 24 : deportes, cultura, economía y tecnología. Noticias de los Estados Unidos, Europa, Asia y el Pacífico, África, Oriente Medio,…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'France 24 - Noticias y actualidad internacional en vivo']
                
                ],
          page_america_latina: [
             //--- https://www.france24.com/es/am%C3%A9rica-latina/
['url','slug', 'am%C3%A9rica-latina'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'América Latina : información en vivo - France 24'], ['property_tag', 'og:description', 'Todas las noticias de América Latina, información y eventos en vivo'], ['property_tag', 'og:url', 'https://www.france24.com/es/am%C3%A9rica-latina/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Todas las noticias de América Latina, información y eventos en vivo'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'chile,bolivia,peru,ecuador,uruguay,paraguay america,latina,colombia,mexico,brasil,argentina,venezuela,noticias,reportajes,economía,sociedad,politica'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'América Latina : información en vivo - France 24']
          
            ],
          page_eeuu_canada: [
             //--- https://www.france24.com/es/eeuu-canad%C3%A1/
['url','slug', 'eeuu-canad%C3%A1'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Todas las noticias de EE.UU. y Canadá - France 24'], ['property_tag', 'og:description', 'Todas las noticias, política y economía en  Estados Unidos'], ['property_tag', 'og:url', 'https://www.france24.com/es/eeuu-canad%C3%A1/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Todas las noticias, política y economía en  Estados Unidos'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'estados-unidos,canada,politica,internacional,noticias,informacion,economía,videos,reportajes'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Todas las noticias de EE.UU. y Canadá - France 24']
          
            ],
          page_europa: [
             //--- https://www.france24.com/es/europa/
['url','slug', 'europa'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Europa : noticias económicas y políticas en vivo - France 24'], ['property_tag', 'og:description', 'Noticias y actualidad política y económica en Europa'], ['property_tag', 'og:url', 'https://www.france24.com/es/europa/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Noticias y actualidad política y económica en Europa'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'francia,italia,alemania,españa,reino unido,europa,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,portugal,grecia,austria,dinamarca,polonia,noruega,suecia,irlanda,finlandia'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Europa : noticias económicas y políticas en vivo - France 24']
            
            ],
          page_francia: [
             //--- https://www.france24.com/es/francia/
['url','slug', 'francia'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Francia : información en vivo - France 24'], ['property_tag', 'og:description', 'Francia : Noticias yactualidad minuto a minuto'], ['property_tag', 'og:url', 'https://www.france24.com/es/francia/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Francia : Noticias yactualidad minuto a minuto'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'francia,europa,paris,informacion,actualidad,noticias,internacional,politica,economía,cultura,tecnologia,deportes,video'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Francia : información en vivo - France 24']
          
            ],
          page_asia_pacifico: [

 //--- https://www.france24.com/es/asia-pac%C3%ADfico/
['url','slug', 'asia-pac%C3%ADfico'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Noticias y reportajes en Asia y en el Pacífico - France 24 - France 24'], ['property_tag', 'og:description', 'Actualidad en vivo en Asia Pacífico'], ['property_tag', 'og:url', 'https://www.france24.com/es/asia-pac%C3%ADfico/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Actualidad en vivo en Asia Pacífico'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'asia,china,japon,informacion,actualidad,noticias,internacional,politica,economía,cultura,deportes,corea del norte,corea del sur,filipina,tíbet,laos,camboya,vietnam'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Noticias y reportajes en Asia y en el Pacífico - France 24 - France 24']
            
            ],
          page_medio_oriente: [
             //--- https://www.france24.com/es/medio-oriente/
['url','slug', 'medio-oriente'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Noticias y reportajes en el Oriente Medio - France 24'], ['property_tag', 'og:description', 'Todas las noticias y eventos en vivo en Medio Oriente'], ['property_tag', 'og:url', 'https://www.france24.com/es/medio-oriente/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Todas las noticias y eventos en vivo en Medio Oriente'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'medio,oriente,siria,libano,israel,palestina,egipto,irán,arabia saudita,omán,yemén,turquía,informacion,actualidad,noticias,politica,economía,cultura,deportes'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Noticias y reportajes en el Oriente Medio - France 24']

            ],
          page_africa: [

 //--- https://www.france24.com/es/%C3%A1frica/
['url','slug', '%C3%A1frica'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'es_LA'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Noticias en África y Magreb, actualidad económica y política - France 24 - France 24'], ['property_tag', 'og:description', 'Últimas noticias políticas y económicas en África - Noticias y eventos en Túnez, Argelia y Marruecos'], ['property_tag', 'og:url', 'https://www.france24.com/es/%C3%A1frica/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '1727280190891954'], ['name_tag', 'description', 'Últimas noticias políticas y económicas en África - Noticias y eventos en Túnez, Argelia y Marruecos'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_es'], ['name_tag', 'twitter:creator', '@France24_es'], ['name_tag', 'keywords', 'africa,informacion,actualidad,noticias,reportajes,politica,economía,magreb,mali,rdc,gambia,nigeria,áfrica,túnez,argelia,marruecos'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Noticias en África y Magreb, actualidad económica y política - France 24 - France 24']

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
                ['url', 'slug',''], // keep it empty
                ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', "France 24 - Infos, news & actualités - L'information internationale en direct"], ['property_tag', 'og:description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['property_tag', 'og:url', 'https://www.france24.com/fr/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24 décrypte l’actualité internationale, politique, l’économie, l’environnement, la culture, le sport, en France et à l’international avec analyses, des interviews, des reportages exclusifs, des…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'infos,actualites,news,information,international,direct,reportages'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', "France 24 - Infos, news & actualités - L'information internationale en direct"]
            ],
          page_france: [
                    ['url', 'slug', 'france/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'France : News et actualité en continu - France 24'], ['property_tag', 'og:description', 'France 24  couvre les évènements en France et en Outre-mer : politique, culture, faits de société, énergie, crise sociale, sport, santé, avec ses reportages, enquêtes, débats et analyses.'], ['property_tag', 'og:url', 'https://www.france24.com/fr/france/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24  couvre les évènements en France et en Outre-mer : politique, culture, faits de société, énergie, crise sociale, sport, santé, avec ses reportages, enquêtes, débats et analyses.'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'france,infos,actualites,news,information,international,reportages,politique,societe,culture'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'France : News et actualité en continu - France 24']
            ],
          page_afrique: [
                    ['url', 'slug', 'afrique/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Politique & économie en Afrique, infos & news au Maghreb - France 24'], ['property_tag', 'og:description', 'France 24  décrypte toutes les actualités africaines, au Maghreb, au Sahel, en Afrique de l’Ouest, Afrique centrale, orientale, et australe, avec son réseau de correspondants, des experts, dans ses journaux,…'], ['property_tag', 'og:url', 'https://www.france24.com/fr/afrique/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24  décrypte toutes les actualités africaines, au Maghreb, au Sahel, en Afrique de l’Ouest, Afrique centrale, orientale, et australe, avec son réseau de correspondants, des experts, dans ses journaux,…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', "afrique,infos,actualites,news,reportages,politique,economie,tunisie,maroc,cote d'ivoire,mali,maghreb"], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Politique & économie en Afrique, infos & news au Maghreb - France 24']
            ],
          page_moyen_orient: [
            ['url', 'slug', 'moyen-orient/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', "Informations et news au Moyen-Orient - Toute l'actualité sur France 24"], ['property_tag', 'og:description', 'France 24 couvre et analyse toute l’actualité politique et sociétale au Moyen Orient, de l’Arabie Saoudite, en passant par l’Irak, l’Iran, le Liban, l’Égypte, Israël, la Syrie, la Jordanie et les pays…'], ['property_tag', 'og:url', 'https://www.france24.com/fr/moyen-orient/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24 couvre et analyse toute l’actualité politique et sociétale au Moyen Orient, de l’Arabie Saoudite, en passant par l’Irak, l’Iran, le Liban, l’Égypte, Israël, la Syrie, la Jordanie et les pays…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'moyen,orient,syrie,liban,egypte,israel,palestine,infos,actualites,politique'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', "Informations et news au Moyen-Orient - Toute l'actualité sur France 24"]
            ],
          page_europe: [
            ['url', 'slug', 'europe/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'News, actualité politique & économique en Europe - France 24'], ['property_tag', 'og:description', 'France 24 décrypte les évènements et l’actualité sur le continent européen et de l’Union européenne et ses 27 États membres. Retrouvez rencontres, débats, reportages, analyses sur tout ce qui concerne…'], ['property_tag', 'og:url', 'https://www.france24.com/fr/europe/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24 décrypte les évènements et l’actualité sur le continent européen et de l’Union européenne et ses 27 États membres. Retrouvez rencontres, débats, reportages, analyses sur tout ce qui concerne…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'europe,infos,actualites,news,reportages,politique,economie,societe,france,allemagne'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'News, actualité politique & économique en Europe - France 24']
            ],
          page_ameriques: [
            ['url', 'slug', 'am%C3%A9riques/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Amériques : information en direct, news et actu en continu - France 24'], ['property_tag', 'og:description', 'France 24 couvre l’actualité américaine, politique, géostratégique, économique du continent, des États-Unis au Chili, en passant par le Canada, le Mexique, le Brésil, l’Argentine, à travers ses émissions,…'], ['property_tag', 'og:url', 'https://www.france24.com/fr/am%C3%A9riques/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24 couvre l’actualité américaine, politique, géostratégique, économique du continent, des États-Unis au Chili, en passant par le Canada, le Mexique, le Brésil, l’Argentine, à travers ses émissions,…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'ameriques,usa,etats-unis,canada,mexique,bresil,infos,actualites,news,politique,economie'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Amériques : information en direct, news et actu en continu - France 24']
            ],
          page_asie_pacifique: [
            ['url', 'slug', 'asie-pacifique/'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'fr_FR'], ['property_tag', 'og:site_name', 'France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'Asie-Pacifique : Actualité internationale en continu - France 24'], ['property_tag', 'og:description', 'France 24 décrypte les évènements socio-économiques et politiques de la région Asie-Pacifique : Océanie, Asie du Sud, Asie de l’Est, Asie du Sud-Est, notamment les pays comme la Chine, le Japon, l’Australie,…'], ['property_tag', 'og:url', 'https://www.france24.com/fr/asie-pacifique/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '153632746935'], ['name_tag', 'description', 'France 24 décrypte les évènements socio-économiques et politiques de la région Asie-Pacifique : Océanie, Asie du Sud, Asie de l’Est, Asie du Sud-Est, notamment les pays comme la Chine, le Japon, l’Australie,…'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@FRANCE24'], ['name_tag', 'twitter:creator', '@FRANCE24'], ['name_tag', 'keywords', 'asie,chine,japon,inde,coree,infos,actualites,news,politique,economie,societe'], ['name_tag', 'apple-mobile-web-app-title', 'France 24'], ['name_tag', 'application-name', 'France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'Asie-Pacifique : Actualité internationale en continu - France 24']
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
['url', 'slug', ''], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'فرانس 24 - الأخبار الدولية على مدار الساعة على قناة فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد والثقافة عبر برامج ونشرات إخبارية على مدار الساعة'], ['property_tag', 'og:url', 'https://www.france24.com/ar/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد والثقافة عبر برامج ونشرات إخبارية على مدار الساعة'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'الأخبار,مباشر,فيديو,فيديو تحت الطلب,تلفزيون,ريبورتاج,مقالات,خبر عاجل,دولية'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'فرانس 24 - الأخبار الدولية على مدار الساعة على قناة فرانس 24']
                
                ],
          page_france: [
             //--- https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/
['url', 'slug', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'فرنسا على موقع فرانس 24 - فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,فرنسا,اقتصاد,الثقافة'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'فرنسا على موقع فرانس 24 - فرانس 24']
          
            ],
          page_maghreb: [
             //--- https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/
['url', 'slug', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'الأخبار المغاربية على موقع France 24 - France 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل الأخبار السياسية الفرنسية، نقاش وتحليل'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب,الجزائر,تونس,ليبيا,موريتانيا'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'الأخبار المغاربية على موقع France 24 - France 24']
          
            ],
          page_moyen_orient: [
             //--- https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/
['url', 'slug', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'الشرق الأوسط ودول الخليج على موقع فرانس 24 - فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد الشرق أوسطية والخليجية - برامج و نقاش عن العالم العربي'], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد الشرق أوسطية والخليجية - برامج و نقاش عن العالم العربي'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,سوريا,لبنان,مصر,إسرائيل,فلسطين'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'الشرق الأوسط ودول الخليج على موقع فرانس 24 - فرانس 24']
            
            ],
          page_afrique: [
             //--- https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/
['url', 'slug', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'أفريقيا ودول المغرب العربي على موقع فرانس 24 - فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أفريقيا ودول المغرب العربي'], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أفريقيا ودول المغرب العربي'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أفريقيا,المغرب'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'أفريقيا ودول المغرب العربي على موقع فرانس 24 - فرانس 24']
          
            ],
          page_europe: [

 //--- https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/
['url', 'slug', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'أوروبا على موقع فرانس 24 - فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أوروبا ودول منطقة اليورو - برامج و نقاش'], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أوروبا ودول منطقة اليورو - برامج و نقاش'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,أوروبا,فرنسا,ألمانيا'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'أوروبا على موقع فرانس 24 - فرانس 24']
            
            ],
          page_usa: [
             //--- https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/
['url', 'slug', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'الأمريكتان على موقع فرانس 24 - فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أمريكا الشمالية والجنوبية - برامج ونقاش'], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في أمريكا الشمالية والجنوبية - برامج ونقاش'], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,الولايات المتحدة,أمريكا'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'الأمريكتان على موقع فرانس 24 - فرانس 24']

            ],
          page_asie: [
             //--- https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/
['url', 'slug', '%D8%A2%D8%B3%D9%8A%D8%A7'], ['name_tag', 'viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover'], ['property_tag', 'og:image', 'https://static.france24.com/meta_og_twcards/F24_TW.png'], ['property_tag', 'og:locale', 'ar_AR'], ['property_tag', 'og:site_name', 'فرانس 24 / France 24'], ['property_tag', 'og:type', 'website'], ['property_tag', 'og:title', 'آسيا على موقع فرانس 24 - فرانس 24'], ['property_tag', 'og:description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في قارة آسيا - الصين الهند اليابان - برامج '], ['property_tag', 'og:url', 'https://www.france24.com/ar/%D8%A2%D8%B3%D9%8A%D8%A7/'], ['property_tag', 'fb:app_id', '121241974571942'], ['property_tag', 'fb:pages', '298861020736'], ['name_tag', 'description', 'الأخبار الدولية على مدار الساعة على قناة فرانس 24، تابعوا كل أخبار السياسة والاقتصاد في قارة آسيا - الصين الهند اليابان - برامج '], ['name_tag', 'twitter:card', 'summary'], ['name_tag', 'twitter:site', '@France24_ar'], ['name_tag', 'twitter:creator', '@France24_ar'], ['name_tag', 'keywords', 'مجتمع,سياسة,أخبار,ريبورتاج,خبر عاجل,آسيا,الصين,اليابان'], ['name_tag', 'apple-mobile-web-app-title', 'فرانس 24 / France 24'], ['name_tag', 'application-name', 'فرانس 24 / France 24'], ['name_tag', 'msapplication-TileColor', '#00a7e3'], ['name_tag', 'theme-color', '#ffffff'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['name_tag', 'apple-mobile-web-app-capable', 'yes'], ['title_tag', 'title', 'آسيا على موقع فرانس 24 - فرانس 24']

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

                    // RFI
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
                                            
                    /* export values */
                    return { NavActualitesSlugNewsByRegion};

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



                    /* export values */
                    return { NavActualitesSlugNewsByRegion};


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

                    /* export values */
                    return { NavActualitesSlugNewsByRegion};
  
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
                                  page_ameriques: [
                                    ['slug','am%C3%A9ricas/']
                                    ],
                                  page_france: [
                                    ['slug','francia/']
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
                        
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                    
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
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                       
                    
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

                        
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                    
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

                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                        
                    
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
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                    
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


                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                        
                    
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
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                    
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

                   
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                    
                    break;
                    case 'RFI_RO':
                        
                    /* export values */
                        return { };
                    
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
                    /* export values */
                        return { NavActualitesSlugNewsByRegion };
                    
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
                        /* export values */
                        return { NavActualitesSlugNewsByRegion };
                        
                    
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
* * PLAYER
* */            

                        var NavPlayerLinks = [
                        ['en_direct', 'ph%C3%A1t-tr%E1%BB%B1c-ti%E1%BA%BFp']
                        ];


                    break;
                    // MCD
                    case 'MCD_AR':
/**
*
* * SEO
* */ 





/**
*
* * PLAYER
* */ 




/**
*
* * META
* */
/*
var MetaDataStuff = {
          xxx: [
                
                ],
          xxx: [
          
            ],
          xxx: [
          
            ],
          xxx: [
            
            ],
          xxx: [
          
            ],
          xxx: [
            
            ],
          xxx: [

            ]
    };
*/
                        /* export values */
                        return { MetaDataStuff };
                        
                        

                    break;
                    // FLE
                    case 'FLE_FR':
                        
/**
*
* * SEO
* */ 

// FLE_FR
var NavActualitesSlugNewsByRegion = [];


                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

                    break;
                    case 'FLE_ES':
/**
*
* * SEO
* */ 

// FLE_ES
var NavActualitesSlugNewsByRegion = [];


                    /* export values */
                    return { NavActualitesSlugNewsByRegion };
                        

                    break;
                    case 'FLE_RU':
 /**
*
* * SEO
* */ 

// FLE_RU
var NavActualitesSlugNewsByRegion = [];
                       

                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

                    break;
                    case 'FLE_AR':
/**
*
* * SEO
* */ 

// FLE_AR
var NavActualitesSlugNewsByRegion = [];


                    /* export values */
                    return { NavActualitesSlugNewsByRegion };
                        

                    break;
                    case 'FLE_EN':
/**
*
* * SEO
* */ 

// FLE_EN
var NavActualitesSlugNewsByRegion = [];
                        

                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

                    break;
                    case 'FLE_BR':
/**
*
* * SEO
* */ 

// FLE_BR
var NavActualitesSlugNewsByRegion = [];
                        

                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

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


                    /* export values */
                    return { NavActualitesSlugNewsByRegion };
                        
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

                    /* export values */
                    return { NavActualitesSlugNewsByRegion };
                        
                    break;
                    case 'OBS_AR':
/**
*
* * SEO
* */ 
// OBS_AR
var NavActualitesSlugNewsByRegion = [];


                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

                        
                    break;
                   case 'OBS_FA':

/**
*
* * SEO
* */ 
// OBS_FA
var NavActualitesSlugNewsByRegion = [];
                     

                    /* export values */
                    return { NavActualitesSlugNewsByRegion };

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
    ['page_asie-pacifique', 'asie-pacifique/'],
    ['page_europe', 'europe/'],
    ['page_moyen-orient', 'moyen-orient/'],
    ['page_france', 'france/'],
    ['page_monde', 'monde/']
];


/**
*
* * META
* */

                    var MetaDataStuff = {
                                  page_afrique: [
                                    ['slug','afrique/'],
                                    ['title_tag','title', 'RFI - Actualités, info, news en direct - Radio France Internationale'],
                                    // property
                                    ['property_tag','og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], 
                                    ['property_tag','og:locale', 'fr_FR'], 
                                    ['property_tag', 'og:site_name', 'RFI'], 
                                    ['property_tag', 'og:type', 'website', 'property']
                                  ],
                                  page_ameriques: [
                                    ['slug','ameriques/'],
                                    ['title_tag','title', 'RFI - Actualités, info, news en direct - Radio France Internationale'],
                                    // property
                                    ['property_tag','og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], 
                                    ['property_tag','og:locale', 'fr_FR'], 
                                    ['property_tag', 'og:site_name', 'RFI'], 
                                    ['property_tag', 'og:type', 'website', 'property']
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

        
        


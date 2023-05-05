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

    brandLang;
    deviceType;

    constructor(brandLang, deviceType) {
        this.brandLang = brandLang;
        this.deviceType = deviceType;

    }
    getSelectionVerifier() {
        // let brandLang = Cypress.env('BRAND_LANG');

        switch (brandLang) {

            // F24
            case 'F24_EN':
                return 'F24_EN';
            case 'F24_ES':
                return 'F24_ES';
            case 'F24_FR':
                return 'F24_FR';
            case 'F24_AR':
                return 'F24_AR';

            // RFI
            case 'RFI_EN':
                return 'RFI_EN';
            case 'RFI_CN':
                return 'RFI_CN';
            case 'RFI_ES':
                return 'RFI_ES';
            case 'RFI_FA':
                return 'RFI_FA';
            case 'RFI_HA':
                return 'RFI_HA';
            case 'RFI_KM':
                return 'RFI_KM';
            case 'RFI_SW':
                return 'RFI_SW';
            case 'RFI_MA':
                return 'RFI_MA';
            case 'RFI_FF':
                return 'RFI_FF';
            case 'RFI_PT':
                return 'RFI_PT';
            case 'RFI_BR':
                return 'RFI_BR';
            case 'RFI_RO':
                return 'RFI_RO';
            case 'RFI_RU':
                return 'RFI_RU';
            case 'RFI_UK':
                return 'RFI_UK';
            case 'RFI_VI':
                return 'RFI_VI';

            // MCD
            case 'MCD_AR':
                return 'MCD_AR';

            // FLE
            case 'FLE_FR':
                return 'FLE_FR';

            case 'FLE_ES':
                return 'FLE_ES';

            case 'FLE_RU':
                return 'FLE_RU';

            case 'FLE_AR':
                return 'FLE_AR';

            case 'FLE_EN':
                return 'FLE_EN';

            case 'FLE_BR':
                return 'FLE_BR';

            // OBS
            case 'OBS_FR':
                return 'OBS_FR';
            case 'OBS_EN':
                return 'OBS_EN';
            case 'OBS_AR':
                return 'OBS_AR';
            case 'OBS_FA':
                return 'OBS_FA';
            // Default
            default:
                // RFI_FR
                return 'RFI_FR';

        }// EOS


    }// EOF


/*
isMobile: device === 'mobile',
isTablet: device === 'tablet',
isDesktop: device === 'desktop',

https://docs.cypress.io/api/commands/viewport
 */
    getDeviceType() {

        switch (deviceType) {

            case 'mobile':
                
                
                var userAgent = 'iphone-6';
                var userAgentOrientation = 'portrait'; // portrait or landscape
                var viewportWidth = 375;
                var viewportHeight = 667;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               

            case 'tablet':
                
                var userAgent = 'ipad-2';
                var userAgentOrientation = 'landscape'; // portrait or landscape
                var viewportWidth = 768;
                var viewportHeight = 1024;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
                

            // Default is desktop
            default:
                // desktop
                var userAgent = 'macbook-13';
                var userAgentOrientation = 'portrait'; // useless
                var viewportWidth = 1280;
                var viewportHeight = 800;

                

                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
                


            }// EOS



        }// EOF

        getSetInitPerBrandLang() {
        // let brandLang = Cypress.env('BRAND_LANG');

            switch (brandLang) {

                    // F24
                    case 'F24_EN':
/**
*
* * PLAYER
* */                    var NavPlayerLinks = [
                        ['en_direct', 'live']
                        ];
                        

                        return {NavPlayerLinks};                       
                    
                    case 'F24_ES':

/**
*
* * PLAYER
* */            
                        

                        var NavPlayerLinks = [
                        ['en_direct', 'en-vivo']
                        ];

                        
                        return {NavPlayerLinks};                       

                    case 'F24_FR':
/**
*
* * SEO
* */                      
                        
                        var NavActualitesSlugNewsByRegion = [
                            ['page_france','france/'],
                            ['page_afrique','afrique/'],
                            ['page_moyen_orient','moyen-orient/'],
                            ['page_europe','europe/'],
                            ['page_ameriques','am%C3%A9riques/'],
                            ['page_asie_pacifique','asie-pacifique/']
                        ];


                        
/**
*
* * PLAYER
* */            
                        var NavPlayerLinks = [
                              'direct'
                        ];




                        return {NavActualitesSlugNewsByRegion, NavPlayerLinks};


                    case 'F24_AR':

/**
*
* * PLAYER
* */            
                        
                        var NavPlayerLinks = [
                        ['en_direct', '%D8%A7%D9%84%D8%A8%D8%AB-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1']
                        ];


                        
                        return {NavPlayerLinks};                       

                    // RFI
                    case 'RFI_EN':
                                            
                    /* export values */
                        return { };

                    case 'RFI_CN':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_ES':

/**
*
* * SEO
* */
                        var NavActualitesSlugNewsByRegion = [
                              ['page_ameriques', 'am%C3%A9ricas/'],
                              ['page_france','francia/'],
                              ['page_europe','europa/'],
                              ['page_environnement','medioambiente/'],
                              ['page_sante','salud/'],
                              ['page_culture','cultura/'],
                              ['page_economie','econom%C3%ADa/'],
                              ['page_sports','deportes/']
                        ];
                        

/**
*
* * PLAYER
* */            

                        var NavPlayerLinks = [
                        ['en_direct', 'en-vivo']
                        ];

                        return {NavActualitesSlugNewsByRegion, NavPlayerLinks};


                    
                    case 'RFI_FA':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_HA':

                    /* export values */
                        return { };
                       
                    
                    case 'RFI_KM':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_SW':

                    /* export values */
                        return { };
                        
                    
                    case 'RFI_MA':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_FF':

                    /* export values */
                        return { };
                        
                    
                    case 'RFI_PT':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_BR':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_RO':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_RU':
                        
                    /* export values */
                        return { };
                    
                    case 'RFI_UK':

                    /* export values */
                        return { };
                        
                    
                    case 'RFI_VI':
                        

/**
*
* * PLAYER
* */            

                        var NavPlayerLinks = [
                        ['en_direct', 'ph%C3%A1t-tr%E1%BB%B1c-ti%E1%BA%BFp']
                        ];

                    // MCD
                    case 'MCD_AR':

                    /* export values */
                        return { };
                        

                    // FLE
                    case 'FLE_FR':
                        

                    /* export values */
                        return { };

                    case 'FLE_ES':

                    /* export values */
                        return { };
                        

                    case 'FLE_RU':
                        
                    /* export values */
                        return { };

                    case 'FLE_AR':

                    /* export values */
                        return { };
                        

                    case 'FLE_EN':
                        
                    /* export values */
                        return { };

                    case 'FLE_BR':
                        
                    /* export values */
                        return { };

                    // OBS
                    case 'OBS_FR':

                    /* export values */
                        return { };
                        
                    case 'OBS_EN':

                    /* export values */
                        return { };
                        
                    case 'OBS_AR':

                    /* export values */
                        return { };

                        
                    case 'OBS_FA':
                       
                        /* export values */
                        return { };

                    // Default RFI_FR
                    default:
                        
   
/**
*
* * SEO
* */
                        var NavActualitesSlugNewsByRegion = [
                              ['page_afrique', 'afrique/'],
                              ['page_ameriques','am%C3%A9riques/'],
                              ['page_asie_pacifique','asie-pacifique/'],
                              ['page_europe','europe/'],
                              ['page_moyen_orient','moyen-orient/'],
                              ['page_france','france/'],
                              ['page_monde','monde/']
                        ];

/**
*
* * META
* */

        /* meta_stuff for RFI_FR Homepage */

        var MetaStuff = [
            // title
            ['title_tag','title', 'RFI - Actualités, info, news en direct - Radio France Internationale'],
            // property
            ['property_tag','og:image', 'https://static.rfi.fr/meta_og_twcards/RFI_TW.png'], 
            ['property_tag','og:locale', 'fr_FR'], 
            ['property_tag', 'og:site_name', 'RFI'], 
            ['property_tag', 'og:type', 'website', 'property'],
            ['property_tag', 'og:title', 'RFI - Actualités, info, news en direct - Radio France Internationale'], 
            ['property_tag', 'og:description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], 
            ['property_tag', 'og:url', 'https://www.rfi.fr/fr/'], 
            ['property_tag', 'fb:app_id', '113191652055439'], 
            ['property_tag', 'fb:pages', '67334499441'], 
            // name
            ['name_tag', 'description', "Suivez toute l'information politique, culturelle, sportive en direct et en continu sur RFI. Les dernières informations, news et actualités en France et à l'international."], 
            ['name_tag', 'twitter:card', 'summary'], 
            ['name_tag', 'twitter:site', '@RFI'], 
            ['name_tag', 'twitter:creator', '@RFI'], 
            ['name_tag', 'keywords', 'homepage,accueil,actualités,news,reportages,radio,dossiers,international,monde,info'], 
            ['name_tag', 'apple-mobile-web-app-title', 'RFI'], 
            ['name_tag', 'application-name', 'RFI'], 
            ['name_tag', 'msapplication-TileColor', '#e2001a'], 
            ['name_tag', 'theme-color', '#ffffff'], 
            ['name_tag', 'apple-mobile-web-app-capable', 'yes']
            ];




 
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
                        MetaStuff
                    };




            }// EOS


        }// EOF

}// EOC


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
* * PLAYER
* */                    var NavPlayerLinks = [
                        ['en_direct', 'live']
                        ];
                        

                        return {NavPlayerLinks};                       
                    break;
                    case 'F24_ES':

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
* * META
* */

                    var MetaDataStuff = {
                                  homepage: [
                                            ['slug','/'],
                                            // title
                                            ['title_tag','title', 'XXX_TEXT'],
                                            // property
                                            ['property_tag','og:image', 'XXX_TEXT'], 
                                            ['property_tag','og:locale', 'XXX_TEXT'], 
                                            ['property_tag', 'og:site_name', 'XXX_TEXT'], 
                                            ['property_tag', 'og:type', 'website', 'XXX_TEXT'],
                                            ['property_tag', 'og:title', 'XXX_TEXT'], 
                                            ['property_tag', 'og:description', "XXX_TEXT"], 
                                            ['property_tag', 'og:url', 'XXX_TEXT'], 
                                            ['property_tag', 'fb:app_id', 'XXX_TEXT'], 
                                            ['property_tag', 'fb:pages', 'XXX_TEXT'],
                                            // name
                                            ['name_tag', 'description', "XXX_TEXT"], 
                                            ['name_tag', 'twitter:card', 'summary'], 
                                            ['name_tag', 'twitter:site', 'XXX_TEXT'], 
                                            ['name_tag', 'twitter:creator', 'XXX_TEXT'], 
                                            ['name_tag', 'keywords', 'XXX_TEXT'], 
                                            ['name_tag', 'apple-mobile-web-app-title', 'XXX_TEXT'], 
                                            ['name_tag', 'application-name', 'XXX_TEXT'], 
                                            ['name_tag', 'msapplication-TileColor', 'XXX_TEXT'], 
                                            ['name_tag', 'theme-color', 'XXX_TEXT'], 
                                            ['name_tag', 'apple-mobile-web-app-capable', 'XXX_TEXT']
                                    ],
                                  page_france: [
                                            ['slug','france/'],
                                            // title
                                            ['title_tag','title', 'XXX_TEXT'],
                                            // property
                                            ['property_tag','og:image', 'XXX_TEXT'], 
                                            ['property_tag','og:locale', 'XXX_TEXT'], 
                                            ['property_tag', 'og:site_name', 'XXX_TEXT'], 
                                            ['property_tag', 'og:type', 'website', 'XXX_TEXT'],
                                            ['property_tag', 'og:title', 'XXX_TEXT'], 
                                            ['property_tag', 'og:description', "XXX_TEXT"], 
                                            ['property_tag', 'og:url', 'XXX_TEXT'], 
                                            ['property_tag', 'fb:app_id', 'XXX_TEXT'], 
                                            ['property_tag', 'fb:pages', 'XXX_TEXT'],
                                            // name
                                            ['name_tag', 'description', "XXX_TEXT"], 
                                            ['name_tag', 'twitter:card', 'summary'], 
                                            ['name_tag', 'twitter:site', 'XXX_TEXT'], 
                                            ['name_tag', 'twitter:creator', 'XXX_TEXT'], 
                                            ['name_tag', 'keywords', 'XXX_TEXT'], 
                                            ['name_tag', 'apple-mobile-web-app-title', 'XXX_TEXT'], 
                                            ['name_tag', 'application-name', 'XXX_TEXT'], 
                                            ['name_tag', 'msapplication-TileColor', 'XXX_TEXT'], 
                                            ['name_tag', 'theme-color', 'XXX_TEXT'], 
                                            ['name_tag', 'apple-mobile-web-app-capable', 'XXX_TEXT']
                                    ],
                                  page_afrique: [
                                            ['slug','afrique/'],
                                            // title
                                            ['title_tag','title', 'XXX_TEXT'],
                                            // property
                                            ['property_tag','og:image', 'XXX_TEXT'], 
                                            ['property_tag','og:locale', 'XXX_TEXT'], 
                                            ['property_tag', 'og:site_name', 'XXX_TEXT'], 
                                            ['property_tag', 'og:type', 'website', 'XXX_TEXT'],
                                            ['property_tag', 'og:title', 'XXX_TEXT'], 
                                            ['property_tag', 'og:description', "XXX_TEXT"], 
                                            ['property_tag', 'og:url', 'XXX_TEXT'], 
                                            ['property_tag', 'fb:app_id', 'XXX_TEXT'], 
                                            ['property_tag', 'fb:pages', 'XXX_TEXT'],
                                            // name
                                            ['name_tag', 'description', "XXX_TEXT"], 
                                            ['name_tag', 'twitter:card', 'summary'], 
                                            ['name_tag', 'twitter:site', 'XXX_TEXT'], 
                                            ['name_tag', 'twitter:creator', 'XXX_TEXT'], 
                                            ['name_tag', 'keywords', 'XXX_TEXT'], 
                                            ['name_tag', 'apple-mobile-web-app-title', 'XXX_TEXT'], 
                                            ['name_tag', 'application-name', 'XXX_TEXT'], 
                                            ['name_tag', 'msapplication-TileColor', 'XXX_TEXT'], 
                                            ['name_tag', 'theme-color', 'XXX_TEXT'], 
                                            ['name_tag', 'apple-mobile-web-app-capable', 'XXX_TEXT']
                                  ],
                                  page_moyen_orient: [
                                    ['slug','moyen-orient/'],

                                    ],
                                  page_europe: [
                                    ['slug','europe/'],

                                    ],
                                  page_ameriques: [
                                    ['slug','am%C3%A9riques/'],

                                    ],
                                  page_asie_pacifique: [
                                    ['slug','asie-pacifique/'],

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
                                            
                    /* export values */
                        return { };

                    break;
                    case 'RFI_CN':
                        
                    /* export values */
                        return { };
                    
                    break;
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
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_HA':

                    /* export values */
                        return { };
                       
                    
                    break;
                    case 'RFI_KM':
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_SW':

                    /* export values */
                        return { };
                        
                    
                    break;
                    case 'RFI_MA':
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_FF':

                    /* export values */
                        return { };
                        
                    
                    break;
                    case 'RFI_PT':
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_BR':
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_RO':
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_RU':
                        
                    /* export values */
                        return { };
                    
                    break;
                    case 'RFI_UK':

                    /* export values */
                        return { };
                        
                    
                    break;
                    case 'RFI_VI':
                        

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

                    /* export values */
                        return { };
                        

                    break;
                    // FLE
                    case 'FLE_FR':
                        

                    /* export values */
                        return { };

                    break;
                    case 'FLE_ES':

                    /* export values */
                        return { };
                        

                    break;
                    case 'FLE_RU':
                        
                    /* export values */
                        return { };

                    break;
                    case 'FLE_AR':

                    /* export values */
                        return { };
                        

                    break;
                    case 'FLE_EN':
                        
                    /* export values */
                        return { };

                    break;
                    case 'FLE_BR':
                        
                    /* export values */
                        return { };

                    break;
                    // OBS
                    case 'OBS_FR':

                    /* export values */
                        return { };
                        
                    break;
                    case 'OBS_EN':

                    /* export values */
                        return { };
                        
                    break;
                    case 'OBS_AR':

                    /* export values */
                        return { };

                        
                    break;
                    case 'OBS_FA':
                       
                        /* export values */
                        return { };

                    break;
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

        
        


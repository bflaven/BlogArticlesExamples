// main_section_fovs_1.js                    


/*
                    
                    Fournir les slugs de tous les sites FOV
                    Exemple de découpage d'un site prenons RFI_RU

*** Les sections, indiquer la traduction cela aide à la compréhension

// Russie
https://www.rfi.fr/ru/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/

// France
https://www.rfi.fr/ru/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/

// Europe
https://www.rfi.fr/ru/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/

// Culture
https://www.rfi.fr/ru/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/

// Ukraine
https://www.rfi.fr/ru/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/

// Sport
https://www.rfi.fr/ru/%D1%81%D0%BF%D0%BE%D1%80%D1%82/



*** output, array JS injecté dans une var nommé NavActualitesSlugNewsByRegion

        var NavActualitesSlugNewsByRegion = [
            '/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/',// Russie
            '/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/', // France
            '/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/', // Europe
            '/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/', // Culture
            '/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/', // Ukraine
            '/%D1%81%D0%BF%D0%BE%D1%80%D1%82/', // Sport
            ];



                     */


                    // F24
                    case 'F24_EN':
                        return 'F24_EN';
                    case 'F24_ES':
                        return 'F24_ES';
                    case 'F24_FR':
                        
                        var NavActualitesSlugNewsByRegion = [
                            'france/',
                            'afrique/',
                            'moyen-orient/',
                            'europe/',
                            'am%C3%A9riques/',
                            'asie-pacifique/'
                        ];

                        return {NavActualitesSlugNewsByRegion};



                    case 'F24_AR':
                        return 'F24_AR';

                    // RFI
                    case 'RFI_EN':
                        return 'RFI_EN';
                    case 'RFI_CN':
                        return 'RFI_CN';
                    case 'RFI_ES':
                        
                        var NavActualitesSlugNewsByRegion = [
                            'am%C3%A9ricas/',
                            'francia/',
                            'europa/',
                            'medioambiente/',
                            'salud/',
                            'cultura/',
                            'econom%C3%ADa/',
                            'deportes/'
                        ];



                        return {NavActualitesSlugNewsByRegion};

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
                        // return 'RFI_RU';
                        
                        var NavActualitesSlugNewsByRegion = [
            '/%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/',// Russie
            '/%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/', // France
            '/%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/', // Europe
            '/%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/', // Culture
            '/%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/', // Ukraine
            '/%D1%81%D0%BF%D0%BE%D1%80%D1%82/', // Sport
            ]; 
                        


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
                        // return 'RFI_FR'; 
                        
                        var NavActualitesSlugNewsByRegion = [
                              'afrique/',
                              'am%C3%A9riques/',
                              'asie-pacifique/',
                              'europe/',
                              'moyen-orient/',
                              'france/',
                              'monde/'
                        ];

                        return {NavActualitesSlugNewsByRegion};
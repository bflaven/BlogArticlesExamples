#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
# NO CONDA ENV
conda create --name po_launcher_e2e_cypress python=3.9.13
conda info --envs
source activate po_launcher_e2e_cypress
source activate parse_website

conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > po_launcher_e2e_cypress.txt


# to install
pip install -r po_launcher_e2e_cypress.txt


# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migrate_create_parse_website_testing_front_apps_api_cypress/004_cypress_fov_suite_2e2/004_2_fov_html_js_python/web_scraping_python

[file]
python GOOD_004_web_scraping_make_urls_beautifulsoup.py

# open ai
In python, create a loop a to print out each values from the variable languages
"""


"""

###### F24 ######

# F24_EN
var NavActualitesSlugNewsByRegion = [
        ['page_france', 'france/'],
        ['page_africa', 'africa/'],
        ['page_middle_east', 'middle-east/'],
        ['page_americas', 'americas/'],
        ['page_europe', 'europe/'],
        ['page_asia_pacific', 'asia-pacific/']
    ];


# F24_ES
var NavActualitesSlugNewsByRegion = [
        ['page_america_latina', 'am%C3%A9rica-latina/'],
        ['page_eeuu_canada', 'eeuu-canad%C3%A1/'], 
        ['page_europa', 'europa/'],
        ['page_francia', 'francia/'],
        ['page_asia_pacifico', 'asia-pac%C3%ADfico/'],
        ['page_medio_oriente', 'medio-oriente/'],
        ['page_africa', '%C3%A1frica/']
    ];
# F24_FR
            var NavActualitesSlugNewsByRegion = [
                ['page_france', 'france/'], 
                ['page_afrique', 'afrique/'], 
                ['page_moyen_orient', 'moyen-orient/'], 
                ['page_europe', 'europe/'], 
                ['page_ameriques', 'am%C3%A9riques/'], 
                ['page_asie_pacifique', 'asie-pacifique/']
            ];

# F24_AR
var NavActualitesSlugNewsByRegion = [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
            ['page_moyen_orient', '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
            ['page_afrique', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
            ['page_europe', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
            ['page_usa', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
            ['page_asie', '%D8%A2%D8%B3%D9%8A%D8%A7/']
        ];

###### RFI ######

# RFI_EN
var NavActualitesSlugNewsByRegion = [
    ['page_france', 'france/'],
    ['page_africa', 'africa/'],
    ['page_international', 'international/'],
    ['page_science_technology', 'science-technology/'],
    ['page_culture', 'culture/'],
    ['page_sport', 'sport/']
    ];
    
    

// RFI_TW
var NavActualitesSlugNewsByRegion = [
    ['page_chine', '%E4%B8%AD%E5%9C%8B/'], 
    ['page_france', '%E6%B3%95%E5%9C%8B/'], 
    ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'], 
    ['page_asie', '%E4%BA%9E%E6%B4%B2/'], 
    ['page_amerique', '%E7%BE%8E%E6%B4%B2/']
];


// RFI_CN
var NavActualitesSlugNewsByRegion = [
        ['page_chine', '%E4%B8%AD%E5%9B%BD/'], 
        ['page_france', '%E6%B3%95%E5%9B%BD/'], 
        ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'], 
        ['page_asie', '%E4%BA%9A%E6%B4%B2'], 
        ['page_amerique', '%E7%BE%8E%E6%B4%B2']
];

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
 
 // RFI_FA
var NavActualitesSlugNewsByRegion = [
    ['page_societe_environnement', '%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'], 
    ['page_culture', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'], 
    ['page_iran', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'], 
    ['page_afghanistan', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'], 
    ['page_monde', '%D8%AC%D9%87%D8%A7%D9%86/']
];

// RFI_HA
var NavActualitesSlugNewsByRegion =[
        ['page_monde', 'duniya/'], 
        ['page_afrique', 'afrika/'],
        ['page_nigeria', 'najeriya/'],
        ['page_niger', 'nijar/'],
        ['page_jeux', 'wasanni/']
    ];
    
// RFI_KM
var NavActualitesSlugNewsByRegion = [
        ['page_cambodge', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'], 
        ['page_asie', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'], 
        ['page_europe', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'], 
        ['page_amerique', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'], 
        ['page_afrique', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'], 
        ['page_moyen_orient', '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/']
        ];


// RFI_SW
var NavActualitesSlugNewsByRegion = [
            ['page_afrique', 'afrika/'], 
            ['page_communaute_afrique_est', 'eac/'],
            ['page_politique_economie', 'siasa-uchumi/'], 
            ['page_article', 'makala/'], 
            ['page_sports', 'michezo/']
    ];
    
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
    
    
    // RFI_PT
var NavActualitesSlugNewsByRegion = [
        ['page_africa_lusofona', '%C3%A1frica-lus%C3%B3fona/'],
        ['page_franca', 'fran%C3%A7a/'],
        ['page_africa', '%C3%A1frica/'],
        ['page_internacional', 'internacional/']
    ];
    
    // RFI_BR
var NavActualitesSlugNewsByRegion = [
        ['page_france', 'fran%C3%A7a/'],
        ['page_bresil', 'brasil/'],
        ['page_amerique', 'am%C3%A9ricas/'],
        ['page_monde', 'mundo/'],
        ['page_culture', 'cultura/'],
        ['page_sciences', 'ci%C3%AAncias/']
    ];
    // RFI_RU
var NavActualitesSlugNewsByRegion = [
            ['page_russie', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'], 
            ['page_france', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'], 
            ['page_europe', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'], 
            ['page_culture', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'], 
            ['page_ukraine', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'], 
            ['page_sport', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/']
    
    ];                 
    
    // RFI_UK
var NavActualitesSlugNewsByRegion = [
        ['page_ukraine', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'], 
        ['page_europe', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'], 
        ['page_actualites_internationales', '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'], 
        ['page_ukrainiens_cordon', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/']
    ];
    
    // RFI_VI
var NavActualitesSlugNewsByRegion = [
        ['page_vietnam', 'vi%E1%BB%87t-nam/'], 
        ['page_asie', 'ch%C3%A2u-%C3%A1/'], 
        ['page_france', 'ph%C3%A1p/'], 
        ['page_international', 'qu%E1%BB%91c-t%E1%BA%BF/'], 
        ['page_analyser', 'ph%C3%A2n-t%C3%ADch/'], 
        ['page_point_actualite', '%C4%91i%E1%BB%83m-b%C3%A1o/']
];

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

#### OBS ####

// OBS_FR
var NavActualitesSlugNewsByRegion = [
        ['page_tous_les_articles', 'tous-les-articles/'], 
        ['page_tag_europe', 'europe/'], 
        ['page_tag_environnement', '/environnement/'],
        ['page_tag_droits_homme', 'droits-de-l-homme/']
    ];
    
// OBS_EN
var NavActualitesSlugNewsByRegion = [
        ['page_all_articles', 'all-articles/'],
        ['page_tag_africa', 'africa/'],
        ['page_tag_environment', 'environment/'],
        ['page_tag_human_rights', 'human-rights/']
    ];


"""

# *** F24 ***

# F24_EN
# NavActualitesSlugNewsByRegion = [
#     ['page_france', 'france/'],
#     ['page_africa', 'africa/'],
#     ['page_middle_east', 'middle-east/'],
#     ['page_americas', 'americas/'],
#     ['page_europe', 'europe/'],
#     ['page_asia_pacific', 'asia-pacific/']
# ]



# F24_ES
# NavActualitesSlugNewsByRegion = [
#     ['page_america_latina', 'am%C3%A9rica-latina/'],
#     ['page_eeuu_canada', 'eeuu-canad%C3%A1/'],
#     ['page_europa', 'europa/'],
#     ['page_francia', 'francia/'],
#     ['page_asia_pacifico', 'asia-pac%C3%ADfico/'],
#     ['page_medio_oriente', 'medio-oriente/'],
#     ['page_africa', '%C3%A1frica/']
# ]

# MAIN_BRAND = "F24_AR"
# MAIN_DOMAIN = 'https://www.france24.com/ar/'


# # F24_AR
# NavActualitesSlugNewsByRegion = [
#     ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
#     ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/'],
#     ['page_moyen_orient',
#      '%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
#     ['page_afrique', '%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
#     ['page_europe', '%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
#     ['page_usa', '%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
#     ['page_asie', '%D8%A2%D8%B3%D9%8A%D8%A7/']
# ]


# *** RFI ***



###### RFI ######

# RFI_EN
# MAIN_BRAND = "RFI_EN"
# MAIN_DOMAIN = 'https://www.rfi.fr/en/'

# NavActualitesSlugNewsByRegion = [
#     ['page_france', 'france/'],
#     ['page_africa', 'africa/'],
#     ['page_international', 'international/'],
#     ['page_science_technology', 'science-technology/'],
#     ['page_culture', 'culture/'],
#     ['page_sport', 'sport/']
# ]


# RFI_TW
# MAIN_BRAND = "RFI_TW"
# MAIN_DOMAIN = 'https://www.rfi.fr/tw/'
# NavActualitesSlugNewsByRegion = [
#     ['page_chine', '%E4%B8%AD%E5%9C%8B/'],
#     ['page_france', '%E6%B3%95%E5%9C%8B/'],
#     ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
#     ['page_asie', '%E4%BA%9E%E6%B4%B2/'],
#     ['page_amerique', '%E7%BE%8E%E6%B4%B2/']
# ]


# RFI_CN
# MAIN_BRAND = "RFI_CN"
# MAIN_DOMAIN = 'https://www.rfi.fr/cn/'
# NavActualitesSlugNewsByRegion = [
#     ['page_chine', '%E4%B8%AD%E5%9B%BD/'],
#     ['page_france', '%E6%B3%95%E5%9B%BD/'],
#     ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
#     ['page_asie', '%E4%BA%9A%E6%B4%B2'],
#     ['page_amerique', '%E7%BE%8E%E6%B4%B2']
# ]

# RFI_ES
# MAIN_BRAND = "RFI_ES"
# MAIN_DOMAIN = 'https://www.rfi.fr/es/'
# NavActualitesSlugNewsByRegion = [
#     ['page_americas', 'am%C3%A9ricas/'],
#     ['page_francia', 'francia/'],
#     ['page_europa', 'europa/'],
#     ['page_medioambiente', 'medioambiente/'],
#     ['page_salud', 'salud/'],
#     ['page_cultura', 'cultura/'],
#     ['page_economia', 'econom%C3%ADa/'],
#     ['page_deportes', 'deportes/']
# ]

# RFI_FA
# MAIN_BRAND = "RFI_FA"
# MAIN_DOMAIN = 'https://www.rfi.fr/fa/'
# NavActualitesSlugNewsByRegion = [
#     ['page_societe_environnement',
#      '%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'],
#     ['page_culture', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'],
#     ['page_iran', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'],
#     ['page_afghanistan', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'],
#     ['page_monde', '%D8%AC%D9%87%D8%A7%D9%86/']
# ]

# RFI_HA
# MAIN_BRAND = "RFI_HA"
# MAIN_DOMAIN = 'https://www.rfi.fr/ha/'
# NavActualitesSlugNewsByRegion = [
#     ['page_monde', 'duniya/'],
#     ['page_afrique', 'afrika/'],
#     ['page_nigeria', 'najeriya/'],
#     ['page_niger', 'nijar/'],
#     ['page_jeux', 'wasanni/']
# ]

# RFI_KM
# MAIN_BRAND = "RFI_KM"
# MAIN_DOMAIN = 'https://www.rfi.fr/km/'
# NavActualitesSlugNewsByRegion = [
#     ['page_cambodge', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'],
#     ['page_asie', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'],
#     ['page_europe', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'],
#     ['page_amerique', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
#     ['page_afrique', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
#     ['page_moyen_orient',
#      '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/']
# ]


# RFI_SW
# MAIN_BRAND = "RFI_SW"
# MAIN_DOMAIN = 'https://www.rfi.fr/sw/'
# NavActualitesSlugNewsByRegion = [
#     ['page_afrique', 'afrika/'],
#     ['page_communaute_afrique_est', 'eac/'],
#     ['page_politique_economie', 'siasa-uchumi/'],
#     ['page_article', 'makala/'],
#     ['page_sports', 'michezo/']
# ]

# RFI_MA
# MAIN_BRAND = "RFI_MA"
# MAIN_DOMAIN = 'https://www.rfi.fr/ma/'
# NavActualitesSlugNewsByRegion = [
#     ['page_afrique', 'farafinna/'],
#     ['page_monde', 'duni%C9%B2a/'],
#     ['page_trouver.', 's%C9%94r%C9%94/'],
#     ['page_sante', 'k%C9%9Bn%C9%9Bya/'],
#     ['page_lamini', 'lamini/'],
#     ['page_lire', 'kalan/'],
#     ['page_femmes', 'musow/'],
#     ['page_environnement', 'sigida/']
# ]
# RFI_FF
# MAIN_BRAND = "RFI_FF"
# MAIN_DOMAIN = 'https://www.rfi.fr/ff/'
# NavActualitesSlugNewsByRegion = [
#     ['page_afrique', 'afrik/'],
#     ['page_winndere', 'winndere/'],
#     ['page_economie_faggudu', 'faggudu/'],
#     ['page_sante_cellal', 'cellal/'],
#     ['page_histoire_taariindi', 'taariindi/'],
#     ['page_necessaire_needi', 'needi/'],
#     ['page_femmes', 'rew%C9%93e/'],
#     ['page_communaute_renndo', 'renndo/']
# ]

# RFI_PT
# MAIN_BRAND = "RFI_PT"
# MAIN_DOMAIN = 'https://www.rfi.fr/pt/'
# NavActualitesSlugNewsByRegion = [
#     ['page_africa_lusofona', '%C3%A1frica-lus%C3%B3fona/'],
#     ['page_franca', 'fran%C3%A7a/'],
#     ['page_africa', '%C3%A1frica/'],
#     ['page_internacional', 'internacional/']
# ]

# RFI_BR
# MAIN_BRAND = "RFI_BR"
# MAIN_DOMAIN = 'https://www.rfi.fr/br/'
# NavActualitesSlugNewsByRegion = [
#     ['page_france', 'fran%C3%A7a/'],
#     ['page_bresil', 'brasil/'],
#     ['page_amerique', 'am%C3%A9ricas/'],
#     ['page_monde', 'mundo/'],
#     ['page_culture', 'cultura/'],
#     ['page_sciences', 'ci%C3%AAncias/']
# ]
# RFI_RU
# MAIN_BRAND = "RFI_RU"
# MAIN_DOMAIN = 'https://www.rfi.fr/ru/'

# NavActualitesSlugNewsByRegion = [
#     ['page_russie', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'],
#     ['page_france', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'],
#     ['page_europe', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
#     ['page_culture', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'],
#     ['page_ukraine', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'],
#     ['page_sport', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/']
# ]

#  RFI_UK
# MAIN_BRAND = "RFI_UK"
# MAIN_DOMAIN = 'https://www.rfi.fr/uk/'

# NavActualitesSlugNewsByRegion = [
#     ['page_ukraine', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'],
#     ['page_europe', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
#     ['page_actualites_internationales',
#      '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'],
#     ['page_ukrainiens_cordon', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/']
# ]

# RFI_VI
# MAIN_BRAND = "RFI_VI"
# MAIN_DOMAIN = 'https://www.rfi.fr/vi/'

# NavActualitesSlugNewsByRegion = [
#     ['page_vietnam', 'vi%E1%BB%87t-nam/'],
#     ['page_asie', 'ch%C3%A2u-%C3%A1/'],
#     ['page_france', 'ph%C3%A1p/'],
#     ['page_international', 'qu%E1%BB%91c-t%E1%BA%BF/'],
#     ['page_analyser', 'ph%C3%A2n-t%C3%ADch/'],
#     ['page_point_actualite', '%C4%91i%E1%BB%83m-b%C3%A1o/']
# ]

# RFI_FR
# MAIN_BRAND = "RFI_FR"
# MAIN_DOMAIN = 'https://www.rfi.fr/fr/'

# NavActualitesSlugNewsByRegion = [
#     ['page_afrique', 'afrique/'],
#     ['page_ameriques', 'am%C3%A9riques/'],
#     ['page_asie-pacifique', 'asie-pacifique/'],
#     ['page_europe', 'europe/'],
#     ['page_moyen-orient', 'moyen-orient/'],
#     ['page_france', 'france/'],
#     ['page_monde', 'monde/']
# ]

# *** MCD_AR ***

# MCD_AR
# MAIN_BRAND = "MCD_AR"
# MAIN_DOMAIN = 'https://www.mc-doualiya.com/'

# NavActualitesSlugNewsByRegion = [
#     ['page_moyen_orient',
#         '/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
#     ['page_grand_maghreb',
#      '/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/'],
#     ['page_france', '/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
#     ['page_afrique', '/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
#     ['page_europe', '/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
#     ['page_amerique', '/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
#     ['page_asie_pacifique', '/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/']
# ]

# *** FLE ***
# FLE_FR
# MAIN_BRAND = "FLE_FR"
# MAIN_DOMAIN = 'https://francaisfacile.rfi.fr/fr/'

# FLE_ES
# MAIN_BRAND = "FLE_ES"
# MAIN_DOMAIN = 'https://francaisfacile.rfi.fr/es/'

# FLE_RU
# MAIN_BRAND = "FLE_RU"
# MAIN_DOMAIN = 'https://francaisfacile.rfi.fr/ru/'


# FLE_AR
# MAIN_BRAND = "FLE_AR"
# MAIN_DOMAIN = 'https://francaisfacile.rfi.fr/ar/'


# FLE_EN
# MAIN_BRAND = "FLE_EN"
# MAIN_DOMAIN = 'https://francaisfacile.rfi.fr/en/'


# FLE_BR
# MAIN_BRAND = "FLE_BR"
# MAIN_DOMAIN = 'https://francaisfacile.rfi.fr/br/'


# NavActualitesSlugNewsByRegion = [
#     ['page_podcasts_journal_français_facile',
#         'podcasts/journal-en-fran%C3%A7ais-facile/'],
#     ['page_podcasts_selection', 'podcasts/s%C3%A9lection/'],
#     ['page_exercices', 'exercices/'],
#     ['page_diplomes_tests', 'dipl%C3%B4mes-tests/'],
#     ['page_tester_son_niveau', 'tester-son-niveau/'],
#     ['page_comprendre_actualite_français',
#      'comprendre-actualit%C3%A9-fran%C3%A7ais/'],
#     ['page_communiquer_quotidien', 'communiquer-quotidien/'],
#     ['page_reviser', 'r%C3%A9viser/'],
#     ['page_enseigner', 'enseigner/'],
#     ['page_exercices_a1', 'exercices/a1/'],
#     ['page_exercices_a2', 'exercices/a2/'],
#     ['page_exercices_b1', 'exercices/b1/'],
#     ['page_exercices_b2', 'exercices/b2/'],
#     ['page_exercices_c1c2', 'exercices/c1c2/'],
#     ['page_podcasts_mots_actualite', 'podcasts/les-mots-de-l-actualit%C3%A9/']
# ]

# *** OBS ***


# OBS_FR
# MAIN_BRAND = "OBS_FR"
# MAIN_DOMAIN = 'https://observers.france24.com/fr/'
# NavActualitesSlugNewsByRegion = [
#     ['page_tous_les_articles', 'tous-les-articles/'],
#     ['page_tag_europe', 'europe/'],
#     ['page_tag_environnement', '/environnement/'],
#     ['page_tag_droits_homme', 'droits-de-l-homme/']
# ]


# OBS_EN
# MAIN_BRAND = "OBS_EN"
# MAIN_DOMAIN = 'https://observers.france24.com/en/'
# NavActualitesSlugNewsByRegion = [
#         ['page_all_articles', 'all-articles/'],
#         ['page_tag_africa', 'africa/'],
#         ['page_tag_environment', 'environment/'],
#         ['page_tag_human_rights', 'human-rights/']
#     ];



# OBS_AR
# MAIN_BRAND = "OBS_AR"
# MAIN_DOMAIN = 'https://observers.france24.com/ar/'
# NavActualitesSlugNewsByRegion = [
#         ['page_tag_environnement', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
#         ['page_want_to_contribute', '%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9']
#     ];
  

    
# OBS_FA
MAIN_BRAND = "OBS_FA"
MAIN_DOMAIN = 'https://observers.rfi.fr/fa/'
NavActualitesSlugNewsByRegion = [
        ['page_tag_rumeur', '%DA%AF%D8%B1%D9%88%D9%87-%D9%88%D8%A7%DA%98%D9%87/%D8%B4%D8%A7%DB%8C%D8%B9%D9%87/'],
        ['page_devenir_un_observateur', '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF']
    ];








print('#'+MAIN_BRAND)
print('urls = [')
print('\''+MAIN_DOMAIN+'\',')
for url in NavActualitesSlugNewsByRegion:
    
    # print(url)
    # print(MAIN_DOMAIN+url[1])

    # print(MAIN_BRAND+url[1].upper()+' ('+MAIN_DOMAIN+lang[0]+')')
    
    print('\''+MAIN_DOMAIN+url[1]+'\',')

    # print('\''+MAIN_DOMAIN+url[0]+'\',')

    # print(url[0])
    # print(url[1])
    # print(url[2])
print(']')

# grab_meta_section_F24_FR_done.js
# brandLang = ['RFI_EN', 'RFI_CN', 'RFI_ES', 'RFI_FA', 'RFI_HA', 'RFI_KM', 'RFI_SW', 'RFI_MA', 'RFI_FF', 'RFI_PT', 'RFI_BR', 'RFI_RO', 'RFI_RU', 'RFI_UK', 'RFI_VI']

# for combo in brandLang:
#     print('touch grab_meta_section_'+combo+'.js')


# *** DEPOT ***
# languages = [
#     ['/fr/', 'fr', 'Français'],
#     ['/en/', 'en', 'English'],
#     ['/es/', 'es', 'Español'],
#     ['/pt/', 'pt', 'Português'],
#     ['/br/', 'br', 'Português do Brasil'],
#     ['/ha/', 'ha', 'Hausa'],
#     ['/sw/', 'sw', 'Kiswahili'],
#     ['/ma/', 'bm', 'Mandenkan'],
#     ['/ff/', 'ff', 'Fulfulde'],
#     # ['https://www.rfi.ro/', 'ro', 'România'],
#     ['/ru/', 'ru', 'Русский'],
#     ['/uk/', 'uk', 'Українською'],
#     ['/vi/', 'vi', 'Tiếng Việt'],
#     ['/cn/', 'cn', '华语'],
#     ['/tw/', 'tw', '華語'],
#     ['/km/', 'km', 'ភាសាខ្មែរ'],
#     ['/fa/', 'fa', 'فارسی']
# ]

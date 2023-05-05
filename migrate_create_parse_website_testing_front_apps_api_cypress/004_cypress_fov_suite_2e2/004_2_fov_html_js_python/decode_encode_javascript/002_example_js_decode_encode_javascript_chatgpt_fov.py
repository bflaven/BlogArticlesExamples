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
cd /Users/brunoflaven/Documents/02_copy/_cypress_fov_suite_2e2/_html_js_python/decode_encode_javascript/

[file]
python 002_example_js_decode_encode_javascript_chatgpt_fov.py

# QUERY OPEN AI TWO
In python, in  a loop, if the var i reach the maximum in range(len(NavActualitesSlugNewsByRegion) do something specific 

NavActualitesSlugNewsByRegion: [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/']
            ], 

# ANSWER OPEN AI ONE

Yes, you can use a simple if statement inside the loop to check if the index variable i has reached the maximum value. Here's an example:

for i in range(len(NavActualitesSlugNewsByRegion)):
    # Do something for each item in the list
    print(NavActualitesSlugNewsByRegion[i])
    
    # Check if the index i has reached the maximum value
    if i == len(NavActualitesSlugNewsByRegion) - 1:
        # Do something specific when i is at the maximum value
        print("Reached the end of the list!")

In this example, the range function is used to loop through each index of the NavActualitesSlugNewsByRegion list. Inside the loop, you can perform any actions you want for each item in the list.

The if statement checks if the current index i is equal to the maximum index, which is the length of the list minus one. This is because list indices start from zero, so the last item in the list has an index of len(NavActualitesSlugNewsByRegion) - 1. If the condition is true, you can perform any specific actions you want for when the loop reaches the end of the list.

# QUERY OPEN AI ONE
In python, can you write a script that 
decode an array of slugs named "NavActualitesSlugNewsByRegion" with the decodedUrl function then test the slug decoded obtained against a string that contains the same string in an array named "NavActualitesSlugNewsByRegionVersus"

NavActualitesSlugNewsByRegion: [
            ['page_france', '%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
            ['page_maghreb', '%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D9%8A%D8%A9/']
            ], 

NavActualitesSlugNewsByRegionVersus: [
            ['page_france', 'فرنسا/'],
            ['page_maghreb', 'المغاربية/']
            ], 


"""

"""
Certainly, here's a possible implementation in Python:

"""

import urllib.parse

# *** F24 ***
# MAIN_BRAND = 'F24_AR'
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

# MAIN_BRAND = 'F24_FR'
# NavActualitesSlugNewsByRegion = [
#     ['page_france', 'france/'],
#     ['page_afrique', 'afrique/'],
#     ['page_moyen_orient', 'moyen-orient/'],
#     ['page_europe', 'europe/'],
#     ['page_ameriques', 'am%C3%A9riques/'],
#     ['page_asie_pacifique', 'asie-pacifique/']
# ]

# MAIN_BRAND = 'F24_ES'
# NavActualitesSlugNewsByRegion= [
#     ['page_america_latina', 'am%C3%A9rica-latina/'],
#     ['page_eeuu_canada', 'eeuu-canad%C3%A1/'],
#     ['page_europa', 'europa/'],
#     ['page_francia', 'francia/'],
#     ['page_asia_pacifico', 'asia-pac%C3%ADfico/'],
#     ['page_medio_oriente', 'medio-oriente/'],
#     ['page_africa', '%C3%A1frica/']
# ]


# MAIN_BRAND = 'F24_EN'
# NavActualitesSlugNewsByRegion = [
#         ['page_france', 'france/'],
#         ['page_africa', 'africa/'],
#         ['page_middle_east', 'middle-east/'],
#         ['page_americas', 'americas/'],
#         ['page_europe', 'europe/'],
#         ['page_asia_pacific', 'asia-pacific/']
# ]

# *** FLE ***
# MAIN_BRAND = 'FLE_RU'
# NavActualitesSlugNewsByRegion = [
#     ['page_podcasts_journal_français_facile',
#      'podcasts/journal-en-fran%C3%A7ais-facile/'],
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

# *** MCD ***
# NavActualitesSlugNewsByRegion = [

#     ['page_moyen_orient',
#      '/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/'],
#     ['page_grand_maghreb',
#      '/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/'],
#     ['page_france', '/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/'],
#     ['page_afrique', '/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/'],
#     ['page_europe', '/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/'],
#     ['page_amerique', '/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/'],
#     ['page_asie_pacifique', '/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/']
# ]

# *** OBS ***

# MAIN_BRAND = '// OBS_FR'
# NavActualitesSlugNewsByRegion = [
#     ['page_tous_les_articles', 'tous-les-articles/'],
#     ['page_tag_europe', 'tag/europe/'],
#     ['page_tag_environnement', 'tag/environnement/'],
#     ['page_tag_droits_homme', 'tag/droits-de-l-homme/']
# ]


# MAIN_BRAND = '// OBS_FA'
# NavActualitesSlugNewsByRegion = [
#     ['page_tag_rumeur', '%DA%AF%D8%B1%D9%88%D9%87-%D9%88%D8%A7%DA%98%D9%87/%D8%B4%D8%A7%DB%8C%D8%B9%D9%87/'],
#     ['page_devenir_un_observateur',
#      '%D8%B9%D8%B6%D9%88-%D9%86%D8%A7%D8%B8%D8%B1%D8%A7%D9%86-%D8%B4%D9%88%DB%8C%D8%AF/']
# ]

# MAIN_BRAND = '// OBS_EN'
# NavActualitesSlugNewsByRegion = [
#     ['page_all_articles', 'all-articles/'],
#     ['page_tag_africa', 'tag/africa/'],
#     ['page_tag_environment', 'tag/environment/'],
#     ['page_tag_human_rights', 'tag/human-rights/']
# ]

# MAIN_BRAND = '// OBS_AR'
# NavActualitesSlugNewsByRegion = [
#     ['page_tag_environnement', '%D8%AA%D8%A7%D8%BA/%D8%A8%D9%8A%D8%A6%D8%A9/'],
#     ['page_want_to_contribute',
#      '%D9%87%D9%84-%D8%AA%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%87%D9%85%D8%A9']
# ]


# *** RFI ***

# MAIN_BRAND = '// RFI_FR'
# NavActualitesSlugNewsByRegion = [
#     ['page_afrique', 'afrique/'],
#     ['page_ameriques', 'am%C3%A9riques/'],
#     ['page_asie_pacifique', 'asie-pacifique/'],
#     ['page_europe', 'europe/'],
#     ['page_moyen_orient', 'moyen-orient/'],
#     ['page_france', 'france/'],
#     ['page_monde', 'monde/']
# ]

MAIN_BRAND = '// RFI_BR'
NavActualitesSlugNewsByRegion = [
    ['page_france', 'fran%C3%A7a/'],
    ['page_bresil', 'brasil/'],
    ['page_amerique', 'am%C3%A9ricas/'],
    ['page_monde', 'mundo/'],
    ['page_culture', 'cultura/'],
    ['page_sciences', 'ci%C3%AAncias/']
]


# MAIN_BRAND = '// RFI_CN'
# NavActualitesSlugNewsByRegion = [
#     ['page_chine', '%E4%B8%AD%E5%9B%BD/'],
#     ['page_france', '%E6%B3%95%E5%9B%BD/'],
#     ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
#     ['page_asie', '%E4%BA%9A%E6%B4%B2'],
#     ['page_amerique', '%E7%BE%8E%E6%B4%B2']
# ]

# MAIN_BRAND = '// RFI_EN'
# NavActualitesSlugNewsByRegion = [
#     ['page_france', 'france/'],
#     ['page_africa', 'africa/'],
#     ['page_international', 'international/'],
#     ['page_science_technology', 'science-technology/'],
#     ['page_culture', 'culture/'],
#     ['page_sport', 'sport/']
# ]

# MAIN_BRAND = '// RFI_ES'
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

# MAIN_BRAND = '// RFI_FA'
# NavActualitesSlugNewsByRegion = [
#     ['page_societe_environnement',
#      '%D8%AC%D8%A7%D9%85%D8%B9%D9%87-%D9%88-%D9%85%D8%AD%DB%8C%D8%B7-%D8%B2%DB%8C%D8%B3%D8%AA/'],
#     ['page_culture', '%D9%81%D8%B1%D9%87%D9%86%DA%AF-%D9%88-%D8%B2%D9%86%D8%AF%DA%AF%DB%8C/'],
#     ['page_iran', '%D8%A7%DB%8C%D8%B1%D8%A7%D9%86/'],
#     ['page_afghanistan', '%D8%A7%D9%81%D8%BA%D8%A7%D9%86%D8%B3%D8%AA%D8%A7%D9%86/'],
#     ['page_monde', '%D8%AC%D9%87%D8%A7%D9%86/']
# ]

# MAIN_BRAND = '// RFI_FF'
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

# MAIN_BRAND = '// RFI_HA'
# NavActualitesSlugNewsByRegion = [
#     ['page_monde', 'duniya/'],
#     ['page_afrique', 'afrika/'],
#     ['page_nigeria', 'najeriya/'],
#     ['page_niger', 'nijar/'],
#     ['page_jeux', 'wasanni/']
# ]

# MAIN_BRAND = '// RFI_KM'
# NavActualitesSlugNewsByRegion = [
#     ['page_cambodge', '%E1%9E%80%E1%9E%98%E1%9F%92%E1%9E%96%E1%9E%BB%E1%9E%87%E1%9E%B6/'],
#     ['page_asie', '%E1%9E%A2%E1%9E%B6%E1%9E%9F%E1%9F%8A%E1%9E%B8/'],
#     ['page_europe', '%E1%9E%A2%E1%9E%BA%E1%9E%9A%E1%9F%89%E1%9E%BB%E1%9E%94/'],
#     ['page_amerique', '%E1%9E%A2%E1%9E%B6%E1%9E%98%E1%9F%81%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
#     ['page_afrique', '%E1%9E%A2%E1%9E%B6%E1%9E%A0%E1%9F%92%E1%9E%9C%E1%9F%92%E1%9E%9A%E1%9E%B7%E1%9E%80/'],
#     ['page_moyen_orient',
#      '%E1%9E%8A%E1%9E%BE%E1%9E%98%E1%9E%94%E1%9E%BC%E1%9E%96%E1%9F%8C%E1%9E%B6/']
# ]

# MAIN_BRAND = '// RFI_MA'
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

# MAIN_BRAND = '// RFI_PT'
# NavActualitesSlugNewsByRegion = [
#     ['page_africa_lusofona', '%C3%A1frica-lus%C3%B3fona/'],
#     ['page_franca', 'fran%C3%A7a/'],
#     ['page_africa', '%C3%A1frica/'],
#     ['page_internacional', 'internacional/']
# ]

# MAIN_BRAND = '// RFI_RO'

# MAIN_BRAND = '// RFI_RU'
# NavActualitesSlugNewsByRegion = [
#     ['page_russie', '%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/'],
#     ['page_france', '%D1%84%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/'],
#     ['page_europe', '%D0%B5%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
#     ['page_culture', '%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80a-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/'],
#     ['page_ukraine', '%D1%83%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/'],
#     ['page_sport', '%D1%81%D0%BF%D0%BE%D1%80%D1%82/']

# ]

# MAIN_BRAND = '// RFI_SW'
# NavActualitesSlugNewsByRegion = [
#     ['page_afrique', 'afrika/'],
#     ['page_communaute_afrique_est', 'eac/'],
#     ['page_politique_economie', 'siasa-uchumi/'],
#     ['page_article', 'makala/'],
#     ['page_sports', 'michezo/']
# ]

# MAIN_BRAND = '// RFI_TW'
# NavActualitesSlugNewsByRegion = [
#     ['page_chine', '%E4%B8%AD%E5%9C%8B/'],
#     ['page_france', '%E6%B3%95%E5%9C%8B/'],
#     ['page_hong_kong_macao_taiwan', '%E6%B8%AF%E6%BE%B3%E5%8F%B0/'],
#     ['page_asie', '%E4%BA%9E%E6%B4%B2/'],
#     ['page_amerique', '%E7%BE%8E%E6%B4%B2/']
# ]

# MAIN_BRAND = '// RFI_UK'
# NavActualitesSlugNewsByRegion = [
#     ['page_ukraine', 'y%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/'],
#     ['page_europe', '%D1%94%D0%B2%D1%80%D0%BE%D0%BF%D0%B0/'],
#     ['page_actualites_internationales',
#      '%D0%BC%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96-%D0%BD%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/'],
#     ['page_ukrainiens_cordon', '%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%86%D1%96-%D0%B7%D0%B0-%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%BE%D0%BC/']
# ]

# MAIN_BRAND = '// RFI_VI'
# NavActualitesSlugNewsByRegion = [
#     ['page_vietnam', 'vi%E1%BB%87t-nam/'],
#     ['page_asie', 'ch%C3%A2u-%C3%A1/'],
#     ['page_france', 'ph%C3%A1p/'],
#     ['page_international', 'qu%E1%BB%91c-t%E1%BA%BF/'],
#     ['page_analyser', 'ph%C3%A2n-t%C3%ADch/'],
#     ['page_point_actualite', '%C4%91i%E1%BB%83m-b%C3%A1o/']
# ]




print("\n\n")
print(f''+MAIN_BRAND)
print(f'NavActualitesSlugNewsByRegionVersus: [')

for i in range(len(NavActualitesSlugNewsByRegion)):
        slug, encoded_url = NavActualitesSlugNewsByRegion[i]
        decoded_url = urllib.parse.unquote(encoded_url)
        # print(f"Slug '{slug}' decoded correctly as '{decoded_url}'")
        
        print(f"\t['{slug}', '{decoded_url}'],")
        if i == len(NavActualitesSlugNewsByRegion) - 1:
            # Do something specific when i is at the maximum value
            print(f"\t['{slug}', '{decoded_url}']")
print(f'],')
print("\n\n")

# for i in range(len(NavActualitesSlugNewsByRegion)):
#     slug, encoded_url = NavActualitesSlugNewsByRegion[i]
#     decoded_url = urllib.parse.unquote(encoded_url)
#     expected_slug, expected_decoded_url = NavActualitesSlugNewsByRegionVersus[i]

#     if slug != expected_slug:
#         print(f"Error: expected slug '{expected_slug}', but got '{slug}'")
#     elif decoded_url != expected_decoded_url:
#         print(
#             f"Error: expected decoded URL '{expected_decoded_url}', but got '{decoded_url}'")
#     else:
#         # print(f"Slug '{slug}' decoded correctly as '{decoded_url}'")

#         print(f"Slug '{slug}' decoded correctly as '{decoded_url}'")





"""

This script first imports the urllib.parse module to use its unquote function, which can decode the URL-encoded strings in the NavActualitesSlugNewsByRegion array.

It then iterates over the elements in the NavActualitesSlugNewsByRegion array, decoding the URL-encoded string using unquote and comparing the resulting decoded URL and slug against the expected values in the NavActualitesSlugNewsByRegionVersus array. If there are any mismatches, an error message is printed to the console. Otherwise, a message indicating that the slug was decoded correctly is printed.

Note that this implementation assumes that the NavActualitesSlugNewsByRegion and NavActualitesSlugNewsByRegionVersus arrays have the same length and that their elements are ordered in the same way. If this is not the case, additional checks may be needed to ensure that the correct elements are being compared.

"""
#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[env]
# Conda Environment
# NO CONDA ENV
conda create --name google_trends python=3.9.13
conda info --envs
source activate google_trends
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n po_launcher_e2e_cypress
conda env remove -n parse_website

# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_google_trends.txt


# to install
pip install -r requirements_google_trends.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/google_trends_sitemap/google_trends/erdogant_googletrends_2/

[file]
python get_google_trends_geo_names_output_5.py

# other module
# go to the env

# for google trends
pip install pytrends


# for app for google trends
pip install pandas
pip install streamlit
pip install numpy
pip install watchdog

# install
pip install googletrends


Source : https://erdogant.github.io/googletrends/pages/html/Examples.html

In python convert these data into a content that is readable in a loop AM; Armenia
AO; Angola
AQ; Antarctica
AR; Argentina


This code uses a dictionary called data to store the country codes as keys and country names as values. The loop iterates over each key-value pair in the dictionary and prints the formatted output, separating the code and country name with a semicolon.




"""



data = {
'code' : 'country',
'AD' :  'Andorra',
'AE' :  'United Arab Emirates',
'AF' :  'Afghanistan',
'AG' :  'Antigua and Barbuda',
'AI' :  'Anguilla',
'AL' :  'Albania',
'AM' :  'Armenia',
'AO' :  'Angola',
'AQ' :  'Antarctica',
'AR' :  'Argentina',
' AS' :  'American Samoa',
' AT' :  'Austria',
' AU' :  'Australia',
' AW' :  'Aruba',
' AX' :  'Åland Islands',
' AZ' :  'Azerbaijan',
' BA' :  ' Bosnia and Herzegovina',
' BB' :  'Barbados',
' BD' :  'Bangladesh',
' BE' :  'Belgium',
' BF' :  'Burkina Faso',
' BG' :  'Bulgaria',
' BH' :  'Bahrain',
' BI' :  'Burundi',
' BJ' :  'Benin',
' BL' :  'Saint Barthélemy',
' BM' :  'Bermuda',
' BN' :  'Brunei Darussalam',
' BO' :  'Bolivia',
' BQ' :  ' Bonaire, Sint Eustatius and Saba',
' BR' :  'Brazil',
' BS' :  'Bahamas',
' BT' :  'Bhutan',
' BV' :  'Bouvet Island',
' BW' :  'Botswana',
' BY' :  'Belarus',
' BZ' :  'Belize',
' CA' :  'Canada',
' CC' :  'Cocos Islands',
' CD' :  'Congo, the Democratic Republic of the',
' CF' :  'Central African Republic',
' CG' :  'Congo',
' CH' :  'Switzerland',
' CI' :  'Côte d\'Ivoire',
' CK' :  'Cook Islands',
' CL' :  'Chile',
' CM' :  'Cameroon',
' CN' :  'China',
' CO' :  'Colombia',
' CR' :  'Costa Rica',
' CU' :  'Cuba',
' CV' :  'Cape Verde',
' CW' :  'Curaçao',
' CX' :  'Christmas Island',
' CY' :  'Cyprus',
' CZ' :  'Czech Republic',
' DE' :  'Germany',
' DJ' :  'Djibouti',
' DK' :  'Denmark',
' DM' :  'Dominica',
' DO' :  'Dominican Republic',
' DZ' :  'Algeria',
' EC' :  'Ecuador',
' EE' :  'Estonia',
' EG' :  'Egypt',
' EH' :  'Western Sahara',
' ER' :  'Eritrea',
' ES' :  'Spain',
' ET' :  'Ethiopia',
' FI' :  'Finland',
' FJ' :  'Fiji',
' FK' :  'Falkland Islands',
' FM' :  ' Micronesia, Federated States of',
' FO' :  'Faroe Islands',
' FR' :  'France',
' GA' :  'Gabon',
' GB' :  'United Kingdom',
' GD' :  'Grenada',
' GE' :  'Georgia',
' GF' :  'French Guiana',
' GG' :  'Guernsey',
' GH' :  'Ghana',
' GI' :  'Gibraltar',
' GL' :  'Greenland',
' GM' :  'Gambia',
' GN' :  'Guinea',
' GP' :  'Guadeloupe',
' GQ' :  'Equatorial Guinea',
' GR' :  'Greece',
' GS' :  'South Georgia and the South Sandwich Islands',
' GT' :  'Guatemala',
' GU' :  'Guam',
' GW' :  'Guinea-Bissau',
' GY' :  'Guyana',
' HK' :  'Hong Kong',
' HM' :  'Heard Island and McDonald Islands',
' HN' :  'Honduras',
' HR' :  'Croatia',
' HT' :  'Haiti',
' HU' :  'Hungary',
'ID' :  'Indonesia',
'IE' :  'Ireland',
'IL' :  'Israel',
'IM' :  'Isle of Man',
'IN' :  'India',
'IO' :  ' British Indian Ocean Territory',
'IQ' :  'Iraq',
'IR' :  'Iran',
'IS' :  'Iceland',
'IT' :  'Italy',
'JE' :  'Jersey',
'JM' :  'Jamaica',
'JO' :  'Jordan',
'JP' :  'Japan',
'KE' :  'Kenya',
'KG' :  'Kyrgyzstan',
'KH' :  'Cambodia',
'KI' :  'Kiribati',
'KM' :  'Comoros',
'KN' :  ' Saint Kitts and Nevis',
'KP' :  'North Korea',
'KR' :  'South Korea',
'KW' :  'Kuwait',
'KY' :  'Cayman Islands',
'KZ' :  'Kazakhstan',
'LA' :  'Laos',
'LB' :  'Lebanon',
'LC' :  'Saint Lucia',
'LI' :  'Liechtenstein',
'LK' :  'Sri Lanka',
'LR' :  'Liberia',
'LS' :  'Lesotho',
'LT' :  'Lithuania',
'LU' :  'Luxembourg',
'LV' :  'Latvia',
'LY' :  'Libya',
'MA' :  'Morocco',
'MC' :  'Monaco',
'MD' :  'Moldova',
'ME' :  'Montenegro',
'MF' :  'Saint Martin (French part)',
'MG' :  'Madagascar',
'MH' :  'Marshall Islands',
'MK' :  'North Macedonia',
'ML' :  'Mali',
'MM' :  'Myanmar',
'MN' :  'Mongolia',
'MO' :  'Macao',
'MP' :  'Northern Mariana Islands',
'MQ' :  'Martinique',
'MR' :  'Mauritania',
'MS' :  'Montserrat',
'MT' :  'Malta',
'MU' :  'Mauritius',
'MV' :  'Maldives',
'MW' :  'Malawi',
'MX' :  'Mexico',
'MY' :  'Malaysia',
'MZ' :  'Mozambique',
'NA' :  'Namibia',
'NC' :  'New Caledonia',
'NE' :  'Niger',
'NF' :  'Norfolk Island',
'NG' :  'Nigeria',
'NI' :  'Nicaragua',
'NL' :  'Netherlands',
'NO' :  'Norway',
'NP' :  'Nepal',
'NR' :  'Nauru',
'NU' :  'Niue',
'NZ' :  'New Zealand',
'OM' :  'Oman',
'PA' :  'Panama',
'PE' :  'Peru',
'PF' :  'French Polynesia',
'PG' :  'Papua New Guinea',
'PH' :  'Philippines',
'PK' :  'Pakistan',
'PL' :  'Poland',
'PM' :  'Saint Pierre and Miquelon',
'PN' :  'Pitcairn Islands',
'PR' :  'Puerto Rico',
'PS' :  'Palestine',
'PT' :  'Portugal',
'PW' :  'Palau Republic of',
'PY' :  'Paraguay',
'QA' :  'Qatar',
'RE' :  'Réunion',
'RO' :  'Romania',
'RS' :  'Serbia',
'RU' :  'Russia',
'RW' :  'Rwanda',
'SA' :  'Saudi Arabia',
'SB' :  'Solomon Islands',
'SC' :  'Seychelles',
'SD' :  'Sudan',
'SE' :  'Sweden',
'SG' :  'Singapore',
'SH' :  'Saint Helena',
'SI' :  'Slovenia',
'SJ' :  'Svalbard and Jan Mayen',
'SK' :  'Slovakia',
'SL' :  'Sierra Leone',
'SM' :  'San Marino',
'SN' :  'Senegal',
'SO' :  'Somalia',
'SR' :  'Suriname',
'SS' :  'South Sudan',
'ST' :  'São Tomé and Príncipe',
'SV' :  'El Salvador',
'SX' :  'Sint Maarten (Dutch part)',
'SY' :  'Syria',
'SZ' :  'Eswatini',
'TC' :  ' Turks and Caicos Islands',
'TD' :  'Chad',
'TF' :  'French Southern Territories',
'TG' :  'Togo',
'TH' :  'Thailand',
'TJ' :  'Tajikistan',
'TK' :  'Tokelau',
'TL' :  'Timor-Leste',
'TM' :  'Turkmenistan',
'TN' :  'Tunisia',
'TO' :  'Tonga',
'TR' :  'Turkey',
'TT' :  'Trinidad and Tobago',
'TV' :  'Tuvalu',
'TW' :  'Taiwan',
'TZ' :  'Tanzania',
'UA' :  'Ukraine',
'UG' :  'Uganda',
'UM' :  'United States Minor Outlying Islands',
'US' :  'United States',
'UY' :  'Uruguay',
'UZ' :  'Uzbekistan',
'VA' :  'Vatican City State',
'VC' :  'Saint Vincent and the Grenadines',
'VE' :  'Venezuela',
'VG' :  'British Virgin Islands',
'VI' :  'U.S. Virgin Islands',
'VN' :  'Vietnam',
'VU' :  'Vanuatu',
'WF' :  'Wallis and Futuna',
'WS' :  'Samoa',
'XK' :  'Kosovo',
'YE' :  'Yemen',
'YT' :  'Mayotte',
'ZA' :  'South Africa',
'ZM' :  'Zambia',
'ZW' :  'Zimbabwe',
'AD' :  'Andorra',
'AE' :  'United Arab Emirates',
'AF' :  'Afghanistan',
'AG' :  'Antigua and Barbuda',
'AI' :  'Anguilla',
'AL' :  'Albania' 
}

for code, country in data.items():
    # print(f"{code}; {country}")
    # print(f"{country}")
    country = country.lower().replace(' ', '_')
    print(f"'{country}',")
    with open("001_countries_output.txt", "a") as f:
        print(f"'{country}',", file=f)

# QUERY_1
# in Python, for the variable "country_name", write a script that transform in lowercase and remove space and replace it by underscore. Give a real example with the country_name = 'Antigua and Barbuda'

# country_name = 'Antigua and Barbuda'
# transformed_name = country_name.lower().replace(' ', '_')
# print(transformed_name)

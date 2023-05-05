# migrate_create_parse_website_testing_front_apps_api_cypress

## INTRO


## NOTE
These are mostly working documents but to me, it presents to advantages:
- 1. To archive part of searches made with ChatGPT's help.
- 2. To refine the working method by integrating AI and any additional programming resources that can increase productivity and achievement in obtaining a result, however minimal it may be.

*At the same time, I fully understand that these same documents are sometimes present also more than limited interest for any other person than me! One day, this information will be semi-structured or structured using Obsidian but for now on it has this form... due both to some laziness and a lack of time :)*

See more on [Obsidian](https://obsidian.md/)

## CODE

- `001_python_parse_web`

- `002_package_json_python`

- `003_launcher_suite_cypress`

- `004_cypress_fov_suite_2e2`

- `README.md`


## TREE AND FILES
```bash
.
├── 001_python_parse_web
│   ├── 001_parse_website.py
│   ├── 002_parse_website.py
│   ├── 003_parse_website.py
│   ├── README.md
│   └── _queries_python_parse_web.diff
├── 002_package_json_python
│   ├── 000_generate_package.py
│   ├── 001_generate_package.py
│   ├── 002_generate_package.py
│   ├── README.md
│   ├── _queries_package_json_python.diff
│   ├── package_0.json
│   ├── package_1.json
│   ├── package_2.json
│   └── po_launcher_e2e_cypress.txt
├── 003_launcher_suite_cypress
│   ├── README.md
│   ├── _queries_launcher_suite_cypress_210423.diff
│   ├── launch_cypress_cp_15.applescript
│   └── launcher_e2e_cypress_apps.applescript
├── 004_cypress_fov_suite_2e2
│   ├── 004_1_archives_for_code_queries
│   │   ├── _depot_code_1.js
│   │   ├── _queries_cypress_fov_suite_2e2_2.diff
│   │   └── _queries_cypress_fov_suite_2e2_3.diff
│   └── 004_2_fov_html_js_python
│       ├── 001_example_print_loop.py
│       ├── archives
│       │   ├── example_js_class_004a_model.html
│       │   ├── example_js_class_005_fov.html
│       │   ├── example_js_class_006_fov.html
│       │   ├── example_js_class_007_fov.html
│       │   ├── example_js_class_008_fov.html
│       │   ├── example_js_class_cypress_001_bach.html
│       │   ├── example_js_class_cypress_002_bach.html
│       │   ├── example_js_class_cypress_003_bach.html
│       │   ├── example_js_class_cypress_004_bach.html
│       │   ├── example_js_class_cypress_005_bach.html
│       │   ├── example_js_parse_001_model.html
│       │   ├── example_js_parse_002_model.html
│       │   ├── example_js_parse_003_model.html
│       │   ├── example_js_parse_004_model.html
│       │   ├── example_js_parse_005_model.html
│       │   ├── example_js_parse_006_model.py
│       │   └── utilityGetStuffForFov.js
│       ├── class_explained_chatgpt
│       │   ├── 001_example_js_class_explained_chatgpt.diff
│       │   ├── 002_example_python_class_explained_chatgpt.diff
│       │   ├── 002_example_python_class_explained_chatgpt.py
│       │   ├── 003_example_python_class_explained_chatgpt.diff
│       │   ├── MODEL_example_js_class_explained_chatgpt_001_fov.html
│       │   ├── _backup_example_js_class_explained_chatgpt.diff
│       │   ├── example_js_class_explained_chatgpt_002_fov.html
│       │   ├── example_js_class_explained_chatgpt_003_fov.html
│       │   ├── example_js_class_explained_chatgpt_004_fov.html
│       │   ├── example_js_class_explained_chatgpt_005_fov.html
│       │   ├── example_js_class_explained_chatgpt_006_fov.html
│       │   ├── example_js_class_explained_chatgpt_007_fov.html
│       │   ├── example_js_class_explained_chatgpt_008_fov.html
│       │   ├── example_js_class_explained_chatgpt_009_fov.html
│       │   ├── example_js_class_explained_chatgpt_010_fov.html
│       │   ├── example_js_class_explained_chatgpt_011_fov.html
│       │   ├── example_js_class_explained_chatgpt_012_fov.html
│       │   ├── example_js_class_explained_chatgpt_013_fov.html
│       │   ├── example_js_class_explained_chatgpt_014_fov.html
│       │   └── example_js_class_explained_chatgpt_015_fov.html
│       ├── decode_encode_javascript
│       │   ├── 001_example_js_decode_encode_javascript_chatgpt_fov.html
│       │   ├── 001_example_js_decode_encode_javascript_chatgpt_fov.py
│       │   ├── 002_example_js_decode_encode_javascript_chatgpt_fov.py
│       │   ├── _MODEL_004_web_scraping_beautifulsoup.py
│       │   └── _MODEL_example_js_class_explained_chatgpt_015_fov.html
│       ├── grab_explore_url
│       │   ├── 001_example_grab_explore_url_explained_chatgpt.diff
│       │   └── 001_example_grab_explore_url_explained_chatgpt.py
│       ├── parse_complex_var
│       │   ├── 001_parse_complex_var.html
│       │   ├── 002_parse_complex_var.js
│       │   ├── all_values_elements
│       │   │   ├── datas_var_F24_AR.js
│       │   │   ├── datas_var_F24_EN.js
│       │   │   ├── datas_var_F24_ES.js
│       │   │   ├── datas_var_F24_FR.js
│       │   │   ├── datas_var_FLE_AR.js
│       │   │   ├── datas_var_FLE_BR.js
│       │   │   ├── datas_var_FLE_CN.js
│       │   │   ├── datas_var_FLE_EN.js
│       │   │   ├── datas_var_FLE_ES.js
│       │   │   ├── datas_var_FLE_FR.js
│       │   │   ├── datas_var_FLE_RU.js
│       │   │   ├── datas_var_MCD_AR.js
│       │   │   ├── datas_var_OBS_AR.js
│       │   │   ├── datas_var_OBS_EN.js
│       │   │   ├── datas_var_OBS_FA.js
│       │   │   ├── datas_var_OBS_FR.js
│       │   │   ├── datas_var_RFI_BR.js
│       │   │   ├── datas_var_RFI_CN.js
│       │   │   ├── datas_var_RFI_EN.js
│       │   │   ├── datas_var_RFI_ES.js
│       │   │   ├── datas_var_RFI_FA.js
│       │   │   ├── datas_var_RFI_FF.js
│       │   │   ├── datas_var_RFI_FR.js
│       │   │   ├── datas_var_RFI_HA.js
│       │   │   ├── datas_var_RFI_KM.js
│       │   │   ├── datas_var_RFI_MA.js
│       │   │   ├── datas_var_RFI_PT.js
│       │   │   ├── datas_var_RFI_RO.js
│       │   │   ├── datas_var_RFI_RU.js
│       │   │   ├── datas_var_RFI_SW.js
│       │   │   ├── datas_var_RFI_TW.js
│       │   │   ├── datas_var_RFI_UK.js
│       │   │   └── datas_var_RFI_VI.js
│       │   ├── data_0.js
│       │   ├── hello.js
│       │   └── main.js
│       ├── split_class
│       │   ├── _backup_elements_class
│       │   │   ├── 000_nope_utilityGetStuffForFov_v8.js
│       │   │   ├── datas_var_F24_EN.js
│       │   │   ├── datas_var_F24_ES.js
│       │   │   ├── datas_var_FLE_BR.js
│       │   │   ├── datas_var_FLE_FR.js
│       │   │   ├── datas_var_MCD_AR.js
│       │   │   └── datas_var_RFI_FR.js
│       │   ├── _backup_utilityGetStuffForFov
│       │   │   ├── 000_nope_utilityGetStuffForFov_v8.js
│       │   │   ├── _NOPE_fov_sub_class_F24_EN.js
│       │   │   ├── _backup_charles_main_section_fovs_1.js
│       │   │   ├── _backup_utilityGetStuffForFov_v1.js
│       │   │   ├── _backup_utilityGetStuffForFov_v2.js
│       │   │   ├── _backup_utilityGetStuffForFov_v3.js
│       │   │   ├── _backup_utilityGetStuffForFov_v4.js
│       │   │   ├── _backup_utilityGetStuffForFov_v5.js
│       │   │   ├── _backup_utilityGetStuffForFov_v6.js
│       │   │   ├── _backup_utilityGetStuffForFov_v7.js
│       │   │   └── _backup_utilityGetStuffForFov_v9.js
│       │   ├── _split_class.diff
│       │   ├── try_1
│       │   │   ├── OneUtilityGetStuffForFov.js
│       │   │   ├── attemptOutput.js
│       │   │   └── utilityGetStuffForFov.js
│       │   ├── try_2
│       │   │   ├── OneUtilityGetStuffForFov.js
│       │   │   ├── attemptOutput.js
│       │   │   └── utilityGetStuffForFov.js
│       │   ├── try_3
│       │   │   ├── OneUtilityGetStuffForFov.js
│       │   │   ├── attemptOutput.js
│       │   │   └── utilityGetStuffForFov.js
│       │   └── utilityGetStuffForFov.js
│       └── web_scraping_python
│           ├── GOOD_003_META_web_scraping_beautifulsoup.py
│           ├── GOOD_004_web_scraping_make_urls_beautifulsoup.py
│           ├── nav_1.html
│           └── old
│               ├── 001_META_web_scraping_beautifulsoup.py
│               ├── 001_web_scraping_beautifulsoup.diff
│               ├── 001_web_scraping_beautifulsoup.py
│               ├── 002_transform_array_META_web_scraping_beautifulsoup.py
│               ├── 002_web_scraping_beautifulsoup.py
│               ├── 003_META_web_scraping_beautifulsoup.py
│               ├── 004_web_scraping_beautifulsoup.py
│               └── _model_016_web_scraping_selenium_wp.py
└── README.md
```


## GIT COMMANDS MEMO


```bash
# FOR NEWBIE IN GIT COMMANDS MAINLY POS

# CASE_1 MAKE A COMMIT 
# step_1 check the existing code
git status

# step_2 keep the changes made in code
git stash 

# step_2 check the existing code always do before commit
git pull

# step_4  call the stash to add the changes in existing code
git stash pop

# step_5 check the existing code with the changes made
git status

# step_6 add the changes in the existing code with a message
git commit -am "update code message"

# step_7 send the changes to repo git
git push

# step_8 check the updated code
git status


# CASE_2 CREATE A BRANCH

# create branch named bruno-test
git branch bruno-test

# work on branch named bruno-test
git checkout bruno-test

# check the status
git status

# add new files if needed
git add .

# check the status
git status

# commit the changes
git commit -am "changes bf"

# push the changes
git push
# push the changes forced if needed
# git push --set-upstream origin bruno-test

# CASE_3 MAKE A MERGE REQUEST

# go to your branch bruno-test
git checkout bruno-test

# rebuild bruno-test from main
git rebase main

# if you need to rebase
git rebase --continue

# check if the version is update
git status
```

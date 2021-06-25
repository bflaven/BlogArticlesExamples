#!/usr/local/bin/python3
# -*- coding: utf-8 -*-
#
"""


cd C:\Users\bflaven\Documents\node_test_codeceptjs\
python shuffle_launch_tests_all_bach_go_no_go_3_EACH_DEBUG_DELAY_6.py

"""

import os
import sys
import random
import time


# Sleep function is using seconds so it will generate a random interval within 1 hour.
# timeDelay = random.randrange(0, 3600)
# timeDelay = random.randrange(0, 15)
# print("timeDelay :: ", timeDelay)
# To launch in between the npx command 
# time.sleep(timeDelay)


# Set the correct values for your path and script
#VALUES
#my_path = '/Users/brunoflaven/Documents/02_copy/_random_is_all_about/test_platform/e2e/'
my_path = 'C:/Users/bflaven/Documents/node_test_codeceptjs/'

# Values
my_path_cpjs = 'C:/Users/bflaven/Documents/node_test_codeceptjs/'


# print('\n ORIGINAL')
"""

'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_12_5_correct_ck_version_cut_and_paste_middle_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_em_5_manual_list_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_23_edition_translate_em_video_obs_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_ck_editor_4_text_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_em_3_slideshow_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_theme_tags_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_11_1_correct_ck_version_layout_options_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_observers_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_about_tabs_ux_searchbox_case_sensitive_lower_1_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_supertag_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_tags_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_authors_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_bookmarks_service_deleted_article_1_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_16_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_23_edition_translate_em_embed_obs_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_24_video_creation_published_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_20_convert_wire_to_article_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_21_convert_urgent_to_article_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_34a_edition_scheduled_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_37_create_media_videos_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_tag_3_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_34a_article_scheduled_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_11_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_11b_show_revisions_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_11b_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_11d_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_12b_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps  try_windows_36_make_bookmark_search_test.js',



'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_theme_tags_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_observers_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_supertag_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_tags_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_authors_tags_test.js'

'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_theme_tags_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_observers_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_supertag_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_tags_tags_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps  try_windows_25_translate_taxo_authors_tags_test.js'

--- try_windows_20_convert_wire_to_article_test.js
--- try_windows_21_convert_urgent_to_article_test.js
--- try_windows_34a_edition_scheduled_test.js
--- try_windows_34a_article_scheduled_test.js



"""


full_command_file_names = [
'npx codeceptjs run --config=codecept_F24_EN.conf.js --steps try_windows_63_request_processing_history_test.js',
'npx codeceptjs run --config=codecept_RFI_ES.conf.js --steps try_windows_63_request_processing_history_test.js',
'npx codeceptjs run --config=codecept_MCD_AR.conf.js --steps try_windows_63_request_processing_history_test.js',
'npx codeceptjs run --config=codecept_OBS_EN.conf.js --steps try_windows_63_request_processing_history_test.js'
]




# print("Original list:", file_names)
# print('\n SHUFFLE')
random.shuffle(full_command_file_names)
# sprint("List after first shuffle:", file_names)

# print('\n')
# for file_name in file_names:
#     print("python :", file_name)

#print("\n--- Basic Automation with Python ---\n")
#print("--- Python version "+sys.version+" ---\n")


os.chdir(my_path)
print(os.getcwd())



for file_name in full_command_file_names:

	 print("\n")
	 print("=== DEBUG " + file_name +" ") 
	 # DO IT
	 os.system("" + file_name +"")
	 timeDelay = random.randrange(0, 15)
	 print("\n=== TIMEDELAY " + str(timeDelay) + " === ")
	 # To launch in between the npx command 
	 time.sleep(timeDelay)
# Sleep function is using seconds so it will generate a random interval within 1 hour.
# time.sleep(3)
# timeDelay = random.randrange(0, 3600)
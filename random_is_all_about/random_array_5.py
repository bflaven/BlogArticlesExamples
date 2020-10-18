#!/usr/local/bin/python3
# -*- coding: utf-8 -*-
#
"""
/usr/local/bin/python3 for Python 3.7.7
/usr/bin/python for Python 2.7.10


cd /Users/brunoflaven/Documents/02_copy/_random_is_all_about
python random_array_5.py


"""

import os
import sys
import random

# Set the correct values for your path and script
#VALUES
my_path = '/Users/brunoflaven/Documents/02_copy/_random_is_all_about/e2e/'



# print('\n ORIGINAL')
file_names = [
'try_windows_dashboard_3_test.js',
'try_windows_dashboard_search_by_url_1_test.js',
'try_windows_hp_2_test.js',
'try_windows_13_test.js',
'try_windows_13_soft_delete_test.js',
'try_windows_10_test.js',
'try_windows_10a_test.js',
'try_windows_10b_test.js',
'try_windows_11_test.js',
'try_windows_11_0_correct_ck_version_layout_options_test.js',
'try_windows_11_1_correct_ck_version_layout_options_test.js',
'try_windows_12_7_correct_ck_version_copy_word_test.js',
'try_windows_12_4_correct_ck_version_cut_and_paste_test.js',
'try_windows_12_6_correct_ck_version_insert_link_test.js',
'try_windows_11a_test.js',
'try_windows_11b_test.js',
'try_windows_11c_test.js',
'try_windows_11b_show_revisions_test.js',
'try_windows_11c_keep_previous_lastmodified_date_test.js',
'try_windows_11d_test.js',
'try_windows_12_test.js',
'try_windows_12a_test.js',
'try_windows_12b_test.js',
'try_windows_14_slideshow_test.js',
'try_windows_15_test.js',
'try_windows_16_test.js',
'try_windows_17_test.js',
'try_windows_17a_test.js',
'try_windows_17b_test.js',
'try_windows_18_test.js',
'try_windows_19_create_wire_test.js',
'try_windows_em_1_test.js',
'try_windows_em_2_test.js',
'try_windows_em_3_test.js',
'try_windows_em_3a_slideshow_single_image_test.js',
'try_windows_em_4_test.js',
'try_windows_tag_1_test.js',
'try_windows_tag_2_test.js',
'try_windows_tag_3_test.js',
'try_windows_external_obs_1_test.js',
'try_windows_upload_media_1_test.js',
'try_windows_ck_editor_1_image_test.js',
'try_windows_ck_editor_2_video_test.js',
'try_windows_ck_editor_3_embed_test.js',
'try_windows_ck_editor_4_text_test.js',
'try_windows_ck_editor_5_file_test.js',
'try_windows_ck_editor_6_slideshow_test.js',
'try_windows_update_meta_media_1_test.js',
'try_windows_about_tabs_4_test.js',
'try_windows_history_1_test.js',
'try_windows_bookmarks_service_2_test.js',
'try_windows_hot_tags_tab_3_test.js'
]
# print("Original list:", file_names)

# print('\n SHUFFLE')
random.shuffle(file_names)
# sprint("List after first shuffle:", file_names)

# print('\n')
# for file_name in file_names:
#     print("python :", file_name)

#print("\n--- Basic Automation with Python ---\n")
#print("--- Python version "+sys.version+" ---\n")

# https://www.askpython.com/python-modules/python-system-command

#EXECUTE
# print(my_path)
# os.system("cd " + my_path)
# os.system("ls -l")
# for file_name in file_names:
#     os.system("python " + file_name)

# command = "python --version"  # command to be executed
# command_two = "ls -l"

# res_two = os.system(command_two)
#the method returns the exit status
# os.chdir(path)
# print("res_two =>  ", res_two)


# path = os.getcwd()
# print(path)
# /Users/brunoflaven/Documents/02_copy/_random_is_all_about
#print(type(path))
# <class 'str'>

os.chdir(my_path)
print(os.getcwd())
# /Users/brunoflaven/Documents/02_copy/_random_is_all_about/e2e


# command_two = "ls -l"
# res_two = os.system(command_two)
# print(res_two)


for file_name in file_names:
     # os.system("python " + file_name)
     print ("npx ... " + file_name)


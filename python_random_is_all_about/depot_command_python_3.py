#!/usr/bin/python
# -*- coding: utf-8 -*-
#
"""

cd /Users/brunoflaven/Documents/02_copy/_random_is_all_about
python depot_command_python_3.py


"""

import random

print('\n ORIGINAL')
country_names = ['England', 'Italy', 'Spain', 'France', 'Portugal']
print("Original list:", country_names)

print('\n')
for country_name in country_names:
    print("Country :", country_name)
    
print('\n SHUFFLE')
random.shuffle(country_names)
print("List after first shuffle:", country_names)

# random.shuffle(number_list)
# print("List after second shuffle:", number_list)

print('\n')
for country_name in country_names:
    print("Country :", country_name)


    

"""
import random

number_list = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
print("Original list:", number_list)

random.shuffle(number_list)
print("List after first shuffle:", number_list)

random.shuffle(number_list)
print("List after second shuffle:", number_list)


"""

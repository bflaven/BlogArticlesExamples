#!/usr/bin/python
# -*- coding: utf-8 -*-
#
"""

cd /Users/brunoflaven/Documents/02_copy/_random_is_all_about
python file_3.py


"""
import random
file='file_3.py'

# print('\n')
# print('You are in: ', file)
# print('\n')


def get_random_choice(input_array):
    return random.choice(input_array)


print('\n')
print(file)
print(get_random_choice(["apple", "pear", "peach", "banana", "mango"]))
print('\n')

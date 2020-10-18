#!/usr/local/bin/python3
# -*- coding: utf-8 -*-
#
"""
/usr/local/bin/python3 for Python 3.7.7
/usr/bin/python for Python 2.7.10


cd /Users/brunoflaven/Documents/02_copy/_random_is_all_about
python 01_shuffle_array.py


"""

import os
import sys
import random

# Set the correct values for your path and script
#VALUES
my_path = '/Users/brunoflaven/Documents/02_copy/_random_is_all_about/test_platform/e2e/'



# print('\n ORIGINAL')
file_names = ['file_1.py', 'file_2.py',
                 'file_3.py', 'file_4.py', 'file_5.py']
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
     os.system("python " + file_name)


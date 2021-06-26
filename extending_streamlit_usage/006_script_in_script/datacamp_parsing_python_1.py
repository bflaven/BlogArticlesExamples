#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/

[file]
python datacamp_parsing_python_1.py abc 123
python datacamp_parsing_python_1.py Tom Bruno Don Marcel
python datacamp_parsing_python_1.py Tom Bruno Don Marcel Salomon
python datacamp_parsing_python_1.py Tom Bruno Don

Source: https://www.datacamp.com/community/tutorials/argument-parsing-in-python


"""


import sys

print('Number of arguments: {}'.format(len(sys.argv)))
print('Argument(s) passed: {}'.format(str(sys.argv)))

print('sys.argv[0]: {}'.format(sys.argv[0]))
print('sys.argv[1]: {}'.format(sys.argv[1]))
print('sys.argv[2]: {}'.format(sys.argv[2]))
print('sys.argv[3]: {}'.format(sys.argv[3]))
print('sys.argv[4]: {}'.format(sys.argv[4]))

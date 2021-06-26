#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/

[file]
python datacamp_parsing_python_4.py
python datacamp_parsing_python_4.py Tom Bruno Don Marcel
python datacamp_parsing_python_4.py Tom Bruno Don Marcel Salomon
python datacamp_parsing_python_4.py Tom Bruno Don



Source: https://www.datacamp.com/community/tutorials/exception-handling-python

"""

import sys


# import sys
# try:
#     my_list = [3, 7, 9, 4, 6]
#     print (my_list[6])
# except IndexError as e:
#     print("\n---erreur")
#     print (e)
#     print (sys.exc_type)

    
# try:
#     a = 100
#     b = "DataCamp"
#     assert a == b
# except AssertionError:
#     print("Assertion Exception Raised.")
# else:
#     print("Success, no error!")


# try:
#     a = ['a', 'b', 'c']
#     print(a[4])
# except LookupError:
#     print("Index Error Exception Raised, list index out of range")
# else:
#     print("Success, no error!")

print('length: {}'.format(len(sys.argv)))



try:
    if len(sys.argv) <= 4:
        print('IF usage: python datacamp_parsing_python_1.py <first_value> <second_value> <third_value> <fourth_value>')
    else:
        # Iterate over the options and values
        print('sys.argv[0]: {}'.format(sys.argv[0]))
        print('sys.argv[1]: {}'.format(sys.argv[1]))
        print('sys.argv[2]: {}'.format(sys.argv[2]))
        print('sys.argv[3]: {}'.format(sys.argv[3]))
        print('sys.argv[4]: {}'.format(sys.argv[4]))
except LookupError:
    print("ERROR ::: Index Error Exception Raised, list index out of range")
    print('usage: python datacamp_parsing_python_3.py <first_value> <second_value> <third_value> <fourth_value>')
    # sys.exit(2)
# else:
    #print("Success, no error!")


# try:
#    if format(len(sys.argv)) != 5:
#       print('usage: python datacamp_parsing_python_1.py <first_value> <second_value> <third_value> <fourth_value>')
#    else:
#     # Iterate over the options and values
#     print('sys.argv[0]: {}'.format(sys.argv[0]))
#     print('sys.argv[1]: {}'.format(sys.argv[1]))
#     print('sys.argv[2]: {}'.format(sys.argv[2]))
#     print('sys.argv[3]: {}'.format(sys.argv[3]))
#     print('sys.argv[4]: {}'.format(sys.argv[4]))

# except IndexError:
#    print('usage: python datacamp_parsing_python_1.py <first_value> <second_value> <third_value> <fourth_value>')
#    sys.exit(2)

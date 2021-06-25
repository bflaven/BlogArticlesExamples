#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/

[file]
usage: parsing_python_2.py -x <integer first_value> -y < integer second_value>
python parsing_python_2.py -x 2 -y 5
python parsing_python_2.py -x 10 -y 20


Source: https://www.tutorialspoint.com/argument-parsing-in-python


"""



# Using getopt

import getopt
import sys

# Remove the first argument( the filename)
all_args = sys.argv[1:]
prod = 1


print("\n---")
print(all_args)
print("---\n")

try:
   # Gather the arguments
   opts, arg = getopt.getopt(all_args, 'x:y:')
   # Should have exactly two options
   if len(opts) != 2:
      print('usage: args_demo.py -x <integer first_value> -y < integer second_value>')
   else:
      # Iterate over the options and values
      for opt, arg_val in opts:
         prod *= int(arg_val)
      print('Product of the two numbers is {}'.format(prod))

except getopt.GetoptError:
   print('usage: args_demo.py -a <first_value> -b <second_value>')
   sys.exit(2)


#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/

[file]
(OK)
python parsing_python_3.py -x 2 -y 5
(KO)
python parsing_python_3.py -x -y 5


Source: https://www.tutorialspoint.com/argument-parsing-in-python




"""


# Using argparse

import argparse

# Construct an argument parser
all_args = argparse.ArgumentParser()

#print("\n---")
#print(all_args)
#print("---\n")



# Add arguments to the parser
all_args.add_argument("-x", "--Value1", required=True,
                      help="first Value")
all_args.add_argument("-y", "--Value2", required=True,
                      help="second Value")
args = vars(all_args.parse_args())

# Find the product
print("Product is {}".format(int(args['Value1']) * int(args['Value2'])))

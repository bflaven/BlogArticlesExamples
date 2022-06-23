#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/unit_testing/


[file]
python3 unit_test_002.py
python3 -m unittest unit_test_002.py



# source
https://pythongeeks.org/python-unit-testing/


# command

"""

import unittest
def MakeCalculation(a,b): #defining the function to be tested
    return a*b



class Tests(unittest.TestCase): #creating the class
    def test(self):  #method that tests the function 
        # testing by calling the function and passing the predicted result
        self.assertEqual(MakeCalculation(4, -2), -8)
        
if __name__ == '__main__':
    unittest.main()



    
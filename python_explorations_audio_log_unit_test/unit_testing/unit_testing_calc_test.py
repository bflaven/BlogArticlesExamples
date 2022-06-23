#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/unit_testing/


[file]
python3 unit_testing_calc_test.py

# source
https://www.educba.com/python-unit-test/



"""


import unittest
import unit_testing_calc


class TestCalc(unittest.TestCase):


     def test_addition(self):
         self.assertEqual(unit_testing_calc.addition(5, 5), 10)
         self.assertEqual(unit_testing_calc.addition(-3, 3), 0)
         self.assertEqual(unit_testing_calc.addition(-5, -5), -10)


     def test_subtraction(self):
         self.assertEqual(unit_testing_calc.subtraction(15, 5), 10)
         self.assertEqual(unit_testing_calc.subtraction(-1, 2), -3)
         self.assertEqual(unit_testing_calc.subtraction(-1, -1), 0)


     def test_multiplication(self):
         self.assertEqual(unit_testing_calc.multiplication(20, 5), 100)
         self.assertEqual(unit_testing_calc.multiplication(-2, 1), -2)
         self.assertEqual(unit_testing_calc.multiplication(-1, -3), 3)


     def test_division(self):
         self.assertEqual(unit_testing_calc.division(10, 10), 1)
         self.assertEqual(unit_testing_calc.division(-1, 1), -1)
         self.assertEqual(unit_testing_calc.division(-2, -2), 1)
         self.assertEqual(unit_testing_calc.division(6, 3), 2)


if __name__ == '__main__':
   unittest.main()
 
 
 
 
 


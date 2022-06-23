#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/unit_testing/


[file]
python3 unit_test_area_test.py
python3 -m unittest unit_test_area_test.py



# source
https://www.educba.com/python-unit-test/


# command

"""

from unit_test_area import *
import unittest

class Testarea(unittest.TestCase):
   
   def test_make_area(self):
      self.assertAlmostEqual(make_area(5), 25)
      self.assertAlmostEqual(make_area(3), 9)
      self.assertAlmostEqual(make_area(4), 16)

if __name__ == '__main__':
   unittest.main()



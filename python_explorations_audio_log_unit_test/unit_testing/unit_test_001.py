#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
/Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python_explorations_audio_log_unit_test/unit_testing

[file]
python3 unit_test_001.py
python3 -m unittest unit_test_001.py



# source
https://www.geeksforgeeks.org/unit-testing-python-unittest/


# command

"""

# Python code to demonstrate working of unittest
import unittest


class TestStringMethods(unittest.TestCase):

    def setUp(self):
        pass

    # Returns True if the string contains 4 a.
    def test_strings_a(self):
        self.assertEqual('bruno'*4, 'brunobrunobrunobruno')

    # Returns True if the string is in upper case.
    def test_upper(self):
        self.assertEqual('bruno'.upper(), 'BRUNO')

    # Returns TRUE if the string is in uppercase
    # else returns False.
    def test_isupper(self):
        self.assertTrue('BRUNO'.isupper())
        self.assertFalse('bruno'.isupper())

    # Returns true if the string is stripped and
    # matches the given output.
    def test_strip(self):
        
        s = 'flaven.fr'
        self.assertEqual(s.strip('fla'), 'ven.fr')
        
        
    # Returns true if the string splits and matches
    # the given output.
    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        with self.assertRaises(TypeError):
            s.split(2)


if __name__ == '__main__':
    unittest.main()
    
    
'''
1. assertEqual(): Tests if the values of the two arguments are equal or not.
2. assertNotEqual(): Tests if the values of the two arguments are unequal or not.
3. assertTrue(): Tests if the argument outputs a Boolean True.
4. assertFalse(): Tests if the argument outputs a Boolean False.
5. assertIs(): Tests if the given arguments evaluate belong to the same object.
6. assertIsNot(): Tests if the given arguments evaluate belong to the same object.
7. assertIsNone(): Tests if the given argument evaluates to None.
8. assertIsNotNone(): Tests if the given argument does not evaluates to None.
9. assertIn(): Takes input of two objects and tests if the first argument is in the second one (child of the 2nd one).
10. assertNotIn(): Tests if the first argument is not in the second argument.
11. assertIsInstance(): Tests if the first argument (object) is an instance of the second argument(class).
12. assertRaises(): Tests if the argument raises an exception when we call the callable with positional/ keyword arguments.
13. assertRaisesRegex(): It is similar to assertRaises(). It tests if the regex matches the string representation of the raised exception.
14. assertWarns(): Tests if the argument gives a warning when we call the callable with positional/ keyword arguments.
15. assertWarnsRegex(): It is similar to assertWarns(). It tests if the regex matches the warning message.
16. assertLogs(): Tests if the Python has logged at least one message on the logger or a child of the logger.
17. assertAlmostEqual(): Tests if the value of the first is approximately equal to the second argument.
18. assertNotAlmostEqual(): Tests if the first and the second arguments do not have approximate values.
19. assertGreater(): Tests if the first argument is greater than the second one.
20. assertGreaterEqual(): Tests if the first argument is greater than or equal to the second one.
21. assertLess(): Tests if the first argument is greater than the second one.
22. assertLessEqual(): Tests if the first argument is greater than or equal to the second one.
23. assertRegex(): Tests if the regex search matches the given text.
24. assertNotRegex()- Tests if the regex search does not match with the given text.
25. assertCountEqual()- Takes two sequences and check if they have the same count of the elements.
26. assertMultiLineEqual()- Tests if the multiline string given as the first argument is equal to the second.
27. assertSequenceEqual()- Tests if two input sequences are equal.
28. assertListEqual()- Tests if two input lists are equal.
29. assertTupleEqual()- Tests if two input tuples are equal.
30. assertSetEqual()- Tests if two input sets are equal.
31. assertDictEqual()- Tests if two input dictionaries are equal.
'''
#!/usr/bin/env python3.6
# -*- coding: utf-8 -*-
"""

cd /Users/brunoflaven/Documents/01_work/blog_articles/using_log_pyhton/

python3 001_using_log_python.py

"""


import logging 


logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s - %(message)s')


# logging.debug('Start of program') 

def factorial(n): 
    # logging.debug('Start of factorial( %)' % (n)) 
    logging.debug('Start of factorial (%)')
    total = 1 
    for i in range(n + 1): total *= i 
    logging.debug('i is ' + str(i) + ', total is ' + str(total)) 
    # logging.debug('End of factorial( %)' % (n))
    # logging.debug('End of factorial (%)')
    return total 


# RESULT
result = factorial(6)

print(result)
logging.debug('End of program')





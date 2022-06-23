#!/usr/bin/env python3.6
# -*- coding: utf-8 -*-
"""

cd /Users/brunoflaven/Documents/01_work/blog_articles/using_log_pyhton/

python3 003_using_log_python.py


[SOURCE]
https://pythonexamples.org/python-logging-debug/


"""


import logging

class MyFilter(object):
    def __init__(self, level):
        self.__level = level

    def filter(self, logRecord):
        return logRecord.levelno <= self.__level


#create a logger
logger = logging.getLogger('mylogger')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler('mylog2.log')
formatter = logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
#set filter to log only DEBUG lines
handler.addFilter(MyFilter(logging.DEBUG))
logger.addHandler(handler)

#write a debug line to log file
logger.debug('This is a DEBUG message')
logger.info('This is a INFO message')
logger.warning('This is a WARNING message')
logger.error('This is an ERROR message')
logger.critical('This is a CRITICAL message')






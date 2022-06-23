#!/usr/bin/env python3.6
# -*- coding: utf-8 -*-
"""

cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python_explorations_audio_log_unit_test/using_log_pyhton/
s
python3 002_using_log_python.py


[SOURCE]
https://pythonexamples.org/python-logging-debug/


"""


import logging 

#create a logger
logger = logging.getLogger('mylogger')
#set logging level
logger.setLevel(logging.DEBUG)

handler = logging.FileHandler('mylog.log')
# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

#write a debug message
logger.debug('This is a DEBUG message')






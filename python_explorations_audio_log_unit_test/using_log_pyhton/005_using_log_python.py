#!/usr/bin/env python3.6
# -*- coding: utf-8 -*-
"""

cd /Users/brunoflaven/Documents/01_work/blog_articles/using_log_pyhton/

python3 005_using_log_python.py


[SOURCE]
https://www.digitalocean.com/community/tutorials/how-to-use-logging-in-python-3


"""


import logging

logging.basicConfig(level=logging.DEBUG)


class Pizza():
    def __init__(self, name, price):
        self.name = name
        self.price = price
        logging.debug("Pizza created: {} (${})".format(self.name, self.price))

    def make(self, quantity=1):
        logging.debug("Made {} {} pizza(s)".format(quantity, self.name))

    def eat(self, quantity=1):
        logging.debug("Ate {} pizza(s)".format(quantity, self.name))


pizza_01 = Pizza("artichoke", 15)
pizza_01.make()
pizza_01.eat()

pizza_02 = Pizza("margherita", 12)
pizza_02.make(2)
pizza_02.eat()

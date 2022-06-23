#!/usr/bin/env python3.6
# -*- coding: utf-8 -*-
"""

cd /Users/brunoflaven/Documents/01_work/blog_articles/using_log_pyhton/

python3 007_using_log_python.py


[SOURCE]
https://www.digitalocean.com/community/tutorials/how-to-use-logging-in-python-3


"""


import logging

logging.basicConfig(
    filename="test_007_boring.log",
    level=logging.DEBUG,
    format="%(asctime)s:%(levelname)s:%(message)s"
)


class Pizza():
    def __init__(self, name, price):
        self.name = name
        self.price = price
        logging.debug("Pizza created: {} (${})".format(self.name, self.price))

    def make(self, quantity=1):
        logging.debug("Made {} {} pizza(s)".format(quantity, self.name))

    def eat(self, quantity=1):
        logging.debug("Ate {} pizza(s)".format(quantity, self.name))


# SET_1
pizza_01 = Pizza("artichoke", 15)
pizza_01.make()
pizza_01.eat()

pizza_02 = Pizza("margherita", 12)
pizza_02.make(2)
pizza_02.eat()

# SET_2
pizza_01 = Pizza("Sicilian", 18)
pizza_01.make(5)
pizza_01.eat(4)

pizza_02 = Pizza("quattro formaggi", 16)
pizza_02.make(2)
pizza_02.eat(2)

# SET_2
pizza_01 = Pizza("melazanne", 18)
pizza_01.make(5)
pizza_01.eat(4)

pizza_02 = Pizza("Caprese", 16)
pizza_02.make(2)
pizza_02.eat(2)

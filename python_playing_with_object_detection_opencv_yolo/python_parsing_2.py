#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[path]
cd /path-to/your/directory/

[file]
python python_parsing_2.py

"""
import os

# List all files in a directory using os.listdir
basepath = 'images/'
for entry in os.listdir(basepath):
    if os.path.isfile(os.path.join(basepath, entry)):
        print(entry)

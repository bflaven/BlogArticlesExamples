#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name nft_insights python=3.9.7
conda info --envs
source activate nft_insights
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights/009_treasure_island_project/

[file]
python using_pil_1.py

    
[source]
https://github.com/JohnVCZ/Island-generator.git


[required]
# install

pip install pillow
pip install ipython

pip install -r requirements.txt


"""
import math
import random
import datetime
import argparse
# importing Image module from PIL package
from PIL import Image as PIL_image, ImageColor
# require for convertion
import matplotlib


# im = ImageColor.getrgb("orange")
# print(im)

# im1 = ImageColor.getrgb("red")
# print(im1)

#    'rich blue': '#021bf9',
#    'dirty purple': '#734a65',
#    'greenblue': '#23c48b',
#    'icky green': '#8fae22',
#    'light khaki': '#e6f2a2',

# https://www.codespeedy.com/convert-rgb-to-hex-color-code-in-python/

# ATTEMPT_1
# RGB to Hex
def rgb_to_hex(rgb):
    return '%02x%02x%02x' % rgb


result_RGB_to_Hex = rgb_to_hex((255, 255, 195))
print(f"result_RGB_to_Hex :: "+str(result_RGB_to_Hex)+"")

# Hex to RGB
def hex_to_rgb(value):
    value = value.lstrip('#')
    lv = len(value)
    return tuple(int(value[i:i+lv//3], 16) for i in range(0, lv, lv//3))



result_Hex_to_RGB = hex_to_rgb("FF65BA")
print(f"result_Hex_to_RGB :: "+str(result_Hex_to_RGB)+"")

# ATTEMPT_2
print(matplotlib.colors.to_hex([0.47, 0.0, 1.0]))
print(matplotlib.colors.to_hex([0.7, 0.321, 0.3, 0.5], keep_alpha=True))

print(matplotlib.colors.to_rgb("#aabbcc"))
print(matplotlib.colors.to_rgb("#ddee9f"))



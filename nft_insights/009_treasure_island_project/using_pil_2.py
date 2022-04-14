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
cd cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights/Island-generator/

[file]
python using_pil_2.py

    
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

# get some colors from
import color_data as colors


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


# result_RGB_to_Hex = rgb_to_hex((255, 255, 195))
# print(f"result_RGB_to_Hex :: "+str(result_RGB_to_Hex)+"")

# Hex to RGB
def hex_to_rgb(value):
    value = value.lstrip('#')
    lv = len(value)
    return tuple(int(value[i:i+lv//3], 16) for i in range(0, lv, lv//3))



# result_Hex_to_RGB = hex_to_rgb("FF65BA")
# print(f"result_Hex_to_RGB :: "+str(result_Hex_to_RGB)+"")

# ATTEMPT_2
# print(matplotlib.colors.to_hex([0.47, 0.0, 1.0]))
# print(matplotlib.colors.to_hex([0.7, 0.321, 0.3, 0.5], keep_alpha=True))

# print(matplotlib.colors.to_rgb("#aabbcc"))
# print(matplotlib.colors.to_rgb("#ddee9f"))

# ATTEMPT_3
# COLOR
def getList(dict):
    return list(dict.values())

# print(getList(colors.XKCD_COLORS))
# colorSelected = random.choice(getList(colors.XKCD_COLORS))
# print(f"colorSelected :: "+colorSelected+"")

# colorSelectedHex = matplotlib.colors.to_rgb(colorSelected)
# print(f"colorSelectedHex :: "+str(colorSelectedHex)+"")

# coloursSample = {"blue": (0, 0, 200),
#                "green": (0, 200, 0),
#                "brown": (150, 100, 0),
#                "white": (200, 200, 200),
#                "fail": (200, 0, 0)}
  
# SET_2
# coloursSample = {
#         "#548d44": (int(0.32941176470588235), int(0.5529411764705883), int(0.26666666666666666)),
#         "#c95efb": (int(0.788235294117647), int(0.3686274509803922), int(0.984313725490196)),
#         "#030764":  (int(0.011764705882352941), int(0.027450980392156862), int(0.39215686274509803)),
#         "#fe019a": (int(0.996078431372549), int(0.00392156862745098), int(0.6039215686274509)),
#         "#0a888a": (int(0.0392156862745098), int(0.5333333333333333), int(0.5411764705882353))
#     }
   
# SET_3 
coloursSample = {
    "#548d44": (int(25), int(141), int(51)),
    "#c95efb": (int(201), int(94), int(251)),
    "#030764":  (int(3), int(7), int(100)),
    "#fe019a": (int(254), int(1), int(154)),
    "#0a888a": (int(10), int(136), int(138))
}


print(getList(coloursSample))

coloursSampleArray = getList(coloursSample)

for color in coloursSampleArray:
  print(color)
  # result_RGB_to_Hex = rgb_to_hex(color)
  # print(f"result_RGB_to_Hex :: "+str(result_RGB_to_Hex)+"")
  
  



"""

result_RGB_to_Hex :: 0000c8 blue-purple
result_RGB_to_Hex :: 00c800 green
result_RGB_to_Hex :: 966400 orange-maroon
result_RGB_to_Hex :: c8c8c8 grey
result_RGB_to_Hex :: c80000 red

# https://colors-picker.com/hex-color-picker/

colorSelected :: #548d44
colorSelectedHex :: (0.32941176470588235, 0.5529411764705883, 0.26666666666666666)


colorSelected :: #c95efb
colorSelectedHex :: (0.788235294117647, 0.3686274509803922, 0.984313725490196)


colorSelected :: #030764
colorSelectedHex :: (0.011764705882352941, 0.027450980392156862, 0.39215686274509803)

colorSelected :: #fe019a
colorSelectedHex :: (0.996078431372549, 0.00392156862745098, 0.6039215686274509)

colorSelected :: #0a888a
colorSelectedHex :: (0.0392156862745098, 0.5333333333333333, 0.5411764705882353)


colorSelected :: #ffcfdc
colorSelectedHex :: (1.0, 0.8117647058823529, 0.8627450980392157)

colorSelected :: #c9d179
colorSelectedHex :: (0.788235294117647, 0.8196078431372549, 0.4745098039215686)


"""


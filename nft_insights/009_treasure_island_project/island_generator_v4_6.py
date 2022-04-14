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
cd /Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/rorschach_project/Island-generator/

[file]
python island_generator_v4_6.py -r 5 -s [300,300] -b 20 -c [25,10,60]
python island_generator_v4_6.py -r 5 -s [200,200] -b 10 -c [5,45,10]
python island_generator_v4_6.py -r 5 -s [300,300] -b 36 -c [67,45,78]
python island_generator_v4_6.py -r 5 -s [200,200] -b 30 -c [30,14,55]
python island_generator_v4_6.py -r 5 -s [200,200] -b 15 -c [25,10,60]
python island_generator_v4_6.py -r 5 -s [200,200] -b 22 -c [67,45,78]
python island_generator_v4_6.py -r 5 -s [200,200] -b 30 -c [30,14,55]
python island_generator_v4_6.py -r 5 -s [300,300] -b 36 -c [67,45,78]
python island_generator_v4_6.py -r 1 -s [200,200] -b 15 -c [28,34,68]

: param repeat: number of countries generated
: param size: dimensions of the map in pixels
: param biom_size: radius of the biome point range in pixels
: param cluster: limit values of altitude bands with exp. 100%
0% = water
100% = snowy mountains 


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
from PIL import Image as PIL_image


def replace_multiple(main_str, to_be_replaced, substitute):
    """
    Replaces all instances of the selected symbols with one new one.

     : param main_str: string to edit
     : param to_be_replaced: group of unwanted symbols
     : param substitute: placeholder

     : return main_str: returns the modified string
    """

    for item in to_be_replaced:
        if item in main_str:
            main_str = main_str.replace(item, substitute)

    return main_str


def save_img(image, size):
    """
    Creates a file and stores color data in it.

     : param image: list of RGB duplicates representing pixels
     : param size: image dimensions
     """

    img_obj = PIL_image.new("RGB", size, (0, 255, 255))
    img_obj.putdata(image)

    date = replace_multiple(str(datetime.datetime.now()), [".", ":", "-"], "_")
    filename = date[:len(date) - 3] + ".png"
    img_obj.save(filename)
    print(f"IMG saved as {filename}.")


def spread_dots(size, biom_size):
    """
    Creates a set of biom points with a weight in the matrix and returns their list.

     : param size: area dimensions
     : param biom_size: radius of reach of the biom point

     : return coords: list of coordinates of biom points with weights
    """

    size_x, size_y = size
    coords = []
    k = int((size_x + size_y) * 1.5)

    for dot in range(k):
        # souřadnice ---------- interval s přesahem ------- offset
        co_x = random.randint(0, size_x + 2 * biom_size) - biom_size
        co_y = random.randint(0, size_y + 2 * biom_size) - biom_size
        weight = random.randint(0, 500) / 100

        coords.append({"co_x": co_x,
                       "co_y": co_y,
                       "weight": weight})

    return coords


def get_height(point, biom_size, coords):
    """
    For each point on the map, it finds the altitude based on the proximity of the boim points.
     Returns the height.

     : param point: point of interest on the map
     : param biom_size: radius of reach of the biom point
     : param coords: list of coordinates of biom points with weights

     : return height: sum of weights from biom points in range
    """

    height = 0

    for i in range(len(coords)):
        dif_x = abs(coords[i]["co_x"] - point[0])
        dif_y = abs(coords[i]["co_y"] - point[1])

        if dif_x < biom_size:
            if dif_y < biom_size:
                if dif_x + dif_y <= biom_size:
                    height += coords[i]["weight"]

                elif math.pow(dif_x, 2) + math.pow(dif_y, 2)\
                        <= math.pow(biom_size, 2):
                    height += coords[i]["weight"]

    return height


def alternate(size, biom_size, rel_cluster, coords):
    """
    Finds min, max values of height and adjusts relative clusters.
     Returns absolute clusters.

     : param size: area dimensions
     : param biom_size: radius of reach of the biom point
     : param rel_cluster: duple s relat. height limit values
     : param coords: list of coordinates of biom points with weights

     : return abs_cluster: absolute values of clusters
    """

    size_x, size_y = size
    values_list = []

    for y in range(size_y):
        for x in range(size_x):
            values_list.append(get_height((x, y), biom_size, coords))

    base = max(values_list) - min(values_list)
    abs_cluster = [int((limit * base) / 100) for limit in rel_cluster]

    return abs_cluster


def generate(size, biom_size, cluster, colours, coords):
    """
    Assigns color points to all points and returns all pixels in the string.

     : param size: area dimensions
     : param biom_size: radius of reach of the biom point
     : param cluster: duple with height band limits
     : param colors: dictionary with colors
     : param coords: list of coordinates of biom points with weights

     : return pixel_list: string of pixels
    """

    size_x, size_y = size
    pixel_list = []

    for y in range(size_y):
        line = []
        for x in range(size_x):
            height = get_height((x, y), biom_size, coords)
            if height < cluster[0]:
                line.append(colours["colorRandomOne"])
            elif cluster[0] <= height < cluster[1]:
                line.append(colours["colorRandomTwo"])
            elif cluster[1] <= height < cluster[2]:
                line.append(colours["colorRandomThree"])
            elif cluster[2] <= height:
                line.append(colours["colorRandomFour"])
            else:
                line.append(colours["colorRandomFive"])
        pixel_list += line
    return pixel_list


def parse_args():
    """
    Splits and checks arguments.
    """

    parser = argparse.ArgumentParser()

    parser.add_argument("-r", help="repeat", type=int, default=1)
    parser.add_argument("-s", help="size", type=str, default=[200, 200])
    parser.add_argument("-b", help="biom_size", type=int, default=20)
    parser.add_argument("-c", help="cluster", type=str, default=[50, 75, 90])

    args = parser.parse_args()
    return args


def main(repeat, size, biom_size, cluster):
    """
    Control functions. The program creates a map of pseudo-random landscapes in PNG format.

     : param repeat: number of countries generated
     : param size: dimensions of the map in pixels
     : param biom_size: radius of the biome point range in pixels
     : param cluster: limit values of altitude bands with exp. 100%
                     0% = water
                     100% = snowy mountains
                     
    # https://en.wikipedia.org/wiki/Biome
    """

    package = (size, biom_size)
    
    # SET_1
    # colours = {"colorRandomOne": (0, 0, 200),
    #            "colorRandomTwo": (0, 200, 0),
    #            "colorRandomThree": (150, 100, 0),
    #            "white": (200, 200, 200),
    #            "fail": (200, 0, 0)}

    # SET_2
    # colours = { 
    #     "colorRandomOne": (int(25), int(141), int(51)),
    #     "colorRandomTwo": (int(201), int(94), int(251)),
    #     "colorRandomThree":  (int(3), int(7), int(100)),
    #     "colorRandomFour": (int(254), int(1), int(154)),
    #     "colorRandomFive": (int(10), int(136), int(138))
    # }

    # SET_3
    # colours = {
    #     "colorRandomOne": (int(random.randint(0, 255)), int(random.randint(0, 255)), int(random.randint(0, 255))),
    #     "colorRandomTwo": (int(random.randint(0, 255)), int(random.randint(0, 255)), int(random.randint(0, 255))),
    #     "colorRandomThree": (int(random.randint(0, 255)), int(random.randint(0, 255)), int(random.randint(0, 255))),
    #     "colorRandomFour": (int(random.randint(0, 255)), int(random.randint(0, 255)), int(random.randint(0, 255))),
    #     "colorRandomFive": (int(random.randint(0, 255)), int(random.randint(0, 255)), int(random.randint(0, 255)))
    # }
    
    # SET_4
    # colours = {
    #     "colorRandomOne": (6, 154, 243),  # 069AF3 azure
    #     "colorRandomTwo": (21, 176, 26),  # 15B01A green
    #     "colorRandomThree": (169, 86, 30),  # A9561E sienna
    #     "colorRandomFour": (200, 200, 200),  # FFFFFF white
    #     "colorRandomFive": (197, 201, 199)  # C5C9C7 silver
    # }
    
    # SET_5
    colours = {
               "colorRandomOne": (0, 0, 200),
               "colorRandomTwo": (0, 200, 0),
               "colorRandomThree": (150, 100, 0),
               "colorRandomFour": (200, 200, 200),
               "colorRandomFive": (200, 0, 0)
    }
    
# https://matplotlib.org/stable/tutorials/colors/colors.html#comparison-between-x11-css4-and-xkcd-colors
# https://colors-picker.com/hex-color-picker/
    
    print(f":::\nWorking with values:\ns={size}\nb={biom_size}\nc={cluster}")

    for i in range(repeat):
        print(f":::\nGENERATION #{i + 1}\n:::")

        dot_field = spread_dots(*package)
        new_cluster = alternate(*package, cluster, dot_field)
        pixel_list = generate(*package, new_cluster, colours, dot_field)
        save_img(pixel_list, size)

        print(":::")


if __name__ == "__main__":
    
    
    args = parse_args()
    size_list = list(map(int, args.s.strip('[]').split(',')))
    cluster_list = list(map(int, args.c.strip('[]').split(',')))
    main(args.r, size_list, args.b, cluster_list)


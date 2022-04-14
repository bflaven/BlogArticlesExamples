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
cd /Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/rorschach_project/Inkblot/

[file]
python island_generator_v4_2.py -r 5 -s [300,300] -b 20 -c [50,75,90]

    
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
    Nahradí všechny instance zvolených symbolů za jeden nový.

    :param main_str: string určený k úpravám
    :param to_be_replaced: skupina nežádoucích symbolů
    :param substitute: zástupný symbol

    :return main_str: vrací upravený string
    """

    for item in to_be_replaced:
        if item in main_str:
            main_str = main_str.replace(item, substitute)

    return main_str


def save_img(image, size):
    """
    Vytvoří soubor a uloží do něj údaje o barvách.

    :param image: seznam RGB duplů reprezentujících pixely
    :param size: rozměry image
    """

    img_obj = PIL_image.new("RGB", size, (0, 255, 255))
    img_obj.putdata(image)

    date = replace_multiple(str(datetime.datetime.now()), [".", ":", "-"], "_")
    filename = date[:len(date) - 3] + ".png"
    img_obj.save(filename)
    print(f"IMG saved as {filename}.")


def spread_dots(size, biom_size):
    """
    Vytvoří množinu biom bodů s váhou v matici a vrátí jejich seznam.

    :param size: rozměry plochy
    :param biom_size: poloměr dosahu biom bodu

    :return coords: seznam souřadnic biom bodů s váhami
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
    Pro každý bod na mapě zjistí výšku podle blízkosti boim bodů.
    Vrátí údaj výšce.

    :param point: zkoumaný bod na mapě
    :param biom_size: poloměr dosahu biom bodu
    :param coords: seznam souřadnic biom bodů s váhami

    :return height: součet vah od biom bodů v dosahu
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
    Zjistí min, max values of height a upraví relativní clustery.
    Vrátí absolutní clustery.

    :param size:  rozměry plochy
    :param biom_size: poloměr dosahu biom bodu
    :param rel_cluster: duple s relat. hraničními hodnotami výškových pásem
    :param coords: seznam souřadnic biom bodů s váhami

    :return abs_cluster: absolutní hodnoty clusterů
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
    Přiřadí výškám všech bodů barvy a vrátí všechny pixely v řetězci.

    :param size:  rozměry plochy
    :param biom_size: poloměr dosahu biom bodu
    :param cluster: duple s hraničními hodnotami výškových pásem
    :param colours: slovník s barvami
    :param coords: seznam souřadnic biom bodů s váhami

    :return pixel_list: řetězec pixelů
    """

    size_x, size_y = size
    pixel_list = []

    for y in range(size_y):
        line = []
        for x in range(size_x):
            height = get_height((x, y), biom_size, coords)

            if height < cluster[0]:
                line.append(colours["blue"])

            elif cluster[0] <= height < cluster[1]:
                line.append(colours["green"])

            elif cluster[1] <= height < cluster[2]:
                line.append(colours["brown"])

            elif cluster[2] <= height:
                line.append(colours["white"])

            else:
                line.append(colours["fail"])

        pixel_list += line
    return pixel_list


def parse_args():
    """
    Rozdělí a zkontroluje argumenty.
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
    Řídící funkce. Program vytvoří mapu pseudo-náhodné krajiny v PNG formátu.

    :param repeat: počet generovaných krajin
    :param size: rozměry mapy v pixelech
    :param biom_size: poloměr dosahu biom bodu v pixelech
    :param cluster: hraniční hodnoty výškových pásem se zk. 100%
                    0% = voda
                    100% = zasněžené hory
    """

    package = (size, biom_size)
    colours = {"blue": (0, 0, 200),
               "green": (0, 200, 0),
               "brown": (150, 100, 0),
               "white": (200, 200, 200),
               "fail": (200, 0, 0)}

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

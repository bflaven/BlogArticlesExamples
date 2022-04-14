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
python inkblots_mpl_4.py

[source]
https://github.com/DavidKohler/Inkblot

[required]
# install

pip install pillow
pip install ipython
pip install matplotlib
pip install seaborn
pip install streamlit


pip install -r requirements.txt


"""

import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import random

# get some colors from 
import color_data as colors

# personal configuration
# import config_values.values_conf as conf

def generate_trace(n, num_w):
    '''
    Generate num_w random walk traces of length n (2D)
    '''
    x_arrays = []
    y_arrays = []

    for i in range(num_w):
        x = np.zeros(n)
        y = np.zeros(n)

        if i > 0:
            #Makes first point of other walks random
            y[0] = np.random.choice(y_arrays[0], 1)
        for i in range(1, n):
            num = np.random.randint(1, 5)
            if num == 1:
                x[i] = x[i-1] + 1
                y[i] = y[i-1]
            elif num == 2:
                x[i] = x[i-1] - 1
                y[i] = y[i-1]
            elif num == 3:
                x[i] = x[i-1]
                y[i] = y[i-1] + 1
            elif num == 4:
                x[i] = x[i-1]
                y[i] = y[i-1] - 1

        minX = np.amin(x)
        factor = (-1*minX)
        for i in range(len(x)):
            x[i] = x[i] + factor

        x_arrays.append(x)
        y_arrays.append(y)

        x2 = list(x)
        for i in range(len(x2)):
            x2[i] = -1*x2[i]

        x_arrays.append(x2)
        y_arrays.append(y)


    return x_arrays, y_arrays


def plot(x_arrays, y_arrays):
    '''
    Plot each array in x_arrays and y_arrays on same plot (2D)
    '''
    
    for i in range(len(x_arrays)):
        plt.plot(x_arrays[i], y_arrays[i],
                 color=colorSelected, linewidth=linewidthSelected)
    plt.axis('off')
    # plt.show()
    plt.savefig('mask_linewidth_'+str(linewidthSelected) +
                '_color_'+colorSelected+'.png')
    

def plotMask(colorSelected, linewidthSelected, x_arrays, y_arrays):
    '''
    Plot each array in x_arrays and y_arrays on same plot (2D) + color and linewidth
    '''

    for i in range(len(x_arrays)):
        plt.plot(x_arrays[i], y_arrays[i],
                 color=colorSelected, linewidth=linewidthSelected)
    plt.axis('off')
    # plt.show()
    plt.savefig('mask_linewidth_'+str(linewidthSelected) +
                '_color_'+colorSelected+'.png')
    
    

if __name__ == '__main__':
      
    # STEPS
    # n = 500000 #Number of steps
    # n = 10000000  # Number of steps
    # n = 100000  # Number of steps
    # n = 300000  # Number of steps

    # WALKS
    # num_w = 3 #Number of walks
    # num_w = 1 #Number of walks
    num_w = 3  # Number of walks
    
    # COLOR
    # colorSelected = 'hotpink'
    # colorSelected = 'darkorchid'
    # colorSelected = 'seagreen'
    # colorSelected = 'dodgerblue'
    # colorSelected = 'peru'
    # colorSelected = 'coral'
    # colorSelected = 'olivedrab'
    # colorSelected = 'orangered'
    # colorSelected = '#75bbfd'
    # colorSelected = '#910951'
    def getList(dict):
        return list(dict.values())
    # print(getList(colors.XKCD_COLORS))
    colorSelected = random.choice(getList(colors.XKCD_COLORS))
    print(f"colorSelected :: "+colorSelected+"")

    # LINE_WIDTH
    # linewidthSelected = 5
    # linewidthSelected = 3
    # linewidthSelected = 2
    
    linewidthSelected = (random.randrange(1, 9))
    print(f"linewidthSelected :: "+str(linewidthSelected)+"")
    
    # GENERATE MASK (v1)
    # x_arrays, y_arrays = generate_trace(n, num_w)
    # plot(x_arrays, y_arrays)

    
    

    
# Using randrange() to generate numbers from 0-100
# print ("Random number from 0-100 is : ", end="")
# print(random.randrange(100))

# Using randrange() to generate numbers from 50-100
# print("Random number from 50-100 is : ", end="")
# print(random.randrange(50, 100))

# Using randrange() to generate numbers from 50-100
# skipping 5
# print("Random number from 50-100 skip 5 is : ", end="")
# print(random.randrange(50, 100, 5))


number_of_steps = (random.randrange(100000, 800000))
print(f"number_of_steps :: "+str(number_of_steps)+"")

num_of_walks = (random.randrange(1, 9))
print(f"num_of_walks :: "+str(num_of_walks)+"")


# GENERATE MASK (v2)
# x_arrays, y_arrays = generate_trace(number_of_steps, num_w)
# plotMask(colorSelected, linewidthSelected, x_arrays, y_arrays)

"""
color = 'green'
plt.plot([1, 2, 3, 4], color = color)

colorSelected = 'hotpink'
colorSelected = 'orangered'
colorSelected = 'dodgerblue'
colorSelected = 'deeppink'
colorSelected = 'seagreen'
colorSelected = 'darkorchid'
colorSelected = 'peru'
colorSelected = 'coral'
colorSelected = 'olivedrab'


  
‘b’	Blue
‘r’	Red
‘g’	Green
‘c’	Cyan
‘m’	Magenta
‘y’	Yellow
‘k’	Black
‘w’	White

https://www.geeksforgeeks.org/matplotlib-pyplot-colors-in-python/

https://matplotlib.org/stable/gallery/color/named_colors.html

https://github.com/matplotlib/matplotlib/blob/main/lib/matplotlib/_color_data.py


    # COLORS
    # print(colors.XKCD_COLORS)
    # for color in colors.XKCD_COLORS.values():
        # print(color)


    # RANDOM
    # itemsColorSelected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    # random_color = random.choice(itemsColorSelected)
    # print(random_color)
"""

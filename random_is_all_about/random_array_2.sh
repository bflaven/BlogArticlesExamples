#!/bin/bash


# cd /Users/brunoflaven/Documents/02_copy/_random_is_all_about/
# sh random_array_2.sh


array[0]="file1.sdf"
array[1]="file2.sdf"
array[2]="file3.sdf"
array[3]="file4.sdf"

size=${#array[@]}
index=$(($RANDOM % $size))
echo ${array[$index]}


# https://stackoverflow.com/questions/35623462/bash-select-random-string-from-list
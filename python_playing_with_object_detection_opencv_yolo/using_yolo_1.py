#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[path]
cd /path-to/your/directory/


[file]
python using_yolo_1.py

"""
import cv2
import numpy as np

# source
# Load YOLO Algorithms

net = cv2.dnn.readNetFromDarknet('config/yolov3.cfg', 'config/yolov3.weights')
net.setPreferableBackend(cv2.dnn.DNN_BACKEND_OPENCV)


#To load all objects that have to be detected
classes=[]
with open("config/coco.names","r") as f:
    read=f.readlines()
for i in range(len(read)):
    classes.append(read[i].strip("\n"))


#Defining layer names
layer_names=net.getLayerNames()
output_layers=[]
for i in net.getUnconnectedOutLayers():
    output_layers.append(layer_names[i[0]-1])

# debug
# print(classes)

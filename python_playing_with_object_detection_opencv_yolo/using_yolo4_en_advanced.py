#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[path]
cd /path-to/your/directory/

[file]
python using_yolo4_en_advanced.py

"""
# YOLO object detection
import cv2 as cv
import numpy as np
import time

# to parse the directory
import os

# to import in mysql
import mysql.connector as mysql


WHITE = (255, 255, 255)
img = None
img0 = None
outputs = None

# Load names of classes and get random colors
# english
classes = open('config/coco.names').read().strip().split('\n')
# spanish
# classes = open('config/coco_es.names').read().strip().split('\n')

np.random.seed(42)
colors = np.random.randint(0, 255, size=(len(classes), 3), dtype='uint8')

# Give the configuration and weight files for the model and load the network.
net = cv.dnn.readNetFromDarknet('config/yolov3.cfg', 'config/yolov3.weights')
net.setPreferableBackend(cv.dnn.DNN_BACKEND_OPENCV)
# net.setPreferableTarget(cv.dnn.DNN_TARGET_CPU)

# determine the output layer
ln = net.getLayerNames()
ln = [ln[i[0] - 1] for i in net.getUnconnectedOutLayers()]

def load_image(path):
    global img, img0, outputs, ln

    img0 = cv.imread(path)
    img = img0.copy()
    
    # img = cv2.imread(img)
    # if img is None:
    #     break
    # im3 = img.copy()


    blob = cv.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True, crop=False)

    net.setInput(blob)
    t0 = time.time()
    outputs = net.forward(ln)
    t = time.time() - t0

    # combine the 3 output groups into 1 (10647, 85)
    # large objects (507, 85)
    # medium objects (2028, 85)
    # small objects (8112, 85)
    outputs = np.vstack(outputs)

    post_process(img, outputs, 0.5)
    # cv.imshow('window',  img)
    # cv.displayOverlay('window', f'forward propagation time={t:.3}')
    # cv.waitKey(0)

def post_process(img, outputs, conf):
    H, W = img.shape[:2]

    boxes = []
    confidences = []
    classIDs = []

    for output in outputs:
        scores = output[5:]
        classID = np.argmax(scores)
        confidence = scores[classID]
        if confidence > conf:
            x, y, w, h = output[:4] * np.array([W, H, W, H])
            p0 = int(x - w//2), int(y - h//2)
            p1 = int(x + w//2), int(y + h//2)
            boxes.append([*p0, int(w), int(h)])
            confidences.append(float(confidence))
            classIDs.append(classID)
            # cv.rectangle(img, p0, p1, WHITE, 1)

    indices = cv.dnn.NMSBoxes(boxes, confidences, conf, conf-0.1)
    if len(indices) > 0:
        for i in indices.flatten():
            (x, y) = (boxes[i][0], boxes[i][1])
            (w, h) = (boxes[i][2], boxes[i][3])
            color = [int(c) for c in colors[classIDs[i]]]
            cv.rectangle(img, (x, y), (x + w, y + h), color, 2)
            # text = "{}: {:.4f}".format(classes[classIDs[i]], confidences[i])
            text = "{}".format(classes[classIDs[i]])
            cv.putText(img, text, (x, y - 5), cv.FONT_HERSHEY_SIMPLEX, 0.5, color, 1)
            
            
            # insert in to MYSQL
            # print(entry)
            # print("{}: {:.4f}".format(classes[classIDs[i]], confidences[i]))
            
            
            
            
            # INSERT INTO yolo_advanced_images (id, file, keywords) VALUES (2, 'image2.jpg', 'keyword_1_img_2')
            
            # Insert in database
            # Do not forget to create the DB
            db = mysql.connect(
                    host = "localhost",
                    user = "root",
                    passwd="put-your-mysql-password",
                    database="yolo_images"
                )


# -- MySQL ROOT Password local
# root: xxx
# 127.0.0.1 b better used localhost

            cursor = db.cursor()
            # print(cursor)

            ## defining the Query
            query = "INSERT INTO yolo_advanced_images (id, file, keywords) VALUES (%s, %s, %s)"
            ## storing values in a variable
            values = ("0", entry, text)

            ## executing the query with values
            cursor.execute(query, values)

            ## to make final output we have to run the 'commit()' method of the database object
            db.commit()

            # print(cursor.rowcount, "record inserted")
                
                
                

def trackbar(x):
    global img
    conf = x/100
    img = img0.copy()
    post_process(img, outputs, conf)
    # cv.displayOverlay('window', f'confidence level={conf}')
    # cv.imshow('window', img)

# cv.namedWindow('window')
# cv.createTrackbar('confidence', 'window', 50, 100, trackbar)


# load_image('images/yolo_horse.jpg')
# load_image('images/traffic.jpg')
# load_image('images/zoo.jpg')
# load_image('images/kitchen.jpg')
# load_image('images/airport.jpg')
# load_image('images/tennis.jpg')
# load_image('images/wine.jpg')
# load_image('images/bicycles.jpg')

# List all files in a directory using os.listdir
basepath = 'images/'
for entry in os.listdir(basepath):
    if os.path.isfile(os.path.join(basepath, entry)):
        # print(entry)
        load_image('images/'+entry)
# cv.destroyAllWindows()
print("\n --- DONE INSERTION IN MYSQL --- ")

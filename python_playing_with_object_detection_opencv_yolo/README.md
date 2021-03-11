# Improve a CMS's photos library qualification with AI, Object Detection from images in Python with OpenCv and YOLO

This post is about a real issue that can solved by IA. I believe that for any technical topic, rather than exploring AI documentation which in itself could be quite wastful. I always strive to tackle a real use case and apply as much as possible what I want to discover.

**You can read the rest of the article at [Improve a CMS's photos library qualification with AI, Object Detection from images in Python with OpenCv and YOLO](http://flaven.fr/2021/03/improve-a-cmss-photos-library-qualification-with-ai-object-detection-from-images-in-python-with-opencv-and-yolo)**

If you want to leverage on MySQL, you have to create a DB named `yolo_images` and replace your password for MySQL at ` passwd="put-your-mysql-password",`

**Do not forget to download and put in the directory `config` the file `yolov3.weights`** 

<ol>
<li>File_1 : In order to run the network, you will have to download the pre-trained YOLO weight file (237 MB). <a href="https://pjreddie.com/media/files/yolov3.weights" target="_blank" rel="noopener">Download yolov3.weights</a></li>


<li>File_2 : You have also download the the YOLO configuration file: yolov3.cfg - <a href="https://opencv-tutorial.readthedocs.io/en/latest/_downloads/10e685aad953495a95c17bfecd1649e5/yolov3.cfg" target="_blank" rel="noopener">Download yolov3.cfg</a></li>

<li>File_3 : Get the 80 COCO class names: coco.names - <a href="https://opencv-tutorial.readthedocs.io/en/latest/_downloads/a9fb13cbea0745f3d11da9017d1b8467/coco.names" target="_blank" rel="noopener">Download coco.names</a></li>
</ol>


```
├── README.md
├── config # all confg for YOLO
├── images # images used in Object Detection with YOLO
├── mysql_yolo_advanced_images_1.sql # the MySQL DB dump
├── python_mysql_1.py # how-to insert a MySQL record in python
├── python_parsing_2.py # how-to parse a image directory
├── using_yolo4_en_advanced.py # script using yolo and the MySQL DB with KWs in English
├── using_yolo4_es_advanced.py # script using YOLO and the MySQL DB on KWs in Spanish
├── using_yolo_1.py # script using YOLO
├── using_yolo_2.py # script using YOLO
├── using_yolo_3.py # script using YOLO
└── using_yolo_4.py # script using YOLO
```





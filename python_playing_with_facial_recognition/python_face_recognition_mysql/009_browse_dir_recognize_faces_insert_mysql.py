"""

cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/


python 009_browse_dir_recognize_faces_insert_mysql.py


"""

from shutil import copyfile
from PIL import Image
from matplotlib import pyplot as plt
import numpy as np
import os
import face_recognition
import mysql.connector as mysql


# known_picture = face_recognition.load_image_file("./images/known/macron_cocorico_gettyimages_1048128128.jpg")
known_picture = face_recognition.load_image_file("./images/known/michelle_obama_first_official_portrait_as_first_lady.jpg")


known_picture_face_encoding = face_recognition.face_encodings(known_picture)[0]


imageformat=".jpg"
path = './images/unknown'
imfilelist=[os.path.join(path,f) for f in os.listdir(path) if f.endswith(imageformat)]
for el in imfilelist:
        # print (el)
        # print(file_name)

        # Load this picture
        new_picture = face_recognition.load_image_file(el)

        # Iterate through every face detected in the new picture
        for face_encoding in face_recognition.face_encodings(new_picture):

            # Run the algorithm of face comparison for the detected face, with 0.5 tolerance
            results = face_recognition.compare_faces([known_picture_face_encoding], face_encoding, 0.5)

            # Save the image to a seperate folder if there is a match
            if results[0] == True:
                # It shows the filename
                print ("file :: " +el)
                # Insert in database
                db = mysql.connect(
                    host = "localhost",
                    user = "root",
                    passwd = "your-mysql-password",
                    database = "facial_recognition"
                )

                cursor = db.cursor()

                ## defining the Query
                query = "INSERT INTO known_persons (id, file) VALUES (%s, %s)"
                ## storing values in a variable
                values = ("0", el)

                ## executing the query with values
                cursor.execute(query, values)

                ## to make final output we have to run the 'commit()' method of the database object
                db.commit()

                print(cursor.rowcount, "record inserted")
                

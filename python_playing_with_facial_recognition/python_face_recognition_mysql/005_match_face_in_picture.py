"""

cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/

python 005_match_face_in_picture.py

# macron_cocorico_gettyimages_1048128128.jpg
# macron_crowd.jpg


"""


import face_recognition



image = face_recognition.load_image_file("./images/known/macron_cocorico_gettyimages_1048128128.jpg")

unknown_image = face_recognition.load_image_file("./images/unknown/macron_crowd.jpg")
# unknown_image = face_recognition.load_image_file("./images/unknown/macron_not_there.jpg")


try:
    macron_face_encoding = face_recognition.face_encodings(image)[0]
    unknown_face_encoding = face_recognition.face_encodings(unknown_image)[0]
except IndexError:
    print("I wasn't able to locate any faces in at least one of the images. Check the image files. Aborting...")
    quit()


known_faces = [
    macron_face_encoding
]

results = face_recognition.compare_faces(known_faces, unknown_face_encoding)
# just for debug
print(" results => {}".format(results))



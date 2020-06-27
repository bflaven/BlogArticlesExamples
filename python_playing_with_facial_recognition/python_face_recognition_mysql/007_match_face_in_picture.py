
"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/


python 007_match_face_in_picture.py
"""


import face_recognition

known_image = face_recognition.load_image_file('./images/known/macron_cocorico_gettyimages_1048128128.jpg')
known_image_encoding = face_recognition.face_encodings(known_image)[0]

unknown_image = face_recognition.load_image_file(
    './images/unknown/stevo_pendarovski_north_macedonia_750.jpeg')
unknown_face_encoding = face_recognition.face_encodings(unknown_image)[0]


# Compare faces
results = face_recognition.compare_faces(
    [known_image_encoding], unknown_face_encoding)

if results[0]:
    print('This is Macron')
else:
    print('This is NOT Macron')

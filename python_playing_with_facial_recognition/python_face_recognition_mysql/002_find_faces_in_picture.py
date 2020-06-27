
"""

cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/

python 002_find_faces_in_picture.py

"""


import face_recognition

image = face_recognition.load_image_file('./images/unknown/group_two_7_persons_7_faces.png')
face_locations = face_recognition.face_locations(image)

# Array of coords of each face
# print(face_locations)

print(f'Hey there, there are {len(face_locations)} people in this image')



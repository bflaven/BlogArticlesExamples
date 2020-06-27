"""


cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/


python 006_match_face_in_picture.py



"""



import face_recognition

# Load the jpg files into numpy arrays
known_one_image = face_recognition.load_image_file("./images/known/macron_cocorico_gettyimages_1048128128.jpg")
known_two_image = face_recognition.load_image_file("./images/known/michelle_obama_first_official_portrait_as_first_lady.jpg")
unknown_image = face_recognition.load_image_file("./images/unknown/michelle_obama_2.jpg")

# Get the face encodings for each face in each image file
# Since there could be more than one face in each image, it returns a list of encodings.
# But since I know each image only has one face, I only care about the first encoding in each image, so I grab index 0.
try:
    known_one_image_encoding = face_recognition.face_encodings(known_one_image)[0]
    known_two_image_encoding = face_recognition.face_encodings(known_two_image)[0]
    unknown_face_encoding = face_recognition.face_encodings(unknown_image)[0]
except IndexError:
    print("I wasn't able to locate any faces in at least one of the images. Check the image files. Aborting...")
    quit()

known_faces = [
    known_one_image_encoding,
    known_two_image_encoding
]

# results is an array of True/False telling if the unknown face matched anyone in the known_faces array
results = face_recognition.compare_faces(known_faces, unknown_face_encoding)

print("Is the unknown face a picture of Macron? {}".format(results[0]))
print("Is the unknown face a picture of Michelle Obama? {}".format(results[1]))
print("Is the unknown face a new person that we've never seen before? {}".format(not True in results))




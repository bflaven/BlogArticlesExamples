"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/

python 001_find_faces_in_picture.py

"""
from PIL import Image
import face_recognition

# Load the jpg file into a numpy array
# You can use relative or absolute path
image = face_recognition.load_image_file("./images/known/macron_cocorico_gettyimages_1048128128.jpg")

s# Find all the faces in the image using the default HOG-based model.
# This method is fairly accurate, but not as accurate as the CNN model and not GPU accelerated.
# See also: find_faces_in_picture_cnn.py
face_locations = face_recognition.face_locations(image)

print("I found {} face(s) in this photograph.".format(len(face_locations)))

for face_location in face_locations:

    # Print the location of each face in this image
    top, right, bottom, left = face_location
    print("A face is located at pixel location Top: {}, Left: {}, Bottom: {}, Right: {}".format(top, left, bottom, right))

    # You can access the actual face itself like this:
    face_image = image[top:bottom, left:right]
    pil_image = Image.fromarray(face_image)
    # It will extract and sho the pictures
    pil_image.show()




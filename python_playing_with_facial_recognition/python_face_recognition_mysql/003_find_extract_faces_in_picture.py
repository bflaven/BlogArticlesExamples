"""

cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/


python 003_find_extract_faces_in_picture.py


-- several images 
group_protesters_image_1170x530_un_news_shirin_yaseen.jpg
group_protesters_parliament_london_june_6_frank_augstein_ap.jpg
group_of_people_17_persons_16_faces.jpg
group_photo_7_faces.png

"""

from PIL import Image
import face_recognition


image = face_recognition.load_image_file("./images/unknown/group_one_17_persons_16_faces.jpg")
# output 14 faces

# image = face_recognition.load_image_file("./images/unknown/group_two_7_persons_7_faces.png")
# output 7 faces

# image = face_recognition.load_image_file("./images/unknown/group_protesters_masked_parliament_london_june_6_frank_augstein_ap.jpg")
# output 4 faces


# image = face_recognition.load_image_file("./images/unknown/group_protesters_back_image_1170x530_un_news_shirin_yaseen.jpg")
# output 7 faces

face_locations = face_recognition.face_locations(image)

print("I found {} face(s) in this photograph.".format(len(face_locations)))
# start from to avoid 0
i = 1
for face_location in face_locations:

    # Print the location of each face in this image
    top, right, bottom, left = face_location
    print("A face {} is located at pixel location Top: {}, Left: {}, Bottom: {}, Right: {}".format(i, top, left, bottom, right))

    # You can access the actual face itself like this:
    face_image = image[top:bottom, left:right]
    pil_image = Image.fromarray(face_image)
    
    # You want to show the faces found
    # pil_image.show()
    
    # You want to show the faces found
    pil_image.save("./images_output/face-{}.jpg".format(i))
    i = i+1


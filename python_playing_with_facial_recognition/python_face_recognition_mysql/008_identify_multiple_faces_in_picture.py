

"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/facial_recognition/007_play_with_face_recognition/python_face_recognition_mysql/

python 008_identify_multiple_faces_in_picture.py

"""

import face_recognition
from PIL import Image, ImageDraw

known_face_one = face_recognition.load_image_file('./images/known/macron_cocorico_gettyimages_1048128128.jpg')
known_face_one_encoding = face_recognition.face_encodings(known_face_one)[0]

known_face_two = face_recognition.load_image_file('./images/known/michelle_obama_first_official_portrait_as_first_lady.jpg')
known_face_two_encoding = face_recognition.face_encodings(known_face_two)[0]

known_face_three = face_recognition.load_image_file('./images/known/stevo_pendarovski_north_macedonia_750.jpeg')
known_face_three_encoding = face_recognition.face_encodings(known_face_three)[0]





#  Create arrays of encodings and names
known_face_encodings = [
  known_face_one_encoding,
  known_face_two_encoding,
  known_face_three_encoding
]

known_face_names = [
  "Emmanuel Macron",
  "Michelle Obama",
  "Stevo Pendarovski"
]

# Load test image to find faces in
test_image = face_recognition.load_image_file('./images/known/stevo_pendarovski_michelle_obama_emmanuel_macron.jpg')

# Find faces in test image
face_locations = face_recognition.face_locations(test_image)
face_encodings = face_recognition.face_encodings(test_image, face_locations)

# Convert to PIL format
pil_image = Image.fromarray(test_image)

# Create a ImageDraw instance
draw = ImageDraw.Draw(pil_image)

# Loop through faces in test image
for(top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
  matches = face_recognition.compare_faces(known_face_encodings, face_encoding)

  name = "Unknown Person"

  # If match
  if True in matches:
    first_match_index = matches.index(True)
    name = known_face_names[first_match_index]
  
  # Draw box
  draw.rectangle(((left, top), (right, bottom)), outline=(102,51,204))

  # do it in purple 102,51,204 and text in white 255,255,255
  # Draw label
  text_width, text_height = draw.textsize(name)
  draw.rectangle(((left,bottom - text_height - 10), (right, bottom)), fill=(102,51,204), outline=(102,51,204))
  draw.text((left + 6, bottom - text_height - 5), name, fill=(255,255,255))

del draw

# Display image
pil_image.show()

# Save image
pil_image.save('./images_output/identified_stevo_pendarovski_michelle_obama_emmanuel_macron.jpg')

print("DONE - check the directory /images_output/")


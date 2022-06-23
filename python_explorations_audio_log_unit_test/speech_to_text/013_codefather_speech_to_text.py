#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name speech_to_text python=3.9.7
conda info --envs
source activate speech_to_text
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python_explorations_audio_log_unit_test/speech_to_text/

[file]
python 013_codefather_speech_to_text.py



[required]
# install

# for speech recognition
pip install SpeechRecognition 

# Manipulate audio with an simple and easy high level interface.
pip install pydub


# to create eventually an application
pip install streamlit
pip install watchdog
pip install sqlalchemy


# required in this file
pip install playsound
pip install gTTs
pip install wolframalpha
pip install selenium
pip install PyObjC

# required in this file
pip install pyttsx3
pip install wikipedia


# required to install ecapture
pip install --upgrade pip setuptools wheel

pip install opencv-python
pip install --no-use-pep517 opencv-python
pip install scikit-image 

pip install scikit-build

pip install cython
pip install opencv-python
pip install ecapture

# to export requirements
pip freeze > speech_to_text_1.txt


# to install
pip install -r speech_to_text_1.txt


# update conda if needed by running
conda update -n base -c defaults conda


[source]
https://codefather.tech/blog/make-python-speak/



"""


WIKIPEDIA_AUSTRALIA_ETYMOLOGY = 'The name Australia (pronounced /əˈstreɪliə/ in Australian English) is derived from the Latin Terra Australis ("southern land"), a name used for a hypothetical continent in the Southern Hemisphere since ancient times. When Europeans first began visiting and mapping Australia in the 17th century, the name Terra Australis was naturally applied to the new territories.'
# source : https://en.wikipedia.org/wiki/Australia


# Import the gTTS module
from gtts import gTTS

# This the os module so we can play the MP3 file generated
import os

# Generate the audio using the gTTS engine. We are passing the message and the language
# audio = gTTS(text=''+WIKIPEDIA_AUSTRALIA_ETYMOLOGY+'', lang='en')
audio = gTTS(text=''+WIKIPEDIA_AUSTRALIA_ETYMOLOGY+'', lang='en', slow=True)
# audio = gTTS(text='I love Python for text to speech, and you?', lang='en-US', slow=True)

# Save the audio in MP3 format
audio.save("codefather_speech_to_text_message_change_voice_6.mp3")

# Play the MP3 file
os.system("afplay codefather_speech_to_text_message_change_voice_6.mp3")



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
cd /Users/brunoflaven/Documents/01_work/blog_articles/speech_to_text_ppt_generate/speech_to_text/

[file]
python 014_codefather_speech_to_text.py



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


import os
from gtts import gTTS

audio_en = gTTS('hello', lang='en')
audio_it = gTTS('ciao', lang='it')
audio_sp = gTTS('hola', lang='es')
audio_ru = gTTS('привет', lang='ru')

with open('hello_multilingual.mp3', 'wb') as f:
    audio_en.write_to_fp(f)
    audio_it.write_to_fp(f)
    audio_sp.write_to_fp(f)
    audio_ru.write_to_fp(f)

os.system("afplay hello_multilingual.mp3")



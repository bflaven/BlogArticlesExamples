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
python 001_speech_to_text.py




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




# to export requirements
pip freeze > speech_to_text_1.txt


# to install
pip install -r speech_to_text_1.txt


# update conda if needed by running
conda update -n base -c defaults conda


[source]
https://www.thepythoncode.com/article/using-speech-recognition-to-convert-speech-to-text-python


"""

import speech_recognition as sr


# filename = "audio/other/251_137823_0002.wav"
filename = "audio/other/2277_149897_0004.flac"


# initialize the recognizer
r = sr.Recognizer()


# open the file
with sr.AudioFile(filename) as source:
    # listen for the data (load audio to memory)
    audio_data = r.record(source)
    # recognize (convert from speech to text)
    text = r.recognize_google(audio_data)
    print(text)

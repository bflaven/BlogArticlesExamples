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
python 011_codefather_speech_to_text.py



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
# import the module
import pyttsx3


# CASE_1
# convert text to speech
# my computer is in  spanish

# engine = pyttsx3.init()
# engine.say("Hola bruno, como esta hoy ? Siempre aprendido el Python")
# engine.runAndWait()


# CASE_2
# engine = pyttsx3.init()
# voices = engine.getProperty('voices')

# for voice in voices:
#     print(voice)


# CASE_3
engine = pyttsx3.init()
engine.setProperty('voice', 'com.apple.speech.synthesis.voice.samantha')
# engine.setProperty('voice', 'com.apple.speech.synthesis.voice.zuzana')

rate = engine.getProperty('rate')
engine.setProperty('rate', rate-30)
volume = engine.getProperty('volume')
engine.setProperty('volume', volume-0.25)


engine.say(
    "You try to talk with python to improve productivity, efficiency and effectiveness!")
engine.runAndWait()



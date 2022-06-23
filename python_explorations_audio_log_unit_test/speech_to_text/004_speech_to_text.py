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
python 004_speech_to_text.py



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
https://towardsdatascience.com/easy-speech-to-text-with-python-3df0d973b426


"""

filename = "audio/other/251_137823_0002.wav"
# filename = "audio/other/2277_149897_0004.flac"


#import library
import speech_recognition as sr

# Initialize recognizer class (for recognizing the speech)
r = sr.Recognizer()

# Reading Audio file as source
# listening the audio file and store in audio_text variable

with sr.AudioFile(filename) as source:

    audio_text = r.listen(source)

# recoginize_() method will throw a request error if the API is unreachable, hence using exception handling
    try:

        # using google speech recognition
        # text = r.recognize_google(audio_text)
        #Adding french or spanish language option
        # text = r.recognize_google(audio_text, language="fr-FR")
        # text = r.recognize_google(audio_text, language="es-ES")
        text = r.recognize_google(audio_text, language="en-EN")

        print('Converting audio transcripts into text ...')
        print(text)

    except:
        print('Sorry.. run again...')

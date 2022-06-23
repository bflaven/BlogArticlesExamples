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
python 026_bruno_speech_to_text.py


[source]
https://github.com/Umesh-01/Python-Assistant/blob/main/PA.py



"""

import speech_recognition as sr
import pyttsx3
import os
import sys
import re
import webbrowser
import smtplib
import requests
import subprocess
from bs4 import BeautifulSoup
from urllib.request import urlopen
import wikipedia
import wolframalpha
import ctypes
import datetime
from time import strftime

engine = pyttsx3.init()

# RATE
rate = engine.getProperty('rate')   # Getting details of current speaking rate
engine.setProperty('rate', 170)     # Setting up new voice rate

# VOICE
voices = engine.getProperty('voices')   # Getting details of current voice
# Changing index, changes voices. 0 for male, 1 for female
engine.setProperty('voice', voices[0].id)

welcomeMessage = 'Hi, How can I help you?'
print(welcomeMessage)
engine.say(welcomeMessage)
engine.runAndWait()

def newCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print('Say something...')
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source, duration=1)
        audio = r.listen(source)
    try:
        command = r.recognize_google(audio).lower()
        print('You said: ' + command + '\n')
    # loop back to continue to listen for commands if unrecognizable speech is received
    except sr.UnknownValueError:
        print('Sorry I can\'t understand')
        command = newCommand()
    return command


def robotResponse(audio):
    print(audio)
    engine.say(audio)
    engine.runAndWait()


def assistant(command):
    # commands
    # Open Twitter
    if 'twitter' in command:
        reg_ex = re.search('open twitter (.*)', command)
        url = 'https://www.twitter.com/'
        if reg_ex:
            handle = reg_ex.group(1)
            url = url + handle
        webbrowser.open(url)
        robotResponse('Opening Twitter.')
    elif 'jane' in command:
        robotResponse('command one :: opening QuickTime')
        os.system("open /Applications/QuickTime\ Player.app")
    elif 'kate' in command:
        robotResponse('command one :: opening VLC')
        os.system("open /Applications/VLC.app")
    elif 'peter' in command:
        robotResponse('command three :: opening Sublime')
        os.system("open /Applications/Sublime\ Text.app") 
    # Open Instagram
    elif 'bruno' in command:
        url = 'https://www.flaven.fr/'
        webbrowser.open(url)
        robotResponse('Opening flaven.fr')
    # Get current time
    elif 'time' in command:
        now = datetime.datetime.now()
        robotResponse('Current time is %d:%d.' % (now.hour, now.minute))
                
    # command in console
    elif 'list' in command:
        robotResponse("Hold On a Sec ! Listing files")
        # subprocess.call('ls -l')
        subprocess.call('ls -l', shell=True)
    # command in console
    elif 'job' in command:
        robotResponse("Hold On a Sec ! Launch python script")
        subprocess.call('python 025a_bruno_script.py', shell=True)
    
    # Quit
    elif 'quit' in command:
        robotResponse('Bye bye. Have a nice day!')
        sys.exit()

while True:
    assistant(newCommand())


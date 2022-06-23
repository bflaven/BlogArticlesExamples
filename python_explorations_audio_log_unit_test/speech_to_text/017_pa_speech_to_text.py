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
python 017_pa_speech_to_text.py



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


# require in this file
pip install pandas
pip install pywhatkit
pip install PyScreeze
pip install PyMsgBox

# to export requirements
pip freeze > speech_to_text_1.txt


# to install
pip install -r speech_to_text_1.txt


# update conda if needed by running
conda update -n base -c defaults conda


[source]
https://github.com/Umesh-01/Python-Assistant/blob/main/PA.py



"""


import webbrowser

# url = 'http://docs.python.org/'
url = 'http://flaven.fr'

# MacOS
chrome_path = 'open -a /Applications/Google\ Chrome.app %s'

# Windows
# chrome_path = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'

# Linux
# chrome_path = '/usr/bin/google-chrome %s'

webbrowser.get(chrome_path).open(url)



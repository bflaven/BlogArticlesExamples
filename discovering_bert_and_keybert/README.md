# discovering_bert_and_keybert


**Part of a post on how to work with efficiency on customer support with the help of Streamlit, Sqlalchemy and keyBert. The objective is to answer as quick as possible to your consumer feedback!**



**The Streamlit application, presented belwo, has an simple objective : to leverage on automatic keyword generation. This principle is everywhere for multipurpose when you are dealing with texts from Chat solution to any text analysis solution. So, in my case, it will be analyze my users support's heavy burden.**


Here are the requirements to make the application works.


## 1. create an environment with Conda
**I am using Anaconda to manage the python environment**

Check the official website at [Anaconda | The World&#039;s Most Popular Data Science Platform](https://www.anaconda.com/)



```bash
# Conda Environment
conda create --name bert_flair_1 python=3.9.7
conda info --envs
source activate bert_flair_1
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

```


## 2. Install the required modules in Python

**You can either install manually or use the requirements file `bert_flair_1.txt` to install the modules.**

```bash

pip install pytorch-pretrained-bert
pip install spacy ftfy==4.4.3
python -m spacy download en

pip install keybert[flair]
pip install keybert[gensim]
pip install keybert[spacy]
pip install keybert[use]

pip install -U sentence-transformers
-U, --upgrade Upgrade all packages to the newest available version

# to export requirements
pip freeze > bert_flair_1.txt

```

## 3. Files in `automate_po_job_demo_support`
**The project's structure with some indications for each file in comment.**

```bash
.
├── README.md
├── bert_flair_1.txt # the requirements
├── config_values
│   └── values_conf.py # confif values for the app
├── stopwords # stop words for (it', 'fr', 'es', 'ru')
│   ├── stopwords_es.txt
│   ├── stopwords_fr.txt
│   ├── stopwords_it.txt
│   └── stopwords_ru.txt
├── test_python_new_14_multilang_keybert.py # the streamlit app with keyBERT
└── texts_examples_intl.py # text samples in ('en', 'it', 'fr', 'es', 'ru')

```



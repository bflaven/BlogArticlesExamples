# all_in_one_automate_po_job_demo_support_keybert

**A post on how to work with efficiency on customer support with the help of Streamlit, Sqlalchemy and keyBert. To answer as quick as possible to your consumer feedback!**



**The application below result from the merge of 2 projects: "KeyBERT Rough Text Analyzer" and "AUTOMATE P.O. JOB SUPPORT'S DEMO". The Streamlit application enables to manage a template mailing system for support coupled with a KeyBERT analyzer to not have to read the customer support mails in themselves.**



1. The project "AUTOMATE P.O. JOB SUPPORT'S DEMO" (automate_po_job_demo_support)<br><a href="https://github.com/bflaven/BlogArticlesExamples/tree/master/automate_po_job_demo_support" target="_blank">automate_po_job_demo_support</a>

2. The The project "KeyBERT Rough Text Analyzer"
(discovering_bert_and_keybert)<br><a href="https://github.com/bflaven/BlogArticlesExamples/tree/master/discovering_bert_and_keybert" target="_blank">discovering_bert_and_keybert</a>


**Two preliminary remarks that precise application's scope and purpose:**

**1.  First:** the application does not to send any email because the added value for this POC is in the ability to connect the 2 projects not to handle security, network, environment, deployment issues. Feel free to modify it and do this evolution if necessary. Security, network, environment, deployment issues are complexities far beyond this POC.

**2.  Second:** again for security reason, I cannot release the real templates that I have gathered for my own usage. Instead I have populated generic template, feel free to modify and adapt to our own use.


**The project leverages on these libraries.**
- [Streamlit: https://streamlit.io/](https://streamlit.io/)
- [SQLAlchemy: https://www.sqlalchemy.org/](https://www.sqlalchemy.org/)
- [KeyBERT: https://maartengr.github.io/KeyBERT/](https://maartengr.github.io/KeyBERT/index.html)
- [SQLite: https://sqlite.org/](https://sqlite.org/index.html)

## 1. Create an environment with Conda
**I am using Anaconda to manage the python environment**

Check the official website at [Anaconda: https://www.anaconda.com/](https://www.anaconda.com/)




```bash
# Conda Environment
conda create --name all_in_one_automate_po_job python=3.9.7
conda info --envs
source activate all_in_one_automate_po_job
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

```


## 2. Install the required modules in Python

**You can either install manually all the modules or use the requirements files `automate_po_job_streamlit_sqlalchemy_1.txt` and `bert_flair_1.txt` to install all the modules.**

```bash

# install streamlit
pip install streamlit
pip install watchdog

# install sqlalchemy
pip install sqlalchemy

# install keybert
pip install pytorch-pretrained-bert
pip install spacy ftfy==4.4.3
python -m spacy download en

pip install keybert
pip install keybert[flair]
pip install keybert[gensim]
pip install keybert[spacy]
pip install keybert[use]

# -U, --upgrade Upgrade all packages to the newest available version
pip install -U sentence-transformers

# to export requirements
pip freeze > all_in_one_automate_po_job_1.txt


# to install
pip install -r automate_po_job_streamlit_sqlalchemy_1.txt
pip install -r bert_flair_1.txt


# update conda if needed by running
conda update -n base -c defaults conda



```

## 3. Directory tree for `all_in_one_automate_po_job_demo_support_keybert`
**The project's structure with some indications for each file in comment.**

```bash
.
├── 001_all_in_one_automate_po_job_demo_support_keybert.py # the streamlit app
├── README.md
├── automate_po_job_streamlit_sqlalchemy_1.txt # the requirements
├── bert_flair_1.txt # the requirements
├── config_values
│   └── values_conf.py # confif values for the app
├── db_scheme_support_mail.py
├── keybert_functions # the keyber functions 
│   └── required_keybert_functions.py
├── sqlalchemy_data # the db 
│   └── km_user_support_2.sqlite3
├── stopwords # stop words for (it', 'fr', 'es', 'ru')
│   ├── stopwords_es.txt
│   ├── stopwords_fr.txt
│   ├── stopwords_it.txt
│   └── stopwords_ru.txt
└── texts_examples_intl.py # text samples in ('en', 'it', 'fr', 'es', 'ru')

```










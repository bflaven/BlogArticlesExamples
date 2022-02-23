# all_in_one_automate_po_job_demo_support_keybert

**A post on how to work with efficiency on customer support with the help of Streamlit, Sqlalchemy and keyBert. To answer as quick as possible to your consumer feedback!**


In each python file, you have the instructions to make it work. As an example, see below the header of `001_all_in_one_automate_po_job_demo_support_keybert.py`


```python

#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
# Conda Environment
conda create --name all_in_one_automate_po_job python=3.9.7
conda info --envs
source activate all_in_one_automate_po_job
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/all_in_one_automate_po_job_demo_support_keybert/

[file]
streamlit run 001_all_in_one_automate_po_job_demo_support_keybert.py

[required]
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

"""

```
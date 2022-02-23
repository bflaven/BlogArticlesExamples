# discovering_bert_and_keybert


**A post on how to work with efficiency on customer support with the help of Streamlit, Sqlalchemy and keyBert. To answer as quick as possible to your consumer feedback!**


In each python file, you have the instructions to make it work. As an example, see below the header of `test_python_new_14_multilang_keybert.py`


```python
#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name bert_flair_1 python=3.9.7
conda info --envs
source activate bert_flair_1
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/discovering_bert_and_keybert/example_keybert/


[file]
streamlit run test_python_new_14_multilang_keybert.py

[source]
https://towardsdatascience.com/how-to-extract-relevant-keywords-with-keybert-6e7b3cf889ae
https://www.maartengrootendorst.com/blog/keybert/




[required]

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



Source: https://pypi.org/project/pytorch-pretrained-bert/#examples

"""

```






## Exploring Streamlit or Dash to build specific Interactive Web Applications

A quick introduction to [Streamlit](https://streamlit.io/) and [Dash](https://dash.plotly.com/)

Du to the size of the CSV, you can replace accidents_2012_to_2014.csv with the real file that can be found on kaggle [@ https://www.kaggle.com/daveianhickey/2000-16-traffic-flow-england-scotland-wales?select=accidents_2012_to_2014.csv](https://www.kaggle.com/daveianhickey/2000-16-traffic-flow-england-scotland-wales?select=accidents_2012_to_2014.csv)

[Read more on flaven.fr](http://flaven.fr/2021/05/exploring-streamlit-or-dash-to-build-specific-interactive-web-applications/)


### install streamlit
```bash

# to load te list of module install
pip list

# to install streamlit
pip install streamlit
streamlit hello


# upgrade streamlit
pip install streamlit --upgrade




```

### install dash
```bash

# to load te list of module install
pip list

# to install streamlit
pip install dash
pip install jupyter-dash

```


### install other module
```bash
# INSTALL other librairies

# if you are using conda
# conda install ipykernel
# conda install lime

# if you are using pip
pip install ipykernel
pip install lime
pip install shap
pip install langdetect
pip install textblob
pip install transformers
pip install rouge
pip install pandas

# install plotly_express
pip install plotly_express

```
### special install for Gensim

```bash


# On Gensim’s Github changelog 15, they’ve said that the gensim.summarization module has been removed in versions Gensim 4.x because it was an unmaintained third-party module.

# To continue using gensim.summarization, you will have to downgrade the version of Gensim in requirements.txt. Try replacing it with gensim==3.8.3 or older.

# You are stuck with gensim==3.8.3 or older but not the Gensim 4.x

pip install --upgrade gensim
conda install -c anaconda gensim
pip install gensim==3.8.3

```
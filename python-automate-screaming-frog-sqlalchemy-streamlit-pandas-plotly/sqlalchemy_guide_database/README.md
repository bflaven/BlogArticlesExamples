# sqlalchemy_guide_database


### 1. Create your environment with Conda

**Go to the dir**
It is just I found easier to be in same git directory to create my environment with Conda because I know better what are the packages required by the streamlit app.



```bash
# go to your directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python-automate-screaming-frog-sqlalchemy-streamlit-pandas-plotly/sqlalchemy_guide_database
```

**Create your dev env with conda**
```bash

# listing the envs
conda info --envs

# create the env for your streamlit app
conda create --name automate_screaming_frog python=3.9.7
```

**Get into your dev env**

How to create a development environment and also list and deactivate some dev env.


```bash

# go into the env
conda activate automate_screaming_frog


# Let's say you create a environment with this version of python (3.8.3) if you need yo update the python version of your env
# upgrade python version in your env heroku_python_getting_started_3a
conda create --name automate_screaming_frog python=3.8.3
conda install python=3.9.7

# listing the envs
conda info --envs
conda remove --name automate_screaming_frog --all


# get from the current env
conda deactivate

```

**Install packages in your dev env**
```bash
# install the packages in the env
pip install streamlit
pip install watchdog
```

**Save python requirements in a file name `requirements.txt`**
```bash
# show what the requirements
pip freeze > automate_screaming_frog_1.txt

# to rename the last version with the correct name requirements.txt, if you deploy on heroku for instance, heroku only accept the filename requirements.txt
mv automate_screaming_frog_3.txt requirements.txt

```

**Install other packages in your dev env required by your app**
```bash
pip install pandas
pip install numpy
pip install matplotlib
pip install plotly
pip install plotly-express
pip install altair

# to install SQLAlchemy
# SQLAlchemy is the Python SQL toolkit and Object Relational Mapper
pip install SQLAlchemy
```

**Extra info for the app**

```bash
# install the packages required to work with the streamlit app
altair==4.1.0
appnope==0.1.2
argon2-cffi==21.2.0
argon2-cffi-bindings==21.2.0
astor==0.8.1
attrs==21.2.0
backcall==0.2.0
base58==2.1.1
bleach==4.1.0
blinker==1.4
cachetools==4.2.4
certifi==2021.10.8
cffi==1.15.0
charset-normalizer==2.0.9
click==7.1.2
cycler==0.11.0
debugpy==1.5.1
decorator==5.1.0
defusedxml==0.7.1
entrypoints==0.3
fonttools==4.28.3
gitdb==4.0.9
GitPython==3.1.24
greenlet==1.1.2
idna==3.3
ipykernel==6.6.0
ipython==7.30.1
ipython-genutils==0.2.0
ipywidgets==7.6.5
jedi==0.18.1
Jinja2==3.0.3
jsonschema==4.2.1
jupyter-client==7.1.0
jupyter-core==4.9.1
jupyterlab-pygments==0.1.2
jupyterlab-widgets==1.0.2
kiwisolver==1.3.2
MarkupSafe==2.0.1
matplotlib==3.5.0
matplotlib-inline==0.1.3
mistune==0.8.4
nbclient==0.5.9
nbconvert==6.3.0
nbformat==5.1.3
nest-asyncio==1.5.4
notebook==6.4.6
numpy==1.21.4
packaging==21.3
pandas==1.3.4
pandocfilters==1.5.0
parso==0.8.3
pexpect==4.8.0
pickleshare==0.7.5
Pillow==8.4.0
plotly==5.4.0
prometheus-client==0.12.0
prompt-toolkit==3.0.24
protobuf==3.19.1
ptyprocess==0.7.0
pyarrow==6.0.1
pycparser==2.21
pydeck==0.7.1
Pygments==2.10.0
Pympler==0.9
pyparsing==3.0.6
pyrsistent==0.18.0
python-dateutil==2.8.2
pytz==2021.3
pytz-deprecation-shim==0.1.0.post0
pyzmq==22.3.0
requests==2.26.0
Send2Trash==1.8.0
setuptools-scm==6.3.2
six==1.16.0
smmap==5.0.0
SQLAlchemy==1.4.27
streamlit==1.2.0
tenacity==8.0.1
terminado==0.12.1
testpath==0.5.0
toml==0.10.2
tomli==1.2.2
toolz==0.11.2
tornado==6.1
traitlets==5.1.1
typing_extensions==4.0.1
tzdata==2021.5
tzlocal==4.1
urllib3==1.26.7
validators==0.18.2
watchdog==2.1.6
wcwidth==0.2.5
webencodings==0.5.1
widgetsnbextension==3.5.2
```
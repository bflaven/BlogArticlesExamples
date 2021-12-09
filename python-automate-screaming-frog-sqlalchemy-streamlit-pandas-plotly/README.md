# python-automate-screaming-frog-sqlalchemy-streamlit-pandas-plotly


**My objective was to build a dashboard with Streamlit that automate Screaming Frog SEO Spider for large time saves and fast audits then manage the output (csv reports), save it into an SQLite database and analyze them to create graphics.**

**3 different projects are issued from this objective: `date_time_sqlite`, `sqlalchemy_guide_database`, `streamlit_app_crawl_screamingfrog`**


- `date_time_sqlite`: First introduction to manage an SQLite database with Streamlit
- `sqlalchemy_guide_database`: Second introduction to manage an SQLite database with Streamlit
- `streamlit_app_crawl_screamingfrog`: The real POC with Streamlit that automate Screaming Frog SEO Spider

You will have to create an environment for the app, I am using Anaconda (Conda) to manage python and the packages.

 
### 1. Create your environment with Conda

**Go to the dir**
It is just I found easier to be in same git directory to create my environment with Conda because I know better what are the packages required by the streamlit app.

```bash
# go to your directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python-automate-screaming-frog-sqlalchemy-streamlit-pandas-plotly

```

**Create your dev env with conda**
```bash

# listing the envs
conda info --envs

# create the env for your streamlit app
conda create --name deploy_getting_started python=3.9.7
```

**Get into your dev env**

How to create a development environment and also list and deactivate some dev env.


```bash

# go into the env
conda activate deploy_getting_started


# Let's say you create a environment with this version of python (3.8.3) if you need yo update the python version of your env
# upgrade python version in your env heroku_python_getting_started_3a
conda create --name heroku_python_getting_started_3a python=3.8.3
conda install python=3.9.7

# listing the envs
conda info --envs
conda remove --name heroku_python_getting_started_3b --all


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
pip freeze > requirements_1_heroku_python_getting_started_3.txt
pip freeze > requirements_2_heroku_python_getting_started_3.txt
pip freeze > requirements_3_heroku_python_getting_started_3.txt

# rename the last version with the correct name requirements.txt, heroku only accept the filename requirements.txt
mv requirements_1_heroku_python_getting_started_3.txt requirements.txt

```

**Install other packages in your dev env required by your app**
```bash
pip install pandas
pip install numpy
pip install matplotlib
pip install plotly-express
pip install matplotlib
pip install altair
```

**Extra info for the app**

```bash
# install the packages required to work with the streamlit app
numpy==1.18.4
pandas==1.0.3
seaborn==0.10.1
matplotlib==3.4.2
plotly-express==0.4.1
altair==4.1.0
```




```bash
.
├── README.md
├── date_time_sqlite
│   ├── 001_date_time_sqlite.py
│   ├── README.md
│   └── data
│       └── StudentAssignment_1.sqlite3
├── sqlalchemy_guide_database
│   ├── README.md
│   ├── sqlalchemy_data
│   │   └── streamlit_sqlalchemy_guia_database_example.sqlite3
│   ├── sqlalchemy_guide_database.py
│   └── sqlalchemy_guide_databasea_app.py
└── streamlit_app_crawl_screamingfrog
    ├── README.md
    ├── config_files_screamingfrog
    │   └── seo_spider_config_3.seospiderconfig
    ├── config_values
    │   └── values_conf.py
    ├── csv_screamingfrog_archives
    │   ├── f24es_2021_12_09_06_16_45_crawl.seospider
    │   ├── f24es_2021_12_09_06_16_45_internal_html.csv
    │   ├── rfifr_2021_12_09_06_18_41_crawl.seospider
    │   ├── rfifr_2021_12_09_06_18_41_internal_html.csv
    │   ├── the99projectfromgg_2021_12_09_06_22_00_crawl.seospider
    │   └── the99projectfromgg_2021_12_09_06_22_00_internal_html.csv
    ├── csv_screamingfrog_output
    ├── sqlalchemy_data
    │   └── screamingfrog_websites_crawls_all_new_1.sqlite3
    ├── streamlit_app_crawl_screamingfrog.py
    └── streamlit_sqlalchemy_example_database.py
```
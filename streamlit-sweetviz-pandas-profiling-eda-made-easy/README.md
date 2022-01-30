# streamlit-sweetviz-pandas-profiling-eda-made-easy
**A quick overview on how-to generate an "Exploratory Data Analysis" (EDA in Data Science) with Streamlit and the 2 well-known libraries:  SWEETVIZ, PANDAS PROFILING.**

**You can find this article on my blog "Exploratory Data Analysis or EDA in Data Science made easy with SWEETVIZ, PANDAS PROFILING and Streamlit" [https://flaven.fr/2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit/](https://flaven.fr/2022/01/exploratory-data-analysis-or-eda-in-data-science-made-easy-with-sweetviz-pandas-profiling-and-streamlit/)**


**For this application, you will need specific Python Environment. I am using Conda to manage the environment. My Conda Environment is named `eda_made_easy`**

```bash
# Conda Environment
conda create --name eda_made_easy python=3.9.7
conda info --envs
source activate eda_made_easy
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]


# install the libraries required

pip install streamlit
pip install watchdog
pip install seaborn
pip install pandas_profiling
pip install streamlit-embedcode
pip install streamlit-lottie
pip install streamlit-pandas-profiling
pip install streamlit-autorefresh
pip install sklearn
pip install plotly


# or use the requirements requirements_eda_made_easy_1.txt
# e.g pip install -r requirements_eda_made_easy_1.txt

```



**For each application, most of the values are in a file named `values_conf.py`**
```bash
config_values/values_conf.py
```

**Sometimes, in Streamlit, you need to view all configuration options**

```bash
# Below are all the sections and options you can have in ~/.streamlit/config.toml.
 
streamlit config show
```



**Sometimes, in Streamlit, you need build custom themes for your Streamlit application cause it is more fun, here the commands' sequence** 

```bash
# go to your app directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/tedious_manual_eda/

# make the config directory
mkdir .streamlit

# check out unix base existence of the directory
ls -la

# go to this need dir
cd .streamlit

# copy the config.toml inside the directory
touch config.toml

# copy and paste whait is output from this command into the config.toml
streamlit config show

# checkout result
ls -l 

# modify the theme or whatever

```

Source: [https://docs.streamlit.io/library/advanced-features/configuration](https://docs.streamlit.io/library/advanced-features/configuration)




### 1. streamlit_eda_made_easy_1
On GitHub, you can find different approach to build up an "Exploratory Data Analysis" (EDA in Data Science). This one is inspired by Marina Ramalhete from Brazil that is pretty advanced as is it designed with a Class. I have rework few elements to make it more readable and deliver more contextual information when checking the data.

Source: [https://github.com/marinaramalhete/Exploratory-Data-Analysis-App](https://github.com/marinaramalhete/Exploratory-Data-Analysis-App)

### 2. streamlit_eda_made_easy_2
Few examples gathered from different sources mostly books or github, made qith Streamlit.


### 3. streamlit_eda_made_easy_pandas_profiling_4
**A great and robust library that do the job one for all. It generates automatically a tremendous amount of
information about the selected dataset. At the end, it outputs a nice interactive and structured report named
"Pandas Profiling Report" with the following topics : Overview, Variables, Interactions, Correlations, Missing
values, Sample.** 

An handy "swiss army knife" to investigate quickly dataset and generate clean report supported with Streamlit.

Most of the values are in a file named `values_conf.py`
```bash
config_values/values_conf.py
```


### 4. streamlit_eda_made_easy_sweetviz_3
All my knowledge came from this article: [https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda](https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda).


Again, I strongly invite you to read this article that is the best I have found on the web. I have just extended some elements from this article by giving some information and migrate the all stuff presented into Streamlit framework.

### 5. tedious_manual_eda
An example with a very basic data exploration to show how time consuming can be EDA where you want extract relevant information. Nevertheless, the advantage of do-it by yourself will provide you a good chance to fully understand all the operation required for a EDA.


The example is extracted form this article : [https://towardsdatascience.com/exploring-a-data-set-with-simple-pandas-and-plot-visualizations-features-73901ee76c6c](https://towardsdatascience.com/exploring-a-data-set-with-simple-pandas-and-plot-visualizations-features-73901ee76c6c)


### 6. requirements

**Save python requirements in a file name `requirements.txt`.**
```bash
# show what the requirements
pip freeze > requirements_eda_made_easy_1.txt


# rename the last version with the correct name requirements.txt, heroku only accept the filename requirements.txt
mv requirements_eda_made_easy_1.txt requirements.txt

```
### 7. environment

**I am using Conda to manage the env.**

```bash
# create the env
conda create --name eda_made_easy python=3.9.7

# listing the envs
conda info --envs

# activate the env named eda_made_easy
source activate requirements_eda_made_easy_1

# desactivate the env named eda_made_easy
conda deactivate
```

### 8. Directory tree

**The directory tree for all the projects**
```bash
.
├── README.md
├── requirements_eda_made_easy_1.txt
├── streamlit_eda_made_easy_1
│   ├── README.md
│   ├── config_values
│   │   ├── __pycache__
│   │   │   └── values_conf.cpython-39.pyc
│   │   └── values_conf.py
│   ├── data
│   │   ├── amazon_top_50_bestselling_books_with_categories.csv
│   │   ├── countries_of_the_world_1.csv
│   │   ├── penguin_data_1.csv
│   │   ├── suicides_clean.csv
│   │   └── suicides_unclean.csv
│   └── streamlit_eda_made_easy_001.py
├── streamlit_eda_made_easy_2
│   ├── 001_all_streamlit_webapp_for_data_science.py
│   ├── 002_all_streamlit_webapp_for_data_science.py
│   ├── 003_all_streamlit_webapp_for_data_science.py
│   ├── 004_all_streamlit_webapp_for_data_science.py
│   ├── 005_all_streamlit_webapp_for_data_science.py
│   ├── 006_all_streamlit_webapp_for_data_science.py
│   ├── 007_all_streamlit_webapp_for_data_science.py
│   ├── 008_all_streamlit_webapp_for_data_science.py
│   ├── README.md
│   ├── config_values
│   │   ├── __pycache__
│   │   │   └── values_conf.cpython-39.pyc
│   │   └── values_conf.py
│   └── data
│       ├── 202109211505gaWeeklyBachFmm.csv
│       ├── 202109211505gaWeeklyBachFmm_2.csv
│       ├── FamilyMembersStatsDataLight.csv
│       ├── FamilyMembersStatsDataLight1.csv
│       ├── PovStatsCountry-Series.csv
│       ├── PovStatsCountry.csv
│       ├── PovStatsData.csv
│       ├── PovStatsDataFull3.csv
│       ├── PovStatsDataLight.csv
│       ├── PovStatsDataLight2.csv
│       ├── PovStatsFootNote.csv
│       ├── PovStatsSeries.csv
│       ├── amazon_top_50_bestselling_books_with_categories.csv
│       ├── countries_csv_google.csv
│       ├── goodreads_history.csv
│       ├── lat_long.csv
│       ├── penguins.csv
│       ├── pokemon.csv
│       ├── poverty.csv
│       └── trees.csv
├── streamlit_eda_made_easy_pandas_profiling_4
│   ├── 001_streamlit_webapp_pandas_profiling.py
│   ├── 002_pandas_profiling_report_202201221050_amazon_top_50_bestselling_books_with_categories.csv.html
│   ├── 002_pandas_profiling_report_pokemon.csv.html
│   ├── 002_streamlit_webapp_pandas_profiling.py
│   ├── README.md
│   └── config_values
│       ├── __pycache__
│       │   ├── values_conf.cpython-38.pyc
│       │   └── values_conf.cpython-39.pyc
│       └── values_conf.py
├── streamlit_eda_made_easy_sweetviz_3
│   ├── 009_streamlit_webapp_sweetviz.py
│   ├── 010_streamlit_webapp_sweetviz.py
│   ├── README.md
│   ├── config_values
│   │   └── values_conf.py
│   ├── example_1_diabetes_df_streamlit_webapp_sweetviz.html
│   ├── example_2_diabetes_df_streamlit_webapp_sweetviz.html
│   ├── example_3_wine_df_proline_magnesium_streamlit_webapp_sweetviz.html
│   ├── example_4_wine_df_pairwise_off_streamlit_webapp_sweetviz.html
│   ├── example_5_diabetes_df_compare_2_datasets_streamlit_webapp_sweetviz.html
│   ├── example_6_diabetes_df_compare_2_datasets_streamlit_webapp_sweetviz.html
│   ├── example_7_boston_df_compare_2_datasets_streamlit_webapp_sweetviz.html
│   ├── example_8_diabetes_df_dataframereport_streamlit_webapp_sweetviz.html
│   ├── sweetviz_boston_report.html
│   ├── sweetviz_diabetes_report.html
│   └── sweetviz_wine_report.html
└── tedious_manual_eda
    ├── 001_tedious_manual_eda.ipynb
    ├── 001_tedious_manual_eda.py
    ├── 002_streamlit_tedious_manual_eda.py
    ├── 002_tedious_manual_eda.ipynb
    ├── README.md
    ├── config_values
    │   ├── __pycache__
    │   │   └── values_conf.cpython-39.pyc
    │   └── values_conf.py
```

### 9. Extra stuff (readme as a notebook)
Some commands that I always forget that I need to find quickly and easily. So, this readme will be used as a notebook, things to remember. No direct link with the post's topic and content directory.



**9.1 In 2022, I always forget how to push on github**
```bash
# GIT 2022

# suppose you have set a personal access token
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


# go to the directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/

# create the directory
git remote add origin streamlit-sweetviz-pandas-profiling-eda-made-easy

# know your branch
git branch


# check for status
git status

# for any change just type this command
git add .

# add a commit with a message
git commit -am "add usecase"
git commit -am "add files"
git commit -am "update files"
git commit -am "add files and update readme"


# push to github if your branch on github is master
git push origin master

```

**9.2 In python, grab filename and split it**
```python
# grab filename and split it in python
import os
base=os.path.basename('/root/dir/sub/file.ext')
base
'file.ext'
os.path.splitext(base)
('file', '.ext')
os.path.splitext(base)[0]
'file'

```

**9.3 Split url in javascript using the console**
```javascript
// split url in js using the console
let url = "https://flaven.fr/2021/12/quick-poc-for-a-all-in-one-that-provides-an-seo-dashboard-made-with-streamlit-managing-screaming-frog-automation-storing-results-in-a-database-sqlite-and-create-data-analysis-graphics-for-seo-repo/";
console.log(url);

let pathArray = url.split('/');
console.log(pathArray);

let last = pathArray.pop();
console.log(last);

```




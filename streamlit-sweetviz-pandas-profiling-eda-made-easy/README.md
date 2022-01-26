# streamlit-sweetviz-pandas-profiling-eda-made-easy
**A quick overview on how-to generate an "Exploratory Data Analysis" (EDA in Data Science) with Streamlit and the 2 well-known libraries:  SWEETVIZ, PANDAS PROFILING.**


- **For each application, most of the values are in a file named `values_conf.py`**
Commit your code to the repository and deploy it to Heroku using Git.
```bash
config_values/values_conf.py
```

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
All my knowledge came from this article: <a href="https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda"
    target="_blank">https://coderzcolumn.com/tutorials/data-science/sweetviz-automate-exploratory-data-analysis-eda</a>. Again, I strongly invite you to read this article that is the best I have found on the web. I have just extended some elements from this article by giving some information and migrate the all stuff presented into Streamlit framework.

### 5. tedious_manual_eda
An example with a very basic data exploration to show how time consuming can be EDA where you want extract relevant information. Nevertheless, the advantage of do-it by yourself will provide you a good chance to fully understand all the operation required for a EDA.


The example is extracted form this article : [https://towardsdatascience.com/exploring-a-data-set-with-simple-pandas-and-plot-visualizations-features-73901ee76c6c](https://towardsdatascience.com/exploring-a-data-set-with-simple-pandas-and-plot-visualizations-features-73901ee76c6c)


### 6. requirements

**Save python requirements in a file name `requirements.txt`.**
```bash
# show what the requirements
pip freeze > requirements_1_streamlit_spacy_1.txt

# rename the last version with the correct name requirements.txt, heroku only accept the filename requirements.txt
mv requirements_1_streamlit_spacy_1.txt requirements.txt

```
### 7. environment

**I am using Conda to manage the env.**

```bash
# create the env
conda create --name streamlit_spacy_1 python=3.9.7

# listing the envs
conda info --envs

# activate the env named streamlit_spacy_1
source activate streamlit_spacy_1

# desactivate the env named streamlit_spacy_1
conda deactivate
```

### 8. Directory tree

**The directory tree for all the projects**
```bash
.
├── README.md
├── requirements_1_streamlit_spacy_1.txt
├── streamlit_eda_made_easy_1
│   ├── config_values
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
│   ├── config_values
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
│   └── config_values
│       └── values_conf.py
├── streamlit_eda_made_easy_sweetviz_3
│   ├── 009_streamlit_webapp_sweetviz.py
│   ├── 010_streamlit_webapp_sweetviz.py
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
    ├── 002_tedious_manual_eda.ipynb
    ├── config_values
    │   └── values_conf.py
    └── data
        └── Tennis_World_Number_1s.csv
```
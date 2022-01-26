# values_conf.py.py should contain the following variables

# CAUTION
# do not forget to change it with your own values

# call in python file using VALUE = conf.VALUE


SOURCE_PATH = "data/"
TITLE_APP = "STREAMLIT EDA MADE EASY 001"
LABEL_EXPANDER = "See explanation"


# line 53
LABEL_TITLE_SECTION_1_APP = '### 1. File Selection'
GREAT_EXPENDER_TEXT_1 = '**File Selection:** You can select the .csv files to provide a source as dataset for an "Exploratory Data Analysis" (EDA in Data Science)'


LABEL_TITLE_SECTION_2_APP = "### 2. General Infos"
GREAT_EXPENDER_TEXT_2 = '**General Infos:** The general info about the dataset to have a quick idea on the dataset quality. (Number of observations, Number of variables, Number of missing (%))'

# options = ["(A) View statistics", "(B) Statistic univariate", "(C) Statistic multivariate"]

MENU_SIDEBAR_OPTIONS = [
    "(A) View statistics", "(B) Statistic univariate", "(C) Statistic multivariate"]

# MENU_SIDEBAR_OPTIONS[0]
# MENU_SIDEBAR_OPTIONS[1]
# MENU_SIDEBAR_OPTIONS[2]

GREAT_EXPENDER_TEXT_3 = '**Detailed Statistics:** Calculating a quick scan using Panda.\n\n**Numerical Summary:** A numerical summary is a table of summary statistics for the data including mean, median, quantiles, variance, standard deviation.\n\n**Categorical Summary:** It is table based on Categorical variables of the dataset. Categorical variables represent types of data which may be divided into groups. Examples of categorical variables are race, sex, age group, and educational level. While the latter two variables may also be considered in a numerical manner by using exact values for age and highest grade completed, it is often more informative to categorize such variables into a relatively small number of groups.\n\n**Missing Values:** The result of df.isnull().sum(). Missing data is always a problem in real life scenarios. Areas like machine learning and data mining face severe issues in the accuracy of their model predictions because of poor quality of data caused by missing values. In these areas, missing value treatment is a major point of focus to make their models more accurate and valid.\n\n**Dataset Quick Look:** The 5 first rows with the function df.head(). This function returns the first n rows for the object based on position. It is useful for quickly testing if your object has the right type of data in it.\n\n**Show Columns:** The columns names as list.\n\n**Columns Names:** Each column in a row with a number\n\n**Statistical Description:** The result of the describe() function. There is a convenient describe() function which computes a variety of summary statistics about a Series or the columns of a DataFrame (excluding NAs of course).\n\n**df_info from function get_info_use:** invoking df.info().\n\nResult from df.types'
GREAT_EXPENDER_TEXT_4 = 'The term **univariate analysis** refers to the analysis of one variable. You can remember this because the prefix "uni" means "one."\n\n**The purpose of univariate analysis is to understand the distribution of values for a single variable.** You can contrast this type of analysis with the following: \nBivariate Analysis: The analysis of two variables.\nMultivariate Analysis: The analysis of two or more variables.'


# HELP TEXTS
# help="help text"

TEXT_HELP_1 = 'Select your files from a local directory on your computer. Check out the value SOURCE_PATH in conf/values_conf.py if the directory has to be changed.  To increase the number of CSV, just cut and paste the csv file you want to analyze into the directory.'
TEXT_HELP_2 = 'The main navigation for the application'
TEXT_HELP_3 = 'Numerical Summary: A numerical summary is a table of summary statistics for the data including mean, median, quantiles, variance, standard deviation.'
TEXT_HELP_4 = 'Categorical Summary: It is table based on Categorical variables of the dataset. Categorical variables represent types of data which may be divided into groups. Examples of categorical variables are race, sex, age group, and educational level. While the latter two variables may also be considered in a numerical manner by using exact values for age and highest grade completed, it is often more informative to categorize such variables into a relatively small number of groups.'
TEXT_HELP_5 = 'Missing Data: The result of df.isnull().sum(). Missing data is always a problem in real life scenarios. Areas like machine learning and data mining face severe issues in the accuracy of their model predictions because of poor quality of data caused by missing values. In these areas, missing value treatment is a major point of focus to make their models more accurate and valid.'
TEXT_HELP_6 = 'Dataset Quick Look: The 5 first rows with the function df.head(). This function returns the first n rows for the object based on position. It is useful for quickly testing if your object has the right type of data in it.'
TEXT_HELP_7 = 'Show Columns: The columns names as list'
TEXT_HELP_8 = 'Columns Names: Each column in a row with a number'
TEXT_HELP_9 = 'Statistical Description: The result of the describe() function. There is a convenient describe() function which computes a variety of summary statistics about a Series or the columns of a DataFrame (excluding NAs of course).'
TEXT_HELP_10 = 'df_info from function get_info_use: invoking df.info().'
TEXT_HELP_11 = 'Result from df.types'
TEXT_HELP_12 = 'TEXT_HELP_12'
TEXT_HELP_13 = 'TEXT_HELP_13'


# Numerical summary
# Categorical summary
# Missing values
# Dataset quick look
# Show columns
# Columns names
# Statistical description
# Missing Values
# df_info from function get_info_use
# result from df.types




# values_conf.py.py should contain the following variables

# CAUTION
# do not forget to change it with your own values

FILE_PATH = '../examples_eda_2/data/'

LABEL_EXPANDER = "See explanation"


TEXT_TITLE_APP = "Using SweetViz"
TEXT_SUBHEADER_APP = "EDA with SweetViz"
TEXT_WARNING = 'Check out source file for configuration.  EDA means Exploratory Data Analysis.'

LABEL_EXPANDER = "See explanation on Dataset"
TEXT_OUTPUT_REPORT_SWEETVIZ = '**OUTPUT**'

MENU_SIDEBAR_OPTIONS = ["(A) Dataset WINES", "(B) Dataset DIABETES",
                        "(C) Dataset BOSTON", "(D) More resources"]

# MENU_SIDEBAR_OPTIONS[0]
# MENU_SIDEBAR_OPTIONS[1]
# MENU_SIDEBAR_OPTIONS[2]


TEXT_HELP_2 = 'The main navigation for the application'

GREAT_EXPENDER_TEXT_1 = '**Wine recognition dataset, a Toy datasets provided by scikit-learn**\n\nCheck out [https://scikit-learn.org/stable/datasets/toy_dataset.html](https://scikit-learn.org/stable/datasets/toy_dataset.html)\n\n**Number of Instances:** 178 (50 in each of three classes)\n\n**Number of Attributes:** 13 numeric, predictive attributes and the class\n\n**Attribute Information:**\n- Alcohol\n\n- Malic acid\n\n- Ash\n\n- Alcalinity of ash\n\n- Magnesium\n\n- Total phenols\n\n- Flavanoids\n\n- Nonflavanoid phenols\n\n- Proanthocyanins\n\n- Color intensity\n\n- Hue\n\n- OD280/OD315 of diluted wines\n\n- Proline\n\n'
GREAT_EXPENDER_TEXT_2 = '**Diabetes dataset,a Toy datasets provided by scikit-learn**\n\nCheck out [https://scikit-learn.org/stable/datasets/toy_dataset.html](https://scikit-learn.org/stable/datasets/toy_dataset.html)\n\n**age** age in years\n\n**sex**\n\n**bmi** body mass index\n\n**bp** average blood pressure\n\n**s1** tc, total serum cholesterol\n\n**s2** ldl, low-density lipoproteins\n\n**s3** hdl, high-density lipoproteins\n\n**s4** tch, total cholesterol / HDL\n\n**s5** ltg, possibly log of serum triglycerides level\n\n**s6** glu, blood sugar level\n\n'
GREAT_EXPENDER_TEXT_3 = '**Boston house prices dataset, a Toy datasets provided by scikit-learn**\n\nCheck out [https://scikit-learn.org/stable/datasets/toy_dataset.html](https://scikit-learn.org/stable/datasets/toy_dataset.html)\n\n Some infos about the Boston house prices dataset\n\n The "columns" from the Boston house prices dataset are: \n\n+ **CRIM** per capita crime rate by town\n\n+ **ZN proportion of residential land zoned for lots over 25, 000 sq.ft.\n\n+ **INDUS** proportion of non-retail business acres per town\n\n+ **CHAS** Charles River dummy variable(=1 if tract bounds river 0 otherwise)\n\n+ **NOX** nitric oxides concentration(parts per 10 million)\n\n+ **RM** average number of rooms per dwelling\n\n+ **AGE** proportion of owner-occupied units built prior to 1940\n\n+ **DIS** weighted distances to five Boston employment centres\n\n+ **RAD** index of accessibility to radial highways\n\n+ **TAX** full-value property-tax rate per $10, 000\n\n+ **PTRATIO** pupil-teacher ratio by town\n\n+ **B 1000(Bk - 0.63) ^ 2** where Bk is the proportion of black people by town\n\n+ **LSTAT** % lower status of the population\n\n+ **MEDV** Median value of owner-occupied homes in $1000’s\n '

TEXT_WARNING_REPORT = 'Do not forget to uncheck to avoid generating once again the report'

# 009_streamlit_webapp_sweetviz.py
TEXT_WARNING_REPORT_HELP = "It will launch the creation of the report"

# 009_streamlit_webapp_sweetviz.py
SINGLE_REPORT_NAME = ['sweetviz_wine_report.html',
                   'sweetviz_diabetes_report.html', 'sweetviz_boston_report.html']


# GREAT_EXPENDER_EXAMPLE_3 = 'EXAMPLE_3 :: Target Variable Analysis using the target_feat="WineType"\n\n- using the wine dataset\n\n - **skipped columns proline and magnesium from original dataset**\n\n- **instructed to use WineType column as numerical**\n\n- using FeatureConfig constructor\n\n'


# GREAT_EXPENDER_EXAMPLE_4 = 'EXAMPLE_4 :: Target Variable Analysis using the pairwise_analysis="off"\n\n- using the wine dataset\n\n - analyze() method\n\n- **exclude pairwise relationships between features**\n\n'






# HELP TEXTS
# help="help text"
TEXT_HELP_1 = 'The main navigation for the application'
TEXT_HELP_2 = 'It shows the first 5 rows of the dataset with the help of the df.head() function'


TEXT_HELP_3 = 'EXAMPLE_3 :: Target Variable Analysis using the target_feat="WineType"\n\n - using the wine dataset\n\n - **skipped columns proline and magnesium from original dataset**\n\n - **instructed to use WineType column as numerical**\n\n - using FeatureConfig constructor\n\n'
TEXT_HELP_4 = 'EXAMPLE_4 :: Target Variable Analysis using the pairwise_analysis="off"\n\n - using the wine dataset\n\n - analyze() method\n\n - **exclude pairwise relationships between features**\n\n'

TEXT_HELP_5 = 'EXAMPLE_1 :: Target Variable Analysis (simple case) \n\n - using the wine dataset\n\n - analyze() method'


TEXT_HELP_6 = 'EXAMPLE_2 :: Target Variable Analysis \n\n - using the diabetes dataset\n\n - analyze() method\n\n - **see the relationship between the target variable and all features of the dataset**\n\n - **select a column name and use as the target variable in analyze() method** \n\n - **example made with the "Progression" column as the target variable**'


TEXT_HELP_7 = 'EXAMPLE_5 :: Target Variable Analysis \n\n - using the diabetes dataset\n\n - compare() method\n\n - **compare two datasets and generate EDA for both**\n\n - **divided our diabetes dataset into train (80 %) and test (20%) sets using scikit-learn\'s train_test_split() method**'


TEXT_HELP_8 = 'EXAMPLE_6 :: Target Variable Analysis \n\n - using the diabetes dataset\n\n - compare() method\n\n - **idem to EXAMPLE_5 with one exception names defined for both datasets when generating a report using compare() method**\n\n - **compare two datasets and generate EDA for both**\n\n - **divided our diabetes dataset into train (80 %) and test (20%) sets using scikit-learn\'s train_test_split() method**'

TEXT_HELP_9 = 'EXAMPLE_8 :: Analysis Directly using DataFrameReport Object \n\n - using the wine dataset\n\n - compare() method\n\n - **creating an instance of DataframeReport using constructor**\n\n - **compare two datasets and generate EDA for both**\n\n - **divided our diabetes dataset into train (80 %) and test (20%) sets using scikit-learn\'s train_test_split() method**'


TEXT_HELP_10 = 'EXAMPLE_7 :: Divide a single Dataset using boolean variable and Compare the 2 datasets created \n\n- using the boston dataset\n\n - compare_intrapare() method\n\n- **divide the Boston dataset into two datasets based on boolean values of column CHAS**\n\n'




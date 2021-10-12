# json_to_pandas
**Some examples exposed in graphics after a data munging session.**



## 1. A quick introduction
```javascript
jupyter notebook 001_stats_fmm_pandas_plotly.ipynb
```

## 2. Create a python environment, using conda

- Create an Environment with version Python 3.8.3 To create a virtual environment use:
```bash
conda create --name pandas_json_1 python=3.8.3
```

- List Environments: You can list all the available environments with:
```bash
conda info --envs
```

- Activate an Environment : Before you can start using the environment you need to activate it:
```bash
source activate pandas_json_1
```
- Deactivate an Environment If you are done working with the virtual environment you can deactivate it with:
```bash
conda deactivate
```
- Remove an Environment If you want to remove an environment from Conda use:
```bash
conda remove --name pandas_json_1 --all
```


## 3. Fake names for companies and languages
```bash
"brand": "GLOBEX CORPORATION",
"brand": "SOYLENT NEWS",
"brand": "ACME CORPORATION",
"brand": "INITECH",
 
"lang": "RU",
"lang": "AF",
"lang": "DK",
"lang": "RU",
"lang": "BR",
"lang": "PT",

```

Source: https://www.siegelgale.com/brand-naming-8-great-fake-company-names/

## 4. The directory with several attempts**

```bash
.
├── 001_json_to_pandas.py
├── 001_stats_fmm_pandas_plotly.ipynb
├── 002_json_to_pandas.py
├── 003_json_to_pandas.py
├── 004_json_to_pandas.py
├── 005_json_to_pandas.py
├── 006_json_to_pandas.py
├── 007_json_to_pandas.py
├── data
│   ├── 202110120506_fake_PublicationStat.csv
│   ├── 202110120527_fake_PublicationStat.csv
│   ├── chrisalbon_data.json
│   ├── fake-links-menu_6.json
│   ├── fake_stats_response_1631779452059.json
│   ├── fake_stats_response_1631879840986.json
│   ├── fake_stats_response_def_2.json
│   ├── news_category_dataset_light_20k_v4.json
│   └── news_category_dataset_light_50_v3.json
└── readme.md
```


## 5. Data Visualization with Python
Great introduction to Visualization with Python.
Source : https://www.geeksforgeeks.org/data-visualization-with-python/

## 6. Install & Use Matplotlib

```bash
pip install matplotlib
```

```python
import pandas as pd
import matplotlib.pyplot as plt
```

``` python
import numpy as np
import pandas as pd
from datetime import datetime, time
from ggplot import *
import seaborn as sns
``` 

## 6. All notes on specific subject by chrisalbon.com
```bash
Columns Shared By Two Data Frames
Apply Functions By Group In Pandas
Apply Operations To Groups In Pandas
Applying Operations Over pandas Dataframes
Assign A New Column To A Pandas DataFrame
Break A List Into N-Sized Chunks
Breaking Up A String Into Columns Using Regex In pandas
Construct A Dictionary From Multiple Lists
Convert A Categorical Variable Into Dummy Variables
Convert A Categorical Variable Into Dummy Variables
Convert A CSV Into Python Code To Recreate It
Convert A String Categorical Variable To A Numeric Variable
Convert A Variable To A Time Variable In pandas
Count Values In Pandas Dataframe
Create a Column Based on a Conditional in pandas
Create A pandas Column With A For Loop
Create A Pipeline In Pandas
Create Counts Of Items
Creating Lists From Dictionary Keys And Values
Crosstabs In pandas
Delete Duplicates In pandas
Descriptive Statistics For pandas Dataframe
Dropping Rows And Columns In pandas Dataframe
Enumerate A List
Expand Cells Containing Lists Into Their Own Variables In Pandas
Filter pandas Dataframes
Find Largest Value In A Dataframe Column
Find Unique Values In Pandas Dataframes
Geocoding And Reverse Geocoding
Geolocate A City And Country
Geolocate A City Or Country
Group A Time Series With pandas
Group Data By Time
Group Pandas Data By Hour Of The Day
Grouping Rows In pandas
Hierarchical Data In pandas
Join And Merge Pandas Dataframe
List Unique Values In A pandas Column
Load A JSON File Into Pandas
Load An Excel File Into Pandas
Load Excel Spreadsheet As pandas Dataframe
Loading A CSV Into pandas
Long To Wide Format
Lower Case Column Names In Pandas Dataframe
Make New Columns Using Functions
Map External Values To Dataframe Values in pandas
Missing Data In pandas Dataframes
Moving Averages In pandas
Normalize A Column In pandas
pandas Data Structures
pandas Time Series Basics
Pivot Tables In pandas
Quickly Change A Column Of Strings In Pandas
Random Sampling Dataframe
Ranking Rows Of Pandas Dataframes
Regular Expression Basics
Regular Expression By Example
Reindexing pandas Series And Dataframes
Rename Column Headers In pandas
Rename Multiple pandas Dataframe Column Names
Replacing Values In pandas
Saving A pandas Dataframe As A CSV
Search A pandas Column For A Value
Select Rows When Columns Contain Certain Values
Select Rows With A Certain Value
Select Rows With Multiple Filters
Selecting pandas DataFrame Rows Based On Conditions
Simple Example Dataframes In pandas
Sorting Rows In pandas Dataframes
Split Lat/Long Coordinate Variables Into Separate Variables
Streaming Data Pipeline
String Munging In Dataframe
Using List Comprehensions With pandas
Using Seaborn To Visualize A pandas Dataframe
```


## 7. RESSOURCES

- The dataset from kaggle : https://www.kaggle.com/gcdatkin/news-category-prediction-word-embeddings/data

- The Data Journalism Handbook: Towards A Critical Data Practice
https://library.oapen.org/handle/20.500.12657/47509

- How to use Regex in Pandas
https://kanoki.org/2019/11/12/how-to-use-regex-in-pandas/
https://kanoki.org/tag#pandas


- All to know to load pandas_dataframe_importing_csv Pandas
https://chrisalbon.com/code/python/data_wrangling/pandas_dataframe_importing_csv/

- Six steps for your pandas learning journey
https://www.datacamp.com/community/blog/how-to-learn-pandas

- 15 tips Python avec pandas pour la Data (partie 1)
https://datatrucmuche.com/15-tips-python-avec-pandas-pour-la-data-partie-1/

- Python Pandas Tutorial: A Complete Introduction for Beginners
https://www.learndatasci.com/tutorials/python-pandas-tutorial-complete-introduction-for-beginners/

- Data Wrangling
Source: https://chrisalbon.com/#code_python





- https://pandas.pydata.org/pandas-docs/stable/index.html
- https://github.com/LearnDataSci/articles
- https://www.learndatasci.com/
- https://www.learndatasci.com/tutorials/python-pandas-tutorial-complete-introduction-for-beginners/
- https://github.com/chrisalbon?tab=repositories



#!/usr/bin/python
# -*- coding: utf-8 -*-

"""

[env]
conda create --name eda_made_easy python=3.9.7
conda info --envs
source activate eda_made_easy
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]


[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/streamlit-sweetviz-pandas-profiling-eda-made-easy/tedious_manual_eda/

[file]
python 001_tedious_manual_eda.py

[source]
https://github.com/StephenFordham
https://towardsdatascience.com/exploring-a-data-set-with-simple-pandas-and-plot-visualizations-features-73901ee76c6c


"""

import pandas as pd
# personal configuration
import config_values.values_conf as conf

### 1. VALUES ###
CVS_FILE_PATH = conf.CVS_FILE_PATH



def load_csv():
    csv = pd.read_csv(CVS_FILE_PATH)
    return csv


def main():
    
    # SIMPLE EXPLORATION
    # print("\n--- SIMPLE EXPLORATION")

    # dataset
    df = load_csv()
    print(df)
    
    # columns
    columns = df.columns
    print(columns)
    
    # shape
    shape = df.shape
    print(shape)
    
    # non_available
    non_available = df.isna().sum()
    print(non_available)
    
    # types
    types = df.dtypes
    print(types)

    
   
if __name__ == "__main__":
    main()




# world['Total_Professional_matches'] = world.Career_Wins + world.Career_losses

# world['Win_Percentage'] = (
#     world.Career_Wins / world.Total_Professional_matches) * 100

# world[['Tennis_Player', 'Total_Professional_matches', 'Win_Percentage']]/
# .sort_values('Win_Percentage', ascending=False).head(10)

# Filtering with Easy Readability
# https://gist.github.com/StephenFordham?page=10


# 'Tennis_Player', 'Total_Weeks_at_No_1', 'Maximum_Consectutive_Weeks_at_no_1', 'Years_End_no_1','Careers_Wins_Losses', 'Titles', 'Prize_Money'

# crit1 = df.Maximum_Consectutive_Weeks_at_no_1 > 30
# crit2 = df.Titles > 80
# crit3 = df.Prize_Money < 100000000
# df[crit1 & crit2 & crit3].loc[:, ['Tennis_Player']]


# from functools import reduce
# criteria = reduce(lambda x, y: x & y, [crit1, crit2, crit3])
# df[criteria].loc[:, ['Tennis_Player']]
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
streamlit run 002_streamlit_tedious_manual_eda.py



[source]
https://github.com/StephenFordham
https://towardsdatascience.com/exploring-a-data-set-with-simple-pandas-and-plot-visualizations-features-73901ee76c6c


"""

import streamlit as st
import pandas as pd
# personal configuration
import config_values.values_conf as conf

### 1. VALUES ###
CVS_FILE_PATH = conf.CVS_FILE_PATH
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP


@st.cache(allow_output_mutation=True)
def load_csv():
    csv = pd.read_csv(CVS_FILE_PATH)
    return csv


def main():
    
    main_navigation = ['1. dataset', '2. columns', '3. shape',
                       '4. non_available', '5. types']
    
    # sidebar
    option = st.sidebar.selectbox(
        'Check the stuff:', (main_navigation))
    # st.sidebar.write('You selected:', option)

    st.sidebar.markdown("""---""")
    st.sidebar.markdown(
        "*Generate a random color palette with coolors.co EXPLORATION*")

    # st.sidebar.markdown("*https://coolors.co/087e8b-ff5a5f-3c3c3c-f5f5f5-c1839f*")



    # main app
    st.title(TEXT_TITLE_APP)
    st.subheader(TEXT_SUBHEADER_APP)
    
    
    if ( option == main_navigation[0] ):
        st.sidebar.write(f'You selected:', option)
        df = load_csv()
        
        # dataset
        st.markdown("### 1. dataset")
        st.code(f"{df}")
    
    if (option == main_navigation[1]):
        st.sidebar.write(f'You selected:', option)
        df = load_csv()
        
        # columns
        st.markdown("### 2. columns")
        columns = df.columns
        st.code(f"{columns}")

    if (option == main_navigation[2]):
        st.sidebar.write(f'You selected:', option)
        df = load_csv()
        
        # shape
        st.markdown("### 3. shape")
        shape = df.shape
        st.code(f"{shape}")

    if (option == main_navigation[3]):
        st.sidebar.write(f'You selected:', option)
        df = load_csv()
        
        # non_available
        st.markdown("### 4. non_available")
        non_available = df.isna().sum()
        st.code(f"{non_available}")

    if (option == main_navigation[4]):
        st.sidebar.write(f'You selected:', option)
        df = load_csv()
        
        # types
        types = df.dtypes
        st.markdown("### 5. types")
        st.code(f"{types}")

        
        
        
        
        # FINITO NO MORE JUMPING TO JUPYTER NOTEBOOK :)
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

#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name nft_insights python=3.9.7
conda info --envs
source activate nft_insights
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights/002_NFT_generator_streamlit/


[file]
streamlit run streamlit_nft_generator_2.py




[source]
https://github.com/yoyoismee/NFT-generator


[required]
# install

pip install pillow
pip install ipython
pip jnstall streamlit
pip install -r requirements.txt

# show what the requirements
pip freeze > streamlit_nft_generator_1.txt
pip install -r streamlit_nft_generator_1.txt


# SOURCE
/Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/002_NFT_generator_streamlit/source_3
/Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/010_frida_kahlo_project/fkp

# GENERATED
/Users/brunoflaven/Documents/01_work/blog_articles/nft_insights/002_NFT_generator_streamlit/generated_5

"""

import streamlit as st
import os
from generator import NFTGenerator
from pathlib import Path

# personal configuration
import config_values.values_conf as conf

### 2. VALUES ###
TEXT_TITLE_APP = conf.TEXT_TITLE_APP
TEXT_SUBHEADER_APP = conf.TEXT_SUBHEADER_APP

APP_TEXT_HELP_1 = conf.APP_TEXT_HELP_1

PATH_TO_SOURCE = conf.PATH_TO_SOURCE
PATH_TO_DESTINATION = conf.PATH_TO_DESTINATION

def detectVersion():
    st.sidebar.markdown('* * *')
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    
    
def main():
    """ A simple to generate NFT with streamlit"""

    ### 2. INTRO ###
    st.title(f'{TEXT_TITLE_APP}')
    st.warning(f'{TEXT_SUBHEADER_APP}')
    
    st.info(f"{APP_TEXT_HELP_1}")
    


    with st.form("nft_form_generator"):
        input_dir = st.text_input(f'1. Define the SOURCE DIRECTORY for traits',
                                  placeholder=PATH_TO_SOURCE, help='Define the source directory for traits')
        st.caption(PATH_TO_SOURCE)

        output_dir = st.text_input(f'2. Define the OUTPUT DIRECTORY for NFTs (Create a new directory each time or remove) it before',
                                   placeholder=PATH_TO_DESTINATION, help='Define the output directory for NFTs')
        st.caption(PATH_TO_DESTINATION)
        
    
        # amount = st.number_input('3. Number of NFTs', 1)        
        amount = st.slider('3. Number of NFTs', 1, 100, 5, 1)

        submit_button = st.form_submit_button(label='Generate NFTs')

    unique = st.checkbox("Yes, I want my NFT to be unique from each other.",
                             help='Rarity involved')
    if submit_button:
        # st.code(f'input_dir :: '+input_dir+'')
        # st.code(f'output_dir :: '+output_dir+'')
        # st.code(f'amount :: '+str(amount)+'')
        
        p = Path(output_dir)
        p.mkdir(parents=True, exist_ok=True)
        the_bar = st.progress(0)
        
            
        # launch the generator
        nft_generator = NFTGenerator(input_dir=input_dir, unique=unique)
        for i in range(amount):
            the_bar.progress((i + 1) / amount)
            nft_generator.generate(save_path=output_dir, file_name=i)
        
        # end
        st.success("DONE!")
        st.markdown(f'**'+str(amount)+'** have bee created. You can check out at the path below')
        st.markdown(f'*{p.absolute()}*')
        
if __name__ == "__main__":
    main()
    detectVersion()

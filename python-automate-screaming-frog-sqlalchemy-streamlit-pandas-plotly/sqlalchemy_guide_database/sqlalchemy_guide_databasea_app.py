#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
[env]
conda create --name automate_screaming_frog python=3.9.7
conda info --envs
source activate automate_screaming_frog
conda deactivate

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python-automate-screaming-frog-sqlalchemy-streamlit-pandas-plotly/sqlalchemy_guide_database/

[file]
streamlit run sqlalchemy_guide_databasea_app.py

# more on infos and apps on
https://discuss.streamlit.io/t/how-to-use-st-cache-with-sqlalchemy-orm-objects/3329/5

https://www.sqlalchemy.org/

https://www.tutorialspoint.com/sqlalchemy/index.htm

https://www.youtube.com/watch?v=lIHGGcnCmFA

https://towardsdatascience.com/sqlalchemy-python-tutorial-79a577141a91

https://github.com/digipodium/streamlit_sqlalchemy_example

https://docs.streamlit.io/library/api-reference/


"""


import streamlit as st
import sqlalchemy as sqla
import numpy as np
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, Column, String, Integer, Float
import pandas as pd
# it imports the table that you need
from sqlalchemy_guide_database import Ingredientes

# I use .sqlite3 as extension because i can edit through Visual Code Studio editor
# use the same db file and path for database file
engine = create_engine(
    'sqlite:///sqlalchemy_data/streamlit_sqlalchemy_guia_database_example.sqlite3', connect_args={'check_same_thread': False}, echo=False)


# connect to database
Session = sessionmaker(bind=engine)
se = Session()


# placeholder :: An optional string displayed when the text input is empty. If None, no text is displayed. This is a keyword only argument.
# help :: An optional tooltip that gets displayed next to the input.
# https://docs.streamlit.io/library/api-reference/widgets/st.text_input

def detectVersion():
    st.sidebar.markdown('**VERSIONS**')
    st.sidebar.write("streamlit ::", st.__version__)
    st.sidebar.write("panda ::", pd.__version__)
    st.sidebar.write("numpy :: ", np.__version__)
    st.sidebar.write("sqlalchemy :: ", sqla.__version__)

def main():
    """ A simple attempt for screamingfrog crawls"""

    
    st.set_page_config(
        layout="wide",  # Can be "centered" or "wide". In the future also "dashboard", etc.
        initial_sidebar_state="auto",  # Can be "auto", "expanded", "collapsed"
        page_title=None,  # String or None. Strings get appended with "• Streamlit".
        page_icon=None,  # String, anything supported by st.image, or None.
    )

    st.title('Exploring sqlalchemy with streamlit')
    # st.markdown('*enable some libraries :: streamlit, pandas, numpy, sqlalchemy*')
    
    st.info(
        '*enable some libraries :: streamlit, pandas, numpy, sqlalchemy*')
    # name
    nombre = st.text_input('Enter an name\'s ingredient', '', placeholder='Rice',
                        help='Type here a an name\'s ingredient')


    # price
    precio = st.number_input('Enter the ingredient\'s price per kilo',
                            max_value=1000,
                            min_value=1,
                            value=3, 
                            help='Enter here the ingredient\'s price per kilo')

    submit = st.button('Insert into DB')

    if submit and precio:
        try:
            entry = Ingredientes(nombre=nombre, precio=precio)
            se.add(entry)
            se.commit()
            # se.close() no needed in this app
            st.success("The data added to the database")
        except Exception as e:
            st.error(f"some error occurred: {e}")

    if st.checkbox("View data"):
        # results = se.query(Ingredientes).all()
        # results = se.query(Ingredientes)
        
        # for item in results:
        #     st.markdown("### "+item.nombre+"")
        #     st.write(f"precio: {item.precio}")
        
        # QUERY_1 
        # Obtener un objeto a partir de su id
        # ob = se.query(Ingredientes).get(3)
        # st.markdown("### "+ob.nombre+"")
        # st.write(f"precio: {ob.precio}")

        # QUERY_2
        # Obtener los objetos de una consulta
        # productos = se.query(Ingredientes).all()
        # for item in productos:
        #     st.markdown("### "+item.nombre+"")
        #     st.write(f"precio: {item.precio}")
        
        # QUERY_3
        # Contar el número de elementos devueltos por una consulta
        # num_productos = se.query(Ingredientes).count()
        # st.write(f"Products number: {num_productos}")

        # QUERY_4
        # Aplicar filtros a una consulta
        # ob = se.query(Ingredientes).filter_by(nombre='Orange').first()
        # st.markdown("### "+ob.nombre+"")
        # st.write(f"precio: {ob.precio}")

        # QUERY_4
        # results = se.query(Ingredientes).filter(Ingredientes.precio > 6).all()
        # results = se.query(Ingredientes).filter(Ingredientes.precio < 3).all()
        # for item in results:
        #     st.markdown("### "+item.nombre+"")
        #     st.write(f"precio: {item.precio}")
          
        # QUERY_5  
        results = se.query(Ingredientes).all()
        for item in results:
            st.markdown("### "+item.nombre+"")
            st.write(f"precio: {item.precio}")


if __name__ == '__main__':
    main() 
    detectVersion()



        
        


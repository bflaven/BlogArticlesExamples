#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd  /Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/

[file]
streamlit run streamlit_command_app_1.py

"""
import time
import datetime
from PIL import Image
from numpy import RankWarning
import streamlit as st
import os
import sys
import random

# st.title("Streamlit Crash Course")
# st.header("Simple Header")
# st.subheader("Another sub header")
# st.text("For a simple text")
# st.markdown("# A Markdown title \n\n **bold text** \n\n *italic text* ")
# st.success("Successful")
# st.info("This is an info alert ")
# st.warning("This is a warning ")
# st.error("This shows an error ")


# Getting Help Info From Python
#st.help(range)
#st.help(datetime)


# Writing Text/Super Fxn
#st.write("Text with write")
#st.write("Python Range with write", range(10))
#st.write("Python Range with write", range(10,500))


# Checkbox
# if st.checkbox("Show/Hide")
# st.text("Showing or Hiding Widget")
#st.success("Success, you just check the checkbox")
 

# Radio Button
# status = st.radio("Label What is your status", ('Active', 'Inactive'))
# if status == 'Active':
# 	st.info("Active is checked")
# else:
# 	st.warning("Inactive is checked")


# SelectBox
# st.write("SelectBox")
# occupation = st.selectbox(
# 	"Your Occupation", ['Data Scientist', 'Programmer', 'Doctor', 'Businessman'])
# st.write("You selected this option", occupation)

# MultiSelect
# st.write("MultiSelect")
# location = st.multiselect("Where do you stay", ("London",
#                                                 "New York", "Accra", "Kiev", "Berlin", "New Delhi"))
# st.write("You selected", len(location), "location")
# st.write("The cities are: ", location)

# Slider
# st.write("Slider")
# salary = st.slider("What is your salary", 1000, 10000)
# st.write("Your salary is : ", salary)


# Text Input
# st.write("Text Input")
# st.markdown("**Text Input**")
# name = st.text_input("Enter Name", "Type Here...")
# if st.button('Submit'):
#     result = name.title()
#     st.success(result)
# else:
#     st.write("Press the above button..")


# Text Area
# c_text = st.text_area("Title Enter Text", "Placeholder Type Here...")
# if st.button('Analyze'):
#     # c_result = c_text.title()
#     st.success(c_text)
# else:
#     st.info("Press the above button..")
    
    
# other infos
# st.__version__
# st.color_picker("Choose your color")
# st.balloons()
# st.caption("Caption used ass footnotes for instance")

# code
# code = '''def hello():
# ...     print("Hello, Streamlit!")'''
# st.code(code, language="python")

# Set the correct values for your path and script
#VALUES
my_path = '/Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/'



# MultiSelect
# st.write("MultiSelect")
# location = st.multiselect("Where do you stay", ("London",
#                                                 "New York", "Accra", "Kiev", "Berlin", "New Delhi"))
# st.write("You selected", len(location), "location")
# st.write("The cities are: ", location)



if st.button("launcher btn_1"):
    st.success("Successful launcher btn_1")
    #EXECUTE
    #   print(my_path)
    st.markdown(my_path)
    # os.system("cd " + my_path)
    # os.system("ls -l")
    # st.success("Done ls -l command")

    command_one = "python --version"  # command to be executed
    command_two = "ls -l"
    command_three = "python launcher_2.py bruno anne arthur louise"

    
    
    print("\n\n--- BEGIN ---")
    os.chdir(my_path)
    os.system(command_one)
    os.system(command_two)
    print("--- END --- \n\n")


    # st.write("Command res_one done")
    # st.write("Command res_two done")
    
    
    
    # print("res_two =>  ", res_two)
    st.success("Done command command_one and command_one")
            

else:
    
    st.warning("Not click yet launcher btn_1")
    
    


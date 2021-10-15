#!/bin/bash
# required to deploy your streamlit app to heroku

# the config directory for your streamlit app
mkdir -p ~/.streamlit/

# the config file for your streamlit app
# you can put a fake or real email, it has nothing with registration on heroku
echo "\
[general]\n\
email = \"your@domain.com\"\n\
" > ~/.streamlit/credentials.toml

# the config file for your streamlit app
echo "\
[server]\n\
headless = true\n\
enableCORS=false\n\
port = $PORT\n\
" > ~/.streamlit/config.toml
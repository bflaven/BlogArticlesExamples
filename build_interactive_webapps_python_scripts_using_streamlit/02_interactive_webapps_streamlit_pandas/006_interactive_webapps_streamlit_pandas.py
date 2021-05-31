#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_streamlit/02_interactive_webapps_streamlit/

[file]
streamlit run 006_interactive_webapps_streamlit_pandas.py




# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/


"""

# Source :: ! ARTICLE_3 Data Science Apps Using Streamlit
# Check https://www.geeksforgeeks.org/data-science-apps-using-streamlit/
# 
# 2000-16-traffic-flow-england-scotland-wales?select=accidents_2012_to_2014.csv


# import the required modules
import streamlit as st
import pandas as pd
import numpy as np
import pydeck as pdk
import plotly.express as px

# Dataset we need to import
DATA_URL = (
	"data/accidents_2012_to_2014.csv"
)



# Add title and subtitle of the map.
st.title("Accidents in United Kingdom")
st.markdown("This app analyzes accident data in United Kingdom from 2012-2014")

"""
Here, we define load_data function,
to prevent loading the data everytime we made some changes in the dataset.
We use streamlit's cache notation.
"""


@st.cache(persist=True)
def load_data(nrows):
	# parse date and time columns as date and time
	data = pd.read_csv(DATA_URL, nrows=nrows, parse_dates=[['Date', 'Time']])
	# Drop N / A values in latitude and longitude. soit does not face problem when we use maps
	data.dropna(subset=['Latitude', 'Longitude'], inplace=True)
	def lowercase(x): return str(x).lower()
	data.rename(lowercase, axis="columns", inplace=True)
	data.rename(columns={"date_time": "date / time"}, inplace=True)
	return data


# load first 10000 rows
data = load_data(10000)
# Plot : 1
# plot a streamlit map for accident locations.
st.header("Where are the most people casualties in accidents in UK?")
# plot the slider that selects number of person died
casualties = st.slider("Number of persons died", 1,
                       int(data["number_of_casualties"].max()))
st.map(data.query("number_of_casualties >= @casualties")
       [["latitude", "longitude"]].dropna(how="any"))

# Plot : 2
# plot a pydeck 3D map for the number of accident's happen between an hour interval
st.header("How many accidents occur during a given time of day?")
hour = st.slider("Hour to look at", 0, 23)
original_data = data
data = data[data['date / time'].dt.hour == hour]

st.markdown("Vehicle collisions between % i:00 and % i:00" %
            (hour, (hour + 1) % 24))
midpoint = (np.average(data["latitude"]), np.average(data["longitude"]))

st.write(pdk.Deck(
	map_style="mapbox://styles / mapbox / light-v9",
	initial_view_state={
		"latitude": midpoint[0],
		"longitude": midpoint[1],
		"zoom": 11,
		"pitch": 50,
	},
	layers=[
		pdk.Layer(
                    "HexagonLayer",
                    data=data[['date / time', 'latitude', 'longitude']],
                    get_position=["longitude", "latitude"],
                    auto_highlight=True,
                    radius=100,
                    extruded=True,
                    pickable=True,
                    elevation_scale=4,
                    elevation_range=[0, 1000],
		),
	],
))

# Plot : 3
# plot a histogram for minute of the hour atwhich accident happen
st.subheader("Breakdown by minute between % i:00 and % i:00" %
             (hour, (hour + 1) % 24))
filtered = data[
	(data['date / time'].dt.hour >= hour) & (data['date / time'].dt.hour < (hour + 1))
]
hist = np.histogram(
	filtered['date / time'].dt.minute, bins=60, range=(0, 60))[0]
chart_data = pd.DataFrame({"minute": range(60), "Accidents": hist})
fig = px.bar(chart_data, x='minute', y='Accidents',
             hover_data=['minute', 'Accidents'], height=400)
st.write(fig)

# The code below uses checkbox to show raw data
st.header("Condition of Road at the time of Accidents")
select = st.selectbox('Weather ', [
                      'Dry', 'Wet / Damp', 'Frost / ice', 'Snow', 'Flood (Over 3cm of water)'])

if select == 'Dry':
	st.write(original_data[original_data['road_surface_conditions'] == "Dry"][["weather_conditions", "light_conditions",
                                                                            "speed_limit", "number_of_casualties"]].sort_values(by=['number_of_casualties'], ascending=False).dropna(how="any"))

elif select == 'Wet / Damp':
	st.write(original_data[original_data['road_surface_conditions'] == "Wet / Damp"][["weather_conditions", "light_conditions",
                                                                                   "speed_limit", "number_of_casualties"]].sort_values(by=['number_of_casualties'], ascending=False).dropna(how="any"))
elif select == 'Frost / ice':
	st.write(original_data[original_data['road_surface_conditions'] == "Frost / ice"][["weather_conditions", "light_conditions",
                                                                                    "speed_limit", "number_of_casualties"]].sort_values(by=['number_of_casualties'], ascending=False).dropna(how="any"))

elif select == 'Snow':
	st.write(original_data[original_data['road_surface_conditions'] == "Snow"][["weather_conditions", "light_conditions",
                                                                             "speed_limit", "number_of_casualties"]].sort_values(by=['number_of_casualties'], ascending=False).dropna(how="any"))

else:
	st.write(original_data[original_data['road_surface_conditions'] == "Flood (Over 3cm of water)"][["weather_conditions", "light_conditions",
                                                                                                  "speed_limit", "number_of_casualties"]].sort_values(by=['number_of_casualties'], ascending=False).dropna(how="any"))


if st.checkbox("Show Raw Data", False):
	st.subheader('Raw Data')
	st.write(data)

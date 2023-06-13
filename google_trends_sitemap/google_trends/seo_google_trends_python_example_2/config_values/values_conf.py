"""
# values_conf.py.py should contain the following variables

# CAUTION
# do not forget to change it with your own values

# call in python file using VALUE = conf.VALUE


"""


# MAIN APP VALUES
SOURCE_PATH = "source/"
DEST_PATH = "data/"
TITLE_APP = "Google Trends Dashboard"

# OTHER VALUES
HEAD_KEY_FIGURES_1 = "HEAD_KEY_FIGURES_1"
HEAD_KEY_FIGURES_2 = "HEAD_KEY_FIGURES_2"
HEAD_KEY_FIGURES_3 = "HEAD_KEY_FIGURES_3"

# PRESENTATION
APP_HEAD_LABEL_1 = "PRESENTATION"
APP_HEAD_DESCRIPTION_1 = "**A quick exploration of Google Trends (GT) with the help of Pytrends and for sure Streamlit.** \n\nWhy Streamlit? Because it gives a chance for others than seasoned developers to query GT! The purpose was to explore the Google Trends abilities to summon editorial POV for some journalists in despair. *Some said that it is a crystal ball some for topics some other pretend that is the cultural globalisation living proof.* **Well, it is both! More pragmatically this is P.O.C to provide guidelines for a future SEO dashboard.** \n\n *The explanations came from this post: https://practicaldatascience.co.uk/data-science/how-to-analyse-search-traffic-using-the-google-trends-api*\n\n *If you want to check out directly Google Trends, you can at this URL: https://trends.google.com*"

# TABS DESIGN FOR EXAMPLE
LABEL_EXPANDER = "View the explanation"
EXAMPLE_TAB_HEAD_LABEL_1 = "EXPLANATION"
EXAMPLE_TAB_HEAD_LABEL_2 = "CODE"
EXAMPLE_TAB_HEAD_LABEL_3 = "RESULT"




# EXPLANATIONS

# trending_searches
GREAT_EXPANDER_TEXT_1 = "EXAMPLE_1 :: Top Searches (`trending_searches()`) :: The `trending_searches()` function returns a dataframe containing the current most popular searches being entered on Google. By default, if you pass in no arguments trending_searches() returns the top global searches."


# build_payload
GREAT_EXPANDER_TEXT_2 = "EXAMPLE_2 :: Interest over time (`interest_over_time()`) :: The `interest_over_time()` can help you to examine and chart the interest of specific search queries over time you can use the `interest_over_time()` function. To use this you initially need to build a PyTrends payload with `build_payload()`, which takes a list of search terms available in the variable `keywords()`. It will return the search volume for each time period and each term in a Pandas dataframe."

GREAT_EXPANDER_TEXT_3 = "EXAMPLE_3 :: YouTube trends (`interest_over_time()`) :: With the `interest_over_time()`, you can also run Google Trends searches on other Google properties, besides the default Google search. For instance, let's take a look at YouTube searches with `gprop='youtube'` for `IA` and `journalism` to see how demand differs and whether there’s any seasonality."

GREAT_EXPANDER_TEXT_4 = "EXAMPLE_4 :: AAA (`xxx()`) :: The `xxx()` "

GREAT_EXPANDER_TEXT_5 = "EXAMPLE_5 :: AAA (`xxx()`) :: The `xxx()` "


GREAT_EXPANDER_TEXT_6 = "EXAMPLE_6 :: AAA (`xxx()`) :: The `xxx()` "

GREAT_EXPANDER_TEXT_7 = "EXAMPLE_7 :: AAA (`xxx()`) :: The `xxx()` "

GREAT_EXPANDER_TEXT_8 = "EXAMPLE_8 :: AAA (`xxx()`) :: The `xxx()` "

GREAT_EXPANDER_TEXT_9 = "EXAMPLE_9 :: AAA (`xxx()`) :: The `xxx()` "

"""[directory]
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_bert_detecting_fake_news_1/fake_news_nlp_detection/


python fake_news_nlp_detection_2.py

"""

# This is a Python 3 environment

# Base level imports for data science work

import numpy as np 
import pandas as pd
import re,string,unicodedata
import os
from os import path

# Visualization Libs
import seaborn as sns
import matplotlib.pyplot as plt
from PIL import Image
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

# NLP Libs
import nltk
from sklearn.preprocessing import LabelBinarizer
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from wordcloud import WordCloud,STOPWORDS
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize,sent_tokenize
from bs4 import BeautifulSoup
from keras.preprocessing import text, sequence
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelBinarizer
from sklearn.linear_model import PassiveAggressiveClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC

# Additional Libs
from sklearn.metrics import classification_report,confusion_matrix,accuracy_score
from sklearn.model_selection import train_test_split
from string import punctuation
from nltk import pos_tag
from nltk.corpus import wordnet

# Deep Learning Libs
import keras
from keras.models import Sequential
from keras.layers import Dense,Embedding,LSTM,Dropout
from keras.callbacks import ReduceLROnPlateau
import tensorflow as tf


# Import our data

# an insignificant dataset with 3 records
# true = pd.read_csv("TrueSmallSample.csv")
# fake = pd.read_csv("FakeSmallSample.csv")

# a medium dataset with 90 records
true = pd.read_csv("TrueMediumSample.csv")
fake = pd.read_csv("FakeMediumSample.csv")

# the complete dataset
# true = pd.read_csv("TrueBigSample.csv")
# fake = pd.read_csv("FakeBigSample.csv")


# Let's explore the data at a base level

sample_true = true.sample(20)
sample_fake = fake.sample(20)

print("\n--- sample_true only 20")
print (sample_true)
print("\n--- sample_fake only 20")
print(sample_fake)

# true.shape,fake.shape
print("\n--- true.shape with number of TRUE news")
print(true.shape)
print("\n--- fake.shape with number of FAKE news")
print(fake.shape)

# These dataframes do not currently have a category for whether they are true or fake.
# Let's create those before we combine the datasets

true['category'] = 1  # news that are true
fake['category'] = 0  # news that are fake


# Now we'll merge the two datasets into a single dataframe
df = pd.concat([true,fake])

# PICTURE_1 OUTPUT
""" Total Fake and Real News Articles """
plt.figure(figsize=(16, 9))
sns.countplot(df.category)
plt.title('Total Fake and Real News Articles', fontsize=24)
plt.ylabel('Total', fontsize=16)
plt.xlabel('')
plt.xticks([0, 1], ['Fake', 'Real'], fontsize=16)
# plt.show()
plt.savefig('picture_1_total_fake_and_real_news_articles.png')

print("\n--- # PICTURE_1 OUTPUT ")

df.isna().sum()
df_info = df.info()
# Look in https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.info.html

# One last thing I'm interested in looking at at this point
# # OUTPUT_3
df_subject = df.subject.value_counts()
print("\n--- # OUTPUT_3 :: df_subject")
print(df_subject)





# PICTURE_2 OUTPUT
""" Total Number of Articles Per Subject """
plt.figure(figsize=(16, 9))
sns.countplot(x='subject', data=df)
plt.title('Total Number of Articles Per Subject', fontsize=24)
plt.ylabel('Total', fontsize=16)
plt.xlabel('')
plt.xticks(fontsize=12)
# plt.show()
plt.savefig('picture_2_total_number_of_articles_per_subject.png')
print("\n--- # PICTURE_2 OUTPUT ")

# PICTURE_3 OUTPUT
""" Article Subjects By Type """
plt.figure(figsize=(16, 9))
sns.countplot(x='subject', hue='category', data=df)
plt.title('Article Subjects By Type', fontsize=24)
plt.ylabel('Total', fontsize=16)
plt.xlabel('')
plt.xticks(fontsize=12)
plt.legend(['Fake', 'Real'])
# plt.show()
plt.savefig('picture_3_article_subjects_by_type.png')
print("\n--- # PICTURE_3 OUTPUT ")


# # OUTPUT_4
# df_head = df.head()
# print("\n--- df_head")
# print(df_head)

# Now we'll create the Corpus that will be used in our NLP model
# This will create a single column with all the relevant text

# OUTPUT_5
df['text'] = df['title'] + " " + df['text']
# print("\n--- OUTPUT_5")
# print(df['text'])

# This will delete all the other columns we do not need for the rest of the work.
del df['title']  # added to our text corpus
del df['subject']  # we determined it would affect our results
# this might be an interesting item to keep in a future analysis that spans more time, but we will delete it for now.
del df['date']

# STOPWORDS
stop = set(stopwords.words('english'))
punctuation = list(string.punctuation)
stop.update(punctuation)


# FUNCTIONS

# Removing the html with BS4
def strip_html(text):
    soup = BeautifulSoup(text, "html.parser")
    return soup.get_text()

# Removing the square brackets
def remove_between_square_brackets(text):
    return re.sub('\[[^]]*\]', '', text)

# Removing URL's
def remove_urls(text):
    return re.sub(r'http\S+', '', text)

# Removing the stopwords from text
def remove_stopwords(text):
    final_text = []
    for i in text.split():
        if i.strip().lower() not in stop:
            final_text.append(i.strip())
    return " ".join(final_text)

# Final function to clean the text
def clean_text(text):
    text = strip_html(text)
    text = remove_between_square_brackets(text)
    text = remove_urls(text)
    text = remove_stopwords(text)
    return text


#Apply function on review column


# OUTPUT_6
df['text'] = df['text'].apply(clean_text)
df.head()
# print("\n--- OUTPUT_6")
# print(df['text'])
# print(df.head())

# PICTURE_4 OUTPUT
""" picture_4_wordcloud """
plt.figure(figsize=(20, 20))  # Text from the fake news articles
wc = WordCloud(max_words=2000, width=1600, height=800,
               stopwords=STOPWORDS).generate(" ".join(df[df.category == 0].text))
plt.imshow(wc, interpolation='bilinear')
plt.axis("off")
# do not show save it
# plt.show()
plt.savefig('picture_4_wordcloud_text_fake_news.png')
print("\n--- # PICTURE_4 OUTPUT ")

 


# FUNCTIONS TO PREPARE PICTURE_5 OUTPUT
def clean(text: str) -> list:
    'A simple function to cleanup text data'
    wnl = nltk.stem.WordNetLemmatizer()
    stopwords = nltk.corpus.stopwords.words('english')
    text = (text.encode('ascii', 'ignore')
             .decode('utf-8', 'ignore')
             .lower())
    words = re.sub(r'[^\w\s]', '', text).split() # tokenization
    return [wnl.lemmatize(word) for word in words if word not in stopwords]

corpus = clean(' '.join(df[df.category == 1].text))

def listToString(s):  
    # initialize an empty string 
    str1 = " "  
    # return string   
    return (str1.join(s)) 
corpus_str = listToString(corpus)
d = path.dirname(__file__) if "__file__" in locals() else os.getcwd()

# read the mask / color image taken from
# Require bg_model_real_news.jpg to be in the directory
coloring = np.array(Image.open(path.join(d, "bg_model_real_news.jpg")))
stopwords = set(STOPWORDS)
wc = WordCloud(background_color="white", max_words=2000, width=1600, height=800, mask=coloring,stopwords=stopwords, max_font_size=80, random_state=42)

# generate word cloud
wc.generate(corpus_str)

# create coloring from image
image_colors = ImageColorGenerator(coloring)
plt.imshow(wc, interpolation='bilinear')
plt.axis("off")

# PICTURE_4_A OUTPUT
# This bit of code is used to create a high quality exported image
fig1 = plt.gcf()
# plt.show()
plt.draw()
fig1.savefig("picture_4_a_real_news_nlp_word_cloud.png", bbox_inches='tight', dpi=600)
plt.figure(figsize=(20, 20))

# PICTURE_5 OUTPUT
""" Characters per article """
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 9))
text_len = df[df['category'] == 1]['text'].str.len()
ax1.hist(text_len, color='tab:orange')
ax1.set_title('Real News', fontsize=14)
text_len = df[df['category'] == 0]['text'].str.len()
ax2.hist(text_len, color='tab:blue')
ax2.set_title('Fake News', fontsize=14)
fig.suptitle('Characters per article', fontsize=24)
# do not show save it
# plt.show()
plt.savefig('picture_5_output_characters_per_article.png')
print("\n--- # PICTURE_5 OUTPUT ")

# There seem to be differences in the characters per article between the two categories. It looks like
# 2500 or less characters in text is the most common in real news category, while around 5000 or less
# characters in text are most common in fake news category.

# PICTURE_6 OUTPUT
""" Words per article """
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 9))
text_len = df[df['category'] == 1]['text'].str.split().map(lambda x: len(x))
ax1.hist(text_len, color='tab:orange')
ax1.set_title('Real News', fontsize=14)
text_len = df[df['category'] == 0]['text'].str.split().map(lambda x: len(x))
ax2.hist(text_len, color='tab:blue')
ax2.set_title('Fake News', fontsize=14)
fig.suptitle('Words per article', fontsize=24)
# do not show save it
# plt.show()
plt.savefig('picture_6_output_words_per_article.png')
print("\n--- # PICTURE_6 OUTPUT ")

# NEW PART :: Training and Modeling
""" [This part is traning and modeling not in use for images] """
# Now that we've done a bit of data exploration, let's get into modeling
# First up, we need to Train Test Split the data

X = df.text
y = df.category

X_train, X_test, y_train, y_test = train_test_split(
    X, y, train_size=.8, stratify=y, random_state=19)


X = df.text
y = df.category

X_train, X_test, y_train, y_test = train_test_split(
    X, y, train_size=.8, stratify=y, random_state=19)

# Create of Count Vectorize object
cv = CountVectorizer(min_df=0, max_df=1, binary=False, ngram_range=(1, 3))

# Transform the train dataset
cv_train = cv.fit_transform(X_train)

# Transform the test dataset
cv_test = cv.transform(X_test)

print("\n--- NEW PART :: Training and Modeling")
print('Bag of words Train:', cv_train.shape)
print('Bag of words Test:', cv_test.shape)


# Create the TF-IDF object
tfidf = TfidfVectorizer(min_df=0, max_df=1, use_idf=True, ngram_range=(1, 3))

# Transform the train dataset
tfidf_train = tfidf.fit_transform(X_train)

# Transform the test dataset
tfidf_test = tfidf.transform(X_test)

print('TF-IDF Train:', tfidf_train.shape)
print('TF-IDF Test:', tfidf_test.shape)

# Create our model object
mnb = MultinomialNB()

# Fit the model to the Bag of words CountVectorizor
mnb_cv = mnb.fit(cv_train, y_train)

# Fit the model to the TF-IDF features
mnb_tfidf = mnb.fit(tfidf_train, y_train)


# Predicting the model for bag of words
mnb_cv_predict = mnb.predict(cv_test)

# Predicting the model for tf-idf features
mnb_tfidf_predict = mnb.predict(tfidf_test)


# Check the accuracy score for bag of words
mnb_cv_score = accuracy_score(y_test, mnb_cv_predict)
print("Naive Bayes Bag of words accuracy score:", mnb_cv_score)

# Check the accuracy score for tfidf features
mnb_tfidf_score = accuracy_score(y_test, mnb_tfidf_predict)
print("Naive Bayes TF-IDF accuracy score:", mnb_tfidf_score)


mnb_cv_report = classification_report(
    y_test, mnb_cv_predict, target_names=['0', '1'])
print(mnb_cv_report)
mnb_tfidf_report = classification_report(
    y_test, mnb_tfidf_predict, target_names=['0', '1'])
print(mnb_tfidf_report)


# At the end of some quick EDA and NLP modeling, we're left with a high level understanding of the two datasets,
# some charts and word clouds for a data product, and a model that currently has 94% accuracy with Bag of Words
# and 92% with TF-IDF.



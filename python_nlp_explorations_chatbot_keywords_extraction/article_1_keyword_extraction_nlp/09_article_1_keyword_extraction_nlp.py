#!/usr/bin/python
# -*- coding: utf-8 -*-
# 
"""

cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_1_keyword_extraction_nlp/

python 09_article_1_keyword_extraction_nlp.py

"""

## settings 
path="/Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_1_keyword_extraction_nlp/"

data_file="/Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_1_keyword_extraction_nlp/userfeedback-data-small.tsv"

stopword_file="/Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/_my_article_python-explorations/git_repo_python_explorations_nlp/article_1_keyword_extraction_nlp/custom-stopwords.txt"

datacol="feedback"


## 1. Load dataset and identify text fields to analyze


# Change current directory to desktop
# This isn't necessary for any of the analysis, but makes it easy to see and find file outputs
# Change this to whatever directory works for you if your desktop is a horror show
import os
# usr = os.getlogin()
# os.chdir('/Users/'+usr+'/Desktop')
os.chdir(path)
cwd = os.getcwd()
print('Working in ', cwd, '\n')

# List TSV files on desktop and select the file to analyze
# CSVs will also work, but TSV is better for free text entry (people use commas in comments)
files = [f for f in os.listdir('.') if os.path.isfile(f)]
print('---\nTSV files currently on your desktop: \n')
for f in files:
    if '.tsv' in f:
        print(f)
# data_file = input('\n---\nWhich file would like to analyze? \n\n')
# data_file="/Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_1_keyword-extraction-nlp/nlp-text-analysis-master/userfeedback-data.tsv"

#/Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_1_keyword-extraction-nlp/nlp-text-analysis-master/rfi-data.tsv
# /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_1_keyword-extraction-nlp/nlp-text-analysis-master/userfeedback-data.tsv

# userfeedback-data

# Prefix output files with TSV filename prefix—-these will be saved to your desktop
file_prefix = data_file.split('.')
file_prefix = file_prefix[0]+'_'
print('\nFile exports will be prefixed with:', file_prefix)

# Load the dataset and view sample data and column headers
import pandas
dataset = pandas.read_csv(data_file, delimiter = '\t')
dataset.head()


# Select the content column to analyze
# datacol = input('\n---\nWhich column contains the text data you would like to analyze?\n\n')
# Select the column feedback

print ("\n\n ---  / result 1 --- ")
# View 10 most common words prior to text pre-processing
freq = pandas.Series(' '.join(map(str, dataset[datacol])).split()).value_counts()[:10]
# freq

print ("\n\n ---  / result 2 --- ")
# View 10 least common words prior to text pre-processing
freq1 =  pandas.Series(' '.join(map(str,dataset 
         [datacol])).split()).value_counts()[-10:]
# freq1

## 2. Create a list of stop words
#
## Import libraries for text preprocessing
import re
import nltk

# You only need to download these resources once. After you run this 
# the first time--or if you know you already have these installed--
# you can comment these two lines out (with a #)
# nltk.download('stopwords')
# nltk.download('wordnet')

from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.tokenize import RegexpTokenizer
from nltk.stem.wordnet import WordNetLemmatizer

# Create a list of stop words from nltk
stop_words = set(stopwords.words("english"))
print ("\n\n ---  / result 3 --- ")
print(sorted(stop_words))



# Load a set of custom stop words from a text file (one stopword per line)
csw = set(line.strip() for line in open(stopword_file))
csw = [sw.lower() for sw in csw]
print ("\n\n ---  / result 4 --- ")
print(sorted(csw))


# Combine custom stop words with stop_words list
stop_words = stop_words.union(csw)
print ("\n\n ---  / result 5 --- ")
print(sorted(stop_words))


## 3. Pre-process the dataset to get a cleaned, normalized text corpus  

# Pre-process dataset to get a cleaned and normalised text corpus
corpus = []
dataset['word_count'] = dataset[datacol].apply(lambda x: len(str(x).split(" ")))
ds_count = len(dataset.word_count)
for i in range(0, ds_count):
    # Remove punctuation
    text = re.sub('[^a-zA-Z]', ' ', str(dataset[datacol][i]))
    
    # Convert to lowercase
    text = text.lower()
    
    # Remove tags
    text=re.sub("&lt;/?.*?&gt;"," &lt;&gt; ",text)
    
    # Remove special characters and digits
    text=re.sub("(\\d|\\W)+"," ",text)
    
    # Convert to list from string
    text = text.split()
    
    # Stemming
    ps=PorterStemmer()
    
    # Lemmatisation
    lem = WordNetLemmatizer()
    text = [lem.lemmatize(word) for word in text if not word in  
            stop_words] 
    text = " ".join(text)
    corpus.append(text)


#View sample pre-processed corpus item
print ("\n\n ---  / result 6 --- ")
corpus[10]



# Generate word cloud
from os import path
from PIL import Image
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
import matplotlib.pyplot as plt
# %matplotlib inline
wordcloud = WordCloud(
                          background_color='white',
                          stopwords=stop_words,
                          max_words=100,
                          max_font_size=50, 
                          random_state=42
                         ).generate(str(corpus))
print(wordcloud)

fig = plt.figure(1)
plt.imshow(wordcloud)
plt.axis('off')
# plt.show()
fig.savefig(file_prefix + "wordcloud_only.png", dpi=900)


# Tokenize the text and build a vocabulary of known words
from sklearn.feature_extraction.text import CountVectorizer
import re
cv=CountVectorizer(max_df=0.8,stop_words=stop_words, max_features=10000, ngram_range=(1,3))
X=cv.fit_transform(corpus)


# Sample the returned vector encoding the length of the entire vocabulary
list(cv.vocabulary_.keys())[:10]


## 4. Extract most frequently occurring keywords and n-grams


# View most frequently occuring keywords
def get_top_n_words(corpus, n=None):
    vec = CountVectorizer().fit(corpus)
    bag_of_words = vec.transform(corpus)
    sum_words = bag_of_words.sum(axis=0) 
    words_freq = [(word, sum_words[0, idx]) for word, idx in      
                   vec.vocabulary_.items()]
    words_freq =sorted(words_freq, key = lambda x: x[1], 
                       reverse=True)
    return words_freq[:n]

print ("\n\n ---  / result 7 --- ")
# Convert most freq words to dataframe for plotting bar plot, save as CSV
top_words = get_top_n_words(corpus, n=20)
top_df = pandas.DataFrame(top_words)
top_df.columns=["Keyword", "Frequency"]
print(top_df)
top_df.to_csv(file_prefix + '_top_words.csv')

# Barplot of most freq words
import seaborn as sns
sns.set(rc={'figure.figsize':(13,8)})
g = sns.barplot(x="Keyword", y="Frequency", data=top_df, palette="Blues_d")
g.set_xticklabels(g.get_xticklabels(), rotation=45)
g.figure.savefig(file_prefix + "_keyword.png", bbox_inches = "tight")


print ("\n\n ---  / result 8 --- ")
# Most frequently occuring bigrams
def get_top_n2_words(corpus, n=None):
    vec1 = CountVectorizer(ngram_range=(2,2),  
            max_features=2000).fit(corpus)
    bag_of_words = vec1.transform(corpus)
    sum_words = bag_of_words.sum(axis=0) 
    words_freq = [(word, sum_words[0, idx]) for word, idx in     
                  vec1.vocabulary_.items()]
    words_freq =sorted(words_freq, key = lambda x: x[1], 
                reverse=True)
    return words_freq[:n]

# Convert most freq bigrams to dataframe for plotting bar plot, save as CSV
top2_words = get_top_n2_words(corpus, n=20)
top2_df = pandas.DataFrame(top2_words)
top2_df.columns=["Bi-gram", "Frequency"]
print(top2_df)
top2_df.to_csv(file_prefix + '_bigrams.csv')

# Barplot of most freq Bi-grams
import seaborn as sns
sns.set(rc={'figure.figsize':(13,8)})
h=sns.barplot(x="Bi-gram", y="Frequency", data=top2_df, palette="Blues_d")
h.set_xticklabels(h.get_xticklabels(), rotation=75)
h.figure.savefig(file_prefix + "_bi-gram.png", bbox_inches = "tight")



## 5. Extract a list of top TF-IDF terms
#



# Get TF-IDF (term frequency/inverse document frequency) -- 
# TF-IDF lists word frequency scores that highlight words that 
# are more important to the context rather than those that 
# appear frequently across documents

from sklearn.feature_extraction.text import TfidfTransformer 
tfidf_transformer=TfidfTransformer(smooth_idf=True,use_idf=True)
tfidf_transformer.fit(X)

# Get feature names
feature_names=cv.get_feature_names()
 
# Fetch document for which keywords needs to be extracted
doc=corpus[ds_count-1]
 
# Generate tf-idf for the given document
tf_idf_vector=tfidf_transformer.transform(cv.transform([doc]))



# Sort tf_idf in descending order
from scipy.sparse import coo_matrix
def sort_coo(coo_matrix):
    tuples = zip(coo_matrix.col, coo_matrix.data)
    return sorted(tuples, key=lambda x: (x[1], x[0]), reverse=True)
 
def extract_topn_from_vector(feature_names, sorted_items, topn=25):
    
    # Use only topn items from vector
    sorted_items = sorted_items[:topn]
    score_vals = []
    feature_vals = []
    
    # Word index and corresponding tf-idf score
    for idx, score in sorted_items:
        
        # Keep track of feature name and its corresponding score
        score_vals.append(round(score, 3))
        feature_vals.append(feature_names[idx])
 
    # Create tuples of feature,score
    # Results = zip(feature_vals,score_vals)
    results= {}
    for idx in range(len(feature_vals)):
        results[feature_vals[idx]]=score_vals[idx]
    return results

# Sort the tf-idf vectors by descending order of scores
sorted_items=sort_coo(tf_idf_vector.tocoo())

# Extract only the top n; n here is 25
keywords=extract_topn_from_vector(feature_names,sorted_items,25)

print ("\n\n ---  / result 8 --- ")
# Print the results, save as CSV
print("\nAbstract:")
print(doc)
print("\nKeywords:")
for k in keywords:
    print(k,keywords[k])

import csv
with open(file_prefix + 'td_idf.csv', 'w', newline="") as csv_file:  
    writer = csv.writer(csv_file)
    writer.writerow(["Keyword", "Importance"])
    for key, value in keywords.items():
       writer.writerow([key, value])

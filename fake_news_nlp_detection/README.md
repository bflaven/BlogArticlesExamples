# Fake News Detection in Python using Natural language processing - Can applied computing help a journalist in automatic fact-checking?


## Explanations
**A quick intro on how to use more specifically Natural Language Processing (NLP) to detect Fake News for a possibles journalist usage.**


**The files are the following. Due to the size of the dataset, I remove it from the directory TrueBigSample.csv, FakeBigSample.csv. The dataset can be found at https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset (https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset).**

**The images picture_1 to picture_6 have been generated with this BIG dataset (TrueBigSample.csv, FakeBigSample.csv)**

**The small and medium dataset are here just to perform quickly the script without burning down my Mac.**


```
├── FakeMediumSample.csv # FAKE News medium dataset with 90 records
├── FakeSmallSample.csv # FAKE news small dataset
├── README.md
├── TrueMediumSample.csv # TRUE news medium dataset with 90 records
├── TrueSmallSample.csv # TRUE news small dataset
├── bg_model_real_news.jpg # used in script for picture_4_a_real_news_nlp_word_cloud.png
├── fake_news_nlp_detection_1.py # file to ensure that you load the python librairies: nltk, seaborn, wordcloud, PIL, BeautifulSoup, sklearn, keras, tensorflow... etc.
├── fake_news_nlp_detection_2.py # the script to analyse Fake News
├── picture_1_total_fake_and_real_news_articles.png # script's output
├── picture_2_total_number_of_articles_per_subject.png # script's output
├── picture_3_article_subjects_by_type.png # script's output
├── picture_4_a_real_news_nlp_word_cloud.png # script's output
├── picture_4_wordcloud_text_fake_news.png # script's output
├── picture_5_output_characters_per_article.png # script's output
└── picture_6_output_words_per_article.png # script's output
```


## Sources
- Fake News Detection Using NLP (https://medium.com/swlh/fake-news-detection-using-nlp-e744a6909276)

- FAKE NEWS DETECTION USING NLP AND MACHINE LEARNING IN PYTHON (https://wisdomml.com/fake-news-detection-using-nlp-and-machine-learning/)


- *The dataset can be found at https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset (https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset)*


- *Thanks to Chase Thompson for sharing this post. Connect with Chase Thompson on LinkedIn: https://www.linkedin.com/in/wchasethompson (https://www.linkedin.com/in/wchasethompson)*


## Script's comments for fake_news_nlp_detection_2.py

1. I have reduced the sample just because my mac is almost dyinh when I am loading the dataset.
```python
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
```


2. I’d rather save image files than show it. Why? First to preserve my mac, at the same time I am working so I do my mac to be turn as a zombie. Second, I don’t like that the script flow is interrupted by image generation.
```python
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
```

3. I print significant results inside the console every time, it is meaningful like in a kind jupyter notebook... e.g. # PICTURE_3 OUTPUT I know it may sound contradictory but the jupyter notebook is very CPU intensive. 
```python
# Let's explore the data at a base level

sample_true = true.sample(20)
sample_fake = fake.sample(20)

print("\n--- sample_true only 20")
print (sample_true)
print("\n--- sample_true only 20")
print(sample_true)
```


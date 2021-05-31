#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/build_interactive_webapps_python_scripts_using_streamlit/03_interactive_webapps_streamlit_nlp/


[file]
streamlit run 003_streamlit_for_nlp_projects_text_summarization.py


# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/


"""

# ARTICLE_11. Text Summarization using a Wordcloud & Deployed on Streamlit
# https://medium.com/analytics-vidhya/text-summarization-using-a-wordcloud-deployed-on-streamlit-cbce2f411c24


from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import streamlit as st
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

st.set_option('deprecation.showPyplotGlobalUse', False)


def cloud(image, text, max_word, max_font, random):
    stopwords = set(STOPWORDS)
    stopwords.update(['us', 'one', 'will', 'said', 'now', 'well', 'man', 'may', 'little', 'say', 'must', 'way', 'long', 'yet', 'mean', 'put', 'seem', 'asked', 'made', 'half', 'much','certainly', 'might', 'came'])

    wc = WordCloud(background_color="white", colormap="hot", max_words=max_word, mask=image,
                   stopwords=stopwords, max_font_size=max_font, random_state=random)
    # generate word cloud
    wc.generate(text)

    # create coloring from image
    image_colors = ImageColorGenerator(image)

    # show
    plt.figure(figsize=(100, 100))
    fig, axes = plt.subplots(1, 2, gridspec_kw={'width_ratios': [3, 2]})
    axes[0].imshow(wc, interpolation="bilinear")
    # recolor wordcloud and show
    # we could also give color_func=image_colors directly in the constructor
   # axes[1].imshow(wc.recolor(color_func=image_colors), interpolation="bilinear")
    axes[1].imshow(image, cmap=plt.cm.gray, interpolation="bilinear")
    for ax in axes:
        ax.set_axis_off()

    st.pyplot()


def main():
    st.write("# Text Summarization with a WordCloud")
    st.write("[By Boadzie Daniel](https://boadzie.surge.sh)")
    max_word = st.sidebar.slider("Max words", 200, 3000, 200)
    max_font = st.sidebar.slider("Max Font Size", 50, 350, 60)
    random = st.sidebar.slider("Random State", 30, 100, 42)
    image = st.file_uploader("Choose a file(preferably a silhouette)")
    text = st.text_area("Add text ..")
    if image and text is not None:
        if st.button("Plot"):
            st.write("### Original image")
            image = np.array(Image.open(image))
            # st.image(image, width=100, use_column_width=True)

            st.write("### Word cloud")
            st.write(cloud(image, text, max_word, max_font, random),
                     use_column_width=True)


if __name__ == "__main__":
    main()



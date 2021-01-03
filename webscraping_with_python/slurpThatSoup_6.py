#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python

[command]
python slurpThatSoup_6.py



"""
import bs4
exampleFile = open('example_3.html')
exampleSoup = bs4.BeautifulSoup(exampleFile.read(), features="lxml")


# <h5 class="smallCardTitle bookCard__title">
# <h6 class="smallCardSubtitle bookPromo__details__authorName">



smallCardTitles = exampleSoup.select('h5')
smallCardSubtitles = exampleSoup.select('h6')

# GRAB_1
# print("\n --- smallCardTitles")
# print(smallCardTitles)

# print("\n --- smallCardSubtitles")
# print(smallCardSubtitles)

# GRAB_2
# for count, title in enumerate(smallCardTitles):
#    # print(count, title)
#    print(count, title.getText())

# for count, authorName in enumerate(smallCardSubtitles):
#    # print(count, authorName)
#    print(count, authorName.getText())

# GRAB_3
# <div class = "cmp-text text" >
# bookHtmlChunks = exampleSoup.select('#text')

# bookHtmlChunks = exampleSoup.find_all('div', attrs={"class": "cmp-text text"})
# print(bookHtmlChunks)

bookHtmlChunks = exampleSoup.find_all(
    'div', attrs={"class": "cmp-text text"})

for count, enum_book in enumerate(bookHtmlChunks):
   # print(count, enum_book)
   paragraph = enum_book.select('p')
   
   print(paragraph)
   print()


"""
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_3_python-engineer_pytorch-chatbot/pytorch-chatbot-master
cd /Users/brunoflaven/Documents/02_copy/_000_IA_bruno_light/article_3_python-engineer_pytorch-chatbot/pytorch-chatbot-master-1/

python 01_nltk_utils.py

"""

import numpy as np
import nltk
# nltk.download('punkt')
from nltk.stem.porter import PorterStemmer
stemmer = PorterStemmer()

def tokenize(sentence):
    """
    split sentence into array of words/tokens
    a token can be a word or punctuation character, or number
    """
    return nltk.word_tokenize(sentence)


def stem(word):
    """
    stemming = find the root form of the word
    examples:
    words = ["organize", "organizes", "organizing"]
    words = [stem(w) for w in words]
    -> ["organ", "organ", "organ"]
    """
    return stemmer.stem(word.lower())


def bag_of_words(tokenized_sentence, words):
    """
    return bag of words array:
    1 for each known word that exists in the sentence, 0 otherwise
    example:
    sentence = ["hello", "how", "are", "you"]
    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
    bog   = [  0 ,    1 ,    0 ,   1 ,    0 ,    0 ,      0]
    """
    # stem each word
    sentence_words = [stem(word) for word in tokenized_sentence]
    # initialize bag with 0 for each word
    bag = np.zeros(len(words), dtype=np.float32)
    for idx, w in enumerate(words):
        if w in sentence_words: 
            bag[idx] = 1

    return bag

sentence = "J’aimais manger le cul de Prisca, puis délicatement glisser ma bite dans son anus humecté. Je poussais mon chibre loin à l’intérieur afin que mes couilles viennent se lovés dans la crevasse de son postérieur. Ne tenant plus, je la pressais de se retourner et je jouissais abondamment dans sa bouche, insouciante qu'elle de sa propre merde! Qui éventuellement marbrait le gland de la dite-bite."

print ("\n --- HUMAN \,,/(^_^)\,,/ --- \n")
print(sentence)



print ("\n --- ROBOT d[ o_0 ]b --- \n")

# tokenize
sentence = tokenize(sentence)
print(sentence)
print ("\n")

# stem

#CASE 1
# words = ["organize", "organizes", "organizing"]
# stemmed = [stem(w) for w in words]

#CASE 2
stemmed = [stem(w) for w in sentence]
print (stemmed)
print ("\n")



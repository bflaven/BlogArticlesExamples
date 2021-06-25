#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/extending_streamlit_usage/simple_app_spacy_example/


[file]
streamlit run simple_app_spacy_example_9.py

# more on infos and apps on
https://streamlit.io/
https://streamlit.io/gallery
https://docs.streamlit.io/en/stable/

Source: https://github.com/Jcharis/
Source: https://github.com/explosion/spacy-streamlit

"""

text_about = "Born in 1971 in Brussels, Belgium – Member of Oeil Public collective agency from 2001 till its closure of in 2010 – Currently represented by Maison de Photographes Signatures in France and Laif/Redux for the rest of the world – He lived in Paris for 20 years then moved and settled down in India(New Delhi) where he’s been residing since 2016.\n\n The documentary approach is what lies beneath most of his works. Not so fond of hot news, he likes to take the time to go around an issue. Photojournalistic, but also a sociological, sometimes even poetic narrative prevails. Whatever the guiding mental process, he always wants above all to inform about our changing world.\n\n With a swift glance at Johann Rousselot’s body of work, one may think it’s patchy. But if you spend a little more time on it, though, a clear and quite obsessive theme stands out: the excitement of the beginnings, the glorious new starts. The new or the renewal. And the hopes that those carry upon. The fresh promises of the shining new morrow.\n\n It is by no chance then that the youth is so present accross his works. Indeed, what else youth is but believing in all its dreams in a naive innocence, believing that everything is possible?\n\n Johann’s first important work, Clubbers(1994-1995), as he was still studying photography at the Superior School of Image Le 75 in Brussels, takes us in the booming years of the rising electronic music, or Techno as it is generally referred to. Those years were actually the real beginning of upcoming digital era, in a similar way as Rock & Roll was loudly announcing a few decades earlier the post-industrial society and the liberalisation of lifestyles and morals. The mood in these clubs and parties he went to shoot at were filled with positive energy and carrying away. It was the dawn of new times.\n\n Balkans – The Beast & the Beauties, his second important project, which is the one that will open the gates of the professional photography world(first press publications, first award, decisive in making him a member of the late Oeil Public collective agency’s affiliate members in 2001), celebrates nothing else than a certain youth in some Eastern Europe countries that, to him, were the bearers of new ideas for their societies after the fall of Berlin Wall and the disintegration of the Yugoslavian Republic. He conceptualized this portrait of new generations through diptychs in which he would oppose those fresh faces with architectural townscapes or details burdened with the dying Soviet style.\n\nThanks to the money of the Kodak Prize won in 2003, he engages in India in 2004 – a country that he already knows from his journey there as a student in photography – to lay his interest on the New India that the world media are so much talking about. At this time the emerging Indian middle class is full of hope, seeing finally the end of the Nehruvian stringent socialist decades. He titles this work India Shining, India Crying because the newness should not be a straitjacket though. A social and political consciousness does exist in him, especially since he started to hang out a lot with the Oeil Public’s other photographers.\n\n By 2005, he focusses his lens towards the evangelical congregations – that George W. Bush junior contributed to highlight – also going by the tag of ‘Born Again Christians‘. Everything is said born again, possibly for some even feeling risen from the dead!\n\n Very busy in India until 2009, in 2011 it is without much thinking that he would jump on the Arab Spring revolutions. Quite obviously resonating with his central theme. But in his formal photographic narrative there happens a renewal, a new style he finds in applying a technique of digital collages on portraits series of rebels, opponents, protesters… His excitement got doubled: revolutions under way, and developping on it a new photographic style! Shown at the international photojournalistic festival of Visa Pour l’Image 2012 edition, he liked to tag this work ‘photojournARTistic’.\n\nIn 2015 and 2016, thanks to two grants he won(CNAP & AFD-Polka), he produces Now Delhi. From this work, which aimed at painting a dark and somber image of the Indian capital region(Delhi NCR), it could be said that it takes us at the opposite end of his usual theme. And it does. Maybe an artist needs to go knock at the other extreme, just to see.\n\nJohann Rousselot also shot a lot at night, and truly enjoyed shooting nightlife, partying. ‘Clubbers’ is obviously bathing in this newness that guided him throughout, but what about later nightlife shots? Well, it is not a far-fetched theory to think that those people partying, dancing, taking drugs or not… are looking for a small re-start. To forget the mundane routine, their daily life. What makes a new beginning’s feeling is among other points the fact that routine has not yet settled in, and certainly a wild nightlife helps breaking the routine."


import spacy
from spacy_streamlit import visualize_parser
nlp = spacy.load("en_core_web_sm")
doc = nlp(text_about)
visualize_parser(doc)


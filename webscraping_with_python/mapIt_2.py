#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_python


[command]
python mapIt_2.py Fitz Roy 1264, Buenos Aires, Argentina
python mapIt_2.py Isaac John Street, Lagos, Nigeria
"""
# mapIt.py - Launches a map in the browser using an address from the
# command line or clipboard.
import webbrowser
import sys
import pyperclip
if len(sys.argv) > 1:
    # Get address from command line.
    address = ' '.join(sys.argv[1:])
    print (address)
    print ("argv => " + address)
    webbrowser.open('https://www.google.com/maps/place/' + address)
else:
    # Get address from clipboard.
    address = pyperclip.paste()
    print ("clipboard => " + address)
    webbrowser.open('https://www.google.com/maps/place/' + address)


# 
# 
# 

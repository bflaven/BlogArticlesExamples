#! python3
"""[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/webscraping_with_pyhton

[command]
python mapIt_1.py Fitz Roy 1264, Buenos Aires, Argentina
python mapIt_1.py Isaac John Street, Lagos, Nigeria
"""
# mapIt.py - Launches a map in the browser using an address from the
# command line or clipboard.
import webbrowser, sys
print(sys.argv)
if len(sys.argv) > 1:
# Get address from command line.
    address = ' '.join(sys.argv[1:])
    # print(address)
# TODO: Get address from clipboard.


# 
# 
# 

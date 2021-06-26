
#!/usr/bin/python
# -*- coding: utf-8 -*-


"""
[path]
cd  /Users/brunoflaven/Documents/01_work/blog_articles/script_in_script/


[file]
python myscriptB.py
python myscriptB.py first 2 third 4.5
python myscriptB.py tom bruno don marcel
"""

import sys
 
# Print total number of arguments
print ('Total number of arguments:', format(len(sys.argv)))
 
# Print all arguments
print ('Argument List:', str(sys.argv))
 
# Print arguments one by one
print ('First argument:',  str(sys.argv[0]))
print ('Second argument:',  str(sys.argv[1]))
print ('Third argument:',  str(sys.argv[2]))
print ('Fourth argument:',  str(sys.argv[3]))






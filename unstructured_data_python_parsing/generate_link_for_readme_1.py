#!/usr/bin/python
# -*- coding: utf-8 -*-


"""


[env]
# Conda Environment
# NO CONDA ENV

conda create --name unstructured_data_python_parsing python=3.9.7
conda info --envs
source activate unstructured_data_python_parsing
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]





# update conda 
conda update -n base -c defaults conda


[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/unstructured_data_python_parsing/


[file]
python generate_link_for_readme_1.py



# other module
pip install requests
pip install pandas
pip install streamlit
pip install numpy



# update conda if needed by running
# NO CONDA ENV
conda update -n base -c defaults conda


[source]
https://datagy.io/iterate-through-list-in-python/

"""

links = [
'https://stackoverflow.com/questions/53657322/csv-file-from-txt-using-pandas',
'https://www.reddit.com/r/learnprogramming/comments/ndv0mu/trying_to_convert_a_log_file_to_csv_file_on_python/',
'https://stackoverflow.com/questions/69894248/remove-space-in-csv-file-with-python',
'https://www.codingconception.com/python-examples/append-data-to-a-csv-file-in-python/',
'https://monkeylearn.com/blog/data-cleaning-python/',
'https://www.pythontutorial.net/python-basics/python-write-csv-file/',
'https://www.geeksforgeeks.org/writing-data-from-a-python-list-to-csv-row-wise/',
'https://www.delftstack.com/howto/python/python-clear-file/',
'https://www.geeksforgeeks.org/python-efficient-text-data-cleaning/',
'https://github.com/arsalan-darbandi/Parse-a-plain-text-file-into-a-CSV-file-using-Python',
'https://github.com/etuannv/parse-unstruct-data',
'https://github.com/NakraniN/python-log-parser/blob/master/log_parser.py',
'https://ickc.github.io/pantable/readme/',
'https://pypi.org/project/tabulate/',
'https://pypi.org/project/tabulate/',
'https://pypi.org/project/prettytable/',
'https://stackoverflow.com/questions/32128226/convert-python-pretty-table-to-csv-using-shell-or-batch-command-line',
'https://www.delftstack.com/howto/python/data-in-table-format-python/',
'https://datatofish.com/export-sql-table-to-csv-python/',
'https://datatofish.com/convert-text-file-to-csv-using-python-tool-included/',
'https://pythonguides.com/python-dataframe-to-csv/',
'https://appdividend.com/2020/12/10/how-to-convert-python-list-to-csv-file/',
'https://github.com/anchalraheja/python_prettytable_to_csv/blob/master/prettytabletocsv.py',
'https://stackoverflow.com/questions/28463015/convert-data-to-csv-with-python',
'https://stackoverflow.com/questions/15956169/parsing-a-pipe-delimited-file-in-python',
'https://www.dataquest.io/blog/data-pipelines-tutorial/',
'https://www.pluralsight.com/guides/importing-data-from-tab-delimited-files-with-python',
'http://zevross.com/blog/2014/04/09/extracting-tabular-data-from-a-pdf-an-example-using-python-and-regular-expressions/',
'https://www.symbiosisacademy.org/tutorial-index/pandas-read_csv-custom-separators/',
'https://samukweku.github.io/data-wrangling-blog/spreadsheet/python/pandas/2020/05/08/Small-Multiples.html',
'https://www.simplilearn.com/tutorials/python-tutorial/split-in-python',
'https://www.vipinajayakumar.com/parsing-text-with-python/',
'https://learnpython.com/blog/print-table-in-python/',
'https://www.computerhope.com/issues/ch001721.htm',
'https://github.com/guggio/bbc_news/tree/master/article_to_csv',
'https://www.geeksforgeeks.org/how-to-read-large-text-files-in-python/?ref=rp',
'https://github.com/search?q=python+parsing+txt&type=repositories',
'https://everythingtech.dev/2021/03/python-log-to-csv-with-header-and-rotation/',
'https://www.freecodecamp.org/news/python-strip-how-to-trim-a-string-or-line/' 
]


for link in links:
    
    # print(link)
    print(f'- [{link}]({link})')
    # print('\n')
    
    
    




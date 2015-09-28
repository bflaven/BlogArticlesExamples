
# Convert .csv to .xml or .xliff
=============================================

This very simple script, using PHP command line, enables to convert a csv file into a .xliff file used in Symfony or into a .xml file generally used in mobile development.



## Installation
---------------------
Download the directory convert-csv-2-xml-or-xliff.



## Usage
--------------

NOTE: I have left a sample data in csv folder and in the dest folder. The dest folder is where the .xml or .xliff will be outputted.

1. **Add your own CSV** with your own columns eg TYPE,STRING,FR,EN
2. **Define the configuration you want.** See // ---- File output. You can choose between .xml or .xliff. Feel free to add your template in the folder <b>template</b>
3. **Define the parameters for reading your CSV.** See // ---- Reading the CSV
4. **Open the console and go the folder**
```
cd /[your-path]/convert-csv-2-xml-or-xliff/
```

5. **Run the following command**
```
php convert-csv-2-xml-or-xliff.php
```


## For more information
------------------------------------
Feel free to check in French some articles @
[Flaven.net](http://flaven.fr//)









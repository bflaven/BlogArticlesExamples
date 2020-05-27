
# Python, Anaconda, Worpress, JSON, JSON-SCHEMA - Messy post with few practices and feedback from my P.O experience.

Some eclectic feedback, mix of files, comments and experiments.

<!-- 
[title](link)
 -->


## Some take-aways

Normally, these "explorations" are forgotten as quickly as they appeared. Historically, this is also what awaits us all, sink into oblivion. Except when I decide to wrap the whole stuff with a minimum of work and publish it to keep track of it. This is the purpose of this blog or this github directory.

### Some elements in Python

**Working with Anaconda**
```python
# install Anaconda and check the installation
conda --version

#update conda
conda update -n base -c defaults conda


# create an environment named myOwnPythonEnv_1
# with Python 3.5 version
conda create --name myOwnPythonEnv_1 python=3.5

# create an environment named myOwnPythonEnv_2
# without any specific version of Python
conda create --name myOwnPythonEnv_2


# start the env and get into the env named myOwnPythonEnv_1
conda activate myOwnPythonEnv_2

# get out from an env e.g myOwnPythonEnv_1 or myOwnPythonEnv_2
conda deactivate

# check the import
conda install jsonschema

# check the import
python
import jsonschema
jsonschema.__version__
exit()


# installing librairies such as OpenCV3 and Dependencies
conda install numpy
conda install -c menpo opencv3

# check the import
python
import cv2
cv2.__version__
exit()

# To run a script in python  
python script_in_python.py
```


**Working with python-jsonschema**
```python
# go to the dir
# be sure to have installed first python-jsonschema
cd /to-your-dir-on-your-computer/

# data, schema
# 00_arrays.json, 00_arrays.schema.json
jsonschema -i 00_arrays.json 00_arrays.schema.json

# 01_person.json, 01_person.schema.json
jsonschema -i 01_person.json 01_person.schema.json

# 02_geographical_location.json, 02_geographical_location.schema.json
jsonschema -i 02_geographical_location.json 02_geographical_location.schema.json

# 03_faqs.json, 03_faqs.schema.json
jsonschema -i 03_faqs.json 03_faqs.schema.json

```

###Some elements in PHP for WordPress
The plugin Pippin Williamson's WP plugin. See Pippin Williamson's WP plugin in pippinsplugins_import_export_feature_3.php or the article at [Building a settings import and export feature](http://pippinsplugins.com/building-settings-import-export-feature/)

**If you need to output in your theme the values from pippinsplugins_import_export_feature_3.php**
```php

/*
pwsix_settings[text]
pwsix_settings[label]
pwsix_settings[enabled]
*/
/* show the values on front from pippinsplugins_import_export_feature_3.php */

$options = get_option( 'pwsix_settings' );
$pwsix_settings_text = trim(esc_attr($options['text']));
$pwsix_settings_label = trim(esc_attr($options['label']));
$pwsix_settings_enabled = trim(esc_attr($options['enabled']));

    print ('<code>');
            print "\n";
            print (''.$pwsix_settings_text.'');
            print "\n";

            print (''.$pwsix_settings_label.'');
            print "\n";

            print (''.$pwsix_settings_enabled.'');
            print "\n";

    print ('</code>');
```

**The JSON generatde by the plugin pippinsplugins_import_export_feature_3.php**
```json
{"text":"Plugin Text Import 3","label":"Label Text Import 3","enabled":"1"}
```






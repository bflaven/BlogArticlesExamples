# automate_po_job_demo_support


**A post on how to work with efficiency on customer support with the help of Streamlit, Sqlalchemy and keyBert. To answer as quick as possible to your consumer feedback!**

**My first concern is "How can I optimize the support that I currently made as a PO?". I build an application to store mail templates' system.**


If you need to create the environement with conda to let the app work...

```bash
# Conda Environment
conda create --name automate_po_job python=3.9.7
conda info --envs
source activate automate_po_job
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]


# install the libraries required

# install
pip install streamlit
pip install watchdog
pip install sqlalchemy


# or use the requirements automate_po_job_streamlit_sqlalchemy_1.txt
# e.g pip install -r automate_po_job_streamlit_sqlalchemy_1.txt

```



**Files in `automate_po_job_demo_support`**

```bash
.
├── 001_sql_files
│   ├── km_user_support_2.sql
│   ├── km_user_support_pythonspot_1.sql
│   ├── km_user_support_pythonspot_2.sql
│   └── pythonspot_student_1.sql
├── 001_streamlit_clear_value_text_input.py
├── 002_pythonspot
│   ├── config_values
│   │   └── values_conf.py
│   ├── pythonspot_dummy.py
│   ├── pythonspot_query_data.py
│   └── schema_pythonspot_tabledef.py
├── 003_automate_po_job
│   ├── automate_po_job_dummy_1.py
│   ├── automate_po_job_dummy_2.py
│   ├── automate_po_job_dummy_3.py
│   ├── automate_po_job_dummy_4.py
│   ├── automate_po_job_dummy_5.py
│   ├── automate_po_job_dummy_6.py
│   ├── automate_po_job_streamlit_sqlalchemy_example_database_1.sql
│   ├── config_values
│   │   └── values_conf.py
│   └── db_scheme_support_mail.py
├── 004_automate_po_job_streamlit_sqlalchemy_example_database
│   ├── 001_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 002_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 003_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 004_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 009_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 010_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 011_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── 012_automate_po_job_streamlit_sqlalchemy_example_database.py
│   ├── config_values
│   │   └── values_conf.py
│   └── db_scheme_support_mail.py
├── README.md
├── automate_po_job_streamlit_sqlalchemy_1.txt
└── sqlalchemy_data
    ├── km_user_support_2.sqlite3
    ├── km_user_support_pythonspot_1.sqlite3
    ├── km_user_support_pythonspot_2.sqlite3
    └── pythonspot_student_1.sqlite3
```  

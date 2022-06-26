# anaconda_env_management


**Manage python's environments in Anaconda**


### 1. save environment's requirements
```bash
pip freeze > all_in_one_automate_po_job.txt
pip freeze > automate_po_job.txt
pip freeze > nft_insights.txt
pip freeze > speech_to_text.txt
pip freeze > eda_made_easy.txt
```

### 2. if needed, remove environment's anaconda
```bash
# conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
conda env remove -n all_in_one_automate_po_job
conda env remove -n automate_po_job
conda env remove -n nft_insights
conda env remove -n speech_to_text
conda env remove -n eda_made_easy
```


### 3. if needed, install from environment's requirements
```bash
pip install -r web_scraping_selenium_1.txt
pip install -r all_in_one_automate_po_job.txt
pip install -r automate_po_job.txt
pip install -r nft_insights.txt
pip install -r speech_to_text.txt
pip install -r eda_made_easy.txt
```

### 4. Other commands

#### Install the Python environment with anaconda

```bash
[env]
# Conda Environment
conda create --name speech_to_text python=3.9.7
conda info --envs
source activate speech_to_text
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# to export requirements
pip freeze > requirements_speech_to_text.txt


# to install
pip install -r requirements_speech_to_text.txt



# update conda
conda update -n base -c defaults conda


```

#### Git commands memo

```bash
# GIT 2022

# hint: go to the directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples


# hint: know your branch
git branch

# hint: check for status
git status

# hint: for any change just type this command
git add .

# hint: add a commit with a message
git commit -am "add repo"
git commit -am "update files"

# hint: push to Github if your branch on Github is master
git push origin master



# launch sh
sh automate_commit.sh

```

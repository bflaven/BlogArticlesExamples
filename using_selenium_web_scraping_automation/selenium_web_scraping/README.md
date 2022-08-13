
# selenium_web_scraping



### Install the Python environment with anaconda

```bash
[env]
# Conda Environment
conda create --name web_scraping_selenium python=3.9.7
conda info --envs
source activate web_scraping_selenium
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

# to export requirements
pip freeze > web_scraping_selenium.txt


# to install
pip install -r web_scraping_selenium.txt



# update conda
conda update -n base -c defaults conda


```








### Git commands memo

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
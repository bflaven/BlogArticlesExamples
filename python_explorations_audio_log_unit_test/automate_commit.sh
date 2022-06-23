#!/bin/sh
# TO PUSH THE CHANGES
# cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python_explorations_audio_log_unit_test/
# ls -l
# sh automate_commit.sh
# CHECK THE SOURCE FILES
# TO GRAB THE NEW CONTENT
# cd cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python_explorations_audio_log_unit_test/
# git pull
### CONFIG ####

# REPO FOR GITHUB
REPO_NAME="/Users/brunoflaven/Documents/03_git/BlogArticlesExamples/python_explorations_audio_log_unit_test/";

# DESCRIPTION FOR COMMIT
COMMENT="update files";

### // CONFIG ####


echo "*** Automating Git Add, Commit and Push ***"
# pwd
# ls -l
# add a line
echo
echo "--- variables"
echo

echo $REPO_NAME
echo $COMMENT


# add a line
echo
echo "--- script"
echo
echo "cd $REPO_NAME"
cd $REPO_NAME
echo

# check for status
git status

# for any change just type this command
git add .

# add a commit with a message
git commit -am "$COMMENT"

# push to github if your branch on github is main
git push origin main





# cd $REPO_NAME


### ---  DONE --- ###
exit 0;
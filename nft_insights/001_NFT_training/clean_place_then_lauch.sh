#!/bin/bash
# cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights/001_NFT_training/
# sh clean_place_then_lauch.sh
#
STRING_BEGIN="\n\n=== BEGIN STARTING ===n\n"
STRING_END="\n\n=== IT IS DONE ===\n\n"
STRING_SEP="\n\n==="
STRING_CLEANED="\n\n::: The place is cleaned :::\n\n"
STRING_MADE="\n\n::: The nft are made :::\n\n"
#BEGIN
echo "$STRING_BEGIN"
############### \/ 

# command
rm -R images
rm -R metadata
echo "$STRING_CLEANED"

#launch python
python nft_create_2.py
echo "$STRING_MADE"



############### /\ 
echo "$STRING_END"
#END
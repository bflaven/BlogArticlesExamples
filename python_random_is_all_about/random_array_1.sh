#!/bin/bash


# cd /Users/brunoflaven/Documents/02_copy/_random_is_all_about/
# sh random_array_1.sh


# array with domains
DOMAINS=("ard.de" "zdf.de" "google.de" "microsoft.com" "spiegel.de" "heise.de" "reddit.com" "imgur.com" "wired.com" "slashdot.org" "stackoverflow.com" "blog.fefe.de" "digg.com" "github.com" "cnn.com" "cnbc.com" "youtube.com")

# seed random generator
RANDOM=$$$(date +%s)

# pick a random entry from the domain list to check against
DOMAIN_NAME_TO_CHECK=${DOMAINS[$RANDOM % ${#DOMAINS[@]}]}
 
echo "DOMAIN_NAME_TO_CHECK => "$DOMAIN_NAME_TO_CHECK""

# https://www.christianroessler.net/tech/2015/bash-array-random-element.html

# nft_insights


Recently, I had to take an interest in the metaverse, which obviously seems to be the future of the web aka Web3! Incidentally, it was also an opportunity to discover NFTs and blockchain and even more concretely on how to create my own NFT's collection.

**I looked for some resources in Python to generate my own collection. Here is a fraction of this search. For those who don't know what an NFT and some other concepts regarding the NFT ecosystem below you can get quik definition and links to showcase some of today's most famous collections.**


Read the full post on my own website [flaven.net](https://flaven.fr/)]

## Git commands memo

**In 2022, I always forget how to push on GitHub**

```bash
# GIT 2022

# suppose you have set a personal access token
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


# go to the directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights

# move the HEAD to the latest commit of the master banch
git checkout master


# create the directory
git remote add origin nft_insights

# know your branch
git branch


# check for status
git status

# check for status
git add 001_NFT_training


# for any change just type this command
git add .

# add a commit with a message
git commit -am "remove repo"
git commit -am "add repo"
git commit -am "add usecase"
git commit -am "add files"
git commit -am "update files"
git commit -am "add files and update readme"


# push to github if your branch on github is master
git push origin master

```
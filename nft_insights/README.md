# nft_insights


Recently, I had to take an interest in the metaverse, which obviously seems to be the future of the web aka Web3! Incidentally, it was also an opportunity to discover NFTs and blockchain and even more concretely on how to create my own NFT's collection.

**I looked for some resources in Python to generate my own collection. Here is a fraction of this search. For those who don't know what an NFT and some other concepts regarding the NFT ecosystem below you can get quik definition and links to showcase some of today's most famous collections.**


Read the full post on my own website [flaven.net](https://flaven.fr/)

## Git commands memo

**In 2022, I always forget how to push on GitHub**

```bash
# GIT 2022

# hint: suppose you have set a personal access token
# https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


# hint: go to the directory
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights

# hint: move the HEAD to the latest commit of the master banch
git checkout master

# hint: You've added another git repository inside your current repository.
# Clones of the outer repository will not contain the contents of
# the embedded repository and will not know how to obtain it.
# If you meant to add a submodule, use:
git submodule add <url> nft_insights/002_NFT_generator

# hint: If you added this path by mistake, you can remove it from the
index with:
git rm --cached nft_insights/002_NFT_generator


# hint: See "git help submodule" for more information.
git submodule add <url> nft_insights/002_NFT_generator


# hint: my dir list
# 001_NFT_training
# 002_NFT_generator
# 002_NFT_generator_streamlit
# 003_nft_image_generator
# 006_nft_nature_article
# 007_pycasso_nft_generator
# 008_rorschach_mask_project
# 009_treasure_island_project
# 010_frida_kahlo_project


# mkdir 006_nft_nature_article
# mkdir 007_pycasso_nft_generator
# mkdir 008_rorschach_mask_project
# mkdir 009_treasure_island_project
# mkdir 010_frida_kahlo_project





# hint: create a subdirectory in the main repository
# mkdir 003_nft_image_generator
# cd 003_nft_image_generator
# touch README.md
# cd ..






# hint: add to Github
git add 001_NFT_training
git add 002_NFT_generator
git add 002_NFT_generator_streamlit
git add 003_nft_image_generator

# series
git add 006_nft_nature_article
git add 007_pycasso_nft_generator
git add 008_rorschach_mask_project
git add 009_treasure_island_project
git add 010_frida_kahlo_project

# hint: know your branch
git branch


# hint: check for status
git status

# hint: for any change just type this command
git add .

# hint: add a commit with a message
git commit -am "remove repo"
git commit -am "add repo"
git commit -am "add usecase"
git commit -am "add files"
git commit -am "update files"
git commit -am "update readme"
git commit -am "add repo and add readme"
git commit -am "add files and update readme"


# hint: push to github if your branch on github is master
git push origin master

```
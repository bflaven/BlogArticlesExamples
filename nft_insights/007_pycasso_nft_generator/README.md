# 007_pycasso_nft_generator

### 1. Intro

**My subject is to create what is commonly called Generative Art Collections. It is a new way to create a collection of NFTs with scripts. This process is at the origin of the most popular collections such as CryptoPunks, Bored Ape Yacht Club... I looked for some resources in Python to generate my own collection. Here is a fraction of this search. For those who don't know what an NFT and some other concepts regarding the NFT ecosystem, you can read the article published on my own website [flaven.net](https://flaven.fr/) or you can grab the source for each NFT generator and some other resource on this GitHub account.**


### 2. What is an NFT?

An NFT is a tokenized digital asset that can be verified on the blockchain and is non-fungible, meaning it is unique and cannot be easily exchanged for a similar asset. NFTs live on the blockchain, a decentralized global computer network that maintains a public record, they cannot be tampered, destroyed, hacked or counterfeited.

### 3. Requirements

**You need to install Python to take advantage of this NFT generator. Here is the way to install Python on a mac with Homebrew**

To install Homebrew, open Terminal or your favorite OS X terminal emulator and run

```bash
/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/master/install.sh>)"
```

The script will explain what changes it will make and prompt you before the installation begins. Once you’ve installed Homebrew, insert the Homebrew directory at the top of your PATH environment variable. You can do this by adding the following line at the bottom of your ~/.profile file

```bash
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
```

If you have OS X 10.12 (Sierra) or older use this line instead

```bash
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
```

Now, we can install Python 3:

```bash
brew install python
```

This will take a minute or two.

*Source : [SEO Spider General's User Guide](https://docs.python-guide.org/starting/install3/osx/)*

### 4. Create your environment with Conda

**Go to the dir**

It is just I found easier to be in same git directory to create my environment with Conda.

```bash
# go to your directory
cd /[your-path]/007_pycasso_nft_generator
```

**Create your dev env with conda**

```bash

[env]
# Conda Environment
conda create --name nft_insights python=3.9.7
conda info --envs
source activate nft_insights
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

```

**Install packages in your dev env**

```bash
# install the packages in the env

# install
pip install pillow
pip install ipython
pip install matplotlib
pip install seaborn
pip install streamlit

```

**Save python requirements in a file name `nft_image_generator_requirements_1.txt`**

```bash

# show what the requirements
pip freeze > nft_image_generator_requirements_1.txt
pip install -r nft_image_generator_requirements_1.txt

```

### 4. Tree directory

```bash
.
├── README.md
├── config.py
├── data.py
├── generator.py
├── output
│   ├── pycasso-nft-data.json
│   ├── pycasso_nft_1.png
│   ├── pycasso_nft_2.png
│   ├── pycasso_nft_3.png
│   ├── pycasso_nft_4.png
│   ├── pycasso_nft_5.png
│   ├── pycasso_nft_6.png
│   ├── pycasso_nft_7.png
│   ├── pycasso_nft_8.png
│   └── pycasso_nft_9.png
└── pycasso
    ├── background
    │   ├── background_blue_1.png
    │   ├── background_dust_6.png
    │   ├── background_green_4.png
    │   ├── background_orange_2.png
    │   ├── background_pink_5.png
    │   └── background_red_3.png
    ├── eye
    │   ├── picasso_trait_eye_1.png
    │   ├── picasso_trait_eye_2.png
    │   ├── picasso_trait_eye_3.png
    │   ├── picasso_trait_eye_4.png
    │   ├── picasso_trait_eye_5.png
    │   └── picasso_trait_eye_6.png
    ├── eyebrow
    │   ├── picasso_trait_eyebrow_1.png
    │   ├── picasso_trait_eyebrow_2.png
    │   ├── picasso_trait_eyebrow_3.png
    │   ├── picasso_trait_eyebrow_4.png
    │   └── picasso_trait_eyebrow_5.png
    ├── face
    │   ├── picasso_trait_face_1.png
    │   ├── picasso_trait_face_2.png
    │   ├── picasso_trait_face_3.png
    │   ├── picasso_trait_face_4.png
    │   ├── picasso_trait_face_5.png
    │   └── picasso_trait_face_6.png
    ├── mouth
    │   ├── picasso_trait_mouth_1.png
    │   ├── picasso_trait_mouth_2.png
    │   ├── picasso_trait_mouth_3.png
    │   ├── picasso_trait_mouth_4.png
    │   └── picasso_trait_mouth_5.png
    └── nose
        ├── picasso_trait_nose_1.png
        ├── picasso_trait_nose_2.png
        ├── picasso_trait_nose_3.png
        └── picasso_trait_nose_4.png
```




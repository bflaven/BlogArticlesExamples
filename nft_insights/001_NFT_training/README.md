## 001_NFT_training

### 1. Intro

**My subject is to create what is commonly called Generative Art Collections. It is a new way to create a collection of NFTs with scripts. This process is at the origin of the most popular collections such as CryptoPunks, Bored Ape Yacht Club... I looked for some resources in Python to generate my own collection. Here is a fraction of this search. For those who don't know what an NFT and some other concepts regarding the NFT ecosystem, you can read the article published on my own website [flaven.net](https://flaven.fr/) or you can grab the source for each NFT generator and some other resource on this GitHub account.**

Read the full post on my own website [https://flaven.fr/2022/04/how-to-create-your-own-nft-generative-art-collections-with-python/](https://flaven.fr/2022/04/how-to-create-your-own-nft-generative-art-collections-with-python/)

This NFT generator came from [파이썬으로 NFT 만들어보기 Creating an NFT with Python](https://github.com/sonmh79/NFT_training/blob/master/nft_create.py)

You can also find more information in this article [Create Your Own NFT Collection With Python by Edward Jones](https://betterprogramming.pub/create-your-own-nft-collection-with-python-82af40abf99f)

**NFT Example generated with 001_NFT_training**

![NFT Example generated with 001_NFT_training](example_nft.png "NFT Example generated with 001_NFT_training")



### 2. What is an NFT?
An NFT is a tokenized digital asset that can be verified on the blockchain and is non-fungible, meaning it is unique and cannot be easily exchanged for a similar asset. NFTs live on the blockchain, a decentralized global computer network that maintains a public record, they cannot be tampered, destroyed, hacked or counterfeited.


### 3. Requirements
**You need to install Python to take advantage of this NFT generator. Here is the way to install Python on a mac with Homebrew**

To install Homebrew, open Terminal or your favorite OS X terminal emulator and run

```bash
$ /bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/master/install.sh>)"
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
$ brew install python
```

This will take a minute or two.

*Source : [SEO Spider General's User Guide](https://docs.python-guide.org/starting/install3/osx/)*

### 4. Create your environment with Conda

**Go to the dir**

It is just I found easier to be in same git directory to create my environment with Conda.

```bash
# go to your directory
cd /[your-path]/001_NFT_training
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

pip install numpy
pip install pillow
pip install python-dotenv
```

**Save python requirements in a file name `requirements.txt`**

```bash

# show what the requirements
pip freeze > nft_image_generator_requirements_1.txt
pip install -r nft_image_generator_requirements_1.txt




```


### 4. Tree directory

**Tree directory with a sample of generated NFTs. To start your own creation, you can remove the 2 directories: `images`, `metadata`**


**I have also prepared a quick bash script to make the job for you.**
```bash
# go to your directory
cd /[your-path]/001_NFT_training
sh clean_place_then_lauch.sh

```


```bash
.
├── README.md
├── clean_place_then_lauch.sh
├── images # generated images
│   ├── 0.png
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   ├── 6.png
│   ├── 7.png
│   ├── 8.png
│   └── 9.png
├── metadata # generated metadata
│   ├── 0.json
│   ├── 1.json
│   ├── 2.json
│   ├── 3.json
│   ├── 4.json
│   ├── 5.json
│   ├── 6.json
│   ├── 7.json
│   ├── 8.json
│   ├── 9.json
│   └── all-traits.json
├── nft_create_1.py # original scripts
├── nft_create_2.py # modified script 
├── nft_image_generator_requirements_1.txt # the traits
└── scripts
    └── face_parts # the traits, you can replace it by your own traits
        ├── access
        │   ├── acc1.png
        │   ├── acc2.png
        │   └── acc3.png
        ├── beard
        │   ├── beard1.png
        │   ├── beard2.png
        │   ├── beard3.png
        │   ├── beard4.png
        │   ├── beard5.png
        │   ├── beard6.png
        │   ├── beard7.png
        │   └── beard8.png
        ├── ears
        │   ├── ears1.png
        │   ├── ears2.png
        │   ├── ears3.png
        │   └── ears4.png
        ├── eyes
        │   ├── eyes1.png
        │   ├── eyes2.png
        │   ├── eyes3.png
        │   ├── eyes4.png
        │   └── eyes5.png
        ├── face
        │   ├── face1.png
        │   └── face2.png
        ├── hair
        │   ├── hair1.png
        │   ├── hair10.png
        │   ├── hair11.png
        │   ├── hair12.png
        │   ├── hair2.png
        │   ├── hair3.png
        │   ├── hair4.png
        │   ├── hair5.png
        │   ├── hair6.png
        │   ├── hair7.png
        │   ├── hair8.png
        │   └── hair9.png
        ├── mouth
        │   ├── m1.png
        │   ├── m2.png
        │   ├── m3.png
        │   ├── m4.png
        │   ├── m5.png
        │   └── m6.png
        └── nose
            ├── n1.png
            └── n2.png
```


<!-- 
## VIDEOS

[Python, Screaming Frog, SEO, Automate, POC Part 1 Manipulating Data with Streamlit & SQLite with the help of SQLAlchemy](https://www.youtube.com/watch?v=6R0HYHIVVUQ)
[![Python, Screaming Frog, SEO, Automate, POC Part 1 Manipulating Data with Streamlit & SQLite with the help of SQLAlchemy](howto_python_automate_screaming_frog_using_sql_lite_streamlit_good_001.png)](https://www.youtube.com/watch?v=6R0HYHIVVUQ)

[Python, Screaming Frog, SEO, Automate, POC Part 2 Creating Database in SQLite with Streamlit and SQLAlchemy](https://www.youtube.com/watch?v=i_WrW5-i2wY)
[![Python, Screaming Frog, SEO, Automate, POC Part 2 Creating Database in SQLite with Streamlit and SQLAlchemy](howto_python_automate_screaming_frog_using_sql_lite_streamlit_002.png)](https://www.youtube.com/watch?v=i_WrW5-i2wY)

[Python, Screaming Frog, SEO, Automate, POC Part 3 Creating Database in SQLite with Streamlit and SQLAlchemy](https://www.youtube.com/watch?v=PMC36ZGDWQ8)
[![Python, Screaming Frog, SEO, Automate, POC Part 3 Creating Database in SQLite with Streamlit and SQLAlchemy](howto_python_automate_screaming_frog_using_the_streamlit_003.png)](https://www.youtube.com/watch?v=PMC36ZGDWQ8)
 -->

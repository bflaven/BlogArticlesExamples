# 010_frida_kahlo_project
### 1. Intro

**My subject is to create what is commonly called Generative Art Collections. It is a new way to create a collection of NFTs with scripts. This process is at the origin of the most popular collections such as CryptoPunks, Bored Ape Yacht Club... I looked for some resources in Python to generate my own collection. Here is a fraction of this search. For those who don't know what an NFT and some other concepts regarding the NFT ecosystem, you can read the article published on my own website [flaven.net](https://flaven.fr/) or you can grab the source for each NFT generator and some other resource on this GitHub account.**

Read the full post on my own website [https://flaven.fr/2022/04/how-to-create-your-own-nft-generative-art-collections-with-python/](https://flaven.fr/2022/04/how-to-create-your-own-nft-generative-art-collections-with-python/)

*NFT Example generated with 010_frida_kahlo_project*
![NFT Example generated with 010_frida_kahlo_project](fkp_nft_1.png "NFT Example generated with 010_frida_kahlo_project")
#### Frida Kahlo Project

![Frida Kahlo Project](frida_kahlo_project.jpg "Frida Kahlo Project")

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
cd /[your-path]/010_frida_kahlo_project
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
pip install numpy
pip install pillow
pip install streamlit
pip install watchdog
pip install python-dotenv

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
├── fkp
│   ├── background
│   │   ├── fkp_bg_bath.png
│   │   ├── fkp_bg_bath_opposite.png
│   │   ├── fkp_bg_blue.png
│   │   ├── fkp_bg_blue_opposite.png
│   │   ├── fkp_bg_orange.png
│   │   ├── fkp_bg_orange_opposite.png
│   │   ├── fkp_bg_pink.png
│   │   ├── fkp_bg_pink_opposite.png
│   │   ├── fkp_bg_vert.png
│   │   └── fkp_bg_vert_opposite.png
│   ├── cap
│   │   ├── fkp_skull_traits_cap_1.png
│   │   ├── fkp_skull_traits_cap_2.png
│   │   ├── fkp_skull_traits_cap_3.png
│   │   ├── fkp_skull_traits_cap_4.png
│   │   ├── fkp_skull_traits_cap_5.png
│   │   ├── frieda_traits_cap_1.png
│   │   ├── frieda_traits_cap_2.png
│   │   ├── frieda_traits_cap_3.png
│   │   ├── frieda_traits_cap_4.png
│   │   └── frieda_traits_cap_5.png
│   ├── chin_lips
│   │   ├── fkp_frieda_traits_lips_1.png
│   │   ├── fkp_frieda_traits_lips_2.png
│   │   ├── fkp_frieda_traits_lips_3.png
│   │   ├── fkp_frieda_traits_lips_4.png
│   │   ├── fkp_frieda_traits_lips_5.png
│   │   ├── fkp_messi_traits_bear_1.png
│   │   ├── fkp_messi_traits_bear_2.png
│   │   ├── fkp_messi_traits_bear_3.png
│   │   ├── fkp_messi_traits_bear_4.png
│   │   ├── fkp_messi_traits_bear_5.png
│   │   ├── fkp_skull_traits_chin_1.png
│   │   └── fkp_skull_traits_lips_1.png
│   ├── eyes_eyebrows
│   │   ├── fkp_frieda_traits_eyebrows_1.png
│   │   ├── fkp_frieda_traits_eyebrows_2.png
│   │   ├── fkp_frieda_traits_eyebrows_3.png
│   │   ├── fkp_frieda_traits_eyebrows_4.png
│   │   ├── fkp_frieda_traits_eyebrows_5.png
│   │   ├── fkp_messi_traits_eyes_1.png
│   │   ├── fkp_messi_traits_eyes_2.png
│   │   ├── fkp_messi_traits_eyes_3.png
│   │   ├── fkp_messi_traits_eyes_4.png
│   │   ├── fkp_messi_traits_eyes_5.png
│   │   ├── fkp_skull_traits_eyes_1.png
│   │   └── fkp_skull_traits_eyes_2.png
│   ├── hair
│   │   ├── fkp_frieda_traits_hair_1.png
│   │   ├── fkp_frieda_traits_hair_2.png
│   │   ├── fkp_frieda_traits_hair_3.png
│   │   ├── fkp_frieda_traits_hair_4.png
│   │   ├── fkp_frieda_traits_hair_5.png
│   │   ├── fkp_messi_traits_hair_1.png
│   │   ├── fkp_messi_traits_hair_2.png
│   │   ├── fkp_messi_traits_hair_3.png
│   │   ├── fkp_messi_traits_hair_4.png
│   │   └── fkp_messi_traits_hair_5.png
│   └── jewels
│       ├── fkp_frieda_traits_earring_1.png
│       ├── fkp_frieda_traits_earring_2.png
│       ├── fkp_frieda_traits_earring_3.png
│       ├── fkp_frieda_traits_earring_4.png
│       └── fkp_frieda_traits_earring_5.png
├── frida_kahlo_project.jpg
├── generator.py
├── source_dead_rosie.png
├── source_frida_kahlo.png
└── source_lionel_messi.png
```

### 5. Source images

The NFT are a product of random between these 3 images...


#### Frida Kahlo

![Frida Kahlo](source_frida_kahlo.png "Frida Kahlo")

#### Dead Rosie the Riveter

![Dead Rosie the Riveter](source_dead_rosie.png "Dead Rosie the Riveter")

#### Lionel Messi

![Lionel Messi](source_lionel_messi.png "Lionel Messi")

#### Read more

- [Frida Kahlo](https://es.wikipedia.org/wiki/Frida_Kahlo)
- [Dead Rosie](https://en.wikipedia.org/wiki/Rosie_the_Riveter)
- [Lionel Messi](https://es.wikipedia.org/wiki/Lionel_Messi)




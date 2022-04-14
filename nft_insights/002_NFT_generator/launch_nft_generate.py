#!/usr/bin/python
# -*- coding: utf-8 -*-


"""

[env]
# Conda Environment
conda create --name nft_insights python=3.9.7
conda info --envs
source activate nft_insights
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]

[path]
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/nft_insights/002_NFT_generator/

# CAUTION
# removes the ditrectories of of images generated before using the script but but do not remove the source with the traits
rm -R generated_2

[file]
python launch_nft_generate.py [path_input_dir] [path_output_dir] [how_many_do_U_want]

# command_1 by default take the size of the traits
python launch_nft_generate.py source_1/ generated_1/ 35
python launch_nft_generate.py source_2/ generated_2/ 10
python launch_nft_generate.py source_2/ generated_3a/ 12
etc...

[source]
https://github.com/yoyoismee/NFT-generator


[required]
# install

pip install pillow
pip install ipython


# show what the requirements
pip freeze > nft_image_generator_requirements_1.txt
pip install -r nft_image_generator_requirements_1.txt


"""

import argparse
from pathlib import Path
from generator import NFTGenerator

parser = argparse.ArgumentParser()
parser.add_argument("input_dir", help="input dir")
parser.add_argument("output_dir", help="output dir")
parser.add_argument("amount", help="target amount")
parser.add_argument("--animate", action="store_true", help="create animate gif")
parser.add_argument("--n_frame", default=1, help="no frame")
parser.add_argument("--fps", default=4, help="frame per sec")
parser.add_argument("--unique", action="store_true", help="unique")

args = parser.parse_args()

Path(args.output_dir).mkdir(parents=True, exist_ok=True)
nft_gen = NFTGenerator(args.input_dir, animate=args.animate, n_frame=args.n_frame, fps=args.fps,unique=args.unique)
for i in range(int(args.amount)):
    img = nft_gen.generate(save_path=args.output_dir, file_name=str(f'{i + 1}'))


print('GENERATION of NFT has been made!')

#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
[env]
# Conda Environment
conda create --name faststream_kafka python=3.9.13
conda info --envs
source activate faststream_kafka
conda deactivate
# if needed to remove
conda env remove -n [NAME_OF_THE_CONDA_ENVIRONMENT]
# examples
conda env remove -n faststream_kafka


# update conda 
conda update -n base -c defaults conda

# to export requirements
pip freeze > requirements_faststream_kafka.txt


# to install
pip install -r requirements_faststream_kafka.txt



[path]
cd /Users/brunoflaven/Documents/01_work/blog_articles/how_to_use_superset/

[file]
faststream run 001_faststream_serve:app
faststream run basic:app --reload
faststream run basic:app --workers 3


# for faststream
pip install "faststream[kafka]"
pip install faststream[kafka]
pip install faststream

from bs4 import BeautifulSoup


Source: https://faststream.airt.ai/latest/getting-started/
https://pypi.org/project/faststream/

import faststream
import FastStream
import os

# for help
faststream --help

 Usage: faststream [OPTIONS] COMMAND [ARGS]...                                 
                                                                               
 Generate, run and manage FastStream apps to greater development experience.   
                                                                               
╭─ Options ───────────────────────────────────────────────────────────────────╮
│ --version             -v        Show current platform, python and           │
│                                 FastStream version                          │
│ --install-completion            Install completion for the current shell.   │
│ --show-completion               Show completion for the current shell, to   │
│                                 copy it or customize the installation.      │
│ --help                          Show this message and exit.                 │
╰─────────────────────────────────────────────────────────────────────────────╯
╭─ Commands ──────────────────────────────────────────────────────────────────╮
│ docs      AsyncAPI schema commands                                          │
│ run       Run [MODULE:APP] FastStream application.                          │
╰─────────────────────────────────────────────────────────────────────────────╯

faststream --install-completion
faststream --show-completion

"""

from faststream import FastStream
from faststream.kafka import KafkaBroker

broker = KafkaBroker("localhost:9092")

app = FastStream(broker)


@broker.subscriber("test")
async def base_handler(body):
    print(body)






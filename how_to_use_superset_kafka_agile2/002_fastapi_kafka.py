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

# LAUNCH THE API
uvicorn 002_fastapi_kafka:app --reload

http://127.0.0.1:8000


# to install
pip install fastapi
pip install uvicorn
pip install aiokafka
pip install kafka

python -m pip install aiokafka
python -m pip install kafka-python
python -m pip install kafka


# prompt
In python, can you describe the purpose of inside a Analytics Application and next, can you give a simple example suing Kafka with FastAPI ?

"""

from fastapi import FastAPI, Depends, HTTPException
from kafka import KafkaProducer

app = FastAPI()

# Assuming a Kafka topic named 'analytics'
KAFKA_TOPIC = "analytics"
KAFKA_BROKER = "localhost:9092"

# Create a Kafka producer
producer = KafkaProducer(bootstrap_servers=KAFKA_BROKER)

# FastAPI endpoint to publish a message to Kafka
@app.post("/publish/{message}")
async def publish_message(message: str):
    # Send the message to the Kafka topic
    producer.send(KAFKA_TOPIC, value=message.encode("utf-8"))
    return {"status": "Message published successfully"}

# FastAPI endpoint to consume messages from Kafka
@app.get("/consume")
async def consume_messages():
    # This is a simplified example. In a real-world scenario, you would use a Kafka consumer to consume messages.
    return {"status": "Consumed messages"}







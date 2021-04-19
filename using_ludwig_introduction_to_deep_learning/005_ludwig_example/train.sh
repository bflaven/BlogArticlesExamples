#!/bin/sh
# cd cd /Users/brunoflaven/Documents/01_work/blog_articles/_using_ludwig_for_content_management_website/ludwig_van_b_1/
# sh train.sh



# ludwig train \
# 	--dataset train_example_imbdb.csv \
#  	--config_file imdb_model_definition_1.yaml

ludwig train \
	--dataset train_example_imbdb.csv \
 	--config_file imdb_model_definition_2.yaml


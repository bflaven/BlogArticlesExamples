#!/bin/sh
# cd cd /Users/brunoflaven/Documents/01_work/blog_articles/_using_ludwig_for_content_management_website/ludwig_van_b_1/
# sh predict.sh



# MODEL
# ludwig predict --dataset path/to/data.csv --model_path /path/to/model

# ludwig predict \
# 	--dataset predict_example_1_imbdb.csv \
# 	--model_path results/experiment_run/model

# ludwig predict \
# 	--dataset predict_example_2_imbdb.csv \
# 	--model_path results/experiment_run_0/model


# ludwig predict \
# 	--dataset predict_example_2_imbdb.csv \
# 	--model_path results/experiment_run_1/model

# ludwig predict \
# 	--dataset predict_example_2_imbdb.csv \
# 	--model_path results/experiment_run_2/model

ludwig predict \
	--dataset predict_example_2_imbdb.csv \
	--model_path results/experiment_run_3/model

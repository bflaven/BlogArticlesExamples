#!/bin/sh
# cd cd /Users/brunoflaven/Documents/01_work/blog_articles/_using_ludwig_for_content_management_website/ludwig_van_b_1/
# sh visualize.sh


ludwig visualize \
	--visualization learning_curves \
	--training_statistics results/experiment_run/training_statistics.json

# ludwig visualize \
# 	--visualization learning_curves \
# 	--training_statistics results/experiment_run_0/training_statistics.json

# ludwig visualize \
# 	--visualization learning_curves \
# 	--training_statistics results/experiment_run_1/training_statistics.json

# ludwig visualize \
# 	--visualization learning_curves \
# 	--training_statistics results/experiment_run_2/training_statistics.json

# ludwig visualize \
# 	--visualization learning_curves \
# 	--training_statistics results/experiment_run_3/training_statistics.json

# ludwig visualize \
# 	--visualization learning_curves \
# 	--training_statistics results/experiment_run/training_statistics.json


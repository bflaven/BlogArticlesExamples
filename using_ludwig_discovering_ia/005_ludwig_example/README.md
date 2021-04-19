# 005_ludwig_example (Text Classification for Comments)
This example shows how to build a text classifier with Ludwig.


- **1. go to the directory**
``` bash
cd /Volumes/van_van/using_ludwig_discovering_ia/005_ludwig_example/
```

We will use these following commands

- train :: Trains a model
- experiment :: Runs a full experiment training a model and evaluating it
- visualize :: Visualizes experimental results
- predict :: Predicts using a pretrained model


**OTHER COMMANDS**
evaluate :: Evaluate a pretrained model's performance
experiment :: Runs a full experiment training a model and evaluating it
hyperopt :: Perform hyperparameter optimization
serve :: Serves a pretrained model
collect_summary :: Prints names of weights and layers activations to use with other collect commands
collect_weights :: Collects tensors containing a pretrained model weights
collect_activations :: Collects tensors for each datapoint using a pretrained model
export_savedmodel :: Exports Ludwig models to SavedModel
export_neuropod :: Exports Ludwig models to Neuropod
preprocess :: Preprocess data and saves it into HDF5 and JSON format
synthesize_dataset :: Creates synthetic data for tesing purposes


- **2. experiment**
``` bash
# You just have to create a model definition file in YAML format
ludwig experiment --dataset train_example_imbdb.csv --config_file imdb_model_definition_1.yaml
```

- **3. train**
``` bash

# using first model
ludwig train --dataset train_example_imbdb.csv --config_file imdb_model_definition_1.yaml

# using second model
ludwig train --dataset train_example_imbdb.csv --config_file imdb_model_definition_2.yaml
```

- **4. visualize**

``` bash
# Show few statitics
ludwig visualize --visualization learning_curves --training_statistics results/experiment_run/training_statistics.json

ludwig visualize --visualization learning_curves --training_statistics results/experiment_run_0/training_statistics.json


# ludwig visualize --visualization learning_curves --training_statistics results/experiment_run_1/training_statistics.json


# ludwig visualize --visualization learning_curves --training_statistics results/experiment_run_2/training_statistics.json


# ludwig visualize --visualization learning_curves --training_statistics results/experiment_run_3/training_statistics.json
```

- **5. predict**

``` bash
# TRY_1
# ludwig predict --dataset predict_example_1_imbdb.csv --model_path results/experiment_run/model


ludwig predict --dataset predict_example_1_imbdb.csv --model_path results/experiment_run_3/model

ludwig predict --dataset predict_example_2_imbdb.csv --model_path results/experiment_run_3/model


# predict_example_1_imbdb.csv
# predict_example_2_imbdb.csv
```

**005_ludwig_example**
``` bash
.
├── 005_ludwig_example # example_1 
│   ├── imdb_model_definition_1.yaml # first data model
│   ├── imdb_model_definition_2.yaml # second data model
│   ├── imdb_model_definition_3.yaml # third data model
│   ├── predict_example_1_imbdb.csv # predict sample data
│   ├── predict_example_2_imbdb.csv # predict sample data
│   ├── predict.sh # shell script to launch training
│   ├── python_ludwig_api_1.py # using the Programmatic API
│   ├── README.md
│   ├── train.sh # shell script to launch train
│   ├── train_example_imbdb.csv # train sample data
│   └── visualize.sh # shell script to launch visualize


```
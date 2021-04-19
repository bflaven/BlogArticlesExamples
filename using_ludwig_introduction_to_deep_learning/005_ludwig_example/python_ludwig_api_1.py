"""[directory]

cd /Volumes/van_van/using_ludwig_discovering_ia/005_ludwig_example/
python python_ludwig_api_1.py

Source : https://ludwig-ai.github.io/ludwig-docs/api/LudwigModel/


"""


from ludwig.api import LudwigModel
import pandas as pd

df = pd.read_csv('train_example_imbdb.csv')

# OUTPUT
# print(df.head())



imdb_model_definition_1 = {
    'input_features':[
        {'name': 'review', 'type': 'text',
            'level': 'word', 'encoder': 'parallel_cnn'},
    ],
    'output_features': [
        {'name': 'sentiment', 'type': 'category'}
    ]
}
ludwig_model = LudwigModel(imdb_model_definition_1)

# OUTPUT
# print('\n--- imdb_model_definition_1')
# print(imdb_model_definition_1)


# Train
# file_path = "train_example_imbdb.csv"
# train_stats, _, _  = ludwig_model.train(dataset=file_path)


# Already trained model
model_dir = "results/experiment_run_3/model"
ludwig_model = LudwigModel.load(model_dir)

# Predict_1
file_path = "predict_example_1_imbdb.csv"
predictions, _ = ludwig_model.predict(dataset=file_path)

# OUTPUT
print(predictions)

# Predict_2
# dataframe = pd.read_csv('predict_example_2_imbdb.csv')
# predictions, _ = ludwig_model.predict(dataset=dataframe)
# # OUTPUT
# print(predictions)





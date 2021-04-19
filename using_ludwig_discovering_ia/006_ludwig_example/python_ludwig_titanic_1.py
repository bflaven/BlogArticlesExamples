"""[directory]

cd /Volumes/van_van/using_ludwig_discovering_ia/002b_ludwig_example/
python python_ludwig_titanic_1.py


"""


from ludwig.api import LudwigModel
import pandas as pd
import yaml
import warnings

# pd.set_option('display.max_rows', 1000)
pd.set_option('display.max_rows', 200)
warnings.filterwarnings('ignore')

model_definition = yaml.load(
    '''
input_features:
    -
        name: Pclass
        type: category
    -
        name: Sex
        type: category
    -
        name: Age
        type: numerical
        missing_value_strategy: fill_with_mean
    -
        name: SibSp
        type: numerical
    -
        name: Parch
        type: numerical
    -
        name: Fare
        type: numerical
        missing_value_strategy: fill_with_mean
    -
        name: Embarked
        type: category

output_features:
    -
        name: Survived
        type: binary
'''
)


ludwig_model = LudwigModel(model_definition)
trainning_set = pd.read_csv('train.csv', index_col=False)

# OUTPUT
# print("\n--- trainning_set ")
# print(trainning_set)
# training
train_stats, _, _ = ludwig_model.train(dataset=trainning_set)

# OUTPUT
# print("\n--- train_stats ")
# print(train_stats)

# TEST_1
# test_set = pd.read_csv('test_1.csv', index_col=False)
# predictions = ludwig_model.predict(test_set)
# print("\n--- predictions ")
# print(predictions)

# TEST_2
test_set = pd.read_csv('test_2.csv', index_col=False)
predictions = ludwig_model.predict(test_set)
print("\n--- predictions ")
print(predictions)


"""[Data Dictionary]

Variable	Definition	Key
survival	Survival	0 = No, 1 = Yes
pclass	Ticket class	1 = 1st, 2 = 2nd, 3 = 3rd
embarked	Port of Embarkation	C = Cherbourg, Q = Queenstown, S = Southampton
sex	Sex	
Age	Age in years
sibsp	# of siblings / spouses aboard the Titanic
parch	# of parents / children aboard the Titanic
ticket	Ticket number
fare	Passenger fare
cabin	Cabin number

"""

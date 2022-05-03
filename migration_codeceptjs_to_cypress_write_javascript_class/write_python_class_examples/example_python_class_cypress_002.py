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
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migration_codeceptsjs_to_cypress_write_javascript_class/


[file]
# using python with no env
python3 example_python_class_cypress_002.py

[source]
https://github.com/bflaven

[required]
# install
# not required
pip install numpy
pip install pillow
pip install streamlit
pip install watchdog
pip install python-dotenv
pip install markdown

# show what the requirements
# not required
pip freeze > nft_image_generator_requirements_1.txt
pip install -r nft_image_generator_requirements_1.txt


"""



# Class_1
# Source https://www.pythonforbeginners.com/basics/classes-in-python
class Cuboid:

    'A simple Cube model.'
    
    def __init__(self, length, breadth, height, weight):
        self.length=length
        self.breadth=breadth
        self.height=height
        self.weight=weight

    def volume(self):
        x = self.length
        y = self.breadth
        z = self.height
        v = x * y * z
        print("The volume is:", v)

    def density(self):
        x = self.length
        y = self.breadth
        z = self.height
        v = x * y * z
        d = self.weight / v
        print("Density is:", d)

    def surface_area(self):
        x = self.length
        y = self.breadth
        z = self.height
        s = 2 * (x * y + y * z + x * z)
        print("The surface area is:", s)




# Class_2
# Source https://www.w3schools.com/python/python_classes.asp
class Student:
    
    'A simple student model.'
  
    def __init__(self, name, age, university, program):
        self.name = name
        self.age = age
        self.university = university
        self.program = program
        
    def register(self):
        'Simulate the student registration in an university.'
        print(self.name + " is registred at "+ self.university )

    def pass_exam(self):
        'Simulate the student registration in an university.'
        print(self.name + " has passed exam for "+ self.program )



# Class_3
# Source https://stackoverflow.com/questions/42382100/creating-a-dog-class-in-python
class Dog: 
    
    'A simple dog model.'

    def __init__(self, name, age): 
        'Construct name and age attributes for an instance of Dog'
        self.name = name.title()
        self.age = age

    def sit(self):
        'Simulate a dog sitting in response to a command.'
        print(self.name + " is now sitting.")

    def roll_over(self):
        'Simulate rolling over in response to a command.'
        print(self.name + " rolled over!")


# Class_4
# Source https://iq.opengenus.org/classes-in-python/
class PetDog():
    
    """Your companion in good and bad times."""
    
    def __init__(self, name, age):
        
        """Give this puppy age and name."""
        self.name = name
        self.age = age

    def sit(self):
        
        """Mimic sitting in response to your voice."""
        print(self.name + " is now sitting.")
        
    def stand(self):
        """Mimic standing on your command."""
        print(self.name + " is now standing")

    # add some methods to the class PetDog
    # to growl
    # to bark
    # to scratch
    
    def growl(self):
        """Describe the dog behaviour."""
        print(self.name + " is now growling")

    def bark(self):
        """Describe the dog behaviour."""
        print(self.name + " is now barking")

    def scratch(self):
        """Describe the dog behaviour."""
        print(self.name + " is now scratching")

#
print('\n---  BEGIN ---')


# instatiate Class_1
print('\n~~~ instatiate Class_1')
myCuboid = Cuboid(1,2,4,4.5)
myCuboid.density()
myCuboid.surface_area()
myCuboid.volume()


# instatiate Class_2
print('\n~~~ instatiate Class_2')
p1 = Student("Prisca", 40, "Uni Heidelberg", "Philosophy")
print(p1.name)
print(p1.age)
print(p1.university)
print(p1.program)
p1.register()
p1.pass_exam()


# instatiate Class_3
print('\n~~~ instatiate Class_3')
my_dog = Dog(name='willie', age=6)
print("My dog's name is " + my_dog.name + ".")
print("My dog is " + str(my_dog.age) + " years old.")


# instatiate Class_4
print('\n~~~ instatiate Class_4')
dog1 = PetDog('Medor', 6)
print(dog1.name + " is " + str(dog1.age) + " years old.")

# add some elem
dog1.growl()
dog1.scratch()

dog2 = PetDog('Ravel', 3)
print(dog2.name + " is " + str(dog2.age) + " years old.")

# add some elem
dog2.growl()
dog2.scratch()



print('\n---  END ---')


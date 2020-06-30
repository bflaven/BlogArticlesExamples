# CONDA CHEAT SHEET

- **Command line package and environment manager.**
- **Learn to use conda in 30 minutes at [bit.ly/tryconda](bit.ly/tryconda).**


*TIP: Anaconda Navigator is a graphical interface to use conda. Double-click the Navigator icon on your desktop or in a Terminal or at the Anaconda prompt, type anaconda-navigator*


## 1. Conda basics
```bash
# Verify conda is installed, check version number 
conda info
```


```bash
# Update conda to the current version
conda update conda
```

```bash
# Install a package included in Anaconda 
conda install PACKAGENAME
```

```bash
# Run a package after install, example Spyder* 
spyder
```

```bash
# Update any installed program 
conda update PACKAGENAME
```

*Must be installed and have a deployable command, usually PACKAGENAME

```bash
# Command line help 
# conda COMMANDNAME --help e.g for install
conda install --help

```

## 2. Using environments

```bash
# Create a new environment named py35, install Python 3.5 
conda create --name py35 python=3.5
```

```bash
# Activate the new environment to use it 
For WINDOWS: activate py35
For LINUX, macOS: source activate py35
```

```bash
# Get a list of all my environments, active environment is shown with *
conda env list 
```

```bash
# Make exact copy of an environment 
conda create --clone py35 --name py35-2
```

```bash
# List all packages and versions installed in active environment 
conda list
```

```bash
# List the history of each change to the current environment 
conda list --revisions
```

```bash
# Restore environment to a previous revision 
conda install --revision 2
```

```bash
# Save environment to a text file  of a environment named my_env_conda_test
conda list --explicit > my_env_conda_test.txt
```


```bash
# Delete an environment named my_env_conda_test and everything in it 
conda env remove --name my_env_conda_test
```


```bash
#Deactivate the current environment 

# For WINDOWS: 
deactivate

# For macOS, LINUX:
source deactivate
```

```bash
--- Create environment named my_env_conda_test from a text file 
conda env create --file my_env_conda_test.txt
```


```bash
# Stack commands: create a new environment, name biopython it my_env_conda_test and install the jsonschema package
conda create --name my_env_conda_test jsonschema
```

## 3. Finding conda packages
```bash
# Use conda to search for a package 
conda search PACKAGENAME
```
Source: See list of all packages in Anaconda https://docs.anaconda.com/anaconda/packages/pkg-docs


## 4. Installing and updating packages

```bash
# Install a new package (Jupyter Notebook) in the active environment
conda install jupyter
```

```bash
# Run an installed package (Jupyter Notebook)
jupyter-notebook
```

```bash
# Install a new package (toolz) in a different environment named my_env_conda_test
conda install --name my_env_conda_test toolz
```

```bash
# Update a package in the current environment
conda update scikit-learn
```

```bash
# Install a package (boltons) from a specific channel (conda-forge)
conda install --channel conda-forge boltons
```

```bash
# Remove one or more packages (toolz, boltons) from a specific environment (my_env_conda_test)
conda remove --name my_env_conda_test toolz boltons
```

## 5. Managing multiple versions of Python
```bash
# Install different version of Python in a new environment named py34
conda create --name py34 python=3.4
```


```bash
# Show the locations of all versions of Python that are currently in the path
# NOTE: The first version of Python in the list will be executed.

#For Windows: 
where python 

#For Linux, macOS: 
which -a python
```

```bash
# Switch to the new environment that has a different version of Python 

#For Windows: 
activate py34

#For Linux, macOS: 
source activate py34

```


```bash
# Show version information for the current active Python 
python --version
```


## 6. Specifying version numbers
Ways to specify a package version number for use with conda create or conda install commands, and in meta.yaml files.

| Constraint type      | Specification | Result       |
| -------------        | ------------- | -------------            
| Fuzzy | numpy=1.11       | 1.11.0, 1.11.1, 1.11.2, 1.11.18 etc. 1.11.0 |
| Exact | numpy==1.11 | 1.11.0 | 
| Greater than or equal to OR | "numpy>=1.11" | 1.11.0 or higher | 
| OR | "numpy>=1.11" | "numpy=1.11.1 | 1.11.3" | 1.11.1, 1.11.3 | 
| AND | "numpy>=1.8,<2" | 1.8, 1.9, not 2.0 | 



NOTE: Quotation marks must be used when your specification contains a space or any of these characters: > < | *


## 7. More resources
- [Online Documentation: https://docs.conda.io/en/latest/](https://docs.conda.io/en/latest/)


 



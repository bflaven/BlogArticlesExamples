# setup_js_env_1

The idea is to easily handle a javascript development environment with Node.

Read more in the post: [Prepare a migration from CodeceptJS to Cypress, making the best of the 2 UAT testing frameworks for an webapplication](https://flaven.fr/2022/05/prepare-a-migration-from-codeceptjs-to-cypress-making-the-best-of-the-2-uat-testing-frameworks-for-an-webapplication/)







```bash

# setup_js_env_1

# Step_1: install

# The idea is to load an html file
cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/migration_codeceptjs_to_cypress_write_javascript_class/

# check the requirements
node -v
npm -v


# Step_2: create and go to the dir


mkdir setup_js_env_1
cd setup_js_env_1/


# Step_3: init the project, 2 ways

# Step_3a init the project and create the package.json with no question
npm init -y

# Step_3b init the project and answer to questions
# install generate the package.json
npm init 



# Prepare some elements to cut and paste to fill-up details for your project


# DESCRIPTION: 
# A setup_js_env_1 to develop locally some javascript
# KWS: 
# node, javascript, console, chrome
# AUTHOR: 
# bflaven




# Step_4: create the file index.html

touch index.html


# Step_5 cut and paste in index.html
&lt;html&gt;
   &lt;head&gt;
     &lt;title&gt;Tutorial&lt;/title&gt;
   &lt;/head&gt;
   &lt;body&gt;
     &lt;h1&gt;Welcome&lt;/h1&gt;
       &lt;p&gt;
          This is index page...
       &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;




# Step_6: install a server. I will go finally with http-server. Much more easy to use.

# install another one
npm install -–save-dev http-server






# Step_7: modify package.json file and add a shortcut to start the server

"scripts": {
    "start": "http-server -o"
  },



# Step_8: then you can start the server with the command

npm start


```


/*
node -v
npm install --save-dev fs
npm install --save-dev lodash



cd /Users/brunoflaven/Documents/01_work/blog_articles/asana_hoshin_kanri_strategic_planning/read-file-json
node read_file_1.js


*/



const fs = require('fs')


fs.readFile('./databases.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`)
  } else {
    // parse JSON string to JSON object
    const databases = JSON.parse(data)

    // print all databases
    databases.forEach(db => {
      console.log('db.name: '+db.name+' db.type '+db.type+'')
    })
  }
})

    

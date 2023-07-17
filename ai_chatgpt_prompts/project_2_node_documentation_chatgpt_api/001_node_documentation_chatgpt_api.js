/* 

001_node_documentation_chatgpt_api.js

cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/ai_chatgpt_prompts/project_2_node_documentation_chatgpt_api/


node 001_node_documentation_chatgpt_api.js

# quick and dirty
# PUT YOUR OWN ID FOR YOUR ORGANIZATION
openai.organization = 'YOUR_OPENAI_ORGANIZATION'

# PUT YOUR OWN PAID LICENCE AND DO NOT DISPLAY
openai.api_key = 'YOUR_OPENAI_API_KEY'





*/
/*
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "YOUR_OPENAI_ORGANIZATION",
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey:  "YOUR_OPENAI_API_KEY",


});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

console.log('\n --- RESULT ')
console.log(response)
*/

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    organization: "YOUR_OPENAI_ORGANIZATION",
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey:  "YOUR_OPENAI_API_KEY",


});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "How are you today?",
  // prompt: "Can you make programming for me sometimes?",

});
console.log('\n');
console.log('\n--- ChatGPT answer'+ completion.data.choices[0].text);
console.log('\n');

}

runCompletion();


/* 

001_node_documentation_chatgpt_api.js

cd /Users/brunoflaven/Documents/03_git/BlogArticlesExamples/ai_chatgpt_prompts/project_2_node_documentation_chatgpt_api/


node 004_change_node_documentation_chatgpt_api.js

+ GREAT EXAMPLE FROM OPENAI.COM
https://platform.openai.com/examples

# quick and dirty
# PUT YOUR OWN ID FOR YOUR ORGANIZATION
# OPENAI_ORGANIZATION = 'org-L2P-YOUR_OPENAI_ORGANIZATION'

# PUT YOUR OWN PAID LICENCE AND DO NOT DISPLAY
# OPENAI_API_KEY = 'hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456'





*/

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
   apiKey:  "hj-jh87jk8XXX-YOUR_OPENAI_API_KEY-JqJ8d5456",
});
const openai = new OpenAIApi(configuration);

    async function DoKeywordsFromText () {

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Extract keywords from this text:\n\nZumbi (1655 – November 20, 1695), also known as Zumbi dos Palmares, was a Brazilian quilombola leader, being one of the pioneers of resistance to slavery of Africans by the Portuguese in colonial Brazil. He was also the last of the kings of the Quilombo dos Palmares, a settlement of Afro-Brazilian people who had liberated themselves from enslavement, in the present-day state of Alagoas, Brazil. Zumbi today is revered in Afro-Brazilian culture as a powerful symbol of resistance against the enslavement of Africans in the colony of Brazil.[1]", 
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      });

      // debug
      // console.log(response)
      
      console.log('\n');
      console.log('\n--- ChatGPT');
      console.log(response.data.choices[0].text);
      console.log('\n');


/* 
Keywords: Black-on-black ware, 20th century, 21st century, Puebloan Native American ceramic artists, Northern New Mexico, reduction-fired blackware, pueblo artists, selective burnishing, refractory slip, carving/incising designs, polishing
*/

/*
-Black-on-black ware 
-Puebloan Native American 
-Ceramic Artists 
-Northern New Mexico 
-Reduction Fired Blackware 
-Smooth Surface 
-Selective Burnishing/Refractory Slip  
-Car
*/



    }// EOF


DoKeywordsFromText();

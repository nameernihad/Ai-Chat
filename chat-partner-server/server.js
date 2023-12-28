const express = require('express');
const  OpenAI  = require('openai');
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
dotenv.config()

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());

app.post('/chat',async(req,res)=>{
    try {
        const {prompt} = req.body
        const openai = new OpenAI({
                    apiKey: process.env.OPENAI_API_KEY,
                  });
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role:"assistant",content:prompt}],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

        res.status(200).json(response.choices[0].message.content)
          

    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:"error"})
    }
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

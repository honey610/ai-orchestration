import OpenApi from "openai";
import dotenv from "dotenv";

dotenv.config();

const openapi=new OpenApi({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function callLLM(messages){
   const response=await openapi.chat.completions.create({
        model:"gpt-4o-mini",
        messages:messages,
        temperature: 0, // deterministic
        //  response_format: { type: "json_object" }
    })
    return response.choices[0].message.content;
}
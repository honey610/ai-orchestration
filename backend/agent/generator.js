import { callLLM } from "../services/llmClient.js";
import generatorPrompt from "./prompts/generatorPrompt.js";


export async function runGenerator(plan){
     const messages = [
    { role: "system", content: generatorPrompt },
    {
      role: "user",
      content: JSON.stringify(plan)
    }
  ];

  const response = await callLLM(messages);

  return response;
}
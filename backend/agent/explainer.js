import { callLLM } from "../services/llmClient.js";
import explainerPrompt from "./prompts/explainerPrompt.js";

export async function runExplainer(plan) {
  const messages = [
    { role: "system", content: explainerPrompt },
    {
      role: "user",
      content: JSON.stringify(plan)
    }
  ];

  const response = await callLLM(messages);

  return response;
}

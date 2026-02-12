import { callLLM } from "../services/llmClient.js";
import plannerPrompt from "./prompts/plannerPrompt.js";


export async function runPlanner(userIntent, existingPlan){
    const messages=[

        { role: "system", content: plannerPrompt },
    {
      role: "user",
      content: `
EXISTING_PLAN:
${JSON.stringify(existingPlan || {}, null, 2)}

USER_INTENT:
${userIntent}
      `
    }
  ];

  const response = await callLLM(messages);
    return JSON.parse(response);
}
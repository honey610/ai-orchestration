import { allowedComponents } from "./componentWhitelist.js";

export function validateGeneratedCode(code) {
  if (typeof code !== "string") {
    throw new Error("Generated code must be string");
  }

  // 1️⃣ Block inline styles
  if (code.includes("style=")) {
    throw new Error("Inline styles are not allowed");
  }

  
  // 2️⃣ Block external imports (only allow react + @/components/ui)
const importRegex = /import\s+.*\s+from\s+['"](.*)['"]/g;
let matching;

while ((matching = importRegex.exec(code)) !== null) {
  const importSource = matching[1];

  if (
    importSource !== "react" &&
    importSource !== "@/components/ui"
  ) {
    throw new Error(`External import not allowed: ${importSource}`);
  }
}

  // 3️⃣ Ensure only allowed components are used
  const componentRegex = /<([A-Z][A-Za-z]*)/g;
  let match;

  while ((match = componentRegex.exec(code)) !== null) {
    const componentName = match[1];

    if (
      componentName !== "GeneratedUI" &&
      !allowedComponents.includes(componentName)
    ) {
      throw new Error(`Unauthorized component used: ${componentName}`);
    }
  }

  // 4️⃣ Prevent dangerous JS
  if (
    code.includes("eval(") ||
    code.includes("dangerouslySetInnerHTML") ||
    code.includes("new Function(")
  ) {
    throw new Error("Unsafe JavaScript detected");
  }

  return true;
}

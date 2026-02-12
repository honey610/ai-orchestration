// import {allowedComponents} from "./componentWhitelist.js";


// export function validatePlan(plan){
//     function checkComponent(component) {
//     if (!allowedComponents.includes(component.type)) {
//       throw new Error(`Invalid component: ${component.type}`);
//     }

//     if (component.children) {
//       component.children.forEach(checkComponent);
//     }
//   }

//   plan.components.forEach(checkComponent);
// }

import { allowedComponents } from "./componentWhitelist.js";

export function validatePlan(plan) {
  if (!plan || typeof plan !== "object") {
    throw new Error("Invalid plan structure");
  }

  if (!Array.isArray(plan.components)) {
    throw new Error("Plan must contain components array");
  }

  const seenIds = new Set();

  function validateComponent(component) {
    // Check required fields
    if (!component.id || !component.type) {
      throw new Error("Component must have id and type");
    }

    // Check unique ID
    if (seenIds.has(component.id)) {
      throw new Error(`Duplicate component id: ${component.id}`);
    }
    seenIds.add(component.id);

    // Check whitelist
    if (!allowedComponents.includes(component.type)) {
      throw new Error(`Invalid component type: ${component.type}`);
    }

    // Validate children recursively
    if (component.children && Array.isArray(component.children)) {
      component.children.forEach(validateComponent);
    }
  }

  plan.components.forEach(validateComponent);

  return true;
}

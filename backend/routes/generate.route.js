import express from 'express';
import { runPlanner } from '../agent/planner.js';
import { runGenerator } from '../agent/generator.js';
import { runExplainer } from '../agent/explainer.js';
import { validatePlan } from "../validations/planValidator.js";
import { saveVersion } from "../history/sessionStore.js";
import { validateGeneratedCode } from '../validations/codeValidator.js';


const router = express.Router();

router.post("/", async (req, res) => {
    try{
        const {userIntent, existingPlan} = req.body;
       const plan = await runPlanner(userIntent, existingPlan);

    validatePlan(plan);

    const code = await runGenerator(plan);

//  

    validateGeneratedCode(code);

    const explanation = await runExplainer(plan);

   const savedVersion = saveVersion({ plan, code, explanation });

    res.json({
  versionId: savedVersion.id,
  timestamp: savedVersion.timestamp,
  plan: savedVersion.plan,
  code: savedVersion.code,
  explanation: savedVersion.explanation
});


    }catch(error){
        console.error("Error in /api/generate:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;


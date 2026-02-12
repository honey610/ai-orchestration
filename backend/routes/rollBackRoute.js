import express from "express";
import { getVersionById } from "../history/sessionStore.js";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { versionId } = req.body;

    const version = getVersionById(versionId);

    if (!version) {
      return res.status(404).json({ error: "Version not found" });
    }

    res.json(version);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




export default router;

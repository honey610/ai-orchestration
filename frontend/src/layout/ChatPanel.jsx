
import { useState } from "react";
import axios from "axios";
import ExplanationPanel from "./ExplanationPanel";
import { reusablepanel } from "../reusable/reusable.js";

export default function ChatPanel({
  setPlan,
  setCode,
  setExplanation,
  setVersionId,
  setVersions,
  existingPlan,
  explanation,
  handleNewSession
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  


  const handleGenerate = async () => {
    if (!input.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.post(
        "https://ai-orchestration-utwv.onrender.com/api/generate",
        {
          userIntent: input,
          existingPlan: existingPlan || {}
        }
      );

      setPlan(res.data.plan);
      setCode(res.data.code);
      setExplanation(res.data.explanation);
      setVersionId(res.data.versionId);
     setVersions(prev => [
  { id: res.data.versionId, timestamp: Date.now() },
  ...(prev || [])
]);
    } catch (err) {
      console.error(err);
      setError("Failed to generate UI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div style={{ ...reusablepanel, display: "flex", flexDirection: "column" }}>
      <h3 style={{ marginBottom: "8px" }}>AI Chat</h3>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe the UI you want…"
        rows={4}
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: "14px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
          marginBottom: "8px",
          resize: "vertical"
        }}
      />

      {/* <button
        onClick={handleGenerate}
        disabled={loading || !input.trim()}
        style={{
          padding: "8px 14px",
          fontSize: "14px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
          background: loading ? "#6b7280" : "#111827",
          color: "#ffffff",
          cursor: loading ? "not-allowed" : "pointer",
          marginBottom: "8px"
        }}
      >
        {loading ? "Ai is thinking…" : "Generate"}
      </button> */}
<div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
  <button
    onClick={handleGenerate}
    disabled={loading || !input.trim()}
    style={{
      padding: "8px 14px",
      fontSize: "14px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      background: loading ? "#6b7280" : "#111827",
      color: "#ffffff",
      cursor: loading ? "not-allowed" : "pointer"
    }}
  >
    {loading ? "AI is thinking…" : "Generate"}
  </button>

  <button
    onClick={() => {
      setInput("");
      handleNewSession();
    }}
    disabled={loading}
    style={{
      padding: "8px 14px",
      fontSize: "14px",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      background: "#ffffff",
      color: "#111827",
      cursor: loading ? "not-allowed" : "pointer"
    }}
  >
    New Session
  </button>
</div>
      {error && (
        <div style={{ color: "#b91c1c", fontSize: "13px", marginBottom: "6px" }}>
          {error}
        </div>
      )}

      {/* Explanation Panel stays visible */}
      <ExplanationPanel explanation={explanation} />
    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import { reusablepanel } from "../reusable/reusable.js";

export default function HistoryPanel({
  versions,
  setPlan,
  setCode,
  setExplanation,
  setVersionId,
  setVersions
  
}) {
 

  const fetchHistory = async () => {
    const res = await axios.get("https://ai-orchestration-utwv.onrender.com/api/history");
    setVersions(res.data.reverse()); // latest first
  };

  useEffect(() => {
    fetchHistory();
  }, []); // refetch when versions changes to get latest history

  const handleRollback = async (id) => {
    const res = await axios.post(
      "https://ai-orchestration-utwv.onrender.com/api/rollback",
      { versionId: id }
    );

    setPlan(res.data.plan);
    setCode(res.data.code);
    setExplanation(res.data.explanation);
    setVersionId(res.data.id);
  };

  return (
    <div style={{
    background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  margin: "10px",
  padding: "12px",
  overflowY: "auto",
  ...reusablepanel
    }}>
      <h3>Version History</h3>

      {versions.map((v) => (
        // <div
        //   key={v.id}
        //   style={{
        //     border: "1px solid #ccc",
        //     padding: "8px",
        //     marginBottom: "8px",
        //     cursor: "pointer"
        //   }}
        //   onClick={() => handleRollback(v.id)}
        // >
        //   <div><strong>ID:</strong> {v.id}</div>
        //   <div style={{ fontSize: "12px" }}>
        //     {new Date(v.timestamp).toLocaleTimeString()}
        //   </div>
        // </div>
        <div
  onClick={() => handleRollback(v.id)}
  style={{
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    padding: "10px",
    marginBottom: "8px",
    cursor: "pointer",
    background: "#f9fafb"
  }}
>
  <div style={{ fontSize: "13px", fontWeight: 600 }}>
    Version {v.id.slice(-4)}
  </div>
  <div style={{ fontSize: "12px", color: "#6b7280" }}>
    {new Date(v.timestamp).toLocaleTimeString()}
  </div>
</div>
      ))}
    </div>
  );
}

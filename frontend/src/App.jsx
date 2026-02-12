import { useState } from "react";
import ChatPanel from "./layout/ChatPanel.jsx";
import CodePanel from "./layout/CodePanel.jsx";
import PreviewPanel from "./layout/PreviewPanel.jsx";
import HistoryPanel from "./layout/HistoryLayout.jsx";
import "./App.css";
import "highlight.js/styles/github-dark.css";

function App() {
  const [plan, setPlan] = useState(null);
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [versionId, setVersionId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleNewSession = () => {
  setPlan(null);
  setCode("");
  setExplanation("");
  setVersionId(null);
};

  return (
    <div style={{
  display: "grid",
  gridTemplateColumns: "320px 260px 1fr 1fr",
  height: "100vh"
}}>
      <ChatPanel
        setPlan={setPlan}
        setCode={setCode}
        setExplanation={setExplanation}
        setVersionId={setVersionId}
        existingPlan={plan}
        explanation={explanation}
        handleNewSession={handleNewSession}
      />
      <HistoryPanel
        setPlan={setPlan}
        setCode={setCode}
        setExplanation={setExplanation}
        setVersionId={setVersionId}
      />

      <CodePanel code={code} />

      <PreviewPanel plan={plan} loading={loading} />
    </div>
  );
}

export default App;

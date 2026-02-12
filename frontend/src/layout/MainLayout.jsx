export default function MainLayout({ plan, code, explanation, setPlan, setCode, setExplanation }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ChatPanel setPlan={setPlan} setCode={setCode} setExplanation={setExplanation} />
      <CodePanel code={code} />
      <PreviewPanel plan={plan} />
    </div>
  );
}

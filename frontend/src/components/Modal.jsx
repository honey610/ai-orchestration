export default function Modal({ title = "Modal Title", children }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        padding: "12px",
        background: "#ffffff",
        maxWidth: "400px"
      }}
    >
      <strong>{title}</strong>
      <div style={{ marginTop: "8px" }}>
        {children || "Modal content goes here."}
      </div>
    </div>
  );
}
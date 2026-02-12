export default function Card({ title = "Card", children }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "12px",
        background: "#ffffff"
      }}
    >
      <strong>{title}</strong>
      <div style={{ marginTop: "8px" }}>{children}</div>
    </div>
  );
}
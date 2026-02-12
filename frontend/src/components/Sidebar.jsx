export default function Sidebar({ items = [] }) {
  return (
    <div
      style={{
        width: "200px",
        borderRight: "1px solid #e5e7eb",
        padding: "12px",
        background: "#f9fafb"
      }}
    >
      <strong>Sidebar</strong>
      <ul style={{ marginTop: "8px", paddingLeft: "16px" }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
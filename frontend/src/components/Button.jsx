export default function Button({ label = "Button" }) {
  return (
    <button
      style={{
        padding: "8px 14px",
        borderRadius: "6px",
        border: "1px solid #d1d5db",
        background: "#111827",
        color: "#ffffff",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );
}

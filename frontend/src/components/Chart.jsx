export default function Chart({ label = "Chart Component" }) {
  return (
    <div
      style={{
        height: "120px",
        border: "1px dashed #9ca3af",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#6b7280"
      }}
    >
      {label}
    </div>
  );
}
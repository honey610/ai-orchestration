export default function Navbar({ title = "AI UI Generator" }) {
  return (
    <div
      style={{
        background: "#111827",
        color: "#fff",
        padding: "12px 16px",
        fontSize: "16px",
        fontWeight: 600
      }}
    >
      {title}
    </div>
  );
}
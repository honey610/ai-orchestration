export default function Input({ placeholder = "Enter text" }) {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #d1d5db",
        width: "100%"
      }}
    />
  );
}
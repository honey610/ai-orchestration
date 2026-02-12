import DynamicRenderer from "../renderer/DynamicRenderer";
import { reusablepanel } from "../reusable/reusable";

export default function PreviewPanel({ plan, loading }) {
  const hasPreview = plan && plan.components?.length > 0;

  return (
    <div
      style={{
        ...reusablepanel,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>Live Preview</h3>

      {/* Empty State */}
      {!hasPreview && !loading && (
        <div
          style={{
            height: "200px",
            border: "1px dashed #d1d5db",
            borderRadius: "6px",
            background: "#f9fafb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b7280",
            fontSize: "14px"
          }}
        >
          No preview yet. Generate a UI to see it here.
        </div>
      )}

      {/* Preview */}
      {hasPreview && (
        <div
          style={{
            border: "1px dashed #d1d5db",
            borderRadius: "6px",
            padding: "12px",
            background: "#ffffff"
          }}
        >
          <DynamicRenderer components={plan.components} />
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: "#374151"
          }}
        >
          Updating preview…
        </div>
      )}
    </div>
  );
}
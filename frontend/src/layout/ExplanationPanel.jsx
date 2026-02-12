import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ExplanationPanel({ explanation }) {
  return (
    <div
      style={{
    borderTop: "1px solid #e5e7eb",
    padding: "14px",
    background: "#fafafa",
    overflowY: "auto",
    flex: 1,
    minHeight:"0"
  }}
    >
      <h3 style={{ marginBottom: "10px" }}>AI Explanation</h3>

      {explanation ? (
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            h3: ({ children }) => (
              <h3 style={{ marginTop: "12px", fontSize: "15px" }}>
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                {children}
              </p>
            ),
            li: ({ children }) => (
              <li style={{ fontSize: "14px", marginLeft: "18px" }}>
                {children}
              </li>
            )
          }}
        >
          {explanation}
        </ReactMarkdown>
      ) : (
        <p style={{ color: "#777", fontSize: "14px" }}>
          No explanation yet. Generate or modify UI to see reasoning.
        </p>
      )}
    </div>
  );
}
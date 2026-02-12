import { reusablepanel } from "../reusable/reusable";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function CodePanel({ code }) {
  return (
    <div style={{
  ...reusablepanel,
 
}}>
      <h3>Generated Code</h3>
       <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {` \`\`\`jsx
${code}
\`\`\` `}
      </ReactMarkdown>
    </div>
  );
}
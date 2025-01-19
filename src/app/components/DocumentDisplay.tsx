import React from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "../context/ThemeContext";

type DocumentDisplayType = {
  markdown: string;
};

// DocumentDisplay component renders Markdown content
const DocumentDisplay = ({ markdown }: DocumentDisplayType) => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "#1a1a1a" : "#ffff";

  return (
    <div
      style={{
        height: "80vh",
        overflowY: "auto",
        backgroundColor: bgColor,
        padding: "1em",
        scrollbarWidth: "thin",
      }}
      className="flex flex-col text-white shadow-lg"
    >
      {markdown ? (
        <ReactMarkdown
          className={
            "font-courier " + (theme === "dark" ? "text-white" : "text-black")
          }
          components={{
            // Render paragraphs with specific styles
            p: ({ node, ...props }) => (
              <p
                style={{
                  fontFamily: "Courier New, monospace",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
                {...props}
              />
            ),
            // Render h1 headers with specific styles
            h1: ({ node, ...props }) => (
              <h1
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "0.5em",
                }}
                {...props}
              />
            ),
            // Render h2 headers with specific styles
            h2: ({ node, ...props }) => (
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5em",
                }}
                {...props}
              />
            ),
            // Render unordered lists with padding
            ul: ({ node, ...props }) => (
              <ul style={{ paddingLeft: "1.5em" }} {...props} />
            ),
            // Render list items with margin
            li: ({ node, ...props }) => (
              <li style={{ marginBottom: "0.5em" }} {...props} />
            ),
            // Render blockquotes with specific styles
            blockquote: ({ node, ...props }) => (
              <blockquote
                style={{
                  borderLeft: "4px solid #ccc",
                  paddingLeft: "1em",
                  color: theme === "dark" ? "#f8f8f2" : "#333",
                  fontStyle: "italic",
                }}
                {...props}
              />
            ),
            // Render inline code with specific styles
            code: ({ node, inline, className, ...props }) => {
              return inline ? (
                <code
                  style={{
                    backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
                    color: theme === "dark" ? "#f8f8f2" : "#000",
                    fontFamily: "Courier New, monospace",
                    padding: "0.2em 0.4em",
                    borderRadius: "4px",
                  }}
                  {...props}
                />
              ) : null;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      ) : (
        <p
          className={
            "font-courier " + (theme === "dark" ? "text-white" : "text-black")
          }
        >
          Write some code in the text editor on the left, and hit analyze!{" "}
          <br />
          <br />
          Once analysis is done, the generated documentation will be populated
          on this paper.
        </p> // Render loading message while fetching
      )}
    </div>
  );
};

export default DocumentDisplay;

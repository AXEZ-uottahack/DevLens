import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "../context/ThemeContext";
import { TiEject } from "react-icons/ti";

type DocumentDisplayType = {
  markdown: string;
};

const DocumentDisplay = ({ markdown }: DocumentDisplayType) => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "#1a1a1a" : "#ffff";
  return (
    <div
      style={{
        width: "49vw",
        height: "85vh",
        overflowY: "auto",
        backgroundColor: bgColor,
        marginLeft: "2em",
        padding: "1em",
        marginBottom: "2em",
        marginRight: "1.5em",
        maxWidth: "49vw",
        scrollbarWidth: "thin",
      }}
      className="flex flex-col text-white"
    >
      {markdown ? (
        <ReactMarkdown>{markdown}</ReactMarkdown>
      ) : (
        <p>
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

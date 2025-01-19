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
        height: "86.2vh",
        overflowY: "auto",
        backgroundColor: bgColor,
        padding: "1em",
        scrollbarWidth: "thin",
      }}
      className="flex flex-col text-white shadow-lg"
    >
      {markdown ? (
        <ReactMarkdown>{markdown}</ReactMarkdown>
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

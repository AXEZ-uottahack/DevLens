import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type DocumentDisplayType = {
  markdown: string
}

const DocumentDisplay = ({markdown}: DocumentDisplayType) => {
  return (
    <div style={{
      width: '49vw', height: '85vh', overflowY: 'auto', backgroundColor: '#1a1a1a', marginLeft: "2em",
      padding: '1em', marginBottom: '2em', marginRight: '1.5em', maxWidth: '49vw', scrollbarWidth: 'thin',
    }} className="flex flex-col text-white">
      {markdown ? (
        <ReactMarkdown>{markdown}</ReactMarkdown>
      ) : (
        <p>Loading...</p> // Render loading message while fetching
      )}
    </div>
  );
};

export default DocumentDisplay;

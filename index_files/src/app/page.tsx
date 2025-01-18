"use client"

import dynamic from 'next/dynamic';

import Editor from './components/Editor'
import DiagramBox from './components/DiagramBox';

const TEST_DATA = {
  classes: [
    {
      name: "A",
      attributes: [
        {type: "int", modifier: "-", name: "x"},
        {type: "int", modifier: "-", name: "y"},
        {type: "B[]", modifier: "-", name: "ptr"} 
      ]
    },
    {
      name: "B",
      attributes: [
        {type: "A", modifier: "-", name: "A"}
      ]
    }
  ],
  associations: [
    {
      start: "A",
      end: "B",
      start_m: "1", 
      end_m: "0..*", 
      bidir: true 
    }
  ]
}

export default function Home() {
  return (
    <div>
      <h1>Dev Lens</h1>
      <Editor />
      <DiagramBox classes={TEST_DATA.classes} associations={TEST_DATA.associations}/>
    </div>
  );
}
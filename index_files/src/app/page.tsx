"use client"

import dynamic from 'next/dynamic';

import Editor from './components/Editor'

export default function Home() {
  return (
    <div>
      <h1>Browser Code Editor</h1>
      <Editor />
    </div>
  );
}
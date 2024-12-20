import React from 'react';
import Monaco  from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => {
  return (
    <Monaco
      height="400px"
      width="100%"
      language={language}
      value={code}
      onChange={setCode}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;

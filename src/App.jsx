import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';
import Output from './components/Output';
import axios from 'axios';

function App() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const response = await axios.post('/api/execute', { language, code });
      const { status, output, error } = response.data;
      setOutput(status === 'success' ? output : error);
    } catch (err) {
      setOutput('Error running code.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Online Code Editor</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor code={code} setCode={setCode} language={language} />
      <button onClick={runCode}>Run</button>
      <Output output={output} />
    </div>
  );
}

export default App;


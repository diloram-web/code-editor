import React, { useState } from 'react';
import Editor from "@monaco-editor/react";


const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  
  const runCode = async () => {
    setLoading(true);
    setOutput(''); 

    try {
      const response = await fetch('http://localhost:5000/codeExecution', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language, code }),
      });

      if (!response.ok) {
        throw new Error('Error message in server');
      }

      const data = await response.json();
      setOutput(data.result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' ,backgroundColor:"blue",color:"white"}}>
      <h1>Online Code Editor</h1>
      <p>Выбирете язык и можете писать код потом нажмите кнопку RUN.</p>

      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Выбирете язык:</label>
        <select  style={{width:"100px",height:"30px",borderRadius:"5px",color:"red"}} value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="Go">Go</option>
          <option value="C++">C++</option>
        </select>
      </div>

      {/* Monaco language*/}
      <Editor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />

      {/* button  */}
      <button  onClick={runCode} style={{
         marginTop: '10px',
         width:"90px", 
         height:"30px",
         backgroundColor:"red",
         color:"white" ,
         borderRadius:"5px"
         }}
          disabled={loading}>
        {loading ? 'loading...' : 'Run'}
      </button>

      {/* output*/}
      <div
        style={{
          marginTop: '20px',
          background: '#f0f0f0',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor:"darkblue"
        }}
      >
        
        <h3>Вывод:</h3>
        <pre>{output}</pre>
        
      </div>
    </div>
  );
};

export default CodeEditor;


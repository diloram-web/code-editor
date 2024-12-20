import React from 'react';

const Output = ({ output }) => {
  return (
    <div style={{ marginTop: '20px', background: '#f5f5f5', padding: '10px' }}>
      <h4>Output:</h4>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;

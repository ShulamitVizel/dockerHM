import React, { useState } from 'react';

function getFirstMessage() {
  return "Hello from first function!";
}

const SharedComponent = () => {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Click to get a message:</h2>
      <button onClick={() => setMessage(getFirstMessage())}>
        Get First Message
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
};

export default SharedComponent;

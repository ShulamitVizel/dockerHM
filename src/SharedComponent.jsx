import React, { useState } from 'react';

function getSecondMessage() {
  return "Greetings from second function!";
}

const SharedComponentForFriend = () => {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Click to get a message:</h2>
      <button onClick={() => setMessage(getSecondMessage())}>
        Get Second Message
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
    </div>
  );
};

export default SharedComponentForFriend;

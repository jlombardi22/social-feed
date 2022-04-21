import React, { useState } from "react";
import Messages from "./components/Messages/Messages";
import "./App.css";
function App() {
  const [messages, setMessages] = useState([{ name: "Johnny", message: "Hi" }]);

  function addNewMessage(message) {
    let composeMessage = [message, ...messages];
    setMessages(composeMessage);
  }
  return (
    <div>
      <Messages addNewMessage={addNewMessage} />
    </div>
  );
}

export default App;

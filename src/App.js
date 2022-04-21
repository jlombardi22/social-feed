import React, { useState } from "react";
import Messages from "./components/AddMessage/AddMessageForm";
import MessageCard from "./components/DisplayMessage/MessageCard";
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
      <MessageCard postMade={messages} />
    </div>
  );
}

export default App;

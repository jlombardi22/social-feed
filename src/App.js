import React, { useState } from "react";
import Messages from "./components/AddMessage/AddMessageForm";
import MessageCard from "./components/DisplayMessage/MessageCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
function App() {
  const [messages, setMessages] = useState([{ name: "Johnny", message: "Hi" }]);

  function addNewMessage(message) {
    let composeMessage = [message, ...messages];
    setMessages(composeMessage);
  }
  return (
    <div>
      <NavBar />
      <div className="app-container">
        <Messages addNewMessage={addNewMessage} />
        <MessageCard postMade={messages} />
      </div>
    </div>
  );
}

export default App;

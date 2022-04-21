import React, { useState } from "react";

const Messages = props => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newMessage = {
      name: name,
      message: message,
    };
    console.log(newMessage);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={event => setMessage(event.target.value)}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        style={{ "margin-top": "1em" }}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Messages;

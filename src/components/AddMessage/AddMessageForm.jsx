import React, { useState } from "react";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";

const AddMessageForm = props => {
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
    <Form inline>
      <FormGroup onSubmit={handleSubmit}>
        <Label for="fullName">Name</Label>
        <Input
          id="exampleAddress"
          name="text"
          placeholder="ex... Joe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </FormGroup>
      <Button color="success" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AddMessageForm;

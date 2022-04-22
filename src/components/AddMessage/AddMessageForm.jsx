import React, { useState } from "react";
import { FormGroup, Label, Input, Button, Form, Card, Col } from "reactstrap";

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
    props.addNewMessage(newMessage);
  }

  return (
    <div className="form-card container-fluid">
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="fullName" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                className="add-form-name"
                name="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="post" for="message" sm={2}>
              Post
            </Label>
            <Col className="button-space" sm={10}>
              <Input
                className="add-form-message"
                name="text"
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <Button className="add-button" color="primary">
                Create
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Card>
    </div>
  );
};

export default AddMessageForm;

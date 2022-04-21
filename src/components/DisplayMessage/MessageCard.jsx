import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const MessageCard = props => {
  return (
    <Card>
      <CardBody>
        <CardText>
          {props.postMade.map((message, i) => {
            return (
              <CardTitle key={i}>
                <CardSubtitle>{message.name}</CardSubtitle>
                <CardSubtitle>{message.message}</CardSubtitle>
              </CardTitle>
            );
          })}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MessageCard;

import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import ThumbButton from "./ThumbButton";

const MessageCard = props => {
  return (
    <div className="container-fluid message-card">
      {props.postMade.map((message, i) => {
        return (
          <Card key={i} className="user-card">
            <CardTitle>
              {message.name}
              <CardSubtitle>
                {message.message}
                <CardText className="thumbs">
                  <ThumbButton />
                </CardText>
              </CardSubtitle>
            </CardTitle>
          </Card>
        );
      })}
    </div>
  );
};

export default MessageCard;

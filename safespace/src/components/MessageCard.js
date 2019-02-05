import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";



class MessageCard extends Component {
  render() {
    return (
      <div className='message-card'>
        <Card className='card'>
          <CardBody>
            <CardTitle>Message</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Update</Button><Button>Delete</Button>
          </CardBody>
        </Card>
        <Card className='card'>
          <CardBody>
            <CardTitle>Message</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Update</Button><Button>Delete</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MessageCard;

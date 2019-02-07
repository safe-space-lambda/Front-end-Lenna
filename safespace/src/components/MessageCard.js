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

import MessageList from './MessageList'



class MessageCard extends Component {
    constructor(props) {
    super(props)}
  
    render() {
    return (
      <div className='message-card'>
        <Card className='card'>
          <CardBody>
            <CardTitle>Message</CardTitle>
            <CardText>
             {this.props.message}
            </CardText>
            <Button>Update</Button>
            <Button onClick={e => this.props.deleteMessage(e, this.props.message.userId)}>Delete</Button>
          </CardBody>
        </Card>
        
      </div>
    );
  }

}

export default MessageCard;

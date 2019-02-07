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
      state = {
        updatedMessage: ''
      }

      submit = e => {
        this.setState({ [e.target.name]: e.target.value });
      //   this.setState({
      //     ...this.state,
      //     updatedMessage: ''
      // })
      };
        

    render() {
    return (
      <div className='message-card'>
        <Card className='card'>
          <CardBody style = {{
            backgroundColor:"#DDDDDD",
            boxShadow: "2px 0px 15px -2px rgba(0,0,0,0.75)",
            borderRadius: "10px"}}>
            <CardTitle>Message</CardTitle>
            <CardText>
             {this.props.message.text}
            </CardText>
            <input className="update-input"
            type='text' 
            value= {this.state.updatedMessage} 
            name="updatedMessage"
            onChange= {this.submit} />

            <Button onClick={e=> this.props.updateMessage
              (e, this.props.message.id, 
              {text: this.state.updatedMessage})}>Update
            </Button>

            <Button onClick={e => this.props.deleteMessage(e, this.props.message.id)}>Delete</Button>
          </CardBody>
        </Card>
        
      </div>
    );
  }

}

export default MessageCard;

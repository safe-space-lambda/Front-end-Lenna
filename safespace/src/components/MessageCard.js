import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";



class MessageCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    updatedMessage: ""
  };

  submit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdatedMessage = e => {
    e.preventDefault();
    this.props.updateMessage(e, this.props.message.id, {
      text: this.state.updatedMessage
    });
    this.setState({
      ...this.state,
      updatedMessage: ""
    });
  };

  render() {
    return (
      <div className="message-card">
        <Card className="card">
          <CardBody
            style={{
              backgroundColor: "#DDDDDD",
              boxShadow: "2px 0px 15px -2px rgba(0,0,0,0.75)",
              borderRadius: "10px"
            }}
          >
            <CardTitle
            style={{
              fontWeight: "Bold"
            }}
            >Message</CardTitle>
            <CardText>{this.props.message.text}</CardText>
            <input
              className="update-input"
              type="text"
              value={this.state.updatedMessage}
              name="updatedMessage"
              onChange={this.submit}
            />

            <Button onClick={this.handleUpdatedMessage}>Update</Button>

            <Button
              onClick={e => this.props.deleteMessage(e, this.props.message.id)}
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MessageCard;

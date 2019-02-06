import React, { Component } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";

export class MessageForm extends Component {
    state = {
        message: ''
    }
    handlecreateMessages = e =>
    e.preventdefault();



  render() {
    return (
      <>
        <h3>Add your message: </h3>
        <div className="message-input">
          <form className="msg-input" onSubmit={this.handleCreateMessages}>
            <InputGroup className="input-group">
              <Input 
                type="text"
                />
                <InputGroupAddon addonType="append">
                <InputGroupText>Submit</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>
      </>
    );
  }
}

export default MessageForm;

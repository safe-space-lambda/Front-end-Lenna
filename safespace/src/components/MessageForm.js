import React, { Component } from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

export class MessageForm extends Component {
  render() {
    return (
        <>
        <h3>Add your message: </h3> 
        <div className='message-input'>
    
            <div className="msg-input">
        <InputGroup className='input-group'>
            <Input />
            <InputGroupAddon addonType="append">
          <InputGroupText>Submit</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </div>
    </div>
    </>
    )
  }
}

export default MessageForm

import React, { Component } from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button} from "reactstrap";
import { connect } from 'react-redux';
import { createMessage } from '../actions'

class MessageForm extends Component {
    state = {
        message: ''
    }
    submit = e => {
    e.preventDefault();    
    this.setState({ [e.target.name]: e.target.value });
      };
    handleCreateMessage = e => {
    e.preventDefault();
    this.props.createMessage({text: this.state.message}, 
        this.props.userId, this.props.token)
    }


  render() {
    return (
      <>
        <h3>Add your message: </h3>
        <div className="message-input">
          <form className="msg-input" onSubmit={this.handleCreateMessage}>
            <InputGroup className="input-group">
              <Input 
                type="text"
                value={this.state.message}
                onChange={this.submit}
                name= 'message'
                />
                <InputGroupAddon addonType="append">
                <Button>Submit</Button>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
        userId: state.userId,
        token: state.serverToken,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { createMessage })(MessageForm);


import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMessages, deleteMessage, updateMessage } from '../actions'
import MessageCard from './MessageCard';

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages(this.props.userId, 
            this.props.serverToken);
    }

    deleteMessage = (e , messageID) => {
        e.preventDefault();
        this.props.deleteMessage(messageID, this.props.userId, this.props.serverToken);
    }

    updateMessage = (e, messageID, updatedMessage) => {
        e.preventDefault();
        this.props.updateMessage(messageID, updatedMessage, 
            this.props.userId, this.props.serverToken )
            console.log(updatedMessage)

    }

  render() {
    return (
      <div className="message-container">
        {this.props.messages.map(message => {
            return <MessageCard message={message} key={message.id} 
            deleteMessage={this.deleteMessage} 
            updateMessage={this.updateMessage} />
        })}
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        messages: state.messages,
        userId: state.userId,
        serverToken: state.serverToken,
        fetchMessages: state.fetchMessages
    }
}

export default connect(mapStateToProps, { fetchMessages, 
    deleteMessage, updateMessage })(MessageList);

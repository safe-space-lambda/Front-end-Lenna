import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMessages, deleteMessage, updateMessage } from '../actions'
import MessageCard from './MessageCard';

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages(this.props.userId, 
            this.props.serverToken);
    }

    deleteMessage = (e, userId) => {
        e.preventDefault();
        this.props.deleteMessage(userId);
    }

  render() {
    return (
      <div className="message-container">
        {this.props.messages.map(message => {
            return <MessageCard message={message.text} key={message.userId} 
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

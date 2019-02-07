import React, { Component } from 'react'
import MessageCard from './MessageCard'
import MessageForm from './MessageForm'
import { connect } from 'react-redux'
import MessageList from './MessageList';
  
const Profile = props => {
    return (
       <div className='Profile'>
        <h2>{`Hello ${props.name}`}</h2>
        <MessageForm />
        <MessageList />
       </div>
    );
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
  };
  
  export default connect(mapStateToProps, null)(Profile)

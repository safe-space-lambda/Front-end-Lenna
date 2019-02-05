import React, { Component } from 'react'
import MessageCard from './MessageCard'
import MessageForm from './MessageForm'
  
const Profile = props => {
    return (
       <div className='Profile'>
        <h2>Name</h2>
        <MessageForm />
        <MessageCard user={props.user}/>
       </div>
    );
}

export default Profile
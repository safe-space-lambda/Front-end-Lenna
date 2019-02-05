import React, { Component } from 'react'
import MessageCard from './MessageCard'
  
const Profile = props => {
    return (
       <div className='Profile'>
        <h2>Name</h2>
        <MessageCard user={props.user}/>
       </div>
    );
}

export default Profile
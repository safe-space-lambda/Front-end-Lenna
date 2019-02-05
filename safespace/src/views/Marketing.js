import React, { Component } from 'react'

const Marketing = props => {
    return(
        <div>
          <button onClick={() => props.history.push('/login')}>Login Page</button>
        </div>
    )

}
      
export default Marketing;
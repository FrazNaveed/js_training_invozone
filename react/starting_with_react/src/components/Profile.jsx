import React, { useContext } from 'react';
import {LoginContext} from '../Context/LoginContext'
const Profile = () => {
    const {username} = useContext(LoginContext)
  return (
    <div>
        <h1>Profile Component</h1>
        <h3>Username: {username}</h3>
    </div>
  )
}

export default Profile
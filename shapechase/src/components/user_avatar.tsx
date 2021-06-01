import React from 'react';
import userImage from '../assets/images/user_avatar.png';


function user_avatar() {
    return (
        <div className="user_avatar_wrapper">
          <img src={userImage} className="user_avatar_photo" alt="logo" />
          <p> Username </p>
        </div>
    ); 
    
  }
  
export default user_avatar;

import userImage from '../assets/images/user_avatar.png';

const UserAvatar = () => {
    return (
        <div className="user_avatar_wrapper">
          <img src={userImage} className="user_avatar_photo" alt="logo" />
          <p> Username </p>
        </div>
    ); 
    
  }
  
export default UserAvatar;

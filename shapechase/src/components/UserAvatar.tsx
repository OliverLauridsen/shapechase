import userImage from '../assets/images/user_avatar.png'
import styled from 'styled-components'

const UserAvatar = () => {
    return (
        <StyledUserAvatar className="user_avatar_wrapper">
          <img src={userImage} className="user_avatar_photo" alt="logo" />
          <p> Username </p>
        </StyledUserAvatar>
    ); 
    
  }


const StyledUserAvatar = styled.div`
    & {
    display:flex;
    flex-direction: row;
    border: 1px solid #2C3157;
    border-radius: 10px;
    height:50px;
    width: 75%;
    align-items: center;
    margin: 0 0 30px 25px;

  }
  .user_avatar_photo {
  width:auto;
  height:40px;
  border-radius: 25px;
  margin-right: 15px;
}
`
  
export default UserAvatar;

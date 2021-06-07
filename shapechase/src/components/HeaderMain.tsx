import UserAvatar from './UserAvatar'
import MenuItem from './MenuItem'
import styled from 'styled-components';
  
const HeaderMain = () => {
    return (
        <StyledHeader className="navigation_menu">
            <UserAvatar />
            <MenuItem />
        </StyledHeader>
    ); 
  }

const StyledHeader = styled.header`

    & {
        @media (max-width: 1240px) {
            display: none;

        }

        background-color: #202442;
        height:100vh;
        width:25%;
        padding: 25px;
        

    }
  

`

export default HeaderMain;

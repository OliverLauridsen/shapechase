import styled from 'styled-components'
import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWpforms } from "react-icons/fa"
import { FaHeartbeat } from "react-icons/fa"
import { FaCarrot } from "react-icons/fa"
import { FaChartPie } from "react-icons/fa"
import { FaHome } from "react-icons/fa"

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonText = (props: any) => {
  return <button>  {props.name}</button>;
}

const Menu: FunctionComponent<Props> = ({open}) => {
  return (
    <StyledMenu open={ open } setOpen={() => false} >
        <Link to="/"> <span> <FaHome /> <ButtonText name="Home" /> </span> </Link>
        <Link to="/training-log"> <span> <FaWpforms /> <ButtonText name="Training Log" /> </span> </Link>
        <Link to="/workout-programs"><span> <FaHeartbeat /> <ButtonText name="Workout Programs" /> </span> </Link>
        <Link to="/nutrition"><span> <FaCarrot /> <ButtonText name="Nutrition" /> </span> </Link>
        <Link to="/analytics"> <span> <FaChartPie /> <ButtonText name="Analytics" /> </span> </Link>
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav<Props>`

  & {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #202442;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  span {
      background-color: #202442;
      padding:25px;
      border-radius: 10px;
      text-align: left;
      color: #655E92;
      font-family: 'Assistant';
      align-items: center;
      display: flex;

      svg {
        margin-right: 15px;
        font-size: 25px;
      }

      &:hover {
        background: #2C3157;
        color: #7F5CDA;
        cursor: pointer;


        button {
          background: #2C3157;
          color: #8D93C2;
          cursor: pointer;

        }
      }

      button {
        background-color: #202442;
        color: #655E92;
        border: none;
        font-size: 16px;
        font-family: 'Assistant';
      }
    }
  }


  
  @media (max-width: 1240px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #655E92;
    text-decoration: none;
    transition: color 0.3s linear;
    margin-left:100px;

    @media (max-width: 1240px) {
        font-size: 1.5rem;
        text-align: center;

        }
    
    &:hover {
      color: #655E92;
    }
  }
`;

export default Menu;

import React from 'react';
import { FaWpforms } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";

function ButtonText(props: any) {
    return <button>  {props.name}</button>;
  }
  
function menu_item() {
    return (
        <div className="menu_item_wrapper">
            <span> <FaWpforms /> <ButtonText name="Training Log" /> </span>
            <span> <FaHeartbeat /> <ButtonText name="Workout Programs" /> </span>
            <span> <FaCarrot /> <ButtonText name="Nutrition" /> </span>
            <span> <FaChartPie /> <ButtonText name="Analytics" /> </span>
        </div>

    ); 
    
  }
  
export default menu_item;

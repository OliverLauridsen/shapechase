import { FaWpforms } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { Link } from 'react-router-dom';

const ButtonText = (props: any) => {
    return <button>  {props.name}</button>;
  }
  
const MenuItem = () => {
    return (
        <div className="menu_item_wrapper">
            <Link to="/"> <span> <FaHome /> <ButtonText name="Home" /> </span> </Link>
            <Link to="/training-log"> <span> <FaWpforms /> <ButtonText name="Training Log" /> </span> </Link>
            <Link to="/workout-programs"><span> <FaHeartbeat /> <ButtonText name="Workout Programs" /> </span> </Link>
            <Link to="/nutrition"><span> <FaCarrot /> <ButtonText name="Nutrition" /> </span> </Link>
            <Link to="/analytics"> <span> <FaChartPie /> <ButtonText name="Analytics" /> </span> </Link>
        </div>
    ); 
    
  }
  
export default MenuItem;

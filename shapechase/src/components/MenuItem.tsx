import { FaWpforms } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ButtonText = (props: any) => {
	return <button> {props.name}</button>;
};

const MenuItem = () => {
	return (
		<StyledMenuItem>
			<Link to="/">
				<span>
					<FaHome /> <ButtonText name="Home" />
				</span>
			</Link>
			<Link to="/training-log">
				<span>
					<FaWpforms /> <ButtonText name="Training Log" />
				</span>
			</Link>
			<Link to="/workout-programs">
				<span>
					<FaHeartbeat /> <ButtonText name="Workout Programs" />
				</span>
			</Link>
			<Link to="/nutrition">
				<span>
					<FaCarrot /> <ButtonText name="Nutrition" />
				</span>
			</Link>
			<Link to="/analytics">
				<span>
					<FaChartPie /> <ButtonText name="Analytics" />
				</span>
			</Link>
		</StyledMenuItem>
	);
};

const StyledMenuItem = styled.div`
	& {
		display: flex;
		flex-direction: column;

		span {
			background-color: #202442;
			padding: 25px;
			border-radius: 10px;
			text-align: left;
			color: #655e92;
			font-family: "Assistant";
			align-items: center;
			display: flex;

			svg {
				margin-right: 15px;
				font-size: 25px;
			}

			&:hover {
				background: #2c3157;
				color: #7f5cda;
				cursor: pointer;

				button {
					background: #2c3157;
					color: #8d93c2;
					cursor: pointer;
				}
			}

			button {
				background-color: #202442;
				color: #655e92;
				border: none;
				font-size: 16px;
				font-family: "Assistant";
			}
		}
	}
`;

export default MenuItem;

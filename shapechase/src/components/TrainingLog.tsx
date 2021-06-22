import UserFormInput from "./UserFormInput";
import styled from "styled-components";

const TrainingLog = () => {
	const today = new Date();

	return (
		<div>
			<h2> Training Frequency </h2>
			<small>
				Today: {today.getDate()}
				{today.toLocaleString("default", { month: "long" })}
				{today.getFullYear()}
			</small>
			<StyledUserFormInput />
		</div>
	);
};

const StyledUserFormInput = styled(UserFormInput)`
	font-weight: bold;
	display: flex;
	flex-direction: column;

	label {
		margin: 10px 0;
	}

	input {
		padding: 10px;
		border: none;
		border-radius: 10px;
		background-color: #202442;
		color: white;
		margin-bottom: 20px;
		outline: none;
	}

	button {
		background-color: #7f5cda;
		color: #fff;
		border-radius: 10px;
		border: none;
		padding: 10px 0;

		&:hover {
			cursor: pointer;
		}
	}
`;

export default TrainingLog;

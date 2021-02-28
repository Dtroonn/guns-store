import React from "react";
import styled from "styled-components";

import checkMark from "../../assets/icons/checkMark.svg";

const StyledBody = styled.div`
	display: flex;
	align-items: center;
`;

const StyledCheckbox = styled.input`
	display: none;
	&:checked {
		& ~ label {
			font-weight: 500;
			color: #000;
			&:after {
				background: #ffa621;
				border: 0;
			}
			&:before {
				display: block;
			}
		}
	}
`;

const StyledLabel = styled.label`
	font-size: 14px;
	position: relative;
	padding: 0 0 0 36px;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.6);
	&:after {
		content: "";
		background: #fff;
		border: 1px solid #d9d9d9;
		top: -4px;
		left: 0;
		border-radius: 6px;
		width: 20px;
		height: 20px;
		position: absolute;
		z-index: 1;
	}
	&:before {
		content: "";
		background: url(${checkMark}) center / 100% no-repeat;
		top: 1px;
		left: 5px;
		width: 10px;
		height: 10px;
		position: absolute;
		z-index: 2;
		display: none;
	}
`;

const Checkbox = ({ label, name, value, checked }) => {
	return (
		<StyledBody>
			<StyledCheckbox
				checked={checked}
				id={value}
				name={name}
				value={value}
				type="checkbox"
			/>
			<StyledLabel htmlFor={value}>
				{label} <img src={checkMark} alt="" />
			</StyledLabel>
		</StyledBody>
	);
};

export default Checkbox;

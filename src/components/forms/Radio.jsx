import React from "react";
import styled from "styled-components";

const StyledBody = styled.div`
	display: flex;
	align-items: center;
`;

const StyledRadio = styled.input`
	display: none;
	&:checked {
		& ~ label {
			font-weight: 500;
			color: #000;
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
		background: #ffffff;
		border: 1px solid #d9d9d9;
		top: -4px;
		left: 0;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		position: absolute;
		z-index: 1;
	}
	&:before {
		content: "";
		background: #ffa621;
		top: 1px;
		left: 5px;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		position: absolute;
		z-index: 2;
		display: none;
	}
`;

const Radio = ({ label, name, value, checked }) => {
	return (
		<StyledBody>
			<StyledRadio
				checked={checked}
				id={value}
				name={name}
				value={value}
				type="radio"
			/>
			<StyledLabel htmlFor={value}>{label}</StyledLabel>
		</StyledBody>
	);
};

export default Radio;

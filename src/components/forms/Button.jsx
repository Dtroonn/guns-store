import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: ${({ minWidth }) => minWidth || "46px"};
	height: 46px;
	background: ${({ background }) => background || "#ffa621"};
	border-radius: 6px;
	padding: ${({ padding }) => padding || "0 12px"};
	color: #ffffff;
	font-weight: 500;
	font-size: 16px;
	@media ${({ theme }) => theme.media.smallDevices} {
		height: ${({ heightSD }) => heightSD || "38px"};
		min-width: ${({ minWidthSD }) => minWidthSD || "38px"};
	}
	${({ outline }) =>
		outline &&
		css`
			background: transparent;
			border: 1px solid #e9e9e9;
			color: #000;
		`}
	${({ outline, hv }) =>
		outline &&
		hv &&
		css`
			transition: all 0.4s ease 0s;
			&:hover {
				@media ${({ theme }) => theme.mediaFM.largeDevices} {
					border: 1px solid #ffa621;
				}
			}
		`}
	${({ animate }) =>
		animate &&
		css`
			transition: ${animate};
		`}
	${({ relative }) =>
		relative &&
		css`
			position: relative;
			z-index: 50;
		`}
`;

const Button = (props) => {
	return <StyledButton {...props} />;
};

export default Button;

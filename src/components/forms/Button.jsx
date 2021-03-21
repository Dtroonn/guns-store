import React from "react";
import styled, { css } from "styled-components";

const Button = React.forwardRef((props, ref) => {
	return <StyledButton ref={ref} {...props} />;
});

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
	${({ outline }) =>
		outline &&
		css`
			background: transparent;
			border: 1px solid #e9e9e9;
			color: rgba(0, 0, 0, 0.6);
			${({ dark }) =>
				dark &&
				css`
					border: 1px solid rgba(0, 0, 0, 0.4);
				`}
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

	${({ fw }) =>
		fw &&
		css`
			width: 100%;
		`}

	${({ nbrr }) =>
		nbrr &&
		css`
			border-radius: 6px 0px 0px 6px;
		`}

	${({ nbrl }) =>
		nbrl &&
		css`
			border-radius: 0px 6px 6px 0px;
		`}
`;

export default Button;

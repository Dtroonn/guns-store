import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
	width: 100%;
	display: block;
	appearance: none;
	border: 1px solid #d9d9d9;
	border-radius: 6px !important;
	font-size: 16px;
	height: 46px;
	padding: 0 16px;
	line-height: 44px;
	background: transparent;
	font-weight: ${({ fontWeight }) => fontWeight || "400"};
	text-align: ${({ textAlign }) => textAlign || "left"};
	&:placeholder {
		color: rgba(0, 0, 0, 0.2);
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		font-size: 14px;
		padding: 0 8px;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		font-size: 12px;
	}
	${({ notOutline }) =>
		notOutline &&
		css`
			border: 0;
			line-height: 46px;
			&:placeholder: {
				color: rgba(0, 0, 0, 0.4);
			}
		`}
`;

const TextField = ({ reference, ...props }) => {
	return <StyledInput ref={reference} {...props} />;
};

export default TextField;

import React from "react";
import styled, { css } from "styled-components";

const TextField = React.forwardRef((props, ref) => {
	return (
		<StyledTextField>
			{props.label && (
				<StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
			)}
			<StyledInput id={props.name} ref={ref} {...props} />
			{props.hint && <StyledHint>{props.hint}</StyledHint>}
		</StyledTextField>
	);
});

const StyledTextField = styled.div`
	width: 100%;
`;

const StyledInput = styled.input`
	width: 100%;
	display: block;
	appearance: none;
	border: 1px solid #d9d9d9;
	border-radius: 6px !important;
	font-size: 16px;
	height: 46px;
	padding: ${({ padding }) => padding || "0 16px"};
	line-height: 44px;
	background: transparent;
	font-weight: ${({ fontWeight }) => fontWeight || "400"};
	text-align: ${({ textAlign }) => textAlign || "left"};
	@media ${({ theme }) => theme.media.largeDevices} {
		font-size: 15px;
	}
	&::placeholder {
		color: rgba(0, 0, 0, 0.2);
	}
	&:focus {
		border-color: #ffa621;
		&::placeholder {
			font-size: 0;
		}
	}

	${({ notAdaptive }) =>
		notAdaptive &&
		css`
			font-size: 16px !important;
			padding: ${({ padding }) => padding || "0 16px"} !important;
		`}

	${({ notOutline }) =>
		notOutline &&
		css`
			border: 0;
			line-height: 46px;
			&::placeholder: {
				color: rgba(0, 0, 0, 0.4);
			}
			@media ${({ theme }) => theme.media.smallDevices} {
				font-size: 14px;
				padding: 0 8px;
				${({ paddingSD }) =>
					paddingSD &&
					css`
						padding: ${paddingSD};
					`}
			}
			@media ${({ theme }) => theme.media.extraSmallDevices} {
				font-size: 12px;
			}
		`}

	${({ nbr }) =>
		nbr &&
		css`
			border-radius: 0 !important;
		`}

	${({ nblar }) =>
		nblar &&
		css`
			border-left: 0;
			border-right: 0;
		`}
`;

const StyledLabel = styled.label`
	letter-spacing: 0.02em;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 700;
	display: inline-block;
	margin: 0 0 10px 0;
`;

const StyledHint = styled.div`
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	line-height: 21px;
	margin: 7px 0 0 0;
`;

export default TextField;

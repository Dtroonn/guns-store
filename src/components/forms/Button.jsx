import React from "react";
import styled, { css, keyframes } from "styled-components";

const Button = React.forwardRef(({ showloader, children, ...props }, ref) => {
	return (
		<StyledButton ref={ref} {...props} showloader={showloader}>
			{showloader ? <StyledLoadingSpinner /> : children}
		</StyledButton>
	);
});

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: ${({ minWidth }) => minWidth || "46px"};
	height: 46px;
	background: #ffa621;
	border-radius: 6px;
	padding: ${({ padding }) => padding || "0 12px"};
	color: #ffffff;
	font-weight: 500;
	font-size: 16px;
	transition: all 0.4s ease 0s;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		font-size: 15px;
		height: 40px;
		min-width: 40px;
		padding: 0 6px;
	}
	&:hover {
		@media ${({ theme }) => theme.mediaFM.largeDevices} {
			background: #ffb341;
		}
	}
	${({ outline }) =>
		outline &&
		css`
			background: transparent !important;
			border: 1px solid #e9e9e9;
			color: rgba(0, 0, 0, 0.6);
			&:hover {
				@media ${({ theme }) => theme.mediaFM.largeDevices} {
					border: 1px solid #ffa621;
					color: #ffa621;
				}
			}
			${({ dark }) =>
				dark &&
				css`
					border: 1px solid rgba(0, 0, 0, 0.4);
				`}
		`}

	${({ showloader }) =>
		showloader &&
		css`
			pointer-events: none;
		`}

	${({ active }) =>
		active &&
		css`
			background: #ff8c21 !important;
		`}

	${({ disable }) =>
		disable &&
		css`
			pointer-events: none;
			opacity: 0.5;
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

const loadingSpinnerAnimation = keyframes`
	0% {
	    transform: rotate(0turn);
	  }

	 100% {
	    transform: rotate(1turn);
	  }
`;

const StyledLoadingSpinner = styled.div`
	width: 16px;
	height: 16px;
	border: 3px solid transparent;
	border-top-color: #ffffff;
	border-radius: 50%;
	animation: ${loadingSpinnerAnimation} 1s ease infinite;
`;

export default Button;

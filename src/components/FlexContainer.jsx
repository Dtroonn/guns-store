import React from "react";
import styled, { css } from "styled-components";

const StyledFlex = styled.div`
	display: flex;
	font-size: 0;
	flex-direction: ${(props) => props.direction || "row"};
	align-items: ${(props) => props.align || "stretch"};
	justify-content: ${(props) => props.justify || "stretch"};
	flex: ${({ flex }) => flex || "0 1 auto"};
	margin: ${({ margin }) => margin || "0"};
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: ${({ marginMD, margin }) => marginMD || margin || "0"};
		flex: ${({ flexMD, flex }) => flexMD || flex || "0 1 auto"};
		justify-content: ${({ justifyMD, justify }) =>
			justifyMD || justify || "stretch"};
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		${({ marginSD }) =>
			marginSD &&
			css`
				margin: ${marginSD};
			`}

		${({ directionSD }) =>
			directionSD &&
			css`
				flex-direction: ${directionSD};
			`}

		${({ alignSD }) =>
			alignSD &&
			css`
				align-items: ${alignSD};
			`}

		${({ flexSD }) =>
			flexSD &&
			css`
				flex: ${flexSD};
			`}
	}

	${({ relative }) =>
		relative &&
		css`
			position: relative;
			z-index: ${relative};
		`}
`;

const FlexContainer = (props) => {
	return <StyledFlex {...props} />;
};

export default FlexContainer;

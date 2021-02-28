import React from "react";
import styled, { css } from "styled-components";

const StyledFlex = styled.div`
	display: flex;
	font-size: 0;
	height: ${({ height }) => height || "auto"};
	flex-wrap: ${({ wrap }) => wrap || "nowrap"};
	flex-direction: ${({ direction }) => direction || "row"};
	align-items: ${(props) => props.align || "stretch"};
	justify-content: ${(props) => props.justify || "stretch"};
	flex: ${({ flex }) => flex || "0 1 auto"};
	margin: ${({ margin }) => margin || "0"};
	${({ relative }) =>
		relative &&
		css`
			position: relative;
			z-index: ${relative};
		`}
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: ${({ marginMD, margin }) => marginMD || margin || "0"};
		flex: ${({ flexMD, flex }) => flexMD || flex || "0 1 auto"};
		justify-content: ${({ justifyMD, justify }) =>
			justifyMD || justify || "stretch"};

		${({ directionMD }) =>
			directionMD &&
			css`
				flex-direction: ${directionMD};
			`}
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
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		${({ directionESD }) =>
			directionESD &&
			css`
				flex-direction: ${directionESD};
			`}

		${({ alignESD }) =>
			alignESD &&
			css`
				align-items: ${alignESD};
			`}

		${({ justifyESD }) =>
			justifyESD &&
			css`
				justify-content: ${justifyESD};
			`}
	}
`;

const FlexContainer = (props) => {
	return <StyledFlex {...props} />;
};

export default FlexContainer;

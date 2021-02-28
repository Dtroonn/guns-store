import React from "react";
import styled, { css } from "styled-components";

const StyledFlexContainerColumn = styled.div`
	flex: ${({ flex }) => flex || "0 1 auto"};
	margin: ${({ margin }) => margin || "0"};
	padding: ${({ padding }) => padding || "0"};
	@media ${({ theme }) => theme.media.largeDevices} {
		${({ flexLD }) =>
			flexLD &&
			css`
				flex: ${flexLD};
			`}
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		${({ marginMD }) =>
			marginMD &&
			css`
				margin: ${marginMD};
			`}
		${({ flexMD }) =>
			flexMD &&
			css`
				flex: ${flexMD};
			`}
		${({ orderMD }) =>
			orderMD &&
			css`
				order: ${orderMD};
			`}
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		${({ flexSD }) =>
			flexSD &&
			css`
				flex: ${flexSD};
			`}
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		${({ flexESD }) =>
			flexESD &&
			css`
				flex: ${flexESD};
			`}

		${({ orderESD }) =>
			orderESD &&
			css`
				order: ${orderESD};
			`}

		${({ marginESD }) =>
			marginESD &&
			css`
				margin: ${marginESD};
			`}
	}
`;

const FlexContainerColumn = (props) => {
	return <StyledFlexContainerColumn {...props} />;
};

export default FlexContainerColumn;

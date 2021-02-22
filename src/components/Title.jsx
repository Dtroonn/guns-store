import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.div`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	display: block;
	color: #000;
	line-height: 36px;
	margin: ${({ margin }) => margin || "0"};
	@media ${({ theme }) => theme.media.mediumDevices} {
		font-size: 24px;
		line-height: 34px;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		font-size: 20px;
		line-height: 30px;
	}
	${({ small }) =>
		small &&
		css`
			line-height: 19px;
			font-size: 16px;
			text-transform: none;
			letter-spacing: 0;
		`}
`;

const Title = (props) => {
	return <StyledTitle {...props} />;
};

export default Title;

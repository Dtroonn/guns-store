import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.div`
	font-size: 32px;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	${({ small }) =>
		small &&
		css`
			font-size: 16px;
			text-transform: none;
			letter-spacing: 0;
		`}
`;

const Title = (props) => {
	return <StyledTitle {...props} />;
};

export default Title;

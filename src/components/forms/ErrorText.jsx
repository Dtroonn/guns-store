import React from "react";
import styled from "styled-components";

const ErrorText = ({ children, ...props }) => {
	return <StyledErrorText>{children}</StyledErrorText>;
};

const StyledErrorText = styled.div`
	color: #f00;
	font-size: 15px;
	font-weight: 500;
	line-height: 17px;
	margin: ${({ margin }) => margin || "0"};
`;

export default ErrorText;

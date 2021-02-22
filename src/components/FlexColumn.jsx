import React from "react";
import styled from "styled-components";

const StyledFlexColumn = styled.div`
	flex: ${({ flex }) => flex || "0 1 auto"};
	margin: ${({ margin }) => margin || "0"};
	padding: ${({ padding }) => padding || "0"};
`;

const FlexColumn = (props) => {
	return <div></div>;
};

export default FlexColumn;

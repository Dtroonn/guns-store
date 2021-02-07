import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 1224px;
	margin: 0 auto;
	@media ${({ theme }) => theme.media.largeDevices} {
		max-width: 970px;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		max-width: 750px;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		max-width: none;
		padding: 0 10px;
	}
`;

const Container = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

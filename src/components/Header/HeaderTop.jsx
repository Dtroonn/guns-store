import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FlexContainer } from "../../components";
import InfoBlock from "./InfoBlock.jsx";
import Authentication from "./Authentication.jsx";

import { useBreakpoint } from "../../hooks";

import logo from "../../assets/Logo.svg";

const StyledLogoLink = styled(Link)`
	margin: 0 50px 0 0;
	@media ${({ theme }) => theme.media.largeDevices} {
		margin: 0 30px 0 0;
		flex: 0 0 150px;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		flex: 0 1 140px;
		margin: 0 0 0 34px;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		flex: 0 1 96px;
		margin: 0 0 0 10px;
	}
`;
const StyledLogo = styled.img`
	width: 100%;
`;

const HeaderTop = () => {
	const largeDevices = useBreakpoint("min-width", 991.98);

	return (
		<FlexContainer relative="50" margin="20px 0 35px 0" marginMD="0">
			<StyledLogoLink to="/">
				<StyledLogo src={logo} />
			</StyledLogoLink>
			{largeDevices && (
				<FlexContainer justify="space-between" flex="1 1 auto">
					<InfoBlock margin="0 20px 0 0" />
					<Authentication />
				</FlexContainer>
			)}
		</FlexContainer>
	);
};

export default HeaderTop;

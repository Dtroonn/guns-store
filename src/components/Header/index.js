import React from "react";
import styled from "styled-components";

import { Container } from "../../components";
import Menu from "./Menu.jsx";
import HeaderTop from "./HeaderTop.jsx";
import HeaderBottom from "./HeaderBottom.jsx";

import { useBreakpoint } from "../../hooks";

const Header = () => {
	const largeDevices = useBreakpoint("min-width", 991.98);

	return (
		<StyledHeader>
			{largeDevices && <Menu />}
			<Container>
				<StyledBody>
					{!largeDevices && <Menu />}
					<HeaderTop />
					<HeaderBottom />
				</StyledBody>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	padding: 0 0 30px 0;
	border-bottom: 1px solid #e9e9e9;
	margin: 0 0 70px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0;
		padding: 0;
		border: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		&:after {
			content: "";
			display: block;
			height: 100%;
			width: 100%;
			left: 0;
			top: 0;
			position: absolute;
			z-index: 4;
			background: #ffffff;
			border-bottom: 1px solid #e9e9e9;
		}
	}
`;
const StyledBody = styled.div`
	@media ${({ theme }) => theme.media.mediumDevices} {
		display: flex;
		align-items: center;
	}
`;

export default Header;

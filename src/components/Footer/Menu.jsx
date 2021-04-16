import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { useBreakpoint } from "../../hooks";

import { Title, SlideToggle } from "../../components";
import { ArrowIcon } from "../../components/icons";

const MenuList = ({ items }) => {
	return (
		<StyledList>
			{items.map((item, index) => (
				<StyledListItem key={index}>
					<StyledLink to={`/${item.slug}`}>{item.name}</StyledLink>
				</StyledListItem>
			))}
		</StyledList>
	);
};

const Menu = ({ title, items, ...props }) => {
	const isExtraSmallDevices = useBreakpoint("max-width", 479.98);
	const [isMenuOpenESD, setIsMenuOpenESD] = React.useState(false);

	const toggleIsMenuOpenESD = () => {
		setIsMenuOpenESD((isMenuOpenESD) => !isMenuOpenESD);
	};

	return (
		<StyledMenu {...props}>
			<StyledHeader
				onClick={isExtraSmallDevices ? toggleIsMenuOpenESD : null}
			>
				<Title small>{title}</Title>
				{isExtraSmallDevices && <ArrowIcon active={isMenuOpenESD} />}
			</StyledHeader>
			{isExtraSmallDevices ? (
				<SlideToggle active={isMenuOpenESD}>
					<MenuList items={items} />
				</SlideToggle>
			) : (
				<MenuList items={items} />
			)}
		</StyledMenu>
	);
};

const StyledMenu = styled.div`
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		padding: 16px 0;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		${({ nbt }) =>
			nbt &&
			css`
				border-top: 0;
			`}
	}
`;

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledList = styled.ul`
	padding: 27px 0 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 22px 0 0 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		padding: 15px 0 0 0;
	}
`;

const StyledListItem = styled.li`
	margin: 0 0 10px 0;
	max-width: 180px;
	&:last-child {
		margin: 0;
	}
`;

const StyledLink = styled(Link)`
	color: rgba(0, 0, 0, 0.6);
	font-weight: 500;
	font-size: 16px;
	line-height: 27px;
	transition: all 0.4s ease 0s;
	@media ${({ theme }) => theme.mediaFM.largeDevices} {
		&:hover {
			color: #ffa621;
		}
	}
`;

export default Menu;

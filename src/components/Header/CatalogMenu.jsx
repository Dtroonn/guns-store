import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { MenuIcon } from "../../components/icons";
import { Button } from "../forms";
import SlideToggle from "./SlideToggle.jsx";

import { useBreakpoint, useOutsideClick } from "../../hooks";

const StyledCatalogMenu = styled.div`
	position: relative;
	margin: ${({ margin }) => margin || "0"};
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: ${({ marginSD, margin }) => marginSD || margin || "0"};
	}
`;
const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	color: #fff;
	margin: 0 0 0 8px;
	@media ${({ theme }) => theme.media.mediumDevices} {
		font-size: 18px;
		font-weight: 700;
		margin: 0 20px 0 0;
		color: #000;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}
`;
const StyledMenuWrapper = styled.div`
	background: #ffffff;
	z-index: 50;
	min-width: 312px;
	border-radius: 6px;
	top: 55px;
	left: 0;
	transition: all 0.4s ease 0s;
	box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.1);
	position: absolute;
	transform: scale(0);
	padding: 15px;
	${({ isMenuOpen }) =>
		isMenuOpen &&
		css`
			transform: scale(1);
		`}
`;
const StyledList = styled.ul`
	@media ${({ theme }) => theme.mediaFM.largeDevices} {
		${({ isMenuOpen }) =>
			isMenuOpen &&
			css`
				opacity: 0; ;
			`}
	}
`;
const StyledListItem = styled.li`
	cursor: pointer;
	transition: all 0.4s ease 0s;
	border-radius: 6px;
	padding: 15px 15px;
	&:hover {
		@media ${({ theme }) => theme.mediaFM.largeDevices} {
			background: #ffa621;
			a {
				color: #fff;
			}
		}
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 20px 0;
		position: relative;
		&:after {
			content: "";
			display: block;
			height: 1px;
			width: 200%;
			bottom: 0;
			left: -50%;
			position: absolute;
			background: #e9e9e9;
		}
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		padding: 15px 0;
	}
`;
const StyledLink = styled(Link)`
	transition: all 0.4s ease 0s;
	font-weight: 500;
	font-size: 16px;
	color: #000;
`;

const StyledHeaderMobile = styled.div`
	padding: 24px 0;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:after,
	&:before {
		content: "";
		display: block;
		height: 1px;
		width: 200%;
		left: -50%;
		position: absolute;
		background: #e9e9e9;
	}
	&:after {
		bottom: 0;
	}
	&:before {
		top: 0;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 18px 0;
	}
`;
const StyledMobileArrow = styled.div`
	position: relative;
	height: 14px;
	width: 9px;
	top: 2px;
	transition: all 1s ease 0s;
	&:after,
	&:before {
		content: "";
		display: block;
		height: 3px;
		width: 11px;
		position: absolute;
		background: #000;
		border-radius: 1.5px;
	}
	&:after {
		top: 0;
		transform: rotate(45deg);
	}
	&:before {
		top: 6px;
		transform: rotate(-45deg);
	}
	${({ active }) =>
		active &&
		css`
			transform: rotate(90deg);
		`}
`;

const MenuList = (props) => {
	return (
		<StyledList {...props}>
			<StyledListItem>
				<StyledLink to="/somethingCategory">
					Охолощенное оружие и макеты
				</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">
					Патроны, пули, гильзы
				</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">Релоадинг</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">
					Стволики и бланки
				</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">Развертки</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">Снижение шума</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">
					Уход и инструмент
				</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">ЗИП</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">
					Комплектующие и аксессуары
				</StyledLink>
			</StyledListItem>
			<StyledListItem>
				<StyledLink to="/somethingCategory">Тюнинг</StyledLink>
			</StyledListItem>
		</StyledList>
	);
};

const CatalogMenu = (props) => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const toggleIsMenuOpen = (e) => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	const CatalogMenuRef = React.useRef(null);
	const largeDevices = useBreakpoint("min-width", 991.98);

	useOutsideClick(
		largeDevices ? [CatalogMenuRef] : null,
		setIsMenuOpen,
		false
	);

	return (
		<StyledCatalogMenu ref={CatalogMenuRef} {...props}>
			{largeDevices && (
				<Button
					onClick={toggleIsMenuOpen}
					background={isMenuOpen ? "#FF8C21" : ""}
					animate="all 0.4s ease 0s"
				>
					<MenuIcon active={isMenuOpen} />
					<StyledTitle>Каталог товаров</StyledTitle>
				</Button>
			)}
			{!largeDevices && (
				<StyledHeaderMobile onClick={toggleIsMenuOpen}>
					<StyledTitle>Каталог</StyledTitle>
					<StyledMobileArrow active={isMenuOpen} />
				</StyledHeaderMobile>
			)}
			{largeDevices ? (
				<StyledMenuWrapper isMenuOpen={isMenuOpen}>
					<MenuList isMenuOpen={!isMenuOpen} />
				</StyledMenuWrapper>
			) : (
				<SlideToggle
					margin="0 -1000px"
					padding="0 1000px"
					duration="1s"
					active={isMenuOpen}
				>
					<MenuList />
				</SlideToggle>
			)}
		</StyledCatalogMenu>
	);
};

export default CatalogMenu;

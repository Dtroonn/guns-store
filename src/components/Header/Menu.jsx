import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { MenuIcon } from "../../components/icons";
import Search from "./Search.jsx";
import Authentication from "./Authentication.jsx";
import InfoBlock from "./InfoBlock.jsx";
import CatalogMenu from "./CatalogMenu.jsx";
import { Container } from "../../components";
import { Button } from "../forms";

import { useBreakpoint } from "../../hooks";

const StyledMenu = styled.div`
	background: #f9f9f9;
	padding: 16px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 30px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		padding: 12px 0;
	}
`;
const StyledWrapper = styled.div`
	@media ${({ theme }) => theme.media.mediumDevices} {
		position: fixed;
		top: -120%;
		left: 0;
		overflow: auto;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.7);
		transition: all 0.4s ease 0s;
		z-index: 3;

		${({ active }) =>
			active &&
			css`
				top: 0;
			`}
	}
`;
const StyledBody = styled.nav`
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 136px 0px 40px 0px;
		background: #fff;
		overflow: hidden;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		padding: 82px 0 40px 0;
	}
`;
const StyledList = styled.ul`
	display: flex;
	font-size: 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		position: relative;
		display: block;
		&:after {
			content: "";
			display: block;
			height: 100%;
			width: 200%;
			top: 0;
			left: -50%;
			position: absolute;
			background: #f9f9f9;
		}
	}
`;
const StyledListItem = styled.li`
	margin: 0 28px 0 0;
	&:last-child: {
		margin: 0;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		display: block;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 20px 0;
		margin: 0;
		position: relative;
		z-index: 2;
		&:after {
			content: "";
			display: block;
			height: 1px;
			width: 200%;
			bottom: 0;
			left: -50%;
			position: absolute;
			background: #e9e9e9;
			z-index: 2;
		}
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		padding: 15px 0;
	}
`;
const StyledMenuLink = styled(NavLink)`
	font-weight: 500;
	font-size: 15px;
	color: rgba(0, 0, 0, 0.6);
	transition: all 0.4s ease 0s;
	&.active {
		color: #ffa621;
	}
	@media ${({ theme }) => theme.mediaFM.largeDevices} {
		&:hover {
			color: #ffa621;
		}
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		font-size: 16px;
	}
`;

const Menu = ({ margin }) => {
	const [isActiveIconMenu, setIsActiveIconMenu] = React.useState(false);
	const toggleIsActiveIconMenu = (e) => {
		setIsActiveIconMenu((isActiveIconMenu) => !isActiveIconMenu);
		document.body.classList.toggle("lock");
	};

	React.useEffect(() => {
		return () => {
			document.body.classList.remove("lock");
		};
	}, []);

	const largeDevices = useBreakpoint("min-width", 991.98);

	return (
		<StyledMenu>
			{!largeDevices && (
				<Button
					active={isActiveIconMenu}
					relative
					padding="0"
					onClick={toggleIsActiveIconMenu}
				>
					<MenuIcon active={isActiveIconMenu} />
				</Button>
			)}
			<StyledWrapper active={isActiveIconMenu}>
				<StyledBody>
					<Container>
						{!largeDevices && (
							<Search onSearchSubmit={toggleIsActiveIconMenu} />
						)}
						{!largeDevices && (
							<CatalogMenu
								onClickLink={toggleIsActiveIconMenu}
								margin="30px 0 0 0"
								marginSD="20px 0 0 0"
							/>
						)}
						<StyledList>
							<StyledListItem>
								<StyledMenuLink to="/1">
									Мастерская
								</StyledMenuLink>
							</StyledListItem>
							<StyledListItem>
								<StyledMenuLink to="/2">
									Обучение
								</StyledMenuLink>
							</StyledListItem>
							<StyledListItem>
								<StyledMenuLink to="3">
									Правовые вопросы
								</StyledMenuLink>
							</StyledListItem>
							<StyledListItem>
								<StyledMenuLink to="/4">
									Оптовикам
								</StyledMenuLink>
							</StyledListItem>
							<StyledListItem>
								<StyledMenuLink to="/5">
									Гарантии
								</StyledMenuLink>
							</StyledListItem>
							<StyledListItem>
								<StyledMenuLink to="/6">
									Доставка
								</StyledMenuLink>
							</StyledListItem>
							<StyledListItem>
								<StyledMenuLink to="/7">
									Контакты
								</StyledMenuLink>
							</StyledListItem>
						</StyledList>
						{!largeDevices && <Authentication />}
						{!largeDevices && (
							<InfoBlock
								margin="40px 0 0 0"
								justifyMD="space-between"
								marginSD="30px 0 0 0"
							/>
						)}
					</Container>
				</StyledBody>
			</StyledWrapper>
		</StyledMenu>
	);
};

export default Menu;

import React from "react";
import styled from "styled-components";

import Menu from "./Menu.jsx";

import {
	Container,
	FlexContainer,
	FlexContainerColumn,
	Title,
	Socials,
} from "../../components";

const catalogItems = [
	{ name: "Акции", slug: "sale" },
	{ name: "Охолощенное оружие и макеты", slug: "OhloshOuegieIMaketi" },
];

const informationItems = [
	{ name: "Мастерская", slug: "masterskaya" },
	{ name: "Обучение", slug: "Obychenie" },
];

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<StyledBody>
					<FlexContainer justify="space-between" directionMD="column">
						<FlexContainerColumn
							margin="0 100px 0 0"
							marginMD="50px 0 0 0"
							marginESD="40px 0 0 0"
							flex="0 1 456px"
							flexMD="0 1 auto"
							orderMD="2"
						>
							<FlexContainer
								justify="space-between"
								directionESD="column"
							>
								<FlexContainerColumn
									margin="0 50px 0 0"
									marginESD="0"
								>
									<Menu
										items={catalogItems}
										title="КАТАЛОГ"
									/>
								</FlexContainerColumn>
								<FlexContainerColumn>
									<Menu
										items={informationItems}
										title="ИНФОРМАЦИЯ"
										nbt
									/>
								</FlexContainerColumn>
							</FlexContainer>
						</FlexContainerColumn>
						<FlexContainerColumn
							flex="0 1 610px"
							flexMD="0 1 auto"
							orderMD="1"
						>
							<FlexContainer
								justify="space-between"
								directionESD="column"
							>
								<FlexContainerColumn
									margin="0 50px 0 0"
									marginESD="0 0 40px 0"
								>
									<Title
										margin="0 0 25px 0"
										marginMD="0 0 20px 0"
										small
									>
										МЫ В СОЦ СЕТЯХ
									</Title>
									<Socials />
									<StyledSupportService>
										<Title
											margin="0 0 25px 0"
											marginMD="0 0 20px 0"
											small
										>
											СЛУЖБА ПОДДЕРЖКИ
										</Title>
										<StyledPhoneNumber href="tel:+79670169197">
											+7 967 016 91 97
										</StyledPhoneNumber>
										<StyledWorkHours>
											Ежедневно с 10:00 до 21:00
										</StyledWorkHours>
										<StyledEmail href="mailto:222@papigun.ru">
											222@papigun.ru
										</StyledEmail>
									</StyledSupportService>
								</FlexContainerColumn>
								<FlexContainerColumn>
									<Title
										margin="0 0 25px 0"
										marginMD="0 0 20px 0"
										small
									>
										АДРЕСА МАГАЗИНОВ В МОСКВЕ
									</Title>
									<StyledAdressInformation>
										<StyledAdress>
											м. Китай-город, Старосадский
											переулок, д. 6/12 стр. 1
										</StyledAdress>
										<StyledWorkHours>
											Ежедневно с 10:00 до 21:00
										</StyledWorkHours>
									</StyledAdressInformation>
									<StyledAdressInformation>
										<StyledAdress>
											м. Партизанская, Ярмарка выходного
											дня «Вернисаж» 300-й ряд, 218 место
										</StyledAdress>
										<StyledWorkHours>
											По выходным с 11:00 до 15:00
										</StyledWorkHours>
									</StyledAdressInformation>
								</FlexContainerColumn>
							</FlexContainer>
						</FlexContainerColumn>
					</FlexContainer>
				</StyledBody>
				<StyledFooterBottom>
					<StyledCopyr>
						© 2010-2020 «Папины игрушки». Все права защищены.
					</StyledCopyr>
				</StyledFooterBottom>
			</Container>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	margin: 120px 0 0 0;
	padding: 50px 0 40px 0;
	background: #f9f9f9;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 80px 0 0 0;
		padding: 40px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 50px 0 0 0;
		padding: 30px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 30px 0 0 0;
	}
`;

const StyledBody = styled.div``;

const StyledSupportService = styled.div`
	margin: 60px 0 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 50px 0 0 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 40px 0 0 0;
	}
`;

const StyledPhoneNumber = styled.a`
	font-weight: 500;
	font-size: 16px;
	color: #000;
	display: block;
	margin: 0 0 15px 0;
`;

const StyledEmail = styled(StyledPhoneNumber)`
	margin: 30px 0 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 20px 0 0 0;
	}
`;

const StyledWorkHours = styled.div`
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
`;

const StyledAdressInformation = styled.div`
	margin: 0 0 30px 0;
	max-width: 250px;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 20px 0;
	}
	&:last-child {
		margin: 0;
	}
`;

const StyledAdress = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	margin: 0 0 8px 0;
`;

const StyledFooterBottom = styled.div`
	margin: 55px 0 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 35px 0 0 0;
	}
`;

const StyledCopyr = styled.div`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.6);
	line-height: 27px;
	@media ${({ theme }) => theme.media.mediumDevices} {
		text-align: center;
		font-size: 14px;
		line-height: 21px;
	}
`;

export default Footer;

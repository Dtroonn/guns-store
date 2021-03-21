import React from "react";
import styled, { css } from "styled-components";

import { Container, Title, CartProduct, CartForm } from "../components";

const Cart = () => {
	return (
		<StyledCart>
			<Container>
				<Title>оформление заказа</Title>
				<StyledProducts>
					<Title medium>
						Моя корзина <span>2</span>
					</Title>
					<StyledProductsBody>
						<CartProduct name="Beretta 92 MOD 92 Retay" />
						<CartProduct name="Пуля .308 WIN Barnes TSX" />
					</StyledProductsBody>
					<StyledTotalProductsCost>
						<Title extraSmall>Товаров на сумму:</Title>
						<StyledTotalProductsCostPrice>
							24 750 руб.
						</StyledTotalProductsCostPrice>
					</StyledTotalProductsCost>
				</StyledProducts>
				<StyledFormAndTotal>
					<StyledFormAndTotalColumn>
						<CartForm />
					</StyledFormAndTotalColumn>
					<StyledFormAndTotalColumn>
						<StyledTotalBlock>
							<StyledTotalBlockBody>
								<StyledTotalItem>
									<StyledTotalItemLabel>
										Товары (2)
									</StyledTotalItemLabel>
									<StyledTotalItemLine></StyledTotalItemLine>
									<StyledTotalItemPrice>
										24 950 руб.
									</StyledTotalItemPrice>
								</StyledTotalItem>
								<StyledTotalItem>
									<StyledTotalItemLabel>
										Скидка на товары
									</StyledTotalItemLabel>
									<StyledTotalItemLine></StyledTotalItemLine>
									<StyledTotalItemPrice red>
										- 200 руб.
									</StyledTotalItemPrice>
								</StyledTotalItem>
								<StyledTotalItem>
									<StyledTotalItemLabel>
										Доставка трансп. комп.
									</StyledTotalItemLabel>
									<StyledTotalItemLine></StyledTotalItemLine>
									<StyledTotalItemPrice>
										800 руб.
									</StyledTotalItemPrice>
								</StyledTotalItem>
								<StyledTotalItem>
									<StyledTotalItemLabel>
										В кредит
									</StyledTotalItemLabel>
									<StyledTotalItemLine></StyledTotalItemLine>
									<StyledTotalItemPrice gray>
										от 2500 руб. / мес.
									</StyledTotalItemPrice>
								</StyledTotalItem>
							</StyledTotalBlockBody>
							<StyledTotal>
								<StyledTotalText>итого:</StyledTotalText>
								<StyledTotalPrice>25 550 руб.</StyledTotalPrice>
							</StyledTotal>
						</StyledTotalBlock>
					</StyledFormAndTotalColumn>
				</StyledFormAndTotal>
			</Container>
		</StyledCart>
	);
};

const StyledCart = styled.div`
	position: relative;
`;

const StyledProducts = styled.div`
	margin: 60px 0 100px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 40px 0 80px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 30px 0 60px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 30px 0 40px 0;
	}
`;

const StyledProductsBody = styled.div`
	margin: 40px 0 30px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 30px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 20px 0 20px 0;
	}
`;

const StyledTotalProductsCost = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		display: block;
	}
`;

const StyledTotalProductsCostPrice = styled.div`
	font-size: 24px;
	margin: 0 0 0 50px;
	letter-spacing: 0.02em;
	font-weight: 700;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 12px 0 0 0;
	}
`;

const StyledFormAndTotal = styled.div`
	display: flex;
	@media ${({ theme }) => theme.media.mediumDevices} {
		display: block;
	}
`;

const StyledFormAndTotalColumn = styled.div`
	position: relative;
	&:first-child {
		flex: 1 1 auto;
		@media ${({ theme }) => theme.media.mediumDevices} {
			padding: 0 0 425px 0;
		}
		@media ${({ theme }) => theme.media.extraSmallDevices} {
			padding: 0 0 355px 0;
		}
	}
	&:last-child {
		margin: 0 0 0 24px;
		@media ${({ theme }) => theme.media.mediumDevices} {
			margin: 0;
			position: absolute;
			bottom: 135px;
			width: 100%;
		}
		@media ${({ theme }) => theme.media.smallDevices} {
			padding: 0 10px;
			left: 0;
		}
		@media ${({ theme }) => theme.media.extraSmallDevices} {
			bottom: 140px;
		}
	}
`;

const StyledTotalBlock = styled.div`
	min-width: 392px;
	border-radius: 6px;
	border: 1px solid #e9e9e9;
	max-height: 270px;
	overflow: hidden;
	@media ${({ theme }) => theme.media.mediumDevices} {
		min-width: 300px;
		max-width: 392px;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		border: 0;
	}
`;

const StyledTotalBlockBody = styled.div`
	padding: 24px 20px;
	border-bottom: 1px solid #e9e9e9;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		border: 0;
		padding: 0;
	}
`;

const StyledTotalItem = styled.div`
	display: flex;
	align-items: flex-end;
	margin: 0 0 24px 0;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0 0 20px 0;
	}
	&:last-child {
		margin: 0;
	}
`;

const StyledTotalItemLabel = styled.div`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.6);
`;

const StyledTotalItemLine = styled.span`
	height: 1px;
	background: #e9e9e9;
	margin: 0 4px;
	flex: 1 1 auto;
	min-width: 25px;
`;

const StyledTotalItemPrice = styled.div`
	font-weight: 700;
	font-size: 16px;
	${({ red }) =>
		red &&
		css`
			color: #f00;
		`}
	${({ gray }) =>
		gray &&
		css`
			color: rgba(0, 0, 0, 0.4);
		`}
`;

const StyledTotal = styled.div`
	display: flex;
	font-weight: 700;
	font-size: 24px;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	padding: 24px 20px;
	justify-content: space-between;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 30px 0 0 0;
		font-size: 22px;
		padding: 0;
	}
`;

const StyledTotalText = styled.div`
	margin: 0 20px 0 0;
`;

const StyledTotalPrice = styled.div``;

export default Cart;

import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import productPng from "../assets/Gun.png";

import { Button, TextField } from "../components/forms";
import { MinusIcon, PlusIcon, CrossIcon } from "../components/icons";

const CartProduct = ({ name }) => {
	return (
		<StyledCartProduct>
			<StyledLeft>
				<StyledImageWrapper>
					<StyledImage src={productPng} />
				</StyledImageWrapper>
				<StyledInfo>
					<StyledName>{name}</StyledName>
					<StyledCategory to="/lalka">
						Охолощенное оружие и макеты
					</StyledCategory>
					<StyledRemainingCount>
						Осталось 50 штук
					</StyledRemainingCount>
				</StyledInfo>
			</StyledLeft>
			<StyledRight>
				<StyledCounter>
					<Button minWidth="40px" nbrr>
						<MinusIcon />
					</Button>
					<TextField
						nbr
						nblar
						fontWeight="500"
						padding="0 5px"
						textAlign="center"
						notAdaptive
						type="text"
						defaultValue="50"
					/>
					<Button minWidth="40px" nbrl>
						<PlusIcon />
					</Button>
				</StyledCounter>
				<StyledPrice>
					<StyledCurrentPrice>150 900 руб. </StyledCurrentPrice>
					<StyledOldPrice>16 100 руб.</StyledOldPrice>
				</StyledPrice>
				<StyledCross>
					<CrossIcon />
				</StyledCross>
			</StyledRight>
		</StyledCartProduct>
	);
};

const StyledCartProduct = styled.div`
	display: flex;
	padding: 0 0 30px 0;
	border-bottom: 1px solid #e9e9e9;
	justify-content: space-between;
	font-size: 0;
	margin: 0 0 30px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		flex-direction: column;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		padding: 0 0 20px 0;
		margin: 0 0 20px 0;
	}
	&:last-child {
		margin: 0;
	}
`;

const StyledLeft = styled.div`
	display: flex;
	flex: 0 1 490px;
	margin: 0 100px 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 10px 0;
		flex: 0 1 auto;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 0 20px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		justify-content: space-between;
	}
`;

const StyledRight = styled.div`
	display: flex;
	align-self: flex-start;
	flex: 0 1 510px;
	padding: 20px 10px 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 0 10px 0 0;
		flex: 0 1 auto;
		align-self: flex-end;
		max-width: 420px;
		flex-wrap: wrap;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		max-width: none;
	}
`;

const StyledImageWrapper = styled.div`
	flex: 0 0 184px;
	border: 1px solid #e9e9e9;
	border-radius: 6px;
	margin: 0 24px 0 0;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		flex: 0 0 100px;
		order: 2;
		margin: 0 0 0 24px;
	}
`;

const StyledImage = styled.img`
	max-width: 100%;
`;

const StyledInfo = styled.div`
	padding: 20px 0 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		order: 1;
	}
`;

const StyledName = styled.div`
	font-size: 18px;
	line-height: 24px;
	letter-spacing: 0.02em;
	font-weight: 700;
	margin: 0 0 10px 0;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		font-size: 16px;
		line-height: 21px;
		margin: 0 0 8px 0;
	}
`;

const StyledCategory = styled(Link)`
	font-size: 14px;
	line-height: 24px;
	color: rgba(0, 0, 0, 0.6);
	line-height: 18px;
`;

const StyledRemainingCount = styled.div`
	font-weight: 500;
	font-size: 16px;
	color: #129968;
	margin: 20px 0 0 0;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		font-size: 14px;
		margin: 12px 0 0 0;
	}
	${({ red }) =>
		red &&
		css`
			color: #f00;
		`}
`;

const StyledCounter = styled.div`
	display: flex;
	flex: 0 0 130px;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		order: 2;
	}
`;

const StyledPrice = styled.div`
	margin: 0 10px 0 80px;
	letter-spacing: 0.02em;
	font-weight: 700;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		order: 1;
		flex: 0 0 100%;
		display: flex;
		align-items: center;
		margin: 0 0 20px 0;
	}
`;

const StyledCurrentPrice = styled.div`
	font-size: 18px;
`;

const StyledOldPrice = styled.div`
	text-decoration-line: line-through;
	font-size: 14px;
	color: #999999;
	margin: 8px 0 0 0;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0 0 0 24px;
	}
`;

const StyledCross = styled.div`
	align-self: center;
	margin: 0 0 0 auto;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		order: 3;
	}
`;

export default CartProduct;

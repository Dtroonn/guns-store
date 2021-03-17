import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { Title } from "../components";
import { FavoriteIcon, CartIcon } from "../components/icons";
import { Button } from "../components/forms";

import GunPng from "../assets/Gun.png";

const Product = ({ title, price, isFavorite }) => {
	return (
		<StyledProduct>
			<StyledBody>
				<StyledTop>
					<StyledImageWrapper>
						<StyledImage src={GunPng} alt="" />
					</StyledImageWrapper>
					<StyledTags>
						<StyledTag>скидка</StyledTag>
					</StyledTags>
					<StyledFavourite>
						<FavoriteIcon active={isFavorite} hv />
					</StyledFavourite>
				</StyledTop>
				<StyledText>
					<Title margin="0 0 7px 0" as={Link} to="/" small="true">
						{title}
					</Title>
					<StyledCategory>Охолощенное оружие и макеты</StyledCategory>
				</StyledText>
				<StyledBottom>
					<StyledPrice>
						{false && <StyledOldPrice>21000 руб.</StyledOldPrice>}
						<StyledCurrentPrice sale={false}>
							38800 руб.
						</StyledCurrentPrice>
					</StyledPrice>
					<Button>
						<CartIcon white />
					</Button>
				</StyledBottom>
			</StyledBody>
		</StyledProduct>
	);
};

const StyledProduct = styled.div`
	border-radius: 6px;
	border: 1px solid #e9e9e9;
	padding: 20px;
	height: 100%;
`;

const StyledBody = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
`;

const StyledTop = styled.div`
	position: relative;
`;

const StyledTags = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
`;

const StyledTag = styled.div`
	padding: 4px 6px;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	color: #fff;
	background: #999999;
	border-radius: 4px;
	font-size: 14px;
	font-weight: 700;
	margin: 0 0 7px 0;
	text-align: center;
	&:last-child {
		margin: 0;
	}
`;

const StyledFavourite = styled.div`
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;

const StyledText = styled.div`
	flex: 1 1 auto;
`;

const StyledBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin: 35px 0 0 0;
`;

const StyledCategory = styled.div`
	font-size: 14px;
	color: rgba(0, 0, 0, 0.4);
	line-height: 17px;
`;

const StyledPrice = styled.div`
	margin: 0 20px 0 0;
`;

const StyledCurrentPrice = styled.div`
	font-size: 18px;
	font-weight: 700;
	${({ sale }) =>
		sale &&
		css`
			color: #f00;
		`}
`;

const StyledOldPrice = styled.div`
	font-size: 14px;
	text-decoration-line: line-through;
	color: #999999;
	font-weight: 700;
	margin: 0 0 8px 0;
`;

const StyledImageWrapper = styled.div`
	max-width: 100%;
	margin: 0 0 20px 0;
`;

const StyledImage = styled.img`
	width: 100%;
`;

export default Product;

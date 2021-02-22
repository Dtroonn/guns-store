import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { Title, FlexContainer, AdaptiveImage } from "../components";
import { Button } from "../components/forms";

import GunPng from "../assets/Gun.png";

const StyledProduct = styled.div`
	border-radius: 6px;
	border: 1px solid #e9e9e9;
	padding: 20px;
	height: 100%;
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
	right: 0;
	top: 10px;
	cursor: pointer;
	path {
		&:last-child {
			transition: all 0.4s ease 0s;
		}
	}
	&:hover {
		path {
			&:first-child {
				fill-opacity: 1;
				fill: #ffa621;
			}
			&:last-child {
				fill: #ffa621;
			}
		}
	}
`;

const StyledText = styled.div`
	flex: 1 1 auto;
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

const StyledImage = styled.div`
	max-width: 100%;
	margin: 0 0 40px 0;
	img {
		width: 100%;
	}
`;

const Product = ({ title, price }) => {
	return (
		<StyledProduct>
			<FlexContainer height="100%" direction="column">
				<StyledTop>
					<AdaptiveImage
						src={GunPng}
						padding="0 0 110% 0"
						margin="0 0 20px 0"
					/>
					<StyledTags>
						<StyledTag>скидка</StyledTag>
					</StyledTags>
					<StyledFavourite>{FavoritesIcon}</StyledFavourite>
				</StyledTop>
				<StyledText>
					<Title margin="0 0 7px 0" as={Link} to="/" small="true">
						{title}
					</Title>
					<StyledCategory>Охолощенное оружие и макеты</StyledCategory>
				</StyledText>
				<FlexContainer
					justify="space-between"
					align="flex-end"
					margin="35px 0 0 0"
				>
					<StyledPrice>
						{false && <StyledOldPrice>21000</StyledOldPrice>}
						<StyledCurrentPrice sale={false}>
							38800
						</StyledCurrentPrice>
					</StyledPrice>
					<Button>{CartIcon}</Button>
				</FlexContainer>
			</FlexContainer>
		</StyledProduct>
	);
};

const FavoritesIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0)">
			<path
				d="M18.6272 23.5142C18.8912 23.5142 19.1523 23.4324 19.3752 23.2712C19.7903 22.9713 19.9842 22.4542 19.8712 21.9543L18.3273 15.1541L23.5635 10.5619C23.9484 10.225 24.0954 9.69397 23.9374 9.20689C23.7794 8.72092 23.3494 8.37594 22.8404 8.32888L15.9111 7.6999L13.1731 1.28975C12.9711 0.818795 12.5111 0.514648 12.0001 0.514648C11.489 0.514648 11.029 0.818795 10.8271 1.28866L8.08901 7.6999L1.16084 8.32888C0.650698 8.37484 0.220755 8.72 0.0627308 9.20598C-0.095293 9.69287 0.0508289 10.225 0.436825 10.561L5.67195 15.1521L4.12796 21.9523C4.0148 22.4524 4.2089 22.9693 4.62383 23.2692C5.03692 23.5682 5.5879 23.5933 6.02499 23.3313L12.0001 19.7612L17.9742 23.3333C18.1762 23.4543 18.4012 23.5142 18.6272 23.5142ZM12.0001 18.2232C11.773 18.2232 11.5481 18.2842 11.346 18.4042L5.70784 21.7763L7.16503 15.357C7.26904 14.8991 7.11394 14.423 6.76091 14.1141L1.81674 9.77692L8.35799 9.18291C8.82694 9.14097 9.23308 8.84598 9.4171 8.41091L12.0001 2.36168L14.5852 8.41183C14.7681 8.84488 15.1741 9.13988 15.6441 9.18199L22.1843 9.776L17.2403 14.113C16.8862 14.4221 16.7322 14.8991 16.8362 15.357L18.2932 21.7763L12.655 18.4042C12.4522 18.2842 12.2271 18.2232 12.0001 18.2232ZM8.0359 7.82185V7.82295C8.0359 7.82295 8.0359 7.82295 8.0359 7.82185Z"
				fill="black"
				fillOpacity="0.2"
			/>
			<path
				d="M0.582054 9.32786C0.732021 8.86276 1.14402 8.53389 1.63201 8.48885L8.25822 7.88678L10.8783 1.75368C11.0713 1.3047 11.5114 1.01465 12.0003 1.01465C12.4894 1.01465 12.9294 1.30561 13.1224 1.7557L15.7423 7.88788L22.3696 8.48976C22.8565 8.53389 23.2685 8.86276 23.4187 9.32786C23.5695 9.79296 23.4296 10.3018 23.0616 10.6239L18.0524 15.016L19.5296 21.5212C19.6374 21.9993 19.4516 22.4931 19.0544 22.7812C18.8425 22.9372 18.5915 23.0152 18.3405 23.0152C18.1235 23.0152 17.9074 22.9573 17.7144 22.8412L12.0003 19.4242L6.28722 22.8403C5.86918 23.0912 5.34219 23.0692 4.94612 22.7823C4.54914 22.4942 4.3631 22.0002 4.47113 21.5221L5.9481 15.0171L0.938936 10.6248C0.571068 10.3029 0.430986 9.79387 0.582054 9.32786Z"
				fill="transparent"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect
					width="24"
					height="24"
					fill="white"
					transform="matrix(-1 0 0 1 24 0)"
				/>
			</clipPath>
		</defs>
	</svg>
);

const CartIcon = (
	<svg
		width="22"
		height="22"
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0)">
			<path
				d="M17.2605 3.75471H3.18664L2.97744 1.42413C2.94323 1.04301 2.62381 0.750977 2.24117 0.750977H0.73923C0.330964 0.750977 0 1.08194 0 1.49021C0 1.89847 0.330964 2.22944 0.73923 2.22944H1.56534C2.0168 7.25908 0.850009 -5.74069 2.41556 11.7017C2.47589 12.3844 2.84477 13.1253 3.48022 13.6286C2.33452 15.0918 3.38134 17.2487 5.24501 17.2487C6.79183 17.2487 7.88283 15.706 7.35238 14.2448H11.3983C10.8685 15.7041 11.9571 17.2487 13.5057 17.2487C14.7414 17.2487 15.7468 16.2433 15.7468 15.0075C15.7468 13.7718 14.7414 12.7664 13.5057 12.7664H5.25001C4.68848 12.7664 4.19914 12.4276 3.98793 11.934L15.8018 11.2397C16.1243 11.2208 16.3972 10.9945 16.4756 10.681L17.9776 4.67322C18.0941 4.20737 17.7414 3.75471 17.2605 3.75471ZM5.24501 15.7703C4.8245 15.7703 4.48234 15.4281 4.48234 15.0075C4.48234 14.587 4.8245 14.2448 5.24501 14.2448C5.66556 14.2448 6.00772 14.587 6.00772 15.0075C6.00772 15.4281 5.66556 15.7703 5.24501 15.7703ZM13.5056 15.7703C13.0851 15.7703 12.7429 15.4281 12.7429 15.0075C12.7429 14.587 13.0851 14.2448 13.5056 14.2448C13.9262 14.2448 14.2683 14.587 14.2683 15.0075C14.2683 15.4281 13.9262 15.7703 13.5056 15.7703ZM15.173 9.79566L3.78894 10.4647L3.31935 5.23314H16.3137L15.173 9.79566Z"
				fill="white"
				fillOpacity="1"
			/>
			<path
				d="M21.0961 4.5892H3.89479L3.6391 1.74072C3.59728 1.2749 3.20688 0.917969 2.73921 0.917969H0.903503C0.404511 0.917969 0 1.32248 0 1.82147C0 2.32046 0.404511 2.72497 0.903503 2.72497H1.91319C2.46497 8.87232 1.0389 -7.0163 2.95235 14.3022C3.02609 15.1367 3.47694 16.0421 4.25361 16.6573C2.85331 18.4456 4.13275 21.0819 6.41057 21.0819C8.30113 21.0819 9.63457 19.1963 8.98624 17.4105H13.9312C13.2837 19.194 14.6143 21.0819 16.5069 21.0819C18.0173 21.0819 19.2461 19.8531 19.2461 18.3427C19.2461 16.8323 18.0173 15.6035 16.5069 15.6035H6.41668C5.73036 15.6035 5.13229 15.1894 4.87414 14.5861L19.3133 13.7375C19.7075 13.7144 20.041 13.4378 20.1368 13.0547L21.9727 5.71183C22.115 5.14245 21.684 4.5892 21.0961 4.5892ZM6.41057 19.2749C5.89661 19.2749 5.47841 18.8567 5.47841 18.3427C5.47841 17.8287 5.89661 17.4105 6.41057 17.4105C6.92458 17.4105 7.34277 17.8287 7.34277 18.3427C7.34277 18.8567 6.92458 19.2749 6.41057 19.2749ZM16.5069 19.2749C15.9929 19.2749 15.5747 18.8567 15.5747 18.3427C15.5747 17.8287 15.9929 17.4105 16.5069 17.4105C17.0209 17.4105 17.4391 17.8287 17.4391 18.3427C17.4391 18.8567 17.0209 19.2749 16.5069 19.2749ZM18.5447 11.9726L4.63093 12.7903L4.05699 6.39617H19.9389L18.5447 11.9726Z"
				fill="#transparent"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="18" height="18" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

export default Product;

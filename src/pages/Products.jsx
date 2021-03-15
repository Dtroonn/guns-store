import React from "react";
import styled from "styled-components";

import {
	Container,
	FlexContainer,
	FlexContainerColumn,
	Title,
	SelectBlock,
	Product,
	Filterbar,
	Attention,
	Pagination,
} from "../components";
import { useBreakpoint } from "../hooks";

const StyledProducts = styled.div`
	margin: 0 0 76px 0;
	@media ${({ theme }) => theme.media.largeDevices} {
		margin: 0 0 66px 0;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 50px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 0 40px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0 0 30px 0;
	}
`;

const StyledBody = styled.div`
	flex: 1 1 auto;
`;

const StyledProductsCount = styled.span`
	color: rgba(0, 0, 0, 0.2);
	letter-spacing: 0;
	margin: 0 0 0 24px;
	@media ${({ theme }) => theme.media.largeDevices} {
		margin: 0 0 0 18px;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 0 0 14px;
	}
`;

const StyledWatchedProductsCount = styled.div`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.4);
	margin: 0 0 0 40px;
	text-align: right;
	line-height: 19px;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 17px 0 0 0;
		text-align: center;
	}
`;

const Products = () => {
	const isLargeDevices = useBreakpoint("min-width", 991.98);
	return (
		<div>
			<StyledProducts>
				<Container>
					{!isLargeDevices && (
						<Title marginMD="0 0 18px 0">
							Охолощенное оружие и макеты
							<StyledProductsCount>862</StyledProductsCount>
						</Title>
					)}
					<FlexContainer
						margin="0 0 40px 0"
						marginMD="0 0 30px 0"
						align="center"
						justify="space-between"
						directionESD="column"
						alignESD="flex-start"
					>
						{isLargeDevices ? (
							<Title margin="0 20px 0 0">
								Охолощенное оружие и макеты
								<StyledProductsCount>862</StyledProductsCount>
							</Title>
						) : (
							<FlexContainerColumn marginESD="0 0 20px 0">
								<Filterbar />
							</FlexContainerColumn>
						)}
						<SelectBlock title="Сортировать по:" />
					</FlexContainer>
					<FlexContainer>
						{isLargeDevices && (
							<FlexContainerColumn
								margin="0 24px 0 0"
								flex="0 0 288px"
								flexLD="0 0 258px"
							>
								<Filterbar />
							</FlexContainerColumn>
						)}
						<StyledBody>
							<FlexContainer
								wrap="wrap"
								margin="0 -12px "
								justifyESD="center"
							>
								{Array(9)
									.fill(0)
									.map((item, index) => (
										<FlexContainerColumn
											key={index}
											flex="0 0 33.333%"
											flexMD="0 0 50%"
											flexESD="0 0 100%"
											padding="0 12px"
											margin="0 0 24px 0"
										>
											<Product title="Glock 17 СХ Retay" />
										</FlexContainerColumn>
									))}
							</FlexContainer>
							<FlexContainer
								justify="space-between"
								align="center"
								directionSD="column"
							>
								<Pagination />
								<StyledWatchedProductsCount>
									Вы посмотрели 28 из 862 товаров
								</StyledWatchedProductsCount>
							</FlexContainer>
						</StyledBody>
					</FlexContainer>
				</Container>
			</StyledProducts>
			<Attention />
		</div>
	);
};

export default Products;

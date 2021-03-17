import React from "react";
import styled from "styled-components";

import {
	Container,
	Title,
	SelectBlock,
	Product,
	Filterbar,
	Attention,
	Pagination,
} from "../components";
import { useBreakpoint } from "../hooks";

const Products = () => {
	const isLargeDevices = useBreakpoint("min-width", 991.98);
	return (
		<React.Fragment>
			<StyledProducts>
				<Container>
					{!isLargeDevices && (
						<Title marginMD="0 0 18px 0">
							Охолощенное оружие и макеты
							<span>862</span>
						</Title>
					)}
					<StyledHeader>
						<StyledHeaderColumn>
							{isLargeDevices ? (
								<Title>
									Охолощенное оружие и макеты
									<span>862</span>
								</Title>
							) : (
								<Filterbar />
							)}
						</StyledHeaderColumn>
						<StyledHeaderColumn>
							<SelectBlock title="Сортировать по:" />
						</StyledHeaderColumn>
					</StyledHeader>
					<StyledBody>
						{isLargeDevices && (
							<StyledFilterbarWrapper>
								<Filterbar />
							</StyledFilterbarWrapper>
						)}
						<StyledContent>
							<StyledRow>
								{Array(9)
									.fill(0)
									.map((item, index) => (
										<StyledColumn key={index}>
											<Product title="Glock 17 СХ Retay" />
										</StyledColumn>
									))}
							</StyledRow>
							<StyledContentBottom>
								<Pagination />
								<StyledWatchedProductsCount>
									Вы посмотрели 28 из 862 товаров
								</StyledWatchedProductsCount>
							</StyledContentBottom>
						</StyledContent>
					</StyledBody>
				</Container>
			</StyledProducts>
			<Attention />
		</React.Fragment>
	);
};

const StyledProducts = styled.div`
	margin: 0 0 86px 0;
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

const StyledHeader = styled.div`
	display: flex;
	margin: 0 0 40px 0;
	align-items: center;
	justify-content: space-between;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 30px 0;
	}
	@media (max-width: 530px) {
		display: block;
	}
`;

const StyledHeaderColumn = styled.div`
	&:first-child {
		margin: 0 30px 0 0;
		@media (max-width: 530px) {
			margin: 0 0 20px 0;
		}
	}
`;

const StyledBody = styled.div`
	display: flex;
`;

const StyledFilterbarWrapper = styled.div`
	margin: 0 24px 0 0;
	flex: 0 0 288px;
	@media ${({ theme }) => theme.media.largeDevices} {
		flex: 0 0 258px;
	}
`;

const StyledContent = styled.div`
	flex: 1 1 auto;
`;

const StyledRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -12px;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
	}
`;

const StyledContentBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${({ theme }) => theme.media.smallDevices} {
		flex-direction: column;
	}
`;

const StyledColumn = styled.div`
	padding: 0 12px;
	flex: 0 0 33.333%;
	margin: 0 0 24px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		flex: 0 0 50%;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		flex: 0 0 100%;
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

export default Products;

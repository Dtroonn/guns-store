import React from "react";
import styled from "styled-components";

import {
	Container,
	FlexContainer,
	Title,
	SelectBlock,
	Product,
} from "../components";

const StyledProductsCount = styled.span`
	color: rgba(0, 0, 0, 0.2);
	letter-spacing: 0;
`;

const StyledFilterBlock = styled.div`
	width: 288px;
	flex: 0 0 288px;
	height: 639px;
	background: #000;
	margin: 0 24px 0 0;
`;

const StyledColumn = styled.div`
	flex: 0 0 33.333%;
	padding: 0 12px;
	margin: 0 0 24px 0;
`;

const Products = () => {
	return (
		<div>
			<Container>
				<FlexContainer
					margin="0 0 40px 0"
					marginMD="0 0 30px 0"
					align="center"
					justify="space-between"
				>
					<Title>
						Товаров: <StyledProductsCount>862</StyledProductsCount>
					</Title>
					<SelectBlock margin="0 0 0 20px" title="Сортировать по:" />
				</FlexContainer>
				<FlexContainer>
					<StyledFilterBlock />
					<FlexContainer
						wrap="wrap"
						flex="1 1 auto"
						margin="0 -12px "
					>
						<StyledColumn>
							<Product title="Пресс RCBS Rock Chucker Supreme" />
						</StyledColumn>
						{Array(15)
							.fill(0)
							.map((item) => (
								<StyledColumn>
									<Product title="Glock 17 СХ Retay" />
								</StyledColumn>
							))}
					</FlexContainer>
				</FlexContainer>
			</Container>
		</div>
	);
};

export default Products;

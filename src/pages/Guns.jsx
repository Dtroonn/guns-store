import React from "react";
import styled from "styled-components";

import { Container, FlexContainer, Title, SelectBlock } from "../components";

const StyledProductsCount = styled.span`
	color: rgba(0, 0, 0, 0.2);
	letter-spacing: 0;
`;

const Guns = () => {
	return (
		<div style={{ height: "2000px" }}>
			<Container>
				<FlexContainer align="center" justify="space-between">
					<Title>
						Товаров: <StyledProductsCount>862</StyledProductsCount>
					</Title>
					<SelectBlock title="Сортировать по:" />
				</FlexContainer>
				<FlexContainer></FlexContainer>
			</Container>
		</div>
	);
};

export default Guns;

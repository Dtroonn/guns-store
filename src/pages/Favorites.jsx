import React from "react";
import styled from "styled-components";

import { Container, Attention, Title, Product } from "../components";
import { CrossIcon } from "../components/icons";

const Favorites = () => {
	return (
		<React.Fragment>
			<StyledFavorites>
				<Container>
					<StyledHeader>
						<Title>
							избранное
							<span>6</span>
						</Title>
						<StyledCleansingAction>
							<span>Очистить избранное полностью</span>
							<CrossIcon darkGray />
						</StyledCleansingAction>
					</StyledHeader>
					<StyledRow>
						{Array(6)
							.fill(0)
							.map((item, index) => (
								<StyledColumn key={index}>
									<Product
										isFavorite={true}
										title="Glock 17 СХ Retay"
									/>
								</StyledColumn>
							))}
					</StyledRow>
				</Container>
			</StyledFavorites>
			<Attention />
		</React.Fragment>
	);
};

const StyledFavorites = styled.div`
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
	justify-content: space-between;
	align-items: center;
	margin: 0 0 40px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 30px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		display: block;
	}
`;

const StyledCleansingAction = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	span {
		font-weight: 500;
		font-size: 16px;
		color: rgba(0, 0, 0, 0.6);
		margin: 0 10px 0 0;
		transition: all 0.4s ease 0s;
	}
	@media ${({ theme }) => theme.mediaFM.largeDevices} {
		&:hover {
			span {
				color: #ffa621;
			}
			svg {
				path {
					fill: #ffa621;
				}
			}
		}
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 20px 0 0 0;
	}
`;

const StyledRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -12px;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 -8px;
	}
`;

const StyledColumn = styled.div`
	flex: 0 0 25%;
	padding: 0 12px;
	margin: 0 0 24px 0;
	@media ${({ theme }) => theme.media.largeDevices} {
		flex: 0 0 33.333%;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		flex: 0 0 50%;
		padding: 0 8px;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		flex: 0 0 100%;
	}
`;

export default Favorites;

import React from "react";
import styled from "styled-components";

import { FavoriteIcon, CartIcon } from "../icons";
import CatalogMenu from "./CatalogMenu.jsx";
import Search from "./Search.jsx";
import ActionItem from "./ActionItem.jsx";

import { useBreakpoint } from "../../hooks";

const HeaderBottom = () => {
	const largeDevices = useBreakpoint("min-width", 991.98);
	return (
		<StyledHeaderBottom>
			{largeDevices && <CatalogMenu margin="0 24px 0 0" />}
			<StyledBody>
				{largeDevices && <Search flex="0 1 600px" />}
				<StyledActions>
					<StyledActionsColumn>
						<ActionItem title="Избранное" to="/favorites">
							<FavoriteIcon />
						</ActionItem>
					</StyledActionsColumn>
					<StyledActionsColumn>
						<ActionItem title="Корзина" to="/cart">
							<CartIcon />
						</ActionItem>
					</StyledActionsColumn>
				</StyledActions>
			</StyledBody>
		</StyledHeaderBottom>
	);
};

const StyledHeaderBottom = styled.div`
	display: flex;
	@media ${({ theme }) => theme.media.mediumDevices} {
		flex: 1 1 auto;
	}
`;

const StyledBody = styled.div`
	display: flex;
	flex: 1 1 auto;
	justify-content: space-between;
	@media ${({ theme }) => theme.media.mediumDevices} {
		justify-content: flex-end;
	}
`;

const StyledActions = styled.div`
	display: flex;
	position: relative;
	z-index: 50;
	margin: 0 0 0 35px;
`;

const StyledActionsColumn = styled.div`
	&:first-child {
		margin: 0 26px 0 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 8px 0 0;
	}
`;

export default HeaderBottom;

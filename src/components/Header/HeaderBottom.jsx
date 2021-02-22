import React from "react";

import { FlexContainer } from "../../components";
import { FavouriteIcon, CartIcon } from "../icons";
import CatalogMenu from "./CatalogMenu.jsx";
import Search from "./Search.jsx";
import ActionItem from "./ActionItem.jsx";

import { useBreakpoint } from "../../hooks";

const HeaderBottom = () => {
	const largeDevices = useBreakpoint("min-width", 991.98);
	return (
		<FlexContainer flexMD="1 1 auto">
			{largeDevices && <CatalogMenu margin="0 24px 0 0" />}
			<FlexContainer
				flex="1 1 auto"
				justify="space-between"
				justifyMD="flex-end"
			>
				{largeDevices && <Search flex="0 1 600px" />}
				<FlexContainer relative="50" margin="0 0 0 35px">
					<ActionItem
						margin="0 26px 0 0"
						marginSD="0 8px 0 0"
						title="Избранное"
						to="/favorites"
					>
						<FavouriteIcon />
					</ActionItem>
					<ActionItem title="Корзина" to="/cart">
						<CartIcon />
					</ActionItem>
				</FlexContainer>
			</FlexContainer>
		</FlexContainer>
	);
};

export default HeaderBottom;

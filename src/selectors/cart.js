import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.items;

export const selectTotalPrice = (state) => state.cart.totalPrice;

export const selectTotalCount = (state) => state.cart.totalCount;

export const selectCartItemsIds = createSelector(selectCartItems, (items) =>
	items.map((item) => item.product._id)
);

export const selectInitialPrice = createSelector(selectCartItems, (items) =>
	items.reduce(
		(price, item) =>
			price +
			(item.product.price.old
				? item.product.price.old * item.count
				: item.product.price.current * item.count),
		0
	)
);

export const selectTotalDiscount = createSelector(
	[selectTotalPrice, selectInitialPrice],
	(totalPrice, initialPrice) => initialPrice - totalPrice
);

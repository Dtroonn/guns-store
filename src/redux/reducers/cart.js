import produce from "immer";

import {
	SET_CART,
	ACCEPT_ADD_TO_CART,
	ACCEPT_REMOVE_FROM_CART,
	EDIT_ITEM_IN_CART,
} from "../types/cart";

const initialState = {
	items: [],
	totalCount: 0,
	totalPrice: 0,
};

const cart = (state = initialState, action) => {
	const { type, payload } = action;
	return produce(state, (draft) => {
		switch (type) {
			case SET_CART:
				Object.assign(draft, payload);
				break;
			case ACCEPT_ADD_TO_CART: {
				let candidate = draft.items.find(
					(item) => item.product._id === payload.item._id
				);
				if (candidate) {
					draft.totalCount =
						draft.totalCount - candidate.count + payload.count;

					draft.totalPrice =
						draft.totalPrice -
						candidate.product.price.current *
							(candidate.count - payload.count);

					candidate.count = payload.count;

					break;
				}

				draft.items = [
					...draft.items,
					{ product: payload.item, count: payload.count },
				];
				draft.totalCount += payload.count;
				draft.totalPrice += payload.item.price.current * payload.count;
				break;
			}

			case EDIT_ITEM_IN_CART: {
				let candidate = draft.items.find(
					(item) => item.product._id === payload._id
				);
				if (candidate) {
					candidate.product.count = payload.count;
				}
				break;
			}

			case ACCEPT_REMOVE_FROM_CART: {
				const itemIndex = draft.items.findIndex(
					(item) => item.product._id === payload
				);
				draft.totalCount -= draft.items[itemIndex].count;
				draft.totalPrice -=
					draft.items[itemIndex].product.price.current *
					draft.items[itemIndex].count;
				draft.items.splice(itemIndex, 1);
				break;
			}
			default:
				break;
		}
	});
};

export default cart;

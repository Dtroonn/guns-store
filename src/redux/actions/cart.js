import { cartApi } from "../../api";

import {
	SET_CART,
	ACCEPT_ADD_TO_CART,
	ACCEPT_REMOVE_FROM_CART,
	EDIT_ITEM_IN_CART,
} from "../types/cart";

export const fetchCart = () => async (dispatch) => {
	try {
		const response = await cartApi.get();
		dispatch(setCart(response.data.data));
	} catch (e) {
		console.log(e);
	}
};

const setCart = (data) => ({
	type: SET_CART,
	payload: data,
});

export const addToCart = (id, count = 1) => async (dispatch) => {
	try {
		const response = await cartApi.add(id, count);
		dispatch(acceptAddToCart(response.data.data, count));
	} catch (e) {
		const { status, data } = e.response;
		if (data.errorCode === 2) {
			dispatch(editItemInCart(data.data));
			throw e;
		}

		window.alert(data.message);
	}
};

const acceptAddToCart = (item, count) => ({
	type: ACCEPT_ADD_TO_CART,
	payload: {
		item,
		count,
	},
});

export const editItemInCart = (data) => ({
	type: EDIT_ITEM_IN_CART,
	payload: data,
});

export const removeFromCart = (id) => async (dispatch) => {
	try {
		const response = await cartApi.remove(id);
		console.log(response);
		dispatch(acceptRemoveFromCart(id));
	} catch (e) {
		console.log(e);
	}
};

const acceptRemoveFromCart = (id) => ({
	type: ACCEPT_REMOVE_FROM_CART,
	payload: id,
});

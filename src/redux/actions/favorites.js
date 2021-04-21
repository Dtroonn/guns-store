import {
	SET_FAVORITES,
	ACCEPT_ADD_TO_FAVORITES,
	ACCEPT_REMOVE_FROM_FAVORITES,
} from "../types/favorites";

import { favoritesApi } from "../../api";

export const fetchFavorites = () => async (dispatch) => {
	try {
		const response = await favoritesApi.get();
		console.log(response.data);
		dispatch(setFavorites(response.data.items));
	} catch (e) {
		console.log(e);
	}
};

const setFavorites = (items) => ({
	type: SET_FAVORITES,
	payload: items,
});

export const addToFavorites = (id) => async (dispatch) => {
	try {
		const response = await favoritesApi.add(id);
		dispatch(acceptToFavorites(response.data.data));
	} catch (e) {
		console.log(e);
	}
};

const acceptToFavorites = (item) => ({
	type: ACCEPT_ADD_TO_FAVORITES,
	payload: item,
});

export const removeFromFavorites = (id) => async (dispatch) => {
	try {
		await favoritesApi.remove(id);
		dispatch(acceptRemoveFromFavorites(id));
	} catch (e) {
		console.log(e);
	}
};

const acceptRemoveFromFavorites = (id) => ({
	type: ACCEPT_REMOVE_FROM_FAVORITES,
	payload: id,
});

export const clearFavorites = () => async (dispatch) => {
	try {
		await favoritesApi.clear();
		dispatch(setFavorites([]));
	} catch (e) {
		console.log(e);
	}
};

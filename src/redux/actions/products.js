import { SET_PRODUCTS, SET_IS_LOADING, SET_PAGE } from "../types/products";

import { productsApi } from "../../api";

export const fetchProducts = (
	category,
	page,
	count,
	sortBy,
	activeFilters
) => async (dispatch) => {
	try {
		dispatch(setIsLoading(true));
		const response = await productsApi.get(
			category,
			page,
			count,
			sortBy,
			activeFilters
		);
		console.log(response);
		dispatch(setProducts(response.data.items, response.data.totalCount));
		dispatch(setIsLoading(false));
	} catch (e) {
		console.log(e);
	}
};

const setProducts = (items, totalCount) => ({
	type: SET_PRODUCTS,
	payload: {
		items,
		totalCount,
	},
});

const setIsLoading = (value) => ({
	type: SET_IS_LOADING,
	payload: value,
});

export const setPage = (page) => ({
	type: SET_PAGE,
	payload: page,
});
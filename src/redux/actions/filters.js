import { categoriesApi, filtersApi } from "../../api";

import {
	SET_CATEGORIES,
	ACCEPT_ACTIVE_CATEGORY,
	SET_SORT_BY,
	SET_FILTERBAR_FILTERS,
	SET_IS_LOADING_FILTERBAR_FILTERS,
	SET_ACTIVE_FILTERBAR_FILTERS,
	RESET_ACTIVE_FILTERS,
} from "../types/filters";

export const fetchCategories = () => async (dispatch) => {
	try {
		const response = await categoriesApi.get();
		dispatch(setCategories(response.data.items));
	} catch (e) {
		console.log(e);
	}
};

export const fetchFilterbarFilters = (category) => async (dispatch) => {
	try {
		dispatch(setIsLoadingFilterbarFilters(true));
		const response = await filtersApi.get(category);
		dispatch(setFilterbarFilters(response.data.filters));
		dispatch(setIsLoadingFilterbarFilters(false));
	} catch (e) {
		console.log(e);
	}
};

const setCategories = (items) => ({
	type: SET_CATEGORIES,
	payload: items,
});

export const setActiveCategory = (category) => (dispatch, getState) => {
	const { categories } = getState().filters;
	const activeCategory = categories.find((item) => item.slug === category);
	dispatch(acceptActiveCategory(activeCategory));
};

const acceptActiveCategory = (category) => ({
	type: ACCEPT_ACTIVE_CATEGORY,
	payload: category,
});

const setFilterbarFilters = (filters) => ({
	type: SET_FILTERBAR_FILTERS,
	payload: filters,
});

const setIsLoadingFilterbarFilters = (value) => ({
	type: SET_IS_LOADING_FILTERBAR_FILTERS,
	payload: value,
});

export const setSortBy = (value) => ({
	type: SET_SORT_BY,
	payload: value,
});

export const setActiveFilterbarFilters = (filters) => ({
	type: SET_ACTIVE_FILTERBAR_FILTERS,
	payload: filters,
});

export const resetActiveFilters = () => ({
	type: RESET_ACTIVE_FILTERS,
});

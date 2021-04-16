import { SET_IS_LOADED } from "../types/initialize";

import { fetchCategories } from "./filters";

export const initialize = () => async (dispatch) => {
	try {
		await dispatch(fetchCategories());
		dispatch(setIsLoaded(true));
	} catch (e) {
		console.log(e);
	}
};

const setIsLoaded = (value) => ({
	type: SET_IS_LOADED,
	payload: value,
});

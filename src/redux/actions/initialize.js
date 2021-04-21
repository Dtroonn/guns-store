import { SET_IS_LOADED } from "../types/initialize";

import { fetchCategories } from "./filters";
import { fetchFavorites } from "./favorites";

export const initialize = () => async (dispatch) => {
	try {
		await Promise.all([
			dispatch(fetchCategories()),
			dispatch(fetchFavorites()),
		]);
		dispatch(setIsLoaded(true));
	} catch (e) {
		console.log(e);
	}
};

const setIsLoaded = (value) => ({
	type: SET_IS_LOADED,
	payload: value,
});

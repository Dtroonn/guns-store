import { combineReducers } from "redux";

import initialize from "./initialize";
import filters from "./filters";
import products from "./products";

const rootReducer = combineReducers({
	initialize,
	filters,
	products,
});

export default rootReducer;

import { combineReducers } from "redux";

import initialize from "./initialize";
import filters from "./filters";
import products from "./products";
import favorites from "./favorites";

const rootReducer = combineReducers({
	initialize,
	filters,
	products,
	favorites,
});

export default rootReducer;

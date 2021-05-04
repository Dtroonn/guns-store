import { combineReducers } from "redux";

import initialize from "./initialize";
import filters from "./filters";
import products from "./products";
import favorites from "./favorites";
import popups from "./popups";

const rootReducer = combineReducers({
	initialize,
	filters,
	products,
	favorites,
	popups,
});

export default rootReducer;

import { combineReducers } from "redux";

import initialize from "./initialize";
import filters from "./filters";
import products from "./products";
import favorites from "./favorites";
import popups from "./popups";
import cart from "./cart";

const rootReducer = combineReducers({
	initialize,
	filters,
	products,
	favorites,
	popups,
	cart,
});

export default rootReducer;

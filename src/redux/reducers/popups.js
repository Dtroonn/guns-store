import produce from "immer";

import { SET_IS_ACTIVE_CALLBACK_POPUP } from "../types/popups";

const initialState = {
	isActiveCallbackPopup: false,
};

const popups = (state = initialState, action) => {
	const { type, payload } = action;
	return produce(state, (draft) => {
		switch (type) {
			case SET_IS_ACTIVE_CALLBACK_POPUP:
				draft.isActiveCallbackPopup = payload;
				break;
			default:
				break;
		}
	});
};

export default popups;

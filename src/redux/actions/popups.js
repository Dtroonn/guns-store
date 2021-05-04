import { SET_IS_ACTIVE_CALLBACK_POPUP } from "../types/popups";

export const setIsActiveCallbackPopup = (value) => ({
	type: SET_IS_ACTIVE_CALLBACK_POPUP,
	payload: value,
});

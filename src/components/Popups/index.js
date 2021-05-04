import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import CallbackPopup from "./Callback";

import { setIsActiveCallbackPopup } from "../../redux/actions/popups";

const Popups = () => {
	const dispatch = useDispatch();
	const isActiveCallbackPopup = useSelector(
		({ popups }) => popups.isActiveCallbackPopup
	);

	const onCloseCallbackPopupClick = () => {
		dispatch(setIsActiveCallbackPopup(false));
	};

	return (
		<StyledPopups>
			<CallbackPopup
				active={isActiveCallbackPopup}
				onClosingElementsClick={onCloseCallbackPopupClick}
			/>
		</StyledPopups>
	);
};

const StyledPopups = styled.div``;

export default Popups;

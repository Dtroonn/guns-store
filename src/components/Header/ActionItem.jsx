import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../forms";

const ActionItem = ({ icon, title, count, to, ...props }) => {
	return (
		<StyledActionItem>
			<Button to={to} as={Link} hv="true" outline="true" padding="0">
				<StyledIcon>{props.children}</StyledIcon>
				{count && <StyledCountItems>{count}</StyledCountItems>}
			</Button>
			<StyledTitle>{title}</StyledTitle>
		</StyledActionItem>
	);
};

const StyledActionItem = styled.div`
	display: flex;
	align-items: center;
`;

const StyledIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media ${({ theme }) => theme.media.smallDevices} {
		width: 19px;
		svg {
			width: 100%;
		}
	}
`;

const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	margin: 0 0 0 12px;
	@media ${({ theme }) => theme.media.smallDevices} {
		display: none;
	}
`;

const StyledCountItems = styled.div`
	background: #ffa621;
	border-radius: 6px;
	padding: 0px 7px;
	margin: 0 0 0 10px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
	color: #fff;
`;

export default ActionItem;

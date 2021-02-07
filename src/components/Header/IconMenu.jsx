import React from "react";
import styled, { css } from "styled-components";

const StyledIconMenu = styled.div`
	display: block;
	position: relative;
	width: 16px;
	height: 12px;
	cursor: pointer;
`;

const Line = styled.span`
	transition: all 0.4s ease 0s;
	top: 5px;
	left: 0px;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #fff;
	&:first-child {
		top: 0px;
	}
	&:last-child {
		top: auto;
		bottom: 0px;
	}

	${({ active }) =>
		active &&
		css`
			transform: scale(0);
			&:first-child {
				transform: rotate(-45deg);
				top: 5px;
			}
			&:last-child {
				transform: rotate(45deg);
				bottom: 5px;
			}
		`}
`;

const IconMenu = ({ active }) => {
	return (
		<StyledIconMenu>
			<Line active={active} />
			<Line active={active} />
			<Line active={active} />
		</StyledIconMenu>
	);
};

export default IconMenu;

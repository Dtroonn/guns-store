import React from "react";
import styled, { css } from "styled-components";

import { Radio } from "../components/forms";
import { useBreakpoint, useOutsideClick } from "../hooks";

const StyledSelectBlock = styled.div`
	position: relative;
`;

const StyledHeader = styled.div`
	position: relative;
	padding: 0 24px 0 0;
	cursor: pointer;
	z-index: 3;
`;

const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	span {
		color: #ffa621;
		margin: 0 0 0 10px;
	}
`;

const StyledArrow = styled.div`
	position: absolute;
	width: 15px;
	height: 15px;
	display: flex;
	top: 1.4px;
	right: 0;
	transition: all 0.4s ease 0s;
	&:after,
	&:before {
		content: "";
		display: block;
		height: 2.2px;
		width: 8px;
		position: absolute;
		background: #000;
		border-radius: 1.5px;
		top: 6px;
	}
	&:after {
		transform: rotate(135deg);
		left: 4px;
	}
	&:before {
		transform: rotate(45deg);
	}
	${({ active }) =>
		active &&
		css`
			transform: rotate(-180deg);
		`}
`;

const StyledBody = styled.div`
	padding: 62px 20px 24px 20px;
	background: #ffffff;
	box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	min-width: 377px;
	transform: scale(0);
	transition: all 0.4s ease 0s;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 0;
		min-width: auto;
		flex: 0 1 392px;
	}
	${({ isSelectOpen }) =>
		isSelectOpen &&
		css`
			transform: scale(1);
		`}
`;

const StyledBodyWrapper = styled.div`
	top: -20px;
	left: -19px;
	position: absolute;
	@media ${({ theme }) => theme.media.mediumDevices} {
		position: fixed;
		background: rgba(0, 0, 0, 0.7);
		top: 0;
		width: 0;
		height: 0;
		left: 0;
		z-index: 11;
		display: flex;
		align-items: center;
		justify-content: center;
		${({ isSelectOpen }) =>
			isSelectOpen &&
			css`
				width: 100%;
				height: 100%;
			`}
	}
`;

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 30px 24px;
	}
	${({ isHidden }) =>
		isHidden &&
		css`
			opacity: 0;
		`}
`;

const StyledListItem = styled.li`
	margin: 0 0 20px 0;
	&:last-child {
		margin: 0;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 30px 0;
	}
`;

const StyledHeaderMd = styled.div`
	position: relative;
	padding: 30px 24px;
	border-bottom: 1px solid #e9e9e9;
`;
const StyledHeaderTitleMd = styled.div`
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-transform: uppercase;
`;

const StyledCross = styled.div`
	position: absolute;
	width: 12px;
	height: 12px;
	display: flex;
	top: 37px;
	right: 40px;
	&:after,
	&:before {
		content: "";
		display: block;
		height: 2px;
		width: 16px;
		position: absolute;
		background: rgba(0, 0, 0, 0.3);
		top: 0;
	}
	&:after {
		transform: rotate(45deg);
	}
	&:before {
		transform: rotate(-45deg);
	}
`;

const SelectBlock = ({ title, items, selectedValue }) => {
	const largeDevices = useBreakpoint("min-width", 991.98);
	const selectBodyRef = React.useRef(null);
	const selectHeaderRef = React.useRef(null);
	const [lalka, setLalka] = React.useState(0);
	const [isSelectOpen, setIsSelectOpen] = React.useState(false);

	useOutsideClick([selectHeaderRef, selectBodyRef], setIsSelectOpen, false);
	const toggleisSelectOpen = (e) => {
		setIsSelectOpen((isSelectOpen) => !isSelectOpen);
		if (!largeDevices) {
			document.body.classList.toggle("lock");
		}
	};

	const onRadioClick = (e) => {
		alert(e.value);
	};

	return (
		<StyledSelectBlock>
			<StyledHeader ref={selectHeaderRef} onClick={toggleisSelectOpen}>
				<StyledTitle>
					{title}
					<span>возрастанию цены</span>
				</StyledTitle>
				<StyledArrow active={isSelectOpen} />
			</StyledHeader>
			<StyledBodyWrapper isSelectOpen={isSelectOpen}>
				<StyledBody ref={selectBodyRef} isSelectOpen={isSelectOpen}>
					{!largeDevices && (
						<StyledHeaderMd>
							<StyledHeaderTitleMd>
								Сортировать по:
							</StyledHeaderTitleMd>
							<StyledCross onClick={toggleisSelectOpen} />
						</StyledHeaderMd>
					)}
					<StyledList isHidden={!isSelectOpen}>
						<StyledListItem>
							<Radio
								name="football"
								value="lalka"
								label="Возрастанию цены"
								onClick={onRadioClick}
							/>
						</StyledListItem>
						<StyledListItem>
							<Radio
								name="football"
								value="trololo"
								label="Убыванию цены"
								onClick={onRadioClick}
							/>
						</StyledListItem>
					</StyledList>
				</StyledBody>
			</StyledBodyWrapper>
		</StyledSelectBlock>
	);
};

export default SelectBlock;

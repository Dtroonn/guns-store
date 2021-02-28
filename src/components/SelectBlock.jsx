import React from "react";
import styled, { css } from "styled-components";

import { Radio } from "../components/forms";
import { ArrowIcon, CrossIcon } from "../components/icons";
import { useBreakpoint, useOutsideClick } from "../hooks";

const StyledSelectBlock = styled.div`
	position: relative;
	margin: ${({ margin }) => margin || "0"};
`;

const StyledHeader = styled.div`
	position: relative;
	cursor: pointer;
	z-index: 3;
	display: flex;
	align-items: center;
`;

const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	margin: 0 14px 0 0;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		font-size: 14px;
	}
	span {
		color: #ffa621;
		margin: 0 0 0 10px;
	}
`;

const StyledBody = styled.div`
	padding: 62px 20px 24px 20px;
	background: #ffffff;
	box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	min-width: 377px;
	transition: all 0.4s ease 0s;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 0;
		min-width: auto;
		flex: 0 1 392px;
		transform: scale(0);
		${({ isSelectOpen }) =>
			isSelectOpen &&
			css`
				transform: scale(1);
			`}
	}
`;

const StyledBodyWrapper = styled.div`
	top: -20px;
	left: -19px;
	position: absolute;
	z-index: 2;
	@media ${({ theme }) => theme.mediaFM.largeDevices} {
		transform: scale(0);
		transition: all 0.4s ease 0s;
		${({ isSelectOpen }) =>
			isSelectOpen &&
			css`
				transform: scale(1);
			`}
	}
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
	padding: 30px 24px;
	border-bottom: 1px solid #e9e9e9;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const StyledHeaderTitleMd = styled.div`
	font-size: 18px;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-transform: uppercase;
`;

const SelectBlock = ({ title, items, selectedValue, ...props }) => {
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
		<StyledSelectBlock {...props}>
			<StyledHeader ref={selectHeaderRef} onClick={toggleisSelectOpen}>
				<StyledTitle>
					{title}
					<span>возрастанию цены</span>
				</StyledTitle>
				<ArrowIcon small active={isSelectOpen} />
			</StyledHeader>
			<StyledBodyWrapper isSelectOpen={isSelectOpen}>
				<StyledBody ref={selectBodyRef} isSelectOpen={isSelectOpen}>
					{!largeDevices && (
						<StyledHeaderMd>
							<StyledHeaderTitleMd>
								Сортировать по:
							</StyledHeaderTitleMd>
							<CrossIcon onClick={toggleisSelectOpen} />
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

import React from "react";
import styled, { css } from "styled-components";

import { Title, SlideToggle, FlexContainer } from "../../components";
import { Checkbox } from "../forms";
import { ArrowIcon } from "../icons";

const StyledFilterItem = styled.div`
	margin: 0 0 50px 0;
	&:last-child {
		margin: 0;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0;
		position: relative;
		padding: 20px 0 5px 0;
		&:after,
		&:before {
			content: "";
			width: 200%;
			position: absolute;
			left: -50%;
			background: #e9e9e9;
			height: 1px;
		}
		&:after {
			bottom: 0;
		}
		&:before {
			top: 0;
		}
		&:nth-child(even) {
			&:before,
			&:after {
				display: none;
			}
		}
		&:last-child {
			&:after {
				display: block;
			}
		}
	}
`;

const StyledHeader = styled.div``;

const StyledList = styled.ul``;

const StyledListItem = styled.li`
	padding: 10px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		padding: 15px 0;
	}
`;

const ItemsList = () => {
	return (
		<StyledList>
			<StyledListItem>
				<Checkbox name="brend" value="off-white" label="off-white" />
			</StyledListItem>
			<StyledListItem>
				<Checkbox name="brend" value="gucci" label="gucci" />
			</StyledListItem>
		</StyledList>
	);
};

const FilterItem = ({ title, isLargeDevices }) => {
	const [isOpenMD, setIsOpenMD] = React.useState(false);
	const toggleIsOpenMD = (e) => {
		setIsOpenMD((isOpenMD) => !isOpenMD);
	};

	return (
		<StyledFilterItem>
			<StyledHeader onClick={isLargeDevices ? null : toggleIsOpenMD}>
				<FlexContainer align="center" justify="space-between">
					<Title margin="0 0 7px 0" marginMD="0 0 12px 0" extraSmall>
						{title}
					</Title>
					{!isLargeDevices && (
						<ArrowIcon margin="-10px 0 0 0" active={isOpenMD} />
					)}
				</FlexContainer>
			</StyledHeader>
			{isLargeDevices ? (
				<ItemsList />
			) : (
				<SlideToggle active={isOpenMD}>
					<ItemsList />
				</SlideToggle>
			)}
		</StyledFilterItem>
	);
};

export default FilterItem;

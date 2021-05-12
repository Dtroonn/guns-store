import React from "react";
import styled, { css } from "styled-components";

import { MinusIcon, PlusIcon } from "../../components/icons";
import { Button, TextField, ErrorText } from "../../components/forms";

const Counter = ({ initialCount, maxCount, onSubmit, itemId }) => {
	const [count, setCount] = React.useState(initialCount);
	const [err, setErr] = React.useState(false);
	const [isLoadingAccept, setIsLoadingAccept] = React.useState(false);
	const isShowButtons = count !== initialCount;

	const handleChange = (e) => {
		setErr(false);
		const value = e.target.value;
		if (value.match(/^[0-9]*$/)) {
			const count = Number(value);
			if (!count) {
				return setCount(1);
			}

			if (count > maxCount) {
				return setCount(maxCount);
			}

			setCount(count);
		}
	};

	const handleMinusButtonClick = () => {
		setErr(false);
		setCount((prevCount) => {
			if (prevCount === 1) {
				return prevCount;
			}
			return prevCount - 1;
		});
	};

	const handlePlusButtonClick = () => {
		setErr(false);
		setCount((prevCount) => {
			if (prevCount === maxCount) {
				return prevCount;
			}
			return prevCount + 1;
		});
	};

	const handleAceptButtonClick = async () => {
		try {
			setIsLoadingAccept(true);
			await onSubmit(itemId, count);
		} catch (e) {
			setErr(true);
		} finally {
			setIsLoadingAccept(false);
		}
	};

	return (
		<StyledCounter sMarginR={isShowButtons}>
			<StyledBody>
				<Button
					minWidth="40px"
					nbrr
					onClick={handleMinusButtonClick}
					disable={count === 1 || isLoadingAccept}
				>
					<MinusIcon />
				</Button>
				<TextField
					nbr
					nblar
					fontWeight="500"
					padding="0 5px"
					textAlign="center"
					notAdaptive
					type="text"
					value={count}
					onChange={handleChange}
					readOnly={isLoadingAccept}
				/>
				<Button
					minWidth="40px"
					nbrl
					onClick={handlePlusButtonClick}
					disable={count === maxCount || isLoadingAccept}
				>
					<PlusIcon />
				</Button>
			</StyledBody>
			{isShowButtons && (
				<StyledButtons>
					<StyledButtonsBody>
						<StyledButtonsColumn>
							<Button
								outline
								small
								dark
								onClick={() => setCount(initialCount)}
								disable={isLoadingAccept}
							>
								отменить
							</Button>
						</StyledButtonsColumn>
						<StyledButtonsColumn>
							<Button
								green
								small
								onClick={handleAceptButtonClick}
								showLoader={isLoadingAccept}
							>
								принять
							</Button>
						</StyledButtonsColumn>
					</StyledButtonsBody>
					{err && (
						<StyledErrorText>
							<ErrorText>
								Извините! Такого кол-ва товара нет в наличии!
							</ErrorText>
						</StyledErrorText>
					)}
				</StyledButtons>
			)}
		</StyledCounter>
	);
};

const StyledCounter = styled.div`
	margin: 0 80px 0 0;
	${({ sMarginR }) =>
		sMarginR &&
		css`
			margin: 0 50px 0 0;
			@media ${({ theme }) => theme.media.extraSmallDevices} {
				margin: 0;
			}
		`}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		order: 2;
		margin: 0;
	}
`;

const StyledBody = styled.div`
	margin: 0 0 0 30px;
	width: 130px;
	display: flex;
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0;
	}
`;

const StyledButtons = styled.div`
	margin: 10px 0 0 0;
`;

const StyledButtonsBody = styled.div`
	margin: 0 -5px 0 -5px;
	display: flex;
`;

const StyledButtonsColumn = styled.div`
	padding: 0 5px;
`;

const StyledErrorText = styled.div`
	max-width: 190px;
	margin: 7px 0 0 0;
`;

export default Counter;

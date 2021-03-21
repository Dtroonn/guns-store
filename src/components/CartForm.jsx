import React from "react";
import styled, { css } from "styled-components";

import { Title, HeaderBlock } from "../components";
import { TextField, Textarea, Button } from "../components/forms";

const CartForm = () => {
	return (
		<StyledCartForm>
			<StyledContactDetails>
				<HeaderBlock maxWidth="420px" medium title="контактные данные">
					Вы можете указать только <span>имя</span> и{" "}
					<span>номер телефона,</span> мы с вами свяжемся и сами все
					заполним за вас
				</HeaderBlock>
				<StyledContactDetailsBody>
					<StyledContactDetailsInput>
						<TextField
							name="name"
							placeholder="Введите имя"
							label="имя"
						/>
					</StyledContactDetailsInput>
					<StyledContactDetailsInput>
						<TextField
							name="phone"
							placeholder="Введите номер телефона"
							label="телефон"
							hint="Позвоним по этому номеру для подтверждения заказа"
						/>
					</StyledContactDetailsInput>
					<StyledContactDetailsInput>
						<TextField
							name="email"
							placeholder="Введите почту"
							label="e-mail"
							hint="Сюда отправим всю информацию по заказу"
						/>
					</StyledContactDetailsInput>
				</StyledContactDetailsBody>
			</StyledContactDetails>
			<StyledOptionsRecei>
				<Title medium>способ получения</Title>
				<StyledOptions>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="trololo"
							name="optionRecei"
							type="radio"
						/>
						<StyledOption htmlFor="trololo">
							<StyledOptionTitle>Курьером</StyledOptionTitle>
							<StyledOptionText>
								Москва и область <span>300 руб.</span>
							</StyledOptionText>
						</StyledOption>
					</StyledOptionsItem>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="trololo2"
							name="optionRecei"
							type="radio"
						/>
						<StyledOption htmlFor="trololo2">
							<StyledOptionTitle>
								транспортной компанией
							</StyledOptionTitle>
							<StyledOptionText>
								По предоплате <span>800 руб.</span>
							</StyledOptionText>
						</StyledOption>
					</StyledOptionsItem>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="trololo3"
							name="optionRecei"
							type="radio"
						/>
						<StyledOption htmlFor="trololo3">
							<StyledOptionTitle>почтой</StyledOptionTitle>
							<StyledOptionText>
								По предоплате <span>300 руб.</span>
							</StyledOptionText>
						</StyledOption>
					</StyledOptionsItem>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="trololo4"
							name="optionRecei"
							type="radio"
						/>
						<StyledOption htmlFor="trololo4">
							<StyledOptionTitle>самовывоз</StyledOptionTitle>
						</StyledOption>
					</StyledOptionsItem>
				</StyledOptions>
				<StyledOptionsReceiText>
					Дату и время доставки уточнит менеджер после подтверждения
					заказа
				</StyledOptionsReceiText>
			</StyledOptionsRecei>
			<StyledRecipientAddress>
				<Title medium>Адрес получателя</Title>
				<StyledRecipientAddressBody>
					<StyledRecipientAddressInput>
						<TextField
							name="city"
							placeholder="Москва"
							label="город"
						/>
					</StyledRecipientAddressInput>
					<StyledRecipientAddressInput>
						<TextField
							name="street"
							placeholder="Ул. Тверская, д. 7"
							label="улица, дом"
						/>
					</StyledRecipientAddressInput>
					<StyledRecipientAddressInput>
						<TextField
							name="entrance"
							placeholder="2"
							label="подъезд"
						/>
					</StyledRecipientAddressInput>
					<StyledRecipientAddressInput>
						<TextField
							name="apartment"
							placeholder="2"
							label="квартира"
						/>
					</StyledRecipientAddressInput>
				</StyledRecipientAddressBody>
			</StyledRecipientAddress>
			<StyledOptionsPay>
				<Title medium>способы оплаты</Title>
				<StyledOptions>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="lalka"
							name="optionPay"
							type="radio"
						/>
						<StyledOption htmlFor="lalka">
							<StyledOptionTitle>наличными</StyledOptionTitle>
						</StyledOption>
					</StyledOptionsItem>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="lalka2"
							name="optionPay"
							type="radio"
						/>
						<StyledOption htmlFor="lalka2">
							<StyledOptionTitle>
								перевод на р/с
							</StyledOptionTitle>
						</StyledOption>
					</StyledOptionsItem>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="lalka3"
							name="optionPay"
							type="radio"
						/>
						<StyledOption htmlFor="lalka3">
							<StyledOptionTitle>
								перевод на карту
							</StyledOptionTitle>
						</StyledOption>
					</StyledOptionsItem>
					<StyledOptionsItem>
						<StyledHiddenRadio
							id="lalka4"
							name="optionPay"
							type="radio"
						/>
						<StyledOption htmlFor="lalka4">
							<StyledOptionTitle>в кредит</StyledOptionTitle>
							<StyledOptionText>вкредит.рф</StyledOptionText>
						</StyledOption>
					</StyledOptionsItem>
				</StyledOptions>
			</StyledOptionsPay>
			<StyledAdditionally>
				<Title medium>дополнительно</Title>
				<StyledAdditionallyBody>
					<Textarea placeholder="Не звонить в дверь" />
				</StyledAdditionallyBody>
			</StyledAdditionally>
			<StyledOrderConfirmation>
				<Button fw>Подтвердить заказ</Button>
				<StyledOrderConfirmationText>
					Нажимая «Подтвердить заказ», вы соглашаетесь c{" "}
					<span>условиями обработки персональных данных</span>.
				</StyledOrderConfirmationText>
			</StyledOrderConfirmation>
		</StyledCartForm>
	);
};

const StyledCartForm = styled.form`
	@media ${({ theme }) => theme.media.mediumDevices} {
		max-width: 392px;
	}
`;

const StyledContactDetails = styled.div``;

const StyledContactDetailsBody = styled.div`
	max-width: 392px;
	margin: 35px 0 0 0;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 25px 0 0 0;
	}
`;

const StyledContactDetailsInput = styled.div`
	margin: 0 0 40px 0;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 0 30px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0 0 20px 0;
	}
	&:last-child {
		margin: 0;
	}
`;

const StyledOptionsRecei = styled.div`
	margin: 100px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 80px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 60px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 40px 0;
	}
`;

const StyledOptionsReceiText = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`;

const StyledOptions = styled.div`
	margin: 40px -12px 0 -12px;
	display: flex;
	flex-wrap: wrap;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 30px -12px 0 -12px;
	}

	@media ${({ theme }) => theme.media.extraSmallDevices} {
	}
`;

const StyledOptionsItem = styled.div`
	padding: 0 12px;
	margin: 0 0 24px 0;
`;

const StyledOption = styled.label`
	min-height: 116px;
	height: 100%;
	width: 184px;
	border-radius: 6px;
	border: 1px solid #d9d9d9;
	padding: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: pointer;
	transition: all 0.4s ease 0s;
	${({ small }) =>
		small &&
		css`
			min-height: 100px;
		`}
`;

const StyledOptionText = styled.div`
	font-size: 14px;
	line-height: 21px;
	color: rgba(0, 0, 0, 0.6);
	transition: all 0.4s ease 0s;
	span {
		display: block;
		font-weight: 700;
	}
`;

const StyledHiddenRadio = styled.input`
	display: none;
	&:checked {
		& ~ label {
			background: #ffa621;
			border: 1px solid #ffa621;
			div {
				color: #fff;
			}
			h6 {
				color: #fff;
			}
		}
	}
`;

const StyledOptionTitle = styled.h6`
	color: rgba(0, 0, 0, 0.6);
	letter-spacing: 0.02em;
	text-transform: uppercase;
	line-height: 21px;
	font-weight: 700;
	font-size: 14px;
	margin: 0 0 5px 0;
	transition: all 0.4s ease 0s;
`;

const StyledRecipientAddress = styled.div``;

const StyledRecipientAddressBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 40px -12px 0 -12px;
	@media ${({ theme }) => theme.media.mediumDevices} {
		display: block;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 30px -12px 0 -12px;
	}
`;

const StyledRecipientAddressInput = styled.div`
	flex: 0 0 50%;
	padding: 0 12px;
	margin: 0 0 40px 0;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 0 30px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0 0 20px 0;
	}
`;

const StyledOptionsPay = styled.div`
	margin: 60px 0 76px 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 80px 0 56px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 60px 0 36px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 40px 0 16px 0;
	}
`;

const StyledAdditionally = styled.div``;

const StyledAdditionallyBody = styled.div`
	max-width: 392px;
	margin: 40px 0 0 0;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 30px 0 0 0;
	}
`;

const StyledOrderConfirmation = styled.div`
	max-width: 392px;
	margin: 40px 0 0 0;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0;
		position: absolute;
		bottom: 0;
	}
`;

const StyledOrderConfirmationText = styled.div`
	font-size: 14px;
	line-height: 21px;
	margin: 15px 0 0 0;
	span {
		color: #ffa621;
	}
`;

export default CartForm;

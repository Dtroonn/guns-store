import React from "react";
import styled, { css } from "styled-components";

const StyledSvg = styled.svg`
	${({ active }) =>
		active &&
		css`
			path {
				&:first-child {
					fill-opacity: 1;
					fill: #ffa621;
				}
				&:last-child {
					transition: all 0.4s ease 0s;
					fill: #ffa621;
				}
			}
		`};

	${({ white }) =>
		white &&
		css`
			path {
				&:first-child {
					fill-opacity: 1;
					fill: #fff;
				}
		`};
`;
<svg
	width="22"
	height="22"
	viewBox="0 0 22 22"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M21.0961 4.5892H3.89479L3.6391 1.74072C3.59728 1.2749 3.20688 0.917969 2.73921 0.917969H0.903503C0.404511 0.917969 0 1.32248 0 1.82147C0 2.32046 0.404511 2.72497 0.903503 2.72497H1.91319C2.46497 8.87232 1.0389 -7.0163 2.95235 14.3022C3.02609 15.1367 3.47694 16.0421 4.25361 16.6573C2.85331 18.4456 4.13275 21.0819 6.41057 21.0819C8.30113 21.0819 9.63457 19.1963 8.98624 17.4105H13.9312C13.2837 19.194 14.6143 21.0819 16.5069 21.0819C18.0173 21.0819 19.2461 19.8531 19.2461 18.3427C19.2461 16.8323 18.0173 15.6035 16.5069 15.6035H6.41668C5.73036 15.6035 5.13229 15.1894 4.87414 14.5861L19.3133 13.7375C19.7075 13.7144 20.041 13.4378 20.1368 13.0547L21.9727 5.71183C22.115 5.14245 21.684 4.5892 21.0961 4.5892ZM6.41057 19.2749C5.89661 19.2749 5.47841 18.8567 5.47841 18.3427C5.47841 17.8287 5.89661 17.4105 6.41057 17.4105C6.92458 17.4105 7.34277 17.8287 7.34277 18.3427C7.34277 18.8567 6.92458 19.2749 6.41057 19.2749ZM16.5069 19.2749C15.9929 19.2749 15.5747 18.8567 15.5747 18.3427C15.5747 17.8287 15.9929 17.4105 16.5069 17.4105C17.0209 17.4105 17.4391 17.8287 17.4391 18.3427C17.4391 18.8567 17.0209 19.2749 16.5069 19.2749ZM18.5447 11.9726L4.63093 12.7903L4.05699 6.39617H19.9389L18.5447 11.9726Z"
		fill="#FFA621"
	/>
</svg>;

const Cart = (props) => {
	return (
		<StyledSvg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0)">
				<path
					d="M21.0961 4.5892H3.89479L3.6391 1.74072C3.59728 1.2749 3.20688 0.917969 2.73921 0.917969H0.903503C0.404511 0.917969 0 1.32248 0 1.82147C0 2.32046 0.404511 2.72497 0.903503 2.72497H1.91319C2.46497 8.87232 1.0389 -7.0163 2.95235 14.3022C3.02609 15.1367 3.47694 16.0421 4.25361 16.6573C2.85331 18.4456 4.13275 21.0819 6.41057 21.0819C8.30113 21.0819 9.63457 19.1963 8.98624 17.4105H13.9312C13.2837 19.194 14.6143 21.0819 16.5069 21.0819C18.0173 21.0819 19.2461 19.8531 19.2461 18.3427C19.2461 16.8323 18.0173 15.6035 16.5069 15.6035H6.41668C5.73036 15.6035 5.13229 15.1894 4.87414 14.5861L19.3133 13.7375C19.7075 13.7144 20.041 13.4378 20.1368 13.0547L21.9727 5.71183C22.115 5.14245 21.684 4.5892 21.0961 4.5892ZM6.41057 19.2749C5.89661 19.2749 5.47841 18.8567 5.47841 18.3427C5.47841 17.8287 5.89661 17.4105 6.41057 17.4105C6.92458 17.4105 7.34277 17.8287 7.34277 18.3427C7.34277 18.8567 6.92458 19.2749 6.41057 19.2749ZM16.5069 19.2749C15.9929 19.2749 15.5747 18.8567 15.5747 18.3427C15.5747 17.8287 15.9929 17.4105 16.5069 17.4105C17.0209 17.4105 17.4391 17.8287 17.4391 18.3427C17.4391 18.8567 17.0209 19.2749 16.5069 19.2749ZM18.5447 11.9726L4.63093 12.7903L4.05699 6.39617H19.9389L18.5447 11.9726Z"
					fill="black"
					fillOpacity="0.2"
				/>
				<path
					d="M3.19824 5.49316H21.0961L19.2602 12.8361L3.80574 13.7443L3.19824 5.49316Z"
					fill="transparent"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="22" height="22" fill="white" />
				</clipPath>
			</defs>
		</StyledSvg>
	);
};

export default Cart;

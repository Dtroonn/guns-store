import React from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
	overflow: hidden;
	transition: all 1s ease 0s;
	height: 0;
	${({ active }) =>
		active &&
		css`
			height: ${({ height }) => `${height}px`};
		`};
`;

const SlideToggle = ({ children, active }) => {
	const containerRef = React.useRef(null);
	const childElemOfffsetHeight =
		containerRef.current && containerRef.current.firstChild.offsetHeight;
	return (
		<StyledContainer
			ref={containerRef}
			active={active}
			height={active ? childElemOfffsetHeight : 0}
		>
			{children}
		</StyledContainer>
	);
};

export default SlideToggle;

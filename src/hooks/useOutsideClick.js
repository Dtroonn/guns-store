import React from "react";

const useOutsideClick = (elementsRefs, setState, stateValue) => {
	React.useEffect(() => {
		if (elementsRefs) {
			const handleOutsideClick = (event) => {
				const path =
					event.path || (event.composedPath && event.composedPath());
				const isIncludes = elementsRefs.some((elemRef) =>
					path.includes(elemRef.current)
				);
				if (!isIncludes) {
					setState(stateValue);
				}
			};
			document.body.addEventListener("click", handleOutsideClick);

			return () => {
				document.body.removeEventListener("click", handleOutsideClick);
			};
		}
	}, []);
};

export default useOutsideClick;

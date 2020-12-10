import React from "react";

const ArrowBack = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path
			fill="currentColor"
			d="M20.4139 11.5H5.828L11.121 6.414L9.707 5L2 12.707L9.707 20.414L11.121 19L5.828 14H20.4139V11.5Z"
		/>
	</svg>
);

export default ArrowBack;

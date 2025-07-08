import React from "react";

export default function DiagramTooltip({ isNightMode, ref }) {
	return (
		<>
			<div
				hidden={true}
				ref={ref}
				className={` select-none pointer-events-none absolute h-fit w-fit border-1 pt-2  p-3 text-3xl font-semibold border-primary ${
					isNightMode ? "bg-night-background text-night-text" : "bg-background text-text"
				}`}
			></div>
		</>
	);
}

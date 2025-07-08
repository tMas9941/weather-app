import React from "react";

export default function DiagramIcon({ icon, title, size = 50, xPos }) {
	return (
		<img
			src={icon}
			style={{ left: xPos - size / 2 }}
			className={`absolute w-[${size}px] h-[${size}px] `}
			title={title}
		/>
	);
}

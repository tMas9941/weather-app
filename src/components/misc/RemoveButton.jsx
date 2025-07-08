import React from "react";
import { removeCity } from "../../global/citiesData";

export default function RemoveButton({ city, size = 60, className }) {
	const handleClick = (e) => {
		e.stopPropagation();
		removeCity(city);
	};
	return (
		<button
			className={
				"z-5 mt-auto mb-2 cursor-pointer hover:brightness-120 stroke-whitegray active:scale-90 bg-[#f27476] rounded-sm " +
				className
			}
			onClick={handleClick}
			title="Remove City"
		>
			<svg
				fill="#ffffff"
				width={size}
				height={size}
				viewBox="0 0 32 32"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
			</svg>
		</button>
	);
}

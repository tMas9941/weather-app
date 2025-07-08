import React from "react";
import { MoveCityInList } from "../../global/citiesData";

export default function MoveButton({ city, size = 60, direction = "up" }) {
	const handleClick = (e) => {
		e.stopPropagation();
		MoveCityInList(city, direction);
	};
	return (
		<button
			className={`z-5 cursor-pointer hover:brightness-120 hover:stroke-white active:scale-90 w-fit h-fit rounded-sm
            ${direction === "top" ? "bg-primary" : "bg-accent"}`}
			onClick={handleClick}
			title={"Move " + direction}
		>
			{direction === "top" ? (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8 12L12 8M12 8L16 12M12 8V20M4 4H20"
						stroke="#ffffff"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			) : (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 5V19M12 5L6 11M12 5L18 11"
						stroke="#ffffff"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</button>
	);
}

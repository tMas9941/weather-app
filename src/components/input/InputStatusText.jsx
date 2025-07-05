import React from "react";

const statusText = {
	ready: "",
	cityAddedAlready: "City is already followed!",
	cityNotFound: "City not found!",
	cityFound: "City added to list!",
	loading: "Searching...",
	emptyInput: "Type a city name...",
};

export default function InputStatusText({ isNightMode, status }) {
	return (
		<div
			className={`${isNightMode ? " text-night-text " : " text-text "} 
                ${status === "ready" ? "opacity-0" : ""}
				z-auto mt-1 select-none transition-all ease-out duration-150 relative min-h-10 w-full flex items-center`}
		>
			<p className="mx-2 font-semibold text-xl ">{statusText[status]}</p>
		</div>
	);
}

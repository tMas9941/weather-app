import React from "react";

const statusText = {
	ready: "",
	cityAddedAlready: "City is already followed!",
	cityNotFound: "City not found!",
	cityFound: "City added to list!",
	loading: "Searching...",
	emptyInput: "Type a city name...",
};

export default function InputStatusText({ status }) {
	return (
		<div
			className={
				(status === "ready" ? "-top-8 opacity-0" : "top-0") +
				"  z-auto select-none transition-all ease-out duration-300 relative bg-linear-to-b from-transparent to-20% to-white/70 h-10 w-full text-gray-600 flex items-center"
			}
		>
			<p className="ms-auto mt-1 me-5 font-semibold text-xl">{statusText[status]}</p>
		</div>
	);
}

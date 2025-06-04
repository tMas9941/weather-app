import React from "react";

export default function HourlyForecast({ forecast }) {
	const hour = new Date(forecast.time).getHours();
	// console.log("hour ", hour);

	return (
		<div className="relative h-20 w-20 text-xl text-center font-semibold -z-1">
			<h2>{hour}</h2>

			<p className="relative text-4xl font-bold z-1 backdrop-blur-xs">{forecast.temp_c + "°"}</p>
			<img src={forecast.condition.icon} className="absolute top-12 w-full h-full opacity-80" />
		</div>
	);
}

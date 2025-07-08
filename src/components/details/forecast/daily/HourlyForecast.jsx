import React, { useRef } from "react";

const SIZE = 100;
export default function HourlyForecast({ forecast, index }) {
	const container = useRef();
	const hour = new Date(forecast.time).getHours();

	return (
		<div
			ref={container}
			style={{ minWidth: SIZE, height: SIZE }}
			className={`snap-start text-2xl text-center font-semibold z-1 `}
		>
			<p>{index === 0 ? "Now" : hour + ":00"}</p>

			<p className="relative text-4xl font-bold z-2 backdrop-blur-xs">{forecast.temp_c + "°"}</p>

			<img src={forecast.condition.icon} className="-mt-5 w-full h-full opacity-80" title={forecast.condition.text} />
		</div>
	);
}

import React, { useEffect, useRef } from "react";
import HourlyForecast from "./HourlyForecast";
import ScrollButton from "./ScrollButton";
const SCROLL_SPEED = 3;

export default function Forecast({ forecast, time }) {
	const scrollContainer = useRef();
	const currentHour = new Date(time).getHours();

	const hourlyForecasts = forecast.forecastday[0].hour.slice(currentHour);
	const hourlyForecastsNextDay = forecast.forecastday[1].hour.slice(0, currentHour);

	useEffect(() => {
		// reset scrollbar position
		scrollContainer.current.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [forecast]);

	const handleScroll = (event) => {
		event.stopPropagation();
		scrollContainer.current.scrollTo({
			top: 0,
			left: scrollContainer.current.scrollLeft + event.deltaY * SCROLL_SPEED,
			behavior: "smooth",
		});
	};

	return (
		<div
			onWheel={handleScroll}
			className="z-1 flex flex-col items-start w-full m-2 pt-5 pb-20 transition-all ease-out duration-500 "
		>
			<h1 className="text-4xl font-semibold">Daily Forecast</h1>
			<p>{time}</p>

			<div className="flex gap-10 pt-10 items-center">
				<ScrollButton scrollContainer={scrollContainer} />
				<div
					ref={scrollContainer}
					className="w-[900px] h-40 flex flex-row gap-10 gap-y-10 px-10 border-x-2 border-white/40 overflow-x-scroll   custom-scrollbar-no-bg "
				>
					{hourlyForecasts.map((hForecast) => (
						<HourlyForecast key={hForecast.time} forecast={hForecast} />
					))}
					{hourlyForecastsNextDay.map((hForecast) => (
						<HourlyForecast key={hForecast.time} forecast={hForecast} />
					))}
				</div>
				<ScrollButton direction={1} scrollContainer={scrollContainer} />
			</div>
		</div>
	);
}

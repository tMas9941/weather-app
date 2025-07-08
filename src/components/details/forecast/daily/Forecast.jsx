import React, { useEffect, useRef } from "react";
import HourlyForecast from "./HourlyForecast";
import ScrollButton from "./ScrollButton";
import DetailsCard from "../../DetailsCard";

import Diagram from "../diagram/Diagram";
// 41.67
const SCROLL_SPEED = 3;

export default function Forecast({ forecast, time }) {
	const scrollContainer = useRef();
	const currentHour = new Date(time).getHours();

	const hourlyForecasts = [
		...forecast.forecastday[0].hour.slice(currentHour),
		...forecast.forecastday[1].hour.slice(0, currentHour),
	];

	function scrollInDirection(newPositionX) {
		scrollContainer.current.scrollTo({
			top: 0,
			left: scrollContainer.current.scrollLeft + newPositionX,
			behavior: "smooth",
		});
	}
	useEffect(() => scrollInDirection(-10000), [forecast]);

	const handleScroll = (e) => {
		e.stopPropagation();
		scrollInDirection(-e.deltaY * SCROLL_SPEED);
	};

	return (
		<DetailsCard title={"Daily Forecast"} desc={time} className={"col-span-5 justify-self-center"}>
			<div onWheel={handleScroll} className="min-w-[240px] max-w-[960px] flex flex-row  gap-10 py-10 items-center">
				<ScrollButton scrollInDirection={scrollInDirection} />
				<div
					ref={scrollContainer}
					className="h-40 flex flex-row gap-10  px-0 snap-x snap-proximity overflow-x-scroll overflow-y-hidden  custom-scrollbar-no-bg "
				>
					{hourlyForecasts.map((hForecast, index) => (
						<HourlyForecast key={hForecast.time} forecast={hForecast} index={index} />
					))}
				</div>
				<ScrollButton direction={1} scrollInDirection={scrollInDirection} />
			</div>
			<Diagram forecasts={hourlyForecasts} />
		</DetailsCard>
	);
}

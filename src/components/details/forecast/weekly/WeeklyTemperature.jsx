import React from "react";
import WeeklyDiagram from "./WeeklyDiagram";
import DetailsCard from "../../DetailsCard";

export default function WeeklyTemperature({ data }) {
	const currentHour = new Date(data.current.last_updated).getHours();
	const filteredForecast = [
		...data.forecast.forecastday[0].hour.slice(currentHour),
		...data.forecast.forecastday[1].hour,
		...data.forecast.forecastday[2].hour,
	];
	// .filter((forecast, index) => (index % 2 === 0 || index === 0) && forecast);

	return (
		<DetailsCard title={"Weeekly Temperature"} desc={data.current.last_updated} className={"col-span-5 w-full"}>
			<WeeklyDiagram forecasts={filteredForecast} />
		</DetailsCard>
	);
}

import React from "react";
import Diagram from "../diagram/Diagram";
import DetailsCard from "../../DetailsCard";

export default function WeeklyTemperature({ data }) {
	const currentHour = new Date(data.current.last_updated).getHours();
	const filteredForecast = [
		...data.forecast.forecastday[0].hour.slice(currentHour),
		...data.forecast.forecastday[1].hour,
		...data.forecast.forecastday[2].hour,
	];

	return (
		<DetailsCard title={"Weeekly Temperature"} desc={data.current.last_updated} className={"col-span-5"}>
			<Diagram forecasts={filteredForecast} density={2} />
		</DetailsCard>
	);
}

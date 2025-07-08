import React from "react";
// Components
import WeeklyTemperature from "./WeeklyTemperature";
import Location from "../../Location";
import AvgDetails from "./AvgDetails";

export default function WeeklyForecast({ data }) {
	if (!data) return <></>;

	return (
		<div className="w-full grid grid-cols-5 gap-10 ">
			<Location details={data} />
			<AvgDetails data={data} />
			<WeeklyTemperature data={data} />
		</div>
	);
}

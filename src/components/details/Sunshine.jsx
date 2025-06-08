import React from "react";
import DetailsCard from "./DetailsCard";

export default function Sunshine({ details }) {
	const getUVStrength = (value) => {
		if (value === 0) {
			return "(No radiation)";
		} else if (value <= 3) {
			return "(Low radiation)";
		} else if (value <= 6) {
			return "(Medium radiation)";
		} else if (value <= 8) {
			return "(High radiation)";
		} else {
			return "(Very high radiation)";
		}
	};
	return (
		<DetailsCard title={"Sunshine "} className={"text-2xl [&_h3]:font-semibold [&>p]: [&_h3]:pt-2 [&_p]:font-medium "}>
			<h3>UV Index</h3>
			<p className="text-6xl font-bold *:text-xl *:font-medium">
				{details.current.uv}
				<span> {getUVStrength(details.current.uv)}</span>
			</p>
			<h3>Cloud coverage</h3>
			<p>{details.current.cloud} %</p>
			<h3>Feels like</h3>
			<p>{details.current.feelslike_c} °C</p>
		</DetailsCard>
	);
}

import React from "react";
import DetailsCard from "./DetailsCard";

export default function UVIndex({ details }) {
	let dynTextColor;
	let dynText;

	if (details.current.uv === 0) {
		dynTextColor = "text-gray-800";
		dynText = dynText = "None";
	} else if (details.current.uv <= 3) {
		dynTextColor = "text-yellow-200";
		dynText = "Low";
	} else if (details.current.uv <= 6) {
		dynTextColor = "text-orange-400";
		dynText = "Medium";
	} else if (details.current.uv <= 8) {
		dynTextColor = "text-red-600";
		dynText = "High";
	} else {
		dynTextColor = "text-red-800";
		dynText = "Very high";
	}

	return (
		<DetailsCard title={"UV Index"} className={"col-span-2 w-full"}>
			<h3>
				{details.current.uv}
				<span className={"text-2xl font-medium " + dynTextColor}> {dynText}</span>
			</h3>
			<h4>Cloud coverage</h4>
			<p>{details.current.cloud} %</p>
			<h4>Feels like</h4>
			<p> {details.current.feelslike_c} °C</p>
		</DetailsCard>
	);
}

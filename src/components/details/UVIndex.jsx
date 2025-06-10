import React from "react";
import DetailsCard from "./DetailsCard";

export default function UVIndex({ details }) {
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
		<DetailsCard title={"UV Index"}>
			<h3>
				{details.current.uv}
				<span className="text-xl font-medium"> {getUVStrength(details.current.uv)}</span>
			</h3>
			<h4>Cloud coverage</h4>
			<p>{details.current.cloud} %</p>
			<h4>Feels like</h4>
			<p> {details.current.feelslike_c} °C</p>
		</DetailsCard>
	);
}

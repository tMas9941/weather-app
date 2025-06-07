import React from "react";
import DetailsCard from "./DetailsCard";

export default function Humidity({ details }) {
	return (
		<DetailsCard title={"Humidity"}>
			<p>{details.current.humidity + " %"}</p>
			<h3 className="text-xl font-semibold mt-5">Dew point:</h3>
			<p>{details.current.dewpoint_c + " °C"}</p>
		</DetailsCard>
	);
}

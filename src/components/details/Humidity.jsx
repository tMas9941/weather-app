import React from "react";
import DetailsCard from "./DetailsCard";

export default function Humidity({ details }) {
	return (
		<DetailsCard title={"Humidity"} className={"col-span-2 w-full"}>
			<h3>{details.current.humidity + " %"}</h3>
			<h4>Dew point:</h4>
			<p>{details.current.dewpoint_c + " °C"}</p>
		</DetailsCard>
	);
}

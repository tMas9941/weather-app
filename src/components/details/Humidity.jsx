import React from "react";
import DetailsCard from "./DetailsCard";

export default function Humidity({ details }) {
	return (
		<DetailsCard title={"Humidity"} className={"text-2xl [&_p]:font-medium"}>
			<p className="text-8xl font-bold">{details.current.humidity + " %"}</p>
			<h3 className="font-semibold mt-5">Dew point:</h3>
			<p>{details.current.dewpoint_c + " °C"}</p>
		</DetailsCard>
	);
}

import React, { useState } from "react";
import { citiesList } from "../../global/citiesData";
import Card from "./Card";

export default function List() {
	const [cities, setCities] = useState(setInitialCities());

	function setInitialCities() {
		citiesList.connectFunction("listComp", (cities) => setCities(cities));
		return citiesList.value;
	}
	if (!cities) return <></>;
	return (
		<div className="snap-start direction-left flex flex-col gap-0.5">
			{cities.map((city) => {
				return <Card city={city} key={city} />;
			})}
		</div>
	);
}

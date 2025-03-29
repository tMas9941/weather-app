import React, { useState } from "react";
import { citiesList } from "../../global/citiesData";
import Card from "./Card";

export default function List() {
	const [cities, setCities] = useState(setInitialCities());

	function setInitialCities() {
		citiesList.addFunction("listComp", (cities) => setCities(cities));
		return citiesList.value;
	}
	const memorizedCard = React.memo(Card);
	return (
		<div className="flex flex-col gap-0.5">
			{cities.map((city) => {
				return <Card city={city} key={city} />;
			})}
		</div>
	);
}

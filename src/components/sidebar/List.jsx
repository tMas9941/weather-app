import React, { useCallback, useState } from "react";
import { citiesList } from "../../global/citiesData";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

export default function List() {
	const [cities, setCities] = useState(setInitialCities());
	const [searchParams, setSearchParams] = useSearchParams();

	function setInitialCities() {
		citiesList.connectFunction("listComp", (cities) => setCities(cities));
		return citiesList.value;
	}

	const memorizedSetSearchParams = useCallback(
		(newCity) => {
			setSearchParams({ city: newCity });
		},
		[window.location.pathname]
	);

	if (!cities) return <></>;
	return (
		<div className="snap-start direction-left flex flex-col gap-1">
			{cities.map((city) => {
				return (
					<Card
						city={city}
						selected={searchParams.get("city") === city}
						cahngeSelectedCity={memorizedSetSearchParams}
						key={city}
					/>
				);
			})}
		</div>
	);
}

import React, { useEffect, useState } from "react";
import { favoriteCity, selectedCity } from "../global/citiesData.js";

export default function useFavorite(city, fixed) {
	const [active, setActive] = useState(setInitialValue());

	// handle change of details
	useEffect(() => {
		if (fixed) {
			setActive(selectedCity.value === city && favoriteCity.value === city);
		}
	}, [city]);

	function setInitialValue() {
		// handle change of initial city
		favoriteCity.connectFunction(React.useId(), (initCity) => {
			if ((initCity === city) !== active) setActive(initCity === city);
		});

		if (city === favoriteCity.value) {
			return true;
		}
		return false;
	}

	return active;
}

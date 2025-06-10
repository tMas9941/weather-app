import React, { useEffect, useState } from "react";
import { favoriteCity, selectedCity } from "../global/citiesData.js";

export default function useFavorite(city, fixed = false) {
	const [active, setActive] = useState(setInitialValue());

	// handle change of details
	useEffect(() => {
		if (fixed) setActive(selectedCity.value === city && favoriteCity.value === city);
	}, [city, fixed]);

	function setInitialValue() {
		// handle change of initial city
		favoriteCity.connectFunction("useFavorite" + fixed + city, (favoriteCity) => {
			if ((favoriteCity === city) !== active) setActive(favoriteCity === city);
		});

		if (city === favoriteCity.value) {
			return true;
		}
		return false;
	}

	return active;
}

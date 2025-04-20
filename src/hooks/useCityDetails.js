import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import { selectedCity } from "../global/citiesData";

export default function useCityDetails() {
	const [data, setData] = useState();

	useEffect(() => {
		selectedCity.connectFunction("detailsHook", (cityName) => cityChanged(cityName));
		cityChanged(selectedCity.value);
	}, []);

	const cityChanged = (newCity) => {
		fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${newCity}`)
			.then((response) => (response.ok ? response.json() : null))
			.then((json) => setData(json));
	};

	return data;
}

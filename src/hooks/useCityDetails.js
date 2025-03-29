import { useContext, useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import CitiesContext from "../contexts/CitiesContext";

export default function useCityDetails() {
	const { selectedCity } = useContext(CitiesContext);
	const [data, setData] = useState();

	console.log("setSelectedCity  ", selectedCity);
	let ready = false;
	useEffect(() => {
		if (!ready) {
			fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${selectedCity}`)
				.then((response) => (response.ok ? response.json() : null))
				.then((json) => setData(json))
				.then(() => (ready = false));
		}
		// return () => (ready = false);
	}, [selectedCity]);

	return data;
}

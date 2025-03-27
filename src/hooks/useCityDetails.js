import { useContext, useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import CitiesContext from "../contexts/CitiesContext";

export default function useCityDetails() {
	const { selectedCity, changeDetailsSetState } = useContext(CitiesContext);
	const [data, setData] = useState(null);
	const [city, setCity] = useState(prepareCityState);

	function prepareCityState() {
		changeDetailsSetState((cityName) => setCity(cityName));
		return selectedCity;
	}

	console.log("details");
	useEffect(() => {
		let ready = false;
		if (!ready) {
			console.log("fetchDetails ", city);
			fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`)
				.then((response) => (response.ok ? response.json() : null))
				.then((json) => setData(json));
		}

		return () => {
			ready = true;
		};
	}, [city]);
	console.log("details return  ", data);
	return data;
}

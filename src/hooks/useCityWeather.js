import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import { citiesList } from "../global/citiesData";

const INTERVAL = 300000;

export default function useCityWeather(city) {
	const [data, setData] = useState();
	let ready = false;

	useEffect(() => {
		if (!ready) {
			fetchData();
		}
		return () => {
			ready = true;
		};
	}, [city]);

	function fetchData() {
		fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`)
			.then((response) => (response.ok ? response.json() : null))
			.then((json) => setData(json))
			.then(() => setTimeout(() => citiesList.value.includes(city) && fetchData(), INTERVAL));
	}

	return data;
}

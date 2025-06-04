import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import { citiesList, citiesData } from "../global/citiesData";

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
		fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=2`)
			.then((response) => (response.ok ? response.json() : null))
			.then((json) => {
				setData(json);
				citiesData[city] = json;
			})
			.then(() => setTimeout(() => citiesList.value.includes(city) && fetchData(), INTERVAL));
	}

	return data;
}

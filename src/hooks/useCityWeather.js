import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";

export default function useCityWeather(city) {
	const [data, setData] = useState(null);

	useEffect(() => {
		let ready = false;
		if (!ready) {
			fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`)
				.then((response) => (response.ok ? response.json() : null))
				.then((json) => setData(json));
		}

		return () => {
			ready = true;
		};
	}, [city]);

	return data;
}

import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";

export default function getCityWeather(city) {
	console.log("start getCityWeather ", city);
	const [data, setData] = useState(null);

	useEffect(() => {
		let ready = false;
		console.log("start fetch");
		fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`)
			.then((response) => response.json())
			.then((json) => {
				if (!ready) {
					setData(json);
					console.log("json  ", json);
				}
			});
		return () => {
			ready = true;
		};
	}, [city]);
	return data;
}

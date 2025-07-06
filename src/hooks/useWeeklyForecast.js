import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import { citiesData, citiesList } from "../global/citiesData";

const INTERVAL = 300000; // weatherapi refreshes its data every 5 mins
export default function useWeeklyForecast(city) {
	const [data, setData] = useState();

	useEffect(() => {
		function fetchData() {
			fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7`)
				.then((response) => (response.ok ? response.json() : null))
				.then((json) => {
					setData(json);
					citiesData[city] = json;
					console.log("fetched : ", json);
				})
				// refresh data after 5 mins
				.then(() => setTimeout(() => citiesList.value.includes(city) && fetchData(), INTERVAL + Math.random() * 5000));
		}
		let ready = false;
		// fetch data if not fetching/fetched it already -- FREE version of API supports only 3 days
		if (citiesData[city]?.forecast?.forecastday.length < 3) {
			if (!ready) fetchData();
		} else {
			// return data if fetched it already
			setData(citiesData[city]);
		}
		return () => {
			ready = true;
		};
	}, [city]);

	return data;
}

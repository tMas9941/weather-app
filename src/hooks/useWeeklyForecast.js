import { useEffect, useState } from "react";
import WEATHER_API_KEY from "../constants/keys.js/";
import { citiesData, citiesList } from "../global/citiesData";

const INTERVAL = 300000; // refresh intervall (base : 300000)

export default function useWeeklyForecast(city) {
	const [data, setData] = useState();

	useEffect(() => {
		function fetchData() {
			if (city !== new URLSearchParams(location.search).get("city")) return;
			fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7`)
				.then((response) => (response.ok ? response.json() : null))
				.then((json) => {
					if (city === new URLSearchParams(location.search).get("city")) setData(json);
					citiesData[city] = json;
				});
			// refresh data after 5 mins
		}
		let ready = false;

		// fetch data if not fetching/fetched it already -- FREE version of API supports only 3 days
		if (!citiesData[city] || citiesData[city]?.forecast?.forecastday.length < 3) {
			if (!ready) fetchData();
		} else {
			if (new Date() - new Date(citiesData[city]?.current?.last_updated) > INTERVAL) {
				// refresh data if its outdated
				fetchData();
				setTimeout(() => citiesList.value.includes(city) && fetchData(), INTERVAL);
			} else {
				// return data if fetched it already
				setData(citiesData[city]);
			}
		}
		return () => {
			ready = true;
		};
	}, [city]);

	return data;
}

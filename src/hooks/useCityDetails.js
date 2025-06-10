import { useEffect, useState } from "react";
import { selectedCity, citiesData } from "../global/citiesData";

export default function useCityDetails() {
	const [data, setData] = useState();

	useEffect(() => {
		function cityChanged(newCity) {
			if (newCity in citiesData) {
				setData(citiesData[newCity]);
			} else if (newCity) {
				// wait to finish fetching
				setTimeout(() => cityChanged(newCity), 100);
			} else {
				setData(null);
			}
		}
		selectedCity.connectFunction("detailsHook", (cityName) => cityChanged(cityName));
		cityChanged(selectedCity.value);
	}, []);

	return data;
}

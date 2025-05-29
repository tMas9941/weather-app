import { useEffect, useState } from "react";
import { selectedCity, citiesData } from "../global/citiesData";

export default function useCityDetails() {
	const [data, setData] = useState();

	useEffect(() => {
		selectedCity.connectFunction("detailsHook", (cityName) => cityChanged(cityName));
		cityChanged(selectedCity.value);
	}, []);

	const cityChanged = (newCity) => {
		if (newCity in citiesData) {
			setData(citiesData[newCity]);
		} else if (newCity) {
			// wait to finish fetching
			setTimeout(() => cityChanged(newCity), 100);
		} else {
			setData(null);
		}
	};
	return data;
}

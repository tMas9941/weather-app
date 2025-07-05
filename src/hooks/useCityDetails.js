import { useMemo, useState } from "react";
import { citiesData } from "../global/citiesData";

export default function useCityDetails(cityName) {
	const [data, setData] = useState();

	useMemo(() => {
		function cityChanged(newCity) {
			if (newCity in citiesData) {
				setData(citiesData[newCity]);
			} else if (newCity) {
				// try again if fetching isn't finished
				setTimeout(() => cityChanged(newCity), 200);
			} else {
				setData(null);
			}
		}
		cityChanged(cityName);
	}, [cityName]);

	return data;
}

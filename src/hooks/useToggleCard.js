import { useEffect, useState } from "react";
import { selectedCity } from "../global/citiesData.js";

export default function useToggleCard(city) {
	const [selected, setSelected] = useState(city === selectedCity.value ? true : false);

	useEffect(() => {
		const toggle = (newCity) => setSelected(newCity === city);
		selectedCity.connectFunction("cardToggle" + city, (newCity) => toggle(newCity));
	}, [city]);

	return selected;
}

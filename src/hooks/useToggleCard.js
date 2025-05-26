import { useEffect, useState } from "react";
import { selectedCity } from "../global/citiesData.js";

export default function buttonToggler(city) {
	const [selected, setSelected] = useState(city === selectedCity.value ? true : false);

	useEffect(() => {
		selectedCity.connectFunction("cardToggle" + city, (newCity) => toggle(newCity));
	}, [city]);

	const toggle = (newCity) => {
		setSelected(newCity === city);
	};

	return selected;
}

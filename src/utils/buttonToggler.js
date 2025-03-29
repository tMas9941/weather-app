import { useState } from "react";
import { selectedCity } from "../global/citiesData.js";

function unToggle() {}

export default function buttonToggler(city) {
	const [active, setActive] = useState(setInitialValue());

	const toggleOn = () => {
		if (!active) {
			setActive(true);
			unToggle();
			unToggle = deactivate;
		}
	};

	function deactivate() {
		setActive(false);
	}

	function setInitialValue() {
		if (city === selectedCity.value) {
			unToggle = deactivate;
			return true;
		}
		return false;
	}

	return [active, toggleOn];
}

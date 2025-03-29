import { useContext, useState } from "react";
import CitiesContext from "../contexts/CitiesContext";

function unToggle() {}

export default function buttonToggler(city) {
	const { selectedCity } = useContext(CitiesContext);
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
		if (city === selectedCity) {
			unToggle = deactivate;
			return true;
		}
		return false;
	}

	return [active, toggleOn];
}

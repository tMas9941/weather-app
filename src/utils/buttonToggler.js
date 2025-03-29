import { useState } from "react";

function unToggle() {}

export default function buttonToggler(city) {
	const [active, setActive] = useState(false);

	function toggleOn() {
		if (!active) {
			setActive(true);
			unToggle(false);
			unToggle = setActive;
		}
	}

	return [active, toggleOn];
}

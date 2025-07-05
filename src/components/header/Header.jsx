import React from "react";
import useSignaledValue from "../../hooks/useSignaledValue";
import { nightMode } from "../../global/citiesData";
// Components
import InputBar from "../input/InputBar";
import NightModeSwitch from "../misc/NightModeSwitch";

export default function Header() {
	const isNightMode = useSignaledValue(nightMode, "Header");
	return (
		<nav
			className={`p-1 flex justify-between ${
				isNightMode
					? "bg-night-background border-night-text/20 text-night-text"
					: "bg-background/10 text-text border-text/20"
			} border-b-1 `}
		>
			<InputBar isNightMode={isNightMode} />
			<NightModeSwitch isNightMode={isNightMode} />
		</nav>
	);
}

import React from "react";
import useSignaledValue from "../../hooks/useSignaledValue";
import { nightMode } from "../../global/citiesData";
// Components
import InputBar from "../input/InputBar";
import NightModeSwitch from "../misc/NightModeSwitch";
import HeaderButton from "./HeaderButton";
import { useSearchParams } from "react-router-dom";

export default function Header() {
	const isNightMode = useSignaledValue(nightMode, "Header");
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<nav
			className={` p-1 flex justify-between  ${
				isNightMode
					? "bg-night-background border-night-text/20 text-night-text"
					: "bg-background/10 text-text border-text/20"
			} border-b-1 [&>*]:basis-[33%]`}
		>
			<InputBar isNightMode={isNightMode} />

			<div className="flex justify-center gap-10">
				<HeaderButton text={"today"} path={"daily"} params={{ searchParams, setSearchParams }} />
				<HeaderButton text={"weekly"} path={"weekly"} params={{ searchParams, setSearchParams }} />
			</div>
			<div className="flex justify-end">
				<NightModeSwitch isNightMode={isNightMode} />
			</div>
		</nav>
	);
}

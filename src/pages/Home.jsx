import React from "react";

// Components
import SideBar from "../components/sidebar/SideBar";
import Details from "../components/details/Details";
import useSignaledValue from "../hooks/useSignaledValue";
import { citiesData, selectedCity, nightMode } from "../global/citiesData";

export default function Home() {
	const homeSelectedCity = useSignaledValue(selectedCity, "homeSelectedCity");
	const isNightMode = useSignaledValue(nightMode, "homeNightMode");

	if (!citiesData[homeSelectedCity]) setTimeout(1000);

	return (
		<div
			className={`w-screen  min-h-screen py-7 overflow-x-auto overflow-y-auto flex flex-row gap-10 
			transition-colors duration-[1s] ease-out ${
				isNightMode
					? "bg-night-background text-night-text stroke-night-text fill-night-text"
					: "bg-backround text-text stroke-text fill-text"
			}`}
		>
			<SideBar />
			<Details />
		</div>
	);
}

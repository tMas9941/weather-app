import React from "react";

// Components
import SideBar from "../components/sidebar/SideBar";
import Details from "../components/details/Details";
import getWeatherGradient from "../utils/getWeatherGradient";
import useSignaledValue from "../hooks/useSignaledValue";
import { citiesData, selectedCity } from "../global/citiesData";

export default function Home() {
	const homeSelectedCity = useSignaledValue(selectedCity, "homeSelectedCity");
	// console.log(
	// 	"citiesData[homeSelectedCity]?.current.is_day ",
	// 	citiesData[homeSelectedCity]?.current.is_day,
	// 	homeSelectedCity
	// );
	if (!citiesData[homeSelectedCity]) setTimeout(1000);
	return (
		<div
			className={`w-screen bg-gray-800 min-h-screen py-7 overflow-x-auto overflow-y-auto flex flex-row gap-10 ${getWeatherGradient(
				citiesData[homeSelectedCity] === undefined ? 1 : citiesData[homeSelectedCity]?.current.is_day,
				citiesData[homeSelectedCity]?.current.condition.text || "Sunny",
				"to-b"
			)} transition-colors duration-[1.5s] ease-out`}
		>
			<SideBar />
			<Details />
		</div>
	);
}

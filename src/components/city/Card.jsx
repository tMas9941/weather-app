import React from "react";
import useCityWeather from "../../hooks/useCityWeather";
import getWeatherGradient from "../../utils/getWeatherGradient.js";
import { cahngeSelectedCity } from "../../global/citiesData.js";
import { getCookie } from "../../utils/cookieHandler";
import buttonToggler from "../../utils/buttonToggler.js";

const initSelected = getCookie("currentCity");

export default function Card({ city }) {
	const data = useCityWeather(city);
	const [selected, toggleOn] = buttonToggler(city);

	const handleClick = (e) => {
		e.preventDefault();
		toggleOn();
		cahngeSelectedCity(city);
	};

	if (!data) return <></>;
	console.log("RENDER CARD  ", city);
	return (
		<div
			id={city}
			className={`${getWeatherGradient(data.current.is_day, data.current.condition.text)} ${
				selected ? " left-0" : " -left-5"
			}
				overflow-hidden relative group py-2 ps-10 pe-2 h-fit w-85  cursor-pointer font-semibold 
				${data.current.is_day ? "text-text" : "text-background"} transition-[left] ease-out duration-150 
				hover:ring-2 ring-white`}
			onClick={handleClick}
		>
			<div className="grid grid-cols-3 justify-between">
				<div className="col-span-2 ">
					<h2 className="text-xl font-bold ">{city}</h2>
					<p> {data.location.country}</p>
					<p> {data.current.last_updated.split(" ")[1]}</p>
				</div>
				<div className="z-10">
					<p className={"backdrop-blur-xs w-fit pe-2 rounded-full text-4xl font-semibold"}>
						{`${data.current.temp_c}°`}
					</p>
					<p className="font-semibold backdrop-blur-xs w-fit pe-2 rounded-full">
						{data.current.condition.text}
					</p>
				</div>
			</div>

			<img
				src={data.current.condition.icon}
				className="absolute -top-7 -right-13 w-[130px] h-[130px] opacity-80"
			/>
		</div>
	);
}

import React, { memo } from "react";
import { cahngeSelectedCity } from "../../global/citiesData.js";
// Components
import useCityWeather from "../../hooks/useCityWeather.js";
import FavoriteButton from "../misc/FavoriteButton.jsx";
// Utils
import getWeatherGradient from "../../utils/getWeatherGradient.js";
// Hooks
import buttonToggler from "../../hooks/useToggleCard.js";
import RemoveButton from "../misc/RemoveButton.jsx";

const Card = memo(function CreateCard({ city }) {
	const data = useCityWeather(city);
	const selected = buttonToggler(city);

	const handleClick = (e) => {
		e.stopPropagation();
		cahngeSelectedCity(city);
	};

	if (!data) return <></>;

	return (
		<div
			id={"card" + city}
			className={`${getWeatherGradient(data.current.is_day, data.current.condition.text)} ${
				selected ? " left-0" : " -left-5"
			}
				overflow-hidden relative group py-2 ps-16  h-fit w-85 me-auto font-semibold 
				${data.current.is_day ? "text-text" : "text-background"} transition-[left] ease-out duration-150 
				hover:ring-2 ring-white`}
			onClick={handleClick}
		>
			<div className="grid grid-cols-5 justify-between select-none ">
				<div className="col-span-3 ">
					<h2 className="text-xl font-bold ">{city}</h2>
					<p> {data.location.country}</p>
					<p> {data.current.last_updated.split(" ")[1]}</p>
				</div>

				<div className="col-span-2 z-10">
					<p className={"backdrop-blur-xs w-fit pe-2 rounded-full text-4xl font-semibold"}>
						{`${data.current.temp_c}°`}
					</p>
					<p className="font-semibold backdrop-blur-xs w-fit pe-2 rounded-full">{data.current.condition.text}</p>
				</div>
			</div>

			<img src={data.current.condition.icon} className="absolute -top-7 -right-13 w-[130px] h-[130px] opacity-80" />

			<FavoriteButton city={city} size={30} className="absolute start-6 top-2" />
			<RemoveButton city={city} size={30} className="absolute start-6 bottom-2" />
		</div>
	);
});
export default Card;

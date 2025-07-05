import React, { memo } from "react";

// Components
import useCityWeather from "../../hooks/useCityWeather.js";
import RemoveButton from "../misc/RemoveButton.jsx";

// Utils
import getWeatherGradient from "../../utils/getWeatherGradient.js";

const Card = memo(function CreateCard({ city, selected, cahngeSelectedCity }) {
	const data = useCityWeather(city);

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
				hover:ring-4 ring-accent`}
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

			<RemoveButton city={city} size={30} className="absolute start-6 bottom-2" />
		</div>
	);
});
export default Card;

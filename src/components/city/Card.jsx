import React from "react";
import useCityWeather from "../../hooks/useCityWeather";

const colorSchemes = [
	{ clear: "bg-linear-to-r from-blue-400 to-stone-900 " },
	{ clear: "bg-linear-to-r from-blue-200 to-amber-200 " },
];

export default function Card({ city }) {
	console.log("render city  ", city);
	const data = useCityWeather(city);
	// const data = null;

	if (!data) return <></>;
	console.log(data.current.condition.icon);
	console.log(" data  ", data);
	return (
		<div
			className={`${colorSchemes[data.current.is_day].clear}
				overflow-hidden relative group py-2 px-4 h-fit w-85
				cursor-pointer font-semibold ${
					data.current.is_day ? "text-text" : "text-background"
				} transition-[padding, opacity] ease-out duration-150`}
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
				className="absolute top-0 -right-13 w-[150px] h-[150px] opacity-70"
				// style={{ width: 150, height: 150 }}
			/>
		</div>
	);
}

import React from "react";
import useCityDetails from "../../hooks/useCityDetails";
import getWeatherGradient from "../../utils/getWeatherGradient";

export default function Details() {
	const details = useCityDetails();
	if (!details) return <></>;
	// console.log("details data  ", details)
	return (
		<div
			className={`ps-85 -z-10 w-full h-auto flex flex-col items-center ${
				details.current.is_day ? "text-black" : "text-white"
			} ${getWeatherGradient(
				details.current.is_day,
				details.current.condition.text,
				"to-b"
			)} transition-colors duration-[1.5s] ease-out`}
		>
			<div className="flex flex-col gap-3 items-center bg-gray-500/40 w-[600px] m-2 py-10 px-20">
				<h1 className="text-6xl font-semibold">{details.location.name}</h1>
				<h2 className="text-4xl ">{details.location.country}</h2>
				<h3 className="text-2xl">{details.location.region}</h3>
				<p className="text-8xl">{details.current.temp_c + "°"}</p>
			</div>
			<div className="grid grid-cols-2">
				<div className="flex flex-col gap-3 items-center bg-gray-500/40 w-[600px] m-2 py-10 px-20">
					<h1 className="text-6xl font-semibold">{details.location.name}</h1>
					<h2 className="text-4xl ">{details.location.country}</h2>
					<h3 className="text-2xl">{details.location.region}</h3>
					<p className="text-8xl">{details.current.temp_c + "°"}</p>
				</div>
				<div className="flex flex-col gap-3 items-center bg-gray-500/40 w-[600px] m-2 py-10 px-20">
					<h1 className="text-6xl font-semibold">{details.location.name}</h1>
					<h2 className="text-4xl ">{details.location.country}</h2>
					<h3 className="text-2xl">{details.location.region}</h3>
					<p className="text-8xl">{details.current.temp_c + "°"}</p>
				</div>
				<div className="flex flex-col gap-3 items-center bg-gray-500/40 w-[600px] m-2 py-10 px-20">
					<h1 className="text-6xl font-semibold">{details.location.name}</h1>
					<h2 className="text-4xl ">{details.location.country}</h2>
					<h3 className="text-2xl">{details.location.region}</h3>
					<p className="text-8xl">{details.current.temp_c + "°"}</p>
				</div>
				<div className="flex flex-col gap-3 items-center bg-gray-500/40 w-[600px] m-2 py-10 px-20">
					<h1 className="text-6xl font-semibold">{details.location.name}</h1>
					<h2 className="text-4xl ">{details.location.country}</h2>
					<h3 className="text-2xl">{details.location.region}</h3>
					<p className="text-8xl">{details.current.temp_c + "°"}</p>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import getCityWeather from "../../hooks/getCityWeather";

export default function Card({ city }) {
	console.log("city  ", city);
	const data = getCityWeather(city);
	if (!data) return <></>;
	return <div>{`City card ${city} ${data.current.temp_c}`}</div>;
}

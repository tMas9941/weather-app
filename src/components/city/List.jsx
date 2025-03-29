import React, { useContext } from "react";
import { cities } from "../../global/citiesData";
import Card from "./Card";

export default function List() {
	console.log("LIST render ", cities);
	return (
		<div className="flex flex-col gap-0.5">
			{cities.map((city) => {
				return <Card city={city} key={city} />;
			})}
		</div>
	);
}

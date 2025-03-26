import React, { useContext } from "react";
import CitiesContext from "../../contexts/CitiesContext";
import Card from "./Card";

export default function List() {
	const { cities } = useContext(CitiesContext);
	console.log("LIST render ", cities);
	return (
		<div className="flex flex-col gap-1">
			{cities.map((city) => (
				<Card city={city} key={city} />
			))}
		</div>
	);
}

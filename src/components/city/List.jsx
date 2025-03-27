import React, { useContext } from "react";
import CitiesContext from "../../contexts/CitiesContext";
import Card from "./Card";

export default function List() {
	const { cities } = useContext(CitiesContext);
	console.log("LIST render ", cities);
	return (
		<div className="flex flex-col gap-0.5">
			{cities.map((city) => {
				console.log(" city   ", city);
				return <Card city={city} key={city} />;
			})}
		</div>
	);
}

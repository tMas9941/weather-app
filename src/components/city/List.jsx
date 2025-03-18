import React from "react";
import Card from "./Card";

const cities = ["Miskolc", "Budapest"];

export default function List() {
	return (
		<div>
			{cities.map((city) => (
				<Card city={city} key={city} />
			))}
		</div>
	);
}

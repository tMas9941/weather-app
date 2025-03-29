import React, { useContext, useState } from "react";

import Card from "./Card";
import CitiesContext from "../../contexts/CitiesContext";

export default function List() {
	const { citiesList } = useContext(CitiesContext);

	return (
		<div className="flex flex-col gap-0.5">
			{citiesList.map((city) => {
				return <Card city={city} key={city} />;
			})}
		</div>
	);
}

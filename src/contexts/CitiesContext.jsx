import React, { createContext, useState } from "react";
import { getCookie, setCookie } from "../utils/cookieHandler";
const CitiesContext = createContext();

let selectedCity = { name: getCookie("currentCity"), deselect: null };
console.log("selectedCity  ", selectedCity);

function cahngeSelectedCity(newCity, funcDeselect) {}

export function CitiesProvider({ children }) {
	const [cities, setCities] = useState([
		"Miskolc",
		"Texas",
		"New York",
		// "Beijing",
		// "Tokyo",
		// "Brasilia",
		// "Mexico City",
		// "Cape Town",
		// "Paris",
		// "Berlin",
		// "Moskva",
		// "Prague",
		// "Wein",
		// "Rome",
		// "Norilsk",
		// "Igarka",
	]);

	return (
		<CitiesContext.Provider value={{ cities, setCities, selectedCity, cahngeSelectedCity }}>
			{children}
		</CitiesContext.Provider>
	);
}

export default CitiesContext;

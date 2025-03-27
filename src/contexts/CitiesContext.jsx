import React, { createContext, useState } from "react";
import { getCookie, setCookie } from "../utils/cookieHandler";
const CitiesContext = createContext();

let selectedCity = getCookie("currentCity");
let detailsSetState = [];
console.log("init city context  ", selectedCity);

function cahngeSelectedCity(newCity) {
	selectedCity = newCity;
	setCookie("currentCity", newCity);
	detailsSetState[0](newCity);
	console.log(getCookie("currentCity"));
}

function changeDetailsSetState(newFunc) {
	detailsSetState = [newFunc];
}
export function CitiesProvider({ children }) {
	const [cities, setCities] = useState([
		"Miskolc",
		"Texas",
		"New York",
		"Beijing",
		"Tokyo",
		"Brasilia",
		"Mexico City",
		"Cape Town",
		"Paris",
		"Berlin",
		"Moskva",
		"Prague",
		"Wein",
		"Rome",
		"Norilsk",
		"Igarka",
	]);

	return (
		<CitiesContext.Provider
			value={{ cities, setCities, selectedCity, cahngeSelectedCity, changeDetailsSetState }}
		>
			{children}
		</CitiesContext.Provider>
	);
}

export default CitiesContext;

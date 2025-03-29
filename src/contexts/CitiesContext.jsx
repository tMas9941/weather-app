import { createContext, useState } from "react";
import { getCookieObj, setCookieObj } from "../utils/cookieHandler";

const CitiesContext = createContext();

const weatherAppCookie = getCookieObj("weatherApp");

export function CitiesProvider({ children }) {
	const [selectedCity, setSelectedCity] = useState(weatherAppCookie.initialCity);
	const [citiesList, setCitiesList] = useState(weatherAppCookie.cities);

	function cahngeSelectedCity(newCity) {
		setSelectedCity(newCity);
		// setCookieObj("weatherApp", citiesData);
		// console.log("cookie  ", getCookieObj("weatherApp"), " selectedCity ", selectedCity);
	}
	function changeInitialCity(newCity) {
		citiesData.initialCity = newCity;
		setCookieObj("weathaerApp", citiesData);
	}

	const value = { selectedCity, cahngeSelectedCity, citiesList, setCitiesList };

	return <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>;
}

export default CitiesContext;

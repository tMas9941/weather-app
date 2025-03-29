import { getCookieObj, setCookieObj } from "../utils/cookieHandler";
import SignaledValue from "../utils/signaledValue.js";

export const citiesData = getCookieObj("weatherApp");

export const selectedCity = new SignaledValue(citiesData.initialCity);
export const citiesList = new SignaledValue(citiesData.cities);

export function cahngeSelectedCity(newCity) {
	selectedCity.changeValue(newCity);
	// setCookieObj("weatherApp", citiesData);
	// console.log("cookie  ", getCookieObj("weatherApp"), " selectedCity ", selectedCity);
}
export function changeInitialCity(newCity) {
	citiesData.initialCity = newCity;
	setCookieObj("weathaerApp", citiesData);
}

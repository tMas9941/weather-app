import { getCookie, setCookie } from "../utils/cookieHandler";
import SignaledValue from "../utils/signaledValue.js";

export const selectedCity = new SignaledValue();

export const cities = [
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
];

export function cahngeSelectedCity(newCity) {
	// selectedCity = newCity;
	selectedCity.changeValue(newCity);
	console.log(selectedCity.value);
	setCookie("currentCity", newCity);
	// onChange.details(newCity);
}

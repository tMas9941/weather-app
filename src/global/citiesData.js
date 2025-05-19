import SignaledValue from "../utils/signaledValue.js";
import WEATHER_API_KEY from "../constants/keys.js/";
const initialCity = "Budapest";

export const favoriteCity = new SignaledValue(localStorage.getItem("favoriteCity") || initialCity);
export const selectedCity = new SignaledValue(localStorage.getItem("favoriteCity") || initialCity);
export const citiesList = new SignaledValue(
	localStorage.getItem("cities") ? localStorage.getItem("cities").split(",") : [initialCity]
);
localStorage.setItem("cities", []);
export const inputStatus = new SignaledValue("ready");

export function cahngeSelectedCity(newCity) {
	selectedCity.changeValue(newCity);
}
export function changeFavoriteCity(newCity) {
	localStorage.setItem("favoriteCity", newCity);
	favoriteCity.changeValue(newCity);
}

export function addCity(newCity) {
	if (!newCity) return;
	inputStatus.changeValue("loading");
	try {
		fetch(`http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${newCity}`)
			.then((response) => (response.ok ? response.json() : null))
			.then((json) => {
				if (json.length) {
					if (!citiesList.value.includes(json[0].name)) {
						citiesList.changeValue([...citiesList.value, json[0].name]);
						localStorage.setItem("cities", citiesList.value);
						inputStatus.changeValue("cityFound");
					} else {
						inputStatus.changeValue("cityAddedAlready");
					}
				} else {
					inputStatus.changeValue("cityNotFound");
				}
			});
	} catch (error) {
		inputStatus.changeValue("fetchError");
	}
}

export function removeCity(city) {
	const newCitisList = [...citiesList.value];
	newCitisList.splice(citiesList.value.indexOf(city), 1);
	citiesList.changeValue(newCitisList);
	localStorage.setItem("cities", citiesList.value);
	if (city === favoriteCity.value) localStorage.removeItem("favoriteCity");
	if (city === selectedCity.value) {
		if (newCitisList.length > 0) {
			localStorage.setItem("selectedCity", newCitisList[0]);
		} else {
			localStorage.setItem("selectedCity", initialCity);
		}

		console.log(`"localStorage.getItem("selectedCity") "`, localStorage.getItem("selectedCity"));
		selectedCity.changeValue(localStorage.getItem("selectedCity"));
		document.getElementById("card" + selectedCity.value).click();
		console.log("selectedCity  ", selectedCity);
	}
}

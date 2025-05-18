import SignaledValue from "../utils/signaledValue.js";
const initialCity = "Budapest";

export const favoriteCity = new SignaledValue(localStorage.getItem("favoriteCity") || initialCity);
export const selectedCity = new SignaledValue(localStorage.getItem("favoriteCity") || initialCity);
export const citiesList = new SignaledValue(
	localStorage.getItem("cities") ? localStorage.getItem("cities").split(",") : [initialCity]
);

export function cahngeSelectedCity(newCity) {
	selectedCity.changeValue(newCity);
}
export function changeFavoriteCity(newCity) {
	localStorage.setItem("favoriteCity", newCity);
	favoriteCity.changeValue(newCity);
}

export function addCity(newCity) {
	if (newCity && !citiesList.value.includes(newCity)) {
		citiesList.changeValue([...citiesList.value, newCity]);
		localStorage.setItem("cities", citiesList.value);
		return true;
	}
	return false;
}

export function removeCity(city) {
	const newCitisList = [...citiesList.value];
	newCitisList.splice(citiesList.value.indexOf(city), 1);
	citiesList.changeValue(newCitisList);
	console.log("newCitisList  ", newCitisList);
	// citiesList.changeValue(citiesList.value.splice(citiesList.value.indexOf(city), 1));
	localStorage.setItem("cities", citiesList.value);
	console.log("citiesList  ", citiesList);
	if (city === favoriteCity.value) localStorage.removeItem("favoriteCity");
	if (city === selectedCity.value) {
		console.log("enter");
		if (newCitisList.length > 0) {
			localStorage.setItem("selectedCity", newCitisList[0]);
		} else {
			localStorage.setItem("selectedCity", initialCity);
		}

		console.log(`"localStorage.getItem("selectedCity") "`, localStorage.getItem("selectedCity"));
		selectedCity.changeValue(localStorage.getItem("selectedCity"));
		document.getElementById(selectedCity.value).click();
		console.log("selectedCity  ", selectedCity);
	}
}

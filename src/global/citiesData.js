import SignaledValue from "../utils/signaledValue.js";

export const selectedCity = new SignaledValue(localStorage.getItem("initialCity"));
export const citiesList = new SignaledValue(localStorage.getItem("cities").split(","));
// console.log("citiesData ", citiesData);
console.log("data  ", localStorage.getItem("initialCity"));
export function cahngeSelectedCity(newCity) {
	selectedCity.changeValue(newCity);
}
export function changeInitialCity(newCity) {
	localStorage.setItem("initialCity", newCity);
}

export function addCity(newCity) {
	if (newCity && !citiesList.value.includes(newCity)) {
		citiesList.changeValue([...citiesList.value, newCity]);
		localStorage.setItem("cities", citiesList.value);
		return true;
	}
	return false;
}

import SignaledValue from "../utils/signaledValue.js";
import WEATHER_API_KEY from "../constants/keys.js/";

// localStorage.setItem("cities", []); // RESET CITIES

export const favoriteCity = new SignaledValue(localStorage.getItem("favoriteCity"));
export const citiesList = new SignaledValue(
	localStorage.getItem("cities") ? localStorage.getItem("cities").split(",") : []
);
export const citiesData = { length: () => Object.keys(citiesData).length - 1 };
export const selectedCity = new SignaledValue(localStorage.getItem("favoriteCity") || citiesList.value[0]);

export const inputStatus = new SignaledValue("ready");

export const nightMode = new SignaledValue(localStorage.getItem("nightMode") === "true");

export function cahngeSelectedCity(newCity) {
	selectedCity.changeValue(newCity);
}
export function changeFavoriteCity(newCity) {
	favoriteCity.changeValue(newCity);
	localStorage.setItem("favoriteCity", newCity);
}

export function changeNightMode(value) {
	nightMode.changeValue(value);
	localStorage.setItem("nightMode", value);
}

export function addCity(newCity) {
	if (!newCity) return inputStatus.changeValue("emptyInput");
	inputStatus.changeValue("loading");
	try {
		fetch(`http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${newCity}`)
			.then((response) => (response.ok ? response.json() : null))
			.then((json) => {
				if (json.length) {
					if (!citiesList.value.includes(json[0].name)) {
						citiesList.changeValue([...citiesList.value, json[0].name]);
						localStorage.setItem("cities", citiesList.value);
						selectedCity.changeValue(json[0].name);
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
		alert(error);
	}
}

export function removeCity(city) {
	// update citiesList
	const newCitiesList = [...citiesList.value];
	newCitiesList.splice(citiesList.value.indexOf(city), 1);
	citiesList.changeValue(newCitiesList);
	localStorage.setItem("cities", citiesList.value);

	// change Cards
	if (city === favoriteCity.value) localStorage.removeItem("favoriteCity");
	if (city === selectedCity.value) {
		if (newCitiesList.length > 0) {
			document.getElementById("card" + newCitiesList[0]).click();
		} else {
			cahngeSelectedCity(null);
			localStorage.setItem("selectedCity", null);
		}
	}
}

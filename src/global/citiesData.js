import SignaledValue from "../utils/signaledValue.js";
import WEATHER_API_KEY from "../constants/keys.js/";

// localStorage.setItem("cities", []); // RESET CITIES

export const citiesList = new SignaledValue(
	localStorage.getItem("cities") ? localStorage.getItem("cities").split(",") : []
);
export const citiesData = { length: () => Object.keys(citiesData).length - 1 };

export const inputStatus = new SignaledValue("ready");

export const nightMode = new SignaledValue(localStorage.getItem("nightMode") === "true");

export const changeNightMode = (value) => {
	nightMode.changeValue(value);
	localStorage.setItem("nightMode", value);
};

export const MoveCityInList = (city, direction) => {
	const index = citiesList.value.indexOf(city);

	if (index === 0) return;

	if (direction === "up") {
		let newList = [];
		for (let i = 0; i < citiesList.value.length; i++) {
			if (citiesList.value[i + 1] === city) {
				newList.push(citiesList.value[i + 1]);
				newList.push(citiesList.value[i]);
				i++;
			} else {
				newList.push(citiesList.value[i]);
			}
		}
		citiesList.changeValue(newList);
	} else if (direction === "top") {
		citiesList.changeValue([city, ...citiesList.value.toSpliced(index, 1)]);
	}
	localStorage.setItem("cities", citiesList.value);
};

export const fetchNewCity = async (newCity) => {
	if (!newCity) return inputStatus.changeValue("emptyInput");
	inputStatus.changeValue("loading");
	let response;
	try {
		await fetch(`http://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${newCity}`)
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
					response = json[0].name;
				} else {
					inputStatus.changeValue("cityNotFound");
				}
			});
	} catch (error) {
		console.error(error);
		inputStatus.changeValue("fetchError");
	}
	return response;
};

export const removeCity = (city) => {
	// update citiesList
	const newCitiesList = [...citiesList.value];
	newCitiesList.splice(citiesList.value.indexOf(city), 1);
	citiesList.changeValue(newCitiesList);
	localStorage.setItem("cities", citiesList.value);

	// change Cards
	const params = new URLSearchParams(window.location.search);
	if (city === params.get("city")) {
		if (newCitiesList.length > 0) {
			document.getElementById("card" + newCitiesList[0]).click();
		}
	}
};

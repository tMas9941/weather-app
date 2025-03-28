export default function getWeatherGradient(is_day, condition, direction = "to-r") {
	const hasCondition = (array) => array.some((elem) => condition.toLowerCase().includes(elem));

	let tailwindString = `bg-linear-${direction} `;
	if (is_day) {
		tailwindString += "from-sky-200 ";
	} else {
		tailwindString += "from-sky-950 ";
	}

	if (hasCondition(["rain", " drizzle"])) {
		tailwindString += `to-blue-${900 - is_day * 500}`;
	} else if (hasCondition(["sunny"])) {
		tailwindString += "to-amber-200";
	} else if (hasCondition(["partly cloudy"])) {
		tailwindString += `to-${is_day ? "amber-100" : "cyan-900"}`;
	} else if (hasCondition(["clear"])) {
		tailwindString += "to-cyan-800";
	} else if (hasCondition(["cloudy", "overcast", "mist"])) {
		tailwindString += `to-gray-${700 - is_day * 500}`;
	} else if (hasCondition(["ice", "snow", "sleet"])) {
		tailwindString += `to-indigo-${800 - is_day * 400}`;
	}
	console.log("tailwindString  ", tailwindString);

	return tailwindString;
}

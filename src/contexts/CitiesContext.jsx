import React, { createContext, useState } from "react";
const CitiesContext = createContext();

// let cities = ["Miskolc"];

export function CitiesProvider({ children }) {
	const [cities, setCities] = useState(["Miskolc", "Texas"]);

	// const setCities = (newCities) => (cities = newCities);
	return (
		// <CitiesContext.Provider value={useMemo(() => ({ cities, setCities }), [cities, setCities])}>
		// 	{children}
		// </CitiesContext.Provider>
		<CitiesContext.Provider value={{ cities, setCities }}>{children}</CitiesContext.Provider>
	);
}

export default CitiesContext;

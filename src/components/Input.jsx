import React, { useContext } from "react";
import capitalize from "../utils/capitalize.js";

export default function Input() {
	console.log("input render");

	const handleSubmit = (e) => {
		e.preventDefault();
		const formProps = Object.fromEntries(new FormData(e.target));
		console.log("e.target ");
		const cityName = capitalize(formProps.cityName);
		// if (cityName && !cities.includes(cityName)) {
		// 	setCities([...cities, cityName]);
		// 	e.target[0].value = "";
		// }
	};
	return (
		<form onSubmit={handleSubmit} className="h-9 text-white w-full flex px-2">
			<input
				type="text"
				name="cityName"
				placeholder="Add new city..."
				className="border border-white/30 h-full w-full ps-5 outline-none"
			/>
			<button
				type="submit"
				className="h-full bg-primary px-5 py-auto hover:brightness-120 active:brightness-150 text-center ease-out duration-150 cursor-pointer"
			>
				Add
			</button>
		</form>
	);
}

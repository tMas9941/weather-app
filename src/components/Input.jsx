import React, { useState } from "react";
import capitalize from "../utils/capitalize.js";
import { addCity } from "../global/citiesData.js";

export default function Input() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formProps = Object.fromEntries(new FormData(e.target));
		const cityName = capitalize(formProps.cityName);
		if (addCity(cityName)) e.target[0].value = "";
	};

	return (
		<form
			style={{ direction: "ltr" }}
			onSubmit={handleSubmit}
			className="min-h-12 text-white w-full flex px-2"
		>
			<input
				type="text"
				name="cityName"
				placeholder="Add new city..."
				className="h-full w-full ps-5 border border-white/30 bg-gray-700/50 text-xl outline-none"
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

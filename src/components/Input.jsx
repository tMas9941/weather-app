import React, { useEffect, useState } from "react";
import { addCity, inputStatus } from "../global/citiesData.js";
import InputStatus from "./InputStatus.jsx";

export default function Input() {
	const [status, setStatus] = useState(inputStatus.value);
	useEffect(() => {
		inputStatus.connectFunction("inputStatus", (newStatus) => setStatus(newStatus));
	}, []);

	console.log("status ", status);
	const handleSubmit = (e) => {
		e.preventDefault();
		const formProps = Object.fromEntries(new FormData(e.target));
		const cityName = formProps.cityName;
		addCity(cityName);
		e.target[0].value = "";
	};

	return (
		<div className="min-h-12 text-white w-full px-3 ">
			<form
				style={{ direction: "ltr" }}
				onSubmit={handleSubmit}
				className="h-full border border-white/40 bg-gray-700/50 flex items-center gap-2"
			>
				<input
					type="text"
					name="cityName"
					placeholder="Add new city..."
					className="h-full w-full ps-5  text-xl outline-none"
				/>
				<InputStatus status={status} />
				<button
					disabled={status === "loading"}
					type="submit"
					className={
						(status === "loading" ? "bg-white/40" : "bg-primary") +
						" h-full px-5 py-auto hover:brightness-120 active:brightness-150 text-center ease-out duration-150 cursor-pointer"
					}
				>
					Add
				</button>
			</form>
		</div>
	);
}

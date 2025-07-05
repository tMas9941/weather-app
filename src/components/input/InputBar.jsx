import React, { useRef } from "react";

import InputStatusIcon from "./InputStatusIcon.jsx";
import InputStatusText from "./InputStatusText.jsx";
import useSignaledValue from "../../hooks/useSignaledValue.js";
import { fetchNewCity, inputStatus } from "../../global/citiesData.js";
import { useSearchParams } from "react-router-dom";

export default function InputBar({ isNightMode }) {
	const [, setSearchParams] = useSearchParams();
	const status = useSignaledValue(inputStatus, "inputStatus");
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		(async () => {
			// if city found => cahnge URL to activate new card
			const newCityName = await fetchNewCity(inputRef.current.value);
			if (newCityName) {
				setSearchParams({ city: newCityName });
				inputRef.current.value = "";
			}
			setTimeout(() => inputStatus.changeValue("ready"), 2000);
		})();
	};

	return (
		<div className="h-10 w-fit px-3 flex flex-col">
			<form
				style={{ direction: "ltr" }}
				onSubmit={handleSubmit}
				className="z-5 h-full border bg-gray-200/20 border-gray-700/50 flex items-center gap-3"
			>
				<input
					type="text"
					ref={inputRef}
					name="cityName"
					placeholder="Add new city..."
					className="h-full w-full ps-5  text-xl outline-none"
				/>
				<div className="min-w-[30px]">
					<InputStatusIcon status={status} size={30} />
				</div>
				<button
					disabled={status === "loading"}
					type="submit"
					className={
						(status === "loading" ? "bg-white/40" : "bg-primary") +
						" h-10 px-5 hover:brightness-110 active:brightness-100 text-center text-white cursor-pointer"
					}
				>
					Add
				</button>
			</form>
			<InputStatusText status={status} isNightMode={isNightMode} />
		</div>
	);
}

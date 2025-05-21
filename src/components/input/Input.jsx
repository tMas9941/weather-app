import React, { useRef } from "react";
import { addCity, inputStatus } from "../../global/citiesData.js";
import InputStatusIcon from "./InputStatusIcon.jsx";
import InputStatusText from "./InputStatusText.jsx";
import useSignaledValue from "../../hooks/useSignaledValue.js";

export default function Input() {
	const status = useSignaledValue(inputStatus, "inputStatus");
	const inputRef = useRef();

	if (!["ready", "loading"].includes(status)) setTimeout(() => inputStatus.changeValue("ready"), 1500);
	if (status === "cityFound") inputRef.current.value = "";

	const handleSubmit = (e) => {
		e.preventDefault();
		addCity(inputRef.current.value);
	};

	return (
		<div className=" min-h-12 text-white w-full px-3 flex flex-col">
			<form
				style={{ direction: "ltr" }}
				onSubmit={handleSubmit}
				className="z-5 h-full border border-white/40 bg-gray-700/50 flex items-center gap-3"
			>
				<input
					type="text"
					ref={inputRef}
					name="cityName"
					placeholder="Add new city..."
					className="h-full w-full ps-5  text-xl outline-none"
				/>
				<InputStatusIcon status={status} />
				<button
					disabled={status === "loading"}
					type="submit"
					className={
						(status === "loading" ? "bg-white/40" : "bg-primary") +
						" h-10 px-5 hover:brightness-120 active:brightness-150 text-center ease-out duration-150 cursor-pointer"
					}
				>
					Add
				</button>
			</form>
			<InputStatusText status={status} />
		</div>
	);
}

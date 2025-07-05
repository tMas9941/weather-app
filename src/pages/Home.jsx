import React from "react";

// Components
import SideBar from "../components/sidebar/SideBar";
import useSignaledValue from "../hooks/useSignaledValue";
import { nightMode } from "../global/citiesData";
import { Outlet } from "react-router-dom";

export default function Home() {
	const isNightMode = useSignaledValue(nightMode, "homeNightMode");

	return (
		<div
			className={`w-screen min-h-screen overflow-x-auto overflow-y-auto flex flex-row gap-10 
			 ${
					isNightMode
						? "bg-night-background text-night-text stroke-night-text fill-night-text [&_h3]:text-secondary "
						: "bg-background text-text stroke-text fill-text [&_h3]:text-night-secondary"
				}`}
		>
			<SideBar />
			<div className={`w-[1200px] pb-10 flex flex-col ${isNightMode ? "bg-background/10" : "bg-night-background/5"}`}>
				<Outlet />
			</div>

			{/* <Details /> */}
		</div>
	);
}

import React from "react";

// Components
import SideBar from "../components/SideBar";
import Details from "../components/details/Details";

export default function Home() {
	return (
		<div className="relative w-full min-h-screen flex flex-row gap-10 ">
			<SideBar />
			<Details />
		</div>
	);
}

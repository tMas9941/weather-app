import React from "react";

// Components
import List from "../components/city/List";
import Input from "../components/Input";
import SideBar from "../components/SideBar";
import Details from "../components/city/Details";

export default function Home() {
	return (
		<div className="relative w-full min-h-screen flex flex-row gap-10 ">
			<SideBar>
				<Input />
				<List />
			</SideBar>
			<Details />
		</div>
	);
}

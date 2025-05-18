import React from "react";

// Components
import List from "../components/list/List";
import Input from "../components/Input";
import SideBar from "../components/SideBar";
import Details from "../components/details/Details";

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

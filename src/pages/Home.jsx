import React from "react";

// Components
import List from "../components/city/List";
import Input from "../components/Input";
import SideBar from "../components/SideBar";

export default function Home() {
	return (
		<div className="w-full min-h-screen flex flex-row gap-10 bg-linear-to-b from-primary to-black bg-cover">
			<SideBar>
				<Input />
				<List />
			</SideBar>

			<div className="flex flex-col">Részletek</div>
		</div>
	);
}

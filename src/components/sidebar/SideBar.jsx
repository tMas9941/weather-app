import React from "react";
import Input from "../input/Input";
import List from "./List";

export default function SideBar() {
	return (
		<div className="direction-left box-content w-fit">
			<Input />
			<nav className="w-[350px] max-h-[700px] mt-5 snap-x snap-proximity direction-right custom-scrollbar  overflow-x-hidden  overflow-y-auto flex flex-col gap-5 py-1">
				<List />
			</nav>
		</div>
	);
}

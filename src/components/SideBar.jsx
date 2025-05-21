import React from "react";
import Input from "./input/Input";
import List from "./list/List";

export default function SideBar() {
	return (
		<div className="direction-left absolute h-full box-content w-90 my-7">
			<Input />
			<nav className="direction-right custom-scrollbar h-full overflow-x-hidden mt-5 overflow-y-auto flex flex-col gap-5 ">
				<List />
			</nav>
		</div>
	);
}

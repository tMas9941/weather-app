import React from "react";
import Input from "./input/Input";
import List from "./list/List";

export default function SideBar() {
	return (
		<div className="direction-left max-h-[900px] mt-7 box-content ">
			<Input />
			<nav className="direction-right custom-scrollbar w-90 h-full overflow-x-hidden mt-5 overflow-y-auto flex flex-col gap-5  border-y-3 border-white/40">
				<List />
			</nav>
		</div>
	);
}

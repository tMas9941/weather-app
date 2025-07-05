import React from "react";
import List from "./List";

export default function SideBar() {
	return (
		<div className={`pt-5 direction-left box-content w-fit`}>
			<nav className="w-[350px] max-h-[700px] mt-5 snap-x snap-proximity direction-right custom-scrollbar  overflow-x-hidden  overflow-y-auto flex flex-col gap-5 py-1">
				<List />
			</nav>
		</div>
	);
}

import React from "react";

export default function SideBar({ children }) {
	return (
		<div className="direction-left absolute h-full box-content">
			<nav className="direction-right custom-scrollbar h-full w-90 overflow-x-hidden overflow-y-auto py-5 -ms-10 flex flex-col gap-5 ">
				{children}
			</nav>
		</div>
	);
}

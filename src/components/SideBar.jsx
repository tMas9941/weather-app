import React from "react";

export default function SideBar({ children }) {
	return (
		<nav className="absolute h-screen w-85 overflow-x-hidden overflow-y-auto py-5 px-0 flex flex-col gap-5 bg-black/10">
			{children}
		</nav>
	);
}

import React from "react";

export default function SideBar({ children }) {
	return <nav className="py-5 px-0 flex flex-col gap-5 bg-background/10 ">{children}</nav>;
}

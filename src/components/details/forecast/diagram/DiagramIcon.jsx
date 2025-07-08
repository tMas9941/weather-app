import React from "react";

export default function DiagramIcon({ icon, title, size = 50 }) {
	return <img src={icon} className={` w-[${size}px] h-[${size}px]`} title={title} />;
}

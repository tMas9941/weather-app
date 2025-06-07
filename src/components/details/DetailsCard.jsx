import React from "react";

export default function DetailsCard({ className, children, title, desc }) {
	return (
		<div
			className={`w-fit  max-w-[100%]  ease-out transition-[bg-color, text-color] 
                ease-out duration-500 bg-gray-900/15 rounded-md p-5 
				${className}`}
		>
			{title && <h2 className="text-4xl font-semibold">{title}</h2>}
			{desc && <p className="text-xl font-medium">{desc}</p>}
			{children}
		</div>
	);
}

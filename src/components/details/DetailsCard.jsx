import React from "react";

export default function DetailsCard({ className, children, title, desc }) {
	return (
		<div
			className={`w-fit max-w-[100%] ease-out transition-[bg-color, text-color] 
                ease-out duration-500 rounded-md p-5 
                text-2xl [&_h4,&_h3]:font-semibold [&_h3]:text-6xl [&_h4]:pt-4  [&_p]:font-medium 
				${className} `}
		>
			{title && <h2 className={`text-4xl font-semibold `}>{title}</h2>}
			{desc && <p className="text-xl">{desc}</p>}
			{children}
		</div>
	);
}

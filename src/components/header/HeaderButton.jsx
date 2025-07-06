import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function HeaderButton({ text, path, selected = false, params }) {
	const navigate = useNavigate();
	const location = useLocation();
	selected = location.pathname.slice(1) === path;
	return (
		<button
			onClick={() => navigate({ pathname: path, search: "?city=" + params.searchParams.get("city") })}
			className={`font-bold hover:brightness-110 active:brightness-90 cursor-pointer text-xl ${
				selected ? "text-primary" : "text-gray-500"
			}`}
		>
			<span className="text-2xl">{String(text).charAt(0).toUpperCase()}</span>
			{String(text).slice(1).toUpperCase()}
		</button>
	);
}

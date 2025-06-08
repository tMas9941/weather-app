import React from "react";

import useCityDetails from "../../hooks/useCityDetails";

// Components
import FavoriteButton from "../misc/FavoriteButton";
import RemoveButton from "../misc/RemoveButton";
import Forecast from "./forecast/Forecast";
import Location from "./Location";
import Humidity from "./Humidity";
import Wind from "./wind/Wind";
import Sunshine from "./Sunshine";

export default function Details() {
	const details = useCityDetails();
	if (!details) return <div className="text-white text-2xl">{`<--- Search for cities to follow!`}</div>;
	console.log("detals ", details);
	return (
		<div
			className={`w-[calc(100%-350px)] ps-10 flex flex-col  ${details.current.is_day ? "text-black" : "text-white"} `}
		>
			<div className="fixed scroll end-5 top-5 flex flex-col gap-5 ">
				<FavoriteButton city={details.location.name} fixed={true} className={"end-0"} />
				<RemoveButton city={details.location.name} className={"end-0"} />
			</div>
			<div className="w-full flex flex-row flex-wrap gap-5 pe-20 ">
				<Location details={details} />
				<Sunshine details={details} />
				<Forecast forecast={details.forecast} time={details.current.last_updated} />
				<Wind details={details} />
				<Humidity details={details} />
			</div>
		</div>
	);
}

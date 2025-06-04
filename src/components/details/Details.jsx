import React from "react";

import useCityDetails from "../../hooks/useCityDetails";

// Components
import FavoriteButton from "./FavoriteButton";
import RemoveButton from "./RemoveButton";
import Forecast from "./forecast/Forecast";

export default function Details() {
	const details = useCityDetails();
	if (!details) return <div className="bg-linear-to-b from-sky-200 to-primary w-full h-auto"></div>;
	return (
		<div className={`ps-10 w-full flex flex-col items-center ${details.current.is_day ? "text-black" : "text-white"}`}>
			<div className="fixed scroll end-5 top-5 flex flex-col gap-5">
				<FavoriteButton city={details.location.name} fixed={true} className={"end-0"} />
				<RemoveButton city={details.location.name} className={"end-0"} />
			</div>

			<div className="flex flex-col w-full ">
				<div className="flex flex-row gap-20 px-20">
					<div>
						<img src={details.current.condition.icon} className="w-[150px] h-[150px]" />
						<p className="-mt-5 text-2xl text-center max-w-[150px]">{details.current.condition.text}</p>
					</div>
					<div className="flex flex-col gap-3 items-start  m-2 ">
						<h1 className="text-6xl font-semibold">{details.location.name}</h1>
						<h2 className="text-4xl ">{details.location.country}</h2>
						<h3 className="text-2xl">{details.location.region}</h3>
						<p className="text-8xl font-semibold">
							{details.current.temp_c}
							<span className="text-7xl">°C</span>
						</p>
					</div>
				</div>

				<Forecast forecast={details.forecast} time={details.current.last_updated} />
			</div>
		</div>
	);
}

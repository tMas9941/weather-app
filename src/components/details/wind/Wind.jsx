import React from "react";
import DetailsCard from "../DetailsCard";
import Compass from "./Compass";

export default function Wind({ details }) {
	return (
		<DetailsCard title={"Wind"} className={"text-2xl [&_h3]:font-semibold [&_h3]:pb-2 [&_p]:font-medium "}>
			<div className="flex flex-row justify-between gap-10 min-w-[450px]">
				<div>
					<h3>Speed</h3>
					<p className="!font-semibold text-6xl">{details.current.wind_kph} km/h</p>
					<h3>Windchill</h3>
					<p>{details.current.windchill_c} °C</p>
				</div>

				<div>
					<h3>Direction</h3>

					<div className="flex flex-col min-w-[120px]">
						<p>{`${details.current.wind_dir}  ${details.current.wind_degree} °`}</p>

						<Compass direction={details.current.wind_degree} isDay={details.current.is_day} />
						<p></p>
					</div>
				</div>
			</div>
		</DetailsCard>
	);
}

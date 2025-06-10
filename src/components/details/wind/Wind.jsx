import React from "react";
import DetailsCard from "../DetailsCard";
import Compass from "./Compass";

export default function Wind({ details }) {
	return (
		<DetailsCard title={"Windspeed"}>
			<div className="flex flex-row justify-between gap-10 min-w-[450px]">
				<div>
					<h3 className="!font-semibold">{details.current.wind_kph} km/h</h3>
					<h4>Windchill</h4>
					<p>{details.current.windchill_c} °C</p>
				</div>

				<div className="-mt-12">
					<h4>Direction</h4>

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

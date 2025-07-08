import React, { useMemo } from "react";
import DetailsCard from "../../DetailsCard";

export default function AvgDetails({ data }) {
	const maxTemp = Math.max(...data.forecast.forecastday.map((fDay) => fDay.day.maxtemp_c));
	const minTemp = Math.min(...data.forecast.forecastday.map((fDay) => fDay.day.mintemp_c));
	return (
		<DetailsCard title={"Avg. Temperatures"} className={"col-span-2"}>
			<div className="flex gap-10">
				<div>
					Max.
					<h3>
						{maxTemp} <span className="text-5xl">°C</span>
					</h3>
				</div>

				<div>
					Min.
					<h3>
						{minTemp}
						<span className="text-5xl">°C</span>
					</h3>
				</div>
			</div>
		</DetailsCard>
	);
}

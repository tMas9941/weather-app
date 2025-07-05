import React from "react";
import DetailsCard from "./DetailsCard";

export default function Location({ details }) {
	return (
		<DetailsCard className={"bg-transparent col-span-3"}>
			<div className="flex w-fit flex-row gap-20">
				<div>
					<img src={details.current.condition.icon} className="w-[150px] h-[150px]" />
					<p className="-mt-5 text-2xl text-center max-w-[150px]">
						{details.current.condition.text}
					</p>
				</div>
				<div className="flex flex-col gap-3 items-start m-2 ">
					<h3>{details.location.name}</h3>
					<h2 className="text-4xl ">{details.location.country}</h2>
					<h5 className="text-2xl">{details.location.region}</h5>
					<h3 className={`!text-8xl font-bold `}>
						{details.current.temp_c}
						<span className="text-7xl"> °C</span>
					</h3>
				</div>
			</div>
		</DetailsCard>
	);
}

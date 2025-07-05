// Components

import RemoveButton from "../../../misc/RemoveButton";
import NightModeSwitch from "../../../misc/NightModeSwitch";
import UVIndex from "../../UVIndex";
import Wind from "../../wind/Wind";
import Humidity from "../../Humidity";
import Location from "../../Location";
import Forecast from "./Forecast";

export default function DailyForecast({ details }) {
	if (!details) return <></>;

	return (
		<>
			<div className="fixed scroll end-5 top-5 flex flex-col gap-5 ">
				{/* <RemoveButton city={details.location.name} className={"end-0"} /> */}
				<NightModeSwitch />
			</div>
			<div className="w-full grid grid-cols-5 gap-10 pe-20 ">
				<Location details={details} />
				<UVIndex details={details} />
				<Forecast forecast={details.forecast} time={details.current.last_updated} />
				<Wind details={details} />
				<Humidity details={details} />
			</div>
		</>
	);
}

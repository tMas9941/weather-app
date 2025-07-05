import React from "react";
import { nightMode } from "../../../../global/citiesData";
import useSignaledValue from "../../../../hooks/useSignaledValue";

const diagram = {
	width: 1000,
	height: 200,
	pointsString: "",
};
const POINT_DISTANCE = diagram.width / 23;

export default function DailyDiagram({ forecasts }) {
	const isNightMode = useSignaledValue(nightMode, "dailyDiagram");
	const hourlyTemperatures = forecasts.map((forecast) => forecast.temp_c);
	const minTemp = Math.min(...hourlyTemperatures);
	const maxTemp = Math.max(...hourlyTemperatures);
	const diff = maxTemp - minTemp + 5;

	diagram.pointsString = "";
	const positions = hourlyTemperatures.map((temp, index) => [
		Math.round(POINT_DISTANCE * index),
		Math.round(((temp - minTemp) / diff) * -diagram.height),
	]);

	positions.forEach((pos) => {
		diagram.pointsString += `L${pos[0]},${pos[1]} `;
	});

	return (
		<>
			<svg
				className={`${isNightMode ? "stroke-night-accent fill-night-accent/40" : "stroke-accent fill-accent/40"}`}
				width={diagram.width}
				height={diagram.height}
				viewBox={`-10 -${diagram.height - 5} ${diagram.width + 20} ${diagram.height + 10}`}
				aria-hidden="true"
				role="img"
			>
				{/* graph */}isNightMode
				<path
					d={`M0 ${diagram.height} ${diagram.pointsString} L${diagram.width} ${diagram.height} Z`}
					strokeWidth={3}
				></path>
				{positions.map((pos, index) => (
					<React.Fragment key={pos[0]}>
						<circle
							className={`fill-white [&:hover+*]:block ${isNightMode ? "stroke-night-accent " : "stroke-accent "}`}
							r="8"
							cx={pos[0]}
							cy={pos[1]}
							strokeWidth="3"
						/>

						<text
							className={`hidden ${isNightMode ? "stroke-night-text fill-night-text" : "stroke-text fill-text"}`}
							x={pos[0] - index * 3}
							y={pos[1] - 100 > -diagram.height ? pos[1] - 70 : pos[1] + 30}
							aria-hidden="true"
							fontSize="30"
						>
							<tspan dy="1rem">{`${new Date(forecasts[index].time).getHours()}:00`}</tspan>
							<tspan x={pos[0] - index * 3} dy="2rem">{`${hourlyTemperatures[index]} °C`}</tspan>
						</text>
					</React.Fragment>
				))}
				{/* hour spans */}
				{forecasts.forEach((forecast, index) =>
					index % 6 === 0 || index == 23 ? (
						<text key={forecast.time} x={(diagram.width / 24) * index} y={-diagram.height + 21} fontSize="20">
							{new Date(forecast.time).getHours() + ":00"}
						</text>
					) : (
						<></>
					)
				)}
			</svg>
		</>
	);
}

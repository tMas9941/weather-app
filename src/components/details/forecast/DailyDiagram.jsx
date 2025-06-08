import React from "react";

const diagram = {
	width: 1000,
	height: 200,
	pointsString: "",
};
const POINT_DISTANCE = diagram.width / 23;

export default function DailyDiagram({ forecasts }) {
	const hourlyTemperatures = forecasts.map((forecast) => forecast.temp_c);
	const minTemp = Math.min(...hourlyTemperatures);
	const maxTemp = Math.max(...hourlyTemperatures);
	const diff = maxTemp - minTemp + 2;

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
				className="stroke-accent fill-accent/40"
				width={diagram.width}
				height={diagram.height}
				viewBox={`-10 -${diagram.height - 5} ${diagram.width + 20} ${diagram.height + 10}`}
				ariaHidden="true"
				role="img"
			>
				<path
					d={`M0 ${diagram.height} ${diagram.pointsString} L${diagram.width} ${diagram.height} Z`}
					strokeWidth={3}
				></path>
				{positions.map((pos, index) => (
					<>
						<circle className="fill-white " r="5" cx={pos[0]} cy={pos[1]} strokeWidth="3" />
						<text className="" x={pos[0] - index * 1.2} y={pos[1] - 15} font-size="18" stroke="white" fill="white">
							{hourlyTemperatures[index]}
						</text>
					</>
				))}
			</svg>
		</>
	);
}

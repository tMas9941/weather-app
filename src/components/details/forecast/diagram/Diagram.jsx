import React, { useRef } from "react";
import { nightMode } from "../../../../global/citiesData";
import useSignaledValue from "../../../../hooks/useSignaledValue";
import DiagramTooltip from "./DiagramTooltip";
import clamp from "../../../../utils/clamp";
import DiagramIcon from "./DiagramIcon";

const diagram = {
	width: 1100,
	height: 300,
	pointsString: "",
	iconSize: 80,
};

export default function Diagram({ forecasts, density = 1 }) {
	const tooltipRef = useRef();

	const isNightMode = useSignaledValue(nightMode, "dailyDiagram");

	const hourlyTemperatures = forecasts.map((forecast) => forecast.temp_c);

	const minTemp = Math.min(...hourlyTemperatures);
	const maxTemp = Math.max(...hourlyTemperatures);
	const diff = maxTemp - minTemp + 5;

	diagram.pointsString = "";

	const POINT_DISTANCE = diagram.width / (forecasts.length - 1);

	const positions = hourlyTemperatures.map((temp, index) => [
		Math.round(POINT_DISTANCE * index),
		Math.round(((temp - minTemp) / diff) * -diagram.height),
	]);

	positions.forEach((pos) => {
		diagram.pointsString += `L${pos[0]},${pos[1]} `;
	});

	let newPos;
	const showTooltip = (e) => {
		e.stopPropagation();
		tooltipRef.current.hidden = false;

		// set tooltip text
		const data = forecasts[e.target.dataset.index];
		tooltipRef.current.innerHTML = "<h3>" + data.temp_c + "°C</h3> " + data.time.split(" ")[1];

		// calculate new position of tooltip
		newPos = [
			clamp(10, diagram.width - tooltipRef.current.clientWidth - 40, e.target.cx.baseVal.value),
			e.target.cy.baseVal.value + diagram.height - tooltipRef.current.clientHeight - 30,
		];
		if (newPos[1] <= 30) newPos[1] += tooltipRef.current.clientHeight + 40;

		// set new position of tooltip
		tooltipRef.current.style.transform = `translate(${newPos[0]}px, ${newPos[1]}px)`;
	};

	const hideTooltip = () => {
		tooltipRef.current.hidden = true;
	};

	return (
		<>
			<DiagramTooltip ref={tooltipRef} isNightMode={isNightMode} />

			<svg
				className={`${isNightMode ? "stroke-night-accent fill-night-accent/40" : "stroke-accent fill-accent/40"}`}
				width={diagram.width}
				height={diagram.height}
				viewBox={`-10 -${diagram.height - 20} ${diagram.width + 20} ${diagram.height}`}
				aria-hidden="true"
				role="img"
			>
				{/* DRAW graph */}
				{new Date(forecasts[0].time).getHours() < 22 && (
					<text className="fill-primary stroke-primary" key={"todayText"} x={0} y={-diagram.height + 50} fontSize="30">
						{"Today"}
					</text>
				)}
				{/* DRAW day separating lines and text */}
				{forecasts.map((forecast, index) => {
					const forecastHour = new Date(forecast.time).getHours();
					if (forecastHour === 0 && index > 0) {
						return (
							<React.Fragment key={"fragment" + index}>
								<text
									className="fill-primary stroke-primary"
									key={"DayText" + index}
									x={POINT_DISTANCE * index + 20}
									y={-diagram.height + 50}
									fontSize="30"
								>
									{index < 23 ? "Tomorrow" : forecasts[Math.min(index + 1, forecasts.length - 1)].time.substr(5, 5)}
								</text>
								<line
									key={forecast.time + "DiagramDayLine"}
									className="stroke-night-primary"
									x1={POINT_DISTANCE * index}
									y1="20"
									z={-10}
									x2={POINT_DISTANCE * index}
									y2={-diagram.height + 50}
									strokeWidth={2}
								/>
							</React.Fragment>
						);
					} else if (forecastHour === 12) {
						return (
							<line
								key={"NoonLine" + index}
								className="stroke-night-primary"
								x1={POINT_DISTANCE * index}
								y1="20"
								z={-10}
								x2={POINT_DISTANCE * index}
								y2={-diagram.height + 70}
								strokeWidth={0.5}
							/>
						);
					}
				})}
				<path
					d={`M0 ${diagram.height} ${diagram.pointsString} L${diagram.width} ${diagram.height} Z`}
					strokeWidth={3}
				></path>
				{/* DRAW temperature points */}
				{positions.map(
					(pos, index) =>
						index % density === 0 && (
							<circle
								data-index={index}
								key={pos[0] + "DiagramCircle"}
								id={"wd-circle-" + index}
								className={`fill-white hover:fill-primary ${isNightMode ? "stroke-night-accent " : "stroke-accent "}`}
								r="8"
								cx={pos[0]}
								cy={pos[1]}
								strokeWidth="3"
								onMouseEnter={showTooltip}
								onMouseLeave={hideTooltip}
							/>
						)
				)}
			</svg>
			{/* DRAW icons */}
			<div className={`relative h-10 w-[${diagram.width}px] -gap-2`}>
				<DiagramIcon
					icon={forecasts[0].condition.icon}
					title={forecasts[0].condition.text}
					size={diagram.iconSize}
					xPos={positions[0][0] * (1 - 20 / diagram.width) + 20}
				/>
				{forecasts.map((forecast, index) => {
					if (
						index % density === 0 &&
						forecast.condition.icon !== forecasts[Math.max(0, index - density)].condition.icon
					) {
						return (
							<DiagramIcon
								key={"DiagramIcon" + index}
								icon={forecast.condition.icon}
								title={forecast.condition.text}
								size={diagram.iconSize}
								xPos={positions[index][0] * (1 - 20 / diagram.width) + 20}
							/>
						);
					} else if (index === forecasts.length - 1) {
						return (
							<DiagramIcon
								key={"DiagramIcon" + index}
								icon={forecasts[forecasts.length - 1].condition.icon}
								title={forecasts[forecasts.length - 1].condition.text}
								size={diagram.iconSize}
								xPos={positions[forecasts.length - 1][0] * (1 - 20 / diagram.width) + 20}
							/>
						);
					}
				})}
			</div>
		</>
	);
}

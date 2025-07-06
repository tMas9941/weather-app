import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import WeeklyForecast from "../components/details/forecast/weekly/WeeklyForecast";
import useWeeklyForecast from "../hooks/useWeeklyForecast";

export default function WeeklyForecastPage() {
	const [searchParams] = useSearchParams();
	const data = useWeeklyForecast(searchParams.get("city"));

	// console.log("details ", details);
	return useMemo(() => <WeeklyForecast data={data} />, [data]);
}

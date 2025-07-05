import React, { useMemo } from "react";

import useCityDetails from "../hooks/useCityDetails";

import DailyForecast from "../components/details/forecast/daily/DailyForecast";
import { useSearchParams } from "react-router-dom";

export default function DailyForecastPage() {
	const [searchParams] = useSearchParams();
	const details = useCityDetails(searchParams.get("city"));
	return useMemo(() => <DailyForecast details={details} />, [details]);
}

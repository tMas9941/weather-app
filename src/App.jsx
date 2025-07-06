import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import DailyForecastPage from "./pages/DailyForecastPage.jsx";
import WeeklyForecastPage from "./pages/WeeklyForecastPage.jsx";
import Header from "./components/header/Header.jsx";

import { citiesList } from "./global/citiesData.js";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Navigate to={`daily?city=${citiesList.value[0]}`} />} />
					<Route path="daily" element={<DailyForecastPage />} />
					<Route path="weekly" element={<WeeklyForecastPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

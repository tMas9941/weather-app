import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import DailyForecastPage from "./pages/DailyForecastPage.jsx";
import Header from "./components/header/Header.jsx";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<DailyForecastPage />} />
					<Route path="daily" element={<DailyForecastPage />} />
					<Route path="weekly" element={<div>weekly</div>} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

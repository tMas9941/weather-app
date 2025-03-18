import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WEATHER_API_KEY } from "./constants/keys.js";
import List from "./components/city/List.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<List />} />
			</Routes>
		</Router>
	);
}

export default App;

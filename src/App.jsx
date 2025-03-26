import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import City from "./pages/City.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";

function App() {
	return (
		<Router>
			<CitiesProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/city/:id" element={<City />} />
				</Routes>
			</CitiesProvider>
		</Router>
	);
}

export default App;

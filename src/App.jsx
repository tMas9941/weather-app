import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";

function App() {
	return (
		<Router>
			<CitiesProvider>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</CitiesProvider>
		</Router>
	);
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import City from "./pages/City.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/city/:id" element={<City />} />
			</Routes>
		</Router>
	);
}

export default App;

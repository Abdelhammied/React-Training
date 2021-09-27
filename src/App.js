// Packages and apis
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header";
import Routes from "./routes/routes";

// Css
import "./App.css";

export default function App() {
	return (
		<Router>
			<Header />

			<Routes />
		</Router>
	);
}

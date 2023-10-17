import React from "react";
import "./App.css";
import "animate.css";
import Yes from "./views/Yes";
import No from "./views/No";
import { Routes ,Route } from "react-router-dom";
import Search from "./components/Search";

const App = () => {

	return (
		<div>
		
			<Routes>
				<Route path="/" element={<Search />} />
				<Route path="/yes" element={<Yes />} />
				<Route path="/no" element={<No />} />
			</Routes>


		</div>
	);
};

export default App;

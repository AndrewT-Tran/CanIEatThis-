import React, { useState, useEffect } from "react";
import "./App.css";
import "animate.css";
import Main from "./views/Main";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const body = document.querySelector("body");
		if (darkMode) {
			body.classList.add("dark-mode");
		} else {
			body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div>
			<Main />

			<button className="btn-md glass accent" onClick={toggleDarkMode}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
		</div>
	);
};

export default App;

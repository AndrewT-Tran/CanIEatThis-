import Search from "../components/Search";
import { Route, Routes } from "react-router-dom";
import NutritionTable from "./NutritionTable";
import React, { useState, useEffect } from "react";

const Main = () => {
	const [searchHistory, setSearchHistory] = useState([]);

	useEffect(() => {
		const history = localStorage.getItem("searchHistory");
		if (history) {
			setSearchHistory(JSON.parse(history));
		}
	}, []);



	return (
		<div>
			{searchHistory.length > 0 && (
				<div>
					<h2>Search history:</h2>
					<ul>
						{searchHistory.map((query, index) => (
							<li key={index}>{query}</li>
						))}
					</ul>
				</div>
			)}

			<Routes>
				<Route path="/" element={<Search />} />
				<Route path="/nutritison/:id" element={<NutritionTable />} />
			</Routes>
		</div>
	);
};

export default Main;


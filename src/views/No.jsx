import React, { useState } from "react";
import NutritionTable from "./NutritionTable";

const No = ({ sugars, query, carbs, calories, submitClick }) => {
		function handleClick() {
		window.location.href = "/";
	}
	const [showDetails, setShowDetails] = useState(false); // new state variable
	const [results, setResults] = useState(null); // new state variable

	// function to fetch nutrition data
	async function fetchNutritionData() {
		const app_id = "c01e2d6f";
		const app_key = "f5ef2794e70ef81b4ef13e618f574cf2";
		const nutrition_type = "logging";
		const response = await fetch(
			`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=${nutrition_type}&ingr=${query}`
		);
		const data = await response.json();
		setResults(data);
	}

	if (sugars > 21 || carbs > 20) {
		return (
			<div className="animate__animated animate__backInRight">
				<div className="w-full mx-auto text-deanger opacity-50 m-2">
					<div className="card w-96 bg-danger selection:bg-opacity-30">
						<div className="card-body bg-red-500">
							<h2 className="card-title font-light text-center font-sans text-2xl text-red-200">
								<span className="text-3xl text-center font-semibold text-red-950">
									Nah!s
								</span>{" "}
								you should think twice!
							</h2>
							<h3 className="text-center font-medium font-sans text-2xl uppercase">
								Unfortunately, the food you searched for contains too much sugar
								or carbs.
							</h3>
							<div className="card-actions justify-end">
								<button
									onClick={submitClick}
									className="text-white btn glass bg-red-900 bg-opacity-70 font-light "
								>
									Search Again
								</button>
								<button
									onClick={() => {
										setShowDetails(true);
										fetchNutritionData();
									}}
									className="text-white btn glass bg-red-900 bg-opacity-70 font-light ml-2"
								>
									Show Details
								</button>
								{showDetails && results ? (
									<NutritionTable results={results} />
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<NutritionTable
				results={results}
				showDetails={showDetails}
				setShowDetails={setShowDetails}
			/>
		);
	}
};

export default No;


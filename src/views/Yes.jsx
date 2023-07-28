import React, { useState } from "react";
import NutritionTable from "./NutritionTable";

const Yes = ({ sugars, query, carbs, calories }) => {
	function submitClick() {
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

	if (sugars < 20) {
		return (
			<>
				<div className="w-full mx-auto m-2">
					<div className="card w-96 bg-success bg-opacity-50 text-black">
						<div className="card-body">
							<h2 className="card-title font-sans text-xl text-green-100">
								<span className="text-3xl font-bold text-green-800">YES!</span>
								based on the glucouse and carbohydrate content you're good!
							</h2>
							<h3 className="text-center font-medium font-sans text-2xl uppercase">
								{query}
							</h3>

							<p className="text-center text-xl emphasis">

								<span className="font-semibold uppercase text-primary-focus">
									{" "}
									{query}{" "}
								</span>{" "}
								has <span className="font-bold">{sugars.toFixed(2)} </span>
								grams of sugar and{" "}
								<span className="font-bold">
									{calories.toFixed(0)} calories{" "}
								</span>
								which is greater than the daily recommended value{" "}
							</p>
							<div className="card-actions justify-end">
								<button
									onClick={submitClick}
									className="text-white btn glass bg-emerald-900 bg-opacity-70 font-light ">
									Search Again
								</button>
								<button
									onClick={() => {
										setShowDetails(true);
										fetchNutritionData();
									}}
									className="text-white btn glass bg-emerald-900 bg-opacity-70 font-light ml-2">
									Show Details
								</button>
								{showDetails && results ? (
									<NutritionTable results={results} />
								) : null}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default Yes;

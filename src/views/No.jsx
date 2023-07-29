import React, { useState } from 'react';
import NutritionTable from './NutritionTable';

const No = ({ sugars, query, carbs, calories, submitClick }) => {
	const [showDetails, setShowDetails] = useState(false); // new state variable
	const [results, setResults] = useState(null); // new state variable
	function submitClick() {
		window.location.href = "/";
	}

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
				<div className="w-full mx-auto m-2">
					<div className="card w-96 bg-red-500 bg-opacity-50 text-black">
						<div className="card-body">
							<h2 className="card-title font-sans text-xl text-red-100">
								<span className="text-3xl font-bold text-base-300-800">NO !</span>
								based on the glucose and carbohydrate content you're good!
							</h2>
							<h3 className="text-center font-medium font-sans text-2xl uppercase">
								{query}
							</h3>
							<p className="text-center text-xl emphasis">
								<span className="font-semibold uppercase text-yellow-100">
									{" "}
									{query}{" "}
								</span>{" "}
								has <span className="font-bold">{sugars.toFixed(2)} </span>
								grams of sugar and{" "}
								<span className="font-bold">
									{calories.toFixed(0)} calories{" "}
								</span>
								which is less than the daily recommended value{" "}
							</p>
							<div className="card-actions justify-end">
								<button
									onClick={submitClick}
									className="text-white btn glass bg-danger bg-opacity-70 font-sans "
								>
									Search Again
								</button>
								<button
									onClick={() => {
										setShowDetails(true);
										fetchNutritionData();
									}}
									className="text-black btn glass bg-warning bg-opacity-70 font-sans ml-2"
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
	}
};

export default No;

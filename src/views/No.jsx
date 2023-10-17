import React, { useState, useEffect } from "react";
import NutritionTable from "./NutritionTable";
import "animate.css";

const No = ({ sugars, carbs, calories, inputQuery }) => {
	const [showDetails, setShowDetails] = useState(false);
	const [results, setResults] = useState(null);
	const [finalQuery, setFinalQuery] = useState(inputQuery); // Finalized query for fetching

	useEffect(() => {
		setFinalQuery(inputQuery);
	}, [inputQuery]);

	useEffect(() => {
		if (showDetails) {
			async function fetchNutritionData() {
				const app_id = process.env.REACT_APP_APP_ID;
				const app_key = process.env.REACT_APP_APP_KEY;
				const nutrition_type = "logging";
				const response = await fetch(
					`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=${nutrition_type}&ingr=${finalQuery}`
				);
				const data = await response.json();
				setResults(data);
			}
			fetchNutritionData();
		}
	}, [showDetails, finalQuery]);

	const onSearchAgain = () => {
		window.location.reload();
	};

	if (sugars > 20 || carbs > 20) {
		return (
			<>
				<div className="w-full mx-auto my-3 m-2 animate__animated animate__bounce">
					<div className="flex justify-center items-center">
						<div className="card w-96 md:w-1/2 bg-red-700 bg-opacity-50 text-white">
							<div className="card-body">
								<h1 className="animate__animated animate__bounceInRight text-5xl md:text-4xl text-center font-semibold text-rose-200 my-2">
									NO!
								</h1>

								<p className="text-center font-sans text-xl emphasis">
									<span className="font-semibold uppercase text-red-500">
										{inputQuery}
									</span>
									{""} has{" "}
									<span className="font-bold text-rose-300">{sugars.toFixed(2)} </span>
									grams of sugar , {""}
									<span className="font-bold text-rose-300">{carbs.toFixed(2)} </span> grams
									of carbohydrates, and{" "}
									<span className="font-bold text-rose-300">
										{calories.toFixed(0)} calories {" "}
									</span>
									which is greater than the daily recommended value{" "}
								</p>

								<div className="card-actions justify-center my-2">
									<button
										onClick={() => {
											onSearchAgain();
										}}
										className="text-white btn glass bg-red-600 bg-opacity-70 font-sans ">
										Search Again
									</button>
									{/* <button
										onClick={() => setShowDetails(true)}
										className="text-black btn glass bg-orange-300 bg-opacity-70 font-sans ml-2">
										Show Details
									</button> */}

									{showDetails && results ? (
										<NutritionTable results={results} />
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default No;

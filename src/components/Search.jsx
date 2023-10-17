import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Yes from "../views/Yes";
import No from "../views/No";
import "animate.css";

const Search = () => {
	const [query, setQuery] = useState("");
	const [finalQuery, setFinalQuery] = useState("");
	const [results, setResults] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		setFinalQuery(query);
		fetchData(query);
	};

	const fetchData = (queryToUse) => {
		const app_id = "c01e2d6f";
		const app_key = "f5ef2794e70ef81b4ef13e618f574cf2";
		const nutrition_type = "logging";
		axios
			.get(
				`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=${nutrition_type}&ingr=${queryToUse}`
			)
			.then((response) => {
				setResults(response.data);
				setError(null);
			})
			.catch((error) => {
				console.error(error);
				setError("An error occurred. Please try again later.");
			});
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen">
				<div className="flex justify-center items-center">
					<img
						src="https://i.ibb.co/Zmjj9gh/android-chrome-192x192.png"
						alt="logo"
						width="150"
						height="150"
						className="animate__animated animate__bounceInLeft"
					/>
				</div>
				<header className="text-center mt-4 mb-8 font-sans text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
					<h1 className="mb-3 mx-2 text-3xl font-light sm:text-3xl md:text-4xl lg:text-6xl">
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-focus from-secondary">
							Can I {}
						</span>
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-accent from-primary-focus">
							Eat This ? {}
						</span>
					</h1>
				</header>

				<div className="flex flex-col md:flex-row justify-center items-center w-3/4">
					<form
						onSubmit={handleSubmit}
						className="w-full md:w-auto text-center">
						<input
							type="text"
							placeholder="1 cup of rice or 1 slice of bread"
							className="border bg-transparent border-orange-300 rounded p-1 w-full md:w-80"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<button
							type="submit"
							className="btn my-3 mx-3 btn-sm bg-orange-600 w-3/4 md:w-auto text-center md:text-base"
							style={{ fontSize: "0.8rem" }}>
							Submit
						</button>
					</form>
				</div>

				<div className="flex justify-center items-center">
					{error ? (
						<div className="animate__animated animate__wobble text-rose-600 font-semibold font-sans text-lg">
							{error}
						</div>
					) : null}

					{results ? (
						<div className="flex justify-center items-center">
							{results.totalNutrients.SUGAR.quantity > 17 ||
							results.totalNutrients.CHOCDF.quantity > 20 ? (
								<No
									sugars={results.totalNutrients.SUGAR.quantity}
									calories={results.calories}
									carbs={results.totalNutrients.CHOCDF.quantity}
									inputQuery={finalQuery}
								/>
							) : (
								<Yes
									sugars={results.totalNutrients.SUGAR.quantity}
									calories={results.calories}
									carbs={results.totalNutrients.CHOCDF.quantity}
									inputQuery={finalQuery}
								/>
							)}
						</div>
					) : null}
				</div>
				<div className="text-sm font-light text-justify mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-white p-4">
					Most adults with diabetes aim for{" "}
					<span className="text-primary font-bold">45-60 grams </span> of carbs
					per meal and{" "}
					<span className="text-secondary font-bold">
						{" "}
						15-20 grams per snack.
					</span>{" "}
					That number may go up or down, depending on how active you are and the
					medicines you take, so check with your doctor or a registered
					dietitian.{" "}
				</div>
			</div>
		</>
	);
};

export default Search;

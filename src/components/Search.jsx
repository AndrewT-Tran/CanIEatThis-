import React, { useState, useEffect } from "react";
import axios from "axios";
import Yes from "../views/Yes";
import No from "../views/No";

const Search = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const app_id = "c01e2d6f";
		const app_key = "f5ef2794e70ef81b4ef13e618f574cf2";
		const nutrition_type = "logging";
		axios
			.get(
				`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=${nutrition_type}&ingr=${query}`
			)
			.then((response) => setResults(response.data))
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		const onChange = (event) => {
			if (event.target) {
				setQuery(event.target.value);
			}
		};
		const delayDebounceFn = setTimeout(() => {
			onChange(query);
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [setQuery, query]);

	return (
		<>
			<div className="flex justify-center items-center h-screen flex-col">
				<header className="text-center row mb-8 font-Poppins">
					<h1 className="mb-4 text-3xl font-semibold font-sans text-gray-900 md:text-5xl lg:text-6xl">
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-focus from-secondary">
							Can I {}
						</span>
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-accent from-primary-focus">
							Eat This ? {}
						</span>
					</h1>
				</header>

				<div className="flex flex-row ">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Enter food or ingredient"
							className="border border-primary rounded-lg py-2 px-2"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<button type="submit" className="btn btn-active">
							Submit
						</button>
					</form>
				</div>
				<div className=" mx-auto my-10">
					{results ? (
						results.totalNutrients.SUGAR.quantity > 17 || results.totalNutrients.CHOCDF.quantity > 20 ? (
							<No
								sugars={results.totalNutrients.SUGAR.quantity}
								calories={results.calories}
								carbs={results.totalNutrients.CHOCDF.quantity}
								query={query}
							/>
						) : (
							<Yes
								sugars={results.totalNutrients.SUGAR.quantity}
								calories={results.calories}
								carbs={results.totalNutrients.CHOCDF.quantity}
								query={query}
							/>
						)
					) : null}
					{/* {results ? <NutritionTable results={results} /> : null} */}
				</div>
				<div className="text-md text-center mx-auto w-1/4 ">
					Most adults with diabetes aim for{" "}
					<span className="text-primary font-bold">45-60 grams </span> of carbs
					per meal and
					<span className="text-secondary font-bold">
						15-20 grams per snack.
					</span>
					That number may go up or down, depending on how active you are and the
					medicines you take, so check with your doctor or a registered
					dietitian.{" "}
				</div>
			</div>
		</>
	);
};

export default Search;

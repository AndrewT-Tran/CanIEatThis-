import { useState } from "react";

const FetchData = () => {
	const [results, setResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchNutritionData(query) {
		setIsLoading(true);
		setError(null);

		try {
			const app_id = "302828c2";
			const app_key = "566b39ae80deb1e7425cc0fa9345e9bf";
			const nutrition_type = "logging";
			const response = await fetch(
				`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=${nutrition_type}&ingr=${query}`
			);

			if (response.ok) {
				const data = await response.json();
				setResults(data);
			} else {
				setError(`Failed to fetch data: ${response.statusText}`);
			}
		} catch (error) {
			setError(`An error occurred: ${error.toString()}`);
		} finally {
			setIsLoading(false);
		}
	}

	return { results, fetchNutritionData, isLoading, error };
};

export default FetchData;

import { useState } from "react";

const FetchData = () => {
	const [results, setResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchNutritionData(query) {
		setIsLoading(true);
		setError(null);
		
		try {
			const app_id = "c01e2d6f";
			const app_key = "f5ef2794e70ef81b4ef13e618f574cf2";
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

import React, { useState } from "react";

const Search = () => {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState("");
const handleSearch = async () => {
	const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
	const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&nutrition-type=logging&ingr=${query}`;

	try {
		const response = await fetch(corsProxyUrl + apiUrl);
		const data = await response.text();
		console.log(data);
		setResult(data);
	} catch (error) {
		console.error(error);
	}
};
	return (
		<div>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
			<pre>{result}</pre>
		</div>
	);
};

export default Search;

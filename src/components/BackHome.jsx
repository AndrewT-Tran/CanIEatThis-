import React from "react";
import { useNavigate } from "react-router-dom";

const BackHomeButton = () => {
	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate.push("/search");
	};

	return (
		<button className="btn btn-accent glass" onClick={handleClick}>
			{" "}
			Back to Search{" "}
		</button>
	);
};

export default BackHomeButton;

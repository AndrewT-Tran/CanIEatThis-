import React, { useState } from "react";
import NutritionTable from "./NutritionTable";
import "animate.css";

const No = ({ sugars, query, carbs, calories }) => {
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
  const onSearchAgain = () => {
    window.location.reload();
  };

  if (sugars > 20 || carbs > 20) {
    return (
      <>
        <div className="w-full mx-auto m-2 animate__animated animate__bounce">
          <div className="card w-96 md:w-1/2 bg-red-700 bg-opacity-50 text-white">
            <div className="card-body">
              <h1 className="animate__animated animate__bounceInRight text-4xl md:text-3xl text-center font-bold text-rose-400 my-2">
                NO!
              </h1>

              <h3 className="text-center font-sans text-xl md:text-2xl uppercase">
                {query}
              </h3>

              <p className="text-center text-lg md:text-xl font-light emphasis">
                <span className="font-semibold uppercase text-neutral-950">
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
                  onClick={() => {
                    onSearchAgain();
                  }}
                  className="text-white btn glass bg-danger bg-opacity-70 font-sans text-sm md:text-base"
                >
                  Search Again
                </button>
                <button
                  onClick={() => {
                    setShowDetails(true);
                    fetchNutritionData();
                  }}
                  className="text-black btn glass bg-orange-300 bg-opacity-70 font-sans ml-2 text-sm md:text-base"
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
      </>
    );
  }
};

export default No;

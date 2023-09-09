import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Yes from "../views/Yes";
import No from "../views/No";
import "animate.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const app_id = "c01e2d6f";
    const app_key = "f5ef2794e70ef81b4ef13e618f574cf2";
    const nutrition_type = "logging";
    axios
      .get(
        `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&nutrition-type=${nutrition_type}&ingr=${query}`
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

  useEffect(() => {
    const onChange = (event) => {
      if (event.target) {
        let value = event.target.value;
        if (!value.includes("1")) {
          value = "1" + value;
        }
        setQuery(value);
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.ibb.co/Zmjj9gh/android-chrome-192x192.png"
            alt="logo"
            width="150"
            height="150"
			className="animate__animated animate__bounceInLeft"
          />
        </div>
        <header className="text-center row mt-4 mb-8 font-sans">
          <h1 className="mb-3 mx-2 text-3xl font-light md:text-3xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-focus from-secondary">
              Can I {}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-accent from-primary-focus">
              Eat This ? {}
            </span>
          </h1>
        </header>

        <div className="flex flex-row justify-baseline ">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="1 cup of rice or 1 slice of bread"
              className="border bg-transparent border-orange-300  rounded p-1 w-80"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              type="submit"
              className="btn mx-3 my-2 btn-sm bg-orange-600 glass"
              style={{ fontSize: "0.8rem" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" mx-auto my-5">
          {error ? (
            <div className="animate__animated animate__wobble text-rose-600 font-semibold font-sans text-lg">
              {error}
            </div>
          ) : results ? (
            results.totalNutrients.SUGAR.quantity > 17 ||
            results.totalNutrients.CHOCDF.quantity > 20 ? (
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
        <div className="text-sm font-light text-justify mx-auto w-2/5 text-white p-4">
          Most adults with diabetes aim for{" "}
          <span className="text-primary font-bold">45-60 grams </span> of carbs
          per meal and{" "}
          <span className="text-secondary font-bold">
            {" "}
            15-20 grams per snack.
          </span>
          That number may go up or down, depending on how active you are and the
          medicines you take, so check with your doctor or a registered
          dietitian.{" "}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          /* Adjust font sizes for smaller screens */
          .text-3xl {
            font-size: 2rem;
          }
          .text-6xl {
            font-size: 3rem;
          }
          .text-sm {
            font-size: 0.8rem;
          }
          /* Adjust input width for smaller screens */
          .w-80 {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Search;

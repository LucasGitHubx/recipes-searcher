import { useState, useEffect } from "react";
import { useAPI } from "../hooks/useAPI";

import Recipe from "../components/Recipe";

export default function MainPage() {
  const [data, setData] = useState([]);
  const [meal, setMeal] = useState("");
  const [mealError, setMealError] = useState(false);
  const callAPI = useAPI();

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();

    if (meal.trim() == "") {
      setMealError(true);
    } else {
      callAPI(meal, setData);
      setMealError(false);
      setMeal("");
    }
  }

  return (
    <section className="main-page">
      <form onSubmit={handleSubmit}>
        <label className={mealError ? "label-error" : undefined}>
          You must enter a recipe name
        </label>
        <input
          type="text"
          placeholder="E.g Arrabiata, Bread, Chicken"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
        <button>Submit</button>
      </form>

      {data.length == 0 ? (
        <h2>Enter a recipe name...</h2>
      ) : (
        <>
          {data.meals === null ? (
            <h2>The recipe that you entered doesn't exist...</h2>
          ) : (
            <article className="recipes">
              {data.meals.map((recipe) => {
                return <Recipe recipe={recipe} key={recipe.idMeal} />;
              })}
            </article>
          )}
        </>
      )}
    </section>
  );
}

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAPIbyID } from "../hooks/useAPIbyID";

export default function Recipe() {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState();
  const [instructions, setInstructions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const callAPI = useAPIbyID();

  useEffect(() => {
    console.log(singleRecipe);
  }, [singleRecipe]);

  useEffect(() => {
    if (loaded) {
      const instructions = singleRecipe.strInstructions.split("\n");
      const instructionsFiltered = instructions.filter(
        (item) => item.includes("STEP") != true
      );
      const newInstructions = instructionsFiltered.filter(
        (item) => item != "\r"
      );

      setInstructions(newInstructions);
    }
  }, [loaded]);

  useEffect(() => {
    callAPI(id, setSingleRecipe, setLoaded);
  }, []);

  return (
    <>
      {!loaded ? (
        <h2>Loading</h2>
      ) : (
        <div className="meal">
          <h2>{singleRecipe.strMeal}</h2>
          <img src={singleRecipe.strMealThumb} alt="" />
          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {instructions.map((instruction, id) => {
                return (
                  <li key={id}>
                    <span>{id}) </span>
                    {instruction}
                  </li>
                );
              })}
            </ol>
          </div>

          <Link to="/recipes-searcher">Home</Link>
        </div>
      )}
    </>
  );
}

/* 
What we have to do is the next ====>
1. Now that we have each recipe page by using nested routes, we have to call the api with
the ?i= param that specifies an ID. (DONE)

2. After that, we have to bring the information and put it some styles. I'd like to do the next:

If we check the API, we will see that when you get a recipe you get all the ingredients, but the recipe always brings 20 ingredients and only uses half of them or even less, so we have to take care about that. The same happens with the measures for each ingredient.
*/

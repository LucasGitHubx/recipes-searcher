import { Link } from "react-router-dom";

export default function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="info">
        <h3>{recipe.strMeal}</h3>{" "}
        <i>
          {recipe.strArea} {recipe.strCategory}
        </i>
      </div>
      <Link to={`/${recipe.idMeal}`}>See more &#8594;</Link>
    </div>
  );
}

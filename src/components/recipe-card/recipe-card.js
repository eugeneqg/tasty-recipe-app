import "./recipe-card.sass";
import { NavLink } from "react-router-dom";

const RecipeCard = ({id, recipe}) => {
    return (
        <NavLink style={{ textDecoration: 'none', color: "black" }} to={`/recipe-page/${recipe.idMeal}`} className="d-flex justify-content-center align-items-center ">
            <div className="back-post d-flex align-items-center gap-3" key={recipe.strMeal}>
                <img  src={recipe.strMealThumb} alt={recipe.strMealThumb}></img>
                {recipe.strMeal.toUpperCase()}
            </div>
        </NavLink>
    )
}

export default RecipeCard;
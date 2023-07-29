import { NavLink } from "react-router-dom"
import "./categories.sass";

const Category = ({cat}) => {
    
    return (
        <div className="category d-flex justify-content-center align-items-center img-fluid" key={cat.idCategory}>
            <NavLink style={{ textDecoration: 'none', color: "white" }} to={`/category-page/c=${cat.strCategory}`} className="d-flex justify-content-center align-items-center category-name">
                {cat.strCategory.toUpperCase()}
            </NavLink>
            <img className="category-pic" src={cat.strCategoryThumb} alt={cat.strCategory}></img>
        </div>
    )
}

const LoadingCategory = ({cat, loader}) => {

    return (
        <div className="category d-flex justify-content-center align-items-center img-fluid" key={cat.idCategory}>
            <div className="d-flex justify-content-center align-items-center category-name">
                <p>{cat.strCategory.toUpperCase()}</p>
            </div>
            <img className="loader" loading="lazy" src={loader} alt={cat.strCategory}></img>
        </div>
    )
}

export { Category, LoadingCategory };
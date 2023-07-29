import {Col, Row} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const RecipePageInfo = ({data, changeButtons, getTags}) => {
    return (
        <div style={{"backgroundImage": `url(${data.strMealThumb})`}} className="recipe-page-wrapper">
            <Row className="blur d-flex flex-wrap justify-content-center recipe-info">
                <Col md={3} className="col text-center">
                    <img className="recipe-page-img" src={data.strMealThumb} alt={data.strMeal}></img>
                </Col>
                <Col md={6} className="m-0">
                    <h1 className="recipe-name mb-3">{data.strMeal}</h1>
                    <p><NavLink className="tag-link" to={`/category-page/c=${data.strCategory}`}>{data.strCategory}</NavLink></p>
                    <p><NavLink className="tag-link" to={`/category-page/a=${data.strArea}`}>{data.strArea}</NavLink></p>
                    <div className="d-flex gap-1">Tags: {getTags(data)}</div>
                </Col>
                <Col md={3}>
                    {changeButtons()}
                </Col>
            </Row>
        </div>
    )
}

export default RecipePageInfo;
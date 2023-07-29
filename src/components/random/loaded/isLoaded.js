import {Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Loaded = ({data}) => {

    return (
        <Row className="random-recipe">
            <Col md={5}>
                <div className="random-pic-wrapper d-flex align-items-center">
                    <img src={data.strMealThumb} alt={data.strMeal}></img>
                </div>
            </Col>
            <Col md={7} className="d-flex text-content gap-2">
                    <h3 className="w-100">{data.strMeal}</h3>
                    <p className="w-100 ">{data.strInstructions ? data.strInstructions.slice(0, 300) + "..." : "Loading"}</p>
                    <NavLink to={`/recipe-page/${data.idMeal}`}><button className="buttons">Full recipe</button></NavLink>
            </Col>
        </Row>
    )
}

const NotLoaded = ({data, loader}) => {

    return (
        <Row>
            <Col md={5}>
                <div className="random-pic-wrapper d-flex align-items-center justify-content-center">
                    <img src={loader} alt={data.strMeal} className="img-fluid"></img>
                </div>
            </Col>
            <Col md={7} className="d-flex align-items-center">
                <div className="text-content">
                    <h3 className="w-100">{data.strMeal}</h3>
                    <p className="w-100 ">{data.strInstructions ? data.strInstructions.slice(0, 300) + "..." : "Loading"}</p>
                </div>
            </Col>
        </Row>  
    )
}


export {Loaded, NotLoaded};
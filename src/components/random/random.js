import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetData from "../../services/services";
import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getRandomRecipe } from "../../redux/slices/randomSlice";
import loader from "../../public/img/loader.svg";
import "./random.sass";

const RandomRecipe = () => {

    const dispatch = useDispatch();
    const randomRecipe = useSelector(state => state.random.meal);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(data => {
                dispatch(getRandomRecipe(...data.meals));
                setIsLoaded(true);
            })
            .catch(e => {
                throw new Error("Couldn't fetch a random recipe");
            })
    }, [dispatch]);

    const recipe = isLoaded ?
        <Row className="random-recipe">
            <Col md={5}>
                <div className="random-pic-wrapper d-flex align-items-center">
                    <img src={randomRecipe.strMealThumb} alt={randomRecipe.strMeal} className="img-fluid"></img>
                </div>
            </Col>
            <Col md={7} className="d-flex align-items-center">
                <div className="text-content">
                    <h3 className="w-100">{randomRecipe.strMeal}</h3>
                    <p className="w-100 ">{randomRecipe.strInstructions ? randomRecipe.strInstructions.slice(0, 300) + "..." : "Loading"}</p>
                    <NavLink to={`/recipe-page/${randomRecipe.idMeal}`}><button className="buttons">Full recipe</button></NavLink>
                </div>
            </Col>
        </Row> :
        <Row>
            <Col md={5}>
                <div className="random-pic-wrapper d-flex align-items-center justify-content-center">
                    <img src={loader} alt={randomRecipe.strMeal} className="img-fluid"></img>
                </div>
            </Col>
            <Col md={7} className="d-flex align-items-center">
                <div className="text-content">
                    <h3 className="w-100">{randomRecipe.strMeal}</h3>
                    <p className="w-100 ">{randomRecipe.strInstructions ? randomRecipe.strInstructions.slice(0, 300) + "..." : "Loading"}</p>
                </div>
            </Col>
        </Row>         

    return (
        <Container fluid="md" className="mb-5">
            <div className="title-link-wrapper"><h2 className="title-link">Let’s try something random!</h2></div>
            {recipe}
        </Container>
    )
}

export default RandomRecipe;
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import RecipeCard from "../components/recipe-card/recipe-card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import { useDispatch } from "react-redux";
import { clearResults } from "../redux/slices/searchSlice";
import { NavLink } from "react-router-dom";
import GetData from "../services/services";
import { getResults } from "../redux/slices/searchSlice";
import "./search-page.sass";
import loader from "../public/img/loader.svg"

const SearchPage = () => {
    const searchResults = useSelector(state => state.search.results);
    const dispatch = useDispatch();
    const [input, setInput] = React.useState("");

    const handler = (e) => {
        setInput(e.target.value);
    }

    const recipeList = searchResults !== null ?
    searchResults.slice(0, 10).map(recipe => {

            return (
                <RecipeCard key={recipe.isMeal} id={recipe.idMeal} recipe={recipe}/>
            )}) :
                // <img src={loader} alt="loading"></img>
                <p>No results</p>

    React.useEffect(() => {
        if (input) {
            GetData.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(res => {
                dispatch(getResults(res.meals))
            });
        }
    }, [input, dispatch]);

    return (
        <Container fluid="md" className="margin-top">
            <div className="title-link-wrapper"><h2>Search</h2></div>
            <input onChange={handler} className="search-input full-search ps-3  mb-5" type="text" placeholder="What do you want eat today?"></input>
            <Row className="">
                <Col md={12} className="category-grid">
                    {recipeList}
                </Col>
                    {/* <p>{pagination(pageNumbers)}</p> */}
            </Row>
        </Container>
    )
}

export default SearchPage;
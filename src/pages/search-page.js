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
import Pagination from "../components/pagination/pagination";

const SearchPage = () => {
    const searchResults = useSelector(state => state.search.results);
    const dispatch = useDispatch();
    const [input, setInput] = React.useState("");
    const [totalCount, setTotalCount] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);

    const indexOfLastPost = currentPage * 10;
    const indexOfFirstPost = indexOfLastPost - 10;

    const handler = (e) => {
        setInput(e.target.value);
    }

    const recipeList = searchResults !== null ?
    searchResults.slice(indexOfFirstPost, indexOfLastPost).map(recipe => {

            return (
                <RecipeCard key={recipe.isMeal} id={recipe.idMeal} recipe={recipe}/>
            )}) :
                // <img src={loader} alt="loading"></img>
                <p>No results</p>

    React.useEffect(() => {
        if (input) {
            GetData.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(res => {
                setTotalCount(res?.meals.length + 1);
                dispatch(getResults(res.meals))
            });
        }
    }, [input, dispatch]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
     };

    return (
        <Container fluid="md" className="margin-top">
            <div className="title-link-wrapper"><h2>Search</h2></div>
            <input onChange={handler} className="search-input full-search ps-3  mb-5" type="text" placeholder="What do you want eat today?"></input>
            <Row className="margin">
                <Col md={12} className="category-grid">
                    {recipeList}
                </Col>
            </Row>
            <Pagination total={totalCount} paginate={paginate} currentPage={currentPage} />
        </Container>
    )
}

export default SearchPage;
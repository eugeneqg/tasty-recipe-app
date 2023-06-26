import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import RecipeCard from "../components/recipe-card/recipe-card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import loader from "../public/img/loader.svg"

const SearchPage = () => {
    const searchResults = useSelector(state => state.search.results);

    const recipeList = searchResults !== null ?
    searchResults.slice(0, 10).map(recipe => {

            return (
                <RecipeCard key={recipe.isMeal} id={recipe.idMeal} recipe={recipe}/>
            )}) :
                // <img src={loader} alt="loading"></img>
                <p>No results</p>

    console.log(searchResults)
    return (
        <Container fluid="md" className="margin-top">
            {/* <div className="title-link-wrapper margin-top"><h2 className="title-link">Search</h2></div>
            <div className="category-grid">
                {recipeList}
            </div> */}
            <div className="title-link-wrapper"><h2>Search</h2></div>
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
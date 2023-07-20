import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../redux/slices/categorySlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import GetData from "../services/services";
import RecipeCard from "../components/recipe-card/recipe-card";
import loader from "../public/img/loader.svg";
import "./category-page.sass"; 
import Pagination from "../components/pagination/pagination";

const CategoryPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.category.meals);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [totalCount, setTotalCount] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);

    const indexOfLastPost = currentPage * 10;
    const indexOfFirstPost = indexOfLastPost - 10;

    React.useEffect(() => {
        GetData.getData(`https://www.themealdb.com/api/json/v1/1/filter.php?${id}`)
        .then(data => {
            setTotalCount(data.meals.length);
            dispatch(getCategory(data.meals));
            setTotalCount(data.meals.length + 1);
            setIsLoaded(true);
        })
        .catch(e => {
            throw new Error("Couldn't load category data")
        });
    }, [dispatch, isLoaded, id]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const recipeList = categoryData.slice(indexOfFirstPost, indexOfLastPost).map(recipe => {
        if (isLoaded) {
            return (
                <RecipeCard key={recipe.isMeal} id={id} recipe={recipe}/>
            )
        } else {
            return (
                // <LoadingCategory cat={cat} loader={loader}/> 
                <img src={loader} alt="loading"></img>
            )
        }
    });

    const categoryName = id.substring(2, id.length);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
     };

    return (
        <Container fluid="md" className="margin-top">
                    <h2>{categoryName}</h2>
                    <Row className="margin">
                        <Col md={12} className="category-grid">
                            {recipeList}
                        </Col>
                    </Row>
                    <Pagination total={totalCount} paginate={paginate} currentPage={currentPage}/>
        </Container>
    )
}

export default CategoryPage;
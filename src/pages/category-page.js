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

const CategoryPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.category.meals);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [totalCount, setTotalCount] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageNumbers, setPageNumbers] = React.useState();

    React.useEffect(() => {
        GetData.getData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        .then(data => {
            dispatch(getCategory(data.meals));
            setTotalCount(data.meals.length + 1);
            setPageNumbers(Math.ceil((data.meals.length + 1) / 8));
            setIsLoaded(true);
        })
        .catch(e => {
            throw new Error("Couldn't load category data")
        });
    }, [dispatch, isLoaded, categoryData, id, pageNumbers]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const recipeList = categoryData.slice(0, 10).map(recipe => {
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

    // const pagination = (num) => {
    //     for (let i = 1; i <= num; i++) {
    //         return (
    //             <p>{i}</p>
    //         )
    //     }
    // }

    return (
        <Container fluid="md" className="margin-top">
                    <h2>Categories</h2>
                    <Row className="">
                        <Col md={12} className="category-grid">
                            {recipeList}
                        </Col>
                        {/* <p>{pagination(pageNumbers)}</p> */}
                    </Row>
        </Container>
    )
}

export default CategoryPage;
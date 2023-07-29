import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetData from "../../services/services";
import { NavLink } from "react-router-dom";
import "./all-categories-page.sass";
import loader from "../../public/img/loader.svg";

const AllCategoriesPage = () => {

    const [categoriesData, setCategoriesData] = React.useState([]);
    const [areLoaded, setAreLoaded] = React.useState(false);

    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(data => {
            setCategoriesData(data.categories);
            setAreLoaded(true);
        })
        .catch(e => {
            throw new Error(e);
        })
    }, [areLoaded]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const categories = areLoaded ?
        categoriesData.map(cat => {
            return (
            <NavLink style={{ textDecoration: 'none', color: "black" }} to={`/category-page/c=${cat.strCategory}`} className="d-flex justify-content-center align-items-center ">
                <div className="back-post d-flex align-items-center gap-3" key={cat.strCategory}>
                    <div className="img-wrapper">
                        <img src={cat.strCategoryThumb} alt={cat.strCategoryThumb}></img>
                    </div>
                    {cat.strCategory.toUpperCase()}
                </div>
            </NavLink>
            )
        }) :
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center"><img  src={loader} alt="loading"></img></div>

    return (

        <Container fluid="md" className="margin-top">
                    <h2>All Categories</h2>
                    <Row className="margin">
                        <Col md={12} className="category-grid">
                            {categories}
                        </Col>
                    </Row>
        </Container>
    )
}

export default AllCategoriesPage;
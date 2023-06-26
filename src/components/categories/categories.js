import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./categories.sass";
import React from "react";
import GetData from "../../services/services";
import { getCategories } from "../../redux/slices/categoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import loader from "../../public/img/loader.svg";
import { Category, LoadingCategory } from "./category";
import { NavLink } from "react-router-dom";

const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    const [areLoaded, setCategories] = React.useState(false);

    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => {
            dispatch(getCategories(res.categories));
            setCategories(true);
        })
        .catch(e => {
            throw new Error(`Couldn't load categories`)
        });
    }, [dispatch, areLoaded])

    const categoryList = categories.slice(0, 8).map(cat => {
        if (areLoaded) {
            return (
                <Category cat={cat}/>
            )
        } else {
            return (
                <LoadingCategory cat={cat} loader={loader}/>
            )
        }
    });

    return (
        <Container id="categories" className="mb-5" fluid="md">
            <div className="title-link-wrapper"><NavLink className="title-link" to={"categories"}><h2>Categories</h2></NavLink></div>
            <Row>
                <Col md={12} className="grid">
                    {categoryList}
                </Col>
            </Row>
        </Container>
    )
}

export default Categories;
import "./search.sass";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import React from "react";
import GetData from "../../../services/services";
import { getResults } from "../../../redux/slices/searchSlice";
import { useSelector, useDispatch } from "react-redux";
// import { clear } from "../redux/slices/searchSlice";
import { NavLink } from "react-router-dom";

const Search = () => {

    const [input, setInput] = React.useState("");

    const dispatch = useDispatch();

    const handler = (e) => {
        setInput(e.target.value);
    }

    React.useEffect(() => {

        if (input) {
            GetData.getData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(res => {
                dispatch(getResults(res.meals))
            });

            input ? document.querySelector('.search-button').disabled = false : document.querySelector('.search-button').disabled = true;
        }

    }, [input, dispatch]);
    
    return (
        <Container>
            <Row className="search d-flex justify-content-center align-items-center">
                <Col md={8} className="d-flex flex-wrap justify-content-center">
                    <h1 className="text-center mb-2">Let’s cook something <span>tasty</span></h1>
                    <Row className="w-100">
                        <Col className="m-0" xs={9}>
                            <form id="search-form">
                                <input onChange={handler} className="search-input ps-3" type="text" placeholder="What do you want eat today?"></input>
                            </form>
                        </Col>
                        <Col className="m-0" xs={3}>
                            <NavLink to={"search"}><button className="search-button" form="search-form" type="submit" disabled>Search</button></NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;
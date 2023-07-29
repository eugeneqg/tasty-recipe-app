import { Row, Col } from "react-bootstrap";
import React from "react";
import GetData from "../../services/services";
import { getResults } from "../../redux/slices/searchSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./main-search.sass";

const MainSearch = () => {

    const [input, setInput] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);

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
        }
        

        input ? setIsActive(true) : setIsActive(false);

        isActive ? document.querySelector('.search-button').disabled = false : document.querySelector('.search-button').disabled = true;

    }, [isActive, input, dispatch]);

    return (
        <Row className="w-100 d-flex main-search">
            <Col sm={8} xl={6}>
                <form id="search-form">
                    <input className="search-input ps-3" onChange={handler} type="text" placeholder="What do you want eat today?"></input>
                </form>
            </Col>
            <Col sm={4} xl={2}>
                <NavLink to={"search"}><button className="search-button" form="search-form" type="submit" disabled>Search</button></NavLink>
            </Col>
        </Row>
    )
}

export default MainSearch;
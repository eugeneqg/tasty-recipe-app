import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./new-main.sass";
import broccoli from "./img/brockoli.png";
import MainSearch from "../../components/main-search/main-search";

const NewMain  = () => {

    return (
        <div className="new-main">
            <div className="main-wrapper">
            <div className="ellipse">
                    <div className="medium-ellipse"></div>
                    <div className="small-ellipse"></div>
            </div>
            <img className="broccoli" src={broccoli} alt="broccoli"></img>
                <Container fluid="md" className="main-banner">
                <Row className="w-100">
                        <Col xs={6}>
                            <div className="text-block">
                                <h1 className="mb-4"><span>Tasty</span> Is A Simple Way To Find Your Perfect Meal</h1>
                                <p>Welcome to our recipe website, your ultimate destination for delicious and easy-to-follow recipes! Whether you're a seasoned cook or just starting out in the kitchen, we have a wide range of recipes that will inspire and satisfy your taste buds.</p>
                            </div>
                        </Col>
                    </Row>
                    <MainSearch/>
                </Container>
            </div>
        </div>
    )
}

export default NewMain;
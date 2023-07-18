import "./newsletter.sass";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = () => {
    return (
        <Container fluid="md">
            <div className="newsletter margin text-center gap-2">
                <h1 className="w-100">JOIN OUR NEWSLETTER</h1>
                <Row className="m-0 w-100 d-flex justify-content-center gap-2">
                    <Col xs={6}>
                        <form id="newsletter-form">
                            <input className="newsletter-input ps-3" type="text" placeholder="Write your email here"></input>
                        </form>
                    </Col>
                    <Col xs={2}>
                        <button className="newsletter-button" form="newsletter-form" type="submit" disabled>Send</button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Newsletter;
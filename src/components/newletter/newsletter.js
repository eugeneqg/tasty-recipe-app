import "./newsletter.sass";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = ({openModal}) => {

    const [input, setInput] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);

    const handler = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    React.useEffect(() => {

        input ? setIsActive(true) : setIsActive(false);

        isActive ? document.querySelector('.newsletter-button').disabled = false : document.querySelector('.newsletter-button').disabled = true;

    }, [isActive, input]);

    return (
        <Container fluid="md">
            <div className="newsletter margin text-center gap-2">
                <h1 className="w-100">JOIN OUR NEWSLETTER</h1>
                <Row className="m-0 w-100 d-flex justify-content-center gap-2">
                    <Col lg={6}>
                        <form onSubmit={openModal} id="newsletter-form">
                            <input onChange={handler} className="newsletter-input ps-3" type="email" placeholder="Write your email here"></input>
                        </form>
                    </Col>
                    <Col lg={2}>
                         <button className="newsletter-button" form="newsletter-form" type="submit" disabled>Send</button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Newsletter;
import React from "react";
import "./about.sass";
import firstpic from "../../public/img/about/1.png";
import secondpic from "../../public/img/about/2.png";
import thirdpic from "../../public/img/about/3.png";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {

    const ref = React.useRef();

    React.useEffect(() => {

        const banner1 = document.createElement("div");
        banner1.classList.add("first");
        banner1.innerHTML =
            `<img src=${firstpic} alt="first-pic"></img>
            <div class="block-texts">
                <p class="about-text accent">3000 TASTY</p> 
                <p class="about-text">RECIPES</p>
            </div>`
        ;
        const banner2 = document.createElement("div");
        banner2.classList.add("second");
        banner2.innerHTML =
            `<img src=${secondpic} alt="second-pic"></img>
            <div class="block-texts">
                <p class="about-text accent">MORE THAN 20</p> 
                <p class="about-text">CUISINES</p>
            </div>`
        ;
    
        const banner3 = document.createElement("div");
        banner3.classList.add("third");
        banner3.innerHTML =
            `<img src=${thirdpic} alt="third-pic"></img>
            <div class="block-texts">
                <p class="about-text accent">MEALS</p> 
                <p class="about-text">FOR EVERYONE</p>
            </div>`
        ;

        const elems = [banner1, banner2, banner3];

        elems.forEach(elem => {
            elem.classList.add("about-block");
            ref.current.appendChild(elem);
        });

    }, [])

    return (
        <div className="margin w-100">
            <Container><h2 className="text-center">ABOUT US</h2></Container>
            <Container>
                <Row className="">
                    <Col md={12} className="">
                        <div ref={ref} className="banners"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
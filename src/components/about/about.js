import React from "react";
import "./about.sass";
import firstpic from "../../public/img/about/1.png";
import secondpic from "../../public/img/about/2.png";
import thirdpic from "../../public/img/about/3.png";
import { Container } from "react-bootstrap";

const About = () => {

    const ref = React.useRef();
    const [scrollPosition, setScrollPosition] = React.useState();

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

    React.useEffect(() => {

        const banners = document.querySelector(".banners");

        elems.forEach(elem => {
            elem.classList.add("about-block");
            ref.current.appendChild(elem);
        });


        // const interval = setInterval(() => {
        //     setTimeout(() => {
        //         banners.style.transition = `all linear .2s`;
        //         banners.style.transform = `translateX(-800px)`;
        //         const shifted = elems.shift();
        //         elems.push(shifted);
    
        //         elems.forEach(elem => {
    
        //             ref.current.appendChild(elem);
        //         });
        //     }, 2000)
        //     // banners.style.transform = `translateX(0px)`;
        // }, 3000);

        // return () => clearInterval(interval);

    }, [])

    return (
        <div className="margin">
        <Container><h2 className="text-center">ABOUT US</h2></Container>
            <Container>
                <div ref={ref} className="d-flex gap-3 banners"></div>
            </Container>
        </div>
    )
}

export default About;
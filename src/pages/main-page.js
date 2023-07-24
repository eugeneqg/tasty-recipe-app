import React from "react";
import Categories from "../components/categories/categories";
import RandomRecipe from "../components/random/random";
import About from "../components/about/about";
import AnimatedBanner from "../components/animated-banner/animated-banner";
import Newsletter from "../components/newletter/newsletter";
import NewMain from "./new-main/new-main";
import Modal from "../components/modal/modal"

const MainPage = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setIsOpen(true);
    }

    React.useEffect(() => {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [isOpen])

    return (
        <>
            {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
            <NewMain/>
            <AnimatedBanner/>
            <About/>
            <Categories/>
            <RandomRecipe/>
            <Newsletter openModal={openModal}/>
        </>
    )
}

export default MainPage;
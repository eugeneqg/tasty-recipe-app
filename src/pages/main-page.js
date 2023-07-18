import Header from "../components/header/header";
import Today from "../components/today/today";
import Categories from "../components/categories/categories";
import RandomRecipe from "../components/random/random";
import About from "../components/about/about";
import AnimatedBanner from "../components/animated-banner/animated-banner";
import Newsletter from "../components/newletter/newsletter";
import NewMain from "./new-main/new-main";

const MainPage = () => {
    

    return (
        <>
            {/* <Header/> */}
            <NewMain/>
            <AnimatedBanner/>
            <About/>
            <Categories/>
            <RandomRecipe/>
            <Newsletter/>
        </>
    )
}

export default MainPage;
import Container from "react-bootstrap/Container";
import GetData from "../../services/services";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { getRandomRecipe } from "../../redux/slices/randomSlice";
import { Loaded, NotLoaded } from "./loaded/isLoaded";
import loader from "../../public/img/loader.svg";
import "./random.sass";

const RandomRecipe = () => {

    const dispatch = useDispatch();
    const randomRecipe = useSelector(state => state.random.meal);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(data => {
                dispatch(getRandomRecipe(...data.meals));
                setIsLoaded(true);
            })
            .catch(e => {
                throw new Error("Couldn't fetch a random recipe");
            })
    }, [dispatch]);

    const recipe = isLoaded ? <Loaded data={randomRecipe}/> : <NotLoaded data={randomRecipe} loader={loader} />        

    return (
        <div className="random-back margin">
            <Container fluid="md" className="mb-5">
                <div className="text-center"><h2 className="title-link">LET'S TRY SOMETHING RANDOM!</h2></div>
                {recipe}
            </Container>
        </div>
    )
}

export default RandomRecipe;
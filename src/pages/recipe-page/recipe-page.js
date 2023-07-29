import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import React from "react";
import GetData from "../../services/services";
import { Star } from 'react-bootstrap-icons';
import loader from "../../public/img/loader.svg";
import "./recipe-page.sass";
import RecipePageInfo from "../../components/recipe-page-info/recipe-page-info";
import RecipePageInstruction from "../../components/recipe-page-instr/recipe-page-instr";

const RecipePage = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = React.useState();
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        GetData.getData(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(data => {
            setRecipe(...data.meals);
            setIsLoaded(true);
        })
        .catch(e => {
            throw new Error(`Couldn't fetch recipe data (${e})`)
        });

    }, [isLoaded, id]);

    const data = isLoaded ? <Recipe data={recipe} /> : <div className="d-flex w-100 vh-100 justify-content-center align-items-center"><img  src={loader} alt="loading"></img></div>

    return (
        <Container fluid="md" className="margin-top">
            {data}
        </Container>
    )

}

export default RecipePage;

const Recipe = ({data}) => {

    const [fav, setFav] = React.useState(false);

    const items = Object.keys({...localStorage});

    const saveToLocal = (data) => {
        const recipe = {idMeal: data.idMeal, strMealThumb: data.strMealThumb, strMeal: data.strMeal};
        localStorage.setItem(data.idMeal, JSON.stringify(recipe));
        setFav(true);
    }

    const removeFromLocal = (data) => {
        localStorage.removeItem(data.idMeal);
        setFav(false);
    }

    const getTags = (data) => {
       
        if (!data.strTags) {
            return (
                <p>No tags</p>
            )
        }

        const tags = data.strTags.split(",").join(", ").split(" ");
        return tags.map(tag => {
            return (
                <p key={tag}>{tag}</p>
            )
        });
    }

    const getIngredients = (data) => {

        if (!data) {
            return (
                <p>No ingredients</p>
            )
        }

        const entries = Object.values(data).splice(9, 20).filter(entry => entry !== " ");
        
        const ingredients = entries.map(ingr => {
            return ingr ? <li key={ingr}>{ingr}</li> : null
        })

        return ingredients
    }

    const getMeasures = (data) => {
        if (!data) {
            return (
                <p>No measures</p>
            )
        }

    const entries = Object.values(data).splice(29, 20).filter(entry => entry !== " ");
    const measures = entries.map(measure => {
        return measure ? <li key={measure}>{measure}</li> : null
    })

    return measures;

    }

    const getYoutubeVideo = (data) => {
        if (data && data !== " " && data !== null) {
            const youtubeLink = data.substring(0, 24) + "embed/" + data.substring(32, data.length);
            return(
                <iframe title="video" className="video" src={youtubeLink} controls></iframe>
            )
        } else {
            return (
                <p>No video</p>
            )
        }

    }

    const changeButtons = () => {
        if (items.includes(data.idMeal)) {
            return(
                <button onClick={() => removeFromLocal(data)} className="fav-btn-active"><Star color="white"/> Remove from favoutites</button>
            )
        } else {
            return (
                <button onClick={() => saveToLocal(data)} className="fav-btn"><Star/> Add to favoutites</button>
            )
        }
    }

    React.useEffect(() => {

        items.includes(data.idMeal) ? setFav(true) : setFav(false);

    }, [items, fav, data.idMeal]);

    return (
        <div>
            <RecipePageInfo data={data} getTags={getTags} changeButtons={changeButtons} />
            <RecipePageInstruction data={data} getIngredients={getIngredients} getMeasures={getMeasures} getYoutubeVideo={getYoutubeVideo} />
        </div>

    )
}

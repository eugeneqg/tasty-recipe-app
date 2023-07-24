import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import React from "react";
import GetData from "../services/services";
import { NavLink } from "react-router-dom";
import { Star } from 'react-bootstrap-icons';
import loader from "../public/img/loader.svg";
import "./recipe-page.sass";

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
    }, [isLoaded]);

    const data = isLoaded ? <Recipe data={recipe} /> : <img src={loader} alt="loading"></img>

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
        console.log(data)
        if (data && data !== " " && data !== null) {
            const youtubeLink = data.substring(0, 24) + "embed/" + data.substring(32, data.length);
            return(
                <iframe src={youtubeLink} width="750" height="500" controls></iframe>
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

    }, [items, fav]);

    return (
        <div>
            <div style={{"backgroundImage": `url(${data.strMealThumb})`}} className="recipe-page-wrapper">
                <Row className="blur d-flex flex-wrap justify-content-center">
                    <Col md={3} className="col text-center">
                        <img className="recipe-page-img" src={data.strMealThumb} alt={data.strMeal}></img>
                    </Col>
                    <Col md={6} className="m-0">
                        <h1 className="recipe-name mb-3">{data.strMeal}</h1>
                        <p><NavLink className="tag-link" to={`/category-page/c=${data.strCategory}`}>{data.strCategory}</NavLink></p>
                        <p><NavLink className="tag-link" to={`/category-page/a=${data.strArea}`}>{data.strArea}</NavLink></p>
                        <div className="d-flex gap-1">Tags: {getTags(data)}</div>
                    </Col>
                    <Col md={3}>
                        {changeButtons()}
                    </Col>
                </Row>
            </div>
            <Row className="mt-3 back-colour mb-5">
                <Col>
                    <div className="title-link-wrapper"><h2>Ingredients</h2></div>
                    <Row>
                        <Col xs={6} md={4}>
                            <ol>
                                {getIngredients(data)}
                            </ol>
                        </Col>
                        <Col xs={6} md={8}>
                            <ul>
                                {getMeasures(data)}
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="title-link-wrapper"><h2>Instructions</h2></div>
                            <p>{data.strInstructions}</p>
                        </Col>
                    </Row>
                    <div className="title-link-wrapper"><h2>Video</h2></div>
                    <Row d-flex>
                        <Col md={6}>{getYoutubeVideo(data.strYoutube)}</Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

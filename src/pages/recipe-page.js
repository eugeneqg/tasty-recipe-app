import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import React from "react";
import GetData from "../services/services";
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

    const data = isLoaded ? <Recipe data={recipe}/> : <p>loading</p>

    return (
        <Container>
            {data}
        </Container>
    )

}

export default RecipePage;

const Recipe = ({data}) => {

    console.log(data)

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

        const entries = Object.values(data).splice(9, 20);

        console.log(Object.values(data))
        console.log(entries)
        
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

    const entries = Object.values(data).splice(29, 20);
    const measures = entries.map(measure => {
        return measure ? <li key={measure}>{measure}</li> : null
    })

    return measures;

    }

    return (
        <div fluid="md" className="margin-top">
            <div style={{"background": `url(${data.strMealThumb}) no-repeat center center fixed`, "backgroundSize": "cover"}} className="recipe-page-wrapper">
                <Row className="blur d-flex flex-wrap justify-content-center">
                    <Col md={3} className="col text-center">
                        <img className="recipe-page-img" src={data.strMealThumb} alt={data.strMeal}></img>
                    </Col>
                    <Col md={9} className="m-0">
                        <h2>{data.strMeal}</h2>
                        <p>{data.strCategory}</p>
                        <p>{data.strArea}</p>
                        <div className="d-flex gap-1">Tags: {getTags(data)}</div>
                    </Col>
                </Row>
            </div>
            <Row className="mt-3 back-colour">
                <Col>
                    <div className="title-link-wrapper"><h2>Ingredients</h2></div>
                    <Row >
                        <Col md={3}>
                            <ol>
                                {getIngredients(data)}
                            </ol>
                        </Col>
                        <Col >
                            <ul>
                                {getMeasures(data)}
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

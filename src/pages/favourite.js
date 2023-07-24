import React from "react";
import RecipeCard from "../components/recipe-card/recipe-card";
import {Container, Row, Col} from 'react-bootstrap';

const Favourite = () => {


    const items = {...localStorage};
    const propertyNames = Object.values(items);
    const parsed = propertyNames.map(item => {
        return JSON.parse(item);
    })

    const recipeList = parsed.slice(0, 10).map(recipe => {
            return (
                <RecipeCard key={recipe.idMeal} id={recipe.idMeal} recipe={recipe}/>
            )
    });
    
    return (

        <Container fluid="md" className="margin-top">
            {/* <h2>{categoryName}</h2> */}
            <Row className="margin">
                <Col md={12} className="category-grid">
                    {propertyNames.length > 0 ? recipeList : <p>No items</p>}
                </Col>
            </Row>
            {/* <Pagination total={totalCount} paginate={paginate} currentPage={currentPage}/> */}
        </Container>

    )
}

export default Favourite;
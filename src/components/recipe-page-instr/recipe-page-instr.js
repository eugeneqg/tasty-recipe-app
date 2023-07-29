import {Col, Row} from "react-bootstrap";

const RecipePageInstruction = ({data, getIngredients, getMeasures, getYoutubeVideo}) => {
    return (
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
                    <Col>{getYoutubeVideo(data.strYoutube)}</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default RecipePageInstruction;
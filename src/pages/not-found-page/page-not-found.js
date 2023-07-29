import { Container } from "react-bootstrap";
import notfound from "./img/404.svg";
import "./not-found-page.sass";

const PageNotFound = () => {
    return (
        <Container className="d-flex flex-wrap justify-content-center margin-top not-found">
            <p className="text-center">Page not Found</p>
            <img src={notfound} alt="not-found"></img>
        </Container>
    )
}

export default PageNotFound;
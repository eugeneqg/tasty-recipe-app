import "./footer.sass";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container className="h-100 d-flex align-items-center justify-content-between">
                <p className="m-0">&copy; Design and Code by Evgenii Sypchenko</p>
                <p className="m-0">{new Date().getFullYear()}</p>
            </Container>
        </footer>
    )
}

export default Footer;
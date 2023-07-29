import React from "react";
import thanks from "./img/thanks.svg";
import "./modal.sass";

const Modal = ({setIsOpen}) => {

    const ref = React.useRef();

    const handler = (e) => {

        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    React.useEffect(() => {

        setTimeout(() => {
            setIsOpen(false)
        }, 5000)

    }, [])
    return (
        <div onClick={handler} className="modal-background">
            <div ref={ref}>
                <div className="modal-text">
                    <h2>Thanks for subscribing!</h2>
                    <p>We will send you our most tasty recipes!</p>
                    <img src={thanks} alt="thanks"></img>
                </div>
            </div>
        </div>
    )
}

export default Modal;
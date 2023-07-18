import "./animated-banner.sass";
import React from "react";

const AnimatedBanner = () => {

    const ref = React.useRef();

    React.useEffect(() => {
        const tags = document.createElement("div");
        tags.classList.add("tags");
        tags.classList.add("d-flex");
        tags.classList.add("gap-2");
        tags.innerHTML = `
                <p><b>TASTY</b></p>
                <p>FAST</p>
                <p><b>VARIOUS</b></p>
                <p>DELICIOUS</p>
                <p><b>PERFECT</b></p>
                <p>VEGAN</p>
                <p><b>FRESH</b></p>
                <p>JUICY</p>
                <p><b>SIMPLE</b></p>
                <p>ENJOYABLE</p>
        `;

        ref.current.append(tags);
        ref.current.append(tags.cloneNode(true));

        if (window.innerWidth > 1440) {
            ref.current.append(tags.cloneNode(true));
        }
    }, []);
    
    return(
        <div className="animation-wrapper">
            <div ref={ref} className="slides d-flex gap-2">
            </div>
        </div>
    )
}

export default AnimatedBanner;
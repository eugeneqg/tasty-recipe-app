import React from "react";
import "./pagination.sass";

const Pagination = ({total, paginate, currentPage}) => {

    const pageNumbers = [];
    const ref = React.useRef();

    for (let i = 1; i < Math.ceil(total / 10); i++) {
            pageNumbers.push(i)
    }

    const renderedNumbers = pageNumbers.map(num => {
        return (
            <p ref={ref} className={currentPage === num ? "active-page" : null} onClick={() => paginate(num)}>{num}</p>
        )
    });

    return (
        <div className="pagination">
            {renderedNumbers}
        </div>
    )
}

export default Pagination;
import s from "./Pagination.module.css";
import React, {useState} from "react";
import cn from "classnames";

let Pagination = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize  = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.pagination}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <button className={ cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber) }
                             key={p}
                             onClick={() => {
                                 onPageChange(p);
                             }}>{p}</button>
            })}
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
}

export default Pagination;
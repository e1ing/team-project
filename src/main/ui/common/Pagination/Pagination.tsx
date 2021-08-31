import React, {useState} from 'react';

type pageType = {
    sizePage: number
    totalPacks: number
    paginate: any
    portionSize: number
}
export const Pagination = ({sizePage, totalPacks, paginate, portionSize = 10}: pageType)  => {
    const pageNumbers = [];

    const pagesCount = Math.ceil(totalPacks/ sizePage);

    for (let i=1; i <= pagesCount; i++){
        pageNumbers.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <nav>
            <ul >
                { portionNumber > 1 &&
                <button onClick={()=> {setPortionNumber(portionNumber-1)}} >prev</button>}
                {pageNumbers
                    .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(number=> (
                    <span key={number}>
                        <a onClick={(e)=>paginate(number)}
                           href={'!#'}>
                            {number}
                        </a>
                    </span>
                ))}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>next</button>
                }
            </ul>
        </nav>
    )
}
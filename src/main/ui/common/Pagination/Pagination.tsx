import React, {useEffect, useState} from 'react';
import left from "./../Images/left.png"
import right from "./../Images/right.png"
import styles from "./Pagination.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setCardsPerPageAC, getPacksTC} from "../../../bll/packs-reducer/packs-reduser";
import {AppRootStateType} from "../../../bll/store";

type pageType = {
    sizePage: number
    totalPacks: number
    paginate: (pageNumber: number)=> void
    portionSize: number
    currentPage: number
}
export const Pagination = React.memo(({currentPage, sizePage, totalPacks, paginate, portionSize = 10}: pageType)  => {

    const pageNumbers = [];

    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount) //добавили юселектор на pageCount(чтоб смотреть изменения)

    const pagesCount = Math.ceil(totalPacks/ sizePage);

    for (let i=1; i <= pagesCount; i++){
        pageNumbers.push(i);
    }
    const  [value, setValue] =useState(pageCount.toString());

    const dispatch = useDispatch();

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch, pageCount]); //передаем в юзэффект экщн который ветает packs

    useEffect(() => {
        dispatch(setCardsPerPageAC(+value)) //передаем в юзффкт в диспатч экшн который сетает в pageCount value из select
    }, [dispatch, value]);
    return (
        <nav className={styles.paginationWrapper}>
            <ul style={{display: 'flex'}}>
                { portionNumber > 1 &&
                <button className={styles.button}
                        onClick={()=> {setPortionNumber(portionNumber-1)}} >
                    <img alt="icon" className={styles.img} src={left}/>
                </button>}

                    {pageNumbers
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(number => (
                            <div key={number.toString()} className={styles.paginationA}>
                            <span  className={currentPage === number ? styles.active : ''}
                                  onClick={(e) => paginate(number)}>
                            {number}

                    </span>
                            </div>
                        ))}

                {portionCount > portionNumber &&
                <button className={styles.button}  onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}><img alt="icon" className={styles.img} src={right}/></button>
                }
            </ul>
            Show <select value={value} className={styles.select} onChange={(e)=> {
                setValue(e.currentTarget.value)
        }}>
                <option value='3'>3</option>
                <option value={'5'}>5</option>
                <option value={'10'}>10</option>
        </select> Cards per Page
        </nav>
    )
})
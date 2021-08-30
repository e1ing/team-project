import React, {ChangeEvent, useCallback, useState} from "react";
import style from "Search.module.css"
import debounce from 'lodash.debounce';
import {setPackNameAC, setPacksTC} from "../../bll/packs-reducer/packs-reduser";
import {useDispatch} from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState<string>("");
    const [dbValue, saveToDb] = useState('');


    const handleChange = (e: any) => {
        const {value}  = e.target
        setSearchValue(e.target.value)
        dispatch(setPackNameAC(searchValue));
        dispatch(setPacksTC())

       /* const debouncedSave = debounce(() => saveToDb(nextValue), 1000);
        debouncedSave();*/
    }

    const debouncedHandler = useCallback(
        debounce(handleChange, 1000),
        []);



    return (
        <input
            className={style.searchInput}
            name = {"search"}
            type={"text"}
            placeholder={"Searh packs"}
            onChange ={debouncedHandler}
        />
    )
}



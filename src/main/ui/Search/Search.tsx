import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import style from "./Search.module.css"
import debounce from 'lodash.debounce';
import {setPackNameAC, setPacksTC} from "../../bll/packs-reducer/packs-reduser";
import {useDispatch} from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(setPackNameAC(searchValue));
    //     dispatch(setPacksTC());
    //     setSearchValue('')
    // })

    const [searchValue, setSearchValue] = useState<string>("");
    const [dbValue, saveToDb] = useState('');

    if (searchValue !== "") {
       // let filteredNames = searchValue.filter((name) => {
       //      return name.toLowerCase().includes(query.toLowerCase());
       //  }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
              setSearchValue(e.target.value)

        dispatch(setPackNameAC(searchValue));
        dispatch(setPacksTC())

       /* const debouncedSave = debounce(() => saveToDb(nextValue), 1000);
        debouncedSave();*/
    }

    const debouncedHandler = useCallback(
        debounce(handleChange, 3000),
        [searchValue]);


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



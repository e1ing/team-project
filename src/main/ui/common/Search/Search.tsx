import React, {ChangeEvent, FC, useCallback, useEffect, useMemo, useState} from "react";
import style from "./Search.module.css"
import debounce from 'lodash.debounce';
import {getPacksTC, setPackNameAC} from "../../../bll/packs-reducer/packs-reduser";
import {useDispatch} from "react-redux";

type SearchPropsType = {
    names: string
}

export const Search: FC<SearchPropsType> = ({names}) => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    let changedName = names;
    if (searchValue !== "") {
       changedName = names.toLowerCase();
       }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        dispatch(setPackNameAC(searchValue));
        dispatch(getPacksTC())
    }

    const debouncedHandler = useMemo(() =>
        debounce(handleChange, 1000),
        [ names, setSearchValue]);

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



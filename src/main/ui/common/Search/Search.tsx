import React, {ChangeEvent, FC, useEffect, useState} from "react";
import style from "./Search.module.css"

type SearchPropsType = {
}

export const Search: FC<SearchPropsType> = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        const debounceFn = setTimeout(() => {
            //dispatch
        }, 2000)
        return ()=>clearTimeout(debounceFn)
    }, [setSearchValue])


   /* let changedName = names;
    if (searchValue !== "") {
       changedName = names.toLowerCase();
       }*/
/*
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        dispatch(setPackNameAC(searchValue));
        dispatch(setPacksTC())
    }
    const debouncedHandler = useMemo(() =>
        debounce(handleChange, 1000),
        [ names, setSearchValue]);*/

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <input
            className={style.searchInput}
            name = {"search"}
            type={"text"}
            placeholder={"Searh packs"}
            onChange ={handleChange}
        />
    )
}



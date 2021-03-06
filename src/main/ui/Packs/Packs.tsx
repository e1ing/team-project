import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCurrentPageAC, getPacksTC, setPackNameAC} from "../../bll/packs-reducer/packs-reduser";
import { AppRootStateType } from "../../bll/store";
import s from "./Packs.module.css";
import styleButton from './../../ui/common/Button/Button.module.css';
import { setIdAC } from './../../bll/packs-reducer/packs-reduser';
import { Button } from "../common/Button/Button";
import { Pagination } from "../common/Pagination/Pagination";

import { CreatePackModalWindow } from "../common/ModalWIndow/ModalAdd/PackModal/CreatePackModalWindow";
import { PackListTable } from "./PackListTadle";
import { Redirect } from "react-router-dom";
import { PATH } from "../routes/Routes";
import { Search } from "../common/Search/Search";

export const Packs: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const name = useSelector<AppRootStateType, string>(state => state.packs.name);
    const page = useSelector<AppRootStateType, number>(state => state.packs.page);
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);

    const [activeModalAdd, setActiveModalAdd] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>(name);
    const [myPack, setMyPack] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sizePage] = useState<number>(10);

    useEffect(() => {
        setMyPack(false);
        dispatch(setIdAC(''));
        dispatch(getPacksTC());
    }, [dispatch, page, pageCount]);

    const allPacks = () => {
        setMyPack(false);
        dispatch(setIdAC(''));
        dispatch(getPacksTC());
    };

    const setInputValuse = (value: string) => {
       /* setSearchValue(value);*/
        dispatch(setPackNameAC(value));
        dispatch(getPacksTC())  ///???????????????? ?? useEffect
    };


    // ???????????????????? ?????????????????? ???????????? ???? ???????????? //send search request to the server
    /*const search = () => {
        dispatch(setPackNameAC(searchValue));
        dispatch(getPacksTC())
        setSearchValue('')
    };*/


    const myPacks = () => {
        setMyPack(true);
        dispatch(setIdAC(userLoginId));
        dispatch(getPacksTC());
    };

    //const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        setCurrentPage(pageNumber)
    }


    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }


    return (
        <div className={s.packsContainer}>

            {activeModalAdd &&
                <CreatePackModalWindow
                    activeModal={activeModalAdd}
                    setActive={setActiveModalAdd}
                />
            }
            <div className={s.navBlock}>
                <div className={s.allPack}>
                    <div className={s.groupButton}>
                        <h3>Show decks cards</h3>
                        <Button className={styleButton.button} onClick={allPacks}>All</Button>
                        <Button className={styleButton.button} onClick={myPacks}>My</Button>
                    </div>



                </div>

                <div className={s.serachBlock}>
                    <Search
                        onChange={setInputValuse}
                        value={searchValue}
                        placeholder="searh packs"
                    />

                </div>

            </div>
            {/* Table */}
            <PackListTable />
            {/* Pagination */}
            {/*    {cardPacksTotalCount}*/}
            <Pagination sizePage={sizePage} totalPacks={cardPacksTotalCount} paginate={paginate} portionSize={10} currentPage={currentPage} pageCount={pageCount}/>


        </div>
    )
})
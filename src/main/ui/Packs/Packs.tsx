import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageAC, setPackNameAC, setPacksTC} from "../../bll/packs-reducer/packs-reduser";
import {AppRootStateType} from "../../bll/store";
import s from "./Packs.module.css"
import {setIdAC} from './../../bll/packs-reducer/packs-reduser';
import {Pack} from "./Pack/Pack";
import {CardPacksDataType} from "../../dal/api/api-cards";
import {Button} from "../common/Button/Button";
import {RequestStatusType} from "../../bll/app-reducer";
import {CreatePackModalWindow} from "../common/ModalWIndow/ModalAdd/CreatePackModalWindow.tsx/CreatePackModalWindow";
import styleButton from "../common/Button/Button.module.css";
import {Pagination} from "../common/Pagination/Pagination";
import {Search} from "../common/Search/Search";

export const Packs: React.FC = React.memo(() => {

    const dispatch = useDispatch();

    const name = useSelector<AppRootStateType, string>(state => state.packs.name);
    const page = useSelector<AppRootStateType, number>(state => state.packs.page);
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);
    const packs = useSelector<AppRootStateType, Array<CardPacksDataType>>(state => state.packs.cardPacks);
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    const [activeModalAdd, setActiveModalAdd] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>(name);
    const [myPack, setMyPack] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sizePage] = useState<number>(10);

    const indexOfLastPack = currentPage * sizePage;
    const indexOfFirstPack = indexOfLastPack - sizePage;

    const currentPack = packs.slice(indexOfLastPack, indexOfFirstPack)


    useEffect(() => {
        dispatch(setPacksTC())
    }, [dispatch, page]); //добавить зависимости

    const openModalWindow = () => {
        setActiveModalAdd(true);
    };
    const allPacks = () => {
        setMyPack(false);
        dispatch(setIdAC(''));
        dispatch(setPacksTC());
    };

    const setInputValuse = (value: string) => {
        dispatch(setPackNameAC(value));
        dispatch(setPacksTC())  ///засунуть в useEffect
    };

    const cards = packs.map(p => {
        return (
            <tr key={p._id}>
                <Pack pack={p} />
            </tr>
        )
    });

    const myPacks = () => {
        setMyPack(true);
        dispatch(setIdAC(userLoginId));
        dispatch(setPacksTC());
    };



    //const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const paginate = (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber))

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
                    <Button className={styleButton.button} onClick={openModalWindow}>Add pack</Button>
                    <Button className={styleButton.button} onClick={allPacks}>All packs</Button>
                    <Button  className={styleButton.button} onClick={myPacks}>My packs</Button>
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
            <table>
                <thead className={s.packsHeader}>
                    <tr>
                        <th>username</th>
                        <th>name pack</th>
                        <th>cards</th>
                        <th>time</th>
                        <th>learn</th>
                        <th>watch</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards}
                </tbody>
            </table>
        {/* Pagination */}
        {/*    {cardPacksTotalCount}*/}
            <Pagination sizePage={sizePage} totalPacks={cardPacksTotalCount} paginate={paginate} portionSize={10}/>


        </div>
    )
})
import React, { useEffect, useState } from 'react';
import s from './Profile.module.css';
import css from '../Packs/Packs.module.css';
import { AppRootStateType } from '../../bll/store';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from "../Logout/Logout";
import { PATH } from "../routes/Routes";
import { ProfileAvatar } from './ProfileAvatar/ProfileAvatar';
import { MainTitle } from '../PasswordRecovery/PasswordRecovery';
import { PackListTable } from '../Packs/PackListTadle';
import {getPacksTC, setCurrentPageAC, setIdAC} from '../../bll/packs-reducer/packs-reduser';
import { Button } from "../common/Button/Button";
import styleButton from "../common/Button/Button.module.css"
import { Preloader } from '../common/Preloader/Preloader';
import { CreatePackModalWindow } from '../common/ModalWIndow/ModalAdd/PackModal/CreatePackModalWindow';
import RangeSlider from '../common/Range/RangeSlider';
import { Search } from '../common/Search/Search';
import {Pagination} from "../common/Pagination/Pagination";

export const Profile: React.FC = React.memo(() => {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);
    const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount);
    const dispatch = useDispatch();

    const [myPack, setMyPack] = useState<boolean>(false);
    const [activeModalAdd, setActiveModalAdd] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setMyPack(true);
        dispatch(setIdAC(userLoginId));
        // dispatch(getPacksTC());

    }, [dispatch, setMyPack, userLoginId]);

    const openModalWindow = () => {
        setActiveModalAdd(true);
    };




    //search logic
   /* const packs = useSelector<AppRootStateType, Array<CardPacksDataType>>(state => state.packs.cardPacks);
    const name = useSelector<AppRootStateType, string>(state => state.packs.name);
    const [searchValue, setSearchValue] = useState<string>(name);
    const setInputValuse = (value: string) => {
        setSearchValue(value);
    };
    const [currentPage, setCurrentPage] = useState<number>(1);
    const search = () => {
        dispatch(setPackNameAC(searchValue));
        dispatch(getPacksTC())
        setSearchValue('')
    };
    const pack = packs.map(p => {
        return (
            <tr key={p._id}>
                <Pack pack={p} />
            </tr>
        )
    });*/

    //
    if (!isInitialized) {
        return <Preloader />
    }
    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }
    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        setCurrentPage(pageNumber)
    }

    return (
        <div className={s.packsList}>

            {activeModalAdd &&
                <CreatePackModalWindow
                    activeModal={activeModalAdd}
                    setActive={setActiveModalAdd}
                />
            }

            <div className={s.container}>

                <div className={s.profileBlock}>
                    <div className={s.avaBlock}>
                        <ProfileAvatar />
                    </div>
                    <div className={s.settingsBlock}>
                        <div style={{ textAlign: "center" }}>Number of cards
                            <RangeSlider /></div>
                        <Logout />
                    </div>

                </div>

                <div className={s.packsBlock}>
                    <MainTitle title={"Packs list"} />
                    <Search onChange={() => { }}
                        value={""}
                        placeholder="searh packs" />
                    <div className={s.button}>
                        <Button className={styleButton.button} onClick={openModalWindow}>Add pack</Button>
                    </div>
                    <div className={css.packsContainer}>
                        <PackListTable />
                        <Pagination sizePage={10} totalPacks={cardPacksTotalCount} paginate={paginate} portionSize={10} currentPage={currentPage}/>
                    </div>
                </div>
            </div>
        </div>
    )
});
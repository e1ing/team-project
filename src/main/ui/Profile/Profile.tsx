import React, {useEffect, useState} from 'react';
import s from './Profile.module.css';
import css from '../Packs/Packs.module.css';
import styleButton from './../common/Button/Button.module.css';
import {AppRootStateType} from '../../bll/store';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ProfileResponseType} from '../../bll/auth-reducer/auth-reducer';
import {Logout} from "../Logout/Logout";
import {Preloader} from "../common/Preloader/Preloader";
import {PATH} from "../routes/Routes";
import {ProfileAvatar} from './ProfileAvatar/ProfileAvatar';
import {MainTitle} from '../PasswordRecovery/PasswordRecovery';
import {PackListTable} from '../Packs/PackListTadle';
import {getPacksTC, setIdAC} from '../../bll/packs-reducer/packs-reduser';
import {Button} from '../common/Button/Button';
import {CreatePackModalWindow} from '../common/ModalWIndow/ModalAdd/PackModal/CreatePackModalWindow';
import {Search} from "../common/Search/Search";
import HeaderInMockup from "../Header/HeaderInMockup";

export const Profile: React.FC = React.memo(() => {

    const profile = useSelector<AppRootStateType, ProfileResponseType>(state => state.auth.profile);
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);

    const dispatch = useDispatch();

    const [myPack, setMyPack] = useState<boolean>(false);
    const [activeModalAdd, setActiveModalAdd] = useState<boolean>(false);

    const avatar = profile.avatar ? profile.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiH8tkuj5i6qW1Vg9W1FlDPTbgg1rDpUNdA&usqp=CAU"


    useEffect(() => {
        setMyPack(true);
        dispatch(setIdAC(userLoginId));
        dispatch(getPacksTC());

    }, [dispatch, setMyPack]);

    const openModalWindow = () => {
        setActiveModalAdd(true);
    };


    if (!isInitialized) {
        return <Preloader/>
    }
    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <>
            <HeaderInMockup/>

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
                        <ProfileAvatar/>
                    </div>
                    <div className={s.settingsBlock}>Number of cards
                        <Logout/>
                    </div>

                </div>

                <div className={s.packsBlock}>
                    <MainTitle title={"Packs list"}/>
                    <Search  onChange={()=> {}}
                             value={""}
                             placeholder="searh packs"/>
                    {/*<div className={s.button}>
                        <Button className={styleButton.button} onClick={openModalWindow}>Add pack</Button>
                    </div>*/}
                    <div className={css.packsContainer}>
                        <PackListTable/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
});
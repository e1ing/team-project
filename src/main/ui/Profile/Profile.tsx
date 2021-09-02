import { profile } from 'console';
import React from 'react';
import s from './Profile.module.css';
import { AppRootStateType } from '../../bll/store';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProfileResponseType } from '../../bll/auth-reducer/auth-reducer';
import {Logout} from "../Logout/Logout";

export const Profile: React.FC = React.memo(() => {
    const profile = useSelector<AppRootStateType, ProfileResponseType>(state => state.auth.profile);


    const avatar = profile.avatar ? profile.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiH8tkuj5i6qW1Vg9W1FlDPTbgg1rDpUNdA&usqp=CAU"


    return (
        <>
            {/* status */}
            <div className={s.profile}>
                <div className={s.ava}>
                    <img src={avatar} alt="avatar" title={"avatar"}/>
                </div>
                <div className={s.greeting}>{profile.email}</div>
                <div className={s.greeting}>Hello, {profile.name}</div>
                <div className={s.numberOfPacks}>
                    You have <span className={s.userPacks}>
                        {profile.publicCardPacksCount}
                    </span> packs
                </div>
                <Logout/>
            </div>
        </>


    )
});
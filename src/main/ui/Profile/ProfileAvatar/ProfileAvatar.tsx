import React from "react";
import { useSelector } from "react-redux";
import { ProfileResponseType } from "../../../bll/auth-reducer/auth-reducer";
import { AppRootStateType } from "../../../bll/store";

import s from "./ProfileAvatar.module.css"

export const ProfileAvatar = React.memo(() => {

    const profile = useSelector<AppRootStateType, ProfileResponseType>(state => state.auth.profile);

    const avatar = profile.avatar ? profile.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiH8tkuj5i6qW1Vg9W1FlDPTbgg1rDpUNdA&usqp=CAU"
    
    return (
        <div className={s.avaContainer}>
            <div className={s.ava}>
                    <img src={avatar} alt="avatar" title={"avatar"}/>
                </div>
            <h2 className={s.name}>{profile.name}</h2>
        </div>
    )
})
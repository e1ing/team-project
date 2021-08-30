import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../common/Button/Button";
import s from "./ProfileAvatar.module.css"

export const ProfileAvatar = React.memo(() => {
    return (
        <div className={s.profileAvatar}>
            <div>
                AVA
            </div>
            <h2 className={s.name}>Name</h2>
            <span className={s.career}>Front-end developer</span>
            <div className={s.profileAvatarButtonContainer}>
                <NavLink to={"/editProfile"}>
                    <Button>
                        Edit profile
                    </Button>
                </NavLink>
                
            </div>
        </div>
    )
})
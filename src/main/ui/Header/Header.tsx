import React from 'react'
import {PATH} from "../routes/Routes";
import s from "./Header.module.css"
import {LinkButton} from "./Link/Link";
import packs from "../../../assets/images/packs.svg"
import profile from "../../../assets/images/profile.svg"
import commonStyles from "../app/App.module.css";

function Header() {

    
    return (
        <div className={s.containerHeader}>
            <div className={commonStyles.h1}>IT-incubator</div>
            <span className={s.containerHeader}>
                <LinkButton path={PATH.PROFILE} icon={profile} title={"Profile"}/>
                <LinkButton path={PATH.PACKS_LIST} icon={packs} title={"Packs list"}/>
            </span>
        </div>
    )
}

export default Header;
import React from 'react'
import {PATH} from "../routes/Routes";
import s from "./HeaderInMockup.module.css"
import {LinkButton} from "./Link/Link";
import packs from "../../../assets/images/packs.svg"
import profile from "../../../assets/images/profile.svg"

function HeaderInMockup() {

    
    return (
        <div className={s.containerHeader}>
            <div className={s.title}>IT-incubator</div>
            <span className={s.containerHeader}>
                <LinkButton path={PATH.PROFILE} icon={profile} title={"Profile"}/>
                <LinkButton path={PATH.PACKS_LIST} icon={packs} title={"Packs list"}/>
            </span>
        </div>
    )
}

export default HeaderInMockup;
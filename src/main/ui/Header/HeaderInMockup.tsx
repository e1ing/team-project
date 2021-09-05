import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "../routes/Routes";
import s from "./HeaderInMockup.module.css"


function HeaderInMockup() {

    
    return (
        <div className={s.containerHeader}>
            <span className={s.title}>IT-incubator</span>
            <div className={s.linksBlock}>
                <NavLink className={s.links} to={PATH.PROFILE}>Profile</NavLink>
                <NavLink to={PATH.PACKS_LIST}>Packs list</NavLink>
            </div>
        </div>
    )
}

export default HeaderInMockup;
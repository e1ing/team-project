import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./Link.module.css"

type LinkButtonPropsType = {
    path: string
    icon: string
    title: string
}

export const LinkButton: FC<LinkButtonPropsType> = ({path, icon, title}) => {

    return (<div className={s.linkButton}>
            <NavLink to={path}>{<div style={{textAlign: "center"}}>
                <div>
                    <img style={{textAlign: "center"}} src={icon} alt={path}/>
                    {title}
                    <span className={s.line}/>
                </div>
            </div>}</NavLink>

        </div>
    )
}

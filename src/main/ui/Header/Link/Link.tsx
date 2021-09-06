import React, {FC} from "react";
import {NavLink} from "react-router-dom";

type LinkButtonPropsType = {
    path: string
    icon: string
    title: string
}

export const LinkButton: FC<LinkButtonPropsType> = ({path, icon, title}) => {

    return (<div>
            <NavLink to={path}></NavLink>
            <div>
                <img src={icon} alt={path}/>
                {title}
            </div>
        </div>
    )
}

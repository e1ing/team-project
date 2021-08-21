import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {}

export const Header: FC<HeaderPropsType> = ({}) => {
    return (
        <header>
            <div>
                <NavLink to={"/login"}>Profile</NavLink>

            </div>
        </header>
    )
}
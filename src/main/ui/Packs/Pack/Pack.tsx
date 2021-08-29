import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { AppRootStateType } from "../../../bll/store";
import { CardPacksDataType } from "../../../dal/api/api-cards";
import { PATH } from "../../routes/Routes";
import s from "./Pack.module.css";

type PackPT = {
    pack: CardPacksDataType
}

export const Pack: React.FC<PackPT> = React.memo((props) => {

    const userLoginID = useSelector<AppRootStateType, string>(state => state.auth.profile._id);

    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [activeDeletPackModal, setActiveDeletPackModal] = useState<boolean>(false);

    const formet = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
    const date = new Date(props.pack.created);

    const time = formet.format(date);

    const openUpdateModalWindow = () => setActiveModal(true);
    const openDeletModalWindow = () => setActiveDeletPackModal(true);

    return (
        <>
            <td>{props.pack.user_name}</td>
            <td>{props.pack.name}</td>
            <td>{props.pack.cardsCount}</td>
            <td>{time}</td>
            <td>
                <NavLink
                    className={s.link}
                    to={PATH.CARDS + `/${props.pack._id}`}>
                </NavLink>
            </td>
            <td>
                <NavLink
                    className={s.link}
                    to={PATH.LEARN + `/${props.pack._id}`}>
                </NavLink>
            </td>
            <td>

                {
                    userLoginID !== props.pack.user_id
                        ? null
                        : <> 
                            <button
                                className={s.Button}
                                onClick={openUpdateModalWindow}
                            >📝
                            </button>

                            <button
                                className={s.Button}
                                onClick={openDeletModalWindow}
                            >🗑
                            </button>
                        </>
                }
            </td>
        </>

    )
})
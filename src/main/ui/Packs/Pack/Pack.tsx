import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { AppRootStateType } from "../../../bll/store";
import { CardPacksDataType } from "../../../dal/api/api-cards";
import { DeletCardModalWindow } from "../../common/ModalWIndow/ModalAdd/DeletCardModalWindow/DeletCardModalWindow";
import { UpdatePacksModalWindow } from "../../common/ModalWIndow/ModalAdd/UpdatePacksModalWindow/UpdatePacksModalWindow";
import { PATH } from "../../routes/Routes";
import s from "./Pack.module.css";

type PackPT = {
    pack: CardPacksDataType
}

export const Pack: React.FC<PackPT> = React.memo((props) => {

    const {
        pack
    } = props;

    const userLoginID = useSelector<AppRootStateType, string>(state => state.auth.profile._id);

    const [updateActiveModal, setUpdateActiveModal] = useState<boolean>(false);
    const [deletActivPackModal, setDeletActivePackModal] = useState<boolean>(false);

    const format = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
    const date = new Date(props.pack.created);

    const time = format.format(date);

    const openUpdateModalWindow = () => setUpdateActiveModal(true);
    const openDeletModalWindow = () => setDeletActivePackModal(true);

    return (
        <>
            <td>{pack.user_name}</td>
            <td>{pack.name}</td>
            <td>{pack.cardsCount}</td>
            <td>{time}</td>
            <td>
                <NavLink
                    className={s.link}
                    to={PATH.CARDS + `/${pack._id}`}>
                </NavLink>
            </td>
            <td>
                <NavLink
                    className={s.link}
                    to={PATH.LEARN + `/${pack._id}`}>
                </NavLink>
            </td>
            <td>

                {
                    userLoginID !== pack.user_id
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

            {/* update pack modal window */}
            {updateActiveModal && <UpdatePacksModalWindow
                packId={pack._id}
                name={pack.name}
                setUpdateActiveModal={setUpdateActiveModal}
            />}
            {/* delet pack modal window */}
            {deletActivPackModal && <DeletCardModalWindow
                packId={pack._id}
                setActiveModal={setDeletActivePackModal}
            />}
        </>

    )
});
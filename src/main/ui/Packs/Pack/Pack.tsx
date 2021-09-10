import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { AppRootStateType } from "../../../bll/store";
import { CardPacksDataType } from "../../../dal/api/api-cards";
import { DeletPackModalWindow } from "../../common/ModalWIndow/ModalAdd/PackModal/DeletPackModalWindow";
import { UpdatePacksModalWindow } from "../../common/ModalWIndow/ModalAdd/PackModal/UpdatePacksModalWindow";
import { PATH } from "../../routes/Routes";
import s from "./Pack.module.css";

type PackPT = {
    pack: CardPacksDataType
};

export const Pack: React.FC<PackPT> = React.memo((props) => {

    const {
        pack
    } = props;


    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);

    const [updateActiveModal, setUpdateActiveModal] = useState<boolean>(false);
    const [deletActivPackModal, setDeletActivePackModal] = useState<boolean>(false);

    const update = new Date(pack.updated).toLocaleDateString(['ban', 'id'])

    const openUpdateModalWindow = () => setUpdateActiveModal(true)
    const openDeletModalWindow = () => setDeletActivePackModal(true);


    return (
        <>
            <td>{pack.user_name}</td>
            <td>{pack.name}</td>
            <td>{pack.cardsCount}</td>
            <td>{update}</td>

            <td>
                <NavLink
                    className={s.link}
                    to={PATH.LEARN + `/:${pack._id}`}>
                    learn
                </NavLink>
            </td>
            <td>
                <NavLink
                    className={s.link}
                    to={PATH.CARDS + `/${pack._id}`}>
                    👀
                </NavLink>
            </td>
            <td>

                {userLoginId === pack.user_id ?
                    <>
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
                    : null
                }
            </td>

            {/* update pack modal window */}
            {updateActiveModal && <UpdatePacksModalWindow
                packId={pack._id}
                name={pack.name}
                setUpdateActiveModal={setUpdateActiveModal}
            />}
            {/* delet pack modal window */}
            {deletActivPackModal && <DeletPackModalWindow
                packId={pack._id}
                setActiveModal={setDeletActivePackModal}
            />}
        </>

    )
});
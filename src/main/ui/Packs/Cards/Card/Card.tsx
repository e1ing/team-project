import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../bll/store";
import { CardType } from "../../../../dal/api/api-cards";
import s from "../CardsList.module.css";

type CardPropsType = {
    card: CardType
}

export const Card: React.FC<CardPropsType> = React.memo((props) => {

    const {
        card,
    } = props;
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);

    const [activeDeleteCardModal, setActiveDeleteCardModal] = useState(false);
    const [activeUpdateCardModal, setActiveUpdateCardModal] = useState(false);

    const update = new Date(card.updated).toLocaleDateString(['ban', 'id']);

    const openDeleteCardModalWindow = () => setActiveDeleteCardModal(true);
    const openUpdateCardModalWindow = () => setActiveUpdateCardModal(true);

    return (
        <>
            <tr>
                <td>{card.question}</td>
                <td>{card.answer}</td>
                <td>{update}</td>
                <td>{card.grade.toFixed(0)}</td>
                <td>
                    {userLoginId ? null
                        : <>
                            <button
                                className={s.link}
                                onClick={openDeleteCardModalWindow}>
                                opDel
                            </button>
                            <button
                                className={s.link}
                                onClick={openUpdateCardModalWindow}>
                                opUp
                            </button>
                        </>
                    }
                </td>
            </tr>
        </>
    )
});



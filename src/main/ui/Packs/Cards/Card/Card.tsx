import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../../bll/store";
import { CardType } from "../../../../dal/api/api-cards";
import { DeletCardModalWindow } from "../../../common/ModalWIndow/ModalAdd/CardsModal/DeletCardModalWindow";
import { UpdateCardModalWindow } from "../../../common/ModalWIndow/ModalAdd/CardsModal/UpdateCardModalWIndow";
import s from "../CardsList.module.css";

type CardPropsType = {
    card: CardType
    id: string
}

export const Card: React.FC<CardPropsType> = React.memo((props) => {

    const {
        card,
        id
    } = props;
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);

    const [activeDeleteCardModal, setActiveDeleteCardModal] = useState(false);
    const [activeUpdateCardModal, setActiveUpdateCardModal] = useState(false);

    const update = new Date(card.updated).toLocaleDateString(['ban', 'id']);
    const openDeleteCardModalWindow = () => setActiveDeleteCardModal(true);
    const openUpdateCardModalWindow = () => setActiveUpdateCardModal(true);

    return (
        <>
            {activeUpdateCardModal &&
                <UpdateCardModalWindow
                    packId={id}
                    setActiveModal={setActiveUpdateCardModal}
                    cardId={card._id}
                    question={card.question}
                    answer={card.answer}
                />}

            {activeDeleteCardModal &&
                <DeletCardModalWindow
                    packId={id}
                    setActiveModal={setActiveDeleteCardModal}
                    cardId={card._id}

                />}

            <tr>
                <td>{card.question}</td>
                <td>{card.answer}</td>
                <td>{update}</td>
                <td>{card.grade.toFixed(0)}</td>
                <td>
                    {userLoginId !== card.user_id ? null
                        : <>
                            <button
                                className={s.link}
                                onClick={openUpdateCardModalWindow}>
                                📝
                            </button>
                            <button
                                className={s.link}
                                onClick={openDeleteCardModalWindow}>
                                🗑
                            </button>

                        </>
                    }
                </td>
            </tr>
        </>
    )
});



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCardsTC } from "../../../bll/cards-reducer/cards-reducer";
import { AppRootStateType } from "../../../bll/store";
import { CardType } from "../../../dal/api/api-cards";
import { Button } from "../../common/Button/Button";
import { CreateCardModalWindow } from "../../common/ModalWIndow/ModalAdd/CardsModal/CreateCardModalWindow";
import { Card } from "./Card/Card";
import s from '../Cards/CardsList.module.css';

export const CardsList: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const [activeModalAdd, setActiveModalAdd] = useState(false);

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards);
    const userLoginId = useSelector<AppRootStateType, string>(state => state.auth.profile._id);
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.cardsTotalCount);
    const page = useSelector<AppRootStateType, number>(state => state.cards.page);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [dispatch, id, page]);
    const openModalWindow = () => setActiveModalAdd(true);

    const copyCards = cards.map(el => <tbody key={el._id}>
        <Card card={el} />
    </tbody>);

    return (
        <div className={s.cardsList}>
            {/* status */}
            {activeModalAdd && <CreateCardModalWindow
                activeModalAdd={activeModalAdd}
                setActive={setActiveModalAdd}
            />}

            <div className={s.backLink}>
                <NavLink
                    className={s.link}
                    to={'/packList'}>
                    <button>Packs</button>
                </NavLink>
            </div>
            <h2> Cards </h2>
            {userLoginId  ?  <Button className={s.addCardButton} onClick={openModalWindow}>
                    Add Card
                </Button>  : null
               }

            {!cards.length ? <div className={s.titleNoCards}><span> no cards </span></div>
                : <table>
                    <thead>
                        <tr>
                            <th>QUESTION</th>
                            <th>ANSWER</th>
                            <th>LAST UPDATE</th>
                            <th>GRADE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    {copyCards}
                </table>
            }
            {cardsTotalCount}
        </div>
    )
});
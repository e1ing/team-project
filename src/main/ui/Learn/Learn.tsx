import React, { useCallback, useEffect, useState } from 'react';
import s from './Learn.module.css'

import { Button } from "../common/Button/Button";
import styleButton from './../common/Button/Button.module.css'
import styles from "../Registration/Registartion.module.css"
import commonStyles from "../app/App.module.css"

import { LearnQuestion } from './LearnQuestion';
import { LearnAnswer } from './LearnAnswer';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { Redirect, useParams } from 'react-router-dom';
import { CardType } from '../../dal/api/api-cards';
import { getCardsTC } from '../../bll/cards-reducer/cards-reducer';


// формула от игната
const getRandomCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0)
    const rand = Math.random() * sum
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
        const newSum = acc.sum + (6 - card.grade) * (6 - card.grade)
        return {sum: newSum, id: newSum < rand ? i : acc.id}
    }, {sum: 0, id: -1})
    return cards[res.id + 1]
}




export const Learn = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)
    
    const dispatch = useDispatch()

    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const [firstCard, setFirstCard] = useState<boolean>(true)
    const [card, setCard] = useState<CardType>({} as CardType)

    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        if (firstCard) {
            dispatch(getCardsTC(id.slice(1))) // <- эта жесть пока другой костыль не придумал .slice(1)
            setFirstCard(false)
        }
        if (cards.length > 0) {
            setCard(getRandomCard(cards))
        }
    }, [dispatch, cards, firstCard, id])

// обрати внимание что выводит. сразу становиться для чего на slice
   console.log(cards)

    if (!isLoggedIn) {
        return <Redirect to={"/login"}/>
    }


    return (
        
        <div className={s.container}> 
                {!showAnswer
                    ? <LearnQuestion
                        setShowAnswer={setShowAnswer}
                        card={card}

                    />
                    : <LearnAnswer
                        setShowAnswer={setShowAnswer}
                        card={card}
                    />}
        </div >

        // <div className={styles.container}>
        //     <div className={styles.form}>
        //         <div className={styles.content}>
        //             <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
        //             <h2>Question: {card.question}</h2>
        //             <h2>Answer: {card.answer}</h2>
        //         </div>
        //         <div className={styleButton.bottom}>
        //             <Button>cansel</Button>
        //                 <Button  className={styleButton.button}>
        //                     show answer
        //                 </Button>
        //         </div>
        //     </div>

        // </div>
    )
})
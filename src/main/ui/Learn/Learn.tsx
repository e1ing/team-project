import React, { useCallback, useEffect, useState } from 'react';
import s from './Learn.module.css'


import { LearnQuestion } from './LearnQuestion';
import { LearnAnswer } from './LearnAnswer';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from '../../bll/store';
import { Redirect, useParams } from 'react-router-dom';
import { CardType } from '../../dal/api/api-cards';
import { getCardsTC } from '../../bll/cards-reducer/cards-reducer';


//формула от игната
// const getRandomCard = (cards: CardType[]) => {
//     const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0)
//     const rand = Math.random() * sum
//     const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
//         const newSum = acc.sum + (6 - card.grade) * (6 - card.grade)
//         return {sum: newSum, id: newSum < rand ? i : acc.id}
//     }, {sum: 0, id: -1})
//     console.log('что здeсь', cards[0].grade)
//     return cards[res.id + 1]
// }

const getRandomCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (4-card.grade)**2, 0)
    const rand = Math.random() * sum //33
    let s = 0;
    let i = 0;

    while(s < rand && cards.length > i) {
        console.log('cards i ' ,cards[i])
        console.log('i', i)
        s+= 6-(cards[i].grade);
        i++;
    }
    return cards[i-1]
}




export const Learn = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards)

    const dispatch = useDispatch()

    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const [firstCard, setFirstCard] = useState<boolean>(true)
    const [card, setCard] = useState<CardType>({} as CardType)

    const {id} = useParams<{ id: string }>() //получается здесь массив из двух айдищников?
    console.log('до слайса здесь айдишник юзера', id, 'после айдишник карты', id.slice(1))
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

    )
})






// import React, {useEffect, useState} from 'react';
// import s from './Learn.module.css'
// import { LearnQuestion } from './LearnQuestion';
// import { LearnAnswer } from './LearnAnswer';
// import App from "../app/App";
// import {useDispatch, useSelector} from "react-redux";
// import {useParams} from "react-router-dom";
// import {AppRootStateType} from "../../bll/store";
// import {getCardsTC} from "../../bll/cards-reducer/cards-reducer";
// import {CardType} from "../../dal/api/api-cards";
//
//
//
// export const Learn = () => {
//     //const { cardId } = useParams<{ cardId: string }>();
//     const cardId = '6137585819cc8600049362aa'
//     const [showAnswer, setShowAnswer] = useState<boolean>(false)
//     const [firstCard, setFirstCard] = useState<boolean>(true)
//     const setNextAnswer = () => {}
//     const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cards);
//
//
//
//     const [card, setCard] = useState<CardType>({_id: ""} as CardType)
//
//
//     const dispatch = useDispatch();
//
//     useEffect(()=> {
//         if(firstCard) {
//             dispatch(getCardsTC(cardId))
//             setFirstCard(false)
//         }
//         // if(cards.length === 0){
//         //      setFirstCard(true)
//         // }
//     }, [])
//
//     console.log(cardId)
//
//     return (
//         <div className={s.container}>
//                 {!showAnswer
//                     ? <LearnQuestion
//                         setShowAnswer={setShowAnswer}
//                         card={card}
//
//                     />
//                     : <LearnAnswer
//                         setNextAnswer={setNextAnswer}
//                         card={card}
//                     />}
//         </div >
//     )
// }
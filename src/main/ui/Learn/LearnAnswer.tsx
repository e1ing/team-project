import React from "react";
import { CardType } from "../../dal/api/api-cards";
import { Button } from "../common/Button/Button";
import s from "./LearnAnswer.module.css"


type LearnAnswerPropsType = {
    setShowAnswer: (value: boolean) => void
    card: CardType
}



export const LearnAnswer: React.FC<LearnAnswerPropsType> = React.memo((props) => {
    return (
        <div className={s.learnAnswer}>
            <h2 className={s.caption}>Learn “Pack Name”</h2>
            <div className={s.block}>
                <span className={s.action}>Question:</span>
            <span className={s.text}>{props.card.question}</span>
            </div>
            <div className={s.block}>
                <span className={s.action}>Answer:</span>
                <span className={s.text}>{props.card.answer}</span>
            </div>
            <div className={s.radioWrap}>
                <span className={s.action}>Rate yourself:</span>
            </div>
            <div className={s.btns}>
                <Button
                    onClick={() => props.setShowAnswer(false)}
                    className={s.button}>
                    Cancel
                </Button>
                <Button
                    className={s.button}>
                    Next
                </Button>
            </div>
        </div>
    )
})


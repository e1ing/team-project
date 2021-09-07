import React from "react";
import { Button } from "../common/Button/Button";
import s from "./LearnQustion.module.css"

type LearnQuestionPropsType = {
    setShowAnswer: (value: boolean) => void
}



export const LearnQuestion: React.FC<LearnQuestionPropsType> = React.memo((props) => {
    return (
        <div className={s.learnQuestion}>
            <h2 className={s.caption}>Learn card: </h2>
            <div className={s.block}>
                <span className={s.action}>Question:</span>
                <span className={s.text}>card</span>
            </div>
            <div className={s.btns}>
                <Button
                    className={s.button}>
                    Cancel
                </Button>
                <Button
                    onClick={() => props.setShowAnswer(true)}
                    className={s.button}>
                    Show answer
                </Button>
            </div>
        </div>
    )
})
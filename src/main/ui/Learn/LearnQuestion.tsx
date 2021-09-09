import React from "react";
import { Button } from "../common/Button/Button";
import styleButton from './../common/Button/Button.module.css'
import styles from "../Registration/Registartion.module.css"
import commonStyles from "../app/App.module.css"
import {CardType} from "../../dal/api/api-cards";

type LearnQuestionPropsType = {
    setShowAnswer: (value: boolean) => void
    card: CardType
}




export const LearnQuestion: React.FC<LearnQuestionPropsType> = React.memo((props) => {
    return (

        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Question: </h2>
                        <div>{props.card.question}</div>
                    </div>
                </div>
                <div>
                    <div style={{display: 'flex'}}>
                        <Button className={styleButton.button}
                                onClick={() => props.setShowAnswer(true)}>
                            show answer
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
})



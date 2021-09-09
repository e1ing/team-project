import React, {useState} from "react";
import { Button } from "../common/Button/Button";
import s from "./LearnAnswer.module.css"
import styles from "../Registration/Registartion.module.css";
import commonStyles from "../app/App.module.css";
import style from "./LearnAnswer.module.css";
import styleButton from "../common/Button/Button.module.css";
import {CardType} from "../../dal/api/api-cards";


type LearnAnswerPropsType = {
    setShowAnswer: (value: boolean) => void
    card: CardType
}


export const LearnAnswer: React.FC<LearnAnswerPropsType> = React.memo((props) => {

    const [valueChoice, setValueChoice] = useState<boolean>(false);

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Question: </h2>
                        <div>{props.card.question}</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Answer: </h2>
                        <div>{props.card.answer}</div>
                    </div>
                </div>

                <div style={{display: 'flex'}}>
                    <input type="radio" className={style.customRadio}
                           id="haveNoIdea" name="haveNoIdea"
                           value="1"
                           onChange={()=> {
                               console.log(1)}}
                    />
                    <label htmlFor="haveNoIdea">без понятия</label>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="radio"
                           className={style.customRadio}
                           id="doubt" name="haveNoIdea"
                           value="2"
                           onChange={()=> {
                               console.log(2)}}/>
                    <label htmlFor="doubt">сомневаюсь</label>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="radio"
                           className={style.customRadio}
                           id="canForget"
                           name="haveNoIdea"
                           value="3"
                           onChange={()=> {
                               console.log(3)}}/>
                    <label htmlFor="canForget">могу забыть</label>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="radio"
                           className={style.customRadio}
                           id="sure"
                           name="haveNoIdea"
                           value="4"
                           onChange={()=> {
                               console.log(4)}}
                    />
                    <label htmlFor="sure">знаю</label>
                </div>
                <div>
                    <div style={{display: 'flex'}}>
                        <Button className={styleButton.cancelButton}>cancel</Button>
                        <Button className={styleButton.button}
                                onClick={() => props.setShowAnswer(false)}>
                            next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
})


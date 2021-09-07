import React from "react";
import { Button } from "../common/Button/Button";
import s from "./LearnAnswer.module.css"
import styles from "../Registration/Registartion.module.css";
import commonStyles from "../app/App.module.css";
import style from "./Learn.module.css";
import styleButton from "../common/Button/Button.module.css";


type LearnAnswerPropsType = {
    setNextAnswer: (value: boolean) => void
    question: string
    answer: string
}


export const LearnAnswer: React.FC<LearnAnswerPropsType> = React.memo((props) => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Question: </h2>
                        <div>{props.question}</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Answer: </h2>
                        <div>{props.answer}</div>
                    </div>
                </div>

                <div style={{display: 'flex'}}>
                    <input type="radio" className="custom-checkbox" id="haveNoIdea" name="haveNoIdea" value="1"/>
                    <label htmlFor="haveNoIdea">без понятия</label>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="radio" className="custom-checkbox" id="doubt" name="doubt" value="2"/>
                    <label htmlFor="doubt">сомневаюсь</label>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="radio" className="custom-checkbox" id="canForget" name="canForget" value="3"/>
                    <label htmlFor="canForget">могу забыть</label>
                </div>
                <div style={{display: 'flex'}}>
                    <input type="radio" className="custom-checkbox" id="sure" name="sure" value="4"/>
                    <label htmlFor="doubt">знаю</label>
                </div>
                <div>
                    <div style={{display: 'flex'}}>
                        <Button className={styleButton.cancelButton}>cancel</Button>
                        <Button className={styleButton.button}
                                onClick={() => props.setNextAnswer(true)}>
                            next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

// return (
//     <div className={s.learnAnswer}>
//         <h2 className={s.caption}>Learn “Pack Name”</h2>
//         <div className={s.block}>
//             <span className={s.action}>Question:</span>
//             <span className={s.text}>card.question</span>
//         </div>
//         <div className={s.block}>
//             <span className={s.action}>Answer:</span>
//             <span className={s.text}>card.answer</span>
//         </div>
//         <div className={s.radioWrap}>
//             <span className={s.action}>Rate yourself:</span>
//         </div>
//         <div className={s.btns}>
//             <Button
//                 onClick={() => props.setShowAnswer(false)}
//                 className={s.button}>
//                 Cancel
//             </Button>
//             <Button
//                 className={s.button}>
//                 Next
//             </Button>
//         </div>
//     </div>
// )
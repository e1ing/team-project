import React from "react";
import { Button } from "../common/Button/Button";
import style from './Learn.module.css'
import styleButton from './../common/Button/Button.module.css'
import styles from "../Registration/Registartion.module.css"
import commonStyles from "../app/App.module.css"

type LearnQuestionPropsType = {
    setShowAnswer: (value: boolean) => void
}



export const LearnQuestion: React.FC<LearnQuestionPropsType> = React.memo((props) => {
    const question = "21"
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h2>Question: </h2>
                        <div>{question}</div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div style={{display: 'flex'}}>
                        <Button className={styleButton.cancelButton}>cancel</Button>
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

// export const LearnQuestion: React.FC<LearnQuestionPropsType> = React.memo((props) => {
//     return (
//         <div className={s.learnQuestion}>
//             <h2 className={s.caption}>Learn card: </h2>
//             <div className={s.block}>
//                 <span className={s.action}>Question:</span>
//                 <span className={s.text}>card</span>
//             </div>
//             <div className={s.btns}>
//                 <Button
//                     className={s.button}>
//                     Cancel
//                 </Button>
//                 <Button
//                     onClick={() => props.setShowAnswer(true)}
//                     className={s.button}>
//                     Show answer
//                 </Button>
//             </div>
//         </div>
//     )
// })

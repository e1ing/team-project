import React, { useState } from 'react';
import s from './Learn.module.css'

import { Button } from "../common/Button/Button";
import styleButton from './../common/Button/Button.module.css'
import styles from "../Registration/Registartion.module.css"
import commonStyles from "../app/App.module.css"
import { LearnQuestion } from './LearnQuestion';
import { LearnAnswer } from './LearnAnswer';



export const Learn = () => {

    const [showAnswer, setShowAnswer] = useState<boolean>(false)



    return (
        <div className={s.container}> 
                {!showAnswer
                    ? <LearnQuestion
                        setShowAnswer={setShowAnswer}

                    />
                    : <LearnAnswer
                        setShowAnswer={setShowAnswer}
                    />}
        </div >
        // <div className={styles.container}>
        //     <div className={styles.form}>
        //         <div className={styles.content}>
        //             <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
        //             <h2>Question: how r u</h2>
        //         </div>
        //         <div className={style.bottom}>
        //             <Button>cansel</Button>
        //                 <Button  className={styleButton.button}>
        //                     show answer
        //                 </Button>
        //         </div>
        //     </div>

        // </div>
    )
}
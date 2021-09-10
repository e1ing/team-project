import { CardType } from "../../dal/api/api-cards";
import React, { ChangeEvent, useCallback, useState } from "react";
import { Button } from "../common/Button/Button";
import styles from "../Registration/Registartion.module.css";
import commonStyles from "../app/App.module.css";
import styleButton from "../common/Button/Button.module.css";
import { AnswerType } from "./Learn";


type LearnAnswerPropsType = {
    setShowAnswer: (value: boolean) => void
    card: CardType
    onNextCard: (grade: number) => void
    grades: string[]
}


export const LearnAnswer: React.FC<LearnAnswerPropsType> = React.memo((props) => {

    const {
        setShowAnswer,
        card,
        onNextCard,
        grades,
    } = props;

    const [value, setValue] = useState<AnswerType>(-1);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value) as AnswerType)
    }, []);

;

const mappedOptions = grades ? grades.map((option, index) => (
    <label key={index} >
        <input
            type={"radio"}
            value={index}
            checked={value === index}
            onChange={onChangeHandler}
        />
        {option}
    </label>
)) : []

    return (

        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>Question: </h2>
                        <div>{card.question}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2>Answer: </h2>
                        <div>{card.answer}</div>
                    </div>
                </div>

                <div style={{ display: 'flex',  flexDirection: "column"}}>
                    {mappedOptions}
                </div>

                <div>
                    <div style={{ display: 'flex' }}>
                        <Button
                            className={styleButton.cancelButton}
                            onClick={() => setShowAnswer(false)}
                        >cancel</Button>
                        <Button
                            className={styleButton.button}
                            onClick={() => onNextCard(value)}>
                            next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
})


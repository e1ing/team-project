import React, { ChangeEvent, useCallback, useState, MouseEvent } from "react";
import { Button } from "../../../Button/Button";
import s from '../../ModalWindow.module.css'
import { Input } from './../../../Input/Input';
import { useDispatch } from "react-redux";
import { updateCardTC } from "../../../../../bll/cards-reducer/cards-reducer";

type UpdateCardPT = {
    packId: string
    cardId: string
    setActiveModal: (activ: boolean) => void
    question: string
    answer: string
}



export const UpdateCardModalWindow: React.FC<UpdateCardPT> = React.memo((props) => {

    const {
        packId,
        cardId,
        setActiveModal,
        question,
        answer,
    } = props;

    const dispatch = useDispatch();

    const [newQestion, setNewQuestion] = useState<string>(question);
    const [newAnswer, setNewAnswer] = useState<string>(answer);

    const updateCardHandler = useCallback(() => {
        dispatch(updateCardTC(packId, cardId, newQestion, newAnswer))
        if (newQestion.trim() !== "") {
            setNewQuestion("");
        }
        setActiveModal(false);
    }, [props, newQestion, newAnswer]);

    const updateQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewQuestion(e.currentTarget.value);
    };
    const updateAnswerHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAnswer(e.currentTarget.value);
    };

    const stopModal = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();
    const activeModalHandler = () => setActiveModal(false);


    return (
        <div className={s.modalContainer}  onClick={activeModalHandler}>
            <div className={s.modalBlock} onClick={stopModal}>
                <div className={s.title}>
                    Update this card?
                </div>
                <Input type="text"
                    placeholder='question'
                    required
                    value={newQestion}
                    onChange={updateQuestionHandler}
                    autoFocus
                />
                <Input type="text"
                    placeholder='answer'
                    required
                    value={newAnswer}
                    onChange={updateAnswerHandler}
                    autoFocus
                />
                <div className={s.button}>
                    <Button onClick={updateCardHandler}>Save</Button>
                </div>

            </div>
        </div>
    )
});
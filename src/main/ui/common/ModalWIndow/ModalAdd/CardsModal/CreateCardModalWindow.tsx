import React, { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCardTC } from "../../../../../bll/cards-reducer/cards-reducer";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import s from "../../ModalWindow.module.css";
import styleButton from '../../../Button/Button.module.css';


type CreatePacksPT = {
    activeModalAdd: boolean
    setActive: (active: boolean) => void
};

export const CreateCardModalWindow: React.FC<CreatePacksPT> = React.memo((props) => {

    const {
        setActive
    } = props;

    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");

    const addSaveHandler = useCallback(() => {

        dispatch(addCardTC(id, question, answer))
        setActive(false);

    }, [id, question, answer, dispatch, setActive]);

    const onPressEnterAddCard = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addSaveHandler();
    };

    const onChangeHandlerQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    };
    const onChangeHandlerAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value);
    };

    const onModalHandler = useCallback(() => setActive(false), [setActive]);
    const offActiveModal = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

    return (
        <div className={s.modalContainer} onClick={onModalHandler}>
            <div className={s.modalBlock} onClick={offActiveModal}>
                <div className={s.title}> Enter the question and the answer of the card</div>
                <Input type="text"
                    placeholder='question'
                    required
                    value={question}
                    onChange={onChangeHandlerQuestion}
                    onKeyPress={onPressEnterAddCard}
                    autoFocus
                />
                <Input type="text"
                    placeholder='answer'
                    required
                    value={answer}
                    onChange={onChangeHandlerAnswer}
                    onKeyPress={onPressEnterAddCard}
                    autoFocus
                />
                <div>
                    <Button className={styleButton.button} onClick={addSaveHandler}>Save</Button>
                </div>
               
            </div>
        </div>
    )
});
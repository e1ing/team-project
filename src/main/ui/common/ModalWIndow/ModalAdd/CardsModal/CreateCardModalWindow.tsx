import React, { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCardTC } from "../../../../../bll/cards-reducer/cards-reducer";
import { AppRootStateType } from "../../../../../bll/store";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import s from "../../ModalWindow.module.css";


type CreatePacksPT = {
    activeModalAdd: boolean
    setActive: (active: boolean) => void
};

export const CreateCardModalWindow: React.FC<CreatePacksPT> = React.memo((props) => {

    const {
        activeModalAdd,
        setActive
    } = props;
    debugger
    const dispatch = useDispatch();
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.packs.packCardsId);

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const addSaveHandler = useCallback(() => {

        dispatch(addCardTC(cardsPackId, question, answer));
        setActive(false);
    }, [props, cardsPackId, question, answer]);

    const onPressEnterAddCard = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addSaveHandler();
    };

    const onChangeHandlerQuestion = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    }, []);
    const onChangeHandlerAnswer = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value);
    }, []);

    const onModalHandler = useCallback(() => setActive(false), [props]);
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
                <Button type={"submit"} onClick={addSaveHandler}>okay</Button>
            </div>
        </div>
    )
});
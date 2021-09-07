import React, { ChangeEvent, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { createPacksTC } from "../../../../../bll/packs-reducer/packs-reduser";
import { Button } from "../../../Button/Button";
import { Input } from "../../../Input/Input";
import s from '../../ModalWindow.module.css';
import styleButton from '../../../Button/Button.module.css';

type CreatePacksType = {
    activeModal: boolean
    setActive: (active: boolean) => void
}

export const CreatePackModalWindow: React.FC<CreatePacksType> = React.memo((props) => {

    const {
        activeModal,
        setActive
    } = props;

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('');

    const createCardsHandler = () => {
        dispatch(createPacksTC(title))
        if (title !== '') {
            setTitle('');
        }
        setActive(false);
    };
    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    };
    const activeModalHandler = () => setActive(false);
    const offActiveModal = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

    return (
        <div className={s.modalContainer} onClick={activeModalHandler}>
            <div className={s.modalBlock} onClick={offActiveModal}>
                <Input
                    type="text"
                    value={title}
                    onChange={changeTitleHandler}
                    autoFocus
                />
                <div>
                    <Button className={styleButton.button} type="submit" onClick={createCardsHandler}>Okay</Button>
                </div>

            </div>

        </div>
    )
})
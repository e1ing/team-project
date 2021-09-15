import React, { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCardTC } from '../../../../../bll/cards-reducer/cards-reducer';
import { Button } from '../../../Button/Button';
import s from '../../ModalWindow.module.css';
import styleButton from '../../../Button/Button.module.css';

type DeletPacksPT = {
    packId: string
    setActiveModal: (active: boolean) => void
    cardId: string
};

export const DeletCardModalWindow: React.FC<DeletPacksPT> = React.memo((props) => {

    const {
        setActiveModal,
        packId,
        cardId,
    } = props;

    const dispatch = useDispatch();

    const deletPack = useCallback(() => {
        dispatch(deleteCardTC(packId, cardId));
        setActiveModal(false);
    }, [dispatch, cardId, packId, setActiveModal]);

    const stopModal = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();
    const resetPack = useCallback(() => setActiveModal(false), [setActiveModal]);
    const activeModal = useCallback(() => setActiveModal(false), [setActiveModal]);


    return (
        <div className={s.modalContainer} onClick={activeModal}>
            <div className={s.modalBlock} onClick={stopModal}>
                <div className={s.title}>
                    I hope you thought well?
                </div>
                <div className={s.button}>
                    <Button className={styleButton.button} type={"submit"} onClick={deletPack}>yes</Button>
                    <Button className={styleButton.button} type={"submit"} onClick={resetPack}>no</Button>
                </div>

            </div>
        </div>
    )
});
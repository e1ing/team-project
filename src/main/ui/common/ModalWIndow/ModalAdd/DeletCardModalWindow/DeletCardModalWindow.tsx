import React, { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deletePacksTC } from '../../../../../bll/packs-reducer/packs-reduser';
import { Button } from '../../../Button/Button';
import s from '../../ModalWindow.module.css'

type DeletPacksPT = {
    setActiveModal: (value: boolean) => void
    packId: string
};

export const DeletCardModalWindow: React.FC<DeletPacksPT> = React.memo((props) => {

    const {
        setActiveModal,
        packId,
    } = props;

    const dispatch = useDispatch();

    const deletPack = useCallback(() => {
        dispatch(deletePacksTC(packId));
        setActiveModal(false);
    }, [dispatch, props]);

    const stopModal = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();
    const resetPack = useCallback(() => setActiveModal(false), [props]);
    const activeModal = useCallback(() => setActiveModal(false), [props]);


    return (
        <div className={s.modalContainer} onClick={activeModal}>
            <div className={s.modalBlock} onClick={stopModal}>
                <div className={s.title}>
                    I hope you thought well?
                </div>
                <div className={s.button}>
                    <Button type={"submit"} onClick={deletPack}>yes</Button>
                    <Button type={"submit"} onClick={resetPack}>no</Button>
                </div>

            </div>
        </div>
    )
});
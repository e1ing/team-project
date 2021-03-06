import React, { useCallback, useState, MouseEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../Button/Button';
import { Input } from '../../../Input/Input';
import s from '../../ModalWindow.module.css'
import { updatePacksTC } from '../../../../../bll/packs-reducer/packs-reduser';
import styleButton from '../../../Button/Button.module.css';


type UpdatePacksPT = {
    setUpdateActiveModal: (value: boolean) => void
    packId: string
    name: string
};

export const UpdatePacksModalWindow: React.FC<UpdatePacksPT> = React.memo((props) => {

    const {
        setUpdateActiveModal,
        packId,
        name,
    } = props;

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>(name);

    const updatePack = useCallback(() => {
        dispatch(updatePacksTC(packId, title));
        if (title !== '') {
            setTitle('');
        };

        setUpdateActiveModal(false);
    }, [dispatch, packId, title, setTitle, setUpdateActiveModal]);
    const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const activeModal = useCallback(() => {
        setUpdateActiveModal(false);
    }, [setUpdateActiveModal]);
    const offActiveModal = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();


    return (
        <div className={s.modalContainer} onClick={activeModal}>
            <div className={s.modalBlock} onClick={offActiveModal}>
                <div className={s.title}> Update name of pack</div>
                <Input value={title} onChange={updateTitle} autoFocus />
                <Button className={styleButton.button} onClick={updatePack}>Okay</Button>
            </div>
        </div>
    )
});
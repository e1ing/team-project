import React from "react";
import s from "./ModalAdd.module.css";


type ModalAddPT = {

};

export const ModalAdd: React.FC<ModalAddPT> = React.memo((props) => {
    return (
        <div className={s.modalAdd}>
            <div className={s.modalTop}>
                <h2 className={s.caption}>Add new pack</h2>

            </div>

        </div>
    )
})
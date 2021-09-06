import React from 'react';
import style from './Learn.module.css';
import styleButton from './../common/Button/Button.module.css';


import {Button} from "../common/Button/Button";

import commonStyles from "../app/App.module.css";
import styles from "../Registration/Registartion.module.css";





export const Learn = () => {



    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <h1 className={commonStyles.h1}>Learn "Pack Name"</h1>
                    <h2>Question: how r u</h2>
                </div>
                <div className={style.bottom}>
                    <Button>cansel</Button>
                        <Button  className={styleButton.button}>
                            show answer
                        </Button>
                </div>
            </div>

        </div>
    )
}
import React from 'react';
import { useDispatch } from 'react-redux';
import { passwordReducer } from '../recoveryPassword/recoveryPassword-reducer';
import { CommonFrom } from '../../../main/ui/common/CommonFrom/CommonFrom';

export const RecoveryPassword = () => {

    const dispatch = useDispatch();

    const from = 'test-front-admin <ai73a@wandex.by>';
    const message =
        `
        <div> 
        Please, click on the link and enter a new password
        //ссылка на страницу
        <a href=''>Go to recovery password</a>
        </div>
        `;

        const recoveryHandler = (value: any) => {
            dispatch(passwordReducer(value.email, from, message))
        }

        return (
            <div>
                <CommonFrom type={"Recovery password"} callBack={recoveryHandler}/>
            </div>

        )
}
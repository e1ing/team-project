import React from 'react';
import {Button} from './common/Button/Button';
import Checkbox from './common/Checkbox/Checkbox';
import {Input} from "./common/Input/Input";

export const SuperComponents = () => {
    return (
        <>
            <div>
                <Input/>
            </div>
            <div>
                <Checkbox/>
            </div>
            <div>
                <Button/>
            </div>
        </>
    )
}
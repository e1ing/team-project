import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from "./Button.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonPropsType = DefaultButtonPropsType & {red?: boolean}

export const Button: FC<ButtonPropsType> = ({red, className, ...restProps}) => {
    const finalClassName = `${red ? styles.red : styles.default} ${className}`
    return (
        <button
            className={finalClassName}
            {...restProps}
        >
            Button
        </button>
    )
}
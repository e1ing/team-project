import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./RangeSlider.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


type RangeSliderPropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
};

const RangeSlider: React.FC<RangeSliderPropsType> = (
    {
        type, // достаём и игнорируем чтобы нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e); // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value);
    }

    const finalRangeClassName = `${s.range} ${className ? className : ""}`;

    return (
        <div>
            <span>
            <input
                type={"range"}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
                </span>
            <span>
            <input
                type={"range"}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
                </span>
        </div>
    );
}

export default RangeSlider;

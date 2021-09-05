import React from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../bll/store";
import { CardPacksDataType } from "../../dal/api/api-cards";
import { Pack } from "./Pack/Pack";
import s from "./Packs.module.css";


export const PackListTable: React.FC = React.memo(() => {

    const packs = useSelector<AppRootStateType, Array<CardPacksDataType>>(state => state.packs.cardPacks);


    const pack = packs.map(p => {
        return (
            <tr key={p._id}>
                <Pack pack={p} />
            </tr>
        )
    });

    return (
        <div>
            <table>
                <thead className={s.packsHeader}>
                    <tr>
                        <th>username</th>
                        <th>name pack</th>
                        <th>cards</th>
                        <th>time</th>
                        <th>learn</th>
                        <th>watch</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pack}
                </tbody>
            </table>
        </div>
    )
})
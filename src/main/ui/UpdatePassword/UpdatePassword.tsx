import React from "react";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import { MainTitle } from "../PasswordRecovery/PasswordRecovery";
import s from "./UpdatePassword.module.css"


export const UpdatePassword: React.FC = React.memo(() => {

    return (
        <div className={s.container}>
            <div className={s.block}>
                <MainTitle title={"It-Incubator"} />
                <h2>Create new password?</h2>
                <Input
                    type="password"
                />
                <p className={s.instruction}>
                    Create new password and we will send you
                    further instructions to email
                </p>
                <Button
                    type={"submit"}
                    // disabled={status === "loading"}
                    className={s.button}>
                    Create new password
                </Button>

            </div>
        </div>
    )
})
//сделать пути константами

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Login } from '../Login/Login';
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {PasswordChange} from "../PasswordChange/PasswordChange";
import {Error404} from "../Error404/Error404";
import {SuperComponents} from "../SuperComponents";

export const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
    PASSWORD: "/password",
    PASSWORD_CHANGE: "/password-change",
    SIGN_UP: "/sign-up",
    SUPER_COMPONENTS: "/superComponents",
    PASSWORD_RECOVERY: "/password-recovery"
    // add paths
}
export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={"/"}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.SIGN_UP} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PASSWORD_CHANGE} render={() => <PasswordChange/>}/>
                <Route path={"/404"} render={() => <Error404/>}/>
                <Redirect from={"*"} to={"/404"}/>

                <Route path={PATH.SUPER_COMPONENTS} render={() => <SuperComponents/>}/>
            </Switch>
        </div>
    )
}
//сделать пути константами

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Login } from '../Login';
import {Registration} from "../Registration";
import {Profile} from "../Profile";
import {PasswordRecovery} from "../PasswordRecovery";
import {PasswordChange} from "../PasswordChange";
import {Error404} from "../Error404";
import {SuperComponents} from "../SuperComponents";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={"/"}/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/registration"} render={() => <Registration/>}/>
                <Route path={"/profile"} render={() => <Profile/>}/>
                <Route path={"/password-recovery"} render={() => <PasswordRecovery/>}/>
                <Route path={"/password-change"} render={() => <PasswordChange/>}/>
                <Route path={"/404"} render={() => <Error404/>}/>
                <Redirect from={"*"} to={"/404"}/>

                <Route path={"/supercomponents"} render={() => <SuperComponents/>}/>
            </Switch>
        </div>
    )
}
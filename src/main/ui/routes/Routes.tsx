//сделать пути константами

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { Login } from '../Login/Login';
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {PasswordChange} from "../PasswordChange/PasswordChange";
import {Error404} from "../Error404/Error404";

const login = "/login";
const registration = "/registration";
const profile = "/profile";
const passwordRecovery = "/password-recovery";
const passwordChange = "/password-change";
const error404 = "/404";


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={"/"}/>}/>
                <Route path={login} render={() => <Login/>}/>
                <Route path={registration} render={() => <Registration/>}/>
                <Route path={profile} render={() => <Profile/>}/>
                <Route path={passwordRecovery} render={() => <PasswordRecovery/>}/>
                <Route path={passwordChange} render={() => <PasswordChange/>}/>
                <Route path={error404} render={() => <Error404/>}/>
                <Redirect from={"*"} to={"/404"}/>
            </Switch>
        </div>
    )
}
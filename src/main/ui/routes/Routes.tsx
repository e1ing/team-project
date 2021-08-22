//сделать пути константами

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Registration } from "../Registration/Registration";
import { Profile } from "../Profile/Profile";
import { PasswordChange } from "../PasswordChange/PasswordChange";
import { Error404 } from "../Error404/Error404";
import { SuperComponents } from "../SuperComponents";
import { RestorePassword } from '../PasswordRecovery/PasswordRecovery';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={"/"} />} />
                <Route path={"/login"} render={() => <Login />} />
                <Route path={"/registration"} render={() => <Registration />} />
                <Route path={"/profile"} render={() => <Profile />} />

                <Route path={"/password-recovery"} render={() => <RestorePassword />} />

                <Route path={"/password-change"} render={() => <PasswordChange />} />
                <Route path={"/404"} render={() => <Error404 />} />
                <Redirect from={"*"} to={"/404"} />

                <Route path={"/supercomponents"} render={() => <SuperComponents />} />
            </Switch>
        </div>
    )
}
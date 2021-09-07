import {Redirect, Route, Switch} from 'react-router-dom';
import { Login } from '../Login/Login';
import {Registration} from "../Registration/Registration";
import {Profile} from "../Profile/Profile";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {PasswordChange} from "../PasswordChange/PasswordChange";
import {Error404} from "../Error404/Error404";
import { UpdatePassword } from '../UpdatePassword/UpdatePassword';
import { Packs } from '../Packs/Packs';
import { CardsList } from '../Packs/Cards/CardsList';
import { Learn } from '../Learn/Learn';

export const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
    PASSWORD_CHANGE: "/password-change",
    SIGN_UP: "/sign-up",
    PASSWORD_RECOVERY: "/password-recovery",
    ERROR_404: "/404",
    UPDATE_PASSWORD: "/updatePassword/:token",
    PACKS_LIST: '/packList',
    CARDS: '/cards',
    LEARN: '/learn'
    // add paths
}
export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={"/login"}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.SIGN_UP} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.PASSWORD_CHANGE} render={() => <PasswordChange/>}/>
                <Route path={PATH.ERROR_404} render={() => <Error404/>}/>
                <Route path={PATH.UPDATE_PASSWORD} render={() => <UpdatePassword/>} />
                <Route path={PATH.LEARN} render={() => <Learn/>} />

                <Route path={PATH.PACKS_LIST} render={() => <Packs/>}/>
                <Route path={PATH.CARDS + `/:id`} render={() => <CardsList/>}/>


                <Redirect from={"*"} to={"/404"}/>
            </Switch>
        </div>

    )
}
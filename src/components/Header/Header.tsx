import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserLogin, logOut} from "../../redux/authReducer";

type PropsType = {
    isAuth: boolean
}

const Header: React.FC<PropsType> = ({isAuth}) => {
    const dispatch = useDispatch();
    const onLogOut = () => {
        dispatch(logOut())
    }
    const userLogin = useSelector(getCurrentUserLogin);
    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <div className={s.header__column}>
                    {isAuth &&
                        <NavLink className={`${s.header__button} button`}
                                        to={`contacts`}>Contacts</NavLink>}
                </div>
                <div className={s.header__column}>
                    {isAuth
                    ? <div>{userLogin} - <button onClick={onLogOut}
                                                 className={`${s.header__button} button`}
                        >Logout</button></div>
                    : <NavLink className={`${s.header__button} button`}
                               to={`login`}>Login</NavLink>}

                </div>
            </div>
        </header>
    )
}

export default Header;